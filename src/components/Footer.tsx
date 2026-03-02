import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-3xl font-serif font-bold text-gradient">JULIA</span>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Mode féminine élégante et contemporaine. Chaque pièce raconte une histoire de raffinement.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Boutique</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-primary transition-colors">Nouvelle Collection</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Robes</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Tops</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Accessoires</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Aide</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-primary transition-colors cursor-pointer">Livraison</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Retours</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Guide des tailles</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Recevez nos dernières nouveautés</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rounded-l-sm"
              />
              <button className="rose-gradient px-4 py-2.5 text-primary-foreground text-sm font-medium rounded-r-sm hover:opacity-90 transition-opacity">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 JULIA. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
