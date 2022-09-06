import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BookDetailsComponenet } from "./BookDetails";

const Test = (args: any) => {
  return (
    <BrowserRouter>
      <BookDetailsComponenet {...args} />
    </BrowserRouter>
  );
};
describe("Display BookDetailsComponent", () => {
  test("Should display BookDetailsComponent 0", () => {
    render(<Test />);
    const component = screen.getByTestId("bookDetails");
    expect(component).toBeInTheDocument();
  });
});