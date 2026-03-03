import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-rose-100 dark:bg-rose-900/20 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-rose-500" />
          </div>
        </div>

        {/* 404 Title */}
        <h1 className="font-heading text-8xl md:text-9xl font-bold text-gradient-rose mb-4">
          Service en attend 
        </h1>

        {/* Message */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Oops ! Page n'est pas encore developeé '
        </p>

        {/* Service Message */}
        <div className="bg-muted/30 rounded-2xl p-6 mb-8 border border-border">
          <p className="text-foreground/80 text-lg">
            Ce service sera développé après votre acceptation
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Notre équipe technique est prête à donner vie à cette fonctionnalité dès votre validation.
          </p>
        </div>

        {/* Return Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 gradient-rose text-card px-8 py-3 rounded-full text-sm font-medium shadow-rose hover:shadow-rose-lg transition-all hover:scale-105"
        >
          Retour à l'accueil
        </Link>

        {/* Additional Links */}
        <div className="mt-8 flex justify-center gap-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <span>•</span>
          <Link to="/products" className="hover:text-primary transition-colors">
            Collection
          </Link>
          <span>•</span>
          <Link to="/about" className="hover:text-primary transition-colors">
            À propos
          </Link>
          <span>•</span>
          <Link to="/promo" className="hover:text-primary transition-colors">
            Promotions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;