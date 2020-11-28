import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import MovieDetailHome from "./pages/movie-detail";
import CheckoutHome from "./pages/checkout/index";
import LoginHome from "./pages/login/index";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import SignupHome from "./pages/signup/index";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* url : http://localhost:3000/sign-in */}
        <Switch>
          {/* http://localhost:3000/ */}
          <Route path="/" exact={true}>
            <Home />
          </Route>
          {/* http://localhost:3000/sign-in */}
          <Route path="/sign-in">
            <LoginHome />
          </Route>
          <Route path="/movie-detail/:maPhim">
            <MovieDetailHome />
          </Route>
          <Route ơpath="/signup">
            <SignupHome/>
          </Route>
          <Route path="/checkout/:maLichChieu">
            <CheckoutHome />
          </Route>
         
          {/* khi url : http://localhost:3000/home => http://localhost:3000/ */}
          <Route path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
