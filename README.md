# User Management Application

This is a simple React.js application for managing users. It allows users to view, add, edit, and delete user details. The app interacts with the JSONPlaceholder API as a mock backend.

## Features

View a list of users.

Add new users.

Edit existing users.

Delete users.

Responsive UI built with React Bootstrap.

## Key Dependencies

React: Library for building user interfaces.

React Bootstrap: CSS framework for styling the UI components.

Bootstrap: Front-end CSS framework.

## API Reference
The application uses the following endpoints from the JSONPlaceholder API:

GET /users: Fetches the list of users.

POST /users: Adds a new user.

PUT /users/{id}: Updates an existing user.

DELETE /users/{id}: Deletes a user.

## Customization
Additional features or data fields can be added by modifying the components and API service functions accordingly.

## Troubleshooting
Issue: Development server not starting.

       Ensure you have the correct Node.js version installed.

       Delete the node_modules folder and run npm install again.

Issue: Data not persisting.

      JSONPlaceholder is a mock API, so changes made via POST, PUT, and DELETE requests are not saved.

.

