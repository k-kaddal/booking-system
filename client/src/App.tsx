import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Book from "./components/Book";
import Lobby from "./components/Lobby";
import Confirmed from "./components/Confirmed";
import { GlobalStyle, Page } from "./components/styles/styles";

function App() {
  const [stage, setStage] = useState(0);

  return (
    <>
      <Page>
        {stage === 0 ? <Lobby setStage={setStage} /> : null}
        {stage === 1 ? <Book setStage={setStage} /> : null}
        {stage === 2 ? <Confirmed setStage={setStage} /> : null}
      </Page>
      <GlobalStyle />
    </>
  );
}

export default observer(App);
