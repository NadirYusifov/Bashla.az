import Search from "../../../Components/Search"
import HeroImg from "/public/HeroImg.svg"
import VectorHeroImg from "/public/Vector.svg"
// import Frame3 from "/public/Frame 3.svg"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function HeroSection() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,

  // }
  return (
    <>
      <div className="hero-section mt-10 border-b-[12px] border-dark-cyan">
        <div className="container">
          <Search />
          <div className='hero-section-wrapper'>
            <div className='hero-section-wrapper relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center items-center'>
              <div className='hero-content-text font-jakarta'>
                <h1 className="text-[70px] tracking-thight leading-[94px] font-extrabold max-sm:text-[60px] lg:text-[70px]">Xəyalındakı <span className="text-dark-cyan">peşəni</span> tap!</h1>
                <p className="py-6 text-[20px] text-very-dark-grayish-red font-medium -tracking-tight text-left leading-8 mt-5 mb-7">
                  Karyera testi ilə bu günün tələb olunan ixtisaslarını kəşf edin, güclü tərəflərinizi üzə çıxarın və iş dünyasında öz yerinizi tapın.
                </p>
                <div className='btn-wrapper flex'>
                  <button className="btn place-content-center rounded-lg px-10 py-4 mr-10 max-md:mb-8 hover:bg-cyan-900 text-white bg-dark-cyan leading-5 font-dmsans">Testə keçid edin</button>
                </div>
              </div>
              <div className="hero-vector hidden lg:block absolute translate-x-96 translate-y-24">
                <img alt="herovector" src={VectorHeroImg} className=""/>
              </div>
              <div className='hero-content-img p-0'>
                <img
                  alt="heroimg"
                  src={HeroImg}
                  className="rounded-lg max-sm:hidden max-md:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default HeroSection