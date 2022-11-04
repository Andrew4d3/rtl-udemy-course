import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  const { container } = render(<App />);
  logRoles(container); // Explain this method

  const colorButton = screen.getByRole('button', { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test("button turns blue when clicked", () => {

})

