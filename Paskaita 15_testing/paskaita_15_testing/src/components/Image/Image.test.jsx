import Image from "./Image";
import { render, screen } from "@testing-library/react";

describe("image component", () => {
  it("should render without errors", () => {
    render(<Image />);
  });

  it("should render alt text when url is invalid", () => {
    render(<Image alt={"test"} />);
    const imageElement = screen.getByAltText("test");
    expect(imageElement.alt).toBe("test");
  });

  it("should countain valid src", () => {
    render(<Image src={"./image/Cat.jpg"} alt={"test"} />);
    const imageElement = screen.getByAltText("test");
    expect(imageElement.src).toContain("Cat.jpg");
  });
});
