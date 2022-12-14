import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
