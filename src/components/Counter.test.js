import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

function clickIncrease(buttonTobeClicked, numOfClicks) {
  for (let i = 0; i < numOfClicks; i++) {
    fireEvent.click(buttonTobeClicked);
  }
}

describe("Test counter", () => {
  it("should start from 0", () => {
    const { getByText } = render(<Counter />);
    const linkElement = getByText(/0/);
    expect(linkElement).toBeInTheDocument();
  });

  it("should have value 1 after first fire", () => {
    const { getByText } = render(<Counter />);
    const increaseButton = getByText("Increase count");
    fireEvent.click(increaseButton);
    const value = getByText("1");
    expect(value).toBeInTheDocument();
  });

  it("should have value Fizz after when click 3 times", () => {
    const { getByText } = render(<Counter />);
    const increaseButton = getByText("Increase count");
    clickIncrease(increaseButton, 3);

    const value = getByText("Fizz");
    expect(value).toBeInTheDocument();
  });

  it("should have value Fizz after when click 5 times", () => {
    const { getByText } = render(<Counter />);
    const increaseButton = getByText("Increase count");
    clickIncrease(increaseButton, 5);
    const value = getByText("Fuzz");
    expect(value).toBeInTheDocument();
  });

  it("should have value Fizz after when click 15 times", () => {
    const { getByText } = render(<Counter />);
    const increaseButton = getByText("Increase count");
    clickIncrease(increaseButton, 15);
    const value = getByText("FizzFuzz");
    expect(value).toBeInTheDocument();
  });
});
