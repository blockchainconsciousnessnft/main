import GlobalStyles from './components/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { useScroll , motion } from 'framer-motion'
import './index.css'
import {original , invert } from './components/ThemeStyle'
import Home from './pages/Home'
import React , {useState , useRef} from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Dashboard from './components/Dashboard';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import DashboardComponents from './components/DashboardComponents/DashboardComponents'
import DashboardRoute from './components/DashboardComponents/DashboardRoute'
import Magazine from './components/DashboardComponents/Magazine';
import Spritual from './components/DashboardComponents/Spritual';
import Radio from './components/DashboardComponents/Radio';
import Encyclopedia from './components/DashboardComponents/Encyclopedia';
import Clarity from './components/DashboardComponents/Clarity';

export const dashboardRoutes = [
  {
    id: 1,
    routeName: 'Magazine'
  },
  {
    id: 2,
    routeName: 'Spritual'
  },
  {
    id: 3,
    routeName: 'Radio'
  },
  {
    id: 4,
    routeName: 'Encyclopedia'
  },
  {
    id: 5,
    routeName: 'Clarity'
  },
]

export const ThemeContext = React.createContext()
const themes = {
  original,
  invert,
}
function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const [theme, setTheme] = useState('original')
  return (
    <ThirdwebProvider activeChain="ethereum">
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          tablet: {
            smooth: true,
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <>
            <ToastContainer />
            <Line>
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="scrollY"
              ></motion.div>
            </Line>
            <GlobalStyles />
            <ThemeProvider theme={themes[theme]}>
              <ThemeContext.Provider value={{ theme, setTheme }}>
                <Router>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                      <Route index element={<DashboardComponents />} />
                      <Route path=':route' element={<DashboardRoute/>} />
                    </Route>
                  </Routes>
                </Router>
              </ThemeContext.Provider>
            </ThemeProvider>
          </>
        </main>
      </LocomotiveScrollProvider>
    </ThirdwebProvider>
  );
}
  const Line = styled.div`
    .scrollY {
      position: fixed; 
      top: 20rem;
      right: 2rem;
      bottom: 20rem;
      width: 0.1px;
      background: '#fff';
      transform-origin: 0%;
      @media screen and (max-width: 640px) {
        display: none;
      }
      @media screen and (max-width: 1024px) {
        /* display: none; */
        
      }
    }
    `

export default App;

 