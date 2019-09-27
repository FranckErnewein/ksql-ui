import React, { useRef, FormEvent, useState } from "react";
import { executeQuery } from "./services";

export default function QueryTextArea() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (textarea.current) {
      executeQuery(textarea.current.value).then(json => {
        console.log(json);
        if (json.error_code && typeof json.message === "string") {
          setErrorMessage(json.message);
        } else {
          setErrorMessage(null);
        }
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <textarea ref={textarea} name="ksql-query"></textarea>
      <br />
      <input type="submit" />
    </form>
  );
}
