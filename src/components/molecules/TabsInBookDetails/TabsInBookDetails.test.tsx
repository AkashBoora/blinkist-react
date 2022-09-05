import {render, screen} from '@testing-library/react'
import { TabsBookDetailComponent } from './TabsInBookDetailsTab'

describe("Display Tabs", () => {
    test("Should display Tabs", () => {
        render(<TabsBookDetailComponent/>)
        const component = screen.getByTestId("tabs");
        expect(component).toBeInTheDocument();
    })
})