import {Award, Medal, Trophy} from "lucide-react";

export default function Team() {
    const headCoach = {
        name: "Predrag J.",
        title: "Glavni Trener",
        image: "/team/predragr.jpeg",
        achievements: [
            "Diplomirani profesor sporta i fizičkog vaspitanja",
            "Višestruki šampion i vicešampion države u kik-boksu",
            "Reprezentativac Ashihara karatea (2012–2019)",
            "Osvajač bronzane medalje na Svetskom prvenstvu",
            "Osvajač međunarodnog prvenstva",
            "Dobitnik pehara za najboljeg borca",
            "Odlikovan za najboljeg juniora 2012. godine",
            "Kandidat za sportistu grada",
            "Osvajač brojnih medalja na prvenstvima države u kik-boksu, Ashihara karateu i izazovima snage",
            "Učesnik Svetskog prvenstva u boksu – Budva 2024, trener reprezentacije Srbije",
            "Trener omladinske reprezentacije Srbije na pripremama na Paliću i Zlatiboru",
            "Više od 10 godina trenerskog iskustva"
        ]
    };

    // Pomoćni Treneri Data
    const assistantCoaches = [
        { name: "Stefan A.", role: "Pomoćni trener", img: "/team/stefan.jpeg" },
        { name: "Bozidar S.", role: "Pomoćni trener", img: "/team/bozidar.jpeg" },
        { name: "Dimitrije P.", role: "Pomoćni trener", img: "/team/dimitrije.jpeg" },
        { name: "Ognjen A.", role: "Pomoćni trener", img: "/team/ognjen.jpeg" },
        { name: "Radivoje M.", role: "Kondicioni trener", img: "/team/radem.jpeg" },
    ];
    return (
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

                <div className="mb-16">
                    <div
                        className="bg-zinc-950 border border-red-900/50 p-6 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                            <Medal size={300} className="text-red-900"/>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-10 items-start relative z-10">
                            <div
                                className="lg:col-span-1 h-[500px] lg:h-full min-h-[400px] bg-black relative overflow-hidden border border-zinc-800">
                                <img
                                    src={headCoach.image}
                                    alt={headCoach.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20">
                                    <div
                                        className="text-red-600 font-bold uppercase tracking-widest text-sm mb-1">{headCoach.title}</div>
                                </div>
                            </div>

                            <div className="lg:col-span-2 flex flex-col justify-center h-full">
                                <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
                                    {headCoach.name}
                                </h3>

                                <div className="grid md:grid-cols-1 gap-4 text-zinc-300">
                                    {headCoach.achievements.map((item, idx) => (
                                        <div key={idx}
                                             className="flex gap-4 items-start border-b border-zinc-900/50 pb-3 last:border-0 last:pb-0">
                                            <div className="mt-1 text-red-600 shrink-0">
                                                {idx < 3 ? <Trophy size={20}/> : <Award size={20}/>}
                                            </div>
                                            <p className="leading-relaxed text-sm md:text-base font-light">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="text-2xl font-bold uppercase italic tracking-tighter mb-8 text-center text-zinc-500">
                    Pomoćni Treneri
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {assistantCoaches.map((coach, index) => (
                        <div key={index}
                             className="group relative bg-black overflow-hidden border border-red-900/50 cursor-pointer h-[300px] ">
                            <img
                                src={coach.img}
                                alt={coach.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-4">
                                <h3 className="text-lg font-black uppercase italic text-white mb-0.5">{coach.name}</h3>
                                <p className="text-red-600 font-bold uppercase text-[10px] tracking-wider">{coach.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}