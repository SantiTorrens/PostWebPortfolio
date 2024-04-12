import { create } from "zustand";
import { PostsState } from "../types/post";
import { getPostComments } from "../api/services/PostsService";

export const usePostStore = create<PostsState>((set) => ({
    posts: [],
    savedPosts: [],
    showCommentsModal: false,
    postComments: [],
    setPosts: (newPosts) => {
        set((state) => {
            return {
                ...state,
                posts: [...state.posts, ...newPosts],
            };
        });
    },
    savePost: (post) => {
        set((state) => {
            return {
                ...state,
                savedPosts: {
                    ...state.savedPosts,
                    post,
                },
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
    getPostComments: async (postId) => {
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
}));
