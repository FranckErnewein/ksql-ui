import React, { useEffect, useState } from "react";
import { fetchServerInfos, KsqlServerInfo } from "./services";

export default function Infos() {
  const [infos, setInfos] = useState<KsqlServerInfo | null>(null);

  useEffect(() => {
    fetchServerInfos().then(setInfos);
  }, []);

  if (!infos) {
    return null;
  }
  return <div>KSQL version: {infos.version}</div>;
}
