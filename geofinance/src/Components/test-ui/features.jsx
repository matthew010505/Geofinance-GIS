import React from "react";
import { motion } from "framer-motion";

const Card = ({ imageUrl, title, features }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4"
    >
      <motion.img
        src={imageUrl}
        alt="Card Image"
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {features && (
          <ul className="text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
