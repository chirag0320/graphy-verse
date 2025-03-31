
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScoreChart from "./ScoreChart";
import { CheckCircle } from "lucide-react";

export interface ScoreCardData {
  day: string;
  value: number;
  fill: number;
  active: boolean;
}

export interface ScoreCardProps {
  className?: string;
  title: string;
  target: number;
  data: ScoreCardData[];
  lastUpdated: string;
  icon?: React.ReactNode;
  fillColor: string; // Color for the filled portion of bars
  analyticsColor?: string; // Color for the analytics text and icon
}

const ScoreCard: React.FC<ScoreCardProps> = ({ 
  className, 
  title, 
  target, 
  data, 
  lastUpdated,
  icon,
  fillColor, 
  analyticsColor = "#16a34a" // Default emerald-600
}) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-3">
          <div className="bg-opacity-20 p-2 rounded-md" style={{ backgroundColor: `${fillColor}40` }}>
            {icon}
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <div className="flex items-center gap-1 font-medium" style={{ color: analyticsColor }}>
          <span>Analytics</span>
          <CheckCircle size={18} />
        </div>
      </CardHeader>
      <CardContent>
        <ScoreChart data={data} target={target} fillColor={fillColor} />
        <div className="flex justify-between items-center text-sm mt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Target</span>
          </div>
          <div className="text-gray-500">
            Updated {lastUpdated}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
