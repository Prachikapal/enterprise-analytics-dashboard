import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { revenueData } from "../../data/dashboardData";

const RevenueChart = () => {
    return(
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Monthly Revenue</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default RevenueChart;