import  { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const App = () => {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    setArmy([...army, bot]);
  };

  const removeFromArmy = (botToRemove) => {
    setArmy(army.filter((bot) => bot.id !== botToRemove.id));
  };

  return (
    <div className="app">
      <h1>Bot Management System</h1>
      <BotCollection addToArmy={addToArmy} />
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
    </div>
  );
};

export default App;