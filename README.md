# RapidCommerce Backend
Welcome to **RapidCommerce Backend**, the fast and efficient backend for your e-commerce website. This project was built in just over 3 hours, using Express and PostgreSQL with Sequelize ORM. The best part? It was developed with no prior knowledge of these technologies till the day before I built this, without referencing any resources. I built it offline.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Sequelize ORM**: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.

## Installation

1. Clone the repository:
```bash
   [git clone https://github.com/yourusername/shopez-backend.git](https://github.com/NotShrirang/RapidCommerce.git)
   cd RapidCommerce
```

2. Install dependencies:
```bash
npm i
```

4. Set up the PostgreSQL database and update the database configuration in config/config.json.
5. Run migrations to create the tables:
```bash
npx sequelize-cli db:migrate
```

7. Start the server:
```bash
npm start
```

## Usage
Once the server is running at http://localhost:5000, you can interact with the API using tools like Postman or cURL. Below are the available API endpoints.

## Contributing
I know the project does not even come close to any industry standards, let alone match them. So contributions and suggestion are welcome! Please open an issue or submit a pull request.

Built with passion and a lot of coffee ☕ in less than 24 hours. Happy coding! 🚀
