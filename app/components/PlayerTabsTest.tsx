export default function PlayerTabsTest() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Tab Headers */}
      <div className="flex border-b mb-6">
        <button className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-600">
          Home Team
        </button>
        <button className="px-4 py-2 font-medium border-b-2 border-transparent text-gray-600 hover:text-gray-800">
          Away Team
        </button>
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6].map(num => (
          <div key={num}>
            <label className="block text-sm font-medium mb-1">
              Player {num}
            </label>
            <input 
              type="text"
              placeholder={`Enter home player ${num} name`}
              className="w-full p-2 border rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
          Previous
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Next Step
        </button>
      </div>
    </div>
  );
}