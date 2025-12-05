import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import ThemeProvider from "./themes/ThemeContext.tsx";

// Register service worker for PWA (only in production)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered:', registration);

      // التحقق من وجود تحديثات
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // عرض إشعار التحديث
              if (confirm('يتوفر إصدار جديد. هل تريد إعادة التحميل؟')) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
              }
            }
          });
        }
      });
    } catch (error) {
      console.log('SW registration failed:', error);
      // Don't block app loading if SW fails
    }
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);

try {
  root.render(
    <HelmetProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
} catch (error) {
  console.error('Error rendering app:', error);
  // Fallback rendering
  rootElement.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    ">
      <h1 style="color: #D22128; margin-bottom: 16px;">خطأ في تحميل التطبيق</h1>
      <p style="color: #666; margin-bottom: 24px;">عذراً، حدث خطأ أثناء تحميل الصفحة</p>
      <button
        onclick="window.location.reload()"
        style="
          padding: 12px 24px;
          background-color: #D22128;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
        "
      >
        إعادة تحميل الصفحة
      </button>
    </div>
  `;
}
