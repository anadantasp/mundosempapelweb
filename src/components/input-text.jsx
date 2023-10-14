export default function InputText({ label, ...props }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="text-purple-900 font-medium">{label}</label>
            <input type="text" {...props} className="bg-green-500 border-purple-900 border max-w-full h-12 rounded-lg px-2 py-1" />
        </div>
    )
}