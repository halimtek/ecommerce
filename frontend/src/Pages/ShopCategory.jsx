import React, { useContext, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'

// Generic category page template.
// Every navbar category (Laptops, Desktops, Accessories, Monitors, Tablets)
// renders through this same component, just with different props -
// see Pages/Laptops.jsx, Pages/Desktops.jsx, etc.
export const ShopCategory = (props) => {
  const { category, title, tagline, bannerClass } = props;
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('default');

  const categoryProducts = all_product.filter(
    (item) => item.category === category
  );

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    if (sortOrder === 'low-high') return a.new_price - b.new_price;
    if (sortOrder === 'high-low') return b.new_price - a.new_price;
    return 0;
  });

  const cycleSort = () => {
    setSortOrder((prev) =>
      prev === 'default' ? 'low-high' : prev === 'low-high' ? 'high-low' : 'default'
    );
  };

  const sortLabel = {
    default: 'Sort by',
    'low-high': 'Price: Low to High',
    'high-low': 'Price: High to Low',
  }[sortOrder];

  return (
    <div className="shop-category">

      <div className={`shopcategory-banner ${bannerClass}`}>
        <h1>{title}</h1>
        <p>{tagline}</p>
      </div>

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{sortedProducts.length}</span> out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort" onClick={cycleSort}>
          {sortLabel} <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p className="shopcategory-empty">
            No {title.toLowerCase()} available right now. Check back soon!
          </p>
        )}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>

    </div>
  )
}
