import NotFoundUser from '../NotFoundUser';
import styles from './styles.module.css'

function RenderProfile ( {obj}: {obj: any}  ) {  //{ avatar, name, bio}: {avatar: string, name: string, bio: string | null}

    if (obj.length === 0) {
        return;
    } else if (obj[0] === 'Not Found') {
        return <NotFoundUser />
    } else {
        return (
            <div className={styles.renderProfile}>
                <img src={obj[0].avatar_url} alt="Foto de perfil" />

                <div className={styles.textRender}>
                    <h2>{obj[0].name}</h2>
                    <p>{obj[0].bio === null ? "Usuário não possui BIO." : obj[0].bio}</p>
                </div>
            </div>
        )
    }    
}

export default RenderProfile;