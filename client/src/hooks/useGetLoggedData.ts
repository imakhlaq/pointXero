import { AuthResponse } from "../../types";
import { setUser } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store/hooks";

export function useGetLoggedData() {
  const dispatch = useAppDispatch();

  return () => {
    const data: AuthResponse | null = JSON.parse(
      typeof window !== "undefined"
        ? localStorage.getItem("pointXero")!
        : "null",
    );

    if (data) {
      dispatch(setUser(data));
    }
  };
}
