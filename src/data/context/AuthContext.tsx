import route from "next/router"
import { createContext, useState } from "react"
import firebase from "../../firebase/Config"
import Usuario from "../../model/Usuario"
import Cookies from "js-cookie"

interface AuthContextProps{
    usuario?: Usuario
    loginGoogle?: () => Promise<void>

}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome:usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL,
    }
}
function gerenciarCookie(logado: boolean){
    if(logado){
        Cookies.set("admin-template-cod3r-auth", logado,{
            expires: 7
        })
    }else{
        Cookies.remove("admin-template-cod3r-auth")
    }
}


export function AuthProvider(props){
    const [usuario, setUsuario] = useState<Usuario>(null)
    const [carregando, setCarregando] = useState(true)

    async function configurarSessao(usuarioFirebase){
        if(usuarioFirebase?.email){
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        }else{
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    async function loginGoogle(){
        const resposta = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
        if(resposta.user?.email){
            const usuario = await usuarioNormalizado(resposta.user)
            setUsuario(usuario)
            route.push('/')
        }
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