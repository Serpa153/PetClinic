import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Typography, Box, Button } from "@mui/material";
import { useAuth } from "../../auth/Auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const { login, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/"); // Redireciona para a página inicial se o usuário estiver autenticado
    }
  }, [token, navigate]);

  // Mockar lista de usuários
  const users = [{ email: "user1@example.com", password: "password1" }];

  // Atualiza o estado do email com o valor do input quando o usuário digita
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Atualiza o estado da senha com o valor do input quando o usuário digita
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Lida com o envio do formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Verifica preenchimento dos campos
    if (!email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    // Verifica se o usuário existe
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      alert("Credenciais inválidas!");
      return;
    }

    const fakeToken = "123456"; // Token fictício para testes
    login(fakeToken);
    navigate("/"); // Redireciona para a página Home após o login
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            padding: 6,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Quicksand, sans-serif",
              fontWeight: "600",
            }}
            data-testid="login-title"
          >
            LOGIN
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="dense"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
              inputProps={{
                "data-testid": "login-email-input",
              }}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              inputProps={{
                "data-testid": "login-password-input",
              }}
            />
            {/* Botão Entrar */}
            <Button
              data-testid="login-submit-button"
              type="submit"
              fullWidth
              variant="contained"
              size="medium"
              sx={{
                mt: 3,
                mb: 2,
                fontFamily: "Quicksand, sans-serif",
                backgroundColor: "blue",
                color: "white",
                "&:hover": {
                  backgroundColor: "700",
                },
              }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
