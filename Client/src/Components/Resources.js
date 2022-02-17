import React from 'react';
import './Resources.css';
import Footer from '../Components/Footer/Footer'


export default function Resources() {
  return (
    <>
    <div className="main">
      <div className='resourcetitle'>
      <h1>Resources</h1>
      </div>


  
  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
        <div className="card_content">
          <h2 className="card_title">Time Table</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Click Here</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://picsum.photos/500/300/?image=5"/></div>
        <div className="card_content">
          <h2 className="card_title">Books</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Click Here</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://picsum.photos/500/300/?image=11"/></div>
        <div className="card_content">
          <h2 className="card_title">Assignments</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Click Here</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://picsum.photos/500/300/?image=14"/></div>
        <div className="card_content">
          <h2 className="card_title">Previous Papers</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Click Here</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://picsum.photos/500/300/?image=17"/></div>
        <div className="card_content">
          <h2 className="card_title">Tutorials</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Click Here</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://picsum.photos/500/300/?image=2"/></div>
        <div className="card_content">
          <h2 className="card_title">Class Recordings</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Click Here</button>
        </div>
      </div>
    </li>
  </ul>
  <div className='footconnn'>
    <Footer/>
    </div>
</div>
  </>
  );
}
