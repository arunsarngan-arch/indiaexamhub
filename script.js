// ═══════════════════════════════════════════════════════
//  IndiaExamHub – script.js
//  All data is hand-maintained here until a backend is added
// ═══════════════════════════════════════════════════════

// ─── EXAMS DATA ───────────────────────────────────────────
const exams = [
  // ── Engineering UG ──
  {
    id: "jee-main", name: "JEE Main", body: "NTA", category: "Engineering UG",
    icon: "⚙️", theme: "theme-blue",
    tentativeExam: "Jan 22–30 & Apr 1–8, 2026 (two sessions)",
    tentativeResult: "Late Feb / Late Apr 2026",
    notes: "Qualifier for JEE Advanced; gateway to NITs, IIITs, GFTIs"
  },
  {
    id: "jee-adv", name: "JEE Advanced", body: "IIT Delhi (2026)", category: "Engineering UG",
    icon: "🏛️", theme: "theme-indigo",
    tentativeExam: "May 18, 2026",
    tentativeResult: "June 2026",
    notes: "Top 2.5 lakh JEE Main qualifiers; gateway to 23 IITs"
  },
  {
    id: "bitsat", name: "BITSAT", body: "BITS Pilani", category: "Engineering UG",
    icon: "🔬", theme: "theme-teal",
    tentativeExam: "May–June 2026",
    tentativeResult: "July 2026",
    notes: "Online exam for BITS Pilani, Goa & Hyderabad campuses"
  },
  {
    id: "viteee", name: "VITEEE", body: "VIT University", category: "Engineering UG",
    icon: "💡", theme: "theme-green",
    tentativeExam: "April 2026",
    tentativeResult: "May 2026",
    notes: "Online CBT; for VIT campuses across India"
  },
  // ── Medical UG ──
  {
    id: "neet", name: "NEET UG", body: "NTA", category: "Medical UG",
    icon: "🩺", theme: "theme-rose",
    tentativeExam: "May 3, 2026",
    tentativeResult: "Late May / Early June 2026",
    notes: "Single national entrance for MBBS / BDS / Ayush courses"
  },
  {
    id: "aiims-pg", name: "AIIMS PG", body: "AIIMS New Delhi", category: "Medical PG",
    icon: "🏥", theme: "theme-rose",
    tentativeExam: "November 2026",
    tentativeResult: "December 2026",
    notes: "Entrance for MD/MS/MDS at all AIIMS institutes"
  },
  // ── Law ──
  {
    id: "clat", name: "CLAT", body: "NLU Consortium", category: "Law",
    icon: "⚖️", theme: "theme-amber",
    tentativeExam: "December 2026",
    tentativeResult: "January 2027",
    notes: "For admission to 22 National Law Universities (UG & PG)"
  },
  {
    id: "ailet", name: "AILET", body: "NLU Delhi", category: "Law",
    icon: "📜", theme: "theme-amber",
    tentativeExam: "December 2026",
    tentativeResult: "December 2026",
    notes: "Separate exam for NLU Delhi only; highly competitive"
  },
  // ── Engineering PG / PSU ──
  {
    id: "gate", name: "GATE", body: "IITs (rotational)", category: "Engineering PG / PSU",
    icon: "🎓", theme: "theme-indigo",
    tentativeExam: "Feb 1–2 & 8–9, 2026",
    tentativeResult: "Mid March 2026",
    notes: "PG admissions + PSU recruitment; score valid 3 years"
  },
  // ── MBA ──
  {
    id: "cat", name: "CAT", body: "IIMs", category: "MBA",
    icon: "📊", theme: "theme-purple",
    tentativeExam: "Last Sunday of November 2025",
    tentativeResult: "2nd week of January 2026",
    notes: "For IIMs and 1,000+ B-schools across India"
  },
  {
    id: "xat", name: "XAT", body: "XLRI", category: "MBA",
    icon: "📈", theme: "theme-purple",
    tentativeExam: "1st Sunday of January 2026",
    tentativeResult: "January 2026",
    notes: "Accepted by XLRI, XIMB and 150+ institutes"
  },
  // ── Civil Services ──
  {
    id: "upsc-cse", name: "UPSC CSE (Prelims)", body: "UPSC", category: "Civil Services",
    icon: "🇮🇳", theme: "theme-orange",
    tentativeExam: "May 24, 2026",
    tentativeResult: "June / July 2026",
    notes: "Mains Aug–Sep; IAS / IPS / IFS / IRS services"
  },
  {
    id: "upsc-cds", name: "UPSC CDS", body: "UPSC", category: "Defence",
    icon: "🎖️", theme: "theme-green",
    tentativeExam: "April 2026 & September 2026",
    tentativeResult: "2–3 months after exam",
    notes: "Combined Defence Services; two cycles per year"
  },
  // ── Banking / Finance ──
  {
    id: "ibps-po", name: "IBPS PO", body: "IBPS", category: "Banking",
    icon: "🏦", theme: "theme-blue",
    tentativeExam: "Oct–Nov 2026 (Prelims), Nov–Dec (Mains)",
    tentativeResult: "April 2027",
    notes: "Probationary Officer posts in 11 public sector banks"
  },
  {
    id: "sbi-po", name: "SBI PO", body: "SBI", category: "Banking",
    icon: "💰", theme: "theme-blue",
    tentativeExam: "Oct–Nov 2026",
    tentativeResult: "March 2027",
    notes: "SBI's own PO exam; one of the most sought-after banking jobs"
  },
  {
    id: "rbi-grade-b", name: "RBI Grade B", body: "RBI", category: "Banking",
    icon: "🏛️", theme: "theme-indigo",
    tentativeExam: "April–May 2026",
    tentativeResult: "June / July 2026",
    notes: "Phase 1 + Phase 2 + Interview; elite banking career"
  },
  // ── Government / SSC ──
  {
    id: "ssc-cgl", name: "SSC CGL", body: "SSC", category: "Government",
    icon: "🏢", theme: "theme-orange",
    tentativeExam: "Jun–Aug 2026 (Tier 1 & 2)",
    tentativeResult: "Varies by tier (1–2 months)",
    notes: "Group B & C posts in central ministries; 2 tiers"
  },
  {
    id: "ssc-chsl", name: "SSC CHSL", body: "SSC", category: "Government",
    icon: "📋", theme: "theme-orange",
    tentativeExam: "July 2026",
    tentativeResult: "2 months after each tier",
    notes: "10+2 level; LDC, DEO, Postal Assistant posts"
  },
  {
    id: "ssc-gd", name: "SSC GD Constable", body: "SSC", category: "Government",
    icon: "🚔", theme: "theme-green",
    tentativeExam: "February–April 2026",
    tentativeResult: "July 2026",
    notes: "BSF, CISF, CRPF, ITBP, SSB constable posts"
  },
  // ── Railways ──
  {
    id: "rrb-ntpc", name: "RRB NTPC", body: "Railway Recruitment Boards", category: "Railways",
    icon: "🚆", theme: "theme-blue",
    tentativeExam: "2026 (dates TBA)",
    tentativeResult: "2–3 months after exam",
    notes: "Non-technical posts; clerk, accounts asst, TC, etc."
  },
  {
    id: "rrb-alp", name: "RRB ALP", body: "Railway Recruitment Boards", category: "Railways",
    icon: "🚂", theme: "theme-teal",
    tentativeExam: "2026 (dates TBA)",
    tentativeResult: "2–3 months after exam",
    notes: "Assistant Loco Pilot + Technician; 10th + ITI eligible"
  },
  // ── State PSC ──
  {
    id: "uppsc", name: "UPPSC PCS", body: "UPPSC", category: "State PSC",
    icon: "🗺️", theme: "theme-orange",
    tentativeExam: "Prelims: July 2026; Mains: Nov 2026",
    tentativeResult: "6–9 months after mains",
    notes: "SDM, DSP, Block Dev Officer & other UP state services"
  },
  {
    id: "mpsc", name: "MPSC State Services", body: "MPSC", category: "State PSC",
    icon: "🌾", theme: "theme-green",
    tentativeExam: "Prelims: April 2026",
    tentativeResult: "8–10 months after prelims",
    notes: "Maharashtra state civil services; three stages"
  },
  // ── School Level ──
  {
    id: "cbse-10", name: "CBSE Class 10 Board", body: "CBSE", category: "School – Class 10",
    icon: "📚", theme: "theme-teal",
    tentativeExam: "Feb 15 – Mar 20, 2026",
    tentativeResult: "May 2026",
    notes: "Annual board exams for Class 10 students across India"
  },
  {
    id: "cbse-12", name: "CBSE Class 12 Board", body: "CBSE", category: "School – Class 12",
    icon: "🎒", theme: "theme-indigo",
    tentativeExam: "Feb 15 – Apr 5, 2026",
    tentativeResult: "May 2026",
    notes: "Class 12 annual boards; critical for college admissions"
  },
  {
    id: "icse-10", name: "ICSE (Class 10)", body: "CISCE", category: "School – Class 10",
    icon: "📖", theme: "theme-teal",
    tentativeExam: "Feb 20 – Mar 27, 2026",
    tentativeResult: "May 2026",
    notes: "ICSE board exams; conducted by CISCE"
  },
  {
    id: "isc-12", name: "ISC (Class 12)", body: "CISCE", category: "School – Class 12",
    icon: "📝", theme: "theme-rose",
    tentativeExam: "Feb 13 – Apr 1, 2026",
    tentativeResult: "May 2026",
    notes: "Indian School Certificate for Class 12 under CISCE"
  },
  // ── Scholarship / Talent ──
  {
    id: "jnvst", name: "Navodaya (JNVST)", body: "NVS", category: "Scholarship / Talent",
    icon: "🌟", theme: "theme-amber",
    tentativeExam: "Phase 1: Jan 18, 2026; Phase 2: Apr 12, 2026",
    tentativeResult: "Mar / Jun 2026",
    notes: "Class 6 selection to Jawahar Navodaya Vidyalayas; free residential"
  },
  {
    id: "ntse", name: "NTSE", body: "NCERT", category: "Scholarship / Talent",
    icon: "🏆", theme: "theme-amber",
    tentativeExam: "Stage 1: Nov 2025; Stage 2: May 2026",
    tentativeResult: "Aug 2026",
    notes: "National Talent Search Exam for Class 10; ₹1,250/mo scholarship"
  },
  // ── Teaching ──
  {
    id: "ctet", name: "CTET", body: "CBSE", category: "Teaching",
    icon: "🧑‍🏫", theme: "theme-green",
    tentativeExam: "Jul–Aug 2026",
    tentativeResult: "2–3 months after exam",
    notes: "Paper 1 (Classes 1–5) & Paper 2 (Classes 6–8); lifetime validity"
  },
  {
    id: "tet-up", name: "UP-TET", body: "UPMSP", category: "Teaching",
    icon: "📐", theme: "theme-orange",
    tentativeExam: "Oct–Nov 2026",
    tentativeResult: "2 months after exam",
    notes: "Uttar Pradesh Teacher Eligibility Test; state school recruitment"
  },
  // ── Design / Arts ──
  {
    id: "nid-dat", name: "NID DAT", body: "NID", category: "Design",
    icon: "🎨", theme: "theme-rose",
    tentativeExam: "Jan 5, 2026 (Prelims); Apr 2026 (Mains)",
    tentativeResult: "Feb / May 2026",
    notes: "Design Aptitude Test for B.Des & M.Des at NID campuses"
  },
  {
    id: "nift", name: "NIFT Entrance", body: "NIFT", category: "Design",
    icon: "👗", theme: "theme-rose",
    tentativeExam: "Feb 8, 2026",
    tentativeResult: "April 2026",
    notes: "For UG & PG fashion design programmes at 18 NIFT campuses"
  },
];

