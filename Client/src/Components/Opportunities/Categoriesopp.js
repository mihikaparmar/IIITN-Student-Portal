import React from 'react';

const Categoriesopp = ({ categories, filterItems }) => {
  return (
    <div className="btn-containerr">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btnn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categoriesopp;
