import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AnalogGauge from "../components/AnalogGauge";
import DigitalGauge from "../components/DigitalGauge";

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [telemetryData, setTelemetryData] = useState({
    speed: 0,
    rpm: 0,
    gear: 'N',
    braking: 0,
    accelerationX: 0,
    accelerationY: 0,
    accelerationZ: 0,
    steeringAngle: 0,
    throttlePosition: 0,
    brakePosition: 0,
    suspensionTravel: 0,
    tireTemperature: 0,
    tireWear: 0,
  });

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  useEffect(() => {
    if (isConnected) {
      const interval = setInterval(() => {
        // Simulate data updates
        setTelemetryData({
          speed: Math.floor(Math.random() * 200),
          rpm: Math.floor(Math.random() * 8000),
          gear: ['1', '2', '3', '4', '5', '6', 'N', 'R'][Math.floor(Math.random() * 8)],
          braking: Math.floor(Math.random() * 100),
          accelerationX: (Math.random() * 4 - 2).toFixed(2),
          accelerationY: (Math.random() * 4 - 2).toFixed(2),
          accelerationZ: (Math.random() * 4 - 2).toFixed(2),
          steeringAngle: Math.floor(Math.random() * 360 - 180),
          throttlePosition: Math.floor(Math.random() * 100),
          brakePosition: Math.floor(Math.random() * 100),
          suspensionTravel: Math.floor(Math.random() * 200),
          tireTemperature: Math.floor(Math.random() * 100 + 20),
          tireWear: Math.floor(Math.random() * 100),
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isConnected]);

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
          <AnalogGauge value={telemetryData.speed} min={0} max={200} title="Speed" unit="km/h" />
          <AnalogGauge value={telemetryData.rpm} min={0} max={8000} title="RPM" unit="rpm" />
          <DigitalGauge value={telemetryData.gear} title="Gear" unit="" />
          <DigitalGauge value={telemetryData.braking} title="Braking" unit="%" />
          <DigitalGauge value={telemetryData.accelerationX} title="Acceleration X" unit="m/s²" />
          <DigitalGauge value={telemetryData.accelerationY} title="Acceleration Y" unit="m/s²" />
          <DigitalGauge value={telemetryData.accelerationZ} title="Acceleration Z" unit="m/s²" />
          <DigitalGauge value={telemetryData.steeringAngle} title="Steering Angle" unit="°" />
          <DigitalGauge value={telemetryData.throttlePosition} title="Throttle Position" unit="%" />
          <DigitalGauge value={telemetryData.brakePosition} title="Brake Position" unit="%" />
          <DigitalGauge value={telemetryData.suspensionTravel} title="Suspension Travel" unit="mm" />
          <DigitalGauge value={telemetryData.tireTemperature} title="Tire Temperature" unit="°C" />
          <DigitalGauge value={telemetryData.tireWear} title="Tire Wear" unit="%" />
        </div>
      </main>

      <footer className="p-4 bg-card border-t mt-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          Data Logging Status: {isConnected ? "Active" : "Inactive"} | Refresh Rate: 1Hz
        </div>
      </footer>
    </div>
  );
};

export default Index;