// ─── QUESTION PAPERS DATA ─────────────────────────────────
const questionPapers = [
  // JEE Main
  { id: "jee-2024-jan-p1", title: "JEE Main 2024 – Jan Session Paper 1", exam: "JEE Main", year: 2024, subject: "PCM", category: "Engineering UG", file: "https://example.com/jee-2024-jan-p1.pdf" },
  { id: "jee-2024-apr-p1", title: "JEE Main 2024 – Apr Session Paper 1", exam: "JEE Main", year: 2024, subject: "PCM", category: "Engineering UG", file: "https://example.com/jee-2024-apr-p1.pdf" },
  { id: "jee-2023-p1", title: "JEE Main 2023 – Jan Paper 1", exam: "JEE Main", year: 2023, subject: "PCM", category: "Engineering UG", file: "https://example.com/jee-2023-p1.pdf" },
  { id: "jee-2022-p1", title: "JEE Main 2022 – Jun Paper 1", exam: "JEE Main", year: 2022, subject: "PCM", category: "Engineering UG", file: "https://example.com/jee-2022.pdf" },
  // JEE Advanced
  { id: "jee-adv-2024-p1", title: "JEE Advanced 2024 – Paper 1", exam: "JEE Advanced", year: 2024, subject: "PCM", category: "Engineering UG", file: "https://example.com/jee-adv-2024-p1.pdf" },
  { id: "jee-adv-2024-p2", title: "JEE Advanced 2024 – Paper 2", exam: "JEE Advanced", year: 2024, subject: "PCM", category: "Engineering UG", file: "https://example.com/jee-adv-2024-p2.pdf" },
  { id: "jee-adv-2023-p1", title: "JEE Advanced 2023 – Paper 1", exam: "JEE Advanced", year: 2023, subject: "PCM", category: "Engineering UG", file: "https://example.com/jee-adv-2023.pdf" },
  // NEET
  { id: "neet-2024", title: "NEET UG 2024 – Question Paper", exam: "NEET UG", year: 2024, subject: "PCB", category: "Medical UG", file: "https://example.com/neet-2024.pdf" },
  { id: "neet-2023", title: "NEET UG 2023 – Question Paper", exam: "NEET UG", year: 2023, subject: "PCB", category: "Medical UG", file: "https://example.com/neet-2023.pdf" },
  { id: "neet-2022", title: "NEET UG 2022 – Question Paper", exam: "NEET UG", year: 2022, subject: "PCB", category: "Medical UG", file: "https://example.com/neet-2022.pdf" },
  // UPSC
  { id: "upsc-gs1-2024", title: "UPSC CSE Prelims 2024 – GS Paper 1", exam: "UPSC CSE", year: 2024, subject: "GS Paper 1", category: "Civil Services", file: "https://example.com/upsc-gs1-2024.pdf" },
  { id: "upsc-gs2-2024", title: "UPSC CSE Prelims 2024 – CSAT Paper 2", exam: "UPSC CSE", year: 2024, subject: "CSAT", category: "Civil Services", file: "https://example.com/upsc-gs2-2024.pdf" },
  { id: "upsc-gs1-2023", title: "UPSC CSE Prelims 2023 – GS Paper 1", exam: "UPSC CSE", year: 2023, subject: "GS Paper 1", category: "Civil Services", file: "https://example.com/upsc-gs1-2023.pdf" },
  // GATE
  { id: "gate-cse-2024", title: "GATE 2024 – Computer Science (CS)", exam: "GATE", year: 2024, subject: "CS/IT", category: "Engineering PG", file: "https://example.com/gate-cs-2024.pdf" },
  { id: "gate-ece-2024", title: "GATE 2024 – Electronics (ECE)", exam: "GATE", year: 2024, subject: "ECE", category: "Engineering PG", file: "https://example.com/gate-ece-2024.pdf" },
  { id: "gate-me-2024", title: "GATE 2024 – Mechanical (ME)", exam: "GATE", year: 2024, subject: "ME", category: "Engineering PG", file: "https://example.com/gate-me-2024.pdf" },
  // CAT
  { id: "cat-2024", title: "CAT 2024 – Question Paper (all slots)", exam: "CAT", year: 2024, subject: "VARC / DILR / QA", category: "MBA", file: "https://example.com/cat-2024.pdf" },
  { id: "cat-2023", title: "CAT 2023 – Question Paper", exam: "CAT", year: 2023, subject: "VARC / DILR / QA", category: "MBA", file: "https://example.com/cat-2023.pdf" },
  // SSC CGL
  { id: "ssc-cgl-tier1-2024", title: "SSC CGL 2024 – Tier 1 (Jul shift 1)", exam: "SSC CGL", year: 2024, subject: "Reasoning / GK / Maths / English", category: "Government", file: "https://example.com/ssc-cgl-tier1-2024.pdf" },
  { id: "ssc-cgl-tier1-2023", title: "SSC CGL 2023 – Tier 1 (Jul shift 1)", exam: "SSC CGL", year: 2023, subject: "Reasoning / GK / Maths / English", category: "Government", file: "https://example.com/ssc-cgl-2023.pdf" },
  // CBSE Boards
  { id: "cbse-10-math-2024", title: "CBSE Class 10 – Mathematics (Standard) 2024", exam: "CBSE Class 10", year: 2024, subject: "Mathematics", category: "School – Class 10", file: "https://example.com/cbse-10-math-2024.pdf" },
  { id: "cbse-10-sci-2024", title: "CBSE Class 10 – Science 2024", exam: "CBSE Class 10", year: 2024, subject: "Science", category: "School – Class 10", file: "https://example.com/cbse-10-sci-2024.pdf" },
  { id: "cbse-12-phy-2024", title: "CBSE Class 12 – Physics 2024", exam: "CBSE Class 12", year: 2024, subject: "Physics", category: "School – Class 12", file: "https://example.com/cbse-12-phy-2024.pdf" },
  { id: "cbse-12-chem-2024", title: "CBSE Class 12 – Chemistry 2024", exam: "CBSE Class 12", year: 2024, subject: "Chemistry", category: "School – Class 12", file: "https://example.com/cbse-12-chem-2024.pdf" },
  { id: "cbse-12-math-2024", title: "CBSE Class 12 – Mathematics 2024", exam: "CBSE Class 12", year: 2024, subject: "Mathematics", category: "School – Class 12", file: "https://example.com/cbse-12-math-2024.pdf" },
  { id: "cbse-10-sst-2024", title: "CBSE Class 10 – Social Science 2024", exam: "CBSE Class 10", year: 2024, subject: "Social Science", category: "School – Class 10", file: "https://example.com/cbse-10-sst-2024.pdf" },
  // CTET
  { id: "ctet-p1-2024", title: "CTET July 2024 – Paper 1 (Primary)", exam: "CTET", year: 2024, subject: "All sections", category: "Teaching", file: "https://example.com/ctet-p1-2024.pdf" },
  { id: "ctet-p2-2024", title: "CTET July 2024 – Paper 2 (Upper Primary)", exam: "CTET", year: 2024, subject: "All sections", category: "Teaching", file: "https://example.com/ctet-p2-2024.pdf" },
];

