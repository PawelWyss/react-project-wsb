import React, { useState, useEffect } from 'react'
import axios from "axios";

import './styles/main.css'
import './styles/menu.css'

function Menu() {
  const [dishes, setDishes] = useState({});
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    axios.get('menu.json')
      .then(res => setDishes(res.data))
  }, []);

  const handleSort = (e) => {
    setSortBy(e.currentTarget.dataset.value);
  }

  const sortedDishes = [...Object.values(dishes)].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "price") {
      return a.price - b.price;
    } else {
      return a.type.localeCompare(b.type);
    }
  });

  return (
    <main>
      <section>
        <table className="table table-sortable">
          <thead>
            <tr>
              <th>Zdjęcie</th>
              <th data-value="name" onClick={(e) => handleSort(e)}>Nazwa</th>
              <th data-value="price" onClick={(e) => handleSort(e)}>Cena</th>
              <th data-value="type" onClick={(e) => handleSort(e)}>Typ</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(sortedDishes).map((dish, index) => {
              return (
                <tr key={index}>
                  <td><img id="menu" src={dish.photo} alt={dish.name} /></td>
                  <td>{dish.name}</td>
                  <td>{dish.price}</td>
                  <td>{dish.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );

}

export default Menu; 