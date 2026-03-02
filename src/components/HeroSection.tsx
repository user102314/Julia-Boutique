import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-rose-light py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-bold italic md:text-6xl lg:text-7xl"
        >
          Julia — <span className="text-gradient-rose">L'élégance au féminin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-md text-muted-foreground text-lg leading-relaxed"
        >
          Découvrez notre collection exclusive de robes conçues pour sublimer chaque moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            to="/products"
            className="gradient-rose text-card px-8 py-3.5 text-sm font-medium tracking-wider uppercase flex items-center gap-2 rounded-full shadow-rose hover:shadow-rose-lg transition-shadow group"
          >
            Découvrir
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
