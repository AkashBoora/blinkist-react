import { render, screen } from "@testing-library/react"
import { ButtonComponent } from "./Button";
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



describe("Button Test", () => {
    test("Button with start icon and text", () => {
        render(<ButtonComponent startIcon={<ArrowForwardIcon />} children="Add to library"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    });

    test("Button with end icon and text", () => {
        render(<ButtonComponent endIcon={<AddIcon />} children="Add to library"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    });

    test("Button with Text", () => {
        render(<ButtonComponent children="Connect" />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    test("Button with button1", () => {
        render(<ButtonComponent children="Connect" className="button1"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    test("Button with button2", () => {
        render(<ButtonComponent children="Connect" className="button2"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    test("Button with button3", () => {
        render(<ButtonComponent children="Connect" className="button3"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    test("Button with button4", () => {
        render(<ButtonComponent children="Connect" className="button4"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })

    test("Button with button5", () => {
        render(<ButtonComponent children="Connect" className="button5"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    })
})