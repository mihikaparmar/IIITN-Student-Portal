import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './Mentor.css'
import Footer from '../Footer/Footer';
import { Scrollbars } from 'react-custom-scrollbars-2';
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
      <section className="menu section">
        <div className="title">
          <h2>Our mentors</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <div className="containerr">
        <Scrollbars>
        <Menu items={menuItems} />
        </Scrollbars>
        </div>
      </section>
    </main>
     <div className='footconn'>
     <Footer/>
     </div>
      </div>
  );
}

export default App;