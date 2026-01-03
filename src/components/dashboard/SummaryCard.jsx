const cards = [
    {title: "Total Revenue", value:"$124,000"},
    {title: "Active users", value:"1,245"},
    {title: "Bookings", value:"8,430"},
    {title: "Conversion Rate", value:"4.6%"},
]

const SummaryCard = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {cards.map(card => (
                <div key={card.title} className="bg-white p-5 rounded-lg shadow">
                    <p className="text-gray-500 text-sm">{card.title}</p>
                    <h3 className="text-xl font-bold">{card.value}</h3>
                </div>
            ))}
        </div>
    )
}

export default SummaryCard;