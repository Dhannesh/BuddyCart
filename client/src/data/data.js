import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

import {
  FiTruck,
  FiShield,
  FiCreditCard,
  FiHeadphones,
} from "react-icons/fi";

export const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Categories", href: "/categories" },
      { label: "New Arrivals", href: "/products?sort=newest" },
      { label: "Best Sellers", href: "/products?sort=popular" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Shipping & Returns", href: "/shipping-returns" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "Sign In", href: "/login" },
      { label: "My Orders", href: "/orders" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Shopping Cart", href: "/cart" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Twitter", href: "#", icon: FaXTwitter },
];

export const services = [
  {
    title: "Free Shipping",
    description: "On eligible orders",
    icon: FiTruck,
  },
  {
    title: "Secure Payments",
    description: "Safe and secure checkout",
    icon: FiShield,
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns",
    icon: FiCreditCard,
  },
  {
    title: "Customer Support",
    description: "We're here to help",
    icon: FiHeadphones,
  },
];