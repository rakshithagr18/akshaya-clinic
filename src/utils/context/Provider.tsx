"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IUser } from "../interfaces";
import { BASE_URL } from "../constants";
// import { notification } from "antd";

interface CommonContextType {
    //   toast: (type: NotificationType, message: string) => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const GlobalContext = createContext({} as CommonContextType);

type GlobleContextProviderProps = {
    children: ReactNode;
};

// type NotificationType = "success" | "info" | "warning" | "error";

const GlobalProvider = (props: GlobleContextProviderProps) => {
    //   const [api, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);
    const router = useRouter();

    const getUserInfo = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            router.replace("login")
        }

        try {
            const res = await fetch(`${BASE_URL}/users/profile`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            });

            const data = await res.json();

            console.log("data=>", data);


            if (!res.ok) {
                alert("Something went wrong")
                return;
            }

            // Assuming the API returns a token upon successful login
            if (data.user) {
                setUser(data.user)
            }

            // Redirect to dashboard on successful login
            // router.push("/dashboard");

        } catch (err: any) {
            console.error("Login error:", err);
        }
    }




    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                // toast,
                loading,
                setLoading,
                user,
                setUser,
                ...props,
            }}
        >
            {props.children}
            {/* {contextHolder} */}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;