export const title = "Libse Seller";

export const categories = [
  {
    label: "Men",
    value: "men",
    subCategories: [
      {
        label: "Shirts",
        value: "shirts",
        details: [
          {
            label: "Type",
            value: "type",
            options: [
              { label: "T-Shirts", value: "t-shirts" },
              { label: "Casual Button-Down", value: "casual-button-down" },
              { label: "Polos", value: "polos" },
              { label: "Tank Tops", value: "tank-tops" },
              { label: "Dress Shirts", value: "dress-shirts" },
              { label: "Henleys", value: "henleys" },
            ],
            required: true,
          },
        ],
      },
      {
        label: "Shoes",
        value: "shoes",
        details: [
          {
            label: "Type",
            value: "type",
            options: [
              { label: "Athletic", value: "athletic" },
              { label: "Boots", value: "boots" },
              { label: "Fashion Sneakers", value: "fashion-sneakers" },
              { label: "Outdoor", value: "outdoor" },
              { label: "Oxfords", value: "oxfords" },
              { label: "Sandals", value: "sandals" },
              { label: "Slippers", value: "slippers" },
              { label: "Work & Safety", value: "work-&-safety" },
              { label: "Loafers & Slip-Ons", value: "loafers-&-slip-ons" },
              { label: "Mules & Clogs", value: "mules-&-clogs" },
            ],
            required: true,
          },
        ],
      },
      {
        label: "Jackets",
        value: "jackets",
        details: [
          {
            label: "Type",
            value: "type",
            options: [
              { label: "Active & Performance", value: "active-&-performance" },
              { label: "Lightweight Jackets", value: "lightweight-jackets" },
              { label: "Leather/Faux Leather", value: "leather-Faux-leather" },
              { label: "Fleece", value: "fleece" },
              { label: "Wool", value: "wool" },
              { label: "Vests", value: "vests" },
              { label: "Work Wear", value: "work-wear" },
              { label: "Trench & Rain", value: "trench-&-rain" },
            ],
            required: true,
          },
        ],
      },
      {
        label: "Hoodies & Sweatshirts",
        value: "hoodies-&-sweatshirts",
        details: [],
      },
      {
        label: "Pants",
        value: "pants",
        details: [
          {
            label: "Type",
            value: "type",
            options: [
              { label: "Jeans", value: "jeans" },
              { label: "Trousers", value: "trousers" },
              { label: "Joggers", value: "joggers" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Comfort Fit", value: "comfort-fit" },
              { label: "Slim Fit", value: "slim-fit" },
              { label: "Skinny", value: "skinny" },
            ],
          },
        ],
      },
      {
        label: "Tops",
        value: "tops",
        details: [
          {
            label: "Material",
            value: "material",
            options: [
              { label: "Cotton", value: "cotton" },
              { label: "Polyster", value: "polyster" },
              { label: "Pique", value: "pique" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Shirt", value: "shirt" },
              { label: "T-shirt", value: "t-shirt" },
              { label: "Polo", value: "polo" },
              { label: "Sweetshirt", value: "sweetshirt" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Short", value: "short" },
              { label: "Sleeveless", value: "sleeves" },
            ],
          },
        ],
      },
      {
        label: "Slippers",
        value: "slippers",
        details: [
          {
            label: "Type",
            value: "type",
            options: [
              { label: "Arabic", value: "arabic" },
              { label: "Flip Flop", value: "flip-flop" },
              { label: "Slides", value: "slides" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Women",
    value: "women",
    subCategories: [
      {
        label: "Dresses",
        value: "dresses",
        details: [
          {
            label: "Length",
            value: "length",
            options: [
              { label: "Above The Knee", value: "above-the-knee" },
              { label: "Knee Length", value: "knee-length" },
              { label: "Maxi", value: "maxi" },
              { label: "Mid Calf", value: "mid-calf" },
              { label: "Mini", value: "mini" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Straight", value: "straight" },
              { label: "Shift", value: "shift" },
              { label: "Bodycon", value: "bodycon" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Half", value: "half" },
              { label: "Short", value: "short" },
              { label: "Single", value: "single" },
              { label: "Sleeveless", value: "sleeveless" },
              { label: "Three Quarter Sleeve", value: "three-quarter-sleeve" },
            ],
          },
          {
            label: "Occasion",
            value: "occasion",
            options: [
              { label: "Casual", value: "casual" },
              { label: "Club", value: "club" },
              { label: "Cocktail", value: "cocktail" },
              { label: "Special Occasion", value: "special-occasion" },
            ],
          },
        ],
      },
      {
        label: "Sandals",
        value: "sandals",
        details: [
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Comfort", value: "comfort" },
              { label: "Heels", value: "heels" },
              { label: "Wedges", value: "wedges" },
              { label: "Hells", value: "hells" },
              { label: "Clog", value: "clog" },
              { label: "Thong", value: "thong" },
            ],
          },
          {
            label: "Occasion",
            value: "occasion",
            options: [
              { label: "Casual", value: "casual" },
              { label: "Dress", value: "dress" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Boys",
    value: "boys",
    subCategories: [
      {
        label: "Pants",
        value: "pants",
        details: [
          {
            label: "Type",
            value: "type",
            options: [
              { label: "Jeans", value: "jeans" },
              { label: "Trousers", value: "trousers" },
              { label: "Joggers", value: "joggers" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Comfort Fit", value: "comfort-fit" },
              { label: "Slim Fit", value: "slim-fit" },
              { label: "Skinny", value: "skinny" },
            ],
          },
        ],
      },
      {
        label: "Tops",
        value: "tops",
        details: [
          {
            label: "Material",
            value: "material",
            options: [
              { label: "Cotton", value: "cotton" },
              { label: "Polyster", value: "polyster" },
              { label: "Pique", value: "pique" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Shirt", value: "shirt" },
              { label: "T-shirt", value: "t-shirt" },
              { label: "Polo", value: "polo" },
              { label: "Sweetshirt", value: "sweetshirt" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Short", value: "short" },
              { label: "Sleeveless", value: "sleeves" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Girls",
    value: "girls",
    subCategories: [
      {
        label: "Dresses",
        value: "dresses",
        details: [
          {
            label: "Length",
            value: "length",
            options: [
              { label: "Above The Knee", value: "above-the-knee" },
              { label: "Knee Length", value: "knee-length" },
              { label: "Maxi", value: "maxi" },
              { label: "Mid Calf", value: "mid-calf" },
              { label: "Mini", value: "mini" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Straight", value: "straight" },
              { label: "Shift", value: "shift" },
              { label: "Bodycon", value: "bodycon" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Half", value: "half" },
              { label: "Short", value: "short" },
              { label: "Single", value: "single" },
              { label: "Sleeveless", value: "sleeveless" },
              { label: "Three Quarter Sleeve", value: "three-quarter-sleeve" },
            ],
          },
          {
            label: "Occasion",
            value: "occasion",
            options: [
              { label: "Casual", value: "casual" },
              { label: "Club", value: "club" },
              { label: "Cocktail", value: "cocktail" },
              { label: "Special Occasion", value: "special-occasion" },
            ],
          },
        ],
      },
      {
        label: "Tops",
        value: "tops",
        details: [
          {
            label: "Material",
            value: "material",
            options: [
              { label: "Cotton", value: "cotton" },
              { label: "Polyster", value: "polyster" },
              { label: "Pique", value: "pique" },
            ],
          },
          {
            label: "Style",
            value: "style",
            options: [
              { label: "Shirt", value: "shirt" },
              { label: "T-shirt", value: "t-shirt" },
              { label: "Polo", value: "polo" },
              { label: "Sweetshirt", value: "sweetshirt" },
            ],
          },
          {
            label: "Sleeve Length",
            value: "sleeve-length",
            options: [
              { label: "Full", value: "full" },
              { label: "Short", value: "short" },
              { label: "Sleeveless", value: "sleeves" },
            ],
          },
        ],
      },
    ],
  },
];
