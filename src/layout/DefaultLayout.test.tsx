// src/components/layout/DefaultLayout.test.tsx
import { describe, it, beforeEach } from "vitest";
import {
  renderTestComponent,
  assertElementIsInTheDocumentByTestId,
  assertElementIsInTheDocumentByText,
  clickOnElementByTextAsync,
} from "../test/utils"; // Ajuste o caminho para a pasta correta
import DefaultLayout from "./DefaultLayout";

const clienteLinkText = "Clientes";
const petLinkText = "Pets";
const logoutButtonTestId = "logout-button";

describe("DefaultLayout", () => {
  beforeEach(() => {
    renderTestComponent(
      <DefaultLayout>
        <div data-testid="children-content">Conteúdo Componente</div>
      </DefaultLayout>
    );
  });

  it("Deve renderizar o link Cliente", () => {
    assertElementIsInTheDocumentByText(clienteLinkText);
    assertElementIsInTheDocumentByText(petLinkText);
    assertElementIsInTheDocumentByTestId(logoutButtonTestId);
    assertElementIsInTheDocumentByTestId("children-content");
  });

  it("Deve redirecionar para a página de Clientes após clique no link Cliente", async () => {
    //Cliente
    await clickOnElementByTextAsync(clienteLinkText);
    expect(window.location.pathname).toBe("/Clientes");
    //Pet
    await clickOnElementByTextAsync(petLinkText);
    expect(window.location.pathname).toBe("/Pets");
  });
});
