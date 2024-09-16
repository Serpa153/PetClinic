import { render, RenderOptions, screen } from "@testing-library/react";
import { AuthProvider } from "../auth/Auth";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

// Função de renderização de teste com configuração padrão
const renderTestComponent = (
  ui: React.ReactElement,
  options: RenderOptions = {}
) => {
  window.alert = vi.fn(() => {}); // Mock do alert para evitar erros

  return render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    ),
    ...options,
  });
};

// Funções utilitárias para testes
const assertElementIsInTheDocumentByTestId = (testId: string) => {
  expect(screen.getByTestId(testId)).toBeInTheDocument();
};

const assertElementIsInTheDocumentByText = (text: string) => {
  expect(screen.getByText(text)).toBeInTheDocument();
};

const clickOnElementByTestIdAsync = async (testId: string) => {
  const element = screen.getByTestId(testId);
  await userEvent.click(element);
};

// Nova função: Simula um clique em um elemento com o texto fornecido
const clickOnElementByTextAsync = async (text: string) => {
  const element = screen.getByText(text);
  await userEvent.click(element);
};

export {
  renderTestComponent,
  assertElementIsInTheDocumentByTestId,
  assertElementIsInTheDocumentByText,
  clickOnElementByTestIdAsync,
  clickOnElementByTextAsync, //função para clique por texto
};
