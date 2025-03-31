
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CoreScoreChart from "./CoreScoreChart";
import { CheckCircle } from "lucide-react";

interface CoreScoreCardProps {
  className?: string;
}

const CoreScoreCard: React.FC<CoreScoreCardProps> = ({ className }) => {
  // Sample data for our chart
  const data = [
    { day: "Sun", value: 50, fill: 60, active: true },
    { day: "Mon", value: 50, fill: 40, active: true },
    { day: "Tue", value: 50, fill: 75, active: true },
    { day: "Wed", value: 50, fill: 95, active: true },
    { day: "Thu", value: 50, fill: 50, active: true },
    { day: "Fri", value: 50, fill: 0, active: false },
    { day: "Sat", value: 50, fill: 0, active: false },
  ];

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-100 p-2 rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" 
                stroke="#4DAA99" strokeWidth="1.5" />
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
                stroke="#4DAA99" strokeWidth="1.5" />
              <path d="M12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7Z" 
                fill="#4DAA99" />
              <path d="M12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21Z" 
                fill="#4DAA99" />
              <path d="M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z" 
                fill="#4DAA99" />
              <path d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z" 
                fill="#4DAA99" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">CoreScore Daily Progress</h3>
        </div>
        <div className="flex items-center gap-1 text-emerald-500 font-medium">
          <span>Analytics</span>
          <CheckCircle size={18} />
        </div>
      </CardHeader>
      <CardContent>
        <CoreScoreChart data={data} target={58} />
      </CardContent>
    </Card>
  );
};

export default CoreScoreCard;
