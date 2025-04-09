import styles from  "./app.module.css"
import Title from "./components/Title"
import SearchUser from "./components/SearchUser"

function App() {
  return (
    <div>
      <img src="./img/squaresGrey.png" className={styles.squaresBackground}/>
      <div className={styles.circle1Left}>
        <div className={styles.circle1Internal}></div>
      </div>
      <div className={styles.circle2Right}>
        <div className={`${styles.circle2Internal} ${styles.positionCircleRight1}`}></div>
      </div>

      <div className={styles.divApp}>
        <Title />
        <SearchUser />
      </div>
      
    </div>
   
  )
}

export default App
