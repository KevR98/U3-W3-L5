import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Container fluid className='px-0'>
        <Row className='g-0 min-vh-100'>
          <Col xs={0} xl={2} className='d-none d-xl-block'>
            <Sidebar />
          </Col>
          <Col xs={12} lg={10}>
            <MyNavbar />
            <Home />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
