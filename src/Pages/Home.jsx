import { Description } from '../components/Home/Descriprion';
import { Hero } from '../components/Home/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="md:container-xl md:px-4">
        <Description />
        <div>Cards</div>
        <div>Cards</div>
      </div>
    </>
  );
};

export default Home;
