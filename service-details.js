const serviceDetails = {
  "it-filings": {
    title: "IT Filings",
    image: "images/it-filings.svg",
    summary: "End-to-end income tax filing support for individuals, professionals, and businesses with clear guidance at every step.",
    points: [
      "Income tax return preparation and filing",
      "Review of income, deductions, and tax-saving details",
      "Support for notices, corrections, and follow-up requirements",
      "Guidance for timely compliance and record maintenance"
    ],
    documents: [
      "PAN and Aadhaar details",
      "Form 16 or income statements",
      "Bank statements and investment proofs",
      "Previous return copy, if available"
    ]
  },
  incorporation: {
    title: "Incorporation",
    image: "images/incorporation.svg",
    summary: "Business registration support for founders who want a clean, compliant start for their new venture.",
    points: [
      "Company, LLP, or firm registration guidance",
      "Name approval and incorporation documentation support",
      "Basic compliance setup after registration",
      "Coordination for required certificates and filings"
    ],
    documents: [
      "PAN and Aadhaar of promoters",
      "Address proof and photos",
      "Business address proof",
      "Proposed business name and activity details"
    ]
  },
  "financial-advisory": {
    title: "Financial Advisory",
    image: "images/financial-advisory.svg",
    summary: "Practical financial guidance for better planning, improved decision-making, and stronger business visibility.",
    points: [
      "Cash flow and expense review",
      "Budgeting and financial planning support",
      "Business performance analysis",
      "Guidance for investment and growth decisions"
    ],
    documents: [
      "Recent financial statements",
      "Bank statements",
      "Sales and expense records",
      "Loan or investment details, if any"
    ]
  },
  "gst-filings": {
    title: "GST Filings",
    image: "images/gst-filings.svg",
    summary: "GST filing support to help businesses stay compliant with returns, invoices, and tax payment timelines.",
    points: [
      "Monthly or quarterly GST return filing",
      "Sales and purchase data review",
      "Input tax credit reconciliation support",
      "GST payment and compliance reminders"
    ],
    documents: [
      "GST login details",
      "Sales and purchase invoices",
      "E-way bills, if applicable",
      "Previous GST return details"
    ]
  },
  "project-reporting": {
    title: "Detailed Project Reporting",
    image: "images/project-reporting.svg",
    summary: "Structured project reports for business planning, funding discussions, and performance tracking.",
    points: [
      "Project cost and revenue estimation",
      "Financial projections and assumptions",
      "Operational and market overview",
      "Report formatting for lenders or stakeholders"
    ],
    documents: [
      "Business profile",
      "Expected project cost",
      "Revenue and expense assumptions",
      "Existing financial records, if available"
    ]
  },
  "credit-monitoring": {
    title: "Credit Monitoring Assessment",
    image: "images/credit-monitoring.svg",
    summary: "Credit review support to identify risks, monitor financial behavior, and improve lending readiness.",
    points: [
      "Credit profile review",
      "Repayment behavior assessment",
      "Risk indicators and improvement areas",
      "Support for lending-readiness documentation"
    ],
    documents: [
      "Credit report, if available",
      "Loan statements",
      "Bank statements",
      "Income and repayment records"
    ]
  },
  "accounting-bookkeeping": {
    title: "Accounting & Bookkeeping",
    image: "images/accounting-bookkeeping.svg",
    summary: "Regular accounting and bookkeeping support to keep business records organized, accurate, and easy to review.",
    points: [
      "Daily or monthly bookkeeping",
      "Ledger and account reconciliation",
      "Expense and income categorization",
      "Financial record organization"
    ],
    documents: [
      "Bank statements",
      "Sales and purchase bills",
      "Expense receipts",
      "Previous accounts data, if available"
    ]
  },
  "pan-tan-registration": {
    title: "PAN & TAN Registration",
    image: "images/pan-tan-registration.svg",
    summary: "Registration support for PAN and TAN applications so individuals and businesses can complete essential tax formalities.",
    points: [
      "PAN application support",
      "TAN application support",
      "Correction or update guidance",
      "Application tracking and documentation assistance"
    ],
    documents: [
      "Identity proof",
      "Address proof",
      "Date of birth or incorporation proof",
      "Applicant photo and contact details"
    ]
  },
  "tds-returns": {
    title: "TDS Returns",
    image: "images/tds-returns.svg",
    summary: "TDS return preparation and filing support for businesses handling deductions and statutory reporting.",
    points: [
      "Quarterly TDS return filing",
      "Challan and deduction data review",
      "Form 16 and Form 16A support",
      "Correction return assistance"
    ],
    documents: [
      "TAN details",
      "Deductee PAN details",
      "TDS challans",
      "Salary or payment deduction records"
    ]
  },
  "business-loans": {
    title: "Business Loan Assistance",
    image: "images/business-loans.svg",
    summary: "Documentation and financial preparation support for business loan applications and funding discussions.",
    points: [
      "Loan document checklist preparation",
      "Financial statement review",
      "Project report and proposal support",
      "Coordination support for lender requirements"
    ],
    documents: [
      "KYC documents",
      "Bank statements",
      "ITR and financial statements",
      "Business registration and project details"
    ]
  },
  "audit-support": {
    title: "Audit Support",
    image: "images/audit-support.svg",
    summary: "Organized audit preparation support to make documentation, records, and review processes smoother.",
    points: [
      "Audit document preparation",
      "Ledger and statement reconciliation",
      "Supporting schedule organization",
      "Follow-up support for audit queries"
    ],
    documents: [
      "Books of accounts",
      "Bank statements",
      "Invoices and vouchers",
      "Previous audit reports, if any"
    ]
  },
  "tax-planning": {
    title: "Tax Planning",
    image: "images/tax-planning.svg",
    summary: "Tax planning support for individuals and businesses looking to manage obligations with better structure and foresight.",
    points: [
      "Income and deduction review",
      "Advance tax guidance",
      "Business tax planning support",
      "Compliance calendar planning"
    ],
    documents: [
      "Income details",
      "Investment and deduction proofs",
      "Business expense records",
      "Previous tax return copy"
    ]
  }
};

