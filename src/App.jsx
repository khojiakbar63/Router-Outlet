
import { MainSection } from './components/layouts';
import { Header, Footer } from './components';
import { Outlet } from 'react-router';




const App = () => {

  

  return (

    <>
        <Header/>
      <MainSection>
      <Outlet/>
      </MainSection>
        <Footer/>
    </>
  );
};

export default App;