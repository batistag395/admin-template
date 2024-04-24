import route from "next/router"
import { createContext, useState } from "react"
import firebase from "../../firebase/Config"
import Usuario from "../../model/Usuario"

interface AuthContextProps{
    usuario?: Usuario
    loginGoogle?: () => Promise<void>

}

const AuthContext = createContext<AuthContextProps>({})

// async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{
//     const token = await usuarioFirebase.getIdToken()
//     return {
//         uid: usuarioFirebase.uid,
//         nome:usuarioFirebase.displayName,
//         email: usuarioFirebase.email,
//         token,
//         provedor: usuarioFirebase.providerData[0].providerId,
//         imagemUrl: usuarioFirebase.photoURL

//     }
// }

export function AuthProvider(props){
    const [usuario, setUsuario] = useState<Usuario>(null)

    async function loginGoogle(){
        console.log("login google")
        route.push('/')
    }
    return (
        <AuthContext.Provider value ={{
            usuario,
            loginGoogle
        }}>
           {props.children}

        </AuthContext.Provider>
    )
}

export default AuthContext