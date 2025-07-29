import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Button,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { FiShoppingCart } from "react-icons/fi";

import { useLanguageStore } from "../store/languageStore";
import { useCartStore } from "../store/cartStore";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { cartItems = [], removeItem } = useCartStore();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(true);
  const { currentLanguage, setLanguage } = useLanguageStore();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Color palette
  const colors = {
    primary: "#8B6F47", // Darker gold for better contrast
    primaryHover: "#6B5637",
    secondary: "#F8F5F0", // Light cream background
    text: "#333333", // Dark gray for text
    lightText: "#666666",
    border: "#E0D6C8", // Light gold border
    background: "#FFFFFF",
  };

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
    setMenuOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
    setMenuOpen(false);
  };

  const handleLanguageChange = () => {
    const newLanguage =
      currentLanguage === "ar" ? "fr" : currentLanguage === "fr" ? "en" : "ar";
    setLanguage(newLanguage);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: colors.primary,
      transition: { duration: 0.3 },
    },
  };

  const menuData = [
    { id: 1, title: "Accueil", path: "/" },
    { id: 2, title: "Collection", path: "/products" },
    { id: 3, title: "Notre Héritage", path: "/about" },
  ];

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          maxWidth: "100vw",
          width: "100%",
          display: "flex",
          alignItems: "center",
          borderBottom: `1px solid ${colors.border}`,
          backgroundColor: sticky
            ? "rgba(255, 255, 255, 0.95)"
            : colors.background,
          backdropFilter: sticky ? "blur(8px)" : "none",
          boxShadow: sticky ? theme.shadows[3] : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Box
          sx={{
            width: "100%",
            
            px: { xs: 2, sm: 3, md: 4 },
            py: 3,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link
              to="/"
              style={{
                fontSize: isMobile ? "1.25rem" : "1.75rem",
                fontWeight: 700,
                color: colors.primary,
                fontFamily: "Playfair Display, serif",
                textDecoration: "none",
                letterSpacing: "0.5px",
              }}
              className="text-5xl"
            >
              L'Élégance Intemporelle
            </Link>

            <Stack
              direction="row"
              alignItems="center"
              spacing={{ md: 4, lg: 5 }}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {menuData.map((menuItem) => (
                <motion.div
                  key={menuItem.id}
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <Link
                    to={menuItem.path}
                    style={{
                      color: colors.lightText,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: colors.primary,
                      },
                    }}
                  >
                    {menuItem.title}
                  </Link>
                </motion.div>
              ))}
              <Button
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variant="text"
                onClick={() => setCartOpen(true)}
                sx={{
                  position: "relative",
                  color: colors.lightText,
                  minWidth: "auto",
                  p: 1,
                }}
              >
                <FiShoppingCart size={22} />
                {cartItems && cartItems.length > 0 && (
                  <Typography
                    sx={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      bgcolor: colors.primary,
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cartItems.length}
                  </Typography>
                )}
              </Button>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Button
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variant="text"
                onClick={() => setCartOpen(true)}
                sx={{
                  position: "relative",
                  color: colors.lightText,
                  minWidth: "auto",
                  p: 1,
                }}
              >
                <FiShoppingCart size={22} />
                {cartItems && cartItems.length > 0 && (
                  <Typography
                    sx={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      bgcolor: colors.primary,
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cartItems.length}
                  </Typography>
                )}
              </Button>
              <IconButton
                onClick={toggleNavbar}
                sx={{
                  color: colors.lightText,
                  "&:hover": {
                    color: colors.primary,
                    backgroundColor: "transparent",
                  },
                }}
                aria-label="Toggle menu"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </motion.header>

      {/* Cart Drawer */}
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: "420px" },
            bgcolor: colors.secondary,
            boxShadow: theme.shadows[10],
          },
        }}
      >
        <Box
          sx={{
            p: 4,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Playfair Display, serif",
                color: colors.text,
                fontWeight: 600,
              }}
            >
              Votre Panier
            </Typography>
            <IconButton
              onClick={() => setCartOpen(false)}
              sx={{
                color: colors.lightText,
                "&:hover": {
                  color: colors.primary,
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ flex: 1, overflowY: "auto", mb: 3 }}>
            {!cartItems || cartItems.length === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "center",
                  color: colors.lightText,
                }}
              >
                <FiShoppingCart
                  size={48}
                  style={{ marginBottom: 16, color: colors.border }}
                />
                <Typography variant="body1">Votre panier est vide.</Typography>
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    borderColor: colors.primary,
                    color: colors.primary,
                    "&:hover": {
                      backgroundColor: colors.primary,
                      color: "white",
                      borderColor: colors.primary,
                    },
                  }}
                  onClick={() => setCartOpen(false)}
                >
                  Continuer vos achats
                </Button>
              </Box>
            ) : (
              <Stack
                spacing={3}
                divider={
                  <Box
                    sx={{
                      borderBottom: `1px solid ${colors.border}`,
                      opacity: 0.5,
                    }}
                  />
                }
              >
                {cartItems.map((product) => (
                  <Stack
                    key={product.id}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ pb: 2 }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: 80,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 1,
                        border: `1px solid ${colors.border}`,
                      }}
                    />
                    <Box sx={{ flex: 1, ml: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: colors.text, fontWeight: 500 }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: colors.lightText, mt: 0.5 }}
                      >
                        ${(product.price || 0).toFixed(2)} ×{" "}
                        {product.quantity || 1}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: colors.text, fontWeight: 600 }}
                      >
                        $
                        {(
                          (product.price || 0) * (product.quantity || 1)
                        ).toFixed(2)}
                      </Typography>
                      <Button
                        variant="text"
                        sx={{
                          color: colors.primary,
                          mt: 0.5,
                          fontSize: "0.75rem",
                          "&:hover": {
                            backgroundColor: "transparent",
                            textDecoration: "underline",
                          },
                        }}
                        onClick={() => removeItem(product.id)}
                      >
                        Retirer
                      </Button>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            )}
          </Box>

          {cartItems && cartItems.length > 0 && (
            <Box
              sx={{
                borderTop: `1px solid ${colors.border}`,
                pt: 3,
                mt: "auto",
              }}
            >
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography
                    variant="subtitle1"
                    sx={{ color: colors.text, fontWeight: 500 }}
                  >
                    Total:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: colors.text, fontWeight: 700 }}
                  >
                    {cartItems
                      .reduce(
                        (acc, item) =>
                          acc + (item.price || 0) * (item.quantity || 1),
                        0
                      )
                      .toFixed(2)}{" "}
                    USD
                  </Typography>
                </Stack>
                <Button
                  component={Link}
                  to="/checkout"
                  variant="contained"
                  sx={{
                    bgcolor: colors.primary,
                    "&:hover": { bgcolor: colors.primaryHover },
                    width: "100%",
                    borderRadius: 1,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 500,
                    textTransform: "none",
                  }}
                  onClick={() => setCartOpen(false)}
                >
                  Passer à la Caisse
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: colors.text,
                    color: colors.text,
                    "&:hover": {
                      borderColor: colors.text,
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                    width: "100%",
                    borderRadius: 1,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 500,
                    textTransform: "none",
                  }}
                  onClick={() => setCartOpen(false)}
                >
                  Continuer vos achats
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Drawer>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor={isMobile ? "bottom" : "right"}
        open={menuOpen}
        onClose={closeNavbar}
        sx={{
          "& .MuiDrawer-paper": {
            width: isMobile ? "100%" : "320px",
            height: isMobile ? "auto" : "100%",
            bgcolor: colors.secondary,
            borderRadius: isMobile ? "16px 16px 0 0" : "0",
            p: 4,
            boxShadow: theme.shadows[16],
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={closeNavbar}
            sx={{
              position: "absolute",
              top: -12,
              right: -12,
              color: colors.lightText,
              "&:hover": {
                color: colors.primary,
                backgroundColor: "transparent",
              },
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display, serif",
              color: colors.text,
              mb: 4,
              fontWeight: 600,
            }}
          >
            Menu
          </Typography>
          <Stack spacing={3}>
            {menuData.map((menuItem) => (
              <motion.div
                key={menuItem.id}
                whileHover={{ scale: 1.02, x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  to={menuItem.path}
                  style={{
                    display: "block",
                    fontSize: "1.1rem",
                    color: colors.lightText,
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: colors.primary,
                    },
                  }}
                  onClick={closeNavbar}
                >
                  {menuItem.title}
                </Link>
              </motion.div>
            ))}
            <Button
              component={motion.button}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                borderRadius: "24px",
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: colors.primary,
                  color: "white",
                  borderColor: colors.primary,
                },
              }}
              onClick={() => {
                handleLanguageChange();
                closeNavbar();
              }}
            >
              {currentLanguage === "ar"
                ? "FR"
                : currentLanguage === "fr"
                ? "EN"
                : "AR"}
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
