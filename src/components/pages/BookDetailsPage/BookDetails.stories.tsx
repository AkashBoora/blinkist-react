import React from 'react';
import {  Story } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookDetailsPageComponent, BookDetailsPageComponentProps } from './BookDetails';

export default {
  title: 'pages / BookDetails',
  component: BookDetailsPageComponent,
};
const Template: Story<BookDetailsPageComponentProps> = (args) => (
  <Router>
    <BookDetailsPageComponent {...args} />
  </Router>
);

export const BookDetails = Template.bind({});
BookDetails.args = {
};