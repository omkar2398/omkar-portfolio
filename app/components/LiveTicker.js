"use client"; // This is a client component 👈🏽

import React from "react";
import { motion } from "framer-motion";

const LiveTicker = () => {
  return (
    <div className="overflow-hidden py-2 bg-black text-white">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-200%" }}
        transition={{
          ease: "linear",
          duration: 20,
          delay: 0.5,
          repeat: "Infinity",
        }}
        className="text-2xl flex whitespace-nowrap "
      >
        <h3 className="px-3 font-bold">OPEN FOR FRONTEND DEVELOPER ROLES.</h3>
        <h3 className="px-3 font-bold">OPEN FOR FRONTEND DEVELOPER ROLES.</h3>
        <h3 className="px-3 font-bold">OPEN FOR FRONTEND DEVELOPER ROLES.</h3>
        <h3 className="px-3 font-bold">OPEN FOR FRONTEND DEVELOPER ROLES.</h3>
        <h3 className="px-3 font-bold">OPEN FOR FRONTEND DEVELOPER ROLES.</h3>
        <h3 className="px-3 font-bold">OPEN FOR FRONTEND DEVELOPER ROLES.</h3>
        <h3 className="px-3 font-bold">OPEN FOR FRONTEND DEVELOPER ROLES.</h3>
        <h3 className="px-3 font-bold">OPEN FOR FRONTEND DEVELOPER ROLES.</h3>
      </motion.div>
    </div>
  );
};

export default LiveTicker;
