import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates when clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent('Change to red');
});

test("initial conditions", () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: "Change to blue"});
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test("clicked conditions", () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  const colorButton = screen.getByRole('button');
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
})
