import {
  useMutation,
  useQueryClient,
  UseMutationResult,
  InvalidateQueryFilters,
} from "@tanstack/react-query";

type MutationKey = string | string[];

interface UseMutationOptions<TData, TError, TVariables> {
  key: MutationKey;
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

function useMutationHook<TData, TError, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options: UseMutationOptions<TData, TError, TVariables>
): UseMutationResult<TData, TError, TVariables> {
  const queryClient = useQueryClient();
  return useMutation<TData, TError, TVariables>({
    mutationFn,
    onSuccess: (data) => {
      options.onSuccess?.(data);
      const invalidateOptions: InvalidateQueryFilters =
        typeof options.key === "string"
          ? { queryKey: [options.key] }
          : { queryKey: options.key };
      queryClient.invalidateQueries(invalidateOptions);
    },
    onError: (error) => {
      options.onError?.(error);
    },
  });
}

export default useMutationHook;
