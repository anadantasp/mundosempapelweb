import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between bg-purple-900 p-6 w-full">
            <div className="w-2/6">
                <Link href="/">
                    <h1 className="text-2xl text-slate-100">MUNDOS EM PAPEL</h1>
                </Link>
            </div>
            <div className="flex-row max-w-lg  w-2/6">
                <input className="border-none rounded-md bg-green w-full" type="search" name="busca" id="busca" />
                <ul className="flex justify-center gap-4 py-3">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/produtos"><li>Produtos</li></Link>
                    <Link href="/categorias"><li>Categoria</li></Link>
                </ul>
            </div>
            <div className="w-2/6 flex justify-end">
                <div className="h-12 w-12 rounded-full overflow-hidden border-solid border-2 border-sky-500">
                    <img src="https://github.com/anadantasp.png" alt="avatar" />
                </div>
            </div>

        </nav>
    )
}