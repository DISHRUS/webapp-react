import React, { useState } from "react";
import './BusinessSection.css';

const businessData = [
    {
      category: "Healthcare",
      subcategories: [
        {
          name: "Hospitals",
          businesses: ["City Hospital", "Sunrise Clinic"]
        },
        {
          name: "Pharmacies",
          businesses: ["GreenMed Pharmacy", "Health Plus"]
        }
      ]
    },
    {
      category: "Education",
      subcategories: [
        {
          name: "Schools",
          businesses: ["Bright Future School", "Harmony High"]
        },
        {
          name: "Colleges",
          businesses: ["Tech University", "Commerce College"]
        }
      ]
    },
    {
      category: "Retail",
      subcategories: [
        {
          name: "Grocery",
          businesses: ["DailyMart", "Fresh Pick"]
        },
        {
          name: "Clothing",
          businesses: ["StyleHub", "Urban Outfit"]
        }
      ]
    }
  ];
  
const BusinessSection = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSubCategorySelect = (sub) => {
    setSelectedSubCategory(sub);
  };

  return (
    <div>
      <h2>Businesses We Service</h2>

      <div>
        <h3>Categories</h3>
        {businessData.map((cat) => (
          <button
            key={cat.category}
            onClick={() => handleCategorySelect(cat)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div>
          <h4>Subcategories of {selectedCategory.category}</h4>
          {selectedCategory.subcategories.map((sub) => (
            <button
              key={sub.name}
              onClick={() => handleSubCategorySelect(sub)}
            >
              {sub.name}
            </button>
          ))}
        </div>
      )}

      {selectedSubCategory && (
        <div>
          <h5>Businesses in {selectedSubCategory.name}</h5>
          <ul>
            {selectedSubCategory.businesses.map((biz) => (
              <li key={biz}>{biz}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BusinessSection;
