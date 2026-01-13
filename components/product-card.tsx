"use client";

import {useEffect, useState} from "react";

const ProductCard = ({title, desc, price, images}: {
    title: string;
    desc: string;
    price: string;
    images: string[]
}) => {
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div
            className="group bg-black p-4 border border-zinc-800 hover:border-red-600 transition-all cursor-pointer flex flex-col h-full">
            <div
                className="h-[300px] bg-zinc-900 mb-6 group-hover:bg-zinc-800 transition-colors relative overflow-hidden w-full">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                            index === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    />
                ))}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                                index === currentImg ? 'bg-red-600 w-3' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
            <h3 className="text-xl font-bold uppercase mb-1">{title}</h3>
            <p className="text-zinc-500 text-sm mb-4">{desc}</p>
            <div className="text-red-600 font-mono font-bold text-lg mt-auto">{price}</div>
        </div>
    );
};

export default ProductCard;