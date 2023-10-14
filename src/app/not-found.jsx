import Button from "../components/button";


export default function NotFound() {
    return (
        <>
            <main className="flex justify-between bg-purple mt-10 mx-auto rounded p-4 max-w-lg">
                <h2>Página não encontrada</h2>
                <Button href="/">HOME</Button>
            </main>
        </>
    )
} 