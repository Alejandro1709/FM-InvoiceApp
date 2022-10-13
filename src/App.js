import { Route } from 'wouter';
import Container from './components/Container';
import Footer from './components/Footer/footer';
import Menu from './components/Menu';
import Wrapper from './components/Wrapper';
import InvoicesPage from './pages/invoices-page';

function App() {
  return (
    <Wrapper>
      <Menu />
      <Container>
        <Route path='/' component={InvoicesPage} />
        <Route path='/invoices/:code'>Inovice Page</Route>
      </Container>
      <Footer />
    </Wrapper>
  );
}

export default App;
