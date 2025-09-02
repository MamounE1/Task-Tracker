import Header from "./Components/Header.jsx"
import Container from "./Components/Container.jsx" 
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Container/>
      </main>
    </>
  )
}
