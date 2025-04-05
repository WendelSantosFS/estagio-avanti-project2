import styles from './styles.module.css'

const Title:React.FC = () => {
    return(

        <div className={styles.title}>

            <img className={styles.iconGit} src="./img/iconGitHub.png" alt="Ícone do GitHub" />
            <h1>Perfil</h1>
            <img className={styles.textGit} src="./img/gitHub.png" alt="GitHub" />

        </div>
    )
}

export default Title;