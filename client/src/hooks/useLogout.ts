import { useDispatch } from "react-redux";
import { removeUser } from "@/store/auth/authSlice";

export function useLogout() {
  const dispatch = useDispatch();

  return () => {
    localStorage.removeItem("pointXero");
    dispatch(removeUser());
  };
}
