import { describe, it, beforeEach } from "vitest";
import {
  renderTestComponent,
  assertElementIsInTheDocumentByTestId,
} from "../../test/utils";
import Home from "./Home";

// Identificadores para data-testid
const homeTitleTestId = "home-title";
const homeTextTestId = "home-text";

describe("Home", () => {
  beforeEach(() => {
    renderTestComponent(<Home />);
  });

  it("Deve renderizar textos", () => {
    assertElementIsInTheDocumentByTestId(homeTitleTestId);
    assertElementIsInTheDocumentByTestId(homeTextTestId);
  });
});
