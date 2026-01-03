const data = [
    {id:1, user: "Ron", activity: "Booking", status: "completed"},
    {id:1, user: "Hermione", activity: "Payment", status: "Pending"},
    {id:1, user: "Harry", activity: "check-in", status: "completed"}
]

const ActivityTable = () => {
    return(
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-500 bg-gray-100">
                        <th className="p-2">User</th>
                        <th className="p-2">Activity</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td className="p-2">{row.user}</td>
                            <td className="p-2">{row.activity}</td>
                            <td className="p-2" style={row.status == "completed" ? {color:"green"}:{}}>{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ActivityTable;