'use client';

import {useState} from "react";
import {
    Sword,
    Target,
    ShieldAlert,
    Menu,
    X,
    ChevronRight,
    Dumbbell,
    Users,
    Clock
} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import BookInfo from "@/components/book-info";
import Faq from "@/components/faq";
import Merch from "@/components/merch";
import Gym from "@/components/gym";
import Team from "@/components/team";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setMobileMenuOpen(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-red-700 selection:text-white overflow-x-hidden">

            {/* Navigation */}
            <nav
                className="fixed w-full z-50 bg-zinc-950/65 backdrop-blur-md border-b border-red-700/30 py-4 shadow-lg shadow-black/50">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-black italic tracking-tighter uppercase flex items-center gap-2">
                        <Image src="/logo.webp" className="w-full" alt="underground fight club pirot" width="50" height="50"/>
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

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={30}/> : <Menu size={30}/>}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
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

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop"
                        alt="Gym Background"
                        className="w-full h-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"/>
                    <div
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-zinc-950"/>
                </div>

                <div className="container relative z-10 px-6 text-center">
                    <div
                        className="inline-block mb-4 border border-red-600/50 bg-red-950/20 px-4 py-1 rounded-full backdrop-blur-sm">
                        <span className="text-red-500 font-mono text-sm tracking-[0.2em] uppercase">Est. 2023 // Pirot, Srbija</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-[0.9] mb-6">
                      <span
                          className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800 break-words">Underground</span>
                        <br/>
                        <span className="text-white">Fight Club</span>
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 tracking-wide font-light">
                        Iskovani u senci. Elitni borilački trening za civile i profesionalce.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => scrollToSection('programs')}
                            className="group relative px-8 py-4 bg-white text-black font-black uppercase tracking-wider overflow-hidden cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                            <span className="relative flex items-center gap-2">
                Počni sa Treningom <ChevronRight className="group-hover:translate-x-1 transition-transform"/>
              </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
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

            <Team />
            <Gym />
            <Merch />
            <Faq />
            <BookInfo />
            <Footer />
        </div>
    );
}
