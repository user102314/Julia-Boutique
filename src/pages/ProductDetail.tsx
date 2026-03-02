import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ChevronLeft, Heart, Minus, Plus } from "lucide-react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  if (!product) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <p className="text-muted-foreground">Produit non trouvé</p>
        <Link to="/products" className="text-rose-dark mt-4 inline-block hover:underline">
          Retour à la collection
        </Link>
      </div>
    );
  }

  const currentColor = product.colors[selectedColor];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: currentColor.image,
        color: currentColor.name,
        size: selectedSize,
      });
    }
    openCart();
  };

  return (
    <main className="pt-8 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Back */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          Retour
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="aspect-[3/4] overflow-hidden bg-secondary rounded-lg"
              >
                <img
                  src={currentColor.image}
                  alt={`${product.name} - ${currentColor.name}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {product.colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(i)}
                  className={`aspect-[3/4] overflow-hidden rounded-lg border-2 transition-all duration-300 ${selectedColor === i ? "border-rose-dark shadow-rose" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                >
                  <img
                    src={color.image}
                    alt={`${product.name} - ${color.name}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-2xl font-heading font-bold text-gradient-rose">{product.price} DT</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">{product.originalPrice} DT</span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Color selector */}
            <div>
              <span className="text-sm text-muted-foreground mb-3 block">
                Couleur : <span className="text-foreground font-medium">{currentColor.name}</span>
              </span>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(i)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${selectedColor === i
                        ? "border-rose-dark scale-110 ring-2 ring-primary/30"
                        : "border-border hover:border-muted-foreground"
                      }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div>
              <span className="text-sm text-muted-foreground mb-3 block">Taille</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] py-2.5 text-sm border rounded-full transition-all duration-300 ${selectedSize === size
                        ? "gradient-rose text-card shadow-rose"
                        : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="text-sm text-muted-foreground mb-3 block">Quantité</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="flex-1 gradient-rose text-card py-4 text-sm font-medium tracking-wider uppercase flex items-center justify-center gap-2 rounded-full shadow-rose hover:shadow-rose-lg transition-shadow disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ShoppingBag size={18} />
                Ajouter au panier
              </motion.button>
              <button className="w-14 border border-border flex items-center justify-center rounded-full text-muted-foreground hover:border-primary hover:text-rose-dark transition-colors">
                <Heart size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        <section className="mt-24">
          <h2 className="font-heading text-3xl font-bold text-center mb-10">Vous aimerez aussi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetail;
