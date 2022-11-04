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

/* 
What are we doing here?

1. Rendering the app
2. Getting element to be tested using getByRole
3. Asserting that element has correct backgroundColor
4. Clicking element
5. Asserting that element has changed its color to "blue"

*/

