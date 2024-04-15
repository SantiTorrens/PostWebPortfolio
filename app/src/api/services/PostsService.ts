import { Post, PostCommentInterface } from "../../types/post";
import axiosInstance from "../../utils/axios";
import { PostUser } from "../../types/user";

export async function getPosts(): Promise<Post[]> {
    try {
        const posts = await axiosInstance.get(
            "https://jsonplaceholder.typicode.com/posts"
        );

        return posts.data;
    } catch (error) {
        console.log("🚀 ~ getPosts ~ error:", error);
        return [];
    }
}

export async function getPostComments(postId: number): Promise<PostCommentInterface[]> {
    try {
        const postComments = await axiosInstance.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );

        return postComments.data;
    } catch (error) {
        console.log("🚀 ~ getPostComments ~ error:", error);
        return [];
    }
}

export async function deletePost(postId: number): Promise<void> {
    try {
        await axiosInstance.delete(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
    } catch (error) {
        console.log("🚀 ~ deletePost ~ error:", error);
    }
}

export async function getPostsUsers(): Promise<PostUser[]> {
    try {
        const users = await axiosInstance.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        return users.data;
    } catch (error) {
        console.log("🚀 ~ getPostsUsers ~ error:", error);
        return [];
    }
}
