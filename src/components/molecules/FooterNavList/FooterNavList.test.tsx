import {render, screen} from '@testing-library/react'
import { FooterNavListComponent } from './FooterNavList';

describe("Display FooterNavList", () => {
    test("Should display FooterNavList editorial", () => {
        render(<FooterNavListComponent title="Hello" data={["Hello","Hello"]}/>)
        const component = screen.getByTestId("footerNavList");
        expect(component).toBeInTheDocument();
    })
    test("Should display FooterNavList general", () => {
        render(<FooterNavListComponent title="Hello" data={["Hello","Hello"]} />)
        const component = screen.getByTestId("footerNavList");
        expect(component).toBeInTheDocument();
    })
})