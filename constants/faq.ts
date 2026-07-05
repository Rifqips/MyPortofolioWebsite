export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How long does a project usually take?",
    answer:
      "Most projects take between 1 and 4 weeks depending on complexity, requested features, and revisions.",
  },
  {
    id: 2,
    question: "Will I receive the source code?",
    answer:
      "Source code is not included in the standard package. It can be purchased separately as an optional add-on. Once the project is fully paid and the source code license has been purchased, full ownership of the source code will be transferred to you.",
  },
  {
    id: 3,
    question: "Can I request custom features?",
    answer:
      "Absolutely. Every project can be customized to meet your specific business requirements.",
  },
  {
    id: 4,
    question: "How does the payment process work?",
    answer:
      "Typically, a 50% deposit is required before development begins, with the remaining balance due upon project completion.",
  },
  {
    id: 5,
    question: "Do you provide maintenance?",
    answer:
      "Yes. Free maintenance covers bug fixes and technical support through a support queue. New feature requests are quoted separately.",
  },
  {
    id: 6,
    question: "Is the domain included?",
    answer:
      "A free domain is included with selected packages. Hosting options can also be arranged based on your requirements.",
  },
];