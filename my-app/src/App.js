import './App.css';
import MainSite from './components/MainSite/MainSite';
import React from 'react';

function App() {
  return (
    <div>
      <div class='loader'></div>
      <MainSite></MainSite> 
    </div>
  );
};


window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")

  loader.classList.add("loader-hidden");
});

console.log("Testing is working!")
export default App;
