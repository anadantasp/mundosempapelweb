import NavBar from "../../components/navbar";
import Button from "../../components/button";
import SideBar from "@/components/sidebar";
import { PlusIcon } from '@heroicons/react/24/solid'
import DataRow from "./datarow";

async function carregarDados() {
    const url = "http://localhost:8080/categorias"
    const resposta = await fetch(url)
    if (resposta.status !== 200) {
        alert("erro ao buscar dados das categorias")
        return
    }

    return await resposta.json()
}

export default async function PageCategorias() {



    const categorias = await carregarDados()

    return (
        <>
            <NavBar />

           
            <div className="flex border min-h-screen">
                <SideBar />

                <main className="mt-10 pl-4 w-full">

                    <div className="w-min">
                        <Button href="/categorias/new" className="w-10" >ADICIONAR</Button>
                    </div>
            
                    <div className="pr-3">
                        {categorias.map(categoria => <DataRow key={categoria.id} categoria={categoria} />)}
                    </div>
                </main>
            </div>




        </>
    )
}