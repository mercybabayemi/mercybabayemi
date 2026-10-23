/* =====================================================================
   SITE DATA: the one file you edit for day-to-day updates.
   Both pages (index.html and ugc.html) read from here.
   ===================================================================== */

var SITE = {
  /* Change this to info@mercybabayemi.com once your free email works. */
  email: 'mercybabayemi@gmail.com',
  /* WhatsApp number in international format with no plus or spaces, for example 2348012345678.
     Leave '' and the WhatsApp button stays hidden. */
  whatsapp: ''
};

/* Pre-written email subjects and bodies for the contact buttons. */
var CONTACT = {
  general:    { subject: 'Hello from your website', body: 'Dear Mercy,\n\nI found your website and would like to talk about:\n\n' },
  website:    { subject: 'Website or web app enquiry', body: 'Dear Mercy,\n\nI would like a website or web application. Here is what I need:\n\nWhat it should do:\nWho it is for:\nDeadline:\n' },
  automation: { subject: 'AI automation consultation', body: 'Dear Mercy,\n\nI would like a consultation about automating a process.\n\nThe process I want to automate:\nTools I use today:\nWhat a good result looks like:\n' }
};
var WHATSAPP_TEXT = 'Hello Mercy, I found your website and would like to talk.';

/* ---------------------------------------------------------------------
   WEBSITES AND WEB APPS (home page). The ORDER here is the order on the page.
   status: 'live' | 'development' | 'completed'
   links: add { label: 'GitHub repo', url: 'https://github.com/mercybabayemi/REPO-NAME' }
          and { label: 'Live site', url: '...' } when you have them. Empty means no button.
   --------------------------------------------------------------------- */
var WEBSITES = [
  { name: 'Aqubay', status: 'development', statusText: 'In development. Launching December 2026',
    role: 'Full-stack build for a Nigerian client',
    desc: 'A verified used-goods marketplace. Sellers list pre-owned electronics, gadgets and fashion, and every item passes a quality-control check before it reaches a buyer. Tagline: Buy tested and trusted used goods from verified sellers.',
    detail: 'The backend has ten route groups: authentication, products, cart, orders, payments, sellers, quality control, delivery, admin and returns.',
    stack: ['Next.js 14', 'React', 'Tailwind CSS', 'Zustand', 'Axios', 'FastAPI', 'PostgreSQL'],
    links: [] },
  { name: 'Black Rising Community', status: 'live', statusText: 'Live',
    role: 'Blog Integration Team Lead and Content Team Lead',
    desc: 'The website of a Black-led nonprofit creating a new future for Black youth through scholarships, skills training and mentorship. I led the blog integration team: sprint plans, contributors, and the live blog built in React and TypeScript from a Figma design.',
    detail: 'I configured Contentful CMS (content models, API environments and reusable components for the listing, testimonial, scholars and detail pages). As content lead I generated blog ideas, assigned writing, sourced visuals and wrote the featured article "Why the Future of Innovation is Africa."',
    stack: ['React', 'Vite', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Contentful CMS'],
    links: [ { label: 'Visit blackrisingcommunity.org', url: 'https://blackrisingcommunity.org' } ] },
  { name: 'ForNaijaKid', status: 'live', statusText: 'Live',
    role: 'Designed and built',
    desc: 'The website of my non-profit initiative, which gives Nigerian children free digital literacy and documents each outreach session.',
    detail: '', stack: [],
    links: [ { label: 'Visit fornaijakid.org', url: 'https://fornaijakid.org' },
             { label: 'Instagram', url: 'https://www.instagram.com/fornaijakid' } ] },
  { name: 'Auction App', status: 'completed', statusText: 'Completed',
    role: 'Full-stack build',
    desc: 'A tested and documented online auction platform with real-time live bidding: prices update instantly as users compete. Users register, log in securely with JWT, create and manage auction listings and place bids.',
    detail: 'Redis handles sessions and real-time caching, and Cloudinary handles item images. The backend separates routers, services, repositories and models, and the whole project is containerised with Docker.',
    stack: ['Python', 'Flask', 'Flask-SocketIO', 'MongoEngine', 'MongoDB', 'Redis', 'Cloudinary', 'Docker', 'JWT'],
    links: [] },
  { name: 'Niger Local Links', status: 'completed', statusText: 'Completed',
    role: 'Frontend Engineer, team of 2. Capstone project, Semicolon Africa',
    desc: 'A Revenue Collection and Service Delivery Modernisation System: an open-source framework to digitise Local Government Authority operations. It tackles revenue loss, long reporting delays and unverified property records, and aims to improve transparency and citizen trust. Developed through design thinking.',
    detail: 'I led the frontend, built the responsive interface, integrated the Java REST APIs with the backend engineer and deployed the platform.',
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'Java', 'Spring Boot', 'Render'],
    links: [] },
  { name: 'OomaTrust', status: 'completed', statusText: 'Completed',
    role: 'Hackathon project',
    desc: 'A web project built during a hackathon.',
    detail: '', stack: [], links: [] }
];

