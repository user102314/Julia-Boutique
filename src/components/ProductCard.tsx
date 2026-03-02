import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const currentColor = product.colors[selectedColor];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: currentColor.image,
      color: currentColor.name,
      size: product.sizes[1] || product.sizes[0],
    });
    openCart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-sm mb-4">
          <motion.img
            src={currentColor.image}
            alt={`${product.name} - ${currentColor.name}`}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            loading="lazy"
          />

          {/* Overlay actions */}
          <motion.div
            className="absolute inset-0 bg-background/40 flex items-end justify-center pb-6 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rose-gradient text-primary-foreground px-6 py-2.5 text-sm font-medium flex items-center gap-2 rounded-sm"
            >
              <ShoppingBag size={16} />
              Ajouter
            </motion.button>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="glass-card p-2.5 cursor-pointer"
            >
              <Eye size={16} className="text-foreground" />
            </motion.span>
          </motion.div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="rose-gradient text-primary-foreground text-xs px-3 py-1 font-medium tracking-wider uppercase">
                Nouveau
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-foreground text-background text-xs px-3 py-1 font-medium">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-primary font-semibold">{product.price} DT</span>
            {product.originalPrice && (
              <span className="text-muted-foreground text-sm line-through">{product.originalPrice} DT</span>
            )}
          </div>

          {/* Color swatches */}
          <div className="flex gap-2 pt-1">
            {product.colors.map((color, i) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedColor(i);
                }}
                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                  selectedColor === i
                    ? "border-primary scale-110"
                    : "border-border hover:border-foreground/50"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
