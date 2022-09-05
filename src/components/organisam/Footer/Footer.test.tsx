import {render, screen} from '@testing-library/react'
import { FooterComponent } from './Footer';

describe("Display Footer", () => {
    test("Should display Footer", () => {
        render(<FooterComponent/>)
        const component = screen.getByTestId("footer");
        expect(component).toBeInTheDocument();
    })
})