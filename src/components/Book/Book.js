import React, { Component } from 'react';

import UserSub from '../UserSub/UserSub';

class Book extends Component {
    state = {
        title: '',
        author: ''
    }

    titleChangeHandler = ( event ) => {
        let title = event.target.data;
        this.setState({ title: title });
    }

    authorChangeHandler = ( event ) => {
        let author = event.target.data;
        this.setState({ author: author });
    }

    render() {
        return (
            <div>
                <UserSub
                    titleChange={this.titleChangeHandler}
                    authorChange={this.authorChangeHandler}
                    bookSubmit={this.props.bookSubmit} />
            </div>
        );
    }
}


export default Book;
