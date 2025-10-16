## Getting Started

### Prerequisites

- Node.js (v20.11.17 or later)
- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/okerekechinweotito/profile.git
   ```
2. Install the dependencies:
   ```bash
   pnpm install
   ```

## Usage

### Development

To start the development server, run:

```bash
pnpm run dev
```

The server will start on `http://localhost:3000` and you can access it in your browser.


## API Endpoints

### `GET /`

Returns a welcome message.

**Response:**

```json
{
  "status": 200,
  "message": "Welcome to the Profile API!"
}
```

### `GET /me`

Retrieves the user's profile information with timestamp and cat fact
**Response:**

```json
{
  "status": "success",
  "user": {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "stack": "Node.js/Hono",
  },
  "timestamp": "2023-08-01T12:34:56.789Z",
  "fact": "catFact": "Cats have over 20 muscles that control their ears."
}
```

## Dependencies

- [hono](https://hono.dev/): A lightweight, fast web framework for Node.js.
- [@hono/node-server](https://hono.dev/getting-started/nodejs): Hono adapter for Node.js.
- [zod](https://zod.dev): A TypeScript-first schema definition language.

## Dev Dependencies

- [typescript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [tsx](https://github.com/esbuild-kit/tsx): A CLI tool to run TypeScript and ESM in Node.js.
- [@types/node](https://www.npmjs.com/package/@types/node): Type definitions for Node.js.


## Project Structure

```
/root
├───.gitignore
├───package.json
├───pnpm-lock.yaml
├───README.md
├───error.log
├───tsconfig.json
└───src/
    ├───app.ts
    ├───server.ts
    ├───controllers/ - Handles incoming requests and responses.
    │   └───me.controller.ts
    ├───integrations/ - Integrates with third-party services.
    │   └───catfact.integration.ts
    ├───models/ - Defines the data structure and validator
    │   └───profile.model.ts
    ├───routes/ - Defines the API routes.
    │   └───me.route.ts
    ├───services/ - Contains the business logic of the application.
    │   └───profile.service.ts
    └───utils/ - Contains utility functions.
        └───logger.ts
```
