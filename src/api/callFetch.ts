import type { MetricsResponse } from "./schema";

type QueryVariables = Record<string, unknown>;

const endpoints = {
  metrics({ date }: QueryVariables) {
    return `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${date}`;
  },
};

type Endpoint = keyof typeof endpoints;

type ApiResponseMap = {
  metrics: MetricsResponse;
};

type CallFetchOptions = RequestInit & {
  as?: "json" | "text";
  variables?: QueryVariables;
};

function buildCallFetchOptions(options?: CallFetchOptions) {
  const {
    as = "json",
    variables = {},
    ...requestInit
  }: CallFetchOptions = { method: "GET", ...options };

  return { as, variables, requestInit };
}

export default async function callFetch<ApiKey extends Endpoint>(
  apiKey: ApiKey,
  options?: CallFetchOptions,
) {
  const { as, variables, requestInit } = buildCallFetchOptions(options);
  const endpoint = endpoints[apiKey];
  const url: string = typeof endpoint === "function" ? endpoint(variables) : endpoint;
  const response = await fetch(url, requestInit);

  if (!response.ok) {
    throw new Error("HTTP error: " + response.status);
  }

  const data: ApiResponseMap[ApiKey] = await response[as]();

  return data;
}
