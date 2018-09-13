import React, { Component } from 'react';

class UserSub extends Component {
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
                <input type="text" onChange={titleChangeHandler} placeholder="Title" />
                <input type="text" onChange={authorChangeHandler} placeholder="Author" />
                <button type="submit" onClick={bookSubmitHandler}>Submit</button>
            </div>
        );
    }
}


export default UserSub;