import React from 'react';
import { ComponentStory } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyLibraryPageComponent } from './MyLibrary';
// import { getBooks } from '../../../Data/Data';

export default {
  title: 'pages / MyLibrary',
  component: MyLibraryPageComponent,
};
const Template: ComponentStory<typeof MyLibraryPageComponent> = (args) => (
  <Router>
    <MyLibraryPageComponent />
  </Router>
);

export const MyLibrary = Template.bind({});
MyLibrary.args = {};