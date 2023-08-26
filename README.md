# Social Network REST API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application Is an Ecommerse Backend REST API.

## Libraries

- dotenv
- expressJS
- mysql2
- sequelize

## User Story

As a social media startup, I want an API for my social network that uses a NoSQL database, So my website can handle large amounts of unstructured data

## Acceptance Criteria

- Given a social network API
- When I enter the command to invoke the application, my server is started and the Mongoose models are synced to the MongoDB database,

- When I open API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON,

- When I test API POST, PUT, and DELETE routes in Insomnia, I am able to successfully create, update, and delete users and thoughts in my, database

- When I test API POST and DELETE routes in Insomnia, I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Mock-Up

The following animation demonstrates the application functionality:

!!![USER ROUTES](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExangybGtydGplZXhkcHpjZWg3c3hzanJsNzRmOWtuOHQ4enhkZGNuMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/coEJAsNPrLuWuJuSco/giphy.gif)

- SQL connection: 0:00
- SEED Database: 0:23
- Start Server: 0:30
- GET: Categories, 0:38; Products, 1:05; Tags, 1:37
- GET by ID, POST, and DEL follow each of the above timestamps

## Installation

- Clone The Repository
- Create the Database As Seen In The Video Dem
- npm run seed
- npm start

## License

View "LICENSE" in Repository