// ─── RESULTS DATA ─────────────────────────────────────────
const results = [
  { id: "jee-main-s1-2026", title: "JEE Main 2026 – Session 1 Result", exam: "JEE Main", date: "Feb 28, 2026", status: "live", link: "https://jeemain.nta.nic.in/" },
  { id: "gate-2026", title: "GATE 2026 Result", exam: "GATE", date: "Mar 19, 2026", status: "live", link: "https://gate2026.iitr.ac.in/" },
  { id: "cat-2025", title: "CAT 2025 Scorecard", exam: "CAT", date: "Jan 15, 2026", status: "announced", link: "https://iimcat.ac.in/" },
  { id: "cbse-10-2025", title: "CBSE Class 10 Result 2025", exam: "CBSE Class 10", date: "May 13, 2025", status: "announced", link: "https://cbseresults.nic.in/" },
  { id: "cbse-12-2025", title: "CBSE Class 12 Result 2025", exam: "CBSE Class 12", date: "May 13, 2025", status: "announced", link: "https://cbseresults.nic.in/" },
  { id: "upsc-cse-mains-2025", title: "UPSC CSE Mains 2025 Written Result", exam: "UPSC CSE", date: "Mar 2026 (expected)", status: "expected", link: "https://upsc.gov.in/" },
  { id: "neet-2025", title: "NEET UG 2025 Result", exam: "NEET UG", date: "Jun 14, 2025", status: "announced", link: "https://neet.nta.nic.in/" },
  { id: "jee-main-s2-2026", title: "JEE Main 2026 – Session 2 Result", exam: "JEE Main", date: "Late Apr 2026 (expected)", status: "expected", link: "https://jeemain.nta.nic.in/" },
  { id: "ssc-cgl-2025", title: "SSC CGL 2025 Tier 1 Result", exam: "SSC CGL", date: "Oct 2025", status: "announced", link: "https://ssc.gov.in/" },
  { id: "ibps-po-2025", title: "IBPS PO 2025 Final Result", exam: "IBPS PO", date: "Apr 2026 (expected)", status: "expected", link: "https://ibps.in/" },
];

// ─── JOBS DATA ────────────────────────────────────────────
const jobs = [
  // Govt
  { id: "ssc-cgl-2026", title: "SSC CGL 2026", org: "SSC", sector: "Govt", location: "All India", eligibility: "Grad", salary: "4-10", deadline: "March 31, 2026", applyLink: "https://ssc.gov.in/" },
  { id: "ibps-rrb-2026", title: "IBPS RRB Officer Scale I", org: "IBPS", sector: "Govt", location: "All India", eligibility: "Grad", salary: "3-8", deadline: "April 15, 2026", applyLink: "https://ibps.in/" },
  { id: "rrb-alp-2026", title: "RRB ALP 2026", org: "Indian Railways", sector: "Govt", location: "All India", eligibility: "10th+ITI", salary: "3-5", deadline: "March 20, 2026", applyLink: "https://indianrailways.gov.in/" },
  { id: "sbi-sco-2026", title: "SBI SCO 2026 (116 Vacancies)", org: "SBI", sector: "Govt", location: "All India", eligibility: "Grad", salary: "5-12", deadline: "March 15, 2026", applyLink: "https://sbi.co.in/" },
  { id: "uppsc-2026", title: "UPPSC RO/ARO 2026", org: "UPPSC", sector: "Govt", location: "UP", eligibility: "Grad", salary: "4-7", deadline: "April 10, 2026", applyLink: "https://uppsc.up.nic.in/" },
  { id: "kvs-2026", title: "KVS Teacher Recruitment 2026", org: "KVS", sector: "Govt", location: "All India", eligibility: "Grad/B.Ed", salary: "4-9", deadline: "March 25, 2026", applyLink: "https://kvsangathan.nic.in/" },
  { id: "rbi-assist-2026", title: "RBI Assistant 2026", org: "RBI", sector: "Govt", location: "All India", eligibility: "Grad", salary: "5-8", deadline: "April 30, 2026", applyLink: "https://www.rbi.org.in/" },
  // Private / Fresher
  { id: "infosys-bpm-2026", title: "Process Executive (Fresher)", org: "Infosys BPM", sector: "Private", location: "Mangaluru", eligibility: "12th/Grad", salary: "2.5-4", posted: "March 8, 2026", applyLink: "https://www.naukri.com/infosys-jobs" },
  { id: "tcs-fresher-2026", title: "Software Trainee (Fresher)", org: "TCS", sector: "Private", location: "All India", eligibility: "Grad (B.Tech)", salary: "3.5-6", posted: "March 5, 2026", applyLink: "https://www.tcs.com/careers" },
  { id: "wipro-sales-2026", title: "Sales Executive (Fresher)", org: "Wipro", sector: "Private", location: "Noida", eligibility: "Grad", salary: "3-5", posted: "March 9, 2026", applyLink: "https://careers.wipro.com/" },
  { id: "accenture-hr-2026", title: "Junior HR Associate", org: "Accenture", sector: "Private", location: "UP", eligibility: "Grad", salary: "4-6", posted: "March 7, 2026", applyLink: "https://www.accenture.com/in-en/careers" },
  { id: "amazon-lead-2026", title: "Lead & Sales Associate", org: "Amazon India", sector: "Private", location: "All India", eligibility: "12th", salary: "2.8-4.5", posted: "March 6, 2026", applyLink: "https://www.amazon.jobs/en" },
];

// ─── AUTH HELPERS ─────────────────────────────────────────
function loginUser(username) {
  if (!username || !username.trim()) { alert("Please enter a username"); return; }
  localStorage.setItem("currentUser", username.trim());
  const redirectTo = localStorage.getItem('loginRedirect') || 'index.html';
  localStorage.removeItem('loginRedirect');
  window.location.href = redirectTo;
}

