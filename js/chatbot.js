/**
 * RKDL Chatbot System
 * Full Enterprise Navigation Tree Framework
 */

const toggle = document.getElementById("chatbotToggle");
const close = document.getElementById("chatbotClose");
const windowBox = document.getElementById("chatbotWindow");
const messages = document.getElementById("chatbotMessages");
const form = document.getElementById("chatbotForm");
const input = document.getElementById("chatbotInput");

const chatbotMenuToggle = document.getElementById("chatbotMenuToggle");
const chatbotDropdownMenu = document.getElementById("chatbotDropdownMenu");
const menuContactRep = document.getElementById("menuContactRep");
const menuClearChat = document.getElementById("menuClearChat");

// Professional Direct Architecture Configuration Matrix
const treeData = {
  initial: {
    title:
      "Welcome to RKDL Corporate Solutions. How can we guide your agency framework today?",
    options: [
      { text: "📊 Explore Technical Capabilities", action: "show_services" },
      {
        text: "📞 Connect with an Enterprise Representative",
        action: "contact_rep",
      },
    ],
  },
  services: {
    title:
      "Please choose from our 12 specialized architectural tracks to review capabilities:",
    options: [
      { text: "🤖 AI & Automation Solutions", action: "desc_ai" },
      { text: "☁️ Cloud & Infrastructure Services", action: "desc_cloud" },
      { text: "🌐 Web Architecture & Development", action: "desc_web" },
      { text: "📱 Mobile Application Development", action: "desc_mobile" },
      { text: "📈 Digital Marketing & SEO Strategy", action: "desc_marketing" },
      { text: "🎨 UI/UX Experience Design", action: "desc_uiux" },
      { text: "🛡️ Cybersecurity & Hardening", action: "desc_security" },
      { text: "📊 Data Science & Analytics Systems", action: "desc_data" },
      { text: "🛒 E-Commerce Strategy Platforms", action: "desc_ecommerce" },
      { text: "⚙️ DevOps & CI/CD Pipelines", action: "desc_devops" },
      { text: "🏢 Custom Enterprise ERP Software", action: "desc_erp" },
      { text: "💡 IT Managed Advisory Consulting", action: "desc_consulting" },
      { text: "↩️ Back to Main Menu", action: "reset_welcome" },
    ],
  },
  nodes: {
    desc_ai: {
      text: "<strong>AI & Automation:</strong> Use AI and automation to save time, reduce repetitive work, and help your team get more done.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_cloud: {
      text: "<strong>Cloud Services:</strong> Secure and reliable cloud and IT solutions that keep your business connected, protected, and running smoothly.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_web: {
      text: "<strong>Web Development:</strong> Modern websites and web applications built around your business needs, goals, and customers.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_mobile: {
      text: "<strong>Mobile Development:</strong> Easy-to-use Android and mobile applications that help you serve your customers and grow your business.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_marketing: {
      text: "<strong>Digital Marketing:</strong> Reach the right customers through SEO, social media, online advertising, and other digital marketing channels.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_uiux: {
      text: "<strong>UI/UX Design:</strong> High-fidelity interaction prototyping, user journey validation studies, and modern user interface component designs.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_security: {
      text: "<strong>Cybersecurity:</strong> Comprehensive penetration scans, configuration compliance auditing, zero-trust network setups, and operational system hardening.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_data: {
      text: "<strong>Data Science & Analytics:</strong> Turn your business data into clear reports and useful insights that help you make better decisions.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_ecommerce: {
      text: "<strong>E-Commerce Strategy:</strong> Smooth payment system pipelines, headless checkout systems, and high-performance product inventory search mechanics.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_devops: {
      text: "<strong>DevOps & CI/CD:</strong> Automated testing deployment loops, infrastructure-as-code files, and server environment containerization configurations.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_erp: {
      text: "<strong>Enterprise ERP Software:</strong> Tailored resource planning portals designed to track inner inventory logging networks seamlessly.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
    desc_consulting: {
      text: "<strong>IT Consulting:</strong> Practical technology advice and software solutions to help you solve everyday business and IT challenges.",
      options: [
        { text: "📞 Contact Advisor", action: "contact_rep" },
        { text: "↩️ Back to Capabilities", action: "show_services" },
      ],
    },
  },
  contact: {
    text: "An enterprise consultant is ready to assist. You can reach out directly via <strong>rohitkadam7333.rk@gmail.com</strong> or call us at <strong>+91 8451865173</strong>.",
    options: [{ text: "↩️ Return to Main Menu", action: "reset_welcome" }],
  },
};

// Layout Menu Toggle Interactions
toggle.addEventListener("click", () => windowBox.classList.toggle("active"));
close.addEventListener("click", () => {
  windowBox.classList.remove("active");
  chatbotDropdownMenu.classList.remove("show");
});

chatbotMenuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  chatbotDropdownMenu.classList.toggle("show");
});

