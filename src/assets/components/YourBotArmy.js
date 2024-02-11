import BotCard from './BotCard';
import PropTypes from 'prop-types';

const YourBotArmy = ({ army, removeFromArmy }) => {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <BotCard key={bot.id} bot={bot} removeFromArmy={removeFromArmy} />
      ))}
    </div>
  );
};

YourBotArmy.propTypes = {
  army: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      health: PropTypes.number.isRequired,
      damage: PropTypes.number.isRequired,
      armor: PropTypes.number.isRequired,
      bot_class: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeFromArmy: PropTypes.func.isRequired,
};

export default YourBotArmy;