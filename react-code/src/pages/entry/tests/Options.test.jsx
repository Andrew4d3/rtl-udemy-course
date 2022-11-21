import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("displays image for each scoop option from server", () => {
  render(<Options optionType="scoops" />);

  const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLenght(2);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual("Chocale scoop", "Vanilla scoop");
});

/* Explain what we did there */
