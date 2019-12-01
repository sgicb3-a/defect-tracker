import React from "react";
import "./App.css";
import MainDrawer from "./components/Main/MainDrawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/LoginComponent/SignIn";
import ForgotPassword from "./components/LoginComponent/ForgotPassword";
import ChangePassword from "./components/LoginComponent/ChangePassword";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

function App() {
  let today = new Date();
  let time = today.getHours();

  let night = false;

  if (time > 17 || time < 6) {
    night = true;
  }

  const [dark, setDark] = React.useState(night);

  const changeTheme = () => {
    setDark(!dark);
  };

  const prefersDarkMode = dark;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
		  <Route exact path="/defect-tracker">
            <Login />
          </Route>
          <Route path="/defect-tracker/login">
            <Login />
          </Route>
          <Route path="/defect-tracker/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/defect-tracker/change-password">
            <ChangePassword />
          </Route>
          <Route path="/defect-tracker/dashboard/company">
            <ThemeProvider theme={theme}>
      <MainDrawer onToggleDark={changeTheme} isDark={dark}/>
    </ThemeProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
