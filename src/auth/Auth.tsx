import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

// Define a interface para o contexto de autenticação
interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void; // Função para fazer logout e limpar o token
}

// Cria o contexto de autenticação com valor inicial como indefinido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor do contexto de autenticação
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null); // Estado para armazenar o token

  useEffect(() => {
    const storedToken = localStorage.getItem("token"); // Obtém o token armazenado
    const tokenExpiry = localStorage.getItem("tokenExpiry"); // Obtém o tempo de expiração do token
    const currentTime = Date.now();

    // Verifica se o token existe e não expirou
    if (storedToken && tokenExpiry && parseInt(tokenExpiry) > currentTime) {
      setToken(storedToken);
    } else {
      // Remove o token e a expiração se o token não for válido
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
    }
  }, []);

  // Função para fazer login
  const login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    localStorage.setItem("tokenExpiry", String(Date.now() + 3600000)); // 60 minutos em milissegundos
  };

  // Função para fazer logout
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
  };

  // Fornece o contexto com o valor atual para os filhos
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children} {/* Renderiza os filhos dentro do contexto */}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  // Lança um erro se o contexto não estiver disponível
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
