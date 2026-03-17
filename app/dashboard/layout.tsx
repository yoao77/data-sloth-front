export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex flex-col">

            {/* Header */}
            <header className="w-full bg-gray-900 text-gray-100 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-700 rounded"></div>
                    <h1 className="text-lg font-semibold">Meu Sistema</h1>
                </div>

                <ul className="flex items-center gap-4">
                    <li><button className="px-3 py-1 rounded hover:bg-gray-800">Login</button></li>
                    <li><button className="px-3 py-1 rounded hover:bg-gray-800">Cadastro</button></li>
                    <li><button className="px-3 py-1 rounded hover:bg-gray-800">Ajuda</button></li>
                </ul>
            </header>

            {/* Conteúdo abaixo do header */}
            <div className="flex flex-1">

                {/* Sidebar */}
                <aside className="w-64 bg-gray-900 text-gray-100 p-5">
                    <h2 className="text-xl font-bold mb-6">Menu</h2>

                    <ul className="space-y-2">
                        <li><a href="#" className="block p-2 rounded hover:bg-gray-800">Home</a></li>
                        <li><a href="#" className="block p-2 rounded hover:bg-gray-800">Dashboard</a></li>
                        <li><a href="#" className="block p-2 rounded hover:bg-gray-800">Relatórios</a></li>
                        <li><a href="#" className="block p-2 rounded hover:bg-gray-800">Usuários</a></li>
                        <li><a href="#" className="block p-2 rounded hover:bg-gray-800">Configurações</a></li>
                    </ul>
                </aside>

                {/* Main */}
                <main className="flex-1 bg-gray-100 p-6">
                    <h2 className="text-2xl font-bold mb-4 text-black">Conteúdo principal</h2>
                    <p>Aqui vai sua aplicação...</p>
                </main>

            </div>
        </div>
    );
}
