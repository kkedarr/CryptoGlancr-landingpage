import React from "react";
import TermsIcon from "../assets/images/termsofserviceicon.png";

const TermsOfService = () => {
  return (
    <div className="w-full flex flex-col font-geist">
      {/* Header Section */}
      <div className="w-full bg-[#CFE9FB] py-20 text-[#04172C]">
        <div className="max-w-5xl mx-auto px-6 md:px-20">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <img
              src={TermsIcon}
              alt="Terms of service icon"
              className="w-8 h-8"
            />
          </div>

          <p className="text-sm text-[#5B728A] mb-6">
            Effective Date: <span className="font-semibold">August, 2025</span>
          </p>

          <p className="text-base leading-relaxed text-[#0B1F33] max-w-3xl">
            Welcome to CryptoGlancr. By accessing or using our website and related
            services, you agree to be bound by these Terms of Service. Please read
            them carefully.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-[#FFFFFF] py-16 text-[#0B1F33]">
        <div className="max-w-5xl mx-auto px-6 md:px-20 leading-relaxed">
          
          {/* Eligibility */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">1. Eligibility</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>You must be at least 18 years old to use our services.</li>
              <li>You agree to provide accurate and complete information.</li>
            </ul>
          </section>

          {/* Account & Security */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              2. Account registration & security
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>You are responsible for safeguarding your access credentials.</li>
              <li>
                Notify us immediately if you suspect unauthorized use or access.
              </li>
            </ul>
          </section>

          {/* Services */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">3. Services</h2>
            <p className="text-sm text-[#5B728A] mb-2">
              CryptoGlancr may provide:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Digital wallet and financial tools</li>
              <li>Cross-border payment features</li>
              <li>Early access programs and beta features</li>
            </ul>
          </section>

          {/* Compliance */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              4. Compliance & verification
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                Certain features may require identity or compliance checks.
              </li>
              <li>
                Failure to comply with applicable regulations may limit access.
              </li>
            </ul>
          </section>

          {/* Prohibited Use */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">5. Prohibited use</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Illegal or fraudulent activities</li>
              <li>Abuse, hacking, or disruption of the platform</li>
              <li>Violation of applicable laws or regulations</li>
            </ul>
          </section>

          {/* Transactions */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">6. Transactions</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                Transaction details, fees, or limits will be shown where applicable.
              </li>
              <li>
                You are responsible for verifying transaction information before
                confirmation.
              </li>
            </ul>
          </section>

          {/* Risk Disclosure */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              7. Risk & disclaimer
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Services are provided on an “as-is” basis.</li>
              <li>We do not guarantee uninterrupted or error-free operation.</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              8. Limitation of liability
            </h2>
            <p className="text-sm text-[#5B728A]">
              CryptoGlancr shall not be liable for indirect, incidental, or
              consequential damages arising from use of the platform.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">9. Termination</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                We may suspend or terminate access for violations of these Terms.
              </li>
              <li>You may discontinue use at any time.</li>
            </ul>
          </section>

          {/* Changes */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              10. Changes to these terms
            </h2>
            <p className="text-sm text-[#5B728A]">
              We may update these Terms periodically. Continued use constitutes
              acceptance of the revised terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">11. Governing law</h2>
            <p className="text-sm text-[#5B728A]">
              These Terms are governed by applicable laws in the jurisdictions
              where our services are offered.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-semibold text-lg mb-2">12. Contact us</h2>
            <p className="text-sm text-[#5B728A]">
              If you have questions about these Terms, contact us at:
              <br />
              <span className="font-medium text-[#04172C]">
                support@cryptoglancr.com
              </span>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
