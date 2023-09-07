import { useCustomMutation } from "@/hooks/useCustomMutation";
import { AuthResponse } from "../../types";

type Props = {
  action: "login" | "signup";
};

function onSuccess(data: AuthResponse) {
  console.log(data);
}
function onError(error: any) {
  console.log(error);
}

function useAuth({ action }: Props) {
  return useCustomMutation<AuthResponse>({
    path: action,
    onSuccess,
    onError,
  });
}

export default useAuth;
