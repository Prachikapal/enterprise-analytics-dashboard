const ReportsTable = ({data}) => {
 return(
        <div className="bg-white p-6 rounded-lg shadow">
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-500 bg-gray-100">
                        <th className="p-2">Date</th>
                        <th className="p-2">Type</th>
                        <th className="p-2">Value</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td className="p-2">{row.date}</td>
                            <td className="p-2">{row.type}</td>
                            <td className="p-2">{row.value}</td>
                            <td className={row.status == "Completed"? "p-2 text-green-600" : "p-2 text-yellow-600"}>{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ReportsTable;