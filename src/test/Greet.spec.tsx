import { render, screen } from "@testing-library/react";
import Greet from "../components/Greet";

test("greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello, There!");
  expect(textElement).toBeInTheDocument();
});
