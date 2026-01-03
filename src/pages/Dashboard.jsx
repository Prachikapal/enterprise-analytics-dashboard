import Charts from "../components/dashboard/Charts";
import SummaryCard from "../components/dashboard/SummaryCard";
import Layout from "../components/layout/Layout";

const Dashboard = () => {
    return(
        <Layout title="Dashboard">
            <SummaryCard/>
            <Charts/>
        </Layout>
    )
}

export default Dashboard;