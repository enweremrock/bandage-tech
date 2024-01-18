import { ReduxProvider } from "@/lib/test-utils";
import Home from "@/pages";
import { reduxStore } from "@/redux";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";

const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("Home", () => {
  beforeEach(() => {
    render(
      <ReduxProvider reduxStore={reduxStore}>
        <Home />
      </ReduxProvider>
    );
  });
  describe("Nav header", () => {
    it("should have a logo ", () => {
      const elem = screen.getByRole("heading", { name: /logo/i });

      expect(elem.textContent).toEqual("Bandage");
    });

    it("should navigation items", () => {
      const ulElem = screen.getByRole("list", { name: /navigation-item/i });
      //const ulElem = screen.getByTestId("navigation-item");
      const { getAllByRole } = within(ulElem);
      const liElems = getAllByRole("listitem");

      const liTextContent = liElems.map((item) => item.textContent?.trim());

      expect(liTextContent).toEqual([
        "Home",
        "Shop",
        "About",
        "Blog",
        "Contact",
        "Pages",
      ]);
    });
  });

  describe("Hero page", () => {
    it("should list of furnitures", () => {
      const elem = screen.getAllByText("FURNITURE");
      expect(elem.length).toBe(4);
    });
  });
});
