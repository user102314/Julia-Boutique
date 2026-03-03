import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Mobile: blurred background image */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1200&fit=crop"
          alt=""
          className="w-full h-full object-cover scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-light/80 via-rose-light/70 to-rose-light/90" />
      </div>

      {/* Desktop: gradient background */}
      <div className="absolute inset-0 hidden md:block gradient-rose-light" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl font-bold italic md:text-6xl lg:text-7xl text-foreground [text-shadow:_0_2px_8px_rgba(0,0,0,0.1)]"
            >
              Julia — <span className="text-rose-dark md:text-gradient-rose [text-shadow:_0_2px_8px_rgba(0,0,0,0.08)]">L'élégance au féminin</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 mx-auto md:mx-0 max-w-md text-foreground/70 md:text-muted-foreground text-lg leading-relaxed drop-shadow-sm"
            >
              Découvrez notre collection exclusive de robes conçues pour sublimer chaque moment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex justify-center md:justify-start gap-4"
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

          {/* Photo — Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden md:flex justify-center"
          >
            <div className="aspect-[2/3] max-w-sm w-full overflow-hidden rounded-2xl shadow-rose-lg animate-float">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop"
                alt="Julia Boutique — Collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full gradient-rose opacity-30 blur-xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full gradient-gold opacity-20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
