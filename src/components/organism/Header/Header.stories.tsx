import { BrowserRouter } from "react-router-dom";
import { HeaderComponent } from "./Header";

export default {
  title: "Organisms/Header",
  component: HeaderComponent,
};

export const Header = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
    </BrowserRouter>
  )
};
