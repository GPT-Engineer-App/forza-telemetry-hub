import React from 'react';
import { Progress } from "@/components/ui/progress";

const AnalogGauge = ({ value, min, max, title, unit }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <Progress
          value={percentage}
          className="w-32 h-32 rounded-full"
          indicatorClassName="bg-primary"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm">{unit}</div>
        </div>
      </div>
      <div className="mt-2 text-sm font-medium">{title}</div>
    </div>
  );
};

export default AnalogGauge;