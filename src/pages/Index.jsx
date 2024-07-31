import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import AnalogGauge from "../components/AnalogGauge";
import DigitalGauge from "../components/DigitalGauge";
import SettingsMenu from "../components/SettingsMenu";
import { useSettings } from '../contexts/SettingsContext';

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isAnalog, setIsAnalog] = useState(true);
  const { settings } = useSettings();
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

  const toggleGaugeType = () => {
    setIsAnalog(!isAnalog);
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
      }, 1000 / settings.refreshRate);

      return () => clearInterval(interval);
    }
  }, [isConnected, settings.refreshRate]);

  const convertSpeed = (speed) => {
    return settings.speedUnit === 'mph' ? Math.round(speed * 0.621371) : speed;
  };

  const convertTemperature = (temp) => {
    return settings.temperatureUnit === 'F' ? Math.round((temp * 9/5) + 32) : temp;
  };

  const renderGauge = (value, min, max, title, unit) => {
    let displayValue = value;
    let displayUnit = unit;

    if (title === "Speed") {
      displayValue = convertSpeed(value);
      displayUnit = settings.speedUnit;
    } else if (title === "Tire Temperature") {
      displayValue = convertTemperature(value);
      displayUnit = settings.temperatureUnit;
    }

    if (isAnalog) {
      return <AnalogGauge value={displayValue} min={min} max={max} title={title} unit={displayUnit} />;
    } else {
      return <DigitalGauge value={displayValue} title={title} unit={displayUnit} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="p-4 bg-card border-b">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Telemetry Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch id="gauge-type" checked={isAnalog} onCheckedChange={toggleGaugeType} />
              <Label htmlFor="gauge-type">{isAnalog ? "Analog" : "Digital"}</Label>
            </div>
            <Button onClick={toggleConnection}>
              {isConnected ? "Disconnect" : "Connect"}
            </Button>
            <SettingsMenu />
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {renderGauge(telemetryData.speed, 0, 200, "Speed", "km/h")}
          {renderGauge(telemetryData.rpm, 0, 8000, "RPM", "rpm")}
          <DigitalGauge value={telemetryData.gear} title="Gear" unit="" />
          {renderGauge(telemetryData.braking, 0, 100, "Braking", "%")}
          {renderGauge(telemetryData.accelerationX, -2, 2, "Acceleration X", "m/s²")}
          {renderGauge(telemetryData.accelerationY, -2, 2, "Acceleration Y", "m/s²")}
          {renderGauge(telemetryData.accelerationZ, -2, 2, "Acceleration Z", "m/s²")}
          {renderGauge(telemetryData.steeringAngle, -180, 180, "Steering Angle", "°")}
          {renderGauge(telemetryData.throttlePosition, 0, 100, "Throttle Position", "%")}
          {renderGauge(telemetryData.brakePosition, 0, 100, "Brake Position", "%")}
          {renderGauge(telemetryData.suspensionTravel, 0, 200, "Suspension Travel", "mm")}
          {renderGauge(telemetryData.tireTemperature, 0, 100, "Tire Temperature", "°C")}
          {renderGauge(telemetryData.tireWear, 0, 100, "Tire Wear", "%")}
        </div>
      </main>

      <footer className="p-4 bg-card border-t mt-8">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          Data Logging Status: {isConnected ? "Active" : "Inactive"} | Refresh Rate: {settings.refreshRate}Hz
        </div>
      </footer>
    </div>
  );
};

export default Index;