import { useState, useEffect } from 'react';
import BotCard from './BotCard';
import PropTypes from 'prop-types';

const BotCollection = ({ addToArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots') 
      .then((response) => response.json())
      .then((data) => setBots(data.bots));
  }, []);

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} addToArmy={addToArmy} />
      ))}
    </div>
  );
};

BotCollection.propTypes = {
  addToArmy: PropTypes.func.isRequired,
};

export default BotCollection;
