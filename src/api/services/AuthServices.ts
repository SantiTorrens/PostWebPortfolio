/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    LoginPayload,
    loginResponse,
    signUpPayload,
    signUpResponse,
    updateUserPayload,
    updateUserResponse,
} from "../../types/auth";
import axiosInstance from "../../utils/axios";
// import axiosInstance from "../../utils/axios";

export async function login({
    email,
    password,
}: LoginPayload): Promise<loginResponse> {
    const data = {
        success: true,
        user: {
            userId: 1,
            email: email,
            name: "Testing User",
            imageUrl: "http://example.com",
        },
    };

    // DEFINED ONLY FOR MOCK
    try {
        const response = await axiosInstance.post("/login", {
            email: email,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.log("🚀 ~ error:", error);
        // RETURNS THE MOCKED DATA
        return data;
    }
}

export async function signUp({
    email,
    password,
    passwordConfirmation,
}: signUpPayload): Promise<signUpResponse> {
    const data = {
        success: true,
        user: {
            userId: 1,
            email: email,
            name: "Testing User",
            imageUrl: "http://example.com",
        },
    };

    // DEFINED ONLY FOR MOCK
    try {
        const response = await axiosInstance.post("/register", {
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation,
        });
        return response.data;
    } catch (error) {
        console.log("🚀 ~ error:", error);
        // RETURNS THE MOCKED DATA
        return data;
    }
}

export async function updateUser(
    userData: updateUserPayload
): Promise<updateUserResponse> {
    const data = {
        success: true,
        user: {
            userId: 1,
            email: userData.email,
            name: userData.name as string,
            imageUrl: "http://example.com",
        },
    };

    // DEFINED ONLY FOR MOCK
    try {
        const response = await axiosInstance.post("/update/${userId}", {
            data: userData,
        });
        return response.data;
    } catch (error) {
        console.log("🚀 ~ error:", error);
        // RETURNS THE MOCKED DATA
        return data;
    }
}
