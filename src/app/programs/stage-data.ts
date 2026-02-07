export interface StageData {
  slug: string;
  number: number;
  maturityLabel: string;
  program: string;
  investment: string;
  investmentNote?: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  problemHeadline: string;
  problemText: string[];
  outcomeHeadline: string;
  outcomes: { title: string; description: string }[];
  details: { label: string; value: string }[];
  audienceHeadline: string;
  audienceGroups: { title: string; description: string }[];
  notRightFit: { text: string; link: string; linkText: string }[];
  proofHeadline: string;
  proofPoints: { title: string; description: string }[];
  objections: { question: string; answer: string }[];
  investmentDetails: string[];
  nextSteps: { title: string; description: string; href: string; linkText: string }[];
}

export const stages: Record<string, StageData> = {
  cofounder: {
    slug: "cofounder",
    number: 2,
    maturityLabel: "Automating Myself",
    program: "CoFounder",
    investment: "$1,500",
    headline: "Stop Using AI Like a Fancy Search Engine",
    subheadline:
      "CoFounder is a live training program that turns you from an AI user into an AI operator. In two hours, you'll build a personal digital twin that writes in your voice and AI-powered tools you take to production before the session ends.",
    ctaText: "Register Now",
    problemHeadline: "You're Using AI. You're Not Operating AI.",
    problemText: [
      "You've used ChatGPT. Maybe Claude, maybe Gemini. You've drafted emails, summarized documents, brainstormed ideas. It's useful. But every interaction starts from scratch. There's no system. No memory. No workflow that compounds.",
      "The gap between \"using AI\" and \"operating AI\" is the gap between a tool you pick up occasionally and a system that works for you continuously. CoFounder closes that gap in a single session.",
    ],
    outcomeHeadline: "Built in the Session. Taken to Production.",
    outcomes: [
      {
        title: "A personal digital twin",
        description:
          "An AI system trained in your voice, your thinking style, your domain knowledge. Not a chatbot. A digital extension of yourself.",
      },
      {
        title: "AI-powered tools and workflows",
        description:
          "Custom tools and connectors you build during the session and take to production immediately. These aren't demos. They're working systems.",
      },
      {
        title: "Understanding, not just usage",
        description:
          "You'll understand how AI actually works (not just how to prompt it) and where it fails. This foundation makes every future AI interaction more effective.",
      },
      {
        title: "Two books included",
        description:
          "The WISER Method Master Playbook and Age of Invisible Machines. Delivered immediately.",
      },
    ],
    details: [
      { label: "Format", value: "Live remote instruction (not self-paced)" },
      { label: "Duration", value: "2 hours of live instruction" },
      { label: "Pre-work", value: "Approximately 15 minutes of setup" },
      { label: "Includes", value: "CoFounder software toolkit, both books" },
      {
        label: "Prerequisite",
        value: "Basic conversational AI fluency (Stage 1)",
      },
    ],
    audienceHeadline: "Is This You?",
    audienceGroups: [
      {
        title: "Leaders and managers",
        description:
          "Who need to model AI capability before asking their teams to adopt it.",
      },
      {
        title: "Practitioners",
        description:
          "Who want personal AI systems that extend their output. Analysts, marketers, strategists, project managers.",
      },
      {
        title: "Non-technical professionals",
        description:
          "Who have been told AI requires coding or technical expertise. It doesn't. CoFounder is designed for people who build things with words and decisions.",
      },
    ],
    notRightFit: [
      {
        text: "Looking for team-wide capability",
        link: "/programs/team-accelerator",
        linkText: "See Team Accelerator",
      },
      {
        text: "Need strategic-level AI understanding",
        link: "/programs/ai-for-executives",
        linkText: "See AI For Executives",
      },
    ],
    proofHeadline: "Why Trust This?",
    proofPoints: [
      {
        title: "Built on proven enterprise methodology",
        description:
          "CoFounder teaches the personal-level application of the WISER Method, which codifies how OneReach.ai has delivered AI for Fortune 500 companies and federal government agencies.",
      },
      {
        title: "Co-created by the leading voices in AI Operations",
        description:
          "Anthony Franco (seven startups, six acquisitions) and Robb Wilson (bestselling author of Age of Invisible Machines, founding contributor to AI First Principles).",
      },
      {
        title: "Backed by seven analyst firms",
        description:
          "Forrester, Gartner, IDC, Aragon Research, Quadrant Knowledge Solutions, Opus Research, and Everest Group recognize OneReach as a leader in agentic AI.",
      },
    ],
    objections: [
      {
        question: "I'm not technical.",
        answer:
          "Good. CoFounder is built for non-technical users. If you can use ChatGPT at a basic level, you have the prerequisite.",
      },
      {
        question: "Two hours seems short.",
        answer:
          "It is focused, not shallow. You build working systems during the session. The books provide the depth. The tools provide the ongoing capability.",
      },
      {
        question: "$1,500 is a lot for a 2-hour course.",
        answer:
          "You're not paying for two hours of instruction. You're paying for a personal AI system, both books, and the methodology behind it. Compare to the cost of using AI at 10% of its potential for the next year.",
      },
    ],
    investmentDetails: [
      "$1,500 includes live training, CoFounder software toolkit, and both books.",
      "Refund policy: Full refund minus $150 (the cost of both books, delivered immediately).",
      "Credit stacking: Your $1,500 applies as credit toward Licensed Practitioner (Stage 5). Advance later for $3,500 instead of $5,000.",
    ],
    nextSteps: [
      {
        title: "Automate your team (Stage 3)",
        description:
          "Team Accelerator gives every team member the CoFounder experience, plus an operationalizing framework.",
        href: "/programs/team-accelerator",
        linkText: "Learn about Team Accelerator",
      },
      {
        title: "Become a practitioner (Stage 5)",
        description:
          "Licensed Practitioner is a 6-week certification program. Your CoFounder investment applies as $1,500 credit.",
        href: "/programs/licensed-practitioner",
        linkText: "Learn about Licensed Practitioner",
      },
    ],
  },

  "team-accelerator": {
    slug: "team-accelerator",
    number: 3,
    maturityLabel: "Automating My Team",
    program: "Team Accelerator",
    investment: "$5,000 for 5 seats",
    investmentNote: "$500 per additional seat",
    headline: "Your Team Uses AI Individually. Make Them Capable Together.",
    subheadline:
      "Team Accelerator gives every team member personal AI automation capability through the full CoFounder program, plus gives you the framework for operationalizing AI across your team's workflows.",
    ctaText: "Get Started",
    problemHeadline:
      "Individual AI Adoption Creates Organizational Fragmentation",
    problemText: [
      "Some of your team members use AI. Others don't. The ones who do each use it differently. Different tools. Different approaches. Different levels of capability. No shared methodology.",
      "This is how organizations end up with disconnected AI tools. One person builds a workflow in ChatGPT. Another uses Claude. A third isn't using AI at all. The team's AI capability is as uneven as if half of them had email and the other half didn't.",
    ],
    outcomeHeadline: "Every Team Member. Full CoFounder Program.",
    outcomes: [
      {
        title: "Full CoFounder for everyone",
        description:
          "Every person on your team receives live 2-hour training, a personal digital twin, the CoFounder software toolkit, and both books.",
      },
      {
        title: "Operationalizing framework for you",
        description:
          "As the manager, you receive an additional course on transitioning from individual AI usage to team-level AI workflows.",
      },
      {
        title: "Shared methodology",
        description:
          "Your team operates from the same AI methodology. Shared capability replaces individual experiments.",
      },
    ],
    details: [
      { label: "Seats", value: "5 included. Additional seats $500 each." },
      {
        label: "Per-person",
        value:
          "Full CoFounder program (live training, digital twin, tools, both books)",
      },
      {
        label: "Manager bonus",
        value: "Introductory operationalizing AI course",
      },
      { label: "Format", value: "Live remote instruction" },
      {
        label: "Prerequisite",
        value: "Basic conversational AI fluency for all participants",
      },
    ],
    audienceHeadline: "Is This You?",
    audienceGroups: [
      {
        title: "Managers who need their team AI-capable",
        description:
          "You've seen the potential. Maybe you've automated your own work. Now you need the whole team operating at this level.",
      },
      {
        title: "Team leads with uneven AI adoption",
        description:
          "Some people use AI. Others don't. The inconsistency is creating friction and missed opportunities.",
      },
      {
        title: "Leaders preparing for organizational AI initiatives",
        description:
          "Your organization is moving toward AI. You want your team ready before the mandate arrives.",
      },
    ],
    notRightFit: [
      {
        text: "Want to automate yourself first",
        link: "/programs/cofounder",
        linkText: "See CoFounder",
      },
      {
        text: "Need executive-level strategic understanding",
        link: "/programs/ai-for-executives",
        linkText: "See AI For Executives",
      },
    ],
    proofHeadline: "Why Trust This?",
    proofPoints: [
      {
        title: "Same proven methodology, team-level delivery",
        description:
          "Delivers the CoFounder program built on the WISER Method to every team member, ensuring shared methodology.",
      },
      {
        title: "Co-created by enterprise AI leaders",
        description:
          "The methodology codifies how OneReach.ai has delivered AI for Fortune 500 companies and federal government agencies.",
      },
    ],
    objections: [
      {
        question: "Can't I just buy five individual CoFounder seats?",
        answer:
          "You'd pay $7,500 instead of $5,000, and miss the manager operationalizing course that turns individual capability into team methodology.",
      },
      {
        question: "My team isn't technical.",
        answer:
          "CoFounder is designed for non-technical users. If your team can use ChatGPT for basic tasks, they're ready.",
      },
      {
        question: "$5,000 for the team seems expensive.",
        answer:
          "That's $1,000 per person for five seats, compared to $1,500 each individually. Plus the manager course is included.",
      },
    ],
    investmentDetails: [
      "$5,000 for 5 seats. Each additional seat $500.",
      "Includes full CoFounder program for every team member plus manager operationalizing course.",
      "Credit stacking: Each team member's per-seat investment applies as individual credit toward Licensed Practitioner (Stage 5).",
    ],
    nextSteps: [
      {
        title: "Strategic AI understanding for leadership (Stage 4)",
        description:
          "AI For Executives gives senior leaders the strategic framework to fund and support AI initiatives.",
        href: "/programs/ai-for-executives",
        linkText: "Learn about AI For Executives",
      },
      {
        title: "Certification for key practitioners (Stage 5)",
        description:
          "Licensed Practitioner takes your most capable team members deeper into the methodology.",
        href: "/programs/licensed-practitioner",
        linkText: "Learn about Licensed Practitioner",
      },
    ],
  },

  "ai-for-executives": {
    slug: "ai-for-executives",
    number: 4,
    maturityLabel: "Automating My Company",
    program: "AI For Executives",
    investment: "$150",
    headline: "Your Board Is Asking About AI. Here's the Framework.",
    subheadline:
      "A 1-hour live course that gives senior leaders the AI Operations Maturity Model as a strategic framework, AI First Principles as a governance standard, and a clear path for investing in organizational AI capability.",
    ctaText: "Register Now",
    problemHeadline: "Strategy Without Operations Is PowerPoint",
    problemText: [
      "Every organization has an AI strategy. Most organizations have no methodology for executing it. A CEO reads about AI, tells someone to \"do something with it,\" and six months later there are disconnected pilots, competing vendor contracts, and a deck claiming transformation.",
      "As a senior leader, you don't need to build AI systems. You need to know what the right investments look like, what governance should be in place, and what the structured path to operational AI maturity actually is.",
    ],
    outcomeHeadline: "One Hour. Three Frameworks.",
    outcomes: [
      {
        title: "The AI Operations Maturity Model",
        description:
          "A six-stage progression. You'll know exactly what stage your organization is at and what the next stage requires.",
      },
      {
        title: "AI First Principles as governance",
        description:
          "Twelve operational constraints for AI decisions. A governance framework you can hand to your teams.",
      },
      {
        title: "A structured investment path",
        description:
          "Which programs to fund, for whom, and in what order. Specific stages with specific outcomes at each level.",
      },
      {
        title: "Two books included",
        description:
          "The WISER Method Master Playbook and Age of Invisible Machines. Delivered immediately.",
      },
    ],
    details: [
      { label: "Format", value: "Live remote instruction" },
      { label: "Duration", value: "1 hour" },
      { label: "Includes", value: "Both books (delivered immediately)" },
      {
        label: "Prerequisite",
        value: "None. Designed as an entry point for senior leaders.",
      },
    ],
    audienceHeadline: "Is This You?",
    audienceGroups: [
      {
        title: "C-suite and senior leaders",
        description:
          "Who need a framework for AI investment decisions, not another demo or vendor pitch.",
      },
      {
        title: "Executives funding AI initiatives",
        description:
          "Who want to know what the right programs are, who should receive them, and in what order.",
      },
      {
        title: "VPs and directors",
        description:
          "Who are the bridge between executive vision and team execution. You need to translate strategic AI goals into operational action.",
      },
    ],
    notRightFit: [
      {
        text: "Want hands-on AI automation for yourself",
        link: "/programs/cofounder",
        linkText: "See CoFounder",
      },
      {
        text: "Want to train your team in AI operations",
        link: "/programs/team-accelerator",
        linkText: "See Team Accelerator",
      },
    ],
    proofHeadline: "Why Trust This?",
    proofPoints: [
      {
        title: "The definitive AI Operations methodology",
        description:
          "WISER is purpose-built for AI, grounded in 12 AI First Principles that address how probabilistic systems behave differently from traditional software.",
      },
      {
        title: "Proven enterprise delivery",
        description:
          "Seven major analyst firms recognize OneReach as a leader in agentic AI. The methodology codifies Fortune 500 and federal delivery.",
      },
      {
        title: "Abundance, not scarcity",
        description:
          "Framed for expanding organizational capacity, not eliminating roles. Resolves the resistance that stalls most AI initiatives at the leadership level.",
      },
    ],
    objections: [
      {
        question: "We already have an AI strategy.",
        answer:
          "Strategy is not operations. Most organizations have a strategy and no methodology for executing it. This course addresses the gap between strategy and results.",
      },
      {
        question: "One hour seems short.",
        answer:
          "One hour is all a senior leader needs to understand the framework and make informed investment decisions. The depth lives in the programs your teams will take.",
      },
      {
        question: "I need buy-in from my leadership team.",
        answer:
          "That's exactly what this course is for. After this hour, you'll have the framework to present to your peers. The $150 price point means you don't need committee approval.",
      },
    ],
    investmentDetails: [
      "$150. Priced at the cost of a book because the decision to understand your options shouldn't wait for budget approval.",
      "Includes live instruction plus both books.",
    ],
    nextSteps: [
      {
        title: "Individual AI capability (Stage 2)",
        description:
          "CoFounder gives each person personal AI automation capability. $1,500 per person.",
        href: "/programs/cofounder",
        linkText: "Learn about CoFounder",
      },
      {
        title: "Team-level AI operations (Stage 3)",
        description:
          "Team Accelerator gives an entire team shared AI capability. $5,000 for 5 seats.",
        href: "/programs/team-accelerator",
        linkText: "Learn about Team Accelerator",
      },
      {
        title: "Professional practitioners (Stage 5)",
        description:
          "Licensed Practitioner certifies your key people to lead AI Operations initiatives. $5,000 per seat.",
        href: "/programs/licensed-practitioner",
        linkText: "Learn about Licensed Practitioner",
      },
    ],
  },

  "licensed-practitioner": {
    slug: "licensed-practitioner",
    number: 5,
    maturityLabel: "Becoming a Practitioner",
    program: "Licensed Practitioner",
    investment: "$5,000",
    investmentNote: "Net $3,500 with CoFounder credit",
    headline: "The Only AI Operations Certification That Exists",
    subheadline:
      "A 6-week live certification program that gives you deep command of the WISER Method, the ability to lead AI Operations initiatives, and the official WISER Method Certified Practitioner credential.",
    ctaText: "Join the Waitlist",
    problemHeadline: "AI Has No Operations Profession. Yet.",
    problemText: [
      "Every technology discipline has a professional certification path. Software development has Agile. Project management has PMP. IT operations has ITIL. AI Operations has nothing.",
      "Organizations are deploying AI across every function without a methodology for how it gets adopted, governed, and scaled. This is a market gap measured in years. The professionals who fill it first own the category.",
    ],
    outcomeHeadline: "Six Weeks. Full Methodology. Official Certification.",
    outcomes: [
      {
        title: "WISER Method Certified Practitioner badge",
        description:
          "An official credential in the only AI Operations methodology backed by enterprise delivery. A career differentiator with no competing certification.",
      },
      {
        title: "Deep command of the WISER Method",
        description:
          "AI First Principles in depth, all five Canons, Plays, Playbooks, Positions, and practical application to real challenges.",
      },
      {
        title: "Ability to lead AI Operations",
        description:
          "Run WISER Plays, build Playbooks, fill Positions, and lead teams through the Canons. Practitioner capability, not theoretical understanding.",
      },
      {
        title: "Two books included",
        description:
          "The WISER Method Master Playbook and Age of Invisible Machines.",
      },
    ],
    details: [
      { label: "Format", value: "Live remote cohort (weekly Zoom sessions)" },
      { label: "Duration", value: "6 weeks, one session per week" },
      { label: "Time", value: "6 hours per week (session plus homework)" },
      {
        label: "Delivered by",
        value: "A WISER Master with support from the method's authors",
      },
      { label: "Certification", value: "WISER Method Certified Practitioner" },
      {
        label: "Prerequisite",
        value: "Stage 1 required. Stage 2 (CoFounder) recommended.",
      },
    ],
    audienceHeadline: "Is This You?",
    audienceGroups: [
      {
        title: "Professionals building a career in AI Operations",
        description:
          "You see AI Operations as a professional discipline and want to be among the first certified practitioners.",
      },
      {
        title: "Internal AI champions",
        description:
          "You're the person your organization looks to for AI guidance. You need the methodology depth and credential to lead with authority.",
      },
      {
        title: "Consultants expanding into AI",
        description:
          "You have client relationships and consulting experience. AI Operations capability makes your practice more valuable.",
      },
      {
        title: "CoFounder graduates",
        description:
          "You completed Stage 2 and want to go deeper. Your $1,500 investment applies as credit.",
      },
    ],
    notRightFit: [
      {
        text: "Want personal AI automation without the certification path",
        link: "/programs/cofounder",
        linkText: "See CoFounder",
      },
      {
        text: "Want to build a full consulting practice with lead generation",
        link: "/programs/licensed-partner",
        linkText: "See Licensed Partner",
      },
    ],
    proofHeadline: "Why Trust This?",
    proofPoints: [
      {
        title: "First mover in a market with no competitors",
        description:
          "There is no other AI Operations methodology delivered through certification. This is category creation.",
      },
      {
        title: "Built on proven enterprise delivery",
        description:
          "The WISER Method codifies how OneReach.ai has delivered AI for Fortune 500 companies. Seven analyst firms recognize OneReach as a leader.",
      },
      {
        title: "Rigorous, not ceremonial",
        description:
          "Six weeks of live instruction with homework and practical application. Not a weekend workshop with an automatic badge.",
      },
    ],
    objections: [
      {
        question: "There are plenty of AI certifications already.",
        answer:
          "Those are technology certifications (AWS, Azure, data science). This certifies you in operating AI at the organizational level: methodology, governance, team execution. Different discipline.",
      },
      {
        question: "This is new. Will it be recognized?",
        answer:
          "Every certification starts somewhere. PMP, Agile, ITIL all had a first cohort. The methodology is proven through enterprise delivery. The market need is accelerating daily.",
      },
      {
        question: "$5,000 is significant.",
        answer:
          "Net cost is $3,500 with CoFounder credit. Compare to any comparable professional certification, then compare to the career premium of the only AI Operations certification that exists.",
      },
    ],
    investmentDetails: [
      "$5,000 per seat. Net cost $3,500 with credit stacking from CoFounder (Stage 2).",
      "Includes 6 weeks of live instruction, homework, official certification, and both books.",
      "Credit stacking: Your investment applies as credit toward Licensed Partner (Stage 6). Advance for $35,000 instead of $40,000.",
    ],
    nextSteps: [
      {
        title: "Build a consulting practice (Stage 6)",
        description:
          "Licensed Partner gives you lead generation, marketing collateral, and a license to deliver WISER to your own clients.",
        href: "/programs/licensed-partner",
        linkText: "Learn about Licensed Partner",
      },
    ],
  },

  "licensed-partner": {
    slug: "licensed-partner",
    number: 6,
    maturityLabel: "Becoming a Consultant",
    program: "Licensed Partner",
    investment: "$40,000",
    investmentNote: "Net $35,000 with Licensed Practitioner credit",
    headline:
      "Build an AI Consulting Practice With the Only Proven Methodology",
    subheadline:
      "Licensed Partner is not another certification. It's a practice asset. Methodology, license to deliver, lead generation, marketing collateral, and client discounts. One engagement covers the investment.",
    ctaText: "Apply Now",
    problemHeadline:
      "Your Clients Need AI Operations. You Need a Methodology to Sell.",
    problemText: [
      "Every organization you work with faces the same problem. They have AI tools. Maybe pilots. What they don't have is a methodology for turning AI investments into operational results.",
      "You see the opportunity. Your clients are asking about AI. But you're improvising. Every project feels custom. You can't scale beyond billable hours because every engagement starts from scratch.",
    ],
    outcomeHeadline: "A Complete Practice, Not Just a Credential",
    outcomes: [
      {
        title: "The full WISER Method",
        description:
          "All previous stages (CoFounder, Licensed Practitioner) plus partner-level methodology depth.",
      },
      {
        title: "License to deliver",
        description:
          "Commercial rights to deliver WISER to your own clients. Set your own prices. Choose your clients. Control your operations.",
      },
      {
        title: "Lead generation",
        description:
          "Done-for-you lead generation through partner Quality Consistent Leads. Your pipeline fills without marketing from scratch.",
      },
      {
        title: "Marketing and sales collateral",
        description:
          "Professional materials you deploy immediately. Proposals, assessments, frameworks, client-facing decks.",
      },
      {
        title: "Client discounts",
        description:
          "Your clients get preferred pricing on all WISER training programs and books.",
      },
    ],
    details: [
      {
        label: "Includes",
        value: "All previous stages (CoFounder + Licensed Practitioner)",
      },
      { label: "Lead gen", value: "Quality Consistent Leads included" },
      { label: "Collateral", value: "Marketing and sales materials" },
      {
        label: "License",
        value: "Commercial rights to deliver WISER to clients",
      },
      {
        label: "Model",
        value: "Independent operation (not franchise or employment)",
      },
      { label: "Renewal", value: "Annual renewal required" },
    ],
    audienceHeadline: "Is This You?",
    audienceGroups: [
      {
        title: "Independent consultants with client relationships",
        description:
          "You already sell to organizations. AI Operations is the next capability you add to your practice.",
      },
      {
        title: "Consulting firms adding AI services",
        description:
          "Your firm serves organizations that need AI guidance. WISER gives your team a productized methodology.",
      },
      {
        title: "Licensed Practitioners ready to build a business",
        description:
          "You completed Stage 5 and want to turn the certification into a consulting practice. Your $5,000 applies as credit.",
      },
    ],
    notRightFit: [
      {
        text: "Want certification without commercial application",
        link: "/programs/licensed-practitioner",
        linkText: "See Licensed Practitioner",
      },
      {
        text: "Don't have client relationships or a path to acquiring them",
        link: "/programs/cofounder",
        linkText: "Start with CoFounder",
      },
    ],
    proofHeadline: "Why Trust This?",
    proofPoints: [
      {
        title: "Proven at the enterprise level",
        description:
          "WISER codifies how OneReach.ai has delivered AI for Fortune 500 companies and federal government agencies.",
      },
      {
        title: "Seven analyst firms",
        description:
          "Forrester, Gartner, IDC, Aragon, Quadrant, Opus Research, and Everest Group recognize OneReach as a leader in agentic AI.",
      },
      {
        title: "No competing methodology exists",
        description:
          "AI Operations methodology through licensed practitioners is category creation. No alternative to compare against.",
      },
    ],
    objections: [
      {
        question: "$40,000 is a significant investment.",
        answer:
          "Net cost is $35,000 with credit stacking. Compare to the revenue from your first WISER Implementation Sprint ($30,000-$75,000). Single-engagement payback.",
      },
      {
        question: "What if I don't get enough clients?",
        answer:
          "Lead generation through QCL is included. You're not building a pipeline from scratch. Every organization needs AI Operations methodology and nobody else is delivering it.",
      },
      {
        question: "Is this a franchise?",
        answer:
          "No. You're an independent business. You set your own prices, choose your clients, and control your operations. WISER branding is optional.",
      },
    ],
    investmentDetails: [
      "$40,000. Net cost $35,000 with credit stacking from Licensed Practitioner (Stage 5).",
      "Annual renewal required to maintain license and certification.",
      "Payback: First client engagement. WISER Implementation Sprints range from $30,000 to $75,000.",
    ],
    nextSteps: [],
  },
};

export const stageOrder = [
  "cofounder",
  "team-accelerator",
  "ai-for-executives",
  "licensed-practitioner",
  "licensed-partner",
];

export function getStage(slug: string): StageData | undefined {
  return stages[slug];
}

export function getAllStageSlugs(): string[] {
  return stageOrder;
}
