import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Container />
      </main>
      <Footer />
    </>
  );
}
