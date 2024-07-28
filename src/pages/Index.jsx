import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TelemetryCard = ({ title, value }) => (
  <Card className="col-span-1">
    <CardHeader className="p-4">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">{value}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  const telemetryData = [
    { title: "Current Speed", value: "0 km/h" },
    { title: "RPM", value: "0" },
    { title: "Gear", value: "N" },
    { title: "Braking %", value: "0%" },
    { title: "Acceleration X", value: "0 m/s²" },
    { title: "Acceleration Y", value: "0 m/s²" },
    { title: "Acceleration Z", value: "0 m/s²" },
    { title: "Steering Angle", value: "0°" },
    { title: "Throttle Position", value: "0%" },
    { title: "Brake Position", value: "0%" },
    { title: "Suspension Travel", value: "0 mm" },
    { title: "Tire Temperature", value: "0°C" },
    { title: "Tire Wear", value: "0%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="p-4 bg-card border-b">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Telemetry Dashboard</h1>
          <Button onClick={toggleConnection}>
            {isConnected ? "Disconnect" : "Connect"}
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {telemetryData.map((data, index) => (
            <TelemetryCard key={index} title={data.title} value={data.value} />
          ))}
        </div>
      </main>

      <footer className="p-4 bg-card border-t mt-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          Data Logging Status: Not Implemented | Refresh Rate: 1Hz
        </div>
      </footer>
    </div>
  );
};

export default Index;