import './App.css';
import About from './components/About/About';
import Certification from './components/Certification/Certification';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Techstack from './components/Techstack/Techstack';
import $ from 'jquery';
import Aos from 'aos';
import 'animate.css';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
Aos.init()
function App() {
  return (


    <div className='overflow-hidden'>
      <Header />
  <Hero />
  
      <marquee className='translate-y-0  rotate-3 overflow-hidden bg-gradient-to-r from-blue-400 to-red-400 hue-rotate-1 text-white font-bold' 
      direction="right" loop='-1' height="auto" width="100%" scrollamount='10'>
      悲しい時には 町のはずれで
      電信柱の明り見てた
      七つの僕には 不思議だった
      涙うかべて 見上げたら
      虹のかけらが キラキラ光る
      
      瞬きするたびに 形を変えて
      夕闇にひとり 夢見るようで
      しかられるまで たたずんでいた
      
      ああ僕はどうして大人になるんだろう
      ああ僕はいつごろ大人になるんだろう
      
      目覚めた時は 窓に夕焼け
      妙にさみしくて 目をこすってる
      そうか僕は 陽ざしの中で
      遊び疲れて 眠ってたのか
      夢の中では 青い空を
      
      自由に歩いて いたのだけれど
      夢から覚めたら 飛べなくなって
      夕焼け空が あんなに遠い
      
      ああ僕はどうして大人になるんだろう
      ああ僕はいつごろ大人になるんだろう      </marquee>

      <div id="about">  <About />
      </div>
    
      <Techstack id='tech' />
      <hr id='projects' className='new-grow hr2' data-aos='zoom-in' data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
      </hr>
      <br>
      </br>
      <div >
        <Projects />
      </div>

      <br id='Certification'></br>
      <Certification />
      <br id='Work'></br>
      <Work />

      <Contact />
      <Footer />
    </div>


  )
}

setTimeout(function () {
  $('.new-grow').addClass('grow');
}, 275);




export default App;