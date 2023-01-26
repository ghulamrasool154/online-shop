import Header from "./client/layouts/header/Header";
import Footer from "./client/layouts/footer/Footer";
import Routing from "./routes/Routing";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
