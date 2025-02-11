"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

export const useAuth = () => {
  const pathname = usePathname();
  const { loading, getUserProfile } = useAuthStore();
  const [user, setUser] = useState();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const endUserSession = useAuthStore((state) => state.logout);
  const router = useRouter();

  useEffect(() => {
    const checkUserprofile = async () => {
      const res = await getUserProfile();
      if (!loading) {
        setIsAuthenticating(false);
        if (res) {
          setUser(res);
          if (!res.isVerified) {
            toast(
              "Please click on the link sent to your email to activate your account",
              {
                duration: 5000,
                position: "bottom-left",
                style: {
                  color: "green", // Set the text color
                  background: "#fff", // Optionally, set the background color
                },
              }
            );
            router.push("/verify-otp");
          }
        } else {
          endUserSession();
        }
      } else {
        setIsAuthenticating(true);
      }
    };
    checkUserprofile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return {
    isAuthenticated: !!user,
    userData: user,
    isAuthenticating,
  };
};
