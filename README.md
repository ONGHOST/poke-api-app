Certainly! Below is an example of a README.md file you can use for your app. You can modify it to better fit your specific application:

```markdown
# Poke API App

This is a simple React application that utilizes the PokeAPI to display a list of Pokémon. It also allows users to view details about each Pokémon.

## Features

- Display a list of Pokémon with their names.
- Click on a Pokémon to view more details.
- Infinite scrolling for loading more Pokémon.

## Technologies Used

- React
- Redux (for state management)
- Redux Saga (for handling side effects)
- Axios (for making API requests)
- Tailwind CSS (for styling)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/achrafelbihi/poke-api-app.git
   ```

2. Install dependencies:

   ```bash
   cd poke-api-app
   npm install
   ```

### Running the App

```bash
npm run dev
```

This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Running Tests

```bash
npm test
```

This will run the unit tests.

## Folder Structure

- `src/`: Contains the source code of the application.
  - `components/`: Contains React components.
  - `redux/`: Contains Redux-related files (actions, reducers, sagas).
  - `sagas/`: Contains Redux Saga files.
  - `api.ts`: Contains the functions for making API requests.
- `test/`: Contains unit tests.

## Contributing

Feel free to contribute to this project. You can create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
```

Make sure to replace placeholders like `your-username` and adjust any paths or descriptions to match your specific application. This README.md provides a basic structure, but you can add more sections or details as needed for your project.