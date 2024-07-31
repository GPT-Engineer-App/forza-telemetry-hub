import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DigitalGauge = ({ value, title, unit }) => {
  return (
    <Card className="w-full">
      <CardHeader className="p-4">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value} <span className="text-sm font-normal">{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DigitalGauge;