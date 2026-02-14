import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Privacy Policy - IMQA | AI-Powered Test Automation",
  description:
    "Learn how IMQA collects, uses, and protects your data. Our privacy policy covers the IMQA Chrome extension and web platform.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "When you use the IMQA Chrome extension and platform, we collect the following types of information:",
    ],
    items: [
      "Session Details: Browser session information such as page URLs, DOM structure, element selectors, and user interaction sequences captured during test recording sessions.",
      "Account Information: Email address and name provided during account registration.",
      "Usage Data: How you interact with the IMQA platform, including features used, test runs executed, and session timestamps.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect to:",
    ],
    items: [
      "Provide, operate, and improve the IMQA QA testing platform.",
      "Generate, execute, and maintain automated tests based on your recorded sessions.",
      "Analyze usage patterns to improve our AI models and product experience.",
      "Communicate with you about your account, updates, and support requests.",
    ],
  },
  {
    title: "3. Data Storage & Security",
    content: [
      "We take the security of your data seriously:",
    ],
    items: [
      "All data is encrypted in transit (TLS 1.2+) and at rest (AES-256).",
      "Session recordings and test data are stored in secure, SOC 2 compliant infrastructure.",
      "We do not store personal browsing data outside of explicitly recorded test sessions.",
      "Video recordings are retained for 30 days by default. Enterprise plans support custom retention policies.",
      "Access to production data is restricted to authorized personnel and subject to audit logging.",
    ],
  },
  {
    title: "4. Chrome Extension Data",
    content: [
      "The IMQA Chrome extension specifically:",
    ],
    items: [
      "Only captures session data when you explicitly start a recording session.",
      "Does not run in the background or collect data when not actively recording.",
      "Does not capture passwords, payment information, or data from fields marked as sensitive.",
      "Transmits recorded session data to IMQA servers over encrypted connections only.",
    ],
  },
  {
    title: "5. Third-Party Sharing",
    content: [
      "We do not sell, trade, or otherwise transfer your personal information to third parties. We may share data only in the following circumstances:",
    ],
    items: [
      "With service providers who assist in operating our platform, subject to strict data processing agreements.",
      "When required by law, regulation, or legal process.",
      "To protect the rights, safety, or property of IMQA, our users, or the public.",
    ],
  },
  {
    title: "6. Your Rights & Data Deletion",
    content: [
      "You have the following rights regarding your data:",
    ],
    items: [
      "Access: Request a copy of the data we hold about you.",
      "Correction: Request correction of inaccurate data.",
      "Deletion: Request deletion of your account and all associated data. We will process deletion requests within 30 days.",
      "Export: Request an export of your test data in a portable format.",
      "Opt-out: Disable data collection by uninstalling the Chrome extension or adjusting settings in your account.",
    ],
  },
  {
    title: "7. Cookies & Tracking",
    content: [
      "Our website uses essential cookies required for authentication and platform functionality. We do not use third-party advertising cookies or cross-site tracking.",
    ],
    items: [],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the \"Last updated\" date. Continued use of the service after changes constitutes acceptance of the revised policy.",
    ],
    items: [],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have questions about this privacy policy or your data, contact us at:",
    ],
    items: [
      "Email: hello@imqa.ai",
      "Website: https://imqa.ai",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#121212" }}>
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-sm font-medium mb-4"
            style={{ color: "#d4a574" }}
          >
            Legal
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "rgba(250, 249, 246, 0.95)" }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-lg"
            style={{ color: "rgba(250, 249, 246, 0.5)" }}
          >
            Last updated: February 14, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(250, 249, 246, 0.7)" }}
          >
            At IMQA (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are
            committed to protecting your privacy. This privacy policy explains
            how we collect, use, and safeguard your information when you use the
            IMQA platform, including our Chrome extension and web application.
          </p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: "rgba(250, 249, 246, 0.9)" }}
              >
                {section.title}
              </h2>
              {section.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "rgba(250, 249, 246, 0.7)" }}
                >
                  {paragraph}
                </p>
              ))}
              {section.items.length > 0 && (
                <ul className="space-y-3 ml-6">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-base leading-relaxed list-disc"
                      style={{ color: "rgba(250, 249, 246, 0.6)" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
