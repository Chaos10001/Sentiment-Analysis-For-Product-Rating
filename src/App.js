import "./App.scss";
import Main from "./component/initial";
import ProductList from "./component/Products/Product-list/ProductList";
import FirstProduct from "./component/Products/Product-items/FirstProduct";
import SecondProduct from "./component/Products/Product-items/SecondProduct";
import ThirdProduct from "./component/Products/Product-items/ThirdProduct";
import ForthProduct from "./component/Products/Product-items/ForthProduct";
import FifthProduct from "./component/Products/Product-items/FifthProduct";
import SixthProduct from "./component/Products/Product-items/SixthProduct";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FeedBack from "./component/FeedBack/FeedBack";
import Login from "./component/Login Details/Login/Login";
import SignUp from "./component/Login Details/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <video src="./background.mp4" autoPlay loop muted />
      <Router>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/product-list">
          <ProductList />
        </Route>
        <Route path="/first-item">
          <FirstProduct />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/second-item">
          <SecondProduct />
        </Route>
        <Route path="/third-item">
          <ThirdProduct />
        </Route>
        <Route path="/forth-item">
          <ForthProduct />
        </Route>
        <Route path="/fifth-item">
          <FifthProduct />
        </Route>
        <Route path="/sixth-item">
          <SixthProduct />
        </Route>
        <Route path="/feedback">
          <FeedBack />
        </Route>
      </Router>
    </div>
  );
}
export default App;
