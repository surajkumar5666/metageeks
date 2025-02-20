import React from "react";
import Footer from "@/components/footer/Footer";
import Header1 from "@/components/header/Header1";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header1 />
      <div className="error-page">
        <div className="container text-center">
          <div className="error-content">
            <h2>Privacy Policy</h2>
            <p>
              At Metageeks Technologies Pvt Ltd, we are committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services. Please read this policy carefully to
              understand our views and practices regarding your personal data
              and how we will treat it.
            </p>
          </div>
          <h1 class="fs-4 mt-4">1. Information We Collect</h1>
          <p>
            We collect several types of information from and about users of our
            website and services, including:
          </p>
          <ul>
            <li>
              <strong>Personal Identification Information:</strong> This
              includes, but is not limited to, your name, email address, phone
              number, and postal address.
            </li>
            <li>
              <strong>Non-Personal Identification Information:</strong> This may
              include your IP address, browser type, operating system, and the
              dates and times of your visits to our website.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website and services, including the pages you visit, the time
              spent on those pages, and other diagnostic data.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              and similar tracking technologies to track the activity on our
              website and hold certain information.
            </li>
          </ul>

          <h1 class="fs-4 mt-4">2. How We Use Your Information</h1>
          <p>
            Metageeks Technologies Pvt Ltd uses the collected data for various
            purposes:
          </p>
          <ul>
            <li>
              <strong>To Provide and Maintain Our Services:</strong> Ensuring
              our services operate efficiently and effectively.
            </li>
            <li>
              <strong>To Improve Our Services:</strong> Using feedback and usage
              data to enhance and optimize our offerings.
            </li>
            <li>
              <strong>To Communicate With You:</strong> Sending newsletters,
              updates, and other information related to our services. You can
              opt out of receiving these communications at any time.
            </li>
            <li>
              <strong>To Process Transactions:</strong> Managing payments and
              orders made through our website.
            </li>
            <li>
              <strong>To Enforce Our Terms, Conditions, and Policies:</strong>{" "}
              Ensuring compliance with our terms of service and other policies.
            </li>
          </ul>

          <h1 class="fs-4 mt-4">3. How We Share Your Information</h1>
          <p>
            We may share your information with third parties only in the ways
            that are described in this Privacy Policy:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share information with
              third-party vendors, consultants, and other service providers who
              need access to such information to perform services on our behalf.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required to do so by law or in response to valid
              requests by public authorities.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of all or a portion of our assets, your
              information may be transferred as part of that transaction.
            </li>
          </ul>

          <h1 class="fs-4 mt-4">4. Data Security</h1>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we strive to use
            commercially acceptable means to protect your personal data, we
            cannot guarantee its absolute security.
          </p>

          <h1 class="fs-4 mt-4">5. Data Retention</h1>
          <p>
            We will retain your personal information only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use your personal information to the extent necessary to
            comply with our legal obligations, resolve disputes, and enforce our
            policies.
          </p>

          <h1 class="fs-4 mt-4">6. Your Data Protection Rights</h1>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul>
            <li>
              <strong>Access:</strong> The right to request copies of your
              personal data.
            </li>
            <li>
              <strong>Correction:</strong> The right to request that we correct
              any information you believe is inaccurate.
            </li>
            <li>
              <strong>Deletion:</strong> The right to request that we delete
              your personal data, under certain conditions.
            </li>
            <li>
              <strong>Restriction:</strong> The right to request that we
              restrict the processing of your personal data, under certain
              conditions.
            </li>
            <li>
              <strong>Objection:</strong> The right to object to our processing
              of your personal data, under certain conditions.
            </li>
            <li>
              <strong>Data Portability:</strong> The right to request that we
              transfer the data we have collected to another organization, or
              directly to you, under certain conditions.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at the
            information provided below.
          </p>

          <h1 class="fs-4 mt-4">7. Children's Privacy</h1>
          <p>
            Our services are not intended for use by children under the age of
            13. We do not knowingly collect personally identifiable information
            from children under 13. If we become aware that we have collected
            personal data from a child under age 13 without verification of
            parental consent, we take steps to remove that information from our
            servers.
          </p>

          <h1 class="fs-4 mt-4">8. Changes to This Privacy Policy</h1>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Effective Date" at the top. You are advised to
            review this Privacy Policy periodically for any changes. Changes to
            this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
