import React from "react";

// Slice values match the measured inner-opening position in each final frame image:
// Gold (1650×2025): inner opening at x≈310, y≈325 → "325 310"
// Black (1528×1758): inner opening at x≈215, y≈200 → "200 215"
const GOLD  = `url('/images/frames/ornate-golden-picture-frame-classic-decor-element/gold-frame-final.webp') 325 310`;
const BLACK = `url('/images/frames/elegant-black-ornate-picture-frame-mockup/black-frame-final.webp') 200 215`;

export default function Home() {
  return (
    <section className="home">
      <div className="archipelago">
        <div className="frame-wrapper image-a" style={{borderImage: BLACK}}><img src="/images/archipelago/self-portrait.webp" alt="Self portrait" loading="eager" fetchpriority="high" /></div>
        <div className="frame-wrapper image-b" style={{borderImage: GOLD}}><img src="/images/archipelago/nt-1.webp" alt="NT 1" loading="eager" fetchpriority="high" /></div>
        <div className="frame-wrapper image-c" style={{borderImage: GOLD}}><img src="/images/archipelago/simon-geballe.webp" alt="Simon Geballe" loading="eager" /></div>
        <div className="frame-wrapper image-d" style={{borderImage: GOLD}}><img src="/images/archipelago/weber.webp" alt="Weber" loading="eager" /></div>
        <div className="frame-wrapper image-e" style={{borderImage: GOLD}}><img src="/images/archipelago/trevor.webp" alt="Trevor" loading="eager" /></div>
        <div className="frame-wrapper image-f" style={{borderImage: GOLD}}><img src="/images/archipelago/sam.webp" alt="Sam" loading="eager" /></div>
        <div className="frame-wrapper image-g" style={{borderImage: BLACK}}><img src="/images/archipelago/cameron.webp" alt="Cameron" loading="eager" /></div>
        <div className="frame-wrapper image-h" style={{borderImage: GOLD}}><img src="/images/archipelago/graham.webp" alt="Graham" loading="eager" /></div>
        <div className="frame-wrapper image-i" style={{borderImage: GOLD}}><img src="/images/archipelago/nt-2.webp" alt="NT 2" loading="eager" /></div>
        <div className="frame-wrapper image-j" style={{borderImage: BLACK}}><img src="/images/archipelago/chris.webp" alt="Chris" loading="eager" /></div>
        <div className="frame-wrapper image-k" style={{borderImage: GOLD}}><img src="/images/archipelago/nt-3.webp" alt="NT 3" loading="eager" /></div>
        <div className="frame-wrapper image-l" style={{borderImage: GOLD}}><img src="/images/archipelago/annie-red-chairs.webp" alt="Annie red chairs" loading="eager" /></div>
        <div className="frame-wrapper image-m" style={{borderImage: GOLD}}><img src="/images/archipelago/Betsy.webp" alt="Betsy" loading="eager" /></div>
        <div className="frame-wrapper image-n" style={{borderImage: GOLD}}><img src="/images/portraits/ruben.webp" alt="Ruben" loading="eager" /></div>
      </div>
    </section>
  );
}