import React, { useEffect } from "react";
import Slider from "react-slick";
import IntroSection from "../components/home/IntroSection";
import Layout from "../components/Layout";
import CategoriesCard from "../components/cards/CategoriesCard";
import FreelancerCard from "../components/cards/FreelancerCard";
import { categories } from "../data/categories";
import { featured } from "../data/featured";
import { universities } from "../data/universities";
import { recomended } from "../data/recomended";
import FeaturedGig from "../components/cards/FeaturedGig";
import UniversityCard from "../components/cards/UniversityCard";
import makerere from '../../images/makerere.jpg'
import kyambogo from '../../images/kya.jpg'
import mubs from '../../images/mubs.jpg'
import ucu from '../../images/ucu.jpg'
import matovu from  '../../images/matovu.jpg'

const Home = () => {
  const settings = {
    className:
      "default-slick-carousel freelancers-container freelancers-grid-layout",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    document.querySelectorAll(".slick-slide .slick-active").forEach((el) => {
      el.classList.add("freelancer");
    });
  }, []);
  return (
    <>
    {/* <div className="backdrop"></div>
    <div className="popup">
        <div>

        <h4><b>
        Are you a student? We would like to know some simple details about you inorder to give you the right recomendations
          </b></h4>
        <div className="popup-container">
          <form action="">
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" />

            </div>
            <div>

            <label htmlFor="profession">Profession</label>
            <input type="text" />
            </div>
            <div>

            <label htmlFor="location">Location</label>
            <input type="text" />
            </div>
            <input type="submit" value="Submit" />
          </form>

        </div>
        </div>
      </div> */}
    <Layout>
      
      <IntroSection />
      <div className="section margin-top-65">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline centered margin-top-0 margin-bottom-45">
                <h3>Popular Gig Categories</h3>
              </div>
              <div className="categories-container">
                {categories.map((category, index) => (
                  <CategoriesCard
                    key={index}
                    title={category.info.split("\n")[0]}
                    icon={category.icon}
                    count={category.count}
                    details={category.info.split("\n")[1]}
                    link="/jobs"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline margin-top-0 margin-bottom-35">
                <h3 style={{ display:'flex', alignItems:'center' }}>Recommended Gigs <span style={{ marginLeft: '0.8rem' }}>3</span></h3>
                <a href="/jobs" className="headline-link">
                  Browse All Recommended Gigs
                </a>
              </div>
              <div className="listings-container compact-list-layout margin-top-35">
                {recomended.map((gig, index) => (
                  <FeaturedGig key={index} data={gig} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline margin-top-0 margin-bottom-35">
                <h3>Featured Gigs</h3>
                <a href="/jobs" className="headline-link">
                  Browse All Gigs
                </a>
              </div>
              <div className="listings-container compact-list-layout margin-top-35">
                {featured.map((gig, index) => (
                  <FeaturedGig key={index} data={gig} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section margin-top-65 margin-bottom-65">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline centered margin-top-0 margin-bottom-45">
                <h3>Featured Universities</h3>
              </div>
            </div>
            {/* https://www.vasterad.com/themes/hireo_21/images/featured-city-01.jpg */}
            {universities.map((e, i) => (
              <div className="col-xl-3 col-md-6" key={i}>
                <UniversityCard
                  key={i}
                  university={e}
                  title={e.name}
                  count={e.gigs}
                  link="/jobs"
                  image={e.id === 'mak' ? makerere : e.id === 'mubs' ? mubs : e.id === 'kya' ? kyambogo : e.id === 'ucu' && ucu}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-headline margin-top-0 margin-bottom-25">
                <h3>Highest Rated Freelancers</h3>
                <a href="/" className="headline-link">
                  Browse All Freelancers
                </a>
              </div>
            </div>
            <div className="col-xl-12">
              {/* <div className="default-slick-carousel freelancers-container freelancers-grid-layout slick-initialized slick-slider"> */}
              <Slider {...settings}>
                {[...Array(6)].map((e, i) => (
                  <FreelancerCard
                    key={i}
                    image={matovu}
                    name="Matovu Ali"
                    ratings={4.9}
                    link="/"
                    profileUrl={"/profile"}
                    profession="UI/UX Designer"
                    details={{
                      location: "Makerere University",
                      rate: "15,000",
                      successRate: "95",
                    }}
                  />
                ))}
              </Slider>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
    
    </>
  );
};

export default Home;
