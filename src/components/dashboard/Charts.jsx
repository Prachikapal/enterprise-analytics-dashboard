import RevenueChart from "../charts/RevenueChart";
import UserChart from "../charts/UserChart";

const Charts = () => {
    return(
        <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="font-semibold mb-3">Revenue Trend</h3>
            {/* <div className="h-48 flex items-center justify-center text-gray-400"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <RevenueChart/>
                <UserChart/>
            </div>
        </div>
    )
}

export default Charts;