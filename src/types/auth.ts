import { FormStateType } from "./form";
import { User } from "./user";

export interface LoginPayload extends FormStateType {
    email: string;
    password: string;
}

export interface signUpPayload extends FormStateType {
    email: string;
    password: string;
    passwordConfirmation: string;
}

export interface updateUserPayload extends FormStateType {
    email: string;
    username: string;
}

export interface loginResponse {
  success: boolean,
  user: User,
}
export interface signUpResponse {
  success: boolean,
  user: User,
}
export interface updateUserResponse {
  success: boolean,
  user: User
}