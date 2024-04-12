export interface Post {
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
    setPosts: (newPosts: Post[]) => void;
    savePost: (post: Post) => void;
    removeSavedPost: (postId: number) => void;
    getPostComments: (postId: number) => void;
    closeCommentsModal: () => void;
}

export interface PostCommentInterface {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
