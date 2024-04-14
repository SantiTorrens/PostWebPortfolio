import { updateUserPayload } from "./auth";

export interface User {
    userId: number;
    email: string;
    name: string;
    imageUrl: string;
}
export interface UserState {
    userId: number;
    name: string;
    email: string;
    isLoggedIn: boolean;
    setUpdatedUser: (data: updateUserPayload) => void;
    setUserData: (user: User) => void;
    logout: () => void;
}

export interface PostUser {
    id: number;
    name: string;

    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
