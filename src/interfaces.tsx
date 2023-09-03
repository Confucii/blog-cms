export interface AuthContextInterface {
  user: boolean;
  dispatch: React.Dispatch<{ type: string }>;
}

export interface PostData {
  _id: string;
  title: string;
  text: string;
  timestamp: Date;
  posted: boolean;
  date: string;
  colors: number[];
  deg: number;
}

export interface CommentInterface {
  _id: string;
  text: string;
  author: string;
  timestamp: string;
  date: string;
}

export interface PostWithComments {
  post: PostData;
  comments: CommentInterface[];
}
