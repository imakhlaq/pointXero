import { useMutation } from "react-query";
import service from "@/utils/service";

type Props = {
  path: string;
  onSuccess?: (data: any) => any;
  onError?: (error: any) => any;
};

type Prop1 = {
  path: string;
  body: {};
};

export async function mutationFunc<T>({ path, body }: Prop1): Promise<T> {
  const response = await service.post(path, body, {});
  return response.data;
}

export function useCustomMutation<T>({ path, onSuccess, onError }: Props) {
  return useMutation({
    mutationFn: (body: {}) => mutationFunc<T>({ path, body }),
    onSuccess: onSuccess,
    onError: onError,
  });
}
