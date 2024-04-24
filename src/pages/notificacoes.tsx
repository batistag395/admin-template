import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificaçoes(){
    const dados = useAppData()
    return (
        <Layout titulo="Notificações" subtitulo="Aqui você irá gerenciar as notificações.">
            <button onClick={dados.alternarTema}>Alternar Tema</button>
        </Layout>
    )
}