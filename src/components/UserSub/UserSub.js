import React from 'react';


const userSub = ( props ) => {
    return (
        <div>
            <input type="text" onChange={props.titleChange} placeholder="Title" />
            <input type="text" onChange={props.authorChange} placeholder="Author" />
            <button type="submit" onClick={props.bookSubmit}>Submit</button>
        </div>
    )
}


export default userSub;