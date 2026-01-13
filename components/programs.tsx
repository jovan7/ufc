import {Dumbbell, ShieldAlert, Sword, Target, Users} from "lucide-react";

export default function Programs() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section id="programs" className="py-24 px-6 bg-zinc-950 relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                        Izaberi Svoj <span className="text-red-600">Put</span>
                    </h2>
                    <div className="h-1 w-24 bg-red-600 mx-auto skew-x-[-20deg]"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Recreational */}
                    <div
                        className="group relative bg-zinc-900 border border-zinc-800 p-8 hover:border-red-900/50 transition-all duration-300 hover:-translate-y-2">
                        <div
                            className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users size={80}/>
                        </div>
                        <div
                            className="w-16 h-16 bg-zinc-800 rounded-sm flex items-center justify-center mb-8 group-hover:bg-red-700 transition-colors">
                            <Dumbbell className="text-white" size={32}/>
                        </div>
                        <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">Rekreativni</h3>
                        <ul className="space-y-3 text-zinc-400 mb-8 border-t border-zinc-800 pt-6">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-600"></div>
                                Fitnes i kondicija
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-600"></div>
                                Oslobađanje od stresa
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-600"></div>
                                Osnovna samoodbrana
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-600"></div>
                                Grupna atmosfera
                            </li>
                        </ul>
                        <button
                            onClick={() => scrollToSection('booking')}
                            className="w-full py-3 border border-zinc-700 uppercase font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-colors  cursor-pointer"
                        >
                            Pridruži se Grupi
                        </button>
                    </div>

                    {/* Personal */}
                    <div
                        className="group relative bg-zinc-900 border border-zinc-800 p-8 hover:border-red-900/50 transition-all duration-300 hover:-translate-y-2">
                        <div
                            className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target size={80}/>
                        </div>
                        <div
                            className="w-16 h-16 bg-zinc-800 rounded-sm flex items-center justify-center mb-8 group-hover:bg-red-700 transition-colors">
                            <Sword className="text-white" size={32}/>
                        </div>
                        <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">Personalni</h3>
                        <ul className="space-y-3 text-zinc-400 mb-8 border-t border-zinc-800 pt-6">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-600"></div>
                                1 na 1 Trening
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-600"></div>
                                Plan ishrane
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-600"></div>
                                Tehnička korekcija
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-600"></div>
                                Fleksibilni termini
                            </li>
                        </ul>
                        <button
                            onClick={() => scrollToSection('booking')}
                            className="w-full py-3 border border-zinc-700 uppercase font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer"
                        >
                            Zakaži Privatni
                        </button>
                    </div>

                    {/* Professional / Tactical */}
                    <div
                        className="group relative bg-red-950/10 border border-red-900/30 p-8 hover:bg-red-950/20 transition-all duration-300 hover:-translate-y-2 scale-105 shadow-2xl shadow-black">
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-700 text-white px-4 py-1 text-xs font-black uppercase tracking-widest whitespace-nowrap">
                            Elitni Nivo
                        </div>
                        <div
                            className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ShieldAlert size={80}/>
                        </div>
                        <div
                            className="w-16 h-16 bg-red-900/50 rounded-sm flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors">
                            <ShieldAlert className="text-white" size={32}/>
                        </div>
                        <h3 className="text-2xl font-bold uppercase mb-2 tracking-tight">Taktička Priprema</h3>
                        <p className="text-red-400 text-xs font-mono uppercase mb-4">Vojska // Policija //
                            Specijalci</p>
                        <ul className="space-y-3 text-zinc-300 mb-8 border-t border-red-900/30 pt-6">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-500 shadow-[0_0_5px_red]"></div>
                                Borbena gotovost
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-500 shadow-[0_0_5px_red]"></div>
                                Priprema za prijemne
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-500 shadow-[0_0_5px_red]"></div>
                                Situacije visokog stresa
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-500 shadow-[0_0_5px_red]"></div>
                                Napredna bliska borba
                            </li>
                        </ul>
                        <button
                            onClick={() => scrollToSection('booking')}
                            className="w-full py-3 bg-red-700 text-white uppercase font-bold text-sm tracking-widest hover:bg-red-600 transition-colors cursor-pointer"
                        >
                            Prijavi se za Procenu
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}