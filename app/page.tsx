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
    MapPin,
    Clock,
    MessageCircle,
    Phone,
    Heart,
    MessageSquare,
    Instagram
} from 'lucide-react';

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setMobileMenuOpen(false);
        }
    };

    const toggleFaq = (index: any) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Mock Data for Instagram Feed
    const instagramPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop",
            date: "Juče",
            caption: "Fokus na tehniku. Svaki udarac mora da ima nameru. Jutarnja grupa je danas pokidala! 🥊 #UFC23 #Trening",
            likes: 124,
            comments: 8
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop",
            date: "Pre 2 dana",
            caption: "Novi bandažeri su stigli u klub! Dostupni u crnoj i crvenoj boji. Obezbedite svoje na pultu. 🔥",
            likes: 89,
            comments: 12
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
            date: "Pre 5 dana",
            caption: "Pripreme za takmičenje u toku. Naš tim ne spava. Vidimo se u ringu sledećeg meseca! 🏆",
            likes: 256,
            comments: 34
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000&auto=format&fit=crop",
            date: "Pre nedelju dana",
            caption: "Sparring day. Poštovanje protivnika je prvo pravilo kluba. Bez ega, samo rad. 🥋",
            likes: 178,
            comments: 21
        }
    ];

    return (
        <div
            className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-red-700 selection:text-white overflow-x-hidden">

            {/* Navigation - Always Fixed & Blurred */}
            <nav
                className="fixed w-full z-50 bg-zinc-950/85 backdrop-blur-md border-b border-red-700/30 py-4 shadow-lg shadow-black/50">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-black italic tracking-tighter uppercase flex items-center gap-2">
                        <span className="text-red-600 text-4xl">UFC</span>
                        <span className="hidden sm:block">Underground<span className="text-zinc-500">23</span></span>
                    </div>

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

            {/* Hero Section - Font Adjusted for Mobile */}
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

            {/* TEAM SECTION */}
            <section id="team" className="py-24 bg-zinc-900 relative border-t border-zinc-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                            Elitni <span className="text-red-600">Tim</span>
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Ne tražimo izgovore. Naši treneri su aktivni borci i veterani sa dokazanim rezultatima.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Coach 1 */}
                        <div
                            className="group relative h-[400px] bg-black overflow-hidden border border-zinc-800 cursor-pointer">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661670368077-2ed26fdf3319?q=80&w=1805&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Coach"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-black uppercase italic text-white mb-1">Predrag Ranđelović</h3>
                                <p className="text-red-600 font-bold uppercase text-sm mb-2">Diplomirani profesor sporta i fizičkog vaspitanja</p>
                                <p className="text-zinc-400 text-xs">Specijalista za stand-up borbu i taktičku
                                    pripremu.</p>
                            </div>
                        </div>

                        {/* Coach 2 */}
                        <div
                            className="group relative h-[400px] bg-black overflow-hidden border border-zinc-800 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
                                alt="Coach"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-black uppercase italic text-white mb-1">Stefan P.</h3>
                                <p className="text-red-600 font-bold uppercase text-sm mb-2">BJJ & Grappling</p>
                                <p className="text-zinc-400 text-xs">Crni pojas. Fokus na kontrolu i završnice.</p>
                            </div>
                        </div>

                        {/* Coach 3 */}
                        <div
                            className="group relative h-[400px] bg-black overflow-hidden border border-zinc-800 cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1727848480902-beb1959c06f1?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Coach"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-black uppercase italic text-white mb-1">Ana M.</h3>
                                <p className="text-red-600 font-bold uppercase text-sm mb-2">Kondicija & Snaga</p>
                                <p className="text-zinc-400 text-xs">Ekspert za funkcionalni trening i oporavak.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gym Section */}
            <section id="gym" className="py-20 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                                    className="rounded-lg opacity-80 hover:opacity-100 transition duration-500 grayscale hover:grayscale-0"
                                    alt="Gym"/>
                                <img
                                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                                    className="rounded-lg opacity-80 hover:opacity-100 transition duration-500 grayscale hover:grayscale-0 mt-8"
                                    alt="Gym"/>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
                                Hardcore <span className="text-red-600">Teretana</span>
                            </h2>
                            <p className="text-zinc-400 mb-6 text-lg">
                                Nema sjajnih sprava. Nema klima uređaja koji lede. Samo gvožđe, tegovi i atmosfera za
                                rad.
                                Naša teretana je opremljena za funkcionalni trening, powerlifting i kondicionu pripremu
                                boraca.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <Dumbbell className="text-red-600"/>
                                    <span className="font-bold uppercase tracking-wider">Slobodni Tegovi do 50kg</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Target className="text-red-600"/>
                                    <span
                                        className="font-bold uppercase tracking-wider">Prostor za Deadlift & Squat</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Clock className="text-red-600"/>
                                    <span className="font-bold uppercase tracking-wider">Dostupno članovima 24/7</span>
                                </li>
                            </ul>
                            <button
                                className="px-8 py-3 border border-white hover:bg-white hover:text-black uppercase font-black tracking-widest transition-colors cursor-pointer">
                                Pogledaj Pakete
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Merch/Shop Section */}
            <section id="shop" className="py-24 bg-zinc-900 border-y border-zinc-800">
                <div className="container mx-auto px-6 text-center">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-2">
                            UFC 23 <span className="text-red-600">Oprema</span>
                        </h2>
                        <p className="text-zinc-500 uppercase tracking-widest">Nosi boje svog kluba. Dostupno isključivo
                            u
                            klubu.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Item 1 */}
                        <div
                            className="group bg-black p-4 border border-zinc-800 hover:border-red-600 transition-all cursor-pointer">
                            <div
                                className="h-64 bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop"
                                    alt="Hoodie"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-1">Underground Hoodie</h3>
                            <p className="text-zinc-500 text-sm mb-4">Crna / Pamuk / Vez</p>
                            <div className="text-red-600 font-mono font-bold text-lg">3500 RSD</div>
                        </div>

                        {/* Item 2 - REPLACED WITH WRAPS */}
                        <div
                            className="group bg-black p-4 border border-zinc-800 hover:border-red-600 transition-all cursor-pointer">
                            <div
                                className="h-64 bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1555661530-68c8e98db4e6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Wraps"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-1">UFC Bandažeri</h3>
                            <p className="text-zinc-500 text-sm mb-4">4.5m / Polu-elastični</p>
                            <div className="text-red-600 font-mono font-bold text-lg">1200 RSD</div>
                        </div>

                        {/* Item 3 */}
                        <div
                            className="group bg-black p-4 border border-zinc-800 hover:border-red-600 transition-all cursor-pointer">
                            <div
                                className="h-64 bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1711825051467-fda9d8abea58?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Gloves"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-1">UFC 23 Rukavice</h3>
                            <p className="text-zinc-500 text-sm mb-4">12oz / 14oz / 16oz</p>
                            <div className="text-red-600 font-mono font-bold text-lg">6000 RSD</div>
                        </div>
                    </div>

                    <div
                        className="mt-12 inline-block border border-red-600/30 bg-red-900/10 px-6 py-2 rounded text-red-500 text-sm font-mono">
                        * Kupovina moguća samo na pultu kluba u Pirotu.
                    </div>
                </div>
            </section>

            {/* INSTAGRAM FEED / BLOG SECTION */}
            <section id="feed" className="py-24 bg-zinc-950 px-6 border-b border-zinc-900 hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-2">
                                Poslednje iz <span className="text-red-600">Kluba</span>
                            </h2>
                            <div className="h-1 w-24 bg-red-600 skew-x-[-20deg]"></div>
                        </div>
                        <a
                            href="https://www.instagram.com/underground_fight_club23/?hl=en"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group"
                        >
                            <Instagram size={24}/>
                            <span
                                className="uppercase font-bold tracking-widest text-sm group-hover:underline decoration-red-600 underline-offset-4">
                   @underground_fight_club23
                </span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {instagramPosts.map((post) => (
                            <div key={post.id}
                                 className="group bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-all duration-300 flex flex-col h-full cursor-pointer">
                                {/* Image Container */}
                                <div className="relative aspect-square overflow-hidden bg-black">
                                    <img
                                        src={post.image}
                                        alt="Instagram Post"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div
                                        className="absolute top-4 right-4 bg-zinc-950/80 px-3 py-1 text-xs font-mono text-zinc-300 rounded border border-zinc-700">
                                        {post.date}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                        {post.caption}
                                    </p>

                                    <div
                                        className="flex items-center justify-between text-zinc-500 text-xs border-t border-zinc-800 pt-4 mt-auto">
                                        <div className="flex items-center gap-4">
                           <span className="flex items-center gap-1 group-hover:text-red-500 transition-colors">
                              <Heart size={14} className="group-hover:fill-current"/> {post.likes}
                           </span>
                                            <span
                                                className="flex items-center gap-1 group-hover:text-white transition-colors">
                              <MessageSquare size={14}/> {post.comments}
                           </span>
                                        </div>
                                        <span
                                            className="uppercase tracking-wider font-bold group-hover:text-white transition-colors text-[10px]">
                           Prikaži
                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 bg-zinc-950 px-6 border-b border-zinc-900">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black uppercase italic tracking-tighter">Česta Pitanja</h2>
                        <div className="h-1 w-12 bg-zinc-700 mx-auto mt-4"></div>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Da li mi je potrebno prethodno iskustvo?",
                                a: "Ne. Naši rekreativni programi su dizajnirani za apsolutne početnike. Treneri će vas voditi kroz osnove."
                            },
                            {
                                q: "Šta mi je potrebno za prvi trening?",
                                a: "Samo udobna sportska odeća (šorc i majica) i voda. Ako nemate opremu (rukavice, itd.), možete koristiti klupsku za prvi put."
                            },
                            {
                                q: "Da li imate treninge za žene?",
                                a: "Apsolutno. Naše grupe su mešovite, a atmosfera je profesionalna i podržavajuća."
                            },
                            {
                                q: "Koja je starosna granica?",
                                a: "Primamo članove od 16 godina pa naviše. Za mlađe uzraste potrebna je saglasnost roditelja."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="border border-zinc-800 bg-zinc-900/50">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-800/50 transition-colors cursor-pointer"
                                >
                                    <span className="font-bold uppercase tracking-wide">{item.q}</span>
                                    {openFaq === idx ? <X className="text-red-600"/> :
                                        <ChevronRight className="text-zinc-500"/>}
                                </button>
                                {openFaq === idx && (
                                    <div className="p-6 text-zinc-400 border-t border-zinc-800/50">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Section - REDESIGNED */}
            <section id="booking" className="py-24 px-6 relative overflow-hidden bg-zinc-900">
                {/* Decorative BG */}
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

                                {/* Simplified Gear Section */}
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

                        {/* Redesigned Booking Card with Real Links */}
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
                                        href="https://wa.me/381601234567?text=Pozdrav,%20želim%20da%20zakažem%20probni%20trening"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-green-600 text-white py-4 px-6 font-bold uppercase tracking-wider hover:bg-green-500 transition shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2 skew-x-[-6deg] group/btn"
                                    >
                                        <span className="skew-x-[6deg] flex items-center gap-2"><MessageCircle
                                            size={20}/> Pošalji Poruku</span>
                                    </a>
                                    <a
                                        href="https://chat.whatsapp.com/invite/YOUR_GROUP_LINK"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="border border-zinc-700 text-zinc-400 py-4 px-6 font-bold uppercase tracking-wider hover:bg-zinc-900 hover:text-white hover:border-zinc-500 transition flex items-center justify-center gap-2 skew-x-[-6deg]"
                                    >
                                        <span className="skew-x-[6deg]">Već si član? Uđi u Grupu</span>
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

            {/* Location / Footer */}
            <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-6">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                        <div>
                            <div className="text-3xl font-black italic tracking-tighter uppercase mb-6">
                                <span className="text-red-600">UFC</span> 23
                            </div>
                            <p className="text-zinc-500 text-sm mb-6">
                                Underground Fight Club 23 je premijerni borilački centar u Pirotu.
                                Fokusirani na rezultate, disciplinu i izgradnju karaktera kroz borbu.
                            </p>

                            {/* Socials */}
                            <div className="flex justify-center md:justify-start gap-4">
                                <a href="https://www.instagram.com/underground_fight_club23/?hl=en" target="_blank"
                                   rel="noreferrer"
                                   className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                                    <Instagram size={20}/>
                                </a>
                                {/* Placeholder for future socials */}
                                <a href="tel:1234"
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
                            {/* Saturday removed as requested */}
                            <div className="w-full max-w-xs text-zinc-600 text-xs italic mt-2">
                                Vikendom ne radimo (osim za zakazane seminare)
                            </div>
                        </div>
                    </div>

                    <div
                        className="border-t border-zinc-900 pt-8 text-center text-zinc-700 text-xs font-mono uppercase space-y-2">
                        <div>&copy; 2024 Underground Fight Club 23. Sva prava zadržana.</div>
                        <div className="pt-2">
                            <a href="https://jovanjonic.com" target="_blank" rel="noreferrer"
                               className="hover:text-red-600 transition-colors">
                                Izrada sajta: jovanjonic.com
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
