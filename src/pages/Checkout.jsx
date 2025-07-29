import React from "react";
import { useForm } from "react-hook-form";
// import axios from "axios"; // Commented out since no backend
import { useCartStore } from "../store/cartStore";
import { useLanguageStore } from "../store/languageStore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Checkout() {
  const { cartItems = [], clearCart, removeItem } = useCartStore(); // Provide default empty array
  const { t } = useLanguageStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Static checkout completion - no backend interaction
      console.log("Order details:", data);
      console.log("Cart items:", cartItems);

      // Simulate successful order processing
      alert("Commande passée avec succès! Merci pour votre achat.");

      // Clear the cart after successful order
      clearCart();

      /* COMMENTED OUT - Backend API interaction
      const response = await axios.post("http://localhost:3001/product/order", {
        ...data,
        products: items,
      });
      console.log("Order validated", response.data);
      clearCart();
      */
    } catch (error) {
      // Static error handling
      console.error("Error processing order:", error);
      alert(
        "Il y a eu une erreur lors du traitement de votre commande. Veuillez réessayer."
      );

      /* COMMENTED OUT - Backend error handling
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Server error:", error.response.data);
          alert(
            `Error: ${
              error.response.data.message ||
              "An error occurred while processing your order."
            }`
          );
        } else if (error.request) {
          console.error("Network error:", error.request);
          alert(
            "Network error: Please check your internet connection and try again."
          );
        } else {
          console.error("Error:", error.message);
          alert(`Error: ${error.message}`);
        }
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred. Please try again later.");
      }
      */
    }
  };

  const totalAmount = (cartItems || []).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="">
      <Navbar />
      <div className="!mx-auto !py-30 !px-4 sm:!px-6 lg:!px-12 !min-h-screen !bg-background pt-20">
        <h1 className="!text-3xl !font-bold !mb-6 !text-center !text-gray-800">
          {t("completeYourOrder")}
        </h1>

        {cartItems.length === 0 ? (
          <div className="!text-center !py-12">
            <h2 className="!text-xl !text-gray-600 !mb-4">
              {t("cartIsEmpty")}
            </h2>
            <a
              href="/products"
              className="!bg-primary !text-white !px-6 !py-3 !rounded-lg hover:!bg-blue-700 !transition-colors"
            >
              {t("continueShopping")}
            </a>
          </div>
        ) : (
          <>
            {/* Cart Section */}
            <div className="!bg-white !p-6 !rounded-lg !shadow-md !mb-6">
              <h2 className="!text-2xl !font-semibold !mb-4 !text-gray-800">
                {t("yourCart")}
              </h2>
              <ul className="!divide-y !divide-gray-200">
                {cartItems.map((item, index) => (
                  <li
                    key={`${item.id}-${index}`}
                    className="!flex !items-center !justify-between !py-4"
                  >
                    <img
                      src={item.image || item.imageUrl}
                      alt={item.name}
                      className="!w-16 !h-16 !object-cover !rounded-lg !shadow-sm"
                    />
                    <div className="!ml-4 !flex-1">
                      <p className="!font-medium !text-gray-800">{item.name}</p>
                      <p className="!text-sm !text-gray-500">
                        {t("quantity")}: {item.quantity}
                      </p>
                      {item.selectedSize && (
                        <p className="!text-sm !text-gray-500">
                          {t("size")}: {item.selectedSize}
                        </p>
                      )}
                      {item.selectedColor && (
                        <p className="!text-sm !text-gray-500">
                          {t("color")}: {item.selectedColor}
                        </p>
                      )}
                    </div>
                    <div className="!text-gray-900 !font-semibold">
                      {((item.price * item.quantity) / 100).toFixed(2)} DZD
                    </div>
                  </li>
                ))}
              </ul>
              <div className="!text-xl !font-bold !text-right !mt-6 !pt-4 !border-t !border-gray-200">
                {t("total")}: {(totalAmount / 100).toFixed(2)} DZD
              </div>
            </div>

            {/* Order Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="!bg-white !shadow-md !rounded-lg !p-6"
            >
              <h2 className="!text-2xl !font-semibold !mb-6 !text-gray-800">
                {t("shippingInformation")}
              </h2>

              {/* Name Field */}
              <div className="!mb-4">
                <label
                  htmlFor="name"
                  className="!block !text-sm !font-medium !text-gray-700 !mb-2"
                >
                  {t("fullName")} *
                </label>
                <input
                  type="text"
                  id="name"
                  className={`!text-primary !mt-1 !block !w-full !px-3 !py-2 !border !rounded-md !shadow-sm !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:border-blue-500 !sm:text-sm ${
                    errors.name ? "!border-red-500" : "!border-gray-300"
                  }`}
                  {...register("name", { required: t("nameIsRequired") })}
                />
                {errors.name && (
                  <span className="!text-red-500 !text-sm !mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="!mb-4">
                <label
                  htmlFor="email"
                  className="!block !text-sm !font-medium !text-gray-700 !mb-2"
                >
                  {t("emailAddress")} *
                </label>
                <input
                  type="email"
                  id="email"
                  className={`!text-primary !mt-1 !block !w-full !px-3 !py-2 !border !rounded-md !shadow-sm !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:border-blue-500 !sm:text-sm ${
                    errors.email ? "!border-red-500" : "!border-gray-300"
                  }`}
                  {...register("email", {
                    required: t("emailIsRequired"),
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: t("invalidEmailAddress"),
                    },
                  })}
                />
                {errors.email && (
                  <span className="!text-red-500 !text-sm !mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Phone Field */}
              <div className="!mb-4">
                <label
                  htmlFor="phone"
                  className="!block !text-sm !font-medium !text-gray-700 !mb-2"
                >
                  {t("phoneNumber")} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className={`!text-primary !mt-1 !block !w-full !px-3 !py-2 !border !rounded-md !shadow-sm !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:border-blue-500 !sm:text-sm ${
                    errors.phone ? "!border-red-500" : "!border-gray-300"
                  }`}
                  {...register("phone", {
                    required: t("phoneIsRequired"),
                    pattern: {
                      value: /^[0-9]{10,}$/,
                      message: t("invalidPhoneNumber"),
                    },
                  })}
                />
                {errors.phone && (
                  <span className="!text-red-500 !text-sm !mt-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* State Field */}
              <div className="!mb-4">
                <label
                  htmlFor="state"
                  className="!block !text-sm !font-medium !text-gray-700 !mb-2"
                >
                  {t("stateProvince")} *
                </label>
                <input
                  type="text"
                  id="state"
                  className={`!text-primary !mt-1 !block !w-full !px-3 !py-2 !border !rounded-md !shadow-sm !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:border-blue-500 !sm:text-sm ${
                    errors.state ? "!border-red-500" : "!border-gray-300"
                  }`}
                  {...register("state", { required: t("stateIsRequired") })}
                />
                {errors.state && (
                  <span className="!text-red-500 !text-sm !mt-1">
                    {errors.state.message}
                  </span>
                )}
              </div>

              {/* City Field */}
              <div className="!mb-4">
                <label
                  htmlFor="city"
                  className="!block !text-sm !font-medium !text-gray-700 !mb-2"
                >
                  {t("city")} *
                </label>
                <input
                  type="text"
                  id="city"
                  className={`!text-primary !mt-1 !block !w-full !px-3 !py-2 !border !rounded-md !shadow-sm !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:border-blue-500 !sm:text-sm ${
                    errors.city ? "!border-red-500" : "!border-gray-300"
                  }`}
                  {...register("city", { required: t("cityIsRequired") })}
                />
                {errors.city && (
                  <span className="!text-red-500 !text-sm !mt-1">
                    {errors.city.message}
                  </span>
                )}
              </div>

              {/* Address Field */}
              <div className="!mb-6">
                <label
                  htmlFor="address"
                  className="!block !text-sm !font-medium !text-gray-700 !mb-2"
                >
                  {t("streetAddress")} *
                </label>
                <input
                  type="text"
                  id="address"
                  className={`!text-primary !mt-1 !block !w-full !px-3 !py-2 !border !rounded-md !shadow-sm !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:border-blue-500 !sm:text-sm ${
                    errors.address ? "!border-red-500" : "!border-gray-300"
                  }`}
                  {...register("address", {
                    required: t("addressIsRequired"),
                  })}
                />
                {errors.address && (
                  <span className="!text-red-500 !text-sm !mt-1">
                    {errors.address.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="!w-full !bg-primary !text-white !py-3 !px-4 !rounded-lg !font-semibold hover:!bg-blue-700 !transition-colors !duration-200 !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !focus:ring-offset-2"
              >
                {t("placeOrder")}
              </button>
            </form>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
