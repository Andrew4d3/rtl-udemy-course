import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: "Change to blue" });

  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
});

/*
  What are we doing here?
  1. Rendering the app
  2. In the screen, getting the element which role is "button"
  3. Expecting that element we retrive in the last step to have a background color of red
*/

test("button turns blue when clicked", () => {

})

