import UserTable from "../components/admin/UserTable";
import SummaryCard from "../components/common/SummaryCard";
import Layout from "../components/layout/Layout";

const stats = [
    {title: "Total Users", value:"1,230"},
    {title: "Active Users", value:"1,045"},
    {title: "Pending Requests", value:"12"},
    {title: "System Alerts", value:"3"},
]

const AdminPanel = () => {
    return(
        <Layout title="Admin Panel">
        <SummaryCard cards={stats}/>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6"> */}
            <UserTable/>
        {/* </div> */}
        </Layout>
    )
}

export default AdminPanel;