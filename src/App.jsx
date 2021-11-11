import './App.scss';
import background from './img/background.jpg'
import preview from './img/preview.jpg'
import arrowback from './img/arrow-back.svg'
import play from './img/play.svg'
import arrowforward from './img/arrow-forward.svg'
import { useState } from 'react';

import content from './assets/content';

function App() {

  const [lang , setLang] = useState("uz")
  const [color, setColor] = useState(
    window.localStorage.getItem("theme") 
    )
    
    const handelSetTheme = (e)=>{
      setColor(e.target.value)
      window.localStorage.setItem("theme", e.target.value)
  }
  return (
    <>
  <div className={color}>
    <div className="section">
      <div className="left">
        <img src={background} alt="background" class="img"/>
        <div className="back">
          <a href="/">
            <img src={arrowback} alt="back"/>
          <p>{content[lang].back}</p>
          </a>
        </div>
      </div>
      <div className="right">
        <div className="nav">
          <ul>
            <li><a href="/">{content[lang].link.state1}</a></li>
            <li><a href="/" class="aktiv">{content[lang].link.state2}</a></li>
            <li><a href="/">{content[lang].link.state3}</a></li>
            <li>
            <select
                  defaultValue={lang}
                  onChange={
                    (evt)=>{
                      setLang(evt.target.value)
                    }
                  }>
                  <option value="uz">UZB</option>
                  <option value="en">EN</option>
                  <option value="ru">RU</option>
          </select>
            </li>
            <li>
              <select onChange = {handelSetTheme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="title">
            <h1>{content[lang].title}</h1>
            <span></span>
          </div>
          <div className="subtitle">
            <h4>{content[lang].subTitle}</h4>
          </div>
          <div className="block">
            <div className="block-left">
              <img src={preview} alt="" width="200"/>
              <img src={play} alt="play" class="play"/>
              <div className="all-foto">
                <a href="/">{content[lang].videoText}</a>
                <img src={arrowforward} alt=""/>
              </div>
            </div>
            <div className="block-right"> 
              <p>{content[lang].text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default App;
