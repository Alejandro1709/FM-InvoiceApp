import Container from './components/Container';
import Menu from './components/Menu';
import Wrapper from './components/Wrapper';
import InvoicesPage from './pages/invoices-page';

function App() {
  return (
    <Wrapper>
      <Menu />
      <Container>
        <InvoicesPage />
      </Container>
    </Wrapper>
  );
}

export default App;
