import { Post, PostCommentInterface } from "../../types/post";
import axiosInstance from "../../utils/axios";

export async function getPosts(): Promise<Post[]> {
    const posts = await axiosInstance.get(
        "https://jsonplaceholder.typicode.com/posts"
    );

    return posts.data;
}

export async function getPostComments(postId: number): Promise<PostCommentInterface[]> {
    const postComments = await axiosInstance.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    return postComments.data;
}
