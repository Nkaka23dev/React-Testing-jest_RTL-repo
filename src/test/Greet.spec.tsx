import { render } from "@testing-library/react";
import Greet from "../components/Greet";

test("greet renders correctly", () => {
  render(<Greet />);
});