const serviceOrder = [
  "it-filings",
  "incorporation",
  "financial-advisory",
  "gst-filings",
  "project-reporting",
  "credit-monitoring",
  "accounting-bookkeeping",
  "pan-tan-registration",
  "tds-returns",
  "business-loans",
  "audit-support",
  "tax-planning"
];

const params = new URLSearchParams(window.location.search);
const initialServiceId = params.get("service") || "it-filings";
let activeServiceId = serviceDetails[initialServiceId] ? initialServiceId : "it-filings";

const title = document.getElementById("service-title");
const summary = document.getElementById("service-summary");
const image = document.getElementById("service-image");
const points = document.getElementById("service-points");
const documents = document.getElementById("service-documents");
const pickerList = document.getElementById("service-picker-list");
const showcaseTitle = document.getElementById("showcase-service-title");
const showcaseSummary = document.getElementById("showcase-service-summary");
const showcaseImage = document.getElementById("showcase-service-image");
const showcasePoints = document.getElementById("showcase-service-points");
const showcaseDocuments = document.getElementById("showcase-service-documents");
const showcaseList = document.getElementById("service-showcase-list");
const featuredCard = document.querySelector(".featured-service-card");

function fillList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function updatePickerState() {
  document.querySelectorAll(".service-picker-card").forEach((card) => {
    const isActive = card.dataset.serviceId === activeServiceId;
    card.classList.toggle("active", isActive);
    card.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function updateShowcaseState() {
  document.querySelectorAll(".showcase-service-option").forEach((card) => {
    const isActive = card.dataset.serviceId === activeServiceId;
    card.classList.toggle("active", isActive);
    card.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function setActiveService(serviceId) {
  const service = serviceDetails[serviceId] || serviceDetails["it-filings"];
  activeServiceId = serviceDetails[serviceId] ? serviceId : "it-filings";
  return service;
}

function renderService(serviceId, shouldUpdateUrl = true) {
  if (!title || !summary || !image || !points || !documents) return;

  const service = setActiveService(serviceId);

  document.title = `MS Services | ${service.title}`;
  title.textContent = service.title;
  summary.textContent = service.summary;
  image.src = service.image;
  image.alt = `${service.title} illustration`;
  fillList(points, service.points);
  fillList(documents, service.documents);

  if (shouldUpdateUrl) {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("service", activeServiceId);
    window.history.pushState({ serviceId: activeServiceId }, "", nextUrl);
  }

  updatePickerState();
}

function renderShowcase(serviceId) {
  if (!showcaseTitle || !showcaseSummary || !showcaseImage || !showcasePoints || !showcaseDocuments) return;

  const service = setActiveService(serviceId);
  showcaseTitle.textContent = service.title;
  showcaseSummary.textContent = service.summary;
  showcaseImage.src = service.image;
  showcaseImage.alt = `${service.title} illustration`;
  fillList(showcasePoints, service.points);
  fillList(showcaseDocuments, service.documents);
  if (featuredCard) {
    featuredCard.classList.remove("is-changing");
    void featuredCard.offsetWidth;
    featuredCard.classList.add("is-changing");
  }
  renderShowcaseList();
}

function renderPicker() {
  if (!pickerList) return;

  pickerList.innerHTML = "";
  serviceOrder.forEach((serviceId) => {
    const service = serviceDetails[serviceId];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "service-picker-card";
    card.dataset.serviceId = serviceId;
    card.innerHTML = `
      <img src="${service.image}" alt="" aria-hidden="true">
      <span>${service.title}</span>
    `;
    card.addEventListener("click", () => {
      renderService(serviceId);
    });
    pickerList.appendChild(card);
  });
}

function renderShowcaseList() {
  if (!showcaseList) return;

  showcaseList.innerHTML = "";
  const activeIndex = serviceOrder.indexOf(activeServiceId);
  const orderedServices = serviceOrder
    .slice(activeIndex + 1)
    .concat(serviceOrder.slice(0, activeIndex));

  orderedServices.forEach((serviceId, index) => {
    const service = serviceDetails[serviceId];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "showcase-service-option";
    card.dataset.serviceId = serviceId;
    card.style.setProperty("--card-index", index);
    card.innerHTML = `
      <img src="${service.image}" alt="" aria-hidden="true">
      <span>${service.title}</span>
    `;
    card.addEventListener("click", () => {
      renderShowcase(serviceId);
    });
    showcaseList.appendChild(card);
  });

  updateShowcaseState();
}

if (title && summary && image && points && documents) {
  renderPicker();
  renderService(activeServiceId, false);
}

if (showcaseTitle && showcaseSummary && showcaseImage && showcasePoints && showcaseDocuments) {
  renderShowcaseList();
  renderShowcase(activeServiceId);
}

window.addEventListener("popstate", () => {
  const nextParams = new URLSearchParams(window.location.search);
  const nextServiceId = nextParams.get("service") || "it-filings";
  renderService(nextServiceId, false);
});
