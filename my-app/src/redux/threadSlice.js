import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    addThreadForm: {
      title: ''
    }
};

// First, create the thunk
export const loadThreads = createAsyncThunk(
  'thread/loadThreads',
  async (url, thunkAPI) => {
    const response = await fetch("https://forum-api-jkrop.ondigitalocean.app/category/60925471e747d9001dee977f/thread");
    const data = await response.json();

    return data;
  }
)

export const postThread = createAsyncThunk(
  'thread/postThread',
  async (thread, thunkAPI) => {
    const response = await fetch("https://forum-api-jkrop.ondigitalocean.app/category/60925471e747d9001dee977f/thread",  {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(thread)
    });
    const createdThread = await response.json();

    return createdThread;
  }
)

// Then, handle actions in your reducers:
const threadSlice = createSlice({
  name: 'thread',
  initialState,
  reducers: {
    updateSortBy(state, action) {
        state.sortBy = action.payload;
    },
    setTitle(state, action) {
      state.addThreadForm.title = action.payload;
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [loadThreads.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data = action.payload;
    },
    [postThread.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data.push(action.payload);
      state.addThreadForm = initialState.addThreadForm;
    }
  }
})

export const { updateSortBy, setTitle } = threadSlice.actions;
export default threadSlice.reducer;