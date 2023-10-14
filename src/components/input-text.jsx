export default function InputText({ label, ...props }) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="">{label}</label>
            <input type="text" {...props} className="bg-green-500 border-purple-900 border-2 max-w-md h-12 rounded-lg px-2 py-1" />
        </div>
    )
}