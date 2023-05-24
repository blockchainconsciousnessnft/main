import React , {useEffect , useState} from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Loader from '../components/Loader'

function Home() {
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    } , 5700)
  } , [loading])
  


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Hero />
          <Project />
          <About />
          <Skills />
          <Footer />
        </div>
      )}
    </>
  );}

export default Home