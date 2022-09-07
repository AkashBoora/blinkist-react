import React from 'react';
import { ComponentStory } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ExplorePageComponent } from './ExplorePage';

export default {
  title: 'pages / ExplorePage',
  component: ExplorePageComponent,
};
const Template: ComponentStory<typeof ExplorePageComponent> = (args) => (
  <Router>
    <ExplorePageComponent />
  </Router>
);

export const HomePage = Template.bind({});
HomePage.args = {};