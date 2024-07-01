import c from './App.module.css';
import img from "./assets/images/1.svg"
import { LuMapPin } from "react-icons/lu";
import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { BsFire } from "react-icons/bs";
import img1 from "./assets/images/2.webp"
import img2 from "./assets/images/3.webp"
import img3 from "./assets/images/4.webp"
import img4 from "./assets/images/5.webp"
import img5 from "./assets/images/6.webp"
import img6 from "./assets/images/7.webp"
import img7 from "./assets/images/8.webp"
import img9 from "./assets/images/9.webp"
import img10 from "./assets/images/10.webp"
import img11 from "./assets/images/11.webp"
import img12 from "./assets/images/12.webp"
import img13 from "./assets/images/13.png"
import img14 from "./assets/images/14.webp"
import img15 from "./assets/images/15.svg"
import img16 from "./assets/images/16.svg"
import img17 from "./assets/images/17.webp"
import img18 from "./assets/images/18.webp"
import img19 from "./assets/images/19.webp"
import img20 from "./assets/images/20.webp"
import img21 from "./assets/images/21.png"
import img22 from "./assets/images/22.png"
import img23 from "./assets/images/23.webp"
import img24 from "./assets/images/24.webp"
import img27 from "./assets/images/27.png"
import img28 from "./assets/images/28.webp"
import img29 from "./assets/images/29.webp"
import img30 from "./assets/images/31.svg"
import img32 from "./assets/images/32.svg"
import img33 from "./assets/images/33.svg"
import img34 from "./assets/images/34.svg"
import img35 from "./assets/images/35.svg"
import img36 from "./assets/images/36.svg"
import img37 from "./assets/images/37.svg"
import img38 from "./assets/images/38.svg"
import img39 from "./assets/images/39.svg"
import img40 from "./assets/images/40.svg"
import img41 from "./assets/images/41.svg"
import img42 from "./assets/images/43.webp"
import img43 from "./assets/images/44.webp"
import img44 from "./assets/images/45.webp"
import img45 from "./assets/images/46.webp"
import img46 from "./assets/images/47.jpg"
import img47 from "./assets/images/48.webp"
import img48 from "./assets/images/49.jpg"
import img49 from "./assets/images/50.jpg"
import img50 from "./assets/images/51.webp"
import img51 from "./assets/images/52.jpg"
import img52 from "./assets/images/53.webp"
import img53 from "./assets/images/54.jpg"
import img54 from "./assets/images/55.jpg"
import img55 from "./assets/images/56.jpg"
import img56 from "./assets/images/57.webp"
import img57 from "./assets/images/58.jpg"
import img58 from "./assets/images/59.webp"
import img59 from "./assets/images/42.jpg"
import img60 from "./assets/images/60.jpg"
import img61 from "./assets/images/61.jpg"
import img62 from "./assets/images/t1.webp"
import img63 from "./assets/images/t2.webp"
import img64 from "./assets/images/t3.webp"
import img65 from "./assets/images/t3.webp"
import img66 from "./assets/images/h1.webp"
import img67 from "./assets/images/qr.webp"
import img68 from "./assets/images/play.svg"
import img69 from "./assets/images/app.svg"
import img70 from "./assets/images/icn1.svg"
import img71 from "./assets/images/icn2.svg"
import img72 from "./assets/images/icn3.svg"
import img73 from "./assets/images/icn4.svg"


import { FaStar } from "react-icons/fa";







// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';







