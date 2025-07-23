import React from "react";
import AboutStyle3 from "../../components/sections/about/AboutStyle3";
import HeroStyle3 from "../../components/sections/hero/HeroStyle3";
import LatestBlogStyle2 from "../../components/sections/latestBlog/LatestBlogStyle2";
import ProjectStyle3 from "../../components/sections/project/ProjectStyle3";
import ServiceStyle3 from "../../components/sections/service/ServiceStyle3";
import Team from "../../components/sections/team/Team";
import TestimonialStyle3 from "../../components/sections/testimonial/TestimonialStyle3";
import Video from "../../components/sections/video/Video";

const HomePageStyle3 = () => {
  return (
    <>
      <HeroStyle3 />
      <ServiceStyle3 />
      <AboutStyle3 />
      <Team />
      <Video />
      <ProjectStyle3 />
      <TestimonialStyle3 />
      <LatestBlogStyle2 />
    </>
  );
};

export default HomePageStyle3;
