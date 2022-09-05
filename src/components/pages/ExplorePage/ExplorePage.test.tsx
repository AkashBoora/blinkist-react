import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { ExplorePageComponent } from './ExplorePage';


const Test = (args:any)=>{
    return(
    <BrowserRouter>
    <ExplorePageComponent {...args}/>
    </BrowserRouter>)
}
describe("Display ExplorePageComponent", () => {
    test("Should display ExplorePageComponent", () => {
        render(<Test />)
        const component = screen.getByTestId("explorePageComponent");
        expect(component).toBeInTheDocument();
        const bookData = screen.getByTestId("bookData");
        expect(bookData).toBeInTheDocument();

    })
})