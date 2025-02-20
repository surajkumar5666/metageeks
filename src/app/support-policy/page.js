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
            <h2>Support Policy </h2>
            <p>
              At Metageeks Technologies Pvt Ltd, we are committed to providing
              exceptional support to ensure your satisfaction and the optimal
              performance of our services. Our support policy outlines the
              procedures and expectations for our clients to receive assistance.
            </p>

            <section>
              <h3 className="fs-4">Support Hours</h3>
              <ul>
                <li>Monday to Friday: 9:00 AM to 6:00 PM IST</li>
                <li>Saturday and Sunday: Closed</li>
                <li>Public Holidays: Closed</li>
              </ul>
            </section>
            <section>
              <h3 className="fs-4 mt-5">Turnaround Time (TAT)</h3>
              <p>
                Our standard turnaround time (TAT) for support requests is 24
                hours during business days. Requests submitted outside of our
                regular support hours will be addressed on the next business
                day.
              </p>
            </section>
            <section>
              <h3 className="fs-2">How to Reach Us</h3>
              <h3 className="fs-4">Email Support</h3>
              <p>
                Email us at{" "}
                <a href="mailto:support@metageeks.com">support@metageeks.com</a>{" "}
                with detailed information about your issue. Please include your
                name, contact information, and any relevant details to help us
                address your concern promptly.
              </p>
              <h3 className="fs-4">Online Support Portal</h3>
              <p>
                Visit our Support Portal to submit a ticket. Track the status of
                your request and communicate directly with our support team.
              </p>
            </section>
            <section>
              <h3 className="fs-2">Support Process</h3>
              <h3 className="fs-4">Submit a Request</h3>
              <p>
                Provide a clear and detailed description of your issue. Attach
                any relevant screenshots or documents to assist us in
                understanding and resolving your problem.
              </p>
              <h3 className="fs-4">Acknowledgment</h3>
              <p>
                Upon receiving your request, we will send an acknowledgment
                email within 24 hours during business days. This email will
                include your ticket number and an estimated time for resolution.
              </p>
              <h3 className="fs-4">Resolution</h3>
              <p>
                Our support team will investigate and work on resolving your
                issue. You may be contacted for additional information if
                necessary. Once resolved, we will notify you via email or
                through the support portal.
              </p>
              <h3 className="fs-4">Follow-Up</h3>
              <p>
                If you have any further questions or need additional assistance
                after the issue is resolved, please respond to the ticket or
                contact us through the provided channels.
              </p>
            </section>
            <section>
              <h3 className="fs-2">Response Times</h3>
              <ul>
                <li>
                  <strong>Critical Issues</strong> (e.g., system outages, severe
                  bugs): Initial response within 4 hours during business days.
                </li>
                <li>
                  <strong>High Priority</strong> (e.g., major functionality
                  issues, urgent requests): Initial response within 8 hours
                  during business days.
                </li>
                <li>
                  <strong>Normal Priority</strong> (e.g., general inquiries,
                  minor issues): Initial response within 24 hours during
                  business days.
                </li>
              </ul>
            </section>
            <section>
              <h3 className="fs-2 mt-4">Feedback and Escalation</h3>
              <p>
                Your feedback is valuable to us. If you are not satisfied with
                the resolution or the handling of your request, you can escalate
                the issue by contacting our support manager at{" "}
                <a href="mailto:support@metageeks.com">support@metageeks.com</a>
                . We strive to continuously improve our support services based
                on your feedback.
              </p>
            </section>
            <footer>
              <p>
                Thank you for choosing Metageeks Technologies Pvt Ltd. We are
                dedicated to providing you with reliable and efficient support
                to meet your needs.
              </p>
            </footer>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
