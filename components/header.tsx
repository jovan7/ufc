"use client";
import Link from "next/link";
import {Menu, X} from "lucide-react";
import {useState} from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setMobileMenuOpen(false);
        }
    };
    return (
        <>
            <nav
                className="fixed w-full z-50 bg-zinc-950/65 backdrop-blur-md border-b border-red-700/30 py-2 shadow-lg shadow-black/50">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/"
                          className="text-2xl font-black italic tracking-tighter uppercase flex items-center gap-2">
                        <img src="/logo.webp" className="w-[50px]" alt="underground fight club pirot" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-wider text-sm">
                        <button onClick={() => scrollToSection('programs')}
                                className="hover:text-red-500 transition-colors cursor-pointer">Programi
                        </button>
                        <button onClick={() => scrollToSection('team')}
                                className="hover:text-red-500 transition-colors cursor-pointer">Tim
                        </button>
                        <button onClick={() => scrollToSection('gym')}
                                className="hover:text-red-500 transition-colors cursor-pointer">Teretana
                        </button>
                        <button onClick={() => scrollToSection('shop')}
                                className="hover:text-red-500 transition-colors cursor-pointer">Oprema
                        </button>
                        <button onClick={() => scrollToSection('feed')}
                                className="hover:text-red-500 transition-colors cursor-pointer text-red-500 hidden">Instagram
                        </button>
                        <button
                            onClick={() => scrollToSection('booking')}
                            className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 skew-x-[-12deg] border border-red-500 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all cursor-pointer"
                        >
                            <span className="block skew-x-[12deg]">Zakaži Trening</span>
                        </button>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={30}/> : <Menu size={30}/>}
                    </button>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center space-y-8 uppercase font-black text-2xl tracking-widest">
                    <button onClick={() => scrollToSection('programs')} className="hover:text-red-600">Programi</button>
                    <button onClick={() => scrollToSection('team')} className="hover:text-red-600">Treneri</button>
                    <button onClick={() => scrollToSection('gym')} className="hover:text-red-600">Teretana</button>
                    <button onClick={() => scrollToSection('shop')} className="hover:text-red-600">Oprema</button>
                    <button onClick={() => scrollToSection('feed')}
                            className="hover:text-red-600 text-red-600 hidden">Instagram
                    </button>
                    <button onClick={() => scrollToSection('booking')}
                            className="text-red-600 border-b-2 border-red-600 pb-2">Zakaži Odmah
                    </button>
                </div>
            )}
        </>
    )
}