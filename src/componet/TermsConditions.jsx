import React from 'react';

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>

      <p className="mb-6 text-sm text-gray-600">Last updated: January 04, 2026</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="leading-relaxed">
          By accessing and using this website or application (the "Service"), you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Service.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Use of the Service</h2>
        <p className="leading-relaxed">
          You agree to use the Service only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Service.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
        <p className="leading-relaxed">
          All content, features, and functionality on the Service, including text, graphics, logos, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
        <p className="leading-relaxed">
          If the Service requires you to create an account, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="leading-relaxed">
          To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
        <p className="leading-relaxed">
          We reserve the right to update or modify these Terms at any time. We will notify you of significant changes by posting the new terms on this page. Your continued use of the Service after changes constitutes acceptance of the updated terms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
        <p className="leading-relaxed">
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="leading-relaxed">
          If you have any questions about these Terms and Conditions, please contact us at:{' '}
          <a href="mailto:support@example.com" className="text-blue-600 underline">
            support@example.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsConditions;