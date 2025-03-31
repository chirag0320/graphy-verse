
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScoreChart from "./ScoreChart";
import { CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
  tags?: string[]; // Tags to display below the chart
}

const ScoreCard: React.FC<ScoreCardProps> = ({ 
  className, 
  title, 
  target, 
  data, 
  lastUpdated,
  icon,
  fillColor, 
  analyticsColor = "#16a34a", // Default emerald-600
  tags = []
}) => {
  return (
    <Card className={`overflow-hidden shadow-md ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b">
        <div className="flex items-center gap-3">
          <div 
            className="bg-opacity-20 p-2 rounded-full" 
            style={{ backgroundColor: `${fillColor}20` }}
          >
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex items-center gap-1 font-medium text-sm" style={{ color: analyticsColor }}>
          <span>Analytics</span>
          <CheckCircle size={16} />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <ScoreChart 
          data={data} 
          target={target} 
          fillColor={fillColor}
          tags={tags} 
        />
        <Separator className="my-3" />
        <div className="flex justify-end items-center text-sm">
          <div className="text-gray-500">
            Updated {lastUpdated}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
