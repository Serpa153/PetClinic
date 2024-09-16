import { describe, it, beforeEach } from "vitest";
import {
  renderTestComponent,
  assertElementIsInTheDocumentByTestId,
} from "../../test/utils";
import ClientPage from "./ClientPage";

// Identificadores para data-testid
const clientPageTitleTestId = "clientpage-title";
const clientPageTextTestId = "clientpage-text";

describe("ClientPage", () => {
  beforeEach(() => {
    renderTestComponent(<ClientPage />);
  });

  it("deve renderizar o título 'Dados de Cliente'", () => {
    assertElementIsInTheDocumentByTestId(clientPageTitleTestId);
    assertElementIsInTheDocumentByTestId(clientPageTextTestId);
  });
});
