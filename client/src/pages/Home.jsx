import React , {useEffect , useState} from 'react'

import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [loading , setLoading] = useState(true)
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
      navigate('/home')
    } , 5700)
  } , [loading])
  


  return (
    <>
      {loading && <Loader /> }
    </>
  );}

export default Home