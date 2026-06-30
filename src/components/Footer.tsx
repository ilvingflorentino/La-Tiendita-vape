"use client";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contacto"
      style={{
        background: "linear-gradient(180deg, #0d1b2e 0%, #090f1a 100%)",
        borderTop: "1px solid rgba(94,234,212,0.1)",
        padding: "80px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 48,
            marginBottom: 60,
          }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/logo.jpg"
              alt="Tiendita Vape Store"
              width={160}
              height={160}
              style={{ borderRadius: 12, marginBottom: 16, width: 160, height: "auto" }}
            />
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              Tu vape store de confianza en Bellavista. Productos originales, precios justos.
            </p>
            <a
              href="https://www.instagram.com/tienditavs.bellavista/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, #5eead4, #2dd4bf)",
                color: "#0d1b2e",
                padding: "10px 20px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              📸 @tienditavs.bellavista
            </a>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 style={{ color: "#f0f9ff", fontWeight: 700, marginBottom: 20, fontSize: 14, letterSpacing: "0.1em" }}>
              INFORMACIÓN
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <MapPin size={16} color="#5eead4" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>
                  Bellavista, Santo Domingo<br />República Dominicana
                </span>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Clock size={16} color="#5eead4" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>
                  Lunes – Sábado<br />10:00am – 8:00pm
                </span>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 style={{ color: "#f0f9ff", fontWeight: 700, marginBottom: 20, fontSize: 14, letterSpacing: "0.1em" }}>
              PEDIDOS
            </h4>
            <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              ¿Tienes preguntas o quieres hacer un pedido? Escríbenos directo por WhatsApp.
            </p>
            <a
              href="https://wa.me/18098465430"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1.5px solid rgba(94,234,212,0.3)",
                color: "#5eead4",
                padding: "10px 20px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 13,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(94,234,212,0.08)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
            >
              WhatsApp Ahora
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(94,234,212,0.08)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "#374151", fontSize: 13 }}>
            © 2024 Tiendita Vape Store. Todos los derechos reservados.
          </p>
          <p style={{ color: "#374151", fontSize: 12 }}>
            Solo para mayores de 18 años. Venta regulada.
          </p>
        </div>
      </div>
    </footer>
  );
}
