"use client"

import NavBar from "@/components/navbar"
import Button from "@/components/button"
import InputText from "@/components/input-text"
import { create } from "@/actions/categorias"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useState } from "react"


export default function CategoriaNew() {

    const { push } = useRouter()
    const [messages, setMessages] = useState([])

    async function onSubmit(data) {
        const resp = await create(data)

        if (resp?.error) {
            toast.error(resp.error)
            setMessages(resp.messages)
            return
        }

        push("/categorias")

    }

    return (
        <div className="h-screen bg-purple-500">
            <NavBar />

            <main className="container bg-green-500 mt-10 mx-auto rounded p-4 max-w-xl">
                <h2 className="text-purple-900 font-black">Cadastrar categoria</h2>

                <form action={onSubmit} className="flex flex-col items-center gap-2 mt-2">
                    <InputText name="nome" label={"nome"} />
                    <span className="text-red-400">{messages.find(m => m.field === "nome")?.message}</span>
                    <Button type="button">salvar</Button>
                </form>

            </main>


        </div>
    )
}