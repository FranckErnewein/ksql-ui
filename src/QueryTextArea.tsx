import React, { useRef, FormEvent } from "react";
import { executeQuery } from "./services";

export default function QueryTextArea() {
  const textarea = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (textarea.current) {
      executeQuery(textarea.current.value).then(json => {
        console.log(json);
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea ref={textarea} name="ksql-query"></textarea>
      <input type="submit" />
    </form>
  );
}
