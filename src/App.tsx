import React from 'react';
import logo from './logo.svg';
import { FooterComponent } from './components/molecules/Footer/Footer';
import TabsInBookDetailsStories from './components/molecules/TabsInBookDetails/TabsInBookDetails.stories';
import { TabsBookDetailComponent } from './components/molecules/TabsInBookDetails/TabsInBookDetailsTab';
import { ThemeProvider } from '@mui/system';
import Theme from './Themes/themes';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <TabsBookDetailComponent/>
      </ThemeProvider>
    </div>
  );
}

export default App;