function registerUser(name) {
  if (!name || !name.trim()) { alert("Please enter your name"); return; }
  localStorage.setItem("currentUser", name.trim());
  const redirectTo = localStorage.getItem('loginRedirect') || 'index.html';
  localStorage.removeItem('loginRedirect');
  window.location.href = redirectTo;
}

function logoutUser() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function getCurrentUser() {
  return localStorage.getItem("currentUser");
}

// ─── LIBRARY HELPERS ─────────────────────────────────────
function addToLibrary(paper) {
  const user = getCurrentUser();
  if (!user) {
    if (confirm("You need to sign in to save papers. Go to Sign In?")) {
      localStorage.setItem('loginRedirect', window.location.pathname);
      window.location.href = "login.html";
    }
    return;
  }
  let library = JSON.parse(localStorage.getItem("myLibrary") || "[]");
  if (library.some(item => item.id === paper.id)) { alert("Already saved in your library!"); return; }
  library.push(paper);
  localStorage.setItem("myLibrary", JSON.stringify(library));
  // Visual feedback
  alert("✓ Saved to your library!");
}

function removeFromLibrary(paperId) {
  let library = JSON.parse(localStorage.getItem("myLibrary") || "[]");
  library = library.filter(item => item.id !== paperId);
  localStorage.setItem("myLibrary", JSON.stringify(library));
}

function loadLibrary(containerId = "library-container") {
  const container = document.getElementById(containerId);
  if (!container) return;
  const library = JSON.parse(localStorage.getItem("myLibrary") || "[]");
  const user = getCurrentUser();
  if (!user) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔒</div><p>Please sign in to view your library.</p></div>`;
    return;
  }
  if (library.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📂</div><p>Your library is empty.<br>Go to <a href="papers.html" style="color:var(--primary)">Question Papers</a> and save some!</p></div>`;
    return;
  }
  container.innerHTML = library.map(item => `
    <div class="library-item" id="lib-${item.id}">
      <div class="library-item-icon">PDF</div>
      <div class="library-item-info">
        <div class="library-item-title">${item.title}</div>
        <div class="library-item-meta">${item.exam} • ${item.year} • ${item.subject}</div>
      </div>
      <div style="display:flex; gap:8px; flex-shrink:0;">
        <a href="${item.file}" target="_blank" class="btn btn-primary btn-sm">Open</a>
        <button onclick="removeFromLibrary('${item.id}'); document.getElementById('lib-${item.id}').remove();" 
                class="btn btn-outline-dark btn-sm" style="border-color:#dc2626; color:#dc2626;">Remove</button>
      </div>
    </div>
  `).join("");
}

// ─── NAVBAR BUILDER ───────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const user = getCurrentUser();
  const navLinks = document.querySelector(".nav-links");

  if (navLinks) {
    if (user) {
      const initial = user.charAt(0).toUpperCase();
      navLinks.innerHTML = `
        <a href="index.html">Home</a>
        <a href="papers.html">Papers</a>
        <a href="results.html">Results <span class="nav-badge">NEW</span></a>
        <a href="jobs.html">Jobs</a>
        <div id="profileDropdownWrap">
          <a href="#" id="profileTrigger" style="display:flex;align-items:center;text-decoration:none;padding:0 8px;">
            <div class="profile-avatar">${initial}</div>
          </a>
          <div id="profileDropdown">
            <div>
              <div class="dropdown-header">👋 ${user}</div>
              <div class="dropdown-item" data-href="profile.html">👤 My Profile</div>
              <div class="dropdown-item" data-href="profile.html">📚 My Library</div>
              <div class="dropdown-signout" onclick="logoutUser()">Sign Out</div>
            </div>
          </div>
        </div>
      `;
    } else {
      navLinks.innerHTML = `
        <a href="index.html">Home</a>
        <a href="papers.html">Papers</a>
        <a href="results.html">Results <span class="nav-badge">NEW</span></a>
        <a href="jobs.html">Jobs</a>
        <a href="login.html" class="btn btn-primary btn-sm" style="margin-left:8px;">Sign In</a>
      `;
    }
  }

  // Profile dropdown hover logic (dropdown is now inline in navLinks)
  if (user) {
    const wrap = document.getElementById("profileDropdownWrap");
    const dropdown = document.getElementById("profileDropdown");
    if (wrap && dropdown) {
      let hideTimer;

      const showDropdown = () => {
        clearTimeout(hideTimer);
        dropdown.classList.add("open");
      };
      const hideDropdown = () => {
        // Small delay so moving mouse from avatar to dropdown doesn't flicker
        hideTimer = setTimeout(() => dropdown.classList.remove("open"), 120);
      };

      wrap.addEventListener("mouseenter", showDropdown);
      wrap.addEventListener("mouseleave", hideDropdown);

      dropdown.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", () => {
          window.location.href = item.dataset.href;
        });
        item.addEventListener("mouseenter", () => item.style.background = "var(--muted-purple)");
        item.addEventListener("mouseleave", () => item.style.background = "");
      });
    }
  }

  // Active nav link
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  // Hamburger
  const menuToggle = document.getElementById("menuToggle");
  const navLinksEl = document.getElementById("navLinks");
  if (menuToggle && navLinksEl) {
    menuToggle.addEventListener("click", () => {
      navLinksEl.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
    navLinksEl.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinksEl.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }

  // Search filtering (generic – works on both papers & exams pages)
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll(".card, .paper-card").forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(query) ? "" : "none";
      });
    });
  }

  // Library load on relevant pages
  loadLibrary();

  // Save redirect URL before login
  document.querySelectorAll('a[href="login.html"]').forEach(link => {
    link.addEventListener("click", () => {
      localStorage.setItem("loginRedirect", window.location.pathname);
    });
  });
});


/* ══════════════════════════════════════════════════════════════
   Student Dashboard - JavaScript
   Handles rendering, interactivity, and real-time updates
   ══════════════════════════════════════════════════════════════ */

// ─── DASHBOARD DATA ───────────────────────────────────────────


// Today's Classes/Timetable
const todayClasses = [
  {
    id: 1,
    subject: "Data Structures",
    instructor: "Dr. Rajesh Kumar",
    room: "Room 401",
    time: "09:00 - 10:30",
    duration: 90,
    status: "active", // active, completed, upcoming
    color: "theme-blue"
  },
  {
    id: 2,
    subject: "Web Development",
    instructor: "Priya Sharma",
    room: "Lab 2",
    time: "11:00 - 12:30",
    duration: 90,
    status: "upcoming",
    color: "theme-orange"
  },
  {
    id: 3,
    subject: "Database Management",
    instructor: "Prof. Anil Singh",
    room: "Room 305",
    time: "14:00 - 15:00",
    duration: 60,
    status: "upcoming",
    color: "theme-purple"
  },
  {
    id: 4,
    subject: "AI & Machine Learning",
    instructor: "Dr. Neha Verma",
    room: "Room 201",
    time: "15:30 - 17:00",
    duration: 90,
    status: "upcoming",
    color: "theme-green"
  },
  {
    id: 5,
    subject: "Computer Networks",
    instructor: "Mr. Vikram Patel",
    room: "Room 102",
    time: "17:30 - 18:30",
    duration: 60,
    status: "upcoming",
    color: "theme-indigo"
  }
];

// Assignments/Deadlines
const assignments = [
  {
    id: 1,
    title: "DSA Problem Set - Week 5",
    subject: "Data Structures",
    deadline: "2026-03-20",
    status: "pending", // pending, completed, overdue
    priority: "high",
    description: "Solve 10 problems on binary trees"
  },
  {
    id: 2,
    title: "HTML/CSS Project - Portfolio",
    subject: "Web Development",
    deadline: "2026-03-22",
    status: "pending",
    priority: "high",
    description: "Create personal portfolio website"
  },
  {
    id: 3,
    title: "SQL Queries Assignment",
    subject: "Database Management",
    deadline: "2026-03-25",
    status: "pending",
    priority: "medium",
    description: "Write 15 complex SQL queries"
  },
  {
    id: 4,
    title: "ML Model Report",
    subject: "AI & Machine Learning",
    deadline: "2026-03-28",
    status: "pending",
    priority: "medium",
    description: "Document your ML model results"
  },
  {
    id: 5,
    title: "Network Protocol Analysis",
    subject: "Computer Networks",
    deadline: "2026-04-01",
    status: "pending",
    priority: "low",
    description: "Analyze TCP/IP protocol layers"
  }
];

