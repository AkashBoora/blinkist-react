import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { MyLibraryPageComponent } from './MyLibrary';


const Test = (args:any)=>{
    return(
    <BrowserRouter>
    <MyLibraryPageComponent {...args}/>
    </BrowserRouter>)
}
describe("Display MyLibraryPageComponent", () => {
    test("Should display MyLibraryPageComponent", () => {
        render(<Test />);
    })
})