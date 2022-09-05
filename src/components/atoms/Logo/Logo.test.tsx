import {render, screen} from '@testing-library/react'
import { LogoComponent } from './Logo'

describe("Display Logo", () => {
    test("Should display medium logo", () => {
        render(<LogoComponent classing="medium"/>)
        const logo = screen.getByTestId("logo")
        expect(logo).toBeInTheDocument()
    })
    test("Should display small logo", () => {
        render(<LogoComponent classing="small"/>)
        const logo = screen.getByTestId("logo")
        expect(logo).toBeInTheDocument()
    })
})