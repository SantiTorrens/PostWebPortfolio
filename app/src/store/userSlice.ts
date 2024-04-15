import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserState } from "../types/user";
import { updateUser } from "../api/services/AuthServices";

export const useUserStore = create<UserState>()(
    devtools(
        persist(
            (set) => ({
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
                    localStorage.removeItem("userStore");

                    set({ name: "", email: "", isLoggedIn: false });
                },
                setUserData: (user) => {
                    set({
                        name: user.name,
                        email: user.email,
                        isLoggedIn: true,
                    });
                },
            }),
            {
                name: "userStore",
            }
        )
    )
);