document.addEventListener("click", () =>
  chatbotDropdownMenu.classList.remove("show"),
);

menuClearChat.addEventListener("click", (e) => {
  e.preventDefault();
  clearConversation();
});

menuContactRep.addEventListener("click", (e) => {
  e.preventDefault();
  chatbotDropdownMenu.classList.remove("show");
  handleSelection("Connect with Representative", "contact_rep");
});

// Appending HTML Structure Engine
function addMessage(messageHtml, sender = "bot") {
  const item = document.createElement("div");
  item.className = `chat-message ${sender}`;

  const innerParagraph = document.createElement("p");
  innerParagraph.innerHTML = messageHtml;

  item.appendChild(innerParagraph);
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

// Option Pill Generation Engine
function renderTreeMenu(titleText, optionsArray) {
  const inlineMenuContainer = document.createElement("div");
  inlineMenuContainer.className = "chat-inline-menu-block my-2 w-100";

  if (titleText) {
    const heading = document.createElement("div");
    heading.className =
      "chatbot-welcome-text fw-medium small text-muted mb-2 px-1";
    heading.innerHTML = titleText;
    inlineMenuContainer.appendChild(heading);
  }

  const wrapper = document.createElement("div");
  wrapper.className = "chatbot-options-wrapper";

  optionsArray.forEach((opt) => {
    const button = document.createElement("button");
    button.className = "chat-tree-option";
    button.innerHTML = opt.text;

    button.addEventListener("click", () => {
      inlineMenuContainer.remove();
      handleSelection(opt.text, opt.action);
    });

    wrapper.appendChild(button);
  });

  inlineMenuContainer.appendChild(wrapper);
  messages.appendChild(inlineMenuContainer);
  messages.scrollTop = messages.scrollHeight;
}

function handleSelection(userLabelText, actionKey) {
  addMessage(userLabelText, "user");
  setTimeout(() => {
    executeActionNode(actionKey);
  }, 300);
}

function executeActionNode(actionKey) {
  switch (actionKey) {
    case "show_services":
      addMessage("Please select from our technical core competency pathways:");
      renderTreeMenu(treeData.services.title, treeData.services.options);
      break;

    case "contact_rep":
      addMessage(treeData.contact.text);
      renderTreeMenu(null, treeData.contact.options);
      break;

    case "reset_welcome":
      renderWelcomeState();
      break;

    default:
      if (treeData.nodes[actionKey]) {
        const node = treeData.nodes[actionKey];
        addMessage(node.text);
        renderTreeMenu(null, node.options);
      } else {
        renderWelcomeState();
      }
      break;
  }
}

// Fallback Input Text Parsing Loops
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, "user");
  input.value = "";

  setTimeout(() => {
    const normalized = question.toLowerCase();
    if (normalized.includes("contact") || normalized.includes("rep")) {
      executeActionNode("contact_rep");
    } else if (normalized.includes("service") || normalized.includes("offer")) {
      executeActionNode("show_services");
    } else {
      addMessage(
        "I can guide you best via our interactive service maps. Take a look at the selection tracks below:",
      );
      renderTreeMenu(treeData.initial.title, treeData.initial.options);
    }
  }, 400);
});
function renderWelcomeState() {
  renderTreeMenu(treeData.initial.title, treeData.initial.options);
}
function clearConversation() {
  messages.innerHTML = "";
  const clearNotice = document.createElement("div");
  clearNotice.className = "system-notice";
  clearNotice.innerHTML = "Conversation session cleared successfully.";
  messages.appendChild(clearNotice);
  setTimeout(() => {
    clearNotice.remove();
    renderWelcomeState();
  }, 500);
}
// System Boot Initialization sequence
renderWelcomeState();
