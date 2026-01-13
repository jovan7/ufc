"use client"
import Footer from "@/components/footer";
import BookInfo from "@/components/book-info";
import Faq from "@/components/faq";
import Merch from "@/components/merch";
import Gym from "@/components/gym";
import Team from "@/components/team";
import Programs from "@/components/programs";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {


    return (
        <div
            className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-red-700 selection:text-white overflow-x-hidden">
            <Header/>
            <Hero/>
            <Programs/>
            <Team/>
            <Gym/>
            <Merch/>
            <Faq/>
            <BookInfo/>
            <Footer/>
        </div>
    );
}
