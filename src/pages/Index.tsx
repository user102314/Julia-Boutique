import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedSection />

      {/* Promo Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&h=500&fit=crop"
              alt="Collection spéciale"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card/90 via-card/60 to-transparent flex items-center">
              <div className="px-8 md:px-16">
                <span className="text-rose-dark text-sm tracking-[0.3em] uppercase font-medium">Exclusivité</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 max-w-md">
                  Jusqu'à <span className="text-gradient-rose">-30%</span> sur la collection
                </h2>
                <Link
                  to="/products"
                  className="inline-block mt-6 gradient-rose text-card px-8 py-3 text-sm font-medium tracking-wider uppercase rounded-full shadow-rose hover:shadow-rose-lg transition-shadow"
                >
                  En profiter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-rose-dark text-sm tracking-[0.3em] uppercase font-medium">Fraîchement arrivées</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2">Nouveautés</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop", label: "Robes de Soirée" },
              { img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop", label: "Collection Été" },
              { img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop", label: "Bohème Chic" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to="/products" className="group block relative aspect-[3/4] overflow-hidden rounded-lg border border-border">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent flex items-end p-6">
                    <h3 className="font-heading text-2xl text-card font-semibold">{item.label}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
