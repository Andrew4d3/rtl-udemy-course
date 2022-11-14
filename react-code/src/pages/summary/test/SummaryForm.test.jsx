import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("SummaryForm component", () => {
  it("should have the terms and conditions checkbox unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: "Confirm order" });

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable/disable button when checkbox is checked/unchecked", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: "Confirm order" });

    fireEvent.click(checkbox);

    expect(button).toBeEnabled();

    fireEvent.click(checkbox);

    expect(button).toBeDisabled();
  });
});

/* Explain what these two tests are doing */
