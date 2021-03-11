import React from "react";
import "./App.css";
import Header from "./app/components/Header/Header";
import MailList from "./app/components/MailList/MailList";
import Sidebar from "./app/components/Sidebar/Sidebar";
import MailView from "./app/components/MailView/MailView";
import { Switch, Route, Router } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";

export const history = createBrowserHistory();

function App() {
  const { menuState } = useSelector((state: any) => ({
    menuState: state.menuState,
  }));
  return (
    <div className="App">
      <Header />
      <Grid container className="appbody">
        <Grid
          className={
            menuState.isCollapsed ? "--collapsed sticky-item" : "sticky-item"
          }
          item
          xs={2}
        >
          <Sidebar />
        </Grid>
        <Grid item xs={menuState.isCollapsed ? 12 : 10}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={MailList}></Route>
              <Route exact path="/mail" component={MailView}></Route>
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
