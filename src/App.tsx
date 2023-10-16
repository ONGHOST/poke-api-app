import React from 'react';
import PokemonList from './components/PokemonList';

const App: React.FC = () => {
 
  return (
    <div className="bg-blue-500 text-white p-4 text-2xl">
      <PokemonList /> 
    </div>
  );
};

export default App;
