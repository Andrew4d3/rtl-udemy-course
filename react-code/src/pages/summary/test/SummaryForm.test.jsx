import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("SummaryForm component", () => {
  it("should have the terms and conditions checkbox unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: "Confirm order" });

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable/disable button when checkbox is checked/unchecked", async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: "Confirm order" });

    await user.click(checkbox);

    expect(button).toBeEnabled();

    await user.click(checkbox);

    expect(button).toBeDisabled();
  });

  test("popover responds to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });

  /* What this code does? */
});
