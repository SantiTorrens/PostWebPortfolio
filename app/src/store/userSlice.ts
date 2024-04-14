import { create } from "zustand";
import { UserState } from "../types/user";
import { updateUser } from "../api/services/AuthServices";

export const useUserStore = create<UserState>((set) => ({
    userId: 1,
    name: "",
    email: "",
    isLoggedIn: false,
    setUpdatedUser: async (data) => {
        const newData = await updateUser(data);
        set((state) => {
            return {
                ...state,
                name: newData.user.name,
                email: newData.user.email,
            };
        });
    },
    logout: () => {
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("user");
        set({ name: "", email: "", isLoggedIn: false });
    },
    setUserData: (user) => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem(
            "user",
            "{name: user.name, email: user.email, isLoggedIn: true}"
        );
        set({ name: user.name, email: user.email, isLoggedIn: true });
    },
}));
