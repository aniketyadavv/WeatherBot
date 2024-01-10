# Weather☁️🌡️ Telegram Bot with NestJS

## Overview

This project implements a Telegram bot using the NestJS framework and Node.js. The bot allows users to subscribe for daily weather updates and includes an admin panel with Google login for managing bot settings and user accounts.

## Tech Stack

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Node.js**: JavaScript runtime for executing server-side code.
- **Telegram Bot API**: Used for interacting with the Telegram Bot service.
- **Google OAuth**: Integrated for admin panel authentication.
  
## Screenshots

![Screenshot 1](/screenshots/screenshot1.png)
*Description of the screenshot.*

![Screenshot 2](/screenshots/screenshot2.png)
*Description of the screenshot.*

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git


## Features

- Users can subscribe to receive weather updates.
- Users can unsubscribe to stop receiving weather updates.
- MongoDB is used to store user data.
- Integration with the OpenWeatherMap API for weather data.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

## Getting Started

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/yourusername/weather-bot-telegram.git
   ```
2. Run the Admin Dashboard
    ```
   cd weather-bot-telegram
   npm install
   ```
3. Create a .env file in the project root and configure your environment variables:
    ```
    TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
    CITY=YOUR_DEFAULT_CITY
    MONGODB_URI=YOUR_MONGODB_CONNECTION_URI
    OPENWEATHERMAP_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
    ```
    
4. Start the Nest.js application:
    ```
    npm start
    ```
5. Your Telegram bot is now running and ready to receive commands.

6. Users can interact with the bot by sending commands like /subscribe and /unsubscribe.


## Contributing
- Contributions are welcome! Please follow these guidelines:

    - Fork the repository.
    - Create a new branch: git checkout -b feature/your-feature.
    - Commit your changes: git commit -m 'Add new feature'.
    - Push to your branch: git push origin feature/your-feature.
    - Create a pull request.
    
## Licence

- This is a open source project, users can contribute according to open source guidelines.



![Bot](https://github.com/)
