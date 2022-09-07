import { BrowserRouter } from "react-router-dom";
import { MyLibraryPageBodyComponent } from "./MyLibraryPageBody";

export default {
  title: "Organisms/MyLibraryPageBody",
  component: MyLibraryPageBodyComponent,
};

export const MyLibraryPageBody = () => {
  return (
    <BrowserRouter>
      <MyLibraryPageBodyComponent />
    </BrowserRouter>
  );
};
