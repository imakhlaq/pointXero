import { useCustomMutation } from "@/hooks/useCustomMutation";
import { AuthResponse } from "../../types";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/auth/authSlice";
import { useRouter } from "next/navigation";

type Props = {
  action: "login" | "signup";
};

function useAuth({ action }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  function onSuccess(data: AuthResponse) {
    dispatch(setUser(data));
    localStorage.setItem("token", data.token);
    router.push("/");
  }
  function onError(error: any) {
    console.log(error);
  }
  return useCustomMutation<AuthResponse>({
    path: action,
    onSuccess,
    onError,
  });
}

export default useAuth;
