import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BotCard from './BotCard';

const BotCollection = ({ addToArmy }) => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/bots')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch bots');
        }
        return response.json();
      })
      .then((data) => {
        setBots(data.bots);
        setLoading(false); 
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bot-collection">
      {loading ? ( 
        <p>Loading...</p>
      ) : error ? ( 
        <div>Error: {error}</div>
      ) : (
        bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} addToArmy={addToArmy} />
        ))
      )}
    </div>
  );
};

BotCollection.propTypes = {
  addToArmy: PropTypes.func.isRequired,
};

export default BotCollection;
