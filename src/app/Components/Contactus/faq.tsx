import  { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [visibleFAQ, setVisibleFAQ] = useState<number | null>(null); // Track which FAQ is visible

  const toggleFAQ = (index: number) => {
    setVisibleFAQ(visibleFAQ === index ? null : index); // Toggle visibility
  };

  const faqs = [
    {
      question: "How can I contact the Sales team at InsideFPV?",
      answer: "You can contact the sales team via email at sales@insidefpv.com or call +1234567890.",
    },
    {
      question: "How should I get in touch regarding partnership opportunities or collaborations with InsideFPV?",
      answer: "For partnership inquiries, please email partnerships@insidefpv.com.",
    },
    {
      question: "I have inquiries related to marketing strategies or social media engagements. How can I contact the Marketing team?",
      answer: "Please contact our marketing team via marketing@insidefpv.com.",
    },
    {
      question: "Who should I contact for Human Resources (HR) related matters at InsideFPV?",
      answer: "For HR matters, reach out to hr@insidefpv.com.",
    },
    {
      question: "Can I send general inquiries or feedback not specified for a specific team?",
      answer: "Yes, you can email us at support@insidefpv.com for general inquiries.",
    },
    {
      question: "How quickly can I expect a response after sending an email to one of the designated team addresses?",
      answer: "We typically respond within 2-3 business days.",
    },
    {
      question: "Are there alternative ways to contact the teams besides email?",
      answer: "Yes, you can call us directly at +1234567890 during business hours.",
    },
    {
      question: "What information should I include in my email to ensure a quicker and more accurate response?",
      answer: "Please include your full name, order number (if applicable), and a detailed description of your inquiry.",
    },
    {
      question: "If I don’t receive a response within the specified time frame, what should I do?",
      answer: "You can follow up by emailing support@insidefpv.com or calling our hotline.",
    },
  ];

  return (
    <div className="faq-container">
   <h2 style={{ color: 'black' }}>FAQs</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${visibleFAQ === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            <h4>{faq.question}</h4>
            <span className="faq-icon">{visibleFAQ === index ? "-" : "+"}</span>
          </div>
          <div className="faq-answer">
            {visibleFAQ === index && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;
