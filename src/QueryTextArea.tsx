import React, { useState } from "react";
import AceEditor from "react-ace";
import CmdSubmit from "./CmdSubmit";
import { executeQuery } from "./services";

import "brace/mode/mysql";
import "brace/theme/xcode";

export default function QueryTextArea() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = () => {
    if (query) {
      setLoading(true);
      executeQuery(query)
        .then(json => {
          console.log(json);
          if (json.error_code && typeof json.message === "string") {
            setErrorMessage(json.message);
          } else {
            setErrorMessage(null);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  };

  return (
    <div>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <AceEditor
        mode="mysql"
        theme="xcode"
        value={query}
        onChange={q => setQuery(q)}
        focus
      />
      <br />
      <CmdSubmit onSubmit={onSubmit} disabled={loading} />
    </div>
  );
}
