// import axios from 'axios';
 const allBooks = [ 
  {
    "id": 1,
    "author": "Erica Keswin",
    "country": "Italy",
    "imageLink": "1.svg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "Bring Your Human to Work",
    "year": 1315,
    "readTime": "15",
    "readersCount": "1.9k",
    "status": "finished"
  },
  {
    "id": 2,
    "author": "Steve Glaveski",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "11.svg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "Employee to Entrepreneur",
    "year": 1970,
    "readTime": "15",
    "readersCount": "20k",
    "status": "finished"
  },
  {
    "id": 3,
    "author": "Trey Gowdy",
    "country": "Achaemenid Empire",
    "imageLink": "3.svg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "Doesn’t Hurt to Ask",
    "year": -600,
    "readTime": "13",
    "readersCount": "1.9k",
    "status": "finished"
  },
  {
    "id": 4,
    "author": "Amanda Little",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "4.svg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Fate of Food",
    "year": 1970,
    "readTime": "12",
    "readersCount": "16k",
    "status": "reading"
  },
  {
    "id": 5,
    "author": "Ryan Holiday, Stephen Hansel",
    "country": "India/Iran/Iraq/Egypt/Tajikistan",
    "imageLink": "5.svg",
    "language": "Arabic",
    "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    "pages": 288,
    "title": "Lives of the Stoics",
    "year": 1200,
    "readTime": "13",
    "readersCount": "15k",
    "status": "reading"
  },
  {
    "id": 6,
    "author": "Debbie King",
    "country": "Iceland",
    "imageLink": "6.svg",
    "language": "Old Norse",
    "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    "pages": 384,
    "title": "Loving Your Business",
    "year": 1350,
    "readTime": "13",
    "readersCount": "2.3k",
    "status": "finished"
  },
  {
    "id": 7,
    "author": "Noreena Hertz",
    "country": "United Kingdom",
    "imageLink": "7.svg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    "pages": 226,
    "title": "The Lonely Century",
    "year": 1813,
    "readTime": "15",
    "readersCount": "8.3k",
    "status": "finished"
  },
  {
    "id": 8,
    "author": "Giada De Laurentiis",
    "country": "France",
    "imageLink": "8.svg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    "pages": 443,
    "title": "Eat Better, Feel Better",
    "year": 1835,
    "readTime": "13",
    "readersCount": "1.9k",
    "status": "finished"
  },
  {
    "id": 9,
    "author": "James Moore",
    "country": "Italy",
    "imageLink": "9.svg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
    "pages": 1024,
    "title": "Dropshipping",
    "year": 1351,
    "readTime": "12",
    "readersCount": "2.6k",
    "status": "finished"
  },
  {
    "id": 10,
    "author": "Kathleen Shannon and Emily...",
    "country": "Republic of Ireland",
    "imageLink": "10.svg",
    "language": "French, English",
    "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    "pages": 256,
    "title": "Being Boss",
    "year": 1952,
    "readTime": "13",
    "readersCount": "3.8k",
    "status": "reading"
  },
  {
    "id": 11,
    "author": "Jim Collins & Bill Lazier",
    "country": "Denmark",
    "imageLink": "2.svg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Beyond Entrepreneurship",
    "year": 1836,
    "readTime": "15",
    "readersCount": "5.6k",
    "status": "finished"
  }
  ];

  const trendingBlinks=[
    {
      "id": 6,
      "author": "Debbie King",
      "country": "Iceland",
      "imageLink": "6.svg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Loving Your Business",
      "year": 1350,
      "readTime": "13",
      "readersCount": "2.3k",
      "status": "myLibrary"
    },
    {
      "id": 7,
      "author": "Noreena Hertz",
      "country": "United Kingdom",
      "imageLink": "7.svg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "The Lonely Century",
      "year": 1813,
      "readTime": "15",
      "readersCount": "8.3k",
      "status": "myLibrary"
    },
    {
      "id": 8,
      "author": "Giada De Laurentiis",
      "country": "France",
      "imageLink": "8.svg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Eat Better, Feel Better",
      "year": 1835,
      "readTime": "13",
      "readersCount": "1.9k",
      "status": "myLibrary"
    },
    {
      "id": 9,
      "author": "James Moore",
      "country": "Italy",
      "imageLink": "9.svg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "Dropshipping",
      "year": 1351,
      "readTime": "12",
      "readersCount": "2.6k",
      "status": "myLibrary"
    },
    {
      "id": 10,
      "author": "Kathleen Shannon and Emily...",
      "country": "Republic of Ireland",
      "imageLink": "10.svg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Being Boss",
      "year": 1952,
      "readTime": "13",
      "readersCount": "3.8k",
      "status": "myLibrary"
    }
  ];

  const justAdded = 
  [
    {
      "id": 7,
      "author": "Noreena Hertz",
      "country": "United Kingdom",
      "imageLink": "7.svg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "The Lonely Century",
      "year": 1813,
      "readTime": "15",
      "readersCount": "8.3k",
      "status": "myLibrary"
    },
    {
      "id": 8,
      "author": "Giada De Laurentiis",
      "country": "France",
      "imageLink": "8.svg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Eat Better, Feel Better",
      "year": 1835,
      "readTime": "13",
      "readersCount": "1.9k",
      "status": "myLibrary"
    },
    {
      "id": 9,
      "author": "James Moore",
      "country": "Italy",
      "imageLink": "9.svg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
      "pages": 1024,
      "title": "Dropshipping",
      "year": 1351,
      "readTime": "12",
      "readersCount": "2.6",
      "status": "myLibrary"
    },
    
  ];
   const featuredBlinks = 
  [
    {
      "id": 1,
      "author": "Erica Keswin",
      "country": "Italy",
      "imageLink": "1.svg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "Bring Your Human to Work",
      "year": 1315,
      "readTime": "15",
      "readersCount": "1.9k",
      "status": "myLibrary"
    },
    {
      "id": 11,
      "author": "Jim Collins & Bill Lazier",
      "country": "Denmark",
      "imageLink": "2.svg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Beyond Entrepreneurship",
      "year": 1836,
      "readTime": "15",
      "readersCount": "5.6k",
      "status": "myLibrary"
    },
    {
      "id": 3,
      "author": "Trey Gowdy",
      "country": "Achaemenid Empire",
      "imageLink": "3.svg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "Doesn’t Hurt to Ask",
      "year": -600,
      "readTime": "13",
      "readersCount": "1.9k",
      "status": "myLibrary"
    },
  ];
  export const getBooks = () => allBooks;
  export const trendingBooks = () => trendingBlinks;
  export const justAddedBooks = () => justAdded;
  export const featuredBooks = () => featuredBlinks;