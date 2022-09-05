import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { RootTemplate } from './Template';


const Test = (args:any)=>{
    return(
    <BrowserRouter>
    <RootTemplate {...args}/>
    </BrowserRouter>)
}
describe("Display RootTemplate", () => {
    test("Should display RootTemplate", () => {
        render(<Test />)
        const component = screen.getByTestId("rootTemplate");
        expect(component).toBeInTheDocument();
    })
})