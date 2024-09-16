import { describe, it, expect, beforeEach } from "vitest";
import {
  renderTestComponent,
  assertElementIsInTheDocumentByTestId,
  assertElementIsInTheDocumentByText,
  clickOnElementByTestIdAsync,
} from "../../test/utils";
import LogoutButton from "./LogOut";

const logoutButtonTestId = "logout-button";

describe("LogoutButton", () => {
  beforeEach(() => {
    renderTestComponent(<LogoutButton />);
  });

  it("deve renderizar o componente Logout", () => {
    assertElementIsInTheDocumentByTestId(logoutButtonTestId);
  });

  it('deve exibir o texto "Sair" no botão de logout', () => {
    assertElementIsInTheDocumentByText("Sair");
  });

  it("Deve redirecionar para a página de login após clicar no botão de logout", async () => {
    // Simula o clique no botão de logout
    await clickOnElementByTestIdAsync(logoutButtonTestId);

    // Verifica se o redirecionamento aconteceu corretamente
    expect(window.location.pathname).toBe("/Login");
  });
});
