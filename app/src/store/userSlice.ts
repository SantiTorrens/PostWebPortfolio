import { create } from "zustand";
import { User } from "../types/user";

interface UserState {
    name: string;
    email: string;
    isLoggedIn: boolean;
    setUserData: (user: User) => void;
    logout: () => void;
}
export const useUserStore = create<UserState>((set) => ({
    name: "",
    email: "",
    isLoggedIn: false,
    logout: () => {
        set({ name: "", email: "", isLoggedIn: false });
    },
    setUserData: (user) => {
        set({ name: user.name, email: user.email, isLoggedIn: true });
    },
}));
