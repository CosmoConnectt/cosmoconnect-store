import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useCartStore } from "../stores/useCartStore";
import { useEffect } from "react";

const OrderSuccess = () => {
    const { clearCart } = useCartStore();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className="h-screen flex items-center justify-center px-4">
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                gravity={0.1}
                style={{ zIndex: 99 }}
                numberOfPieces={500}
                recycle={false}
            />

            <motion.div
                className="max-w-md w-full bg-gray-900 rounded-lg shadow-xl overflow-hidden relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="p-6 sm:p-8">
                    <div className="flex justify-center">
                        <CheckCircle className="text-blue-500 w-16 h-16 mb-4" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-400 mb-2">
                        Order Placed Successfully!
                    </h1>

                    <p className="text-gray-300 text-center mb-2">
                        Thank you for shopping with us. Your order is being processed.
                    </p>
                    <p className="text-blue-400 text-center text-sm mb-6">
                        Check your email for order details and updates.
                    </p>

                    <div className="bg-gray-800 rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">Order number</span>
                            <span className="text-sm font-semibold text-blue-400">#12345</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">Estimated delivery</span>
                            <span className="text-sm font-semibold text-blue-400">3-5 business days</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                        >
                            <HandHeart className="mr-2" size={18} />
                            Thanks for trusting us!
                        </button>
                        <Link
                            to="/"
                            className="w-full bg-gray-800 hover:bg-gray-700 text-blue-400 font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                        >
                            Continue Shopping
                            <ArrowRight className="ml-2" size={18} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default OrderSuccess;
