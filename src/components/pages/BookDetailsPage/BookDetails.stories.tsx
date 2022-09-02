import React from 'react';
import { ComponentStory, Story } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookDetailsPageComponent, BookDetailsPageComponentProps } from './BookDetails';
import { getBooks } from "../../../data/Data";
// import { getBooks } from '../../../Data/Data';

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
    book: getBooks()[0]
};