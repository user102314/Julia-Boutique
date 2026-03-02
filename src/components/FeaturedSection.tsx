import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const FeaturedSection = () => {
  const featured = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-rose-dark text-sm tracking-[0.3em] uppercase font-medium">Sélection</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2">Nos Coups de Cœur</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-block border border-border text-muted-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-primary/20 hover:border-primary hover:text-foreground transition-all duration-300 rounded-full"
          >
            Voir toute la collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
