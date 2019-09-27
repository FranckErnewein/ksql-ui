import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import theme from "./theme";
import Infos from "./Infos";
import QueryTextArea from "./QueryTextArea";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h4">KSQL UI</Typography>
        <Infos />
        <QueryTextArea />
      </div>
    </ThemeProvider>
  );
}
