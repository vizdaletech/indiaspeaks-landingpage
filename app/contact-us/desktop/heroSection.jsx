"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const HeroSection = () => {
  return (
    <section className="h-screen bg-primary/10 pt-20">
      <InlineWidget url="https://calendly.com/gomanirajan/30min" className="" />
    </section>
  );
};

export default HeroSection;
