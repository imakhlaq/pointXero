import { useQuery, UseQueryResult } from "react-query";
import service from "@/utils/service";
import { CategoryProduct } from "../../types";

type Props = {
  keys: string[];
  path: string;
  enabled?: boolean;
  onSuccess?: (data: any) => any;
  onError?: (error: any) => any;
};

async function queryFunc<T>(path: string): Promise<T> {
  const response = await service.get(path);
  return response.data;
}

export function useCustomQuery<T>({
  path,
  keys,
  enabled,
  onSuccess,
  onError,
}: Props) {
  return useQuery({
    queryKey: keys,
    queryFn: (data) => queryFunc<T>(path),
    enabled: enabled ?? true,
    onSuccess: onSuccess,
    onError: onError,
  });
}
