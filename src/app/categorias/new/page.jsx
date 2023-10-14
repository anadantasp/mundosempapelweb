"use client"

import NavBar from "@/components/navbar"
import Button from "@/components/button"
import InputText from "@/components/input-text"
import { create } from "@/actions/categorias"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


export default function CategoriaNew() {

    const { push } = useRouter()

    async function onSubmit(data) {
        const resp = await create(data)

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/categorias")

    }

    return (
        <div className="h-screen bg-purple-500">
            <NavBar />

            <main className="container bg-green-500 mt-10 mx-auto rounded p-4 max-w-xl">
                <h2>Cadastrar categoria</h2>

                <form action={onSubmit} className="flex flex-col items-center gap-2 mt-2">
                    <InputText name="nome" label={"nome"} />
                    <Button type="button">salvar</Button>
                </form>

            </main>


        </div>
    )
}