import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useAuthStore } from "../store/authStore";
import { useUserData } from "./useUserData";
import toast from "react-hot-toast";

export const useAuth = () => {
  const userStore = useAuthStore((state) => state.user);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [authData, setAuthData] = useState();
  const endUserSession = useAuthStore((state) => state.logout);
  const isUserActivated = userStore?.is_activated;
  const userStoreId = userStore?._id;
  const userId = useUserData()?._id;
  const isUserDataActivated = useUserData()?.is_activated;

  const router = useRouter();
  const pathname = usePathname();
  const locationFrom = useSearchParams().get("clfrm");

  useEffect(() => {
    router.prefetch("/auth/activation");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (userId) {
      if (!isAuthenticating && !isUserActivated && !isUserDataActivated) {
        setAuthData(!!userStoreId || !!userId);
        if (pathname !== "/auth/activation") router.push("/dashboard");
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
        //   router.push(`/auth/activation?clfrm=${pathname}`);
      } else if (
        (!isAuthenticating && userStoreId) ??
        (!isAuthenticating && userId)
      ) {
        setAuthData(!!userStore || !!userId);
        if (pathname === "/auth/activation")
          router.push(locationFrom ?? "/dashboard");
      } else if (!isAuthenticating && !userStoreId && !userId) {
        endUserSession();
      }
      setIsAuthenticating(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticating, userId]);

  return {
    isAuthenticated: !!authData,
    userData: authData,
    isAuthenticating,
  };
};