function App() {

  const [region, setRegion] = useState("Toshkent")




  return (
    <div className={c.container}>
      <div className={c.box}>
        <LuMapPin className={c.map} />

      </div>
      <div className={c.bv}>
        <p className={c.text}>{region}</p>
        <div className={c.box1}>
          <p className={c.vb1} onClick={() => setRegion("Buxoro")}>Buxoro</p>
          <p className={c.vb2} onClick={() => setRegion("Termiz")}>Termiz</p>
          <p className={c.vb3} onClick={() => setRegion("Bog'dod")}>Bog'dod</p>
          <p className={c.vb4} onClick={() => setRegion("Toshkent")}>Toshkent</p>
          <p className={c.vb5} onClick={() => setRegion("Chirchiq")}>Chirchiq</p>
          <p className={c.vb6} onClick={() => setRegion("Nukus")}>Nukus</p>
          <p className={c.vb7} onClick={() => setRegion("Samarqand")}>Samarqand</p>
          <p className={c.vb8} onClick={() => setRegion("Andijon")}>Andijon</p>
          <p className={c.vb9} onClick={() => setRegion("Qarshi")}>Qarshi</p>
          <p className={c.vb10} onClick={() => setRegion("Farg'ona")}>Farg'ona</p>
          <p className={c.vb11} onClick={() => setRegion("Marg'ilon")}>Marg'ilon</p>
          <p className={c.vb12} onClick={() => setRegion("Namangan")}>Namangan</p>
          <p className={c.vb13} onClick={() => setRegion("Chust")}>Chust</p>
          <p className={c.vb14} onClick={() => setRegion("Yangiyo'l")}>Yangiyo'l</p>
          <p className={c.vb15} onClick={() => setRegion("Qo'qon")}>Qo'qon</p>
          <p className={c.vb16} onClick={() => setRegion("Navoyi")}>Navoyi</p>
          <p className={c.vb17} onClick={() => setRegion("Keles")}>Keles</p>
          <p className={c.vb18} onClick={() => setRegion("Beshariq")}>Beshariq</p>
        </div>
      </div>
      <p className={c.bn}>Bizning do'konlarimiz</p>

      <div className={c.bz}></div>
      <p className={c.bz1}>Yuridik shaxslar uchun</p>
      <p className={c.bz2}>
        To'lov usullari</p>
      <div className={c.gf}>
        <a href="tel:+998957503525" className={c.a}>
          Aloqa markazi :</a>
        <a href="tel:+998957503525" className={c.a1}>+99871 209 99 44</a>
      </div>

      {/* <div className={c.pa}> */}
      <div className={c.mas}></div>
      <img src={img} alt="" className={c.img} />
      <button className={c.btn}> <IoMenu className={c.icn} /> Katalog</button>
      <form>
        <input type="text" className={c.inp} placeholder='Qidirish' required />

        <IoIosSearch className={c.icn1} />
      </form>

      <IoPersonOutline className={c.icn2} />
      <p className={c.p1}>Kirish</p>
      <IoMdHeartEmpty className={c.icn3} />
      <p className={c.p2}>Sevimlilar</p>
      <SlBasket className={c.icn4} />
      <p className={c.p3}>Savatcha</p>
      {/* </div> */}
      <BsFire className={c.icn5} />
      <p className={c.p4}>AKSIYALAR</p>
      <div className={c.bc}>
        <p className={c.p5}>Muddatli to'lov 0•0•12</p>

      </div>
      <div className={c.bma}>
        <p className={c.mx1}>

          HAVO SOVUTGICHLAR</p>
        <p className={c.mx2}>
          SMARTFONLAR</p>
        <p className={c.mx3}>MUZLATGICHLAR</p>
        <p className={c.mx4}>CHANGYUTGICHLAR</p>
        <p className={c.mx5}>NOUTBUKLAR</p>
        <p className={c.mx6}>TELEVIZORLAR</p>
        <p className={c.mx7}>

          BARCHA KATEGORIYALAR</p>
      </div>


      <Swiper className={c.gah}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide><img className={c.img2} src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className={c.img3} src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className={c.img4} src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className={c.img5} src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className={c.img6} src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className={c.img7} src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className={c.img8} src={img7} alt="" /></SwiperSlide>

      </Swiper>



      <div className={c.maz}>
        <Swiper className={c.gah1}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={-750}
          grabCursor={true}

          modules={[Pagination]}
        >
          <SwiperSlide><div className={c.mn}><img src={img9} alt="" className={c.img9} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn1}><img src={img10} alt="" className={c.img10} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn2}><img src={img11} alt="" className={c.img11} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn3}><img src={img12} alt="" className={c.img12} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn4}><img src={img13} alt="" className={c.img13} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn5}><img src={img14} alt="" className={c.img14} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn6}><img src={img15} alt="" className={c.img15} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn7}><img src={img16} alt="" className={c.img16} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn8}><img src={img17} alt="" className={c.img17} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn9}><img src={img18} alt="" className={c.img18} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn10}><img src={img19} alt="" className={c.img19} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn11}><img src={img20} alt="" className={c.img20} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn12}><img src={img21} alt="" className={c.img21} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn13}><img src={img22} alt="" className={c.img22} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn14}><img src={img23} alt="" className={c.img23} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn15}><img src={img24} alt="" className={c.img24} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn16}><img src="https://mini-io-api.texnomart.uz/catalog/special-brands/95/fea35281-51c5-4891-bc7e-be964ab67689.svg" alt="" className={c.img31} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn17}><img src={img30} alt="" className={c.img30} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn18}><img src={img27} alt="" className={c.img27} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn19}><img src={img28} alt="" className={c.img28} /></div></SwiperSlide>
          <SwiperSlide><div className={c.mn20}><img src={img29} alt="" className={c.img29} /></div></SwiperSlide>

        </Swiper>
      </div>

      <h2 className={c.pn}>Ommabop kategoriyalar</h2>



      <div className={c.maz1}>
        <Swiper className={c.gah2}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={-500}
          grabCursor={true}

          modules={[Pagination]}
        >
          <SwiperSlide><div className={c.mna}><img src={img32} alt="" className={c.img32} /><p className={c.pmz}>Smartfonlar</p></div></SwiperSlide>
          <SwiperSlide><div className={c.mna1}><img src={img33} alt="" className={c.img33} /><p className={c.pmz1}>Changyutgichlar</p></div></SwiperSlide>
          <SwiperSlide><div className={c.mna2}><img src={img34} alt="" className={c.img34} /><p className={c.pmz2}>Muzlatgichlar</p></div></SwiperSlide>
          <SwiperSlide><div className={c.mna3}><img src={img35} alt="" className={c.img35} /><p className={c.pmz3}>Havo <br /> sovutgichlar</p></div></SwiperSlide>
          <SwiperSlide><div className={c.mna4}><img src={img36} alt="" className={c.img36} /><p className={c.pmz4}>Noutbuklar</p></div></SwiperSlide>
          <SwiperSlide><div className={c.mna5}><img src={img37} alt="" className={c.img37} /><p className={c.pmz5}>Televizorlar</p></div></SwiperSlide>
          <SwiperSlide><div className={c.mna6}><img src={img38} alt="" className={c.img38} /><p className={c.pmz6}>Qahva <br /> mashinalari</p></div></SwiperSlide>
          <SwiperSlide><div className={c.mna7}><img src={img39} alt="" className={c.img39} /><p className={c.pmz7}>Kir yuvish <br /> mashinalari</p></div></SwiperSlide>
          <SwiperSlide><div className={c.mna8}><img src={img40} alt="" className={c.img40} /><p className={c.pmz8}>Fenlar</p></div></SwiperSlide>
          <SwiperSlide><div className={c.mna9}><img src={img41} alt="" className={c.img41} /><p className={c.pmz9}>Planshetlar</p></div></SwiperSlide>


        </Swiper>
      </div>

      <h1 className={c.pn1}>Xit savdo</h1>


      <div className={c.maz2}>
        <Swiper className={c.gah3}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={-300}
          grabCursor={true}

          modules={[Pagination]}
        >
          <SwiperSlide><div className={c.mnj}>

            <img src={img42} alt="" className={c.img42} />
            <p className={c.pas}>Konditsioner MDV MDSAF-12HRN8/MDOAF-12HN8
            </p>
            <FaStar className={c.inm} /> <FaStar className={c.inm} /> <FaStar className={c.inm} /> <FaStar className={c.inm} /> <FaStar className={c.inm} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj1}>

            <img src={img43} alt="" className={c.img43} />
            <p className={c.pas1}>Smartfon Samsung Galaxy A25 5G 6/128GBDark blue</p>
            <FaStar className={c.inm1} /> <FaStar className={c.inm1} /> <FaStar className={c.inm1} /> <FaStar className={c.inm1} /> <FaStar className={c.inm1} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj2}>

            <img src={img44} alt="" className={c.img44} />
            <p className={c.pas2}>Muzlatgich Artel HD 316FND Eco Oq</p>
            <FaStar className={c.inm2} />   <FaStar className={c.inm2} />   <FaStar className={c.inm2} />   <FaStar className={c.inm2} />   <FaStar className={c.inm2} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj3}>

            <img src={img45} alt="" className={c.img45} />
            <p className={c.pas3}>Televizor Hisense 40A4K Smart</p>
            <FaStar className={c.inm3} />    <FaStar className={c.inm3} />    <FaStar className={c.inm3} />    <FaStar className={c.inm3} />    <FaStar className={c.inm3} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj4}>

            <img src={img46} alt="" className={c.img46} />
            <p className={c.pas4}>Elektr choynak Artel KE 106</p>
            <FaStar className={c.inm4} />     <FaStar className={c.inm4} />     <FaStar className={c.inm4} />     <FaStar className={c.inm4} />     <FaStar className={c.inm4} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj5}>

            <img src={img47} alt="" className={c.img47} />
            <p className={c.pas5}>Chang yutgich Philips XB2022/01</p>
            <FaStar className={c.inm5} />  <FaStar className={c.inm5} />  <FaStar className={c.inm5} />  <FaStar className={c.inm5} />  <FaStar className={c.inm5} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj6}>

            <img src={img48} alt="" className={c.img48} />
            <p className={c.pas6}>Mikroto'lqinli pech HANSA <br /> AMGF20M2BH</p>
            <FaStar className={c.inm6} />   <FaStar className={c.inm6} />   <FaStar className={c.inm6} />   <FaStar className={c.inm6} />   <FaStar className={c.inm6} />
          </div></SwiperSlide>

          <SwiperSlide><div className={c.mnj7}>

            <img src={img49} alt="" className={c.img49} />
            <p className={c.pas7}>Changyutgich Philips FC9573/01</p>
            <FaStar className={c.inm7} />   <FaStar className={c.inm7} />   <FaStar className={c.inm7} />   <FaStar className={c.inm7} />   <FaStar className={c.inm7} />

          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj8}>

            <img src={img50} alt="" className={c.img50} />
            <p className={c.pas8}>Smartfon Samsung Galaxy A25 <br /> 5G 6/128GB Light Blue</p>
            <FaStar className={c.inm8} />   <FaStar className={c.inm8} />   <FaStar className={c.inm8} />   <FaStar className={c.inm8} />   <FaStar className={c.inm8} />

          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj9}>

            <img src={img51} alt="" className={c.img51} />
            <p className={c.pas9}>Smartfon Vivo Y100 8/256GB Green</p>
            <FaStar className={c.inm9} />   <FaStar className={c.inm9} />   <FaStar className={c.inm9} />   <FaStar className={c.inm9} />   <FaStar className={c.inm9} />

          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj10}>

            <img src={img52} alt="" className={c.img52} />
            <p className={c.pass}>Konditsioner MDV MDSAF <br /> -12HRN8/MDOAF-12HN8</p>
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj11}>

            <img src={img53} alt="" className={c.img53} />
            <p className={c.pas10}>Dazmol Philips GC1751/80</p>

          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj12}>

            <img src={img54} alt="" className={c.img54} />
