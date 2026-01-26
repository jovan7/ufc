import {Clock, Dumbbell, Target} from "lucide-react";

export default function Gym() {
    return (
        <section id="gym" className="py-20 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="/gym/gym1.jpeg"
                                className="rounded-lg opacity-80 hover:opacity-100 transition duration-500"
                                alt="Gym"/>
                            <img
                                src="/gym/gym2.jpeg"
                                className="rounded-lg opacity-80 hover:opacity-100 transition duration-500 mt-8"
                                alt="Gym"/>
                            <img
                                src="/gym/gym3.jpeg"
                                className="rounded-lg opacity-80 hover:opacity-100 transition duration-500"
                                alt="Gym"/>
                            <img
                                src="/gym/gym4.jpeg"
                                className="rounded-lg opacity-80 hover:opacity-100 transition duration-500 mt-8"
                                alt="Gym"/>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
                            Hardcore <span className="text-red-600">Teretana</span>
                        </h2>
                        <p className="text-zinc-400 mb-6 text-lg">
                            Bez izgovora. Samo čelik i karakter. Ovde se ne dolazi da se 'vežba', ovde se kuje
                            gvožđe i sprema za rat. Teretana za one koji znaju da rezultat ne pada sa neba, već se
                            otima sa poda.
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
                                <span className="font-bold uppercase tracking-wider">Dostupno članovima od 09:00 - 22:00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}