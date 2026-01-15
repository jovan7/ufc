import ProductCard from "@/components/product-card";

export default function Merch() {
    const shopItems = [
        {
            id: 1,
            title: "Underground Majica",
            desc: "Crna / Crvena / Bela / Pamuk",
            price: "2400 RSD",
            images: [
                "/t-shirt/crna.jpeg",
                "/t-shirt/crvena.jpeg",
                "/t-shirt/bela.jpeg"
            ]
        },
        {
            id: 2,
            title: "Bandažeri",
            desc: "4m / Polu-elastični",
            price: "1000 RSD",
            images: [
                "/handwrap/bandazeri.jpeg",
            ]
        },
        {
            id: 3,
            title: "Rukavice",
            desc: "Venum / Underground",
            price: "3600 RSD / 4600 RSD",
            images: [
                "/gloves/rukavice_crvene.jpeg",
                "/gloves/rukavice_bele.jpeg",
                "/gloves/rukavice_crne.jpeg",
                "/gloves/rukavice_bez.jpeg",
                "/gloves/rukavice_roze.jpeg",
                "/gloves/rukavice_zelene.jpeg",
            ]
        },
        {
            id: 4,
            title: "Šlemovi",
            desc: "Iron",
            price: "",
            images: [
                "/headgear/kaciga.jpeg",
            ]
        },
        {
            id: 5,
            title: "Trenerke",
            desc: "Underground",
            price: "",
            images: [
                "/sweatpants/bela.jpeg",
                "/sweatpants/crvena.jpeg",
                "/sweatpants/bela2.jpeg",
                "/sweatpants/crno-crvena.jpeg",
                "/sweatpants/crna.jpeg",
                "/sweatpants/crna2.jpeg",
                "/sweatpants/crna3.jpeg",
                "/sweatpants/crna4.jpeg",
            ]
        },
        {
            id: 6,
            title: "šortsevi",
            desc: "Underground",
            price: "",
            images: [
                "/shorts/maskirni.jpeg",
                "/shorts/plavi.jpeg",
                "/shorts/crni.jpeg",
            ]
        },
        {
            id: 7,
            title: "Guma za zube",
            desc: "Underground",
            price: "",
            images: [
                "/mouthguard/guma.jpeg"
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

                <div className="grid md:grid-cols-3 gap-4">
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