<p className={c.pass1}>Elektr choynak Raf 7897</p>
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj13}>

            <img src={img55} alt="" className={c.img55} />
        <p className={c.pass2}>Smartfon Vivo Y35 4/128Gb Yorqin <br /> oltin</p>

          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj14}>

            <img src={img56} alt="" className={c.img56} />
            <p className={c.pass3}>Smartfon Vivo Y35 4/128Gb Yorqin <br /> oltin</p>
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj15}>

            <img src={img57} alt="" className={c.img57} />
            <p className={c.pass4}>Simsiz o`rnatiladigan quloqchinlar <br /> Xiaomi Redmi Buds 3 Lite</p>
            <FaStar className={c.inm15} />   <FaStar className={c.inm15} />   <FaStar className={c.inm15} />   <FaStar className={c.inm15} />   <FaStar className={c.inm15} />

          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj16}>

            <img src={img58} alt="" className={c.img58} />
<p className={c.pass5}>Konditsioner MDV MDSAF <br /> -12HRN8/MDOAF-12HN8</p>
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj17}>

            <img src={img59} alt="" className={c.img59} />
<p className={c.pass6}>Sokany SK-2202 Soch quritgichi</p>
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj18}>

            <img src={img60} alt="" className={c.img60} />
<p className={c.pass7}>Tutqichli tova Kukmara 4l shishali <br /> qopqoq Granit ultra zhgo41a</p>
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnj19}>

            <img src={img61} alt="" className={c.img61} />
<p className={c.pass8}>Planshet Samsung Galaxy Tab A8 <br /> X205 Dark Gray</p>
          </div></SwiperSlide>

        </Swiper>
      </div>

<h1 className={c.pamm}>To'plamlar</h1>
<div className={c.bnz}>
<button className={c.bt1}>Tavsiya etamiz</button>
<button className={c.bt2}>0-0-12</button>
</div>





<div className={c.maz3}>
        <Swiper className={c.gah4}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={-300}
          grabCursor={true}

          modules={[Pagination]}
        >
          <SwiperSlide><div className={c.mnja}>

            <img src={img42} alt="" className={c.img42} />
            <p className={c.pas}>Konditsioner MDV MDSAF-12HRN8/MDOAF-12HN8
            </p>
            <FaStar className={c.inm} /> <FaStar className={c.inm} /> <FaStar className={c.inm} /> <FaStar className={c.inm} /> <FaStar className={c.inm} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnja1}>

            <img src={img43} alt="" className={c.img43} />
            <p className={c.pas1}>Smartfon Samsung Galaxy A25 5G 6/128GBDark blue</p>
            <FaStar className={c.inm1} /> <FaStar className={c.inm1} /> <FaStar className={c.inm1} /> <FaStar className={c.inm1} /> <FaStar className={c.inm1} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnja2}>

            <img src={img44} alt="" className={c.img44} />
            <p className={c.pas2}>Muzlatgich Artel HD 316FND Eco Oq</p>
            <FaStar className={c.inm2} />   <FaStar className={c.inm2} />   <FaStar className={c.inm2} />   <FaStar className={c.inm2} />   <FaStar className={c.inm2} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnja3}>

            <img src={img45} alt="" className={c.img45} />
            <p className={c.pas3}>Televizor Hisense 40A4K Smart</p>
            <FaStar className={c.inm3} />    <FaStar className={c.inm3} />    <FaStar className={c.inm3} />    <FaStar className={c.inm3} />    <FaStar className={c.inm3} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnja4}>

            <img src={img46} alt="" className={c.img46} />
            <p className={c.pas4}>Elektr choynak Artel KE 106</p>
            <FaStar className={c.inm4} />     <FaStar className={c.inm4} />     <FaStar className={c.inm4} />     <FaStar className={c.inm4} />     <FaStar className={c.inm4} />
          </div></SwiperSlide>
          <SwiperSlide><div className={c.mnja5}>

            <img src={img47} alt="" className={c.img47} />
            <p className={c.pas5}>Chang yutgich Philips XB2022/01</p>
            <FaStar className={c.inm5} />  <FaStar className={c.inm5} />  <FaStar className={c.inm5} />  <FaStar className={c.inm5} />  <FaStar className={c.inm5} />
          </div></SwiperSlide>
   

      
 
    
      
  
   

     
   
      
   
     

        </Swiper>
      </div>
<h1 className={c.psd}>
  Yangiliklar va bloglar
</h1>
<div className={c.pow}>
<img src={img62} alt=""  className={c.ij1}/>
<img src={img63} alt=""  className={c.ij2}/>
<img src={img64} alt=""  className={c.ij3}/>
<img src={img65} alt=""  className={c.ij4}/>
</div>

<p className={c.pl}>24 Avgust 2023</p>
<p className={c.pl1}>10 Aprel 2023</p>
<p className={c.pl2}>10 Aprel 2023</p>
<p className={c.pl3}>10 Aprel 2023</p>
<h1 className={c.pl4}>Samsung Galaxy Z Fold 5</h1>
<h1 className={c.pl5}>Uyingiz uchun konditsionerni qanday <br /> tanlash mumkin?</h1>
<h1 className={c.pl6}>Toshkentda konditsionerlarni <br /> TEXNOMART kompaniyasidan o'rnatish</h1>
<h1 className={c.pl7}>To'g'ri soch turmagini qanday tanlash <br /> mumkin?</h1>

<div className={c.qw}></div>
<img src={img66} alt=""  className={c.haaa}/>
<h1 className={c.lk}>Ilovani yuklang</h1>
<p className={c.pka}>Haridlarni uydan chiqmagan holda mobil ilova orqali <br /> amalga oshiring!</p>
<p className={c.pka1}>
Kamerani yo`naltiring va <br /> Texnomart ilovasini <br /> bepul yuklang</p>
<img src={img67} alt="" className={c.qr}/>

