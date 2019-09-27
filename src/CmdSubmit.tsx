import React, { useEffect, useState } from "react";
import keycode from "keycode";
import Button from "@material-ui/core/Button";

interface CmdSubmitProps {
  onSubmit: Function;
  disabled: boolean;
}

const CMD: string = "left command";
const ENTER: string = "enter";

export default function CmdSubmit(props: CmdSubmitProps) {
  const { disabled, onSubmit } = props;
  const [cmdIsDown, setCmdDown] = useState<boolean>(false);
  const [enterIsDown, setEnterDown] = useState<boolean>(false);

  function onKeyDown(event: KeyboardEvent) {
    const code = keycode(event);
    if (code === CMD) {
      setCmdDown(true);
    } else if (code === ENTER) {
      setEnterDown(true);
    }
    if (cmdIsDown && enterIsDown && !disabled) {
      onSubmit();
    }
  }
  function onKeyUp(event: KeyboardEvent) {
    const code = keycode(event);
    if (code === CMD) {
      setCmdDown(false);
    } else if (code === ENTER) {
      setEnterDown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  });

  return (
    <Button
      title="Cmd+ENTER"
      variant="contained"
      type="submit"
      color="primary"
      disabled={disabled}
    >
      Send query
    </Button>
  );
}
