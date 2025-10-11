import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="text-center px-6 relative z-10">
        <div className="mb-8">
          <h1 className="font-display text-9xl font-bold text-gradient-primary mb-4">404</h1>
          <h2 className="font-display text-3xl font-semibold mb-4 text-foreground">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto mb-8">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group">
            <a href="/">
              <Home className="mr-2 w-5 h-5" />
              Return Home
              <ArrowLeft className="ml-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <a href="/#contact">
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
