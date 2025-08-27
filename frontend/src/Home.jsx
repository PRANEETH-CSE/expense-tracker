import Expenses from './showexpense.jsx'
import Header from './navbar.jsx'
import {motion} from 'framer-motion'

function Home({sorte}) {
  
  return (
    <>
      <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{ opacity:0 }}
    transition={{duration:1}}>
      
      <Expenses sorting={sorte}  />
      </motion.div>
    </>
  )
}
export default Home