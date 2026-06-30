"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#categorias", label: "Categorías" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(13,27,46,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(94,234,212,0.15)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <Image
          src="/logo.jpg"
          alt="Tiendita Vape Store"
          width={140}
          height={52}
          style={{ objectFit: "contain", height: 52, width: "auto" }}
          priority
        />
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden-mobile">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: "#94a3b8",
              textDecoration: "none",
              fontSize: 14,
              letterSpacing: "0.08em",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#5eead4")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#94a3b8")}
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://www.instagram.com/tienditavs.bellavista/"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "linear-gradient(135deg, #5eead4, #2dd4bf)",
            color: "#0d1b2e",
            padding: "8px 20px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          Instagram
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: "none", border: "none", color: "#5eead4", cursor: "pointer", padding: 4, display: "none" }}
        className="show-mobile"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(13,27,46,0.97)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(94,234,212,0.2)",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: "#f0f9ff", textDecoration: "none", fontSize: 16, fontWeight: 500 }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/tienditavs.bellavista/"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "linear-gradient(135deg, #5eead4, #2dd4bf)",
                color: "#0d1b2e",
                padding: "10px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Instagram
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}

