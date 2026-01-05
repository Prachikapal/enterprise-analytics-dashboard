import { useState } from "react";
import SummaryCard from "../components/common/SummaryCard";
import Layout from "../components/layout/Layout";
import ReportFilters from "../components/reports/ReportFilters";
import { summaryData } from "../data/reportsData";
import { reportsData } from "../data/reportsData";
import ReportsTable from "../components/reports/ReportsTable";

const Reports = () => {

    const [filters, setFilters] = useState({});
    const [filteredData, setFilteredData] = useState(reportsData);

    const handleFilter = (key, value) => {
        const updatedFilters = {...filters, [key]: value};
        setFilters(updatedFilters);

        let data = reportsData;

        if(updatedFilters.date){
            data = data.filter(data=> data.date === updatedFilters.date);
        }

        if(updatedFilters.type){
            data = data.filter(data=> data.type === updatedFilters.type);
        }

        setFilteredData(data);
    }

    return (
        <Layout title="Reports">
            <SummaryCard cards={summaryData} />
            <ReportFilters onFilter={handleFilter}/>
            <ReportsTable data ={filteredData}/>
        </Layout>
    )
}

export default Reports;