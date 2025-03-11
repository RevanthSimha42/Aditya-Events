import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  PartyPopper,
  Mailbox,
} from "lucide-react";
import logo from "./public/favicon-96x96.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-gray text-white">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              {/* <PartyPopper size={24} className="text-amber-400 mr-2" /> */}
              <img src={logo} alt="logo" style={{ marginRight: "10px" }} />
              <h3 className="text-xl font-serif font-bold text-gradient-amber-pink">
                Aditya Events
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Making every moment unforgettable with our premium event
              management and creative services.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* <a href="#" className="text-gray-300 hover-text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover-text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover-text-amber-400 transition-colors">
                <Twitter size={20} />
              </a> */}
              <a
                href="mailto:recipient@example.com?subject=Hello&body=This is my message."
                aria-label="Gmail"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover-text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover-text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover-text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-300 hover-text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover-text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-amber-400">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover-text-white transition-colors">
                Event Management
              </li>
              <li className="text-gray-300 hover-text-white transition-colors">
                Car & Stage Decoration
              </li>
              <li className="text-gray-300 hover-text-white transition-colors">
                Birthday & Wedding Decor
              </li>
              <li className="text-gray-300 hover-text-white transition-colors">
                Photography & Drone Shots
              </li>
              <li className="text-gray-300 hover-text-white transition-colors">
                Pre-Wedding Shoots
              </li>
              <li className="text-gray-300 hover-text-white transition-colors">
                Customized Gifts
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-amber-400">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-amber-400 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  Bharat Nagar, Kukatpally, Hyderabad, Telangana, India – 500018
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="text-amber-400 mr-2 flex-shrink-0"
                />
                <span className="text-gray-300">+91 77022 51024</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-amber-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300"> adityaevents47@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Aditya Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
