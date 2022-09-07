import {fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { HeaderComponent } from './Header';

const Test = () => {
    return(
    <BrowserRouter>
        <HeaderComponent/>
    </BrowserRouter>
    )
}

describe("Display Header", () => {
    test("Should display Footer", () => {
        render(<Test/>)
        const component = screen.getByTestId("header");
        expect(component).toBeInTheDocument();
        const avatar = screen.getByTestId("avatar");
        fireEvent.click(avatar);
        const logout = screen.getByText("Log Out");
        expect(logout).toBeInTheDocument();
        const explore = screen.getByText("Explore");
        fireEvent.click(explore);
        const politics = screen.getByText("Politics");
        expect(politics).toBeInTheDocument();
    })
})