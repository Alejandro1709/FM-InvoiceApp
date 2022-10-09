import Container from './components/Container/container';
import Header from './components/Header/header';
import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Menu />
      <Container>
        <Header />
      </Container>
    </Wrapper>
  );
}

export default App;
