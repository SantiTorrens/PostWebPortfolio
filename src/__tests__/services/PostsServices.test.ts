import {
    deletePost,
    getPostComments,
    getPosts,
    getPostsUsers,
} from "../../api/services/PostsService";
import axiosInstance from "../../utils/axios";
import { waitFor } from "@testing-library/react";

jest.mock("../../utils/axios");

type AxiosResponse<T> = {
  data: T;
}



describe("Post service", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear all mock calls before each test
    });

    test("getPosts fetches posts correctly", async () => {
        const mockPosts = await getPosts();
        (axiosInstance.get as jest.Mock).mockResolvedValue({
            data: mockPosts,
        } as AxiosResponse<typeof mockPosts>);

        // Use waitFor to wait for the async call to resolve
        await waitFor(() => {
            expect(axiosInstance.get).toHaveBeenCalledWith(
                "https://jsonplaceholder.typicode.com/posts"
            );
        });
    });

    test("getPostComments fetches post comments correctly", async () => {
        const mockPostId = 1;
        const mockComments = getPostComments(mockPostId);
        (axiosInstance.get as jest.Mock).mockResolvedValue({
            data: mockComments,
        } as AxiosResponse<typeof mockComments>);

        // Use waitFor to wait for the async call to resolve
        await waitFor(() => {
            expect(axiosInstance.get).toHaveBeenCalledWith(
                `https://jsonplaceholder.typicode.com/posts/${mockPostId}/comments`
            );
        });
    });

    test("deletePost deletes post correctly", async () => {
        const mockPostId = 1;
        axiosInstance.delete as jest.Mock;

        await deletePost(mockPostId);

        expect(axiosInstance.delete).toHaveBeenCalledWith(
            `https://jsonplaceholder.typicode.com/posts/${mockPostId}`
        );
    });

    test("getPostsUsers fetches users correctly", async () => {
        const mockUsers = getPostsUsers();
        (axiosInstance.get as jest.Mock).mockResolvedValue({
            data: mockUsers,
        } as AxiosResponse<typeof mockUsers>);

        // Use waitFor to wait for the async call to resolve
        await waitFor(() => {
            expect(axiosInstance.get).toHaveBeenCalledWith(
                "https://jsonplaceholder.typicode.com/users"
            );
        });
    });
});
