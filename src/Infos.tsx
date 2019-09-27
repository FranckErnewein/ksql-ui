import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { fetchServerInfos, KsqlServerInfo } from "./services";

export default function Infos() {
  const [infos, setInfos] = useState<KsqlServerInfo | null>(null);

  useEffect(() => {
    fetchServerInfos().then(setInfos);
  }, []);

  if (!infos) {
    return null;
  }
  return (
    <Typography variant="caption">KSQL version: {infos.version}</Typography>
  );
}
