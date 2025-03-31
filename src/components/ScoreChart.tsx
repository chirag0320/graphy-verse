
import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ReferenceLine, 
  ResponsiveContainer 
} from "recharts";
import { cn } from "@/lib/utils";
import { ScoreCardData } from "./ScoreCard";

interface ScoreChartProps {
  data: ScoreCardData[];
  target: number;
  className?: string;
  fillColor: string;
}

const ScoreChart: React.FC<ScoreChartProps> = ({
  data,
  target,
  className,
  fillColor,
}) => {
  // Custom shape for our pill-shaped bars
  const PillBar = (props: any) => {
    const { x, y, width, height, fill, value, active } = props;
    
    // If the day is not active (future days), show a light gray bar
    if (!active) {
      return (
        <path
          d={`
            M${x},${y + height - width / 2}
            a${width / 2},${width / 2} 0 0 1 ${width},0
            v${-(height - width)}
            a${width / 2},${width / 2} 0 0 0 ${-width},0
            z
          `}
          fill="#E5E7EB"
          stroke="#E5E7EB"
          strokeWidth="1"
        />
      );
    }
    
    // For active days, show the pill with progress
    const fillHeight = height * (props.payload.fill / 100);
    
    return (
      <g>
        {/* Full pill outline */}
        <path
          d={`
            M${x},${y + height - width / 2}
            a${width / 2},${width / 2} 0 0 1 ${width},0
            v${-(height - width)}
            a${width / 2},${width / 2} 0 0 0 ${-width},0
            z
          `}
          fill="#1E2021"
          stroke="#1E2021"
          strokeWidth="1"
        />
        
        {/* Filled portion */}
        {props.payload.fill > 0 && (
          <path
            d={`
              M${x},${y + height - width / 2}
              a${width / 2},${width / 2} 0 0 1 ${width},0
              v${-(fillHeight - width > 0 ? fillHeight - width : 0)}
              ${fillHeight > width ? 
                `a${width / 2},${width / 2} 0 0 0 ${-width},0` : 
                `a${width / 2},${fillHeight / 2} 0 0 0 ${-width},0`}
              z
            `}
            fill={fillColor}
          />
        )}
      </g>
    );
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold">{target}</div>
        <div className="flex-grow">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart 
              data={data}
              margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
            >
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280' }} 
              />
              <YAxis hide domain={[0, target * 1.5]} />
              <ReferenceLine 
                y={target} 
                stroke={fillColor} 
                strokeWidth={2} 
                strokeDasharray="3 3" 
              />
              <Bar 
                dataKey="value" 
                shape={<PillBar />} 
                label={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ScoreChart;
