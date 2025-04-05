import styles from "./styles.module.css"


function NotFoundUser () {
    return(
        <div className={styles.notFound}>
            <p>Nenhum perfil foi encontrado com esse nome de usuário. <br /> Tente novamente.</p>
        </div>
    )
}







export default NotFoundUser;