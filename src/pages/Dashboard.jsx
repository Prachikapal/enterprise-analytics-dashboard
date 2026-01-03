import Charts from "../components/dashboard/Charts";
import SummaryCard from "../components/dashboard/SummaryCard";
import Layout from "../components/layout/Layout";
import ActivityTable from "../components/dashboard/ActivityTable";

const Dashboard = () => {
    return(
        <Layout title="Dashboard">
            <SummaryCard/>
            <Charts/>
            <ActivityTable/>
        </Layout>
    )
}

export default Dashboard;