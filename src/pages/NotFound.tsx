import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="font-heading text-6xl font-bold text-gradient-rose">404</h1>
      <p className="text-xl text-muted-foreground">Oops ! Page non trouvée</p>
      <Link
        to="/"
        className="mt-2 gradient-rose text-card px-6 py-2.5 rounded-full text-sm font-medium shadow-rose hover:shadow-rose-lg transition-shadow"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