/* The stack line under the cards. From my public GitHub (30 repositories). */
var STACK_LINE = 'Python, JavaScript, Java and SQL. FastAPI, Spring Boot, Next.js and React. PostgreSQL and MongoDB. Docker and Git.';

/* Links that are not ready yet. Paste a URL between the quotes and the row
   becomes a live link. Leave '' and it shows "Link coming soon". */
var PENDING_LINKS = {
  researchArchive: '',
  books: '',
  aafinoge: '',
  smokedFresh: ''
};

/* ---------------------------------------------------------------------
   UGC PORTFOLIO CLIPS
   Add one object per clip. The ORDER here is the order on the page, so
   move a line up or down to reorder.
   featured: true  -> also shows on the home page (first 3 featured)
   category: 'tech' | 'travel' | 'beauty' | 'food' | 'culture'
   label:    'independent' | 'paid' | 'spec'   (never use 'paid' unless it was)
   type:     'youtube' -> src is the video ID (an unlisted YouTube Short works)
             'mp4'     -> src is a file path such as 'ugc/kitchen.mp4'
   poster:   optional image path for mp4 clips

   Example (copy, remove the slashes, fill in):
   { title:'My AI research setup', category:'tech', label:'independent',
     type:'youtube', src:'VIDEO_ID', note:'8GB to 16GB and running models locally', featured:true },
   --------------------------------------------------------------------- */
var UGC_WORK = [
];

var UGC_CATEGORIES = [
  ['all', 'All'], ['tech', 'Tech and AI'], ['travel', 'Travel and hospitality'],
  ['beauty', 'Beauty and fashion'], ['food', 'Food and home'], ['culture', 'Culture']
];
var UGC_LABELS = { independent: 'Independent content', paid: 'Paid collaboration', spec: 'Spec concept' };

/* Testimonials. Leave empty and the section stays hidden.
   { quote:'...', name:'...', role:'...' } */
var TESTIMONIALS = [
];

/* ---------------------------------------------------------------------
   KIT CARD (public version, shown on the UGC page)
   Edit prices here; the page updates.
   --------------------------------------------------------------------- */
