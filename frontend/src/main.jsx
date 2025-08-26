import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {motion} from 'framer-motion';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{ opacity:0 }}
    transition={{duration:5}}>

    <App />
    </motion.div>
  </StrictMode>,
)
