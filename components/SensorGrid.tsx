import { SensorDataCard } from './SensorDataCard';
import { Thermometer, Droplets, Sprout, Sun } from 'lucide-react';

const sensorData = [
  {
    icon: Thermometer,
    label: 'Temperature',
    value: 24,
    unit: '°C',
    min: 18,
    max: 30,
    status: 'good' as const,
    sparklineData: [22, 23, 24, 25, 24, 23, 24, 25, 26, 25, 24, 23],
    color: '#ef4444',
  },
  {
    icon: Droplets,
    label: 'Humidity',
    value: 65,
    unit: '%',
    min: 50,
    max: 80,
    status: 'good' as const,
    sparklineData: [60, 62, 64, 65, 67, 66, 65, 64, 66, 65, 64, 65],
    color: '#3b82f6',
  },
  {
    icon: Sprout,
    label: 'Soil Moisture',
    value: 42,
    unit: '%',
    min: 30,
    max: 60,
    status: 'warning' as const,
    sparklineData: [45, 44, 43, 42, 41, 42, 43, 42, 41, 42, 43, 42],
    color: '#06b6d4',
  },
  {
    icon: Sun,
    label: 'Light Intensity',
    value: 850,
    unit: 'lux',
    min: 600,
    max: 1000,
    status: 'good' as const,
    sparklineData: [200, 400, 600, 800, 900, 950, 920, 880, 850, 820, 800, 850],
    color: '#f59e0b',
  },
];

export function SensorGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {sensorData.map((sensor, index) => (
        <SensorDataCard key={index} {...sensor} />
      ))}
    </div>
  );
}