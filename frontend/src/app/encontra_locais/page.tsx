import { Leaf, MapPin, Store, ArrowLeft, Search, Phone, Clock } from "lucide-react";
const bairros = [
    "Brooklin",
    "Intelargos",
    "Vila Mariana",
    "Saúde",
    "Jabaquara",
    "Ipiranga",
    "Sacomã",
    "Itaim Bibi",
    "Paraíso",
    "Vila Olímpia",
    "Moema"]

export default function Check() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center mb-150">
                <h1 className="py-10 text-3xl font-bold text-gray-900 sm:text-5xl md:text-5xl">
                    Escolha sua região
                </h1>

                <label className="flex flex-col items-center gap-4">
                    <span className="text-lg font-medium text-gray-700">Sua região 📍</span>

                    <select className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500">
                        {bairros.map((bairro) => <option>{bairro}</option>)}
                    </select>

                    <button className="bg-[#374151] px-6 py-3 border border-[#22222248] rounded-[0.8rem] font-bold text-white hover:bg-[#374151e0] transition duration-500 hover:scale-105">
                        Confirmar
                    </button>
                </label>
                <h1 className="py-5 text-3xl font-bold text-gray-900 text-center mt-5">Locais de discartes</h1>
            </div>





        </main>
    );
}