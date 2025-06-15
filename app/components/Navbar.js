'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const timelineRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu animation
  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });
    timelineRef.current.to(menuRef.current, {
      duration: 0.5,
      opacity: 1,
      height: 'auto',
      ease: 'power3.inOut'
    });

    return () => {
      timelineRef.current.kill();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-2xl">
            Galactic 3D
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-primary transition duration-300">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-primary transition duration-300">
              Services
            </Link>
            <Link href="/projects" className="text-white hover:text-primary transition duration-300">
              Projects
            </Link>
            <Link href="/blog" className="text-white hover:text-primary transition duration-300">
              Blog
            </Link>
            <Link href="/newsletter" className="text-white hover:text-primary transition duration-300">
              Newsletter
            </Link>
            <Link href="/submit" className="text-white hover:text-primary transition duration-300 flex items-center">
              <span>Submit 3D File</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </Link>
            <Link href="/contact" className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-md transition duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="md:hidden overflow-hidden opacity-0 h-0"
        >
          <div className="flex flex-col space-y-4 mt-4 pb-5">
            <Link href="/" className="text-white hover:text-primary transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-primary transition duration-300">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-primary transition duration-300">
              Services
            </Link>
            <Link href="/projects" className="text-white hover:text-primary transition duration-300">
              Projects
            </Link>
            <Link href="/blog" className="text-white hover:text-primary transition duration-300">
              Blog
            </Link>
            <Link href="/newsletter" className="text-white hover:text-primary transition duration-300">
              Newsletter
            </Link>
            <Link href="/submit" className="text-white hover:text-primary transition duration-300 flex items-center">
              <span>Submit 3D File</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </Link>
            <Link href="/contact" className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md inline-block transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}