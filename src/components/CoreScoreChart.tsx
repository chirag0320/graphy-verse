
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

type DayProgress = {
  day: string;
  value: number;
  fill: number; // percentage filled (0-100)
  active: boolean;
};

interface CoreScoreChartProps {
  data: DayProgress[];
  target: number;
  className?: string;
}

const CoreScoreChart: React.FC<CoreScoreChartProps> = ({
  data,
  target,
  className,
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
    const fillHeight = height * (fill / 100);
    
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
        {fill > 0 && (
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
            fill="#86CFBD"
          />
        )}
      </g>
    );
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center gap-2 mb-2">
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
                stroke="#86CFBD" 
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
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">Target</span>
          <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded">Fill</span>
          <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded">Hug</span>
        </div>
        <div className="text-gray-500">
          Updated 10:00 am
        </div>
      </div>
    </div>
  );
};

export default CoreScoreChart;
