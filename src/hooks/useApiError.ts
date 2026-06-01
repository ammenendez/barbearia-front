export function useApiError() {
  function getErrorMessage(error: unknown) {
    if (error && typeof error === "object" && "response" in error) {
      const response = error as { response?: { data?: { detail?: string } } };
      return response.response?.data?.detail ?? "Erro inesperado na API";
    }

    return "Erro inesperado na API";
  }

  return { getErrorMessage };
}
