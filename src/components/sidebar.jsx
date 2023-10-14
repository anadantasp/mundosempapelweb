
export default function SideBar(){

    return(
        <aside className="bg-purple-900 mt-10 w-1/5">
            <ul className="flex-row">
                <li className="p-4 border-b border-purple-400 text-sm">Meus Produtos</li>
                <li  className="p-4 border-b border-purple-400 text-purple-400 text-sm">Minhas Categorias</li>
                <li  className="p-4 border-b border-purple-400 text-sm">Meus Usuários</li>
            </ul>
        </aside>
    )

}