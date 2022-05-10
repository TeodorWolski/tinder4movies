import { useNavigate } from 'react-router-dom';

const End = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>end</h1>
      <button onClick={() => navigate('/')}>Wróć na początek</button>
    </div>
  );
};

export default End;
