import {render} from '@testing-library/react'
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
        render(<Test />);

    })
})