"use client";
import {ChevronRight, X} from "lucide-react";
import {useState} from "react";

export default function Faq() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index: any) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
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
    )
}