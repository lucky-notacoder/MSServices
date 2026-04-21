const blogDetails = {
  "tax-saving-tips": {
    title: "Top Tax Saving Tips for Individuals in 2024",
    image: "images/tax-saving.svg",
    summary: "Discover effective strategies to minimize your tax liability and maximize savings through deductions and investments.",
    content: [
      "Invest in tax-saving schemes like ELSS, PPF, and NPS",
      "Claim deductions under Section 80C, 80D, and 80G",
      "Optimize your salary structure for tax benefits",
      "Consider home loan interest deductions",
      "Plan your investments strategically throughout the year"
    ],
    date: "2024-04-15",
    readTime: "5 min read"
  },
  "gst-compliance": {
    title: "GST Compliance: What Every Business Owner Should Know",
    image: "images/gst-filings.svg",
    summary: "A comprehensive guide to staying compliant with GST regulations and avoiding penalties.",
    content: [
      "Understand your GST registration requirements",
      "File returns on time to avoid late fees",
      "Maintain accurate records of all transactions",
      "Claim input tax credit correctly",
      "Stay updated with GST rate changes and notifications"
    ],
    date: "2024-04-10",
    readTime: "7 min read"
  },
  "business-incorporation": {
    title: "Step-by-Step Guide to Business Incorporation in India",
    image: "images/incorporation.svg",
    summary: "Learn the process of registering your business and the documents required for a smooth incorporation.",
    content: [
      "Choose the right business structure (Company, LLP, Partnership)",
      "Reserve your company name",
      "Prepare and file incorporation documents",
      "Obtain necessary licenses and registrations",
      "Set up basic compliance frameworks"
    ],
    date: "2024-04-05",
    readTime: "8 min read"
  },
  "financial-planning": {
    title: "Financial Planning for Small Business Owners",
    image: "images/financial-advisory.svg",
    summary: "Essential financial planning strategies to ensure your business's long-term success and stability.",
    content: [
      "Create a comprehensive business budget",
      "Build an emergency fund for your business",
      "Plan for taxes and cash flow management",
      "Invest in business insurance",
      "Regular financial health check-ups"
    ],
    date: "2024-03-30",
    readTime: "6 min read"
  },
  "income-tax-filing": {
    title: "Income Tax Filing Made Simple: A Beginner's Guide",
    image: "images/it-filings.svg",
    summary: "Everything you need to know about filing your income tax returns accurately and on time.",
    content: [
      "Determine your tax filing eligibility",
      "Gather all necessary documents",
      "Choose between online and offline filing",
      "Understand different tax slabs and rates",
      "Claim all eligible deductions and exemptions"
    ],
    date: "2024-03-25",
    readTime: "4 min read"
  },
  "startup-funding": {
    title: "Funding Options for Startups in India",
    image: "images/business-loans.svg",
    summary: "Explore various funding avenues available for new businesses and entrepreneurs in India.",
    content: [
      "Bootstrap your startup initially",
      "Apply for government schemes and grants",
      "Seek angel investors and venture capital",
      "Consider bank loans and NBFCs",
      "Crowdfunding and alternative financing options"
    ],
    date: "2024-03-20",
    readTime: "9 min read"
  },
  "cma-study-mcqs": {
    title: "CMA Study: Practice MCQs for Exam Revision",
    image: "images/financial-advisory.svg",
    summary: "Use focused multiple choice questions to revise accounting, costing, and taxation concepts for CMA preparation.",
    content: [
      "Practice chapter-wise MCQs for Financial Accounting, Cost Accounting, and Taxation",
      "Check answers instantly with short explanations",
      "Use repeated attempts to identify weak areas",
      "Add more questions to the study bank as your syllabus grows",
      "Visit the CMA Study page to start practicing"
    ],
    date: "2026-04-21",
    readTime: "3 min read"
  }
};

const blogOrder = [
  "tax-saving-tips",
  "gst-compliance",
  "business-incorporation",
  "financial-planning",
  "income-tax-filing",
  "startup-funding",
  "cma-study-mcqs"
];

const params = new URLSearchParams(window.location.search);
const initialBlogId = params.get("blog") || "tax-saving-tips";
let activeBlogId = blogDetails[initialBlogId] ? initialBlogId : "tax-saving-tips";

