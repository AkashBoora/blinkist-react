import {render, screen} from '@testing-library/react'
import {getBooks} from "./../../../data/Data"
import { BrowserRouter } from 'react-router-dom';
import { BookDetailsPageComponent } from './BookDetails';

const handleChange = () =>{}

const Test = (args:any)=>{
    return(
    <BrowserRouter>
    <BookDetailsPageComponent {...args}/>
    </BrowserRouter>)
}
describe("Display BookDetailsComponenet", () => {
    test("Should display BookDetailsComponenet", () => {
        render(<Test book={getBooks()[0]} changeBookStatus={handleChange}/>)
        const component = screen.getByTestId("bookDetailsPage");
        expect(component).toBeInTheDocument();
    })
})