# Frontend Mentor - Todo app

This is a solution to the [Todo app on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How to Set Up](#how-to-set-up)

## Overview

### The challenge

Users should be able to:

- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Clear all completed todos
- Toggle light and dark mode
- View the optimal layout for the app depending on their device's screen size
- **Bonus: Build this project as a full-stack application**

### Screenshot

![](./public/screenshot-first.png)
![](./public/screenshot-second.png)
![](./public/screenshot-third.png)

## My process

### Built with

Frontend: 

- React
- Redux
- SCSS
- Vite

Backend: 
- PHP
- Laravel
- MySQL

### How to Set Up

1. Clone the Git Repository:

   Run ```git clone https://github.com/RochiFox/todo-app.git```

2. cd into the project directory:

   Run ```cd todo-app```

## Backend

3. cd into the "server" folder: 
   Run ```cd server```

4. Copy .env.example file and rename as .env;

5. Edit database credentials in your newly generated/created .env file

6. Run ```composer install``` to install all libraries and dependencies in the composer.lock file 

7. Having created a database, and specifying the same with the right credentials in your .env file, run ```php artisan migrate``` to create the tables

8. Run ```php artisan serve``` to run the PHP development server. Alternatively, you can run your project with XAMPP or WAMP.

## Frontend

9. cd into the "client" folder:
   Run ```cd client```

10. Run ```npm install``` to download all packages and dependencies needed for our client

11. While making sure that the API (Laravel) Server is up and running, run ```npn run dev``` to start your react application

Congratulations!!!