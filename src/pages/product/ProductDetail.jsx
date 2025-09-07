import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Star, Plus, Minus, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { div } from "framer-motion/client";
import Footer from "@/components/Footer";
import { useCartStore } from "../../store/cartStore";
import { useLanguageStore } from "../../store/languageStore";
import { sampleComputersProducts } from "../../components/sampleComputersProducts";

// Mock cart store
const useCartStoreMock = () => ({
  addItem: (item) => {
    console.log("Added to cart:", item);
  },
});

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const { t, isRTL } = useLanguageStore();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProduct = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProduct = sampleComputersProducts.find((p) => p.id === id);
        if (foundProduct) {
          // Transform the product data to match the expected format
          const transformedProduct = {
            ...foundProduct,
            images: [
              foundProduct.imageUrl,
              foundProduct.imageUrl,
              foundProduct.imageUrl,
            ],
            sizes: ["8GB RAM", "16GB RAM", "32GB RAM"],
            colors: [foundProduct.color || "Black"],
            material: foundProduct.brand,
            originalPrice: foundProduct.price * 1.3,
            rating: 4.5 + Math.random() * 0.5,
            reviews: Math.floor(Math.random() * 200) + 50,
            features: [
              "Fast SSD",
              "Latest gen CPU",
              "Warranty included",
              "Great battery/airflow",
            ],
            care: "Keep firmware updated and clean vents regularly.",
            availability: foundProduct.stockStatus,
            brand: foundProduct.brand || "TechHub",
          };
          setProduct(transformedProduct);
          setSelectedColor(transformedProduct.colors[0]);
          setSelectedSize(
            transformedProduct.sizes[1] || transformedProduct.sizes[0]
          ); // Default to second size or first
        }
        setLoading(false);
      }, 1000);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      const itemToAdd = {
        ...product,
        selectedSize,
        selectedColor,
        quantity,
        image: product.images[0],
      };
      addItem(itemToAdd);
      alert(`${product.name} added to cart!`);
    } else {
      alert("Please select size and color");
    }
  };

  const handleBuyNow = () => {
    if (product && selectedSize && selectedColor) {
      const itemToAdd = {
        ...product,
        selectedSize,
        selectedColor,
        quantity,
        image: product.images[0],
      };
      addItem(itemToAdd);
      navigate("/checkout");
    } else {
      alert("Please select size and color");
    }
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => quantity > 1 && setQuantity((prev) => prev - 1);

  if (loading) {
    return (
      <div className="!min-h-screen !bg-[var(--color-background)] !flex !items-center !justify-center">
        <div className="!text-center">
          <div className="!animate-spin !rounded-full !h-12 !w-12 !border-b-2 !border-[var(--color-primary)] !mx-auto !mb-4"></div>
          <p className="!text-[var(--color-white)]">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="!min-h-screen !bg-[var(--color-background)] !flex !items-center !justify-center">
        <div className="!text-center">
          <h2 className="!text-2xl !font-bold !text-[var(--color-white)] !mb-4">
            Product Not Found
          </h2>
          <button className="!bg-[var(--color-primary)] !text-white !px-6 !py-3 !rounded-lg !hover:bg-[var(--color-background-secondary)] !transition-colors">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="!pt-22">
      <Navbar />
      <div className="!min-h-screen !bg-[var(--color-primary)]">
        <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-8">
          {/* Breadcrumb */}
          <nav className="!flex !mb-8 !text-sm !text-[var(--color-white)]">
            <a href="#" className="!hover:text-[var(--color-accent)]">
              Home
            </a>
            <span className="!mx-2">/</span>
            <a href="#" className="!hover:text-[var(--color-accent)]">
              Products
            </a>
            <span className="!mx-2">/</span>
            <span className="!text-[var(--color-white)]">{product.name}</span>
          </nav>

          <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-12">
            {/* Image Gallery */}
            <div className="!space-y-4">
              <div className="!aspect-w-4 !aspect-h-5">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="!w-full !h-[600px] !object-cover !rounded-lg !shadow-[var(--color-shadow)]"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="!flex !space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`!w-20 !h-20 !rounded-md !overflow-hidden !border-2 ${
                      selectedImage === index
                        ? "!border-[var(--color-accent)]"
                        : "!border-[var(--color-border)]"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="!w-full !h-full !object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="!space-y-6">
              <div>
                <h1 className="!text-4xl !font-bold !text-accent !mb-2">
                  {product.name}
                </h1>
                <p className="!text-lg !text-white">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="!flex !items-center !space-x-2">
                <div className="!flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`!w-5 !h-5 ${
                        i < Math.floor(product.rating)
                          ? "!text-[var(--color-accent)] !fill-current"
                          : "!text-[var(--color-border)]"
                      }`}
                    />
                  ))}
                </div>
                <span className="!text-[var(--color-white)]">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="!flex !items-center !space-x-4">
                <span className="!text-3xl !font-bold !text-[var(--color-white)]">
                  {product.price / 100} DZD
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="!text-xl !text-white !line-through">
                      {product.originalPrice / 100} DZD
                    </span>
                    <span className="!bg-accent !text-white !px-2 !py-1 !rounded-md !text-sm !font-medium">
                      {discountPercentage}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="!text-lg !font-medium !text-[var(--color-white)] !mb-3">
                  Size
                </h3>
                <div className="!grid !grid-cols-6 !gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`!py-2 !px-3 !text-sm !font-medium !rounded-md !border ${
                        selectedSize === size
                          ? "!bg-[var(--color-primary)] !text-white !border-white"
                          : "!bg-white !text-black !border-[var(--color-border)] !hover:bg-[var(--color-secondary)]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="!text-lg !font-medium !text-[var(--color-white)] !mb-3">
                  Color: {selectedColor}
                </h3>
                <div className="!flex !space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`!py-2 !px-4 !text-sm !font-medium !rounded-md !border ${
                        selectedColor === color
                          ? "!bg-[var(--color-primary)] !text-white !border-white"
                          : "!bg-white !text-[var(--color-white)] !border-white !hover:bg-[var(--color-secondary)]"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="!text-lg !font-medium !text-[var(--color-white)] !mb-3">
                  Quantity
                </h3>
                <div className="!flex !items-center !space-x-3">
                  <button
                    onClick={handleDecrement}
                    className="!p-2 !rounded-full !border !border-white !hover:bg-[var(--color-secondary)] !disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="!w-4 !h-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="!w-16 !text-center !border !border-white !rounded-md !py-2"
                    min="1"
                  />
                  <button
                    onClick={handleIncrement}
                    className="!p-2 !rounded-full !border !border-white !hover:bg-[var(--color-secondary)]"
                  >
                    <Plus className="!w-4 !h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="!flex !flex-col sm:!flex-row !space-y-4 sm:!space-y-0 sm:!space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="!flex-1 !bg-accent !text-white !py-3 !px-6 !rounded-lg !text-lg !font-medium !hover:bg-[var(--color-background-secondary)] !transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="!flex-1 !bg-[var(--color-background-secondary)] !text-white !py-3 !px-6 !rounded-lg !text-lg !font-medium !hover:bg-[var(--color-primary)] !transition-colors"
                >
                  Buy Now
                </button>
              </div>

              {/* Product Details */}
              <div className="!pt-6 !border-t !border-[var(--color-border)]">
                <div className="!space-y-4">
                  <div>
                    <h4 className="!font-medium !text-[var(--color-white)] !mb-2">
                      Material
                    </h4>
                    <p className="!text-[var(--color-white)]">
                      {product.material}
                    </p>
                  </div>
                  <div>
                    <h4 className="!font-medium !text-[var(--color-white)] !mb-2">
                      Care Instructions
                    </h4>
                    <p className="!text-[var(--color-white)]">{product.care}</p>
                  </div>
                  <div>
                    <h4 className="!font-medium !text-[var(--color-white)] !mb-2">
                      Features
                    </h4>
                    <ul className="!text-[var(--color-white)] !list-disc !list-inside !space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="!mt-16">
            <h2 className="!text-2xl !font-bold !text-[var(--color-white)] !mb-8">
              You Might Also Like
            </h2>
            <div className="!grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-6">
              {sampleComputersProducts
                .filter(
                  (p) => p.id !== product.id && p.category === product.category
                )
                .slice(0, 3)
                .map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="!group !cursor-pointer"
                  >
                    <Link to={`/product/${relatedProduct.id}`}>
                      <div className="!bg-white !rounded-lg !shadow-[var(--color-shadow)] !overflow-hidden !group-hover:shadow-xl !transition-shadow">
                        <img
                          src={relatedProduct.imageUrl}
                          alt={relatedProduct.name}
                          className="!w-full !h-64 !object-cover !group-hover:scale-105 !transition-transform !duration-300"
                        />
                        <div className="!p-4">
                          <h3 className="!font-medium !text-black !mb-2">
                            {relatedProduct.name}
                          </h3>
                          <p className="!text-sm !text-black !mb-2 !line-clamp-2">
                            {relatedProduct.description.slice(0, 80)}...
                          </p>
                          <div className="!flex !justify-between !items-center">
                            <span className="!text-lg !font-bold !text-[var(--color-accent)]">
                              {relatedProduct.price / 100} DZD
                            </span>
                            <span className="!text-sm !text-black">
                              ★ {(4.5 + Math.random() * 0.5).toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
