import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Developers from "./components/Developers";
import SelectedTeam from "./components/SelectedTeam";
import "./styles/styles.scss";

const App  = () => (
  <Provider store={store}>
    <main className="app--wrapper">
      <aside>
	      <h1>Team Manager</h1>
	      <Developers />
      </aside>
      <SelectedTeam />
    </main>
  </Provider>
)

export default App;
