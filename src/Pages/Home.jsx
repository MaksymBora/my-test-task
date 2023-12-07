import { CardPreBook } from '../components/Home/Card-PreBook';
import { Description } from '../components/Home/Descriprion';
import { Hero } from '../components/Home/Hero';
import { Review } from './Review';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="p-4 md:px-4">
        <Description />
        <CardPreBook />
        <Review />
      </div>
    </>
  );
};

export default Home;
