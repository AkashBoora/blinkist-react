import {render, screen} from '@testing-library/react'
import { HomePageTabComponent } from './HomePageTabs';
import {getBooks} from "../../../data/Data"
import { BrowserRouter } from 'react-router-dom';

const handleChange = () =>{}

const Test = (args:any)=>{
    return(
    <BrowserRouter>
    <HomePageTabComponent {...args}/>
    </BrowserRouter>)
}
describe("Display Home Page Tabs", () => {
    test("Should display Home Page Tabs", () => {
        render(<Test books={getBooks()} changeBookStatus={handleChange}/>)
        const component = screen.getByTestId("homePageTab");
        expect(component).toBeInTheDocument();
    })
})