// Announcements
const announcements = [
  {
    id: 1,
    tag: "Important",
    title: "Mid-Semester Exams Schedule Released",
    text: "Mid-semester exams will be held from April 1-15, 2026. Download the schedule from the portal.",
    time: "Today at 2:30 PM",
    isNew: true
  },
  {
    id: 2,
    tag: "Event",
    title: "Tech Workshop: Python for Data Science",
    text: "Join us for a hands-on workshop on April 5th. Limited seats available. Register now!",
    time: "Yesterday at 11:00 AM",
    isNew: true
  },
  {
    id: 3,
    tag: "Update",
    title: "Library Operating Hours Extended",
    text: "The library will now remain open until 9 PM on weekdays to support exam preparation.",
    time: "2 days ago",
    isNew: false
  },
  {
    id: 4,
    tag: "Notice",
    title: "No Classes on March 29",
    text: "Classes are cancelled on March 29 due to a national holiday.",
    time: "3 days ago",
    isNew: false
  }
];

// Subject Performance
const subjectPerformance = [
  { id: 1, subject: "Data Structures", grade: "A+", percentage: 96 },
  { id: 2, subject: "Web Development", grade: "A", percentage: 92 },
  { id: 3, subject: "Database Management", grade: "A", percentage: 88 },
  { id: 4, subject: "AI & ML", grade: "B+", percentage: 84 },
  { id: 5, subject: "Networks", grade: "A", percentage: 90 }
];

// Upcoming Exams & Important Dates
const examsAndDeadlines = [
  {
    id: 1,
    name: "DSA Mid-Term Exam",
    date: "2026-04-05",
    type: "exam",
    description: "Binary Trees, Graphs, Dynamic Programming"
  },
  {
    id: 2,
    name: "Web Dev Project Deadline",
    date: "2026-04-08",
    type: "deadline",
    description: "Submit portfolio website with all requirements"
  },
  {
    id: 3,
    name: "Database Final Exam",
    date: "2026-04-12",
    type: "exam",
    description: "SQL, Database Design, Normalization"
  },
  {
    id: 4,
    name: "ML Project Presentation",
    date: "2026-04-15",
    type: "deadline",
    description: "Present your machine learning model findings"
  },
  {
    id: 5,
    name: "Networks Lab Submission",
    date: "2026-04-18",
    type: "deadline",
    description: "Submit all network simulation experiments"
  },
  {
    id: 6,
    name: "Comprehensive Final Exams",
    date: "2026-05-01",
    type: "exam",
    description: "All subjects cumulative exam"
  }
];

// ─── HELPER FUNCTIONS ───────────────────────────────────────────

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-IN', options);
}

function formatTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = date - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays < 0) return `${Math.abs(diffDays)} days ago`;
  return `In ${diffDays} days`;
}

function getDayOfWeek(index) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[index];
}

function getCurrentTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning! 🌅";
  if (hour < 17) return "Good Afternoon! ☀️";
  return "Good Evening! 🌙";
}

// ─── RENDERING FUNCTIONS ───────────────────────────────────────────

// Render Timetable
function renderTimetable() {
  const container = document.getElementById("timetableContainer");
  if (!container) return;

  const html = todayClasses.map(cls => `
    <div class="timetable-item ${cls.status === 'active' ? 'active' : cls.status === 'completed' ? 'completed' : ''}">
      <div class="timetable-time">${cls.time}</div>
      <div class="timetable-details">
        <div class="timetable-subject">${cls.subject}</div>
        <div class="timetable-room">📍 ${cls.room}</div>
        <div class="timetable-instructor">👨‍🏫 ${cls.instructor}</div>
      </div>
      <div class="timetable-status">
        ${cls.status === 'active' ? 'NOW' : cls.status === 'completed' ? 'DONE' : 'UPCOMING'}
      </div>
    </div>
  `).join("");

  container.innerHTML = html;
}

// Render Assignments
function renderAssignments(filter = 'all') {
  const container = document.getElementById("assignmentsList");
  if (!container) return;

  let filtered = assignments;
  if (filter === 'urgent') {
    filtered = assignments.filter(a => a.priority === 'high' && a.status === 'pending');
  } else if (filter === 'completed') {
    filtered = assignments.filter(a => a.status === 'completed');
  }

  const html = filtered.map(assignment => {
    const isUrgent = assignment.priority === 'high';
    const isCompleted = assignment.status === 'completed';
    const daysUntil = Math.ceil((new Date(assignment.deadline) - new Date()) / (1000 * 60 * 60 * 24));

    return `
      <div class="assignment-item ${isUrgent ? 'urgent' : ''} ${isCompleted ? 'completed' : ''}">
        <div class="assignment-checkbox" onclick="toggleAssignment(${assignment.id})" title="Mark as done">
          ${isCompleted ? '✓' : ''}
        </div>
        <div class="assignment-info">
          <div class="assignment-title">${assignment.title}</div>
          <div class="assignment-subject">${assignment.subject}</div>
          <div class="assignment-deadline ${isUrgent ? 'urgent' : 'upcoming'}">
            ⏰ Due ${formatTime(assignment.deadline)}
          </div>
        </div>
        <div class="assignment-tag ${isCompleted ? 'completed' : ''}">
          ${isCompleted ? 'Done' : isUrgent ? 'URGENT' : 'Normal'}
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = html || '<div class="empty-state"><p>No assignments to show.</p></div>';
}

// Render Announcements
function renderAnnouncements() {
  const container = document.getElementById("announcementsList");
  if (!container) return;

  const html = announcements.map(ann => `
    <div class="announcement-item">
      <div class="announcement-tag">${ann.tag}</div>
      <div class="announcement-title">${ann.title}</div>
      <div class="announcement-text">${ann.text}</div>
      <div class="announcement-time">${ann.time}</div>
    </div>
  `).join("");

  container.innerHTML = html;
}

// Render Subject Performance
function renderPerformance() {
  const container = document.getElementById("subjectPerformance");
  if (!container) return;

  const html = subjectPerformance.map(perf => `
    <div class="performance-item">
      <div class="performance-subject">
        <div class="performance-subject-name">${perf.subject}</div>
        <div class="performance-subject-grade">${perf.percentage}%</div>
      </div>
      <div class="performance-grade">${perf.grade}</div>
    </div>
  `).join("");

  container.innerHTML = html;
}

// Render Exams Timeline
function renderExamsTimeline() {
  const container = document.getElementById("examsTimeline");
  if (!container) return;

  const html = examsAndDeadlines.map(item => {
    const date = new Date(item.date);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();

    return `
      <div class="exam-item">
        <div class="exam-date-box">
          <div class="exam-date-day">${day}</div>
          <div class="exam-date-month">${month}</div>
        </div>
        <div class="exam-info">
          <div class="exam-name">${item.name}</div>
          <div class="exam-meta">${item.description}</div>
          <div class="exam-badge">
            ${item.type === 'exam' ? '📝 EXAM' : '✓ DEADLINE'}
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
}

// Render Mini Calendar
function renderMiniCalendar() {
  const container = document.getElementById("miniCalendar");
  if (!container) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Month header
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  let html = `
    <div class="calendar-header">
      <span>${monthNames[month]} ${year}</span>
    </div>
    <div class="calendar-weekdays">
  `;

  // Weekday headers
  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
    html += `<div class="calendar-weekday">${day}</div>`;
  });

  html += '</div><div class="calendar-days">';

  // Previous month days
  for (let i = daysInPrevMonth - firstDay + 1; i <= daysInPrevMonth; i++) {
    html += `<div class="calendar-day other-month">${i}</div>`;
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = i === today.getDate();
    const dayDate = new Date(year, month, i);
    const dayOfWeek = dayDate.getDay();

    // Check if this day has classes, exams, or deadlines
    let dayType = '';
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

    if (examsAndDeadlines.some(e => e.date === dateStr)) {
      dayType = examsAndDeadlines.find(e => e.date === dateStr).type === 'exam' ? 'exam-day' : 'deadline-day';
    } else if ((dayOfWeek !== 0 && dayOfWeek !== 6) && Math.random() > 0.6) {
      dayType = 'class-day'; // Random class days for demo
    }

    html += `<div class="calendar-day ${isToday ? 'today' : ''} ${dayType}">${i}</div>`;
  }

  // Next month days
  const totalCells = 42; // 6 weeks × 7 days
  const nextMonthDays = totalCells - (firstDay + daysInMonth);
  for (let i = 1; i <= nextMonthDays; i++) {
    html += `<div class="calendar-day other-month">${i}</div>`;
  }

  html += '</div>';
  container.innerHTML = html;
}

