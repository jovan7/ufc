import {ChevronRight} from "lucide-react";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/gym/gym1.jpeg"
                    alt="underground pirot"
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
    )
}