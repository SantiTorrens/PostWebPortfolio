import { PostUser } from "./user";

export interface Post {
    user?: PostUser;
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostsState {
    posts: Post[];
    savedPosts: Post[];
    showCommentsModal: boolean;
    postComments: PostCommentInterface[] | [];
    postsUsers: PostUser[];
    setPosts: () => void;
    savePost: (post: Post) => void;
    unSavePost: (post: Post) => void;
    removeSavedPost: (postId: number) => void;
    setPostComments: (postId: number) => void;
    setPostsUsers: () => void;
    closeCommentsModal: () => void;
    deletePost: (postId: number) => void;
}

export interface PostCommentInterface {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
