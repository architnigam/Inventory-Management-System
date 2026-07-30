import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

type CardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
};

function Card({ title, value, icon: Icon, color }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex justify-between items-center">
      <div>
        <h2 className="text-gray-500 text-sm">{title}</h2>

        <p className="text-3xl font-bold mt-2">
          {value}
        </p>
      </div>

      <div className={`${color} p-3 rounded-full text-white`}>
        <Icon size={28} />
      </div>
    </div>
  );
}

export default Card;