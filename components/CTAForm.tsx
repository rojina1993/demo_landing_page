"use client";

import { useEffect, useRef, useState } from "react";

const EMBED_PATH = "/flodesk-embed.html";

export default function CTAForm() {
  const embedHost = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let active = true;
    async function loadEmbed() {
      try {
        const response = await fetch(EMBED_PATH);
        if (!response.ok) throw new Error("Flodesk embed could not be loaded.");
        const markup = await response.text();
        const host = embedHost.current;
        if (!host || !active) return;
        host.innerHTML = markup;
        // Scripts injected with innerHTML do not run. Recreate Flodesk's original
        // script nodes, preserving its native capture and automation behavior.
        host.querySelectorAll("script").forEach((oldScript) => {
          const script = document.createElement("script");
          for (const attribute of oldScript.attributes) script.setAttribute(attribute.name, attribute.value);
          script.text = oldScript.text;
          oldScript.replaceWith(script);
        });
      } catch {
        if (active) setLoadError(true);
      }
    }
    loadEmbed();
    return () => { active = false; };
  }, []);

  return <section id="book-call" className="px-5 py-20 sm:py-28">
    <div className="form-wrap">
      <div className="form-intro">
        <p className="eyebrow">BOOK THE CALL</p>
        <h2>Let’s make your next move clearer.</h2>
        <p>Get personalized marketing guidance based on your specific business. Discover what to improve, what to prioritize, and where AI can help you move forward.</p>
      </div>
      <div className="form-card flodesk-card">
        {loadError ? <p className="submit-error" role="alert">The booking form could not load. Please refresh the page and try again.</p> : <div ref={embedHost} aria-live="polite" />}
      </div>
    </div>
  </section>;
}
