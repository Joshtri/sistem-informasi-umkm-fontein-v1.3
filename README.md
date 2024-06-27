# Admin Fontein-v1.3
## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**admin-fontein-v1.3** is a Node.js-based project that leverages various packages for web development, including Express for server-side handling, Mongoose for MongoDB interactions, and Sequelize for SQL database interactions. It is designed to facilitate robust and secure web applications with session management, authentication, and templating capabilities.

## Features

- **Express**: Fast, unopinionated, minimalist web framework for Node.js
- **Mongoose**: Elegant MongoDB object modeling for Node.js
- **Sequelize**: Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server
- **EJS**: Embedded JavaScript templating
- **bcrypt**: Password hashing function for security
- **Session Management**: Using `express-session` and `connect-mongo`
- **Method Override**: Allows using PUT or DELETE methods in places where the client doesn't support it
- **Environment Variables**: Managed by `dotenv`

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/admin-fontein-v1.3.git
   cd admin-fontein-v1.3
