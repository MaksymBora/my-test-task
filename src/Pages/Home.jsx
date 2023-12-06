import { CardPreBook } from '../components/Home/Card-PreBook';
import { Description } from '../components/Home/Descriprion';
import { Hero } from '../components/Home/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="md:container-xl p-4 md:px-4">
        <Description />
        <CardPreBook />
        <div>Cards</div>
      </div>
    </>
  );
};

export default Home;
