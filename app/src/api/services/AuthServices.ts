import { LoginPayload, loginResponse, signUpPayload, signUpResponse } from "../../types/auth";
// import axiosInstance from "../../utils/axios";

export async function login({ email, password }: LoginPayload): Promise<loginResponse> {
    const data = {
      success: true,
      user: {
        email: email,
        name: "Testing User",
        imageUrl: "http://example.com",
      }
    };

    //TODO Here we should make the login request and return the data object
    // await axiosInstance.post("/login", { email: email, password: password });

    return data;
}

export async function signUp({ email, password, passwordConfirmation }: signUpPayload): Promise<signUpResponse> {
    
    const data = {
      success: true,
      user: {
        email: email,
        name: "Testing User",
        imageUrl: "http://example.com",
      }
    };

    //TODO Here we should make the login request and return the data object
    // await axiosInstance.post("/login", { email: email, password: password, passwordConfirmation: passwordConfirmation });

    return data;
}


