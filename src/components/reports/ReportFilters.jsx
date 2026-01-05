const ReportFilters = ({onFilter}) => {
    return(
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex gap-4">
            <input type="date" className="border px-3 py-2 rounded" onChange={(e) => {onFilter("date",e.target.value)}}/>
            <select className="border px-3 py-2 rounded" onChange={(e) => {onFilter("type",e.target.value)}}>
                <option value="">All Types</option>
                <option value="Revenue">Revenue</option>
                <option value="Bookings">Bookings</option>
                <option value="Refunds">Refunds</option>
            </select>
            <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded">Export</button>
        </div>
    )
}

export default ReportFilters;