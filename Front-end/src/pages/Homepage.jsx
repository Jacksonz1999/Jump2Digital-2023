import { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;


function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "alive":
      return "text-green-500 font-semibold";
    case "dead":
      return "text-red-500 font-semibold";
    default:
      return "text-gray-400 italic";
  }
}

function Homepage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
    const response = await axios.get(apiUrl);
      setCharacters(response.data.results);
    }
    fetchCharacters();
  }, []);

  return (
    <div className="Homepage min-h-scree">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {characters.map((character) => (
            <div
              key={character.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transform transition duration-200 hover:scale-110 border border-gray-300 cursor-pointer"
            >
              <img
                src={character.image}
                alt={character.name}
                className="rounded mb-4 mx-auto"
              />
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{character.name}</h2>
              <p className="text-gray-600 mb-1 text-sm">{character.species}</p>
              <p className="text-gray-600 mb-1 text-sm">{character.gender}</p>
              <p className={`${getStatusColor(character.status)} mb-1`}>
                {character.status}
              </p>
              <p className="text-lg text-gray-600 ">Last known location:</p>
              <p className="text-gray-800 text-sm font-medium">{character.origin.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
