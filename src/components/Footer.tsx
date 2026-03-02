import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-3xl font-heading font-bold italic text-gradient-rose">Julia</span>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Mode féminine élégante et contemporaine. Chaque pièce raconte une histoire de raffinement.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Boutique</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-foreground transition-colors">Nouvelle Collection</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Robes</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Tops</Link></li>
              <li><Link to="/products" className="hover:text-foreground transition-colors">Accessoires</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Aide</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-foreground transition-colors cursor-pointer">Livraison</span></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">Retours</span></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">Guide des tailles</span></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Recevez nos dernières nouveautés</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-secondary/50 border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-l-full"
              />
              <button className="gradient-rose px-4 py-2.5 text-card text-sm font-medium rounded-r-full shadow-rose hover:shadow-rose-lg transition-shadow">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Julia Boutique. Tous droits réservés.</p>
          <div className="flex gap-3">
            <a href="#" className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <Instagram size={16} />
            </a>
            <a href="#" className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
