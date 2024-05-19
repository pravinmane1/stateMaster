import { createReducer, on } from '@ngrx/store';
import { clear, create, deletePost, update } from './post.actions';
import { PostState } from './post.state';

const initialState: PostState = {
  postList: [
    {
      id: 0,
      title: 'new item',
      description: 'this is a new item in the postlist',
    },
  ],
};

export const postReducer = createReducer(
  initialState,
  on(create, (state, { title, description }) => ({
    ...state,
    postList: [
      ...state.postList,
      { title, description, id: state.postList.length },
    ],
  })),
  on(update, (state, { title, description, id }) => {
    const updatedPost = { title, description, id };
    const updatedPosts = [...state.postList];
    const updateIndex = updatedPosts.findIndex((post) => post.id === id);
    updatedPosts[updateIndex] = updatedPost;

    return {
      ...state,
      postList: updatedPosts,
    };
  }),
  on(clear, (state) => ({
    ...state,
    postList: [],
  })),
  on(deletePost, (state: PostState, { id }) => ({
    ...state,
    postList: state.postList.filter((p) => p.id !== id),
  }))
);
