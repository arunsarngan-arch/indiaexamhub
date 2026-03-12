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