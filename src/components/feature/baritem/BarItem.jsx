/* eslint-disable @next/next/no-img-element */
import React from "react";

// Create a reusable Button component with an icon and text
const ButtonWithIcon = ({ icon, text }) => {
  return (
    <button className="flex items-center justify-center gap-2 p-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
      {/* Add icon here */}
      <img src={icon} alt="icon" className="w-6 h-6" />
      {/* Button text */}
      <span>{text}</span>
    </button>
  );
};

export default function BarItem() {
  return (
    <div className="grid grid-cols-3 gap-4 p-3">
      {/* Button 1 */}
      <ButtonWithIcon
        icon="https://cdn-icons-png.flaticon.com/512/4459/4459384.png"
        text="Checkout"
      />

      {/* Button 2 */}
      <ButtonWithIcon
        icon="https://cdn-icons-png.flaticon.com/512/6136/6136672.png"
        text="Add items"
      />

      {/* Button 3 */}
      <ButtonWithIcon
        icon="https://icons-for-free.com/iff/png/512/edit+gear+setting+settings+icon-1320191231163854073.png"
        text="Settings"
      />
    </div>
  );
}
