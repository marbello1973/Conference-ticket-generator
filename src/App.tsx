import styles from './App.module.css'
import { Circulo } from './component/circulo/Circulo'
import { Lineas2 } from './component/lieneas-ondulada2/Lineas2'
import { Lineas1 } from './component/lineas-ondulada1/Lineas1'
import { Lineas } from './component/lineas/Lineas'

function App() { 

  return (    
      <div className={styles.container}>  
        <div>
          <Lineas/>
          <div className={styles.circulo}><Circulo/></div>  
          <div className={styles.lineas1}><Lineas1/></div>
          <div className={styles.lineas2}><Lineas2/></div>      
        </div> 
      </div>
      
   
  )
}

export default App