var KIT = {
  packages: [
    { name: 'Single UGC video', price: '₦35,000',
      includes: '1 vertical video, 30 to 45 seconds, 9:16. One concept, basic scripting and direction, filming, editing, one revision and the final edited file.' },
    { name: '3-video package', price: '₦90,000',
      includes: 'Three videos up to 30 to 45 seconds each, with three concepts and hooks, filming, editing and one revision per video. ₦30,000 per video.' },
    { name: '5-video package', price: '₦140,000',
      includes: 'Five videos up to 30 to 45 seconds each, with five concepts and hooks, filming, editing and one revision per video. ₦28,000 per video.' },
    { name: '5-photo package', price: '₦40,000',
      includes: 'Five edited photographs in a product, lifestyle or model style, delivered in the agreed format.' },
    { name: 'Photo and video package', price: '₦120,000',
      includes: 'Short-form video plus supporting lifestyle or product photographs. Final deliverables are agreed in writing before production.' }
  ],
  addons: [
    { name: 'Raw footage', price: '+₦10,000 to ₦20,000', note: 'Not included unless added.' },
    { name: 'Additional revision', price: '₦5,000 each', note: 'One revision is included. A new concept or reshoot is quoted separately.' },
    { name: 'Rush delivery', price: '+25%', note: 'When delivery is needed much faster than the agreed timeline.' },
    { name: 'Paid advertising, 3 months', price: '+30%', note: 'Longer periods are priced by duration and campaign scope.' },
    { name: 'Exclusivity, 3 months', price: '+40%', note: 'Competing brands, category, region and duration are defined in writing.' },
    { name: 'Whitelisting', price: 'Custom quote', note: 'Running ads through my creator account is agreed separately.' },
    { name: 'Modelling and on-camera production', price: '₦25,000 per hour, ₦100,000 half-day', note: 'Larger campaigns are quoted by scope and usage.' }
  ],
  notIncluded: [
    'Unlimited revisions', 'Raw footage', 'Paid advertising rights', 'Perpetual usage',
    'Whitelisting', 'Exclusivity', 'Extensive reshoots', 'Multiple locations',
    'Studio or location rental', 'Transport outside the agreed scope', 'Complex props or production',
    'Overnight or emergency delivery', 'Posting on my social media', 'Performance guarantees'
  ],
  payment: 'New clients pay 50% upfront. The balance follows the agreed delivery schedule, and larger campaigns can use milestones.',
  international: 'International clients: from $150 for one video, $400 for three and $600 for five.',
  steps: [
    'Discovery: what you sell, who it is for and what the campaign should achieve.',
    'Brief: the concept, talking points, format, length, deadline and usage.',
    'Quote: deliverables, price, add-ons, usage terms, payment terms and timeline.',
    'Payment: the agreed upfront payment.',
    'Production: filming to the approved concept.',
    'Edit: the agreed deliverable, captioned and exported.',
    'Revision: the included revision.',
    'Delivery: final files, as agreed.',
    'Afterwards: a testimonial and permission to show the work, where appropriate.'
  ]
};

/* Emotions a brand can choose when sending a brief. [name, what it means] */
var EMOTIONS = [
  ['Relief', 'Life feels lighter. Suits time-saving, productivity and cleaning products.'],
  ['Freedom', 'More time, room and choice. Suits travel, appliances and mobility.'],
  ['Confidence', 'Feeling sure of how you look or what you can do. Suits fashion, beauty and skills.'],
  ['Self-care and reassurance', 'Feeling looked after. Suits skincare, wellness and spas.'],
  ['Curiosity', 'Wanting to see or know more. Suits travel, culture and new technology.'],
  ['Comfort and nostalgia', 'Feeling at home. Suits food, hospitality and home products.'],
  ['Empowerment', 'Feeling able to do more. Suits AI tools, software and education.'],
  ['Hope', 'Seeing a better next step. Suits education, community and non-profits.'],
  ['Transformation', 'A clear before and after. Suits beauty, fashion and fitness.'],
  ['Security and control', 'Feeling safe and on top of things. Suits finance, safety and planning.'],
  ['Excitement', 'Wanting to act now. Suits launches, events and offers.'],
  ['Something else', 'Describe it in the notes and I will build the story around it.']
];

var DELIVERABLES = [
  '1 video (30 to 45 seconds, 9:16)', '3-video package', '5-video package',
  '5-photo package', 'Photo and video package', 'Not sure yet, please advise'
];


/* ---------------------------------------------------------------------
   CONTACT INTAKE: what each service asks. Edit the questions here.
   field types: text, textarea, select. required: true makes it compulsory.
   --------------------------------------------------------------------- */
