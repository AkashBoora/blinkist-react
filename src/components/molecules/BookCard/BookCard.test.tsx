import { render, screen } from "@testing-library/react";
import { getBooks } from "./../../../data/Data";
import { BrowserRouter } from "react-router-dom";
import { BookCardComponent } from "./BookCard";

const handleChange = jest.fn();

const Test = (args: any) => {
  return (
    <BrowserRouter>
      <BookCardComponent {...args} />
    </BrowserRouter>
  );
};
describe("Display BookCardComponent", () => {
  test("Should display BookCardComponent myLibrary typecard", () => {
    render(<Test  book={getBooks()[0]} typeOfCard="myLibrary" isCategoryTab={true} changeBookStatus={handleChange} />);
    const component = screen.getByTestId("bookCard");
    expect(component).toBeInTheDocument();
  });

  test("Should display BookCardComponent reading typecard", () => {
    render(<Test  book={getBooks()[0]} typeOfCard="reading" isCategoryTab={false} changeBookStatus={handleChange} />);
    const component = screen.getByTestId("bookCard");
    expect(component).toBeInTheDocument();
  });

  test("Should display BookCardComponent finished typecard", () => {
    render(<Test  book={getBooks()[1]} typeOfCard="finished" isCategoryTab={false} changeBookStatus={handleChange} />);
    const component = screen.getByTestId("bookCard");
    expect(component).toBeInTheDocument();
  });

  test("Should display BookCardComponent reading typecard in explore page", () => {
    render(<Test  book={getBooks()[0]} typeOfCard="reading" isCategoryTab={true} changeBookStatus={handleChange} />);
    const component = screen.getByTestId("bookCard");
    expect(component).toBeInTheDocument();
  });

  test("Should display BookCardComponent finished typecard in explore page", () => {
    render(<Test  book={getBooks()[0]} typeOfCard="finished" isCategoryTab={true} changeBookStatus={handleChange} />);
    const component = screen.getByTestId("bookCard");
    expect(component).toBeInTheDocument();
  });
});
