import React from 'react';
import BookItem from './BookItem';
import './BookList.scss';
import { Link } from 'react-router-dom';
const BookList = () => {
  return (
    <>
      <div className="bookListContainer">
        <div className="bookWrapper">
          <BookItem name="Mastering Ethereum" />
        </div>
        <div className="bookWrapper">
          <BookItem name="Mastering Bitcoin" />
        </div>
        <div className="bookWrapper">
          <BookItem name="book3" />
        </div>
        <div className="bookWrapper">
          <BookItem name="book4" />
        </div>
        <div className="bookWrapper">
          <BookItem name="book5" />
        </div>
        <div className="bookWrapper">
          <BookItem name="book6" />
        </div>
        <div className="bookWrapper">
          <BookItem name="book7" />
        </div>
        <div className="bookWrapper">
          <BookItem name="book8" />
        </div>
        <div className="bookWrapper">
          <BookItem name="book9" />
        </div>
      </div>
    </>
  );
};

export default BookList;