var BUDGETS = ['Prefer to discuss', 'Not sure yet', 'Under 300,000 naira', '300,000 to 1,000,000 naira', '1,000,000 to 3,000,000 naira', 'Above 3,000,000 naira'];
var INTAKE = {
  website: { label: 'Website or web application', blurb: 'Software architecture and requirements discovery. Tell me what you want to build and I will come back with questions, a scope and a quote.',
    subject: 'Website or web app enquiry',
    fields: [
      { id: 'what', label: 'What do you want to build, and what problem does it solve?', type: 'textarea', required: true },
      { id: 'users', label: 'Who will use it?', type: 'textarea' },
      { id: 'features', label: 'The five features it must have', type: 'textarea' },
      { id: 'exists', label: 'What exists already? Brand, content, designs, domain, hosting, a current site', type: 'textarea' },
      { id: 'integrations', label: 'Anything it must connect to? Payments, email, WhatsApp, maps, other systems', type: 'text' },
      { id: 'owner', label: 'Who decides, and who will look after it after launch?', type: 'text' },
      { id: 'deadline', label: 'Deadline or launch date', type: 'text' },
      { id: 'budget', label: 'Budget range', type: 'select', options: BUDGETS } ] },
  automation: { label: 'AI workflow automation', blurb: 'Workflow discovery. Describe one repetitive process and I will tell you what can realistically be automated.',
    subject: 'AI automation consultation',
    fields: [
      { id: 'process', label: 'The process you want to automate, in one sentence', type: 'textarea', required: true },
      { id: 'trigger', label: 'What starts it? For example a new email, a form, a date, a message', type: 'text' },
      { id: 'steps', label: 'The steps today, and roughly how much time they take each week', type: 'textarea' },
      { id: 'tools', label: 'Tools you use now. For example Google Sheets, WhatsApp, Notion, email', type: 'text' },
      { id: 'approval', label: 'Who must approve or review the result?', type: 'text' },
      { id: 'good', label: 'What would a good result look like?', type: 'textarea' },
      { id: 'sensitive', label: 'Does it involve sensitive or personal data?', type: 'select', options: ['No', 'Some', 'Yes', 'Not sure'] },
      { id: 'deadline', label: 'Deadline', type: 'text' },
      { id: 'budget', label: 'Budget range', type: 'select', options: BUDGETS } ] },
  research: { label: 'Paid research, data or AI project', blurb: 'Research and evaluation work: AI for African languages and education, data analysis, model evaluation, literature reviews.',
    subject: 'Research or data project enquiry',
    fields: [
      { id: 'question', label: 'The question you need answered', type: 'textarea', required: true },
      { id: 'deliverable', label: 'What you need delivered', type: 'select', options: ['A short brief', 'A full report', 'Data analysis', 'AI or model evaluation', 'A literature review', 'Not sure yet'] },
      { id: 'audience', label: 'Who will read or use it?', type: 'text' },
      { id: 'data', label: 'Data or sources you already have', type: 'textarea' },
      { id: 'confidential', label: 'Is any of it confidential?', type: 'select', options: ['No', 'Some of it', 'Yes', 'Not sure'] },
      { id: 'deadline', label: 'Deadline', type: 'text' },
      { id: 'budget', label: 'Budget range', type: 'select', options: BUDGETS } ] },
  writing: { label: 'Writing', blurb: 'Technical writing, articles and essays, case studies, documentation and editorial pieces.',
    subject: 'Writing project enquiry',
    fields: [
      { id: 'type', label: 'What kind of writing?', type: 'select', options: ['Technical documentation', 'Article or essay', 'Case study', 'Blog or newsletter', 'Website copy', 'Other'], required: true },
      { id: 'topic', label: 'What is it about?', type: 'textarea', required: true },
      { id: 'audience', label: 'Who is it for?', type: 'text' },
      { id: 'length', label: 'Length or number of pieces', type: 'text' },
      { id: 'tone', label: 'Tone, and links to examples you like', type: 'textarea' },
      { id: 'rights', label: 'Where will it be published, and who keeps the rights?', type: 'text' },
      { id: 'deadline', label: 'Deadline', type: 'text' },
      { id: 'budget', label: 'Budget range', type: 'select', options: BUDGETS } ] },
  other: { label: 'Something else', blurb: 'If it does not fit above, tell me about it here.',
    subject: 'Enquiry from the website',
    fields: [
      { id: 'what', label: 'What would you like to talk about?', type: 'textarea', required: true },
      { id: 'deadline', label: 'Deadline, if any', type: 'text' } ] }
};
