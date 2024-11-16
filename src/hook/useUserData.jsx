import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { useAuthStore } from "../store/authStore";

export const useUserData = () => {
  const pathname = usePathname();
  const [user, setUser] = useState();
  const { loading, getUserProfile } = useAuthStore();

  // Update user data to store
  useEffect(() => {
    const checkUserprofile = async () => {
      const res = await getUserProfile();
      if (!loading && res) {
        setUser(res);
      }
    };
    checkUserprofile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const result = useMemo(() => user ?? undefined, [user]);

  return result;
};
