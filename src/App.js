import "./App.css";
import { Route, Switch } from "react-router-dom";
import EntryPage from "./Components/Pages/EntryPage";
import SecondPage from "./Components/Pages/SecondPage";
import ThirdPage from "./Components/Pages/ThirdPage";
import FourthPage from "./Components/Pages/FourthPage";
import AppContextProvider from "./Components/Pages/AppContextProvider";

function App() {
  return (
    <div>
      <AppContextProvider>
        <Switch>
          <Route exact path="/">
            <EntryPage />
          </Route>
          <Route path="/second" component={SecondPage} />
          <Route path="/third" component={ThirdPage} />
          <Route path="/fourth">
            <FourthPage />
          </Route>
        </Switch>
      </AppContextProvider>
    </div>
  );
}

export default App;
