"use client";

import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────
const faqPages = [
  {
    id: "general",
    label: "General",
    faqs: [
      {
        question: "What is this platform and who is it for?",
        answer:
          "Our platform is designed for financial advisors, their teams, and clients. It helps manage financial plans, run calculators, track reports, and communicate — all in one place.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply register for a free account, complete your profile, and you'll be guided through an onboarding flow tailored to your role (Admin, Lead, Team Member, or Customer).",
      },
      {
        question: "Is my financial data secure?",
        answer:
          "Yes. We use industry-standard encryption and role-based access control (RBAC) to ensure only authorized users can access your data.",
      },
      {
        question: "Can I use the platform on mobile?",
        answer:
          "Absolutely. The platform is fully responsive and works across all devices — desktop, tablet, and mobile.",
      },
      {
        question: "What roles are available on the platform?",
        answer:
          "There are four roles: Admin (full access), Lead (team management), Team Member (operational access), and Customer (view personal data, reports, and calendar).",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Plans",
    faqs: [
      {
        question: "What plans are available?",
        answer:
          "We offer Free, Standard, Pro, and Enterprise plans. Each tier unlocks more features, tokens, and integrations based on your needs.",
      },
      {
        question: "What is included in the Free plan?",
        answer:
          "The Free plan includes 100 tokens per month, access to 2 integrations, and basic posting features — ideal for individuals getting started.",
      },
      {
        question: "How does the Enterprise plan work?",
        answer:
          "Enterprise plans are custom-scoped. Please book a call with our team to discuss your requirements and get a tailored quote.",
      },
      {
        question: "Can I upgrade or downgrade my plan anytime?",
        answer:
          "Yes. You can upgrade or downgrade your subscription at any time from your account settings. Changes take effect on the next billing cycle.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a 7-day refund policy for new paid subscriptions. Please contact support if you'd like to request one.",
      },
    ],
  },
  {
    id: "features",
    label: "Features & Tools",
    faqs: [
      {
        question: "What financial calculators are available?",
        answer:
          "We provide 5 calculators including retirement planning, investment growth, loan EMI, tax estimation, and net worth — all interactive and shareable.",
      },
      {
        question: "How do I schedule a call with an advisor?",
        answer:
          "Navigate to the 'Schedule a Call' page from the top navigation. Pick a date and time, fill in your details, and our team will confirm your appointment.",
      },
      {
        question: "Can I track my financial reports?",
        answer:
          "Yes. The 'My Reports' section provides visual charts and summaries of your financial activity, updated in real-time.",
      },
      {
        question: "What is 'My Workflows' and who can access it?",
        answer:
          "'My Workflows' is available to Admins, Leads, and Team Members. It lets you automate and manage task sequences and client follow-ups.",
      },
      {
        question: "How does the inbox work?",
        answer:
          "The inbox is available to all roles and centralizes all messages and notifications from advisors, clients, and the platform itself in one place.",
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-800 font-medium">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 py-4 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
          {answer}
        </div>
      )}
    </div>
  );
}

// ─── Main FAQ Component ───────────────────────────────────────────────────────
export default function FAQ() {
  const [activePage, setActivePage] = useState("general");
  const [search, setSearch] = useState("");

  const currentPage = faqPages.find((p) => p.id === activePage)!;

// Replace the existing filteredFaqs useMemo
const filteredFaqs = useMemo(() => {
  if (!search.trim()) return currentPage.faqs;
  const q = search.toLowerCase();
  return currentPage.faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q)
  );
}, [search, currentPage]);

// ADD this new cross-tab search result
const allFilteredFaqs = useMemo(() => {
  if (!search.trim()) return [];
  const q = search.toLowerCase();
  return faqPages.flatMap((page) =>
    page.faqs
      .filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      )
      .map((f) => ({ ...f, pageLabel: page.label }))
  );
}, [search]);


  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
  <h1 className="text-4xl font-bold dark:text-blue mb-3">
    Frequently Asked Questions
  </h1>
  <p className="text-gray-500 dark:text-gray-300 text-lg">
    Find answers to the most common questions from our customers.
  </p>
</div>


      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
        type="text"
        name="search"
        placeholder="Search questions..."
        id="search"
        value={search}                          // ← must be the state variable
        onChange={(e) => setSearch(e.target.value)}  // ← must update that same state
        className="w-full text-black pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {faqPages.map((page) => (
          <button
            key={page.id}
            onClick={() => {
              setActivePage(page.id);
              setSearch("");
            }}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
              activePage === page.id
                ? "bg-blue-600 text-white"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {page.label}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
  {search.trim() ? (
    allFilteredFaqs.length > 0 ? (
      allFilteredFaqs.map((faq, i) => (
        <div key={i}>
          {/* Show which tab the result is from */}
          {i === 0 ||
          allFilteredFaqs[i - 1].pageLabel !== faq.pageLabel ? (
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-2 mt-4">
              {faq.pageLabel}
            </p>
          ) : null}
          <AccordionItem question={faq.question} answer={faq.answer} />
        </div>
      ))
    ) : (
      <div className="text-center py-10">
        <p className="text-gray-400 mb-2">
          No results found for{" "}
          <span className="font-medium text-gray-600">
            &quot;{search}&quot;
          </span>
        </p>
        <p className="text-sm text-gray-400">
          Try a different keyword or{" "}
          <a href="/contact" className="text-blue-500 underline">
            contact us
          </a>{" "}
          directly.
        </p>
      </div>
    )
  ) : (
    filteredFaqs.map((faq, i) => (
      <AccordionItem key={i} question={faq.question} answer={faq.answer} />
    ))
  )}
</div>


      {/* CTA */}
      <div className="mt-12 text-center bg-blue-50 rounded-xl p-6">
        <p className="text-gray-700 font-medium mb-3">
          Still have questions? We&apos;re here to help.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
