import { render, screen } from "@testing-library/react";
import { getBooks } from "./../../../data/Data";
import { BrowserRouter } from "react-router-dom";
import { BookDetailsComponenet } from "./BookDetails";
import userEvent from "@testing-library/user-event";

const handleChange = jest.fn();

const Test = (args: any) => {
  return (
    <BrowserRouter>
      <BookDetailsComponenet {...args} />
    </BrowserRouter>
  );
};
describe("Display BookDetailsComponent", () => {
  test("Should display BookDetailsComponent 0", () => {
    render(<Test book={getBooks()[0]} changeBookStatus={handleChange} />);
    const component = screen.getByTestId("bookDetails");
    expect(component).toBeInTheDocument();
    const top = screen.getByTestId("top");
    expect(top).toBeInTheDocument();
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    const tag = screen.getByTestId("tag");
    expect(tag).toBeInTheDocument();
    const button = screen.getAllByRole("button");
    userEvent.click(button[1]);
    expect(handleChange).toHaveBeenCalled();
  });
  test("Should display BookDetailsComponent 1", () => {
    render(<Test book={getBooks()[1]} changeBookStatus={handleChange} />);
    const component = screen.getByTestId("bookDetails");
    expect(component).toBeInTheDocument();
  });
  test("Should display BookDetailsComponent 2", () => {
    render(<Test book={getBooks()[2]} changeBookStatus={handleChange} />);
    const component = screen.getByTestId("bookDetails");
    expect(component).toBeInTheDocument();
  });
});
