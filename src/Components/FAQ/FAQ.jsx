"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
    {
        question: "How do I enroll in a course?",
        answer:
            "To enroll in a course, simply sign up for an account, browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. Follow the payment instructions to get instant access.",
    },
    {
        question: "Do I get a certificate after completion?",
        answer:
            "Yes! Upon successfully completing a course and passing any required assessments, you will receive a verified certificate that you can share on your resume or LinkedIn profile.",
    },
    {
        question: "Can I access the courses on mobile?",
        answer:
            "Absolutely. Our platform is fully responsive, allowing you to learn on the go from your smartphone, tablet, or desktop computer anytime, anywhere.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods depending on your region.",
    },
    {
        question: "Is there a refund policy?",
        answer:
            "Yes, we offer a 30-day money-back guarantee. If you are not satisfied with a course, you can request a full refund within 30 days of purchase.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-white dark:bg-zinc-900">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-zinc-900 dark:text-white">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-4 text-left bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition"
                            >
                                <span className="text-lg font-medium text-zinc-900 dark:text-white">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-blue-600" />
                                ) : (
                                    <FaChevronDown className="text-zinc-500" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="p-4 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
