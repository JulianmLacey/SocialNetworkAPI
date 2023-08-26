# Social Network REST API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This Application is a Backend REST API for a basic Social Network Web Application

## Libraries

- Express
- Mongoose

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

GET: All Users, User by ID
POST: Add User
PUT: Update User
DELETE: Delete User

!!![USER ROUTES](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExangybGtydGplZXhkcHpjZWg3c3hzanJsNzRmOWtuOHQ4enhkZGNuMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/coEJAsNPrLuWuJuSco/giphy.gif)

ADD/REMOVE Friend from friendslist
!!![Add/Remove Friend](https://media.giphy.com/media/Aq9lMB0cg4ok9j8Bhg/giphy.gif)

GET: All Thoughts, Thought by ID
POST: Add Thought
PUT: Update Thought
DELETE: Delete Thought

!!![THOUGHT ROUTES ](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmY5ajZjYXp6eGZnMjRxY2xuaTRqZ2U2NW0wbjV1MWV3OXQ4aGEwMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WAUkItS4SnxdfbZQgb/giphy.gif)

Creating user email validation with virtual function
!!![Email Validation](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmIzM3d4dGs4bjk5cWhmbjk5d21qMnZqNGRwaGhhd2JnbmxwOThtbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Aq9lMB0cg4ok9j8Bhg/giphy.gif)

## License

View "LICENSE" in Repository
