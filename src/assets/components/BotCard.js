import PropTypes from 'prop-types';

const BotCard = ({ bot, addToArmy }) => {
  const {  name, health, damage, armor, bot_class, avatar_url } = bot;

  const handleAddToArmy = () => {
    addToArmy(bot);
  };

  return (
    <div className="bot-card">
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <button onClick={handleAddToArmy}>Add to Army</button>
    </div>
  );
};

BotCard.propTypes = {
  bot: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    health: PropTypes.number.isRequired,
    damage: PropTypes.number.isRequired,
    armor: PropTypes.number.isRequired,
    bot_class: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  addToArmy: PropTypes.func.isRequired,
};

export default BotCard;