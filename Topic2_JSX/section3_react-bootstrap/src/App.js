import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // console.log(data);
  return (
    <Container>
      {/* Header */}
      <Header/>

      {/* Main */}
      <Main/>

      {/* Footer */}
      <Footer/>
    </Container>
  );
}

export default App;
