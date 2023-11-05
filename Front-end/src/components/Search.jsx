/* Search without functionality */
const Search = () => {
    return (
      <div className="flex justify-center my-6">
        <div className="relative">
          <input
            type="search"
            placeholder="Search for characters..."
            className="pl-10 pr-4 py-2 rounded-lg shadow-sm border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>
    );
  };
  
  export default Search;
  