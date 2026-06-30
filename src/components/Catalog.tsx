"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { products, categories, type Category } from "@/data/products";
import ProductCard from "./ProductCard";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category | "Todos">("Todos");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "Todos" || p.category === activeCategory;
    const matchSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section
      id="catalogo"
      style={{
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: 60 }}
      >
        <span
          style={{
            fontSize: 11,
            color: "#5eead4",
            fontWeight: 700,
            letterSpacing: "0.2em",
            display: "block",
            marginBottom: 12,
          }}
        >
          NUESTROS PRODUCTOS
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "#f0f9ff",
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}
        >
          Catálogo Completo
        </h2>
        <p style={{ color: "#64748b", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
          Encuentra los mejores productos vape al mejor precio
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "rgba(22,37,64,0.8)",
          border: "1px solid rgba(94,234,212,0.15)",
          borderRadius: 12,
          padding: "12px 16px",
          maxWidth: 480,
          margin: "0 auto 40px",
        }}
      >
        <Search size={18} color="#5eead4" style={{ flexShrink: 0 }} />
        <input
          type="text"
          placeholder="Buscar producto o marca..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            color: "#f0f9ff",
            fontSize: 15,
            width: "100%",
          }}
        />
      </motion.div>

      {/* Category filters */}
      <div
        id="categorias"
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 48,
        }}
      >
        {(["Todos", ...categories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as Category | "Todos")}
            style={{
              padding: "9px 20px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.05em",
              border: activeCategory === cat ? "none" : "1.5px solid rgba(94,234,212,0.2)",
              background:
                activeCategory === cat
                  ? "linear-gradient(135deg, #5eead4, #2dd4bf)"
                  : "transparent",
              color: activeCategory === cat ? "#0d1b2e" : "#94a3b8",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "80px 0", color: "#64748b" }}>
          <p style={{ fontSize: 18 }}>No se encontraron productos</p>
          <p style={{ fontSize: 14, marginTop: 8 }}>Intenta con otro nombre o categoría</p>
        </div>
      )}
    </section>
  );
}
