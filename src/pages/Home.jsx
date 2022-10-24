import React, { useEffect } from "react";
import Slider from "react-slick";
import IntroSection from "../components/home/IntroSection";
import Layout from "../components/Layout";
import CategoriesCard from "../components/cards/CategoriesCard";
import CityCard from "../components/cards/CityCard";
import FreelancerCard from "../components/cards/FreelancerCard";
import { categories } from "../data/categories";
import { featured } from "../data/featured";
import FeaturedGig from "../components/cards/FeaturedGig";

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
                <h3>Featured Cities</h3>
              </div>
            </div>
            {[...Array(4)].map((e, i) => (
              <div className="col-xl-3 col-md-6" key={i}>
                <CityCard
                  key={i}
                  title="New York"
                  count="1,586"
                  link="/jobs"
                  image="https://www.vasterad.com/themes/hireo_21/images/featured-city-01.jpg"
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
                    image="https://www.vasterad.com/themes/hireo_21/images/user-avatar-big-01.jpg"
                    name="Tom Smith"
                    ratings={4.9}
                    link="/"
                    profileUrl={"/profile"}
                    profession="UI/UX Designer"
                    details={{
                      location: "United Kingdom",
                      rate: "35",
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
  );
};

export default Home;
