# Senior Full Stack Developer - Assessment - TG

Welcome to the Senior Full Stack Developer Assessment project! This application is a React app powered by Vite.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Docker**: [Get Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to set up and run the project on your local machine using **Docker Compose**:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jslmariano/tgcc.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tgcc
   ```

3. Build and start the containers using Docker Compose:

   ```bash
   docker-compose up -d --build
   ```

4. Access the application:
   - Navigate to [http://localhost:7309](http://localhost:7309) for the app.
   - API endpoints are available at [http://localhost:7308](http://localhost:7308).

## Project Structure

```bash
project-root/
├── api/
├── docker-compose.yml
├── Dockerfile
├── webapp/
└── .env
```

## API Endpoints

The application uses JSON Server to provide mock API endpoints for products:

- `GET http://localhost:7308/products`: Get the full list of products.
- `GET http://localhost:7308/products/search?q={substring}`: Search for products by name.

## Tech Stack

- React
- Vite
- TypeScript
- Docker
- Docker Compose
- Styled Components
- React Router
- React Testing Library
- Vitest
- JSON Server

## Notes

- **TypeScript**: The project is written in TypeScript with strict mode enabled. Basic knowledge of TypeScript is sufficient.
- **CSS Libraries**: Please refrain from using CSS libraries like Bootstrap or Tailwind CSS.
- **Customization**: Feel free to modify the codebase, reorganize it, or add new tools as needed.

## Feedback and Contributions

We appreciate any feedback you have about this assessment. If you have suggestions or encounter issues, please let us know.

Enjoy coding! 🚀
