import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    addCommentForm: {
      title: '',
      content: '',
      createdBy: ''
    }
};

// First, create the thunk
export const loadComments = createAsyncThunk(
  'comm/loadComments',
  async (url, thunkAPI) => {
    const response = await fetch("https://forum-api-jkrop.ondigitalocean.app/thread/609275bee747d9001dee9792/comment");
    const data = await response.json();

    return data;
  }
)

export const postComment = createAsyncThunk(
  'comment/postComment',
  async (comment, thunkAPI) => {
<<<<<<< HEAD
    const response = await fetch("https://forum-api-jkrop.ondigitalocean.app/category/6092645ee747d9001dee9785/thread",  {
=======
    const response = await fetch("https://forum-api-jkrop.ondigitalocean.app/thread/609275bee747d9001dee9792/comment",  {
>>>>>>> 6e0ef6cbf85186be402933b050c72135527feeb6
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(comment)
    });
    const createdComment = await response.json();

    return createdComment;
  }
)

// Then, handle actions in your reducers:
const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    updateSortBy(state, action) {
        state.sortBy = action.payload;
    },
    setTitle(state, action) {
      state.addCommentForm.title = action.payload;
    },
    setContent(state, action) {
        state.addCommentForm.content = action.payload;
      },
    setCreatedBy(state, action) {
        state.addCommentForm.createdBy = action.payload;
      }

},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [loadComments.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data = action.payload;
    },
    [postComment.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data.push(action.payload);
      state.addCommentForm = initialState.addCommentForm;
    }
  }
})

export const { updateSortBy, setTitle, setContent, setCreatedBy } = commentSlice.actions;
export default commentSlice.reducer;