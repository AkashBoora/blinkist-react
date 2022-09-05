import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { CategoryResultsComponent } from './CategoryResults';


const Test = (args:any)=>{
    return(
    <BrowserRouter>
    <CategoryResultsComponent {...args}/>
    </BrowserRouter>)
}
describe("Display BookDetailsComponenet", () => {
    test("Should display BookDetailsComponenet", () => {
        render(<Test />)
        const component = screen.getByTestId("cateoryResults");
        expect(component).toBeInTheDocument();
    })
})