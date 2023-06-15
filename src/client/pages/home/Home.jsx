import "./Home.css";
import HeroSection from "../../components/Hero_Section/Hero_Section";
import FeatureProduct from "../../components/FeatureProducts/FeatureProduct";
const Home = () => {
  return (
    <section className="home--page">
      <HeroSection />
      <FeatureProduct />
    </section>
  );
};

export default Home;
