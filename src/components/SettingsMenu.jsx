import React from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";
import { useTheme } from 'next-themes';
import { useSettings } from '../contexts/SettingsContext';

const SettingsMenu = () => {
  const { setTheme } = useTheme();
  const { settings, updateSettings } = useSettings();

  const handleThemeChange = (theme) => {
    setTheme(theme);
  };

  const handleSpeedUnitChange = (unit) => {
    updateSettings({ speedUnit: unit });
  };

  const handleTemperatureUnitChange = (unit) => {
    updateSettings({ temperatureUnit: unit });
  };

  const handleRefreshRateChange = (rate) => {
    updateSettings({ refreshRate: rate });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleThemeChange('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange('system')}>System</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Speed Unit</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleSpeedUnitChange('mph')}>MPH</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSpeedUnitChange('kph')}>KPH</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Temperature Unit</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleTemperatureUnitChange('F')}>Fahrenheit</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleTemperatureUnitChange('C')}>Celsius</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Refresh Rate</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleRefreshRateChange(1)}>1 Hz</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleRefreshRateChange(10)}>10 Hz</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsMenu;