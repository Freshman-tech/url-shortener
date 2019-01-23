# URL Shortener Microservice

A basic URL Shortener project built with Node.js and Mongodb.

Project description: https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice

This project is live at https://ayo-url-shortener.herokuapp.com

## Setup

- Clone this repo to your machine
- `cd` into the project folder and run `npm install`
- Rename `.env.sample` to `.env`
- Run `npm start`
- Navigate to http://localhost:4100

## How to use

- Enter a URL into the input field and hit **Shorten**. You will receive a JSON response containing the shortened version. For example: `{"originalUrl": "https://google.com","shortUrl": 1 }`.
- You can use the shortened URL like this: `https://ayo-url-shortener.herokuapp.com/r/1`. It will redirect you to the `originalUrl`