const title = document.getElementById("blog-title");
const summary = document.getElementById("blog-summary");
const image = document.getElementById("blog-image");
const content = document.getElementById("blog-content");
const date = document.getElementById("blog-date");
const readTime = document.getElementById("blog-read-time");
const showcaseTitle = document.getElementById("showcase-blog-title");
const showcaseSummary = document.getElementById("showcase-blog-summary");
const showcaseImage = document.getElementById("showcase-blog-image");
const showcaseContent = document.getElementById("showcase-blog-content");
const showcaseDate = document.getElementById("showcase-blog-date");
const showcaseReadTime = document.getElementById("showcase-blog-read-time");
const showcaseList = document.getElementById("blog-showcase-list");
const featuredCard = document.querySelector(".featured-blog-card");

function fillList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function updateShowcaseState() {
  document.querySelectorAll(".showcase-blog-option").forEach((card) => {
    const isActive = card.dataset.blogId === activeBlogId;
    card.classList.toggle("active", isActive);
    card.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function setActiveBlog(blogId) {
  const blog = blogDetails[blogId] || blogDetails["tax-saving-tips"];
  activeBlogId = blogDetails[blogId] ? blogId : "tax-saving-tips";
  return blog;
}

function renderBlog(blogId, shouldUpdateUrl = true) {
  if (!title || !summary || !image || !content || !date || !readTime) return;

  const blog = setActiveBlog(blogId);

  document.title = `MS Services | ${blog.title}`;
  title.textContent = blog.title;
  summary.textContent = blog.summary;
  image.src = blog.image;
  image.alt = `${blog.title} illustration`;
  fillList(content, blog.content);
  date.textContent = blog.date;
  readTime.textContent = blog.readTime;

  if (shouldUpdateUrl) {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("blog", activeBlogId);
    window.history.pushState({ blogId: activeBlogId }, "", nextUrl);
  }
}

function renderShowcase(blogId) {
  if (!showcaseTitle || !showcaseSummary || !showcaseImage || !showcaseContent || !showcaseDate || !showcaseReadTime) return;

  const blog = setActiveBlog(blogId);
  showcaseTitle.textContent = blog.title;
  showcaseSummary.textContent = blog.summary;
  showcaseImage.src = blog.image;
  showcaseImage.alt = `${blog.title} illustration`;
  fillList(showcaseContent, blog.content);
  showcaseDate.textContent = blog.date;
  showcaseReadTime.textContent = blog.readTime;
  if (featuredCard) {
    featuredCard.classList.remove("is-changing");
    void featuredCard.offsetWidth;
    featuredCard.classList.add("is-changing");
  }
  renderShowcaseList();
}

function renderShowcaseList() {
  if (!showcaseList) return;

  showcaseList.innerHTML = "";
  const activeIndex = blogOrder.indexOf(activeBlogId);
  const visibleBlogs = [
    {
      blogId: blogOrder[(activeIndex - 1 + blogOrder.length) % blogOrder.length],
      position: "previous"
    },
    {
      blogId: blogOrder[(activeIndex + 1) % blogOrder.length],
      position: "next"
    }
  ];

  visibleBlogs.forEach(({ blogId, position }, index) => {
    const blog = blogDetails[blogId];
    const card = document.createElement("button");
    card.type = "button";
    card.className = `showcase-blog-option ${position === "previous" ? "is-previous" : "is-next"}`;
    card.dataset.blogId = blogId;
    card.dataset.position = position;
    card.style.setProperty("--card-index", index);
    card.innerHTML = `
      <img src="${blog.image}" alt="" aria-hidden="true">
      <span>${blog.title}</span>
    `;
    card.addEventListener("click", () => {
      renderShowcase(blogId);
    });
    showcaseList.appendChild(card);
  });

  updateShowcaseState();
}

if (title && summary && image && content && date && readTime) {
  renderBlog(activeBlogId, false);
}

if (showcaseTitle && showcaseSummary && showcaseImage && showcaseContent && showcaseDate && showcaseReadTime) {
  renderShowcaseList();
  renderShowcase(activeBlogId);
}

window.addEventListener("popstate", () => {
  const nextParams = new URLSearchParams(window.location.search);
  const nextBlogId = nextParams.get("blog") || "tax-saving-tips";
  renderBlog(nextBlogId, false);
});
