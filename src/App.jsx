import Header from "./Components/Header.jsx"
import InputBox from "./Components/InputBox.jsx";
import Container from "./Components/Container.jsx" 
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <main className="wrapContent">
        <Container/>
      </main>
    </>
  )
}
