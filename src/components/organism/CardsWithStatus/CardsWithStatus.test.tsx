import {render, screen} from '@testing-library/react'
import {getBooks} from "../../../data/Data"
import { BrowserRouter } from 'react-router-dom';
import { CardsWithStatusComponent } from './CardsWithStatus';
import userEvent from '@testing-library/user-event';

const handleChange = jest.fn();

const Test = (args:any)=>{
    return(
    <BrowserRouter>
    <CardsWithStatusComponent {...args}/>
    </BrowserRouter>)
}
describe("Display CardsWithStatusComponent", () => {
    test("Should display CardsWithStatusComponent", () => {
        render(<Test books={getBooks()} status="reading" changeBookStatus={handleChange} isCategoryTab={false}/>)
        const component = screen.getByTestId("cardsWithState");
        expect(component).toBeInTheDocument();
        const button = screen.getAllByRole("button");
        userEvent.click(button[1]);
        expect(handleChange).toHaveBeenCalled();
    })

    test("Should display CardsWithStatusComponent library", () => {
        render(<Test books={getBooks()} status="myLibrary" changeBookStatus={handleChange} isCategoryTab={true}/>)
        const component = screen.getByTestId("cardsWithState");
        expect(component).toBeInTheDocument();
    })

    test("Should display CardsWithStatusComponent finished", () => {
        render(<Test books={getBooks()} status="finished" changeBookStatus={handleChange} isCategoryTab={false}/>)
        const component = screen.getByTestId("cardsWithState");
        expect(component).toBeInTheDocument();
    })

    test("Should display CardsWithStatusComponent category politics", () => {
        render(<Test books={getBooks()} category="politics" changeBookStatus={handleChange} isCategoryTab={true}/>)
        const component = screen.getByTestId("cardsWithState");
        expect(component).toBeInTheDocument();
    })

    test("Should display CardsWithStatusComponent category politics search", () => {
        render(<Test books={getBooks()} category="politics" changeBookStatus={handleChange} seachText="The" isCategoryTab={true}/>)
        const component = screen.getByTestId("cardsWithState");
        expect(component).toBeInTheDocument();
    })

})