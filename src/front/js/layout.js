import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { AccountCreation } from "./pages/creation";
import { Settings } from "./pages/settings";
import { Listing } from "./component/listing";
import { EditListing } from "./component/editlisting";
import injectContext from "./store/appContext";

import { Navbar1 } from "./component/navbar1";
import { Footer } from "./component/footer";
import { DetailedView } from "./pages/detailedView";
import { Display } from "./component/carousel";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar1 />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/display">
              <Display />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/details/:theid">
              <DetailedView />
            </Route>
            <Route exact path="/create">
              <AccountCreation />
            </Route>
            <Route exact path="/accountsettings">
              <Settings />
            </Route>
            <Route exact path="/projectcreation">
              <Listing />
            </Route>
            <Route exact path="/projectedit/:id">
              <EditListing />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
