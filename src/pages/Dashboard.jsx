import Charts from "../components/dashboard/Charts";
import SummaryCard from "../components/common/SummaryCard";
import Layout from "../components/layout/Layout";
import ActivityTable from "../components/dashboard/ActivityTable";
import { summaryCardsData } from "../data/dashboardData";


const Dashboard = () => {
    return(
        <Layout title="Dashboard">
            <SummaryCard cards={summaryCardsData}/>
            <Charts/>
            <ActivityTable/>
        </Layout>
    )
}

export default Dashboard;