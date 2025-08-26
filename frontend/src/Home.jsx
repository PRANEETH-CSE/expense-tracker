import Expenses from './showexpense.jsx'
import Header from './navbar.jsx'
import {motion} from 'framer-motion'

function Home() {
  return (
    <>
      <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{ opacity:0 }}
    transition={{duration:3}}>

      <Expenses />
      </motion.div>
    </>
  )
}
export default Home