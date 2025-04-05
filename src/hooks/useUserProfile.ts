import { UserProfile } from "../services/UserProfile";

function useUserProfile () {

    const fetchApi = async (user: string): Promise<UserProfile | string> => {
        const response = await fetch(`https://api.github.com/users/${user}`)
        const data = await response.json()

        if (data.message) {
            return 'Not Found'
        } else {
            const avatar_url = data.avatar_url
            const name = data.name
            const bio = data.bio
            return   { avatar_url, name, bio}
        }        
    }
    return { fetchApi }
}

export default useUserProfile;