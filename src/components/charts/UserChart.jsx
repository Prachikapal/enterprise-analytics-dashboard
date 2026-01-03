import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";
import { userData } from "../../data/dashboardData";

const COLORS = ["#2f63eb", "#93c5fd"];

const UserChart = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">User Distribution</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={userData} dataKey="value" nameKey="name" outerRadius={90} label>
                            {userData.map((_, index) =>(<Cell key={index} fill={COLORS[index]}/>))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default UserChart;