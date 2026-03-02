import { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, priceRanges } from "@/data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const priceRange = priceRanges[selectedPriceRange];

  const filtered = products.filter((p) => {
    const catMatch = selectedCategory === "Toutes" || p.category === selectedCategory;
    const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
    return catMatch && priceMatch;
  });

  return (
    <main className="pt-8 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-6xl font-bold">Collection</h1>
          <p className="text-muted-foreground mt-3">Découvrez nos robes exclusives</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-muted-foreground border border-border px-4 py-2.5 rounded-full self-start hover:bg-secondary transition-colors"
          >
            {filtersOpen ? <X size={16} /> : <SlidersHorizontal size={16} />}
            Filtres
          </button>

          {/* Sidebar Filters */}
          <motion.aside
            className={`md:w-56 flex-shrink-0 space-y-8 ${filtersOpen ? "block" : "hidden md:block"}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Categories */}
            <div>
              <h3 className="font-heading text-lg mb-3">Catégorie</h3>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left text-sm px-3 py-2 rounded-full transition-all duration-200 ${selectedCategory === cat
                        ? "gradient-rose text-card shadow-rose"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-heading text-lg mb-3">Prix</h3>
              <div className="space-y-1">
                {priceRanges.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPriceRange(i)}
                    className={`block w-full text-left text-sm px-3 py-2 rounded-full transition-all duration-200 ${selectedPriceRange === i
                        ? "gradient-rose text-card shadow-rose"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="font-heading text-lg mb-3">Taille</h3>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <span
                    key={size}
                    className="border border-border text-muted-foreground text-xs px-3 py-1.5 rounded-full hover:border-primary hover:text-foreground cursor-pointer transition-colors"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-muted-foreground">{filtered.length} produits</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p>Aucun produit trouvé</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
