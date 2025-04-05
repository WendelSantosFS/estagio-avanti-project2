import styles from  "./app.module.css"
import Title from "./components/Title"
import SearchUser from "./components/SearchUser"

function App() {
  return (
    <div className={styles.divApp}>
      <Title />
      <SearchUser />
    </div>
  )
}

export default App
