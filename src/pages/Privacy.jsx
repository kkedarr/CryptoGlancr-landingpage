import React from "react";
import PrivacyIcon from "../assets/images/privacypolicyicon.png";

const PrivacyPolicy = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Header Section */}
      <div className="w-full bg-[#CFE9FB] py-20 text-[#04172C]">
        <div className="max-w-5xl mx-auto px-6 md:px-20">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <img
              src={PrivacyIcon}
              alt="Privacy policy icon"
              className="w-8 h-8"
            />
          </div>

          <p className="text-sm text-[#5B728A] mb-6">
            Effective Date: <span className="font-semibold">August, 2025</span>
          </p>

          <p className="text-base leading-relaxed text-[#0B1F33] max-w-3xl">
            At CryptoGlancr, your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you use our website and related services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-[#FFFFFF] py-16 text-[#0B1F33]">
        <div className="max-w-5xl mx-auto px-6 md:px-20 leading-relaxed">
          
          {/* Information we collect */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              1. Information we collect
            </h2>
            <p className="text-sm text-[#5B728A]">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Name and email address</li>
              <li>Waitlist or early-access submissions</li>
              <li>Basic device and browser information</li>
              <li>Usage analytics to improve performance</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              2. How we use your information
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Communicate product updates and launch notifications</li>
              <li>Improve website functionality and user experience</li>
              <li>Ensure platform security and prevent misuse</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">3. Data sharing</h2>
            <p className="text-sm text-[#5B728A]">
              We do not sell or rent personal data. Limited information may be
              shared with trusted service providers strictly for operational
              purposes.
            </p>
          </section>

          {/* Security */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">4. Security</h2>
            <p className="text-sm text-[#5B728A]">
              We apply reasonable technical and organizational measures to
              protect user data. However, no online system can be guaranteed
              100% secure.
            </p>
          </section>

          {/* Your rights */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">5. Your rights</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          {/* Data retention */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">6. Data retention</h2>
            <p className="text-sm text-[#5B728A]">
              We retain personal data only for as long as necessary to fulfill
              the purposes outlined in this policy.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              7. Cookies and tracking
            </h2>
            <p className="text-sm text-[#5B728A]">
              Cookies and analytics tools may be used to understand usage
              patterns and improve performance.
            </p>
          </section>

          {/* Updates */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              8. Updates to this policy
            </h2>
            <p className="text-sm text-[#5B728A]">
              This policy may be updated periodically. Changes will be reflected
              on this page.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-semibold text-lg mb-2">9. Contact us</h2>
            <p className="text-sm text-[#5B728A]">
              For questions regarding this Privacy Policy, contact:
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

export default PrivacyPolicy;
