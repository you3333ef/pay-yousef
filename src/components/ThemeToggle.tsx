import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const [isLight, setIsLight] = useState(true); // Default to light mode

  useEffect(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('payment-theme');
    const isLightMode = savedTheme ? savedTheme === 'light' : true;
    setIsLight(isLightMode);
    updateTheme(isLightMode);
  }, []);

  const updateTheme = (light: boolean) => {
    const root = document.documentElement;
    if (light) {
      // Light mode styles
      root.style.setProperty('--payment-bg', '#ffffff');
      root.style.setProperty('--payment-text', '#1a1a1a');
      root.style.setProperty('--payment-card-bg', '#ffffff');
      root.style.setProperty('--payment-border', '#e5e5e5');
      root.style.setProperty('--payment-muted', '#6b6b6b');
    } else {
      // Dark mode styles
      root.style.setProperty('--payment-bg', '#0a0a0a');
      root.style.setProperty('--payment-text', '#f5f5f5');
      root.style.setProperty('--payment-card-bg', '#1a1a1a');
      root.style.setProperty('--payment-border', '#2a2a2a');
      root.style.setProperty('--payment-muted', '#a0a0a0');
    }
  };

  const toggleTheme = () => {
    const newLightState = !isLight;
    setIsLight(newLightState);
    localStorage.setItem('payment-theme', newLightState ? 'light' : 'dark');
    updateTheme(newLightState);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${className}`}
      title={isLight ? "الوضع الليلي" : "الوضع النهاري"}
    >
      {isLight ? (
        <Moon className="w-5 h-5" style={{ color: '#1a1a1a' }} />
      ) : (
        <Sun className="w-5 h-5" style={{ color: '#f5f5f5' }} />
      )}
    </button>
  );
};
