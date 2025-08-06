import Card from "../card";
import numberConverter from "../../utils/number-converter";
const DashboardNumberCards: React.FC<{  }> = () => {
    const arrays = [{title: "Total Balance", value: 12345, percentage: 5},{title: "Total Credits", value: 7890, percentage: 3}, {title: "Total Debits", value: 4455, percentage: -2},{title: "Transactions", value: 150, percentage: 10}];
  return (
    <div className="flex flex-wrap items-center gap-7 self-stretch">
      {arrays.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          value={`${index<3?"$":""}${numberConverter(item.value)}`}
          percentage={`${item.percentage<0?"":"+"}${item.percentage}%`}
        />
      ))}
    </div>
  );
};

export default DashboardNumberCards;
