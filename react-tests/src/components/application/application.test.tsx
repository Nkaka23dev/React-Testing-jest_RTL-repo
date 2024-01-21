import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Test Application component", () => {
  test("It should render correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const termsAndConditionElement = screen.getByRole("checkbox");
    expect(termsAndConditionElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { name: "Section 1" });
    expect(sectionHeading).toBeInTheDocument();

    // get by getlbyabeltext
    const labelElement = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(labelElement).toBeInTheDocument();

    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement).toBeInTheDocument();

    // get getbyPlaceholderText
    const placeHolderElement = screen.getByPlaceholderText("Fullname");
    expect(placeHolderElement).toBeInTheDocument();

    //getByText
    const conditionElement = screen.getByText("Note: all field are mondatory.");
    expect(conditionElement).toBeInTheDocument();
  });
});
