import {render, screen} from '@testing-library/react'
import { IconAndTextComponent } from './IconAndText'
import search from "./../../../assets/icons/search.svg"

describe("Display IconAndTet", () => {
    test("Should display IconAndTet", () => {
        render(<IconAndTextComponent title="Hello" iconSource={search}/>)
        const component = screen.getByTestId("iconAndText");
        expect(component).toBeInTheDocument();
    })
})