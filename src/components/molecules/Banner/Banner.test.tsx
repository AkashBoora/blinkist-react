import {render, screen} from '@testing-library/react'
import { BannerComponent } from './Banner'

describe("Display Banner", () => {
    test("Should display banner", () => {
        render(<BannerComponent/>)
        const component = screen.getByTestId("banner")
        expect(component).toBeInTheDocument()
    })
})