import axios from "axios";
import { Book } from "./components/molecules/BookCard/BookCard";

export const fetchAllBooks = () => {
    return axios.get("http://localhost:3000/dataBase")
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const fetchBookById = (id:number) => {
    return axios.get(`http://localhost:3000/dataBase/${id}`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

export async function updateBook(book:Book){
    await axios.put(`http://localhost:3000/dataBase/${book.id}`, book);
}