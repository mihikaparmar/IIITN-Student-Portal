import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-centerr'>
      {items.map((menuItem) => {
        const { id, title, img, desc, batch, apply} = menuItem;
        return (
          <article key={id} className='menu-itemm'>
            <img src={img} alt={title} className='photoo' />
            <div className='item-infoo'>
              <header>
                <h3>{title}</h3>
               
              </header>
              <p className='item-textt'>{desc}</p>
              <p className='item-textt'>{batch}</p>
              <p><button onclick={apply} style={{borderRadius:'13px',backgroundColor:'#6776ff',color:'white',height:'40px',width:'100px',border:'2px solid #6776ff'}}>Apply</button></p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;