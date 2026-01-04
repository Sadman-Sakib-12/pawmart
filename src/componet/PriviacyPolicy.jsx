import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="bg-base-100 rounded-3xl shadow-2xl p-8 md:p-12 border border-base-300">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-base-content/70 text-lg">
            Last updated: January 04, 2026
          </p>
        </div>

    
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
          <p className="text-base-content/80 leading-relaxed">
            Welcome to <span className="font-bold text-primary">PawMart</span> 🐾 — a trusted marketplace for pet lovers to buy, sell, and adopt pets and pet products.
          </p>
          <p className="mt-4 text-base-content/80 leading-relaxed">
            We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
          </p>
        </section>

     
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-3 text-base-content/80 leading-relaxed">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and profile photo (if provided during registration).</li>
            <li><strong>Account Information:</strong> Login credentials (encrypted), role (buyer/seller), and preferences.</li>
            <li><strong>Listing Data:</strong> Pet or product details (name, price, images, location, description) you post.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent, and device information.</li>
            <li><strong>Cookies & Tracking:</strong> We use cookies to improve user experience and analytics.</li>
          </ul>
        </section>

 
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-3 text-base-content/80 leading-relaxed">
            <li>To create and manage your account</li>
            <li>To facilitate buying, selling, and communication between users</li>
            <li>To display your listings and profile to other users</li>
            <li>To send important updates, notifications, and promotional emails (you can opt-out)</li>
            <li>To improve our platform, fix bugs, and analyze usage</li>
            <li>To prevent fraud and ensure safety</li>
          </ul>
        </section>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">4. Data Sharing</h2>
          <p className="text-base-content/80 leading-relaxed">
            We do <span className="font-bold">NOT</span> sell your personal data to third parties.
          </p>
          <p className="mt-4 text-base-content/80 leading-relaxed">
            We may share your information only in these cases:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-base-content/80">
            <li>With other users (e.g., your name and contact for transactions)</li>
            <li>With service providers (hosting, analytics, email services)</li>
            <li>For legal reasons (if required by law or to protect rights)</li>
          </ul>
        </section>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">5. Data Security</h2>
          <p className="text-base-content/80 leading-relaxed">
            We use industry-standard security measures including encryption, secure servers, and Firebase authentication to protect your data. However, no system is 100% secure, so we cannot guarantee absolute security.
          </p>
        </section>

      
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
          <ul className="list-disc list-inside space-y-3 text-base-content/80 leading-relaxed">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of marketing emails</li>
            <li>Request data export or deletion (contact us at support@pawmart.com)</li>
          </ul>
        </section>


        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to This Policy</h2>
          <p className="text-base-content/80 leading-relaxed">
            We may update this policy from time to time. We will notify you of major changes via email or website announcement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
          <p className="text-base-content/80 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-4 font-bold text-primary">
            support@pawmart.com
          </p>
        </section>

 
        <div className="mt-16 text-center">
          <p className="text-base-content/60 italic">
            Thank you for trusting PawMart with your pet-loving journey 
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;