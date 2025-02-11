import styles from './App.module.css'
import { Circulo } from './component/circulo/Circulo'
import { Lineas } from './component/lineas/Lineas'

function App() {
 

  return (    
      <div className={styles.container}>  
        <div><Lineas/>
          <div className={styles.circulo}><Circulo/></div>        
        </div> 
      </div>
      
   
  )
}

export default App
