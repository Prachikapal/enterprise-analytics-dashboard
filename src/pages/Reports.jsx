import SummaryCard from "../components/common/SummaryCard";
import Layout from "../components/layout/Layout";
import { summaryData } from "../data/reportsData";

const Reports = () => {
    return (
        <Layout title="Reports">
            <SummaryCard cards={summaryData} />
        </Layout>
    )
}

export default Reports;