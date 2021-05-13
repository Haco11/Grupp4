import React from 'react';
import axios from 'axios';

 function PostForm() {
    return
        <div>
            <form><input placeholder="Name" type="text"></input>
            <input placeholder="Comment" type="text"></input>
            <input placeholder="Date" type="date"></input>
            </form>

        </div>
};


export default PostForm;