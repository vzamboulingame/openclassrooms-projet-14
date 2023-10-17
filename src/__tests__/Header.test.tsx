import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("<Header />", () => {
  test("Header renders properly", () => {
    const wrapper = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(wrapper).toBeTruthy();
  });

  test("Header contains a logo", () => {
    const wrapper = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const logo = wrapper.container.querySelector("svg");
    expect(logo).toBeTruthy();
  });
});
