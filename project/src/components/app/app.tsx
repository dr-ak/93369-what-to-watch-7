import MainPage from '../main-page/main-page';
import {Film} from '../types';

function App(props: Film) {
  return (
    <MainPage {...props}/>
  );
}

export default App;
