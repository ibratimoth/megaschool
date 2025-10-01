import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingCart, CheckCircle, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { createRequest } from '../api'

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organisation: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alert, setAlert] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { name, email, organisation } = formData;
        if (!name.trim() || !email.trim() || !organisation.trim()) {
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setAlert({ type: 'error', message: 'Please fill all fields with valid information.' });
            return;
        }

        if (cartItems.length === 0) {
            setAlert({ type: 'error', message: 'Please add at least one service to your cart.' });
            return;
        }

        try {
            setIsSubmitting(true);

            const requestData = {
                services: cartItems.map(item => ({
                    name: item.name
                })),  
                full_name: formData.name,
                email: formData.email,
                organisation: formData.organisation
            };

            const response = await createRequest(requestData);

            setAlert({ type: 'success', message: response.data.message || 'Request sent successfully!' });
            clearCart();
            setFormData({ name: '', email: '', organisation: '' });

        } catch (error) {
            console.error(error);
            setAlert({ type: 'error', message: 'Failed to send request. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeAlert = () => {
        setAlert(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="space-y-8"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-3xl font-bold text-gray-900 mb-8"
                    >
                        Service Request Cart
                    </motion.h1>

                    {alert && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-lg flex items-center justify-between ${alert.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                                }`}
                        >
                            <div className="flex items-center">
                                {alert.type === 'success' ? <CheckCircle size={20} className="mr-2" /> : <AlertCircle size={20} className="mr-2" />}
                                {alert.message}
                            </div>
                            <button onClick={closeAlert} className="text-gray-500 hover:text-gray-700">
                                ×
                            </button>
                        </motion.div>
                    )}

                    {cartItems.length === 0 ? (
                        <motion.div
                            variants={fadeInUp}
                            className="text-center py-16 bg-white rounded-2xl shadow-sm"
                        >
                            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
                            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No services selected yet</h2>
                            <p className="text-gray-500">Browse our products and add services to your cart to get started.</p>
                        </motion.div>
                    ) : (
                        <>
                            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-sm p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Selected Services</h2>
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-4 p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-sm p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your email address"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-2">
                                            Organisation *
                                        </label>
                                        <input
                                            type="text"
                                            id="organisation"
                                            name="organisation"
                                            value={formData.organisation}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your organisation name"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                                    >
                                        {isSubmitting ? 'Submitting Request...' : 'Submit Request'}
                                    </button>
                                </form>
                            </motion.div>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Cart;