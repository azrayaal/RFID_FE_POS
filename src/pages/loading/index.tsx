const dummyData = [
  {
    id: 1,
    bagId: "BAG001",
    type: "Regular",
    weight: "15kg",
    totalPackage: 10,
    destination: "Jakarta",
    message: "No Issues",
    scannedAt: "08:30 AM",
  },
  {
    id: 2,
    bagId: "BAG002",
    type: "Express",
    weight: "5kg",
    totalPackage: 5,
    destination: "Bandung",
    message: "No Issues",
    scannedAt: "08:32 AM",
  },
  {
    id: 3,
    bagId: "BAG003",
    type: "Heavy",
    weight: "50kg",
    totalPackage: 2,
    destination: "Surabaya",
    message: "Delayed",
    scannedAt: "08:34 AM",
  },
  // Tambahkan lebih banyak data dummy jika diperlukan
];

// import Clock from 'react-live-clock';

export default function Loading() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-6">Dashboard Loading</h1>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Live Time Card */}
        <div className="bg-white rounded-lg shadowCard p-6">
          <h2 className="text-xl font-semibold text-gray-500">Live Time</h2>
          <div className="text-4xl font-bold text-blue-600 my-2">
          </div>
          <div className="text-gray-500">
            Jakarta Timur | Sun, 17 April 2024
          </div>
        </div>

        {/* Error Loading Bag Card */}
        <div className="bg-orenPos text-white rounded-lg shadowCard p-6">
          <h2 className="text-xl font-semibold">Error Loading Bag</h2>
          <div className="text-4xl font-bold my-2">0</div>
          <div className="text-gray-200">Bag Error Details</div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-orange-500 text-white rounded-t-lg p-4">
        <h3 className="text-lg font-semibold">
          Total Loading Bag: {dummyData.length}
        </h3>
      </div>
      <div className="bg-white rounded-b-lg shadowCard overflow-auto">
        <table className="w-full text-left table-auto border-collapse">
          <thead className="text-white">
            <tr className="border-t-2 border-white bg-orange-500">
              <th className="px-4 py-2 border border-gray-200">No</th>
              <th className="px-4 py-2 border border-gray-200">Bag ID</th>
              <th className="px-4 py-2 border border-gray-200">Type</th>
              <th className="px-4 py-2 border border-gray-200">Bag Weight</th>
              <th className="px-4 py-2 border border-gray-200">
                Total Package
              </th>
              <th className="px-4 py-2 border border-gray-200">
                Destination Location
              </th>
              <th className="px-4 py-2 border border-gray-200">Message</th>
              <th className="px-4 py-2 border border-gray-200">Scanned at</th>
            </tr>
          </thead>
          <tbody>
            {/* Looping data dummy */}
            {dummyData.map((data, index) => (
              <tr
                key={data.id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-gray-300" : "bg-white"
                }`}
              >
                <td className="px-4 py-2 border-r  border-gray-500">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border-r border-l border-gray-500">
                  {data.bagId}
                </td>
                <td className="px-4 py-2 border-r border-l border-gray-500">
                  {data.type}
                </td>
                <td className="px-4 py-2 border-r border-l border-gray-500">
                  {data.weight}
                </td>
                <td className="px-4 py-2 border-r border-l border-gray-500">
                  {data.totalPackage}
                </td>
                <td className="px-4 py-2 border-r border-l border-gray-500">
                  {data.destination}
                </td>
                <td className="px-4 py-2 border-r border-l border-gray-500">
                  {data.message}
                </td>
                <td className="px-4 py-2 border-l  border-gray-500">
                  {data.scannedAt}
                </td>
              </tr>
            ))}
            {/* Tampilkan jika tidak ada data */}
            {dummyData.length === 0 && (
              <tr>
                <td colSpan={8} className="py-8">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="No Data"
                      className="w-40 mb-4"
                    />
                    <span className="text-gray-500">Tidak ada data</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
