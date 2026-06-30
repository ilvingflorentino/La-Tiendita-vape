"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Zap } from "lucide-react";
import type { Product } from "@/data/products";

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  "Más Vendido": { bg: "#f59e0b", color: "#0d1b2e" },
  Nuevo:         { bg: "#5eead4", color: "#0d1b2e" },
  Top:           { bg: "#a78bfa", color: "#0d1b2e" },
  Premium:       { bg: "#f472b6", color: "#0d1b2e" },
  Popular:       { bg: "#34d399", color: "#0d1b2e" },
};

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const waMessage = encodeURIComponent(
    `Hola! Me interesa el *${product.name}* — ${product.flavors.join(", ")}. ¿Está disponible y cuál es el precio?`
  );
  const waLink = `https://wa.me/18098465430?text=${waMessage}`;
  const badge = product.badge ? BADGE_COLORS[product.badge] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{
        background: "linear-gradient(160deg, #162540 0%, #0f1e35 100%)",
        border: "1px solid rgba(94,234,212,0.1)",
        borderRadius: 18,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(94,234,212,0.35)";
        el.style.boxShadow = "0 12px 48px rgba(94,234,212,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(94,234,212,0.1)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: "100%", height: 220, overflow: "hidden", background: "#0a1628" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Gradient overlay bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
            background: "linear-gradient(to top, #0f1e35, transparent)",
          }}
        />

        {/* Badge */}
        {badge && (
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: badge.bg,
              color: badge.color,
              padding: "3px 12px",
              borderRadius: 100,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.06em",
              zIndex: 2,
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Out of stock */}
        {!product.inStock && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(10,22,40,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <span style={{ color: "#64748b", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em" }}>AGOTADO</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Brand + Category */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontSize: 11,
              color: "#5eead4",
              fontWeight: 700,
              letterSpacing: "0.1em",
              background: "rgba(94,234,212,0.08)",
              border: "1px solid rgba(94,234,212,0.2)",
              padding: "2px 10px",
              borderRadius: 100,
            }}
          >
            {product.category}
          </span>
          <span style={{ fontSize: 11, color: "#475569", fontWeight: 600 }}>{product.brand}</span>
        </div>

        {/* Name */}
        <h3 style={{ fontSize: 16, fontWeight: 800, color: "#f0f9ff", margin: 0, lineHeight: 1.25 }}>
          {product.name}
        </h3>

        {/* Puffs */}
        {product.puffs && (
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Zap size={13} color="#5eead4" />
            <span style={{ fontSize: 13, color: "#5eead4", fontWeight: 700 }}>
              {product.puffs.toLocaleString()} puffs
            </span>
            {product.nicotine && (
              <span style={{ fontSize: 11, color: "#475569", marginLeft: 6 }}>· {product.nicotine} nic</span>
            )}
          </div>
        )}

        {/* Description */}
        <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.65, flex: 1 }}>
          {product.description}
        </p>

        {/* Flavors */}
        {product.flavors.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {product.flavors.map((f) => (
              <span
                key={f}
                style={{
                  fontSize: 11,
                  color: "#94a3b8",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "2px 9px",
                  borderRadius: 100,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {product.features.map((f) => (
              <span
                key={f}
                style={{
                  fontSize: 10,
                  color: "#5eead4",
                  background: "rgba(94,234,212,0.06)",
                  border: "1px solid rgba(94,234,212,0.15)",
                  padding: "2px 8px",
                  borderRadius: 100,
                  fontWeight: 600,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <a
          href={product.inStock ? waLink : undefined}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: product.inStock
              ? "linear-gradient(135deg, #5eead4, #2dd4bf)"
              : "rgba(100,116,139,0.15)",
            color: product.inStock ? "#0d1b2e" : "#475569",
            padding: "11px 16px",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 14,
            textDecoration: "none",
            pointerEvents: product.inStock ? "auto" : "none",
            marginTop: 4,
            transition: "filter 0.15s, transform 0.15s",
            letterSpacing: "0.03em",
          }}
          onMouseEnter={(e) => {
            if (product.inStock) {
              (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        >
          <MessageCircle size={15} />
          {product.inStock ? "Pedir por WhatsApp" : "Agotado"}
        </a>
      </div>
    </motion.div>
  );
}