// Update time greeting
function updateTimeGreeting() {
  const el = document.getElementById("timeGreeting");
  if (el) {
    el.textContent = getCurrentTimeGreeting();
  }
}

// Update today's date
function updateTodayDate() {
  const el = document.getElementById("todayDate");
  if (el) {
    el.textContent = formatDate(new Date().toISOString().split('T')[0]);
  }
}

// ─── INTERACTIVITY ────────────────────────────────────────────

// Toggle assignment completion
function toggleAssignment(id) {
  const assignment = assignments.find(a => a.id === id);
  if (assignment) {
    assignment.status = assignment.status === 'completed' ? 'pending' : 'completed';
    renderAssignments(getActiveFilter());
  }
}

function getActiveFilter() {
  const active = document.querySelector('.filter-btn.active');
  return active ? active.dataset.filter : 'all';
}

// ─── INITIALIZATION ───────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // Render all components
  updateTimeGreeting();
  updateTodayDate();
  renderTimetable();
  renderAssignments();
  renderAnnouncements();
  renderPerformance();
  renderExamsTimeline();
  renderMiniCalendar();

  // Filter button event listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderAssignments(this.dataset.filter);
    });
  });

  // Update greeting every minute
  setInterval(updateTimeGreeting, 60000);
});


/* ══════════════════════════════════════════════════════════════
   Dashboard Editable - Modal Logic & Data Management
   ══════════════════════════════════════════════════════════════ */

// ─── LOCAL STORAGE DATA MANAGEMENT ──────────────────────────

// Initialize local storage with default data
function initializeStorage() {
  const defaults = {
    classes: [],
    exams: [],
    assignments: [],
    attendance: { present: 47, total: 50 }
  };

  Object.keys(defaults).forEach(key => {
    if (!localStorage.getItem(`dashboard_${key}`)) {
      localStorage.setItem(`dashboard_${key}`, JSON.stringify(defaults[key]));
    }
  });
}

// Get data from storage
function getStorageData(key) {
  try {
    const data = localStorage.getItem(`dashboard_${key}`);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error(`Error getting ${key}:`, e);
    return null;
  }
}

// Save data to storage
function saveToStorage(key, data) {
  try {
    localStorage.setItem(`dashboard_${key}`, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error(`Error saving ${key}:`, e);
    return false;
  }
}

// ─── MODAL MANAGEMENT ───────────────────────────────────────

function openEditModal(type) {
  const overlay = document.querySelector('.modal-overlay');
  const modal = document.getElementById(`add${capitalize(type)}Modal`);

  if (!modal) {
    console.error(`Modal not found for type: ${type}`);
    return;
  }

  // Show overlay and modal
  if (overlay) overlay.style.display = 'block';
  modal.style.display = 'block';

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Close on escape key
  document.addEventListener('keydown', handleEscapeClose);

  // Close on overlay click
  if (overlay) {
    overlay.onclick = () => closeEditModal(type);
  }
}

function closeEditModal(type) {
  const modal = document.getElementById(`add${capitalize(type)}Modal`);
  const overlay = document.querySelector('.modal-overlay');

  if (modal) modal.style.display = 'none';
  if (overlay) overlay.style.display = 'none';

  document.body.style.overflow = 'auto';
  document.removeEventListener('keydown', handleEscapeClose);

  // Clear form fields
  clearForm(type);
}

function handleEscapeClose(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.edit-modal[style*="display: block"]').forEach(modal => {
      modal.style.display = 'none';
    });
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ─── FORM CLEARING ──────────────────────────────────────────

function clearForm(type) {
  const inputs = document.querySelectorAll(`#add${capitalize(type)}Modal input, #add${capitalize(type)}Modal select`);
  inputs.forEach(input => {
    input.value = '';
    input.parentElement.classList.remove('error');
  });
}

// ─── CLASS MANAGEMENT ───────────────────────────────────────

function saveClass() {
  const name = document.getElementById('className').value.trim();
  const day = document.getElementById('classDay').value;
  const time = document.getElementById('classTime').value;
  const room = document.getElementById('classRoom').value.trim();

  // Validation
  if (!name || !day || !time) {
    showMessage('Please fill in all required fields', 'error');
    return;
  }

  const newClass = {
    id: Date.now(),
    name,
    day,
    time,
    room: room || 'TBD'
  };

  let classes = getStorageData('classes') || [];
  classes.push(newClass);

  if (saveToStorage('classes', classes)) {
    showMessage('✓ Class added successfully!', 'success');
    closeEditModal('timetable');
    // Refresh timetable display (call from your script.js)
    if (typeof renderTimetable === 'function') {
      renderTimetable();
    }
  } else {
    showMessage('Failed to save class', 'error');
  }
}

function deleteClass(classId) {
  if (confirm('Are you sure you want to delete this class?')) {
    let classes = getStorageData('classes') || [];
    classes = classes.filter(c => c.id !== classId);

    if (saveToStorage('classes', classes)) {
      showMessage('✓ Class deleted', 'success');
      if (typeof renderTimetable === 'function') {
        renderTimetable();
      }
    }
  }
}

// ─── EXAM MANAGEMENT ────────────────────────────────────────

function saveExam() {
  const name = document.getElementById('examName').value.trim();
  const date = document.getElementById('examDate').value;
  const subject = document.getElementById('examSubject').value.trim();

  // Validation
  if (!name || !date) {
    showMessage('Please fill in all required fields', 'error');
    return;
  }

  const newExam = {
    id: Date.now(),
    name,
    date,
    subject: subject || 'General',
    type: 'exam'
  };

  let exams = getStorageData('exams') || [];
  exams.push(newExam);

  if (saveToStorage('exams', exams)) {
    showMessage('✓ Exam date added successfully!', 'success');
    closeEditModal('exam');
    if (typeof renderExams === 'function') {
      renderExams();
    }
  } else {
    showMessage('Failed to save exam', 'error');
  }
}

function deleteExam(examId) {
  if (confirm('Are you sure you want to delete this exam?')) {
    let exams = getStorageData('exams') || [];
    exams = exams.filter(e => e.id !== examId);

    if (saveToStorage('exams', exams)) {
      showMessage('✓ Exam deleted', 'success');
      if (typeof renderExams === 'function') {
        renderExams();
      }
    }
  }
}

// ─── ASSIGNMENT MANAGEMENT ──────────────────────────────────

function saveAssignment() {
  const title = document.getElementById('assignTitle').value.trim();
  const subject = document.getElementById('assignSubject').value.trim();
  const deadline = document.getElementById('assignDeadline').value;
  const priority = document.getElementById('assignPriority').value;

  // Validation
  if (!title || !subject || !deadline) {
    showMessage('Please fill in all required fields', 'error');
    return;
  }

  const newAssignment = {
    id: Date.now(),
    title,
    subject,
    deadline,
    priority: priority || 'medium',
    status: 'pending'
  };

  let assignments = getStorageData('assignments') || [];
  assignments.push(newAssignment);

  if (saveToStorage('assignments', assignments)) {
    showMessage('✓ Assignment added successfully!', 'success');
    closeEditModal('assignment');
    if (typeof renderAssignments === 'function') {
      renderAssignments();
    }
  } else {
    showMessage('Failed to save assignment', 'error');
  }
}

function deleteAssignment(assignId) {
  if (confirm('Are you sure you want to delete this assignment?')) {
    let assignments = getStorageData('assignments') || [];
    assignments = assignments.filter(a => a.id !== assignId);

    if (saveToStorage('assignments', assignments)) {
      showMessage('✓ Assignment deleted', 'success');
      if (typeof renderAssignments === 'function') {
        renderAssignments();
      }
    }
  }
}

