import Link from "next/link";
import {Clock, Instagram, MapPin, Phone} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-6">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                    <div>
                        <Link href="/" className="block mb-6">
                            <img src="/logo.webp" className="w-[70px] mx-auto md:ml-0"
                                 alt="underground fight club pirot"/>
                        </Link>
                        <p className="text-zinc-500 text-sm mb-6">
                            Underground Fight Club je premijerni borilački centar u Pirotu.
                            Fokusirani na rezultate, disciplinu i izgradnju karaktera kroz borbu.
                        </p>
                        <p className="text-zinc-500 text-sm mb-6">
                            Broj telefona: <a href="tel:0603199388">060 3199388</a>
                        </p>
                        <p className="text-zinc-500 text-sm mb-6">
                            Maticni broj: 123123
                            <br />
                            PIB: 123123
                        </p>

                        {/* Socials */}
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="https://www.instagram.com/underground_fight_club23/?hl=en" target="_blank"
                               rel="noreferrer"
                               className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                                <Instagram size={20}/>
                            </a>
                            <a href="tel:0603199388"
                               className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                                <Phone size={20}/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                            <MapPin className="text-red-600" size={20}/> Lokacija
                        </h3>
                        <p className="text-zinc-400 mb-2">Pirot, Srbija</p>
                        <p className="text-zinc-400 mb-2">Lava Tolstoja BB</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                            <Clock className="text-red-600" size={20}/> Radno Vreme
                        </h3>
                        <div
                            className="flex justify-between w-full max-w-xs text-zinc-400 border-b border-zinc-900 pb-2 mb-2">
                            <span>Pon - Pet:</span>
                            <span className="font-bold text-white">09:00 - 22:00</span>
                        </div>
                        <div className="w-full max-w-xs text-zinc-600 text-xs italic mt-2">
                            Vikendom ne radimo (osim za zakazane seminare)
                        </div>
                    </div>
                </div>

                <div
                    className="border-t border-zinc-900 pt-8 text-center text-zinc-700 text-xs font-mono uppercase space-y-2">
                    <div>&copy; {new Date().getFullYear()} Underground Fight Club. Sva prava zadržana.</div>
                    <div className="pt-2">
                        <a href="https://jovanjonic.com" target="_blank" rel="noreferrer"
                           className="hover:text-red-600 transition-colors">
                            Izrada sajta: jovanjonic.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}