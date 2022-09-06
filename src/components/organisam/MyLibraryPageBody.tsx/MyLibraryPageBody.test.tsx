import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MyLibraryPageBodyComponent } from "./MyLibraryPageBody";


const Test = (args: any) => {
  return (
    <BrowserRouter>
      <MyLibraryPageBodyComponent {...args} />
    </BrowserRouter>
  );
};
describe("Display BookDetailsComponent", () => {
  test("Should display BookDetailsComponent 0", () => {
    render(<Test />);
    const component = screen.getByTestId("myLibraryPageBodyComponent");
    expect(component).toBeInTheDocument();
  });
});