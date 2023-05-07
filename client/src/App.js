import './App.css';
import { Navbar , Hero , Projects , Team , Roadmap , WhitePaper} from './components';
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <Projects />
        <Team />
        <Roadmap />
        <WhitePaper />
      </div>
    </BrowserRouter>
  );
}

export default App;
