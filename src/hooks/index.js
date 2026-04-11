import { useState, useEffect, useRef } from "react";

// Typing effect — unchanged
export function useTypingEffect(text, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const iv = setInterval(() => {
      if (i <= text.length) { setDisplayed(text.slice(0, i)); i++; }
      else clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return displayed;
}

// ScrollSpy — fixed stale closure bug by using a ref for ids
export function useScrollSpy(ids) {
  const [active, setActive] = useState("");
  const idsRef = useRef(ids);
  useEffect(() => { idsRef.current = ids; }, [ids]);

  useEffect(() => {
    const handler = () => {
      for (const id of idsRef.current) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 90 && r.bottom > 90) { setActive(id); return; }
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler(); // run once on mount
    return () => window.removeEventListener("scroll", handler);
  }, []); // empty deps — uses ref internally, no re-subscribe needed
  return active;
}

// FadeIn — uses IntersectionObserver, re-runs when new .fade-in elements appear
export function useFadeIn() {
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); ob.unobserve(e.target); }
      }),
      { threshold: 0.07, rootMargin: "0px 0px -24px 0px" }
    );

    // Observe initial elements
    const observe = () => document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => ob.observe(el));
    observe();

    // Re-observe after lazy chunks load
    const mutOb = new MutationObserver(observe);
    mutOb.observe(document.getElementById("root"), { childList: true, subtree: true });

    return () => { ob.disconnect(); mutOb.disconnect(); };
  }, []);
}

// Scrolled state — throttled for performance
export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
}
