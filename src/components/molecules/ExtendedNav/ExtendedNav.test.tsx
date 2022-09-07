import {render, screen} from '@testing-library/react'
import { ExtendNavComponent } from './ExtendedNav';

describe("Display ExtendedNav", () => {
    test("Should display ExtendedNav", () => {
        render(<ExtendNavComponent/>)
        const component = screen.getByTestId("extendedNav");
        expect(component).toBeInTheDocument();
    })
})