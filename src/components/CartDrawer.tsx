import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-rose-dark" />
                <h2 className="font-heading text-xl">Panier</h2>
                <span className="text-sm text-muted-foreground">({items.length})</span>
              </div>
              <button onClick={closeCart} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 scrollbar-hide">
              <AnimatePresence mode="popLayout">
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center"
                  >
                    <ShoppingBag size={48} className="text-primary/40 mb-4" />
                    <p className="text-muted-foreground">Votre panier est vide</p>
                    <button
                      onClick={closeCart}
                      className="mt-4 text-rose-dark text-sm hover:underline"
                    >
                      Continuer vos achats
                    </button>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-4 p-3 rounded-lg border border-border bg-card"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-sm font-semibold truncate">{item.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.color} · Taille {item.size}
                        </p>
                        <p className="text-rose-dark text-sm font-semibold mt-1">{item.price} DT</p>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-sm w-6 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total</span>
                  <span className="text-xl font-heading font-bold text-gradient-rose">{totalPrice()} DT</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="block w-full gradient-rose text-card text-center py-3.5 text-sm font-medium tracking-wider uppercase rounded-full shadow-rose hover:shadow-rose-lg transition-shadow"
                >
                  Commander
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
