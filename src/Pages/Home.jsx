import { CardPreBook } from '../components/Home/Card-PreBook';
import { Description } from '../components/Home/Descriprion';
import { Hero } from '../components/Home/Hero';
import { Review } from '../components/Home/Review';

const Home = () => {
  return (
    <>
      <Hero />
      <div>
        <Description />
        <CardPreBook />
        <Review />
      </div>
    </>
  );
};

export default Home;
