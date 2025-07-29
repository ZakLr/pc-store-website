import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

const Cart = () => {
  const { cartItems, removeItem, updateQuantity } = useCartStore();

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.price * (item.quantity || 1);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                LUXE
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/about-us"
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/cart"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Shopping Cart
          </h1>
          <p className="mt-2 text-gray-600">
            Review your items before checkout
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">Add some items to get started</p>
            <Link
              to="/products"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">
                    Cart Items
                  </h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 flex items-center space-x-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                        <p className="text-lg font-semibold text-indigo-600 mt-1">
                          ${item.price}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity &&
                            updateQuantity(index, (item.quantity || 1) - 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                          disabled={!updateQuantity}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>

                        <span className="w-8 text-center font-medium">
                          {item.quantity || 1}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity &&
                            updateQuantity(index, (item.quantity || 1) + 1)
                          }
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                          disabled={!updateQuantity}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotal ({cartItems.length} items)
                    </span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {subtotal > 100 ? "Free" : "$15.00"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (estimated)</span>
                    <span className="font-medium">
                      ${(subtotal * 0.08).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>
                      $
                      {(
                        subtotal +
                        (subtotal > 100 ? 0 : 15) +
                        subtotal * 0.08
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors text-center font-medium block"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  to="/products"
                  className="w-full mt-3 bg-gray-100 text-gray-900 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors text-center font-medium block"
                >
                  Continue Shopping
                </Link>

                {subtotal < 100 && (
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
