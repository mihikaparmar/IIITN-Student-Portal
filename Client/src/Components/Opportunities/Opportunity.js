import React, { useState } from 'react';
import Menu from './Menuopp';
import Categoriesopp from './Categoriesopp';
import items from './dataopp';
import './Opportunity.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Footer from '../Footer/Footer';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div>
    <main>
      <section className="menuu sectionn">
        <div className="tittle">
          <h2>Opportunities</h2>
          <div className="underlinee"></div>
        </div>
        <Categoriesopp categories={categories} filterItems={filterItems} />
        <div className="containerr2">
        <Scrollbars>
        <Menu items={menuItems} />
        </Scrollbars>
        
        </div>
        
      </section>
     
    </main>
    <div className='footcon'>
    <Footer/>
    </div>
    </div>
  );
}

export default App;