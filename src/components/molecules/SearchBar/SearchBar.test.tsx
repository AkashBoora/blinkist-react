import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { SearchBarComponent } from './SearchBar'


const mockCallback = jest.fn();

describe("Display SearchBar", () => {
    test("Should display SearchBar", () => {
        
        render(<SearchBarComponent handleChange={mockCallback}/>)
        const component = screen.getByTestId("searchBar");
        expect(component).toBeInTheDocument();
        const input = screen.getByTestId("input");
        userEvent.type(input,"Eric");
        expect(mockCallback).toHaveBeenCalled();
    })
})