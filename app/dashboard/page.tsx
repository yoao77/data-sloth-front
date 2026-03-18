import { DeviceHub, Memory, Storage, AcUnit, Warning, BugReport, FilterList } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function Dashboard() {
    return (
        <div className="text-black space-y-6">
            {/* ================= Painel de Infraestrutura ================= */}
            <section className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Métricas de Infraestrutura</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded">
                        <DeviceHub className="text-blue-500 mb-2" />
                        <span className="text-sm">Uso CPU</span>
                        <span className="font-bold">45%</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded">
                        <Memory className="text-green-500 mb-2" />
                        <span className="text-sm">Memória RAM</span>
                        <span className="font-bold">6GB / 16GB</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded">
                        <Storage className="text-purple-500 mb-2" />
                        <span className="text-sm">Disco</span>
                        <span className="font-bold">200GB / 500GB</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded">
                        <AcUnit className="text-red-500 mb-2" />
                        <span className="text-sm">Temperatura</span>
                        <span className="font-bold">65°C</span>
                    </div>
                </div>
                {/* Alertas */}
                <div className="mt-4 p-2 bg-red-50 text-red-700 rounded flex items-center gap-2">
                    <Warning />
                    <span>Uso de CPU acima de 80%!</span>
                </div>
            </section>

            {/* ================= Painel de Aplicação ================= */}
            <section className="bg-white shadow rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-4">Métricas da Aplicação</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded">
                        <BugReport className="text-blue-500 mb-2" />
                        <span className="text-sm">Requests/s</span>
                        <span className="font-bold">120</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded">
                        <BugReport className="text-red-500 mb-2" />
                        <span className="text-sm">Taxa de Erros</span>
                        <span className="font-bold">5%</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded">
                        <BugReport className="text-yellow-500 mb-2" />
                        <span className="text-sm">Requests Falhas</span>
                        <span className="font-bold">15</span>
                    </div>
                    <div className="flex flex-col items-center bg-gray-50 p-4 rounded">
                        <BugReport className="text-green-500 mb-2" />
                        <span className="text-sm">Requests Sucesso</span>
                        <span className="font-bold">105</span>
                    </div>
                </div>
            </section>

            {/* ================= Painel de Logs ================= */}
            <section className="bg-white shadow rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Logs da Aplicação</h2>
                    <IconButton color="primary">
                        <FilterList />
                    </IconButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                    <div className="p-4 bg-gray-50 rounded text-center">
                        <span className="text-sm block">Total Logs/min</span>
                        <span className="font-bold">300</span>
                    </div>
                    <div className="p-4 bg-red-50 rounded text-center">
                        <span className="text-sm block">Erros</span>
                        <span className="font-bold">12</span>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded text-center">
                        <span className="text-sm block">Avisos</span>
                        <span className="font-bold">8</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded text-center">
                        <span className="text-sm block">Eventos Críticos</span>
                        <span className="font-bold">2</span>
                    </div>
                    <div className="p-4 bg-green-50 rounded text-center">
                        <span className="text-sm block">Informações</span>
                        <span className="font-bold">278</span>
                    </div>
                </div>

                {/* Lista de Logs */}
                <div className="bg-gray-50 rounded max-h-96 overflow-y-auto">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="p-2 border-b hover:bg-gray-100 cursor-pointer">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-sm">2026-03-18 12:0{i}:00</span>
                                <span className="text-red-500 font-semibold">ERRO</span>
                            </div>
                            <div className="text-sm">Falha ao processar request no endpoint /api/data</div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
