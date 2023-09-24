

import React from "react";

const Donate = ({ donate }) => {
  const { picture_url, category, title, category_bg_color, card_bg_color, text_color } = donate;

  return (
    <div className={`border-2 rounded-md ${card_bg_color}`}>
      <div>
        <img src={picture_url} alt={title} />
      </div>
      <div className={`text-color py-4 pl-4`}>
        <button className="bg-blue-300 p-1 rounded-md text-white" >{category}</button>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Donate;
