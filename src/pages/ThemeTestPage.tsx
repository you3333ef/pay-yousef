import { useState, useEffect } from "react";
import { SHIPPING_COMPANIES_OFFICIAL } from "@/lib/shippingCompaniesOfficial";
import { useTheme } from "@/themes/ThemeContext";

const ThemeTestPage = () => {
  const { setTheme } = useTheme();
  const [companyId, setCompanyId] = useState("aramex");

  useEffect(() => {
    console.log("SHIPPING_COMPANIES_OFFICIAL:", SHIPPING_COMPANIES_OFFICIAL);
  }, []);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Theme changed to:", e.target.value);
    setCompanyId(e.target.value);
    setTheme(e.target.value);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Theme Test Page</h1>
      <div className="mb-4">
        <label htmlFor="theme-select" className="mr-2">
          Select a theme:
        </label>
        <select
          id="theme-select"
          value={companyId}
          onChange={handleThemeChange}
          className="p-2 border rounded"
        >
          {Object.keys(SHIPPING_COMPANIES_OFFICIAL).map((key) => (
            <option key={key} value={key}>
              {SHIPPING_COMPANIES_OFFICIAL[key].name}
            </option>
          ))}
        </select>
      </div>
      <div
        className="p-8 rounded-lg"
        style={{
          background: "var(--color-background)",
          border: "1px solid var(--color-border)",
        }}
      >
        <h2
          className="text-xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          This is a themed container
        </h2>
        <p style={{ color: "var(--color-text-secondary)" }}>
          This is some text in the themed container.
        </p>
        <button
          className="text-white font-bold py-2 px-4 rounded"
          style={{
            background: "var(--gradient)",
            padding: "var(--button-padding)",
            borderRadius: "var(--button-border-radius)",
            fontWeight: "var(--button-font-weight)",
            textTransform: "var(--button-text-transform)",
          }}
        >
          Themed Button
        </button>
      </div>
    </div>
  );
};

export default ThemeTestPage;
