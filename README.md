# React User Profile Card

This project is a simple React application that fetches user data from an API and displays it in a profile card format. The profile card includes the user's picture, name, age, location, and other relevant information.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The React User Profile Card project demonstrates how to fetch and display user information in a card layout using React hooks and functional components. It leverages an external API to retrieve user data, including their name, gender, age, location, and profile pictures.

## Features

- Fetches user data from an API
- Displays user profile information in a card layout
- Shows user profile picture and avatar
- Uses React hooks for state management and side effects

## Installation

### Prerequisites

- Node.js and npm installed on your machine

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/react-user-profile-card.git
    cd react-user-profile-card
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, it will fetch user data from the API and display it in a profile card. The profile card includes:

- **Profile Picture**: Large picture of the user
- **Avatar**: Medium-sized picture of the user
- **Name**: First and last name of the user
- **Age**: Age of the user
- **Location**: City of the user

## API Documentation

The application uses a function `userFunction` to fetch user data from an API. Ensure the API endpoint is correctly set in the `userFunction`.

### Example `userFunction`

```javascript
import axios from 'axios';

export const userFunction = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data.results[0];
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
