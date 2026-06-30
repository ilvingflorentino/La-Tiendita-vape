"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0a1628 0%, #0d1b2e 60%, #0f1e35 100%)",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(94,234,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Radial glow center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(94,234,212,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Smoke particles */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="smoke-particle"
          style={{
            position: "absolute",
            bottom: "15%",
            left: `${40 + i * 8}%`,
            width: 12 + i * 4,
            height: 12 + i * 4,
            borderRadius: "50%",
            background: "rgba(94,234,212,0.15)",
            filter: "blur(4px)",
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}

      {/* Content */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 10, padding: "0 24px", maxWidth: 800 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(94,234,212,0.1)",
            border: "1px solid rgba(94,234,212,0.3)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 32,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5eead4", display: "inline-block" }} />
          <span style={{ color: "#5eead4", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em" }}>
            BELLAVISTA · REPÚBLICA DOMINICANA
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: 8,
            background: "linear-gradient(135deg, #f0f9ff 40%, #5eead4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          TIENDITA
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          style={{
            fontSize: "clamp(1.2rem, 4vw, 2rem)",
            fontWeight: 300,
            letterSpacing: "0.4em",
            color: "#5eead4",
            marginBottom: 32,
          }}
          className="glow-cyan"
        >
          VAPE STORE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ color: "#94a3b8", fontSize: 16, maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}
        >
          Los mejores vapes, pods y líquidos del mercado. Calidad premium a tu alcance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#catalogo"
            style={{
              background: "linear-gradient(135deg, #5eead4, #2dd4bf)",
              color: "#0d1b2e",
              padding: "14px 36px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(94,234,212,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Ver Catálogo
          </a>
          <a
            href="https://wa.me/18098465430"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "transparent",
              color: "#5eead4",
              padding: "14px 36px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              letterSpacing: "0.05em",
              border: "1.5px solid rgba(94,234,212,0.4)",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(94,234,212,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "#5eead4";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(94,234,212,0.4)";
            }}
          >
            WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            display: "flex",
            gap: 48,
            justifyContent: "center",
            marginTop: 72,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "11+", label: "Productos" },
            { value: "5", label: "Marcas Top" },
            { value: "100%", label: "Original" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#5eead4" }} className="glow-cyan">
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: "#64748b", letterSpacing: "0.1em", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(94,234,212,0.4)",
        }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
