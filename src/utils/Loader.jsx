import { PulseLoader } from 'react-spinners';

const override = {
  display: 'flex',
  margin: '5rem auto 100vh',
  justifyContent: 'center',
};

export const Loader = () => {
  return <PulseLoader cssOverride={override} color="#0B44CD" size={9} />;
};
