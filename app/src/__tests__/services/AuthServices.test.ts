import { login, signUp, updateUser } from "../../api/services/AuthServices";
import axiosInstance from "../../utils/axios";

// Mock axiosInstance
jest.mock("../../utils/axios");

describe("Authentication Services", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    // Test for login function
    it("login function should return user data on successful login", async () => {
        const email = "test@example.com";
        const password = "password";
        const responseData = {
            success: true,
            user: {
                userId: 1,
                email: email,
                name: "Testing User",
                imageUrl: "http://example.com",
            },
        };
        (axiosInstance.post as jest.Mock).mockResolvedValueOnce({
            data: responseData,
        });

        const result = await login({ email, password });

        expect(axiosInstance.post).toHaveBeenCalledWith("/login", {
            email,
            password,
        });
        expect(result).toEqual(responseData);
    });

    // Test for signUp function
    it("signUp function should return user data on successful sign up", async () => {
        const email = "test@example.com";
        const password = "password";
        const passwordConfirmation = "password";
        const responseData = {
            success: true,
            user: {
                userId: 1,
                email: email,
                name: "Testing User",
                imageUrl: "http://example.com",
            },
        };
        (axiosInstance.post as jest.Mock).mockResolvedValueOnce({
            data: responseData,
        });

        const result = await signUp({ email, password, passwordConfirmation });

        expect(axiosInstance.post).toHaveBeenCalledWith("/register", {
            email,
            password,
            passwordConfirmation,
        });
        expect(result).toEqual(responseData);
    });

    // Test for updateUser function
    it("updateUser function should return user data on successful update", async () => {
        const userData = {
            email: "test@example.com",
            username: "Updated User",
        };
        const responseData = {
            success: true,
            user: {
                userId: 1,
                email: userData.email,
                name: userData.username,
                imageUrl: "http://example.com",
            },
        };
        (axiosInstance.post as jest.Mock).mockResolvedValueOnce({
            data: responseData,
        });

        const result = await updateUser(userData);

        expect(axiosInstance.post).toHaveBeenCalledWith("/update/${userId}", {
            data: userData,
        });
        expect(result).toEqual(responseData);
    });
});
