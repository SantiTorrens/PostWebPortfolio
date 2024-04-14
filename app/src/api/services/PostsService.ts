import { Post, PostCommentInterface } from "../../types/post";
import axiosInstance from "../../utils/axios";
import { PostUser } from "../../types/user";

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

export async function deletePost(postId: number): Promise<void> {
    await axiosInstance.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
}

export async function getPostsUsers(): Promise<PostUser[]> {
    const users = await axiosInstance.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    return users.data;
}
