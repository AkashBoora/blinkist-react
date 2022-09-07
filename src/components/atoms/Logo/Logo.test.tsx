import {render, screen} from '@testing-library/react'
import { LogoComponent } from './Logo'

describe("Display Logo", () => {
    test("Should display medium", () => {
        render(<LogoComponent/>)
        const logo = screen.getByTestId("logo")
        expect(logo).toBeInTheDocument()
    })
})