import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react";

describe("counter component", () => {
  it("should render without errors", () => {
    render(<Counter startingValue={5} />);
  });

  it("should render starting number", () => {
    render(<Counter startingValue={7} />);
    const numberElement = screen.getByTestId("counter").textContent;
    expect(numberElement).toBe("Counter: 7");
  });

  it("should render default value when no prop given", () => {
    render(<Counter />);
    const numberElement = screen.getByTestId("counter").textContent;
    expect(numberElement).toBe("Counter: 0");
  });

  it("should render default value when prop is null", () => {
    render(<Counter startingValue={null} />);
    const numberElement = screen.getByTestId("counter").textContent;
    expect(numberElement).toBe("Counter: 0");
  });

  it("shout increment number by one when increment button is clicked", () => {
    render(<Counter startingValue={5} />);
    const incrementButton = screen.getByText("Increment");
    const numberElement = screen.getByTestId("counter").textContent;
    expect(numberElement).toBe("Counter: 5");

    fireEvent.click(incrementButton);
    const numberElement2 = screen.getByTestId("counter").textContent;
    expect(numberElement2).toBe("Counter: 6");
  });
});
