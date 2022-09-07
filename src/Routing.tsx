import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BookDetailsPageComponent } from "./components/pages/BookDetailsPage/BookDetails";
import { ExplorePageComponent } from "./components/pages/ExplorePage/ExplorePage";
import { MyLibraryPageComponent } from "./components/pages/MyLibraryPage/MyLibrary";
import Theme from "./Themes/themes";

function Routing() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route
            path="/explore/:category"
            element={<ExplorePageComponent />}
          ></Route>
          <Route path="/mylibrary" element={<MyLibraryPageComponent />}></Route>
          <Route path="/" element={<MyLibraryPageComponent />}></Route>
          <Route
            path="/bookdetails/:id"
            element={<BookDetailsPageComponent />}
          ></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default Routing;
