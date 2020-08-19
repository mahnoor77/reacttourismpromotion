import React from "react";
//
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TopMenu from "./Components/TopMenu";

import LandingPage from "./Components/LandingPage";
import Guides from "./Components/Guides/Guides";
import notFound from "./Components/Notfound";
import NewGuide from "./Components/Guides/NewGuide";
import UpdateGuide from "./Components/Guides/UpdateGuide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import kashmir from "./Components/Kashmir";
import gilgit from "./Components/Gilgit";
import kpk from "./Components/KPK";
import punjab from "./Components/Punjab";
import balochistan from "./Components/Balochistan";
import sindh from "./Components/Sindh";

function App() {
  const notify = () => toast("Wow so easy !");

  return (
    <Router>
      <div>
        <ToastContainer />

        <TopMenu />

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/guides/new" component={NewGuide} />
          <Route path="/guides/update/:id" component={UpdateGuide} />
          <Route path="/guides" component={Guides} />
          <Route path="/kashmir" component={kashmir} />
          <Route path="/gilgit" component={gilgit} />
          <Route path="/kpk" component={kpk} />
          <Route path="/punjab" component={punjab} />
          <Route path="/balochistan" component={balochistan} />
          <Route path="/sindh" component={sindh} />

          <Route path="/" exact component={LandingPage} />
          <Route path="/not-found" component={notFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
