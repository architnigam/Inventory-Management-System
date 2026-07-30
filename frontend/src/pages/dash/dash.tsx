import Card from "../../components/ui/card";
import {
  Package,
  Tags,
  Truck,
  TriangleAlert,
} from "lucide-react";

const dashboardData = [
  {
    title: "Products",
    value: 120,
    icon: Package,
    color: "bg-blue-500",
  },
  {
    title: "Categories",
    value: 15,
    icon: Tags,
    color: "bg-green-500",
  },
  {
    title: "Suppliers",
    value: 20,
    icon: Truck,
    color: "bg-purple-500",
  },
  {
    title: "Low Stock",
    value: 8,
    icon: TriangleAlert,
    color: "bg-red-500",
  },
  
];

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5">
        {dashboardData.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;