import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { ExplorePageBodyComponent } from "./ExplorePageBody";

const Test = (args: any) => {
  return (
    <BrowserRouter>
      <ExplorePageBodyComponent {...args} />
    </BrowserRouter>
  );
};
describe("Display BookDetailsComponent", () => {
  test("Should display BookDetailsComponent 0", () => {
    render(<Test />);
    const component = screen.getByTestId("explorePageBodyComponent");
    expect(component).toBeInTheDocument();
    const input = screen.getByTestId("input");
    userEvent.type(input, "Eric");
  });
});
