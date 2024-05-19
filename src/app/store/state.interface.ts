import { counterState } from "./counter/counter.state";
import { PostState } from "./post/post.state";

export interface State{
    counter: counterState;
    post: PostState;
}