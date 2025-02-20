import React from "react";
import Footer from "@/components/footer/Footer";
import Header1 from "@/components/header/Header1";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header1 />
      <div className="error-page">
        <div className="container">
          <div className="error-content">
            <h2>Terms & Conditions</h2>
            <p>
              Welcome to Metageeks Technologies Pvt Ltd. By accessing or using
              our website and services, you agree to comply with and be bound by
              the following terms and conditions. Please read them carefully
              before using our services. If you do not agree with these terms,
              you should not use our website or services.
            </p>
            <h3 class="fs-4">1. Acceptance of Terms</h3>
            <p>
              By accessing our website, using our services, or engaging with our
              content, you agree to these Terms & Conditions, as well as our
              Privacy Policy. These terms apply to all visitors, users, and
              others who access or use our services.
            </p>

            <h3 class="fs-4">2. Services</h3>
            <p>
              Metageeks Technologies Pvt Ltd provides various services including
              but not limited to software development, UI/UX design, ecommerce
              development, and blockchain development. We reserve the right to
              modify or discontinue any service at any time without notice.
            </p>

            <h3 class="fs-4">3. User Responsibilities</h3>
            <p>
              <strong>Accurate Information:</strong> You agree to provide
              accurate, current, and complete information as requested during
              the service process.
            </p>
            <p>
              <strong>Account Security:</strong> You are responsible for
              maintaining the confidentiality of your account and password and
              for restricting access to your computer. You agree to accept
              responsibility for all activities that occur under your account or
              password.
            </p>

            <h3 class="fs-4">4. Intellectual Property</h3>
            <p>
              All content included on our website and services, such as text,
              graphics, logos, images, and software, is the property of
              Metageeks Technologies Pvt Ltd or its content suppliers and
              protected by international copyright laws. Unauthorized use of any
              materials on this site is strictly prohibited.
            </p>

            <h3 class="fs-4">5. Use of Services</h3>
            <p>
              You agree not to use our services for any unlawful or prohibited
              purpose. You may not use our services in a way that could damage,
              disable, overburden, or impair our servers or networks, or
              interfere with any other party's use and enjoyment of our
              services.
            </p>

            <h3 class="fs-4">6. Termination</h3>
            <p>
              We reserve the right to terminate or suspend access to our
              services immediately, without prior notice or liability, for any
              reason whatsoever, including without limitation if you breach the
              Terms.
            </p>

            <h3 class="fs-4">7. Limitation of Liability</h3>
            <p>
              In no event shall Metageeks Technologies Pvt Ltd, nor its
              directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your use or inability to use our services.</li>
              <li>
                Any unauthorized access to or use of our servers and/or any
                personal information stored therein.
              </li>
              <li>
                Any interruption or cessation of transmission to or from our
                services.
              </li>
            </ul>

            <h3 class="fs-4 mt-4">8. Governing Law</h3>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of New Delhi, India, without regard to its conflict of law
              provisions. Our failure to enforce any right or provision of these
              Terms will not be considered a waiver of those rights.
            </p>

            <h3 class="fs-4">9. Changes to Terms & Conditions</h3>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 10 days'
              notice prior to any new terms taking effect. By continuing to
              access or use our services after those revisions become effective,
              you agree to be bound by the revised terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
