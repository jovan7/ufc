import ProductCard from "@/components/product-card";

export default function Merch() {
    const shopItems = [
        {
            id: 1,
            title: "Underground Majica",
            desc: "Crna / Crvena / Bela / Pamuk",
            price: "2400 RSD",
            images: [
                "/majice/crna.jpeg",
                "/majice/crvena.jpeg",
                "/majice/bela.jpeg"
            ]
        },
        {
            id: 2,
            title: "UFC Bandažeri",
            desc: "4.5m / Polu-elastični",
            price: "1200 RSD",
            images: [
                "https://images.unsplash.com/photo-1591117207239-274d13636b04?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1605296867304-6f0246011c78?q=80&w=2000&auto=format&fit=crop", // Action shot
                "https://images.unsplash.com/photo-1626224583764-847890e058f5?q=80&w=2000&auto=format&fit=crop" // Detail
            ]
        },
        {
            id: 3,
            title: "UFC 23 Rukavice",
            desc: "12oz / 14oz / 16oz",
            price: "6000 RSD",
            images: [
                "https://images.unsplash.com/photo-1629255670845-a744274c4146?q=80&w=1965&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop", // Action
                "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" // Context
            ]
        }
    ];

    return (
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
                    {shopItems.map((item) => (
                        <ProductCard
                            key={item.id}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            images={item.images}
                        />
                    ))}
                </div>

                <div
                    className="mt-12 inline-block border border-red-600/30 bg-red-900/10 px-6 py-2 rounded text-red-500 text-sm font-mono">
                    * Kupovina moguća samo na pultu kluba u Pirotu.
                </div>
            </div>
        </section>
    )
}