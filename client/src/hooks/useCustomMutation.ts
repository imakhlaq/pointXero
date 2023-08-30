import { useMutation } from "react-query";
import service from "@/utils/service";

type Props = {
  path: string;
  body: {};
};

type HookProps = Props & {};

const mutationFunc = ({ path, body }: Props) => {
  return service.post(path, body, {});
};

export const useCustomMutation = ({ path, body }: HookProps) => {
  return useMutation({
    mutationFn: (data) => mutationFunc({ path, body }),
  });
};
