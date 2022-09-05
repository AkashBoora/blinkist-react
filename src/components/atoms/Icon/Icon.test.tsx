import {render, screen} from '@testing-library/react'
import Search from '../../../assets/icons/search.svg'
import { IconComponent } from './Icon'

describe("Display Icon", () => {
    test("Should display Icon", () => {
        render(<IconComponent src={Search} />)
        const icon = screen.getByTestId("icon")
        expect(icon).toBeInTheDocument()
    })
})