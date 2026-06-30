"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "Geek Bar", emoji: "⚡", desc: "Pulse · Pulse X" },
  { name: "Elf Bar",  emoji: "🌀", desc: "BC15K" },
  { name: "Waka",    emoji: "🚀", desc: "Pocket · Blast" },
  { name: "Friqbar", emoji: "❄️", desc: "Viz Zel" },
];

export default function Brands() {
  return (
    <section
      style={{
        padding: "60px 24px",
        borderTop: "1px solid rgba(94,234,212,0.07)",
        borderBottom: "1px solid rgba(94,234,212,0.07)",
        background: "rgba(9,15,26,0.6)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            fontSize: 11,
            color: "#475569",
            letterSpacing: "0.2em",
            fontWeight: 700,
            marginBottom: 36,
          }}
        >
          MARCAS DISPONIBLES
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: "rgba(22,37,64,0.5)",
                border: "1px solid rgba(94,234,212,0.1)",
                borderRadius: 14,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(94,234,212,0.3)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(94,234,212,0.1)")
              }
            >
              <span style={{ fontSize: 28 }}>{b.emoji}</span>
              <div>
                <div style={{ color: "#f0f9ff", fontWeight: 800, fontSize: 15 }}>{b.name}</div>
                <div style={{ color: "#475569", fontSize: 12, marginTop: 2 }}>{b.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
