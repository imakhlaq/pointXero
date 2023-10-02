import { useCustomMutation } from "@/hooks/useCustomMutation";
import { AuthResponse } from "../../types";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/auth/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  action: "login" | "signup";
};

function useAuth({ action }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  function onSuccess(data: AuthResponse) {
    dispatch(setUser(data));
    localStorage.setItem("pointXero", JSON.stringify(data));
    router.push("/");
  }
  function onError(error: any) {
    toast(`${error.message}`);
  }
  return useCustomMutation<AuthResponse>({
    path: action,
    onSuccess,
    onError,
  });
}

export default useAuth;
