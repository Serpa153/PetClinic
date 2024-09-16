import { describe, it, beforeEach } from "vitest";
import {
  renderTestComponent,
  assertElementIsInTheDocumentByTestId,
} from "../../test/utils";
import PetPage from "./PetPage";

// Identificadores para data-testid
const petPageTitleTestId = "petpage-title";
const petPageTextTestId = "petpage-text";

describe("PetPage", () => {
  beforeEach(() => {
    renderTestComponent(<PetPage />);
  });

  it("Deve renderizar testos da página", () => {
    assertElementIsInTheDocumentByTestId(petPageTitleTestId);
    assertElementIsInTheDocumentByTestId(petPageTextTestId);
  });
});