<img src={img68} alt="" className={c.ima}/>

<img src={img69} alt="" className={c.ima1}/>

<h1 className={c.pdf}>Telefonlar va maishiy texnika muddatli to'lovga</h1>


<img src={img70} alt="" className={c.as1}/>
<img src={img71} alt="" className={c.as2}/>
<img src={img72} alt="" className={c.as3}/>
<img src={img73} alt="" className={c.as4}/>

<p className={c.las}>Bepul yetkazib berish</p>
<p className={c.las1}>

Texnomartga tovarlarni yetkazib berish <br /> shartlari</p>
<p className={c.las2}>Mahsulot uchun kafolat</p>
<p className={c.las3}>

Texnomartda mahsulotning kafolati va <br /> qaytarilishi haqida hamma narsani <br /> bilib oling</p>

<p className={c.las4}>Bonus tizimi</p>
<p className={c.las5}>Bonus tizimi</p>
<p className={c.las6}>Yodam</p>
<p className={c.las7}>Ko'p beriladigan savollar</p>



<div className={c.Footer}>

<p className={c.ladf}>Savolingiz bormi? Qo'ng'iroq qiling</p>

<a href="tel:+998957503525" className={c.lkasd}>+998 71 209 99 44</a>


<p className={c.q1}>Kompaniya</p>
<p className={c.r1}>Yuridik shaxslar uchun</p>
<p className={c.r2}>Biz haqimizda</p>
<p className={c.r3}>Yangiliklar va bloglar</p>
<p className={c.r4}>IMEI ni tekshirish</p>

<p className={c.q2}>Ma'lumot</p>
<div className={c.rql}>
<p className={c.rq1}>Bepul yetkazib berish</p>
<p className={c.rq2}>Bonus tizimi</p>
<p className={c.rq3}>Texnomartda ishlash</p>
<p className={c.rq4}>Shaxsiy kabinet</p>
<p className={c.rq5}>Aloqa raqamlari</p>
</div>
<p className={c.q3}>Haridorlarga yordam</p>
<div className={c.rql1}>
<p className={c.rqa1}>Maxsulotni qaytarish</p>
<p className={c.rqa2}>Mahsulotlar uchun kafolat</p>
<p className={c.rqa3}>Ko'p so'raladigan savollar</p>

</div>
<p className={c.lkas}></p>
<p className={c.po}>2016-2024 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib <br /> olish shartlari joriy sanaga amal qiladi</p>
</div>









    </div>
  );
}

export default App;
