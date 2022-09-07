import {render, screen} from '@testing-library/react'
import { TypographyComponent } from './Typography'

describe("Display Typography", () => {
    test("Should display medium logo", () => {
        render(<TypographyComponent children="Hello"/>)
        const component = screen.getByTestId("typography")
        expect(component).toBeInTheDocument()
        expect(component).toHaveTextContent("Hello")
    })
})