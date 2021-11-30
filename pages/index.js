import Slider from "../components/Slider";
import Features from "../components/Features";
import About from "../components/About";
import FreeMaterials from "../components/FreeMaterials";
import Testimonials from "../components/Testimonials";
import FreeQuizzes from "../components/FreeQuizzes";
import HomepageBlog from "../components/HompeageBlog";
import FunFactor from "../components/FunFactor";

const blogContent = [
  {
    id: 1,
  },
];

const Homepage = () => {
  return (
    <>
      <Slider />
      <Features />
      <About />
      <FreeQuizzes />
      <FunFactor />
      <Testimonials />
      <HomepageBlog />
    </>
  );
};

export default Homepage;
