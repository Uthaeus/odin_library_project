import React, { Component } from 'react';

import Book from '../../components/Book/Book';

class Library extends Component {
    state = {
        books: []
    };

    bookSubmitHandler = ( event ) => {
        let newBook = event.target.data;
        console.log('hitting submit handler');
    }

    render() {
        let library = this.state.books.map((book, index) => {
            return <Book
                bookSubmit={() => this.bookSubmitHandler()} />
        });

        return (
            <div>
                {library}
            </div> 
        );
    }
}



export default Library;