# my-bot-army-app-2

This project is a Bot Management System web application that allows users to view bot profiles, enlist bots into their army, and manage their enlisted bots." 

## Features" 
- View profiles of all bots in the collection." 
- Add individual bots to your army." 
- Release bots from your army." 
- Discharge bots permanently from the system." 
- Enlist only one bot from each bot class." 
- Advanced features (optional):" 
  - Sort bots by health, damage, or armor." 
  - Filter bots by class." 

## Installation" 

1. Clone the repository:" 

   \`git clone <git@github.com:Victor5771/my-bot-army-app-2.git>\`" 

2. Navigate into the project directory:" 

   \`cd bot-management-system\`" 

3. Install dependencies:" 

   \`npm install\`" 

4. Start the development server:" 

   \`npm start\`" 

5. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application." 

## Usage" 

- Upon launching the application, you'll see a list of bots available for enlistment in the \`BotCollection\` section." 
- Click on the \"Add to Army\" button on any bot card to enlist it into your army." 
- Enlisted bots will appear in the \`YourBotArmy\` section, where you can view and manage them." 
- You can release enlisted bots from your army by clicking the \"Remove from Army\" button." 
- To permanently discharge a bot from the system, click the \"X\" button on the bot card in the \`YourBotArmy\` section." 

## API Endpoints" 

- \`GET /bots\`: Retrieves a list of bots." 
- \`DELETE /bots/:id\`: Deletes a bot from the system permanently." 

## Contributing" 

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request." 

## License" 

This project is licensed under the [MIT License](LICENSE)." 

