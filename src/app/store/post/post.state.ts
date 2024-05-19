export interface PostState {
  postList: Post[];
}
export interface Post{
  id: number;
  title:string;
  description:string;
}