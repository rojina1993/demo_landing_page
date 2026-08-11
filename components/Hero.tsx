"use client";

export default function Hero() {
  const scrollToForm = () => document.querySelector("#book-call")?.scrollIntoView({ behavior: "smooth" });
  return <section className="hero px-5 pb-20 pt-12 text-center sm:pb-28 sm:pt-20">
    <div className="mx-auto max-w-4xl">
      <p className="eyebrow">FREE ONE-TO-ONE CONSULTATION</p>
      <h1 className="mt-5 text-4xl font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">Get a Clear <span>AI Marketing Plan</span> to Help You Get More Customers</h1>
      <p className="hero-copy mx-auto mt-6 max-w-2xl text-lg leading-8 sm:text-xl">A free one-to-one consultation to identify what’s holding your marketing back and show you where AI can help your business.</p>
      <button onClick={scrollToForm} className="primary-button mt-9">Book Free Consultation <span aria-hidden="true">→</span></button>
      <p className="mt-5 text-sm text-[var(--muted)]">Clear direction for your next marketing move.</p>
    </div>
  </section>;
}
