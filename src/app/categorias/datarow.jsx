export default function DataRow({ categoria }) {
    return (
        <div id="data-row" className="flex justify-between bg-slate-100 text-purple-900 rounded px-3 py-4 space-y-2 mt-3 ">
            <span>{categoria.nome}</span>

            <div className="flex items-center gap-6 ">
                <span>EDITAR</span>
                <span>EXCLUIR</span>
            </div>

        </div>
    )
}