// ─── ATTENDANCE MANAGEMENT ──────────────────────────────────

function saveAttendance() {
  const present = parseInt(document.getElementById('classesPresent').value);
  const total = parseInt(document.getElementById('totalClasses').value);

  // Validation
  if (isNaN(present) || isNaN(total) || present < 0 || total <= 0 || present > total) {
    showMessage('Please enter valid attendance numbers', 'error');
    return;
  }

  const attendance = { present, total };

  if (saveToStorage('attendance', attendance)) {
    showMessage('✓ Attendance updated!', 'success');
    closeEditModal('attendance');
    
    // Update UI
    const percentage = Math.round((present / total) * 100);
    const percentEl = document.getElementById('attendancePercent');
    const presentEl = document.getElementById('presentCount');
    const absentEl = document.getElementById('absentCount');

    if (percentEl) percentEl.textContent = `${percentage}%`;
    if (presentEl) presentEl.textContent = `${present}/${total}`;
    if (absentEl) absentEl.textContent = `${total - present}/${total}`;

    // Update circular chart
    updateAttendanceChart(percentage);
  } else {
    showMessage('Failed to save attendance', 'error');
  }
}

function updateAttendanceChart(percentage) {
  const circle = document.querySelector('.attendance-fill');
  if (circle) {
    const circumference = 2 * Math.PI * 54;
    const strokeDasharray = (percentage / 100) * circumference;
    circle.style.strokeDasharray = `${strokeDasharray}, ${circumference}`;
  }
}

// ─── MESSAGING ──────────────────────────────────────────────

function showMessage(text, type = 'info') {
  const messageDiv = document.createElement('div');
  messageDiv.className = `${type}-message`;
  messageDiv.textContent = text;

  document.body.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// ─── INITIALIZATION ─────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Initialize storage on page load
  initializeStorage();

  // Close modals on overlay click
  const overlay = document.querySelector('.modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        document.querySelectorAll('.edit-modal[style*="display: block"]').forEach(modal => {
          modal.style.display = 'none';
        });
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
});

// ─── EXPORT FUNCTIONS FOR GLOBAL USE ────────────────────────

// Make functions globally available for onclick handlers
window.openEditModal = openEditModal;
window.closeEditModal = closeEditModal;
window.saveClass = saveClass;
window.deleteClass = deleteClass;
window.saveExam = saveExam;
window.deleteExam = deleteExam;
window.saveAssignment = saveAssignment;
window.deleteAssignment = deleteAssignment;
window.saveAttendance = saveAttendance;
window.getStorageData = getStorageData;
window.saveToStorage = saveToStorage;

/* ══════════════════════════════════════════════════════════════
   Dashboard v3 - Complete Calendar-First System
   Primary data entry via calendar
   Editing in respective sections only
   ══════════════════════════════════════════════════════════════ */

// ─── DATA STORAGE ───────────────────────────────────────

let dashboardData = {
  classes: [],
  exams: [],
  assignments: []
};

let editModes = {
  timetable: false,
  assignments: false,
  exams: false
};

let selectedDate = null;
let originalData = null; // For reset functionality

// ─── INITIALIZE ─────────────────────────────────────────

function initializeDashboard() {
  const saved = localStorage.getItem('dashboard_data_v3');
  if (saved) {
    dashboardData = JSON.parse(saved);
  }
  renderAllSections();
}

function saveData() {
  localStorage.setItem('dashboard_data_v3', JSON.stringify(dashboardData));
}

// ─── CALENDAR INTERACTION ───────────────────────────────

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('calendar-day') && !e.target.classList.contains('other-month')) {
    const day = parseInt(e.target.textContent);
    if (!isNaN(day)) {
      const today = new Date();
      selectedDate = new Date(today.getFullYear(), today.getMonth(), day);
      openCalendarForm();
    }
  }
});

function openCalendarForm() {
  const container = document.getElementById('calendarFormContainer');
  const display = document.getElementById('selectedDateDisplay');
  
  if (display) {
    display.textContent = formatDate(selectedDate);
  }

  // Reset form
  document.getElementById('entryType').value = '';
  clearFormFields();
  updateFormFields();
  
  if (container) {
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function closeCalendarForm() {
  const container = document.getElementById('calendarFormContainer');
  if (container) {
    container.style.display = 'none';
    clearFormFields();
    selectedDate = null;
  }
}

function updateFormFields() {
  const type = document.getElementById('entryType').value;
  
  document.getElementById('classFields').style.display = type === 'class' ? 'block' : 'none';
  document.getElementById('examFields').style.display = type === 'exam' ? 'block' : 'none';
  document.getElementById('assignmentFields').style.display = type === 'assignment' ? 'block' : 'none';
}

function clearFormFields() {
  document.querySelectorAll('.calendar-data-entry input, .calendar-data-entry textarea').forEach(field => {
    field.value = '';
  });
}

function saveCalendarEntry() {
  const type = document.getElementById('entryType').value;

  if (!type) {
    showMessage('Please select a category', 'error');
    return;
  }

  if (type === 'class') saveClassEntry();
  else if (type === 'exam') saveExamEntry();
  else if (type === 'assignment') saveAssignmentEntry();
}

// ─── CLASS ENTRY FROM CALENDAR ──────────────────────────

function saveClassEntry() {
  const name = document.getElementById('className').value.trim();
  const time = document.getElementById('classTime').value;
  const details = document.getElementById('classDetails').value.trim();

  if (!name || !time) {
    showMessage('Subject and Timing are required', 'error');
    return;
  }

  const classEntry = {
    id: Date.now(),
    name,
    time,
    details,
    date: selectedDate.toISOString().split('T')[0]
  };

  dashboardData.classes.push(classEntry);
  saveData();
  renderAllSections();
  renderCalendar();
  closeCalendarForm();
  showMessage('✓ Class added!', 'success');
}

// ─── EXAM ENTRY FROM CALENDAR ───────────────────────────

function saveExamEntry() {
  const subject = document.getElementById('examSubject').value.trim();
  const details = document.getElementById('examDetails').value.trim();

  if (!subject) {
    showMessage('Subject is required', 'error');
    return;
  }

  const examEntry = {
    id: Date.now(),
    name: subject,
    date: selectedDate.toISOString().split('T')[0],
    details,
    type: 'exam'
  };

  dashboardData.exams.push(examEntry);
  saveData();
  renderAllSections();
  renderCalendar();
  closeCalendarForm();
  showMessage('✓ Exam added!', 'success');
}

// ─── ASSIGNMENT ENTRY FROM CALENDAR ─────────────────────

function saveAssignmentEntry() {
  const subject = document.getElementById('assignmentSubject').value.trim();
  const dueDate = document.getElementById('assignmentDueDate').value;
  const details = document.getElementById('assignmentDetails').value.trim();

  if (!subject || !dueDate) {
    showMessage('Subject and Due Date are required', 'error');
    return;
  }

  const assignmentEntry = {
    id: Date.now(),
    title: subject,
    subject,
    deadline: dueDate,
    details,
    status: 'pending'
  };

  dashboardData.assignments.push(assignmentEntry);
  saveData();
  renderAllSections();
  renderCalendar();
  closeCalendarForm();
  showMessage('✓ Assignment added!', 'success');
}

// ─── EDIT MODES ─────────────────────────────────────────

function toggleEditMode(section) {
  editModes[section] = !editModes[section];
  if (editModes[section]) {
    originalData = JSON.parse(JSON.stringify(dashboardData));
  }
  renderSection(section);
}

function resetChanges(section) {
  if (confirm('Reset all changes in this section?')) {
    dashboardData = JSON.parse(JSON.stringify(originalData));
    editModes[section] = false;
    renderSection(section);
    showMessage('Changes reset', 'success');
  }
}

function saveChanges(section) {
  saveData();
  editModes[section] = false;
  renderSection(section);
  renderCalendar();
  showMessage('✓ Changes saved!', 'success');
}

function deleteItem(section, itemId) {
  if (confirm('Delete this item?')) {
    if (section === 'timetable') {
      dashboardData.classes = dashboardData.classes.filter(c => c.id !== itemId);
    } else if (section === 'assignments') {
      dashboardData.assignments = dashboardData.assignments.filter(a => a.id !== itemId);
    } else if (section === 'exams') {
      dashboardData.exams = dashboardData.exams.filter(e => e.id !== itemId);
    }
    saveData();
    renderSection(section);
    renderCalendar();
  }
}

// ─── RENDERING ──────────────────────────────────────────

function renderAllSections() {
  renderSection('timetable');
  renderSection('assignments');
  renderSection('exams');
}

function renderSection(section) {
  if (section === 'timetable') renderTimetable();
  else if (section === 'assignments') renderAssignments();
  else if (section === 'exams') renderExams();
}

// ─── TIMETABLE RENDERING ────────────────────────────────

function renderTimetable() {
  const container = document.getElementById('timetableContainer');
  const editMode = editModes.timetable;
  const editModeEl = document.getElementById('timetableEditMode');
  const editControlsEl = document.getElementById('timetableEditControls');
  
  if (editModeEl) editModeEl.style.display = editMode ? 'block' : 'none';
  if (editControlsEl) editControlsEl.style.display = editMode ? 'flex' : 'none';

  const today = new Date().toISOString().split('T')[0];
  const todayClasses = dashboardData.classes
    .filter(c => c.date === today)
    .sort((a, b) => a.time.localeCompare(b.time));

  if (todayClasses.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>No classes for today</p></div>';
    return;
  }

  if (editMode) {
    container.innerHTML = todayClasses.map(cls => `
      <div class="item-edit-container">
        <div class="item-content">
          <strong>${cls.name}</strong>
          <small>⏰ ${cls.time}</small>
          ${cls.details ? `<small>${cls.details}</small>` : ''}
        </div>
        <div class="item-edit-buttons">
          <button class="item-edit-btn">Edit</button>
          <button class="item-remove-btn" onclick="deleteItem('timetable', ${cls.id})">Remove</button>
        </div>
      </div>
    `).join('');
  } else {
    container.innerHTML = todayClasses.map(cls => `
      <div class="timetable-item">
        <div class="timetable-time">${cls.time}</div>
        <div class="timetable-details">
          <div class="timetable-subject">${cls.name}</div>
          ${cls.details ? `<div class="timetable-room">${cls.details}</div>` : ''}
        </div>
        <div class="timetable-status">Active</div>
      </div>
    `).join('');
  }
}

// ─── ASSIGNMENTS RENDERING ──────────────────────────────

function renderAssignments() {
  const container = document.getElementById('assignmentsList');
  const editMode = editModes.assignments;
  const editModeEl = document.getElementById('assignmentsEditMode');
  const editControlsEl = document.getElementById('assignmentsEditControls');
  
  if (editModeEl) editModeEl.style.display = editMode ? 'block' : 'none';
  if (editControlsEl) editControlsEl.style.display = editMode ? 'flex' : 'none';

  const assignments = dashboardData.assignments.sort((a, b) => 
    new Date(a.deadline) - new Date(b.deadline)
  );

  if (assignments.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>No assignments</p></div>';
    return;
  }

  if (editMode) {
    container.innerHTML = assignments.map(assign => `
      <div class="item-edit-container">
        <div class="item-content">
          <strong>${assign.title}</strong>
          <small>📚 ${assign.subject}</small>
          <small>📅 ${formatDate(new Date(assign.deadline))}</small>
          ${assign.details ? `<small>${assign.details}</small>` : ''}
        </div>
        <div class="item-edit-buttons">
          <button class="item-edit-btn">Edit</button>
          <button class="item-remove-btn" onclick="deleteItem('assignments', ${assign.id})">Remove</button>
        </div>
      </div>
    `).join('');
  } else {
    container.innerHTML = assignments.map(assign => {
      const daysUntil = Math.ceil((new Date(assign.deadline) - new Date()) / (1000 * 60 * 60 * 24));
      const isUrgent = daysUntil <= 3;

      return `
        <div class="assignment-item ${isUrgent ? 'urgent' : ''}">
          <div style="flex:1;">
            <div class="assignment-title">${assign.title}</div>
            <div class="assignment-subject">${assign.subject}</div>
            <div class="assignment-deadline">⏰ Due ${formatTime(new Date(assign.deadline))}</div>
            ${assign.details ? `<div style="font-size:0.8rem;color:var(--gray);margin-top:4px;">${assign.details}</div>` : ''}
          </div>
          <div class="assignment-tag ${isUrgent ? 'urgent' : ''}">
            ${isUrgent ? 'URGENT' : 'Normal'}
          </div>
        </div>
      `;
    }).join('');
  }
}

// ─── EXAMS RENDERING ────────────────────────────────────

function renderExams() {
  const container = document.getElementById('examsTimeline');
  const editMode = editModes.exams;
  const editModeEl = document.getElementById('examsEditMode');
  const editControlsEl = document.getElementById('examsEditControls');
  
  if (editModeEl) editModeEl.style.display = editMode ? 'block' : 'none';
  if (editControlsEl) editControlsEl.style.display = editMode ? 'flex' : 'none';

  const exams = dashboardData.exams.sort((a, b) => 
    new Date(a.date) - new Date(b.date)
  );

  if (exams.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>No upcoming exams</p></div>';
    return;
  }

  if (editMode) {
    container.innerHTML = exams.map(exam => `
      <div class="item-edit-container">
        <div class="item-content">
          <strong>${exam.name}</strong>
          <small>📅 ${formatDate(new Date(exam.date))}</small>
          ${exam.details ? `<small>${exam.details}</small>` : ''}
        </div>
        <div class="item-edit-buttons">
          <button class="item-edit-btn">Edit</button>
          <button class="item-remove-btn" onclick="deleteItem('exams', ${exam.id})">Remove</button>
        </div>
      </div>
    `).join('');
  } else {
    container.innerHTML = exams.map(exam => {
      const date = new Date(exam.date);
      const day = String(date.getDate()).padStart(2, '0');
      const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();

      return `
        <div class="exam-item">
          <div class="exam-date-box">
            <div class="exam-date-day">${day}</div>
            <div class="exam-date-month">${month}</div>
          </div>
          <div class="exam-info">
            <div class="exam-name">${exam.name}</div>
            ${exam.details ? `<div class="exam-meta">${exam.details}</div>` : ''}
            <div class="exam-badge">📝 EXAM</div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// ─── UTILITY FUNCTIONS ───────────────────────────────────

function formatDate(date) {
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function formatTime(date) {
  const now = new Date();
  const diffDays = Math.ceil((date - now) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays < 0) return `${Math.abs(diffDays)} days ago`;
  return `in ${diffDays} days`;
}

function showMessage(text, type = 'info') {
  const messageDiv = document.createElement('div');
  messageDiv.className = `${type}-message`;
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// ─── CALENDAR RENDERING ─────────────────────────────────

function renderCalendar() {
  const container = document.getElementById('miniCalendar');
  if (!container) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayDate = today.getDate();

  let html = `
    <div class="calendar-weekdays">
      <div class="calendar-weekday">Sun</div>
      <div class="calendar-weekday">Mon</div>
      <div class="calendar-weekday">Tue</div>
      <div class="calendar-weekday">Wed</div>
      <div class="calendar-weekday">Thu</div>
      <div class="calendar-weekday">Fri</div>
      <div class="calendar-weekday">Sat</div>
    </div>
    <div class="calendar-days">
  `;

  // Empty cells before month starts
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="calendar-day other-month"></div>`;
  }

  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === todayDate;
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    let hasClasses = dashboardData.classes.some(c => c.date === dateStr);
    let hasExams = dashboardData.exams.some(e => e.date === dateStr);
    let hasAssignments = dashboardData.assignments.some(a => a.deadline === dateStr);

    let classNames = 'calendar-day';
    if (isToday) classNames += ' today';
    if (hasClasses) classNames += ' class-day';
    if (hasExams) classNames += ' exam-day';
    if (hasAssignments) classNames += ' assignment-day';

    html += `<div class="${classNames}">${day}</div>`;
  }

  html += `</div>`;
  container.innerHTML = html;
}

// ─── INITIALIZATION ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initializeDashboard();
  renderCalendar();
});