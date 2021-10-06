import { Route, Switch } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import Homepage from "../pages/homepage.jsx";
import List from "../pages/list";

const Routers = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/:section">
          <List />{" "}
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default Routers;
