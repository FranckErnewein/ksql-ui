export const BASE_URL: string = "http://ksql:8088";
export const CORS_PROXY: string = "http://localhost:4000/";

export interface KsqlServerInfo {
  version: string;
  kafkaClusterId: string;
  ksqlServiceId: string;
}

export async function fetchServerInfos() {
  return fetch(CORS_PROXY + BASE_URL + "/info")
    .then(response => response.json())
    .then(json => json.KsqlServerInfo);
}

export async function executeQuery(query: string) {
  return fetch(CORS_PROXY + BASE_URL + "/ksql", {
    method: "POST",
    headers: {
      "Content-Type": "application/vnd.ksql.v1+json; charset=utf-8"
    },
    body: JSON.stringify({ ksql: query, streamsProperties: {} })
  }).then(response => response.json());
}
