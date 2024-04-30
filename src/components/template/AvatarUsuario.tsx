import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarDoUsuarioProps{
    className?: string

}

export default function Avatarusuario(props: AvatarDoUsuarioProps){
    const { usuario } = useAuth()
    return (
        <Link href='/perfil'>
            <img 
            src={usuario?.imagemUrl ?? '/images/avatar.svg'} 
            alt='Avatar do Usuário'
            className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}></img>
        </Link>
    )
}