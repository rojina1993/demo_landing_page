import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import CTAForm from "@/components/CTAForm";
export default function Home() { return <main><Header/><Hero/><section className="px-5 py-20 sm:py-28"><div className="problem-panel"><p className="eyebrow">STOP GUESSING</p><h2>What to post, what ads to run, or how to use AI.</h2><p>Get a customized marketing plan based on <strong>your business, your customers, and your goals.</strong></p></div></section><Benefits/><Process/><CTAForm/></main>; }
