import { create } from "zustand";
import { PostsState } from "../types/post";
import {
    deletePost,
    getPostComments,
    getPosts,
    getPostsUsers,
} from "../api/services/PostsService";
import { devtools, persist } from "zustand/middleware";
import { toast } from "sonner";

export const usePostStore = create<PostsState>()(
    devtools(
        persist(
            (set) => ({
                posts: [],
                savedPosts: [],
                showCommentsModal: false,
                postComments: [],
                postsUsers: [],
                setPosts: async () => {
                    const posts = await getPosts();
                    set((state) => {
                        posts.map((post) => {
                            return (post.user = state.postsUsers.find(
                                (user) => user.id === post.userId
                            ));
                        });
                        return {
                            ...state,
                            posts: [...posts],
                        };
                    });
                },
                savePost: (post) => {
                    toast.success("Post saved successfully");
                    set((state) => {
                        return {
                            ...state,
                            savedPosts: [...state.savedPosts, post],
                        };
                    });
                },
                unSavePost: (post) => {
                    toast.success("Post removed from favorites");
                    set((state) => {
                        return {
                            ...state,
                            savedPosts: [
                                ...state.savedPosts.filter(
                                    (savedPost) => savedPost.id !== post.id
                                ),
                            ],
                        };
                    });
                },
                removeSavedPost: (postId) => {
                    set((state) => {
                        return {
                            ...state,
                            savedPosts: state.savedPosts.filter(
                                (post) => post.id !== postId
                            ),
                        };
                    });
                },
                setPostComments: async (postId) => {
                    const postComments = await getPostComments(postId);
                    set((state) => {
                        return {
                            ...state,
                            postComments: postComments,
                            showCommentsModal: true,
                        };
                    });
                },
                closeCommentsModal: () => {
                    set((state) => {
                        return {
                            ...state,
                            postComments: [],
                            showCommentsModal: false,
                        };
                    });
                },
                deletePost: async (postId: number) => {
                    await deletePost(postId);
                    set((state) => {
                        return {
                            ...state,
                            posts: state.posts.filter(
                                (post) => post.id !== postId
                            ),
                        };
                    });
                },
                setPostsUsers: async () => {
                    const postsUsers = await getPostsUsers();
                    set((state) => {
                        return {
                            ...state,
                            postsUsers: postsUsers,
                        };
                    });
                },
            }),
            {
                name: "postsStore",
            }
        )
    )
);
