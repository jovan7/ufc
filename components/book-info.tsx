import {MessageCircle, Phone, ShieldAlert} from "lucide-react";

export default function BookInfo() {
    return (
        <section id="booking" className="py-24 px-6 relative overflow-hidden bg-zinc-900">
            <div className="absolute -right-20 top-20 w-96 h-96 bg-red-900/20 rounded-full blur-[100px]"></div>

            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-6">
                            Spremni za <br/><span className="text-red-600">Borbu?</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8">
                            Mi ne komplikujemo. Termini se zakazuju direktno.
                            Svi članovi su povezani, svi termini su transparentni.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 bg-zinc-950 border-l-4 border-green-600">
                                <MessageCircle className="text-green-500"/>
                                <div>
                                    <h4 className="font-bold uppercase">WhatsApp Grupa</h4>
                                    <p className="text-xs text-zinc-500">Termini se objavljuju u grupi. Lajkuj za
                                        potvrdu.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-zinc-950 border-l-4 border-zinc-700">
                                <ShieldAlert className="text-zinc-500"/>
                                <div>
                                    <h4 className="font-bold uppercase">Oprema</h4>
                                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                                        Ponesite svoju ili kupite profesionalnu opremu u klubu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative bg-zinc-950 border border-zinc-800 p-8 md:p-12 text-center group hover:border-red-900/50 transition-all duration-500 shadow-2xl">
                        <div
                            className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <MessageCircle size={150}/>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div
                                className="w-20 h-20 bg-green-900/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30 text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.15)] animate-pulse">
                                <Phone size={36}/>
                            </div>

                            <h3 className="text-4xl font-black uppercase italic mb-4 tracking-tighter">
                                Prijavi se <span className="text-red-600">Odmah</span>
                            </h3>

                            <p className="text-zinc-500 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                                Klikni ispod da pošalješ poruku za probni trening ili da zatražiš pristup grupi za
                                termine.
                            </p>

                            <div className="flex flex-col gap-4 w-full max-w-xs">
                                <a
                                    href="https://wa.me/381603199388?text=Pozdrav,%20želim%20da%20zakažem%20probni%20trening"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-green-600 text-white py-4 px-6 font-bold uppercase tracking-wider hover:bg-green-500 transition shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2 skew-x-[-6deg] group/btn"
                                >
                                        <span className="skew-x-[6deg] flex items-center gap-2"><MessageCircle
                                            size={20}/> Pošalji Poruku</span>
                                </a>
                            </div>
                            <p className="text-xs text-zinc-600 mt-6 font-mono">
                                * Komunikacija se odvija isključivo putem WhatsApp aplikacije
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}