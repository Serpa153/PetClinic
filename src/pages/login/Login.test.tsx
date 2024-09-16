import { describe, it, vi, expect } from "vitest";
import {
  renderTestComponent,
  assertElementIsInTheDocumentByTestId,
  clickOnElementByTestIdAsync,
} from "../../test/utils";
import Login from "./Login";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const loginSubmitButtonTestId = "login-submit-button";
const emailInputTestId = "login-email-input";
const passwordInputTestId = "login-password-input";

describe("Login", () => {
  beforeEach(() => {
    renderTestComponent(<Login />);
  });

  it("deve renderizar o componente Login", () => {
    assertElementIsInTheDocumentByTestId("login-title");
    assertElementIsInTheDocumentByTestId(emailInputTestId);
    assertElementIsInTheDocumentByTestId(passwordInputTestId);
    assertElementIsInTheDocumentByTestId(loginSubmitButtonTestId);
  });

  it("deve emitir um alerta ao usuário que tentar autenticar sem preencher os campos", async () => {
    const alertMock = vi.spyOn(window, "alert");

    await clickOnElementByTestIdAsync(loginSubmitButtonTestId);

    expect(alertMock).toHaveBeenCalledWith("Preencha todos os campos!");
  });

  it("deve emitir um alerta para credenciais inválidas", async () => {
    const alertMock = vi.spyOn(window, "alert");

    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);

    await userEvent.type(emailInput, "invalid@example.com");
    await userEvent.type(passwordInput, "wrongpassword");

    await clickOnElementByTestIdAsync(loginSubmitButtonTestId);

    expect(alertMock).toHaveBeenCalledWith("Credenciais inválidas!");
  });

  it("Deve redirecionar para a página Home após login com credenciais válidas", async () => {
    const fakeEmail = "user1@example.com";
    const fakePassword = "password1";
    const fakeToken = "123456";

    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);

    await userEvent.type(emailInput, fakeEmail);
    await userEvent.type(passwordInput, fakePassword);

    // Simula o clique no botão de submit
    await clickOnElementByTestIdAsync(loginSubmitButtonTestId);

    // Verifica se o token foi armazenado corretamente no localStorage
    const storedToken = localStorage.getItem("token");
    expect(storedToken).toBe(fakeToken);

    // Verifica se o redirecionamento aconteceu corretamente
    expect(window.location.pathname).toBe("/");
  });
});
