import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("should render", () => {
    render(<Card />);
  });

  it("should render title", () => {
    render(<Card />);
    // const title = screen.getByRole("heading", { name: "Visas parazitas" });
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });

  it("should render buttons", () => {
    render(<Card />);
    // const button = screen.getByRole("div", { name: "View on Twitter" });
    // expect(button).toBeInTheDocument();
    const link = screen.getByRole("link", { name: "Twitter" });
    expect(link.textContent).toContain("Twitter");

    const link2 = screen.getByRole("link", { name: "Facebook" });
    expect(link2.textContent).toContain("Facebook");
  });
});
