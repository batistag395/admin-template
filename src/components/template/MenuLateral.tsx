import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Menuitem from "./MenuItem";
import Logo from './Logo'
export default function MenuLateral(props){
    return (
        <aside className="
            flex flex-col 
            bg-gray-200 text-gray-700
            dark:bg-gray-900 
        ">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500  to-purple-800 h-20 w-20">
                <Logo />
            </div>
            <ul className="flex-grow">
                <Menuitem url="/" texto="Inicio" icone={IconeCasa}/>
                <Menuitem url="/ajustes" texto="Ajustes" icone={IconeAjustes}/>
                <Menuitem url="/notificacoes" texto="Notificações" icone={IconeSino}/>
            </ul>
            <ul className="">
                <Menuitem url="/" texto="Sair" icone={IconeSair} onClick={() => console.log('logout')} 
                className={`
                    text-red-600 
                    hover:bg-red-400 
                    hover:text-white
                    dark:text-red-400 
                    dark:hover:text-white
                `}/>
            </ul>
        </aside>
    )
}