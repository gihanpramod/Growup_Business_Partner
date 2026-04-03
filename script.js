// Transparent → frosted-glass navbar on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        menuToggle.classList.toggle('open', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            menuToggle.classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('open');
            menuToggle.classList.remove('open');
            document.body.classList.remove('menu-open');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            // Navbar
            nav_home: "Home",
            nav_about: "About",
            nav_programs: "Programs",
            nav_services: "Services",
            nav_autopilot: "AutoPilot",
            nav_execution: "Execution",
            nav_cases: "Case Studies",
            nav_contact: "Contact",
            nav_112_day: "112 Day System",

            // Home Page
            hero_title: "112 Day Business Growth & AutoPilot System",
            hero_subtitle: "We don’t just do marketing. We build systems that grow and run your business better.",
            hero_desc: "At Grow Up Partner, we combine digital marketing, SOP systems, KPI tracking, and staff training to transform your business into a structured, scalable, and result-driven operation.",
            hero_cta1: "Get 48 Hours Analysis",
            hero_cta2: "Talk To Us",

            what_we_do_title: "What We Do",
            what_we_do_subtitle: "We Build Businesses In 3 Powerful Layers",
            wwd_layer1_title: "1. Growth Marketing",
            wwd_layer1_desc: "Increase visibility, generate leads, and boost conversions through strategic digital marketing.",
            wwd_layer2_title: "2. Business Systems",
            wwd_layer2_desc: "Create SOPs and AutoPilot processes to make your business run smoothly without constant owner involvement.",
            wwd_layer3_title: "3. Performance Control",
            wwd_layer3_desc: "Track your business growth using KPI systems and structured reporting.",

            core_services_title: "Our Core Services",
            srv_48hrs: "48 Hours Business Analysis",
            srv_growth_mkt: "Growth Marketing Services",
            srv_sop: "SOP Development",
            srv_autopilot: "AutoPilot Mode Implementation",
            srv_kpi: "KPI Monitoring System",
            srv_staff: "Staff Training",
            srv_21days: "21 Days Business Growth Program",
            srv_112days: "112 Day Full Growth System",
            view_all_services: "View All Service Details",

            why_choose_title: "Why Choose Us",
            why1: "Marketing + System + Strategy in one solution",
            why2: "Results-focused execution",
            why3: "Structured business growth approach",
            why4: "Reduce owner dependency",
            why5: "KPI-based measurable performance",
            why6: "Staff training included",
            why7: "112-day transformation model",

            hiw_title: "How It Works",
            hiw_step1: "48 Hours Business Analysis",
            hiw_step2: "Strategy & Growth Plan",
            hiw_step3: "Implementation (Marketing + SOP + KPI + Training)",
            hiw_step4: "AutoPilot Business System",

            final_cta_title: "Your Business Can Grow Faster — With the Right System",
            final_cta_desc: "Start your journey today with our 48-hour business analysis.",
            phone_number: "+94 77 902 9696",
            brand_line: "We don’t just grow your business. We build systems that keep it growing.",
            
            // About Page
            about_title: "Who We Are",
            about_desc: "Grow Up Partner (Pvt) Ltd is a results-driven business growth and digital transformation company.",
            about_desc2: "We help business owners not only market their business but also build systems that allow their business to grow, scale, and operate efficiently.",
            about_mission_title: "Our Mission",
            about_mission_desc: "To help businesses grow through structured systems, smart marketing, and measurable performance.",
            about_approach_title: "Our Approach",
            about_approach_subtitle: "We focus on:",
            app1: "Understanding your business deeply",
            app2: "Building customized growth strategies",
            app3: "Implementing SOP and AutoPilot systems",
            app4: "Training your staff",
            app5: "Tracking results through KPI",
            about_diff_title: "What Makes Us Different",
            about_diff_desc: "Most agencies only handle marketing. We handle your business growth as a system.",

            // Services Page Details
            services_header_title: "Our Services",
            services_header_desc: "Comprehensive solutions designed to build systems that scale your business.",
            
            srv1_title: "1. 48 Hours Business Analysis",
            srv1_desc: "Understand your current business position within 48 hours.",
            srv1_p1: "Marketing performance review", srv1_p2: "Social media analysis", srv1_p3: "Customer communication gaps", srv1_p4: "Sales process evaluation", srv1_p5: "Growth opportunities",
            
            srv2_title: "2. Growth Marketing Services",
            srv2_desc: "Complete digital marketing solutions to increase visibility and conversions.",
            srv2_p1: "Social Media Management", srv2_p2: "Content Creation (Reels, Images, Videos)", srv2_p3: "Meta Ads Campaigns", srv2_p4: "WhatsApp Marketing", srv2_p5: "Google Business Profile & Review Boost",

            srv3_title: "3. SOP Development",
            srv3_desc: "We create structured systems for your daily business operations.",
            srv3_p1: "Staff SOP", srv3_p2: "Sales SOP", srv3_p3: "Customer handling SOP", srv3_p4: "Reporting SOP", srv3_p5: "Operational workflows",

            srv4_title: "4. AutoPilot Mode Implementation",
            srv4_desc: "Make your business run without constant owner involvement.",
            srv4_p1: "Process automation planning", srv4_p2: "Workflow structuring", srv4_p3: "Accountability systems",  srv4_p4: "Daily tracking system",

            srv5_title: "5. KPI Monitoring System",
            srv5_desc: "Measure your business performance with data.",
            srv5_p1: "KPI setup & Dashboard", srv5_p2: "Sales tracking", srv5_p3: "Marketing performance tracking", srv5_p4: "Staff performance tracking",

            srv6_title: "6. Staff Training",
            srv6_desc: "Train your team to perform better and support business growth.",
            srv6_p1: "Customer handling", srv6_p2: "Communication skills", srv6_p3: "Sales mindset", srv6_p4: "SOP usage & Reporting discipline",

            srv_badge_02: "SERVICE 02", srv_badge_03: "SERVICE 03", srv_badge_04: "SERVICE 04", srv_badge_05: "SERVICE 05", srv_badge_06: "SERVICE 06",

            srv7_title: "7. 21 Days Business Growth Program",
            srv7_desc: "Structured training program for business owners.",
            srv7_p1: "Business growth strategy", srv7_p2: "Marketing understanding", srv7_p3: "SOP & systems", srv7_p4: "KPI awareness & Execution mindset",

            srv8_title: "8. 112 Day Business Growth & AutoPilot System",
            srv8_desc: "Our flagship service that transforms your business. Combines all major services.",
            learn_more: "Learn More About 112 Days",

            // 112 Day System Page
            "112_header_title": "Transform Your Business in 112 Days",
            "112_header_desc": "Our 112 Day Business Growth & AutoPilot System is designed to help your business grow, systemize, and run efficiently.",
            "112_get_title": "WHAT YOU GET",
            get1: "Clear business strategy", get2: "Strong marketing system", get3: "SOP for operations", get4: "AutoPilot workflow", get5: "KPI tracking system", get6: "Trained staff", get7: "Measurable results",
            "112_result_title": "RESULT YOU CAN EXPECT",
            res1: "More leads", res2: "Better customer handling", res3: "Strong team performance", res4: "Reduced owner workload", res5: "Structured business growth",
            guarantee_title: "OUR GUARANTEE",
            guarantee_desc: "If agreed targets are not achieved, we offer a 100% money-back guarantee (as per agreement).",
            "112_cta_title": "Start with 48 Hours Business Analysis today.",

            // Contact Page
            contact_title: "Contact Us",
            contact_desc: "Let’s build your business the right way.",
            reach_out: "Reach Out to Us",
            phone_label: "Phone:",
            email_label: "Email:",
            form_name: "Name",
            form_email: "Email",
            form_message: "Message",
            form_submit: "Book Your 48-Hour Business Analysis Now",

            footer_copy: "© 2026 Grow Up Business Partner (Pvt) Ltd. All Rights Reserved.",

            // Programs Page
            prog_header_title: "Our Growth Programs", prog_header_desc: "Three structured programs to diagnose, train, and transform your business — each designed to build on the last.",
            prog_badge_01: "PROGRAM 01", prog_48h_title: "48-Hour Business Analysis", prog_48h_desc: "Get a complete, expert-led picture of your business health in just 48 hours — targeted, specific, and immediately actionable.", prog_48h_highlight: "🎯 The perfect starting point — no commitment required", prog_btn_free: "Get Free Analysis", prog_btn_call: "Book Strategy Call", prog_inc_title: "What's Included:", prog_inc_1: "Marketing performance review", prog_inc_2: "Social media & digital presence audit", prog_inc_3: "Sales process evaluation", prog_inc_4: "Customer journey mapping", prog_inc_5: "Competitor gap analysis", prog_inc_6: "Hidden growth opportunity identification", prog_inc_7: "Detailed written report delivered in 48 hrs",
            prog_badge_02: "PROGRAM 02", prog_21d_title: "21 Days Business Growth Training", prog_21d_desc: "An intensive, owner-focused training program that gives you clarity, systems, and a growth playbook — in 3 focused weeks.", prog_wk1_badge: "WEEK 1", prog_wk1_title: "Foundation", prog_wk1_desc: "Business mindset reset, vision clarification, understanding your ideal customer, and core marketing fundamentals that drive growth.", prog_wk2_badge: "WEEK 2", prog_wk2_title: "Systems", prog_wk2_desc: "SOP development, KPI framework setup, process documentation, and building accountability systems for your team.", prog_wk3_badge: "WEEK 3", prog_wk3_title: "Execution", prog_wk3_desc: "Growth execution plan, lead handling systems, digital marketing activation, and AutoPilot transition strategy.", prog_out_title: "Program Outcome", prog_out_desc: "By the end of 21 days, you have a complete, customized business growth roadmap — ready to implement immediately with confidence.", prog_btn_book: "Book the Training",
            prog_badge_03: "PROGRAM 03", prog_112d_title: "112 Days Business Growth & AutoPilot System", prog_112d_desc: "Our flagship transformation program — complete business restructuring, marketing launch, and AutoPilot activation across 4 phases.", prog_ph1_badge: "PHASE 1 · Days 1–28", prog_ph1_title: "Diagnosis", prog_ph1_1: "Full business audit", prog_ph1_2: "Competitor analysis", prog_ph1_3: "Strategy development", prog_ph2_badge: "PHASE 2 · Days 29–56", prog_ph2_title: "SOP Development", prog_ph2_1: "Process documentation", prog_ph2_2: "Staff training", prog_ph2_3: "Systems setup", prog_ph3_badge: "PHASE 3 · Days 57–84", prog_ph3_title: "KPI System", prog_ph3_1: "KPI dashboard", prog_ph3_2: "Performance tracking", prog_ph3_3: "Reporting workflows", prog_ph4_badge: "PHASE 4 · Days 85–112", prog_ph4_title: "Full Execution", prog_ph4_1: "Marketing launch", prog_ph4_2: "Optimization & scaling", prog_ph4_3: "AutoPilot activation",
            prog_get_title: "What You Get", prog_get_1: "Clear business strategy", prog_get_2: "Strong marketing system", prog_get_3: "SOP for all operations", prog_get_4: "AutoPilot workflow", prog_get_5: "KPI tracking system", prog_get_6: "Trained, accountable staff", prog_get_7: "Measurable, documented results", prog_res_title: "Results You Can Expect", prog_res_1: "More qualified leads", prog_res_2: "Better customer handling", prog_res_3: "Stronger team performance", prog_res_4: "Reduced owner workload", prog_res_5: "Structured, scalable growth", prog_btn_start: "Start Your 112 Day Journey →", prog_gua_title: "Our Guarantee", prog_gua_desc: "If agreed targets are not achieved within the 112-day timeline, we offer a 100% money-back guarantee — as per signed agreement.",

            // AutoPilot Page
            ap_header_title: "AutoPilot Business Mode", ap_header_desc: "Build systems so your business runs consistently — even when you're not there.",
            ap_badge_success: "DEFINING SUCCESS", ap_badge_warning: "WARNING SIGNS",
            ap_what_title: "What is AutoPilot Mode?", ap_what_desc1: "AutoPilot Mode is the state where your business runs smoothly and predictably — without requiring your constant presence or intervention.", ap_what_desc2: "It is achieved when your SOPs, KPI systems, and execution processes work together seamlessly, and your team knows exactly what to do at every step — without asking you.", ap_what_think_strong: "Think of it as:", ap_what_think_desc: "Your business operating like a well-oiled machine — with or without you physically present.", ap_signs_title: "⚠️ Signs Your Business Needs AutoPilot:", ap_signs_1: "You work 60+ hours a week in your business", ap_signs_2: "Business slows or stops when you take a day off", ap_signs_3: "Staff don't know what to do without your directions", ap_signs_4: "No consistent lead flow or follow-up system", ap_signs_5: "Revenue is unpredictable month to month", ap_signs_6: "Scaling feels impossible without hiring more of yourself",
            ap_pillars_title: "The AutoPilot System: 3 Pillars", ap_pillars_desc: "AutoPilot Mode is built on three integrated systems working in sync.", ap_pil1_title: "SOP System", ap_pil1_desc: "Clear, documented Standard Operating Procedures for every business function — from customer handling to staff reporting. Your team follows the playbook, not guesswork.", ap_pil1_1: "Sales SOP", ap_pil1_2: "Customer handling SOP", ap_pil1_3: "Reporting SOP", ap_pil2_title: "KPI Dashboard", ap_pil2_desc: "Real-time performance tracking across marketing, sales, and operations. You see exactly what's working and where to improve — at a single glance.", ap_pil2_1: "Sales & revenue tracking", ap_pil2_2: "Marketing performance metrics", ap_pil2_3: "Staff performance indicators", ap_pil3_title: "Execution Engine", ap_pil3_desc: "Marketing, content, ads, and lead handling running on pre-built, repeatable systems. Consistent execution without daily owner involvement.", ap_pil3_1: "Automated lead flow", ap_pil3_2: "Content delivery schedule", ap_pil3_3: "Campaign management system",
            ap_bene_title: "Benefits of AutoPilot Mode", ap_bene1_title: "Reduced Owner Dependency", ap_bene1_desc: "Your business no longer revolves around you. Staff are trained, systems are running, decisions are tracked — independently.", ap_bene2_title: "Scalable Operations", ap_bene2_desc: "Add more customers, staff, or locations — without starting from scratch. Your systems scale seamlessly with growth.", ap_bene3_title: "Consistent Growth", ap_bene3_desc: "No more peaks and valleys. AutoPilot Mode creates predictable, consistent revenue and customer flow every single month.",
            ap_who_title: "Who is AutoPilot Mode For?", ap_who1_title: "Overworked Business Owners", ap_who1_desc: "Who are tired of being the bottleneck and want to reclaim their time while maintaining — or growing — revenue.", ap_who2_title: "Growing Companies", ap_who2_desc: "With 5+ staff who need consistent systems to ensure performance doesn't drop as the team expands.", ap_who3_title: "Entrepreneurs Ready to Scale", ap_who3_desc: "Who have validated their offer and now need the operational infrastructure to grow without chaos.", ap_who4_title: "Businesses Seeking Consistency", ap_who4_desc: "That experience unpredictable revenue, inconsistent service delivery, or rely too heavily on a few key people.", ap_cta_title: "Ready to Put Your Business on AutoPilot?", ap_cta_desc: "Start with our free 48-hour business analysis — we'll map out your AutoPilot journey together.", ap_btn_free: "Get Free 48-Hour Analysis", ap_btn_prog: "View All Programs",

            // Execution Page
            exec_header_title: "Execution Services", exec_header_desc: "Hands-on, expert-led execution to fuel your business growth — every service delivered as part of your overall growth system.",
            exec_social_title: "Social Media Management", exec_social_desc: "Full monthly management of your Facebook, Instagram, and LinkedIn presence — from strategy and scheduling to daily posting, community engagement, and growth tracking.", exec_social_ben: "⚡ Key Benefit: Consistent brand presence that keeps your audience engaged 24/7",
            exec_content_title: "Content Creation", exec_content_desc: "Professional reels, product images, brand videos, infographics, and carousels — fully optimized for engagement and conversion on all major platforms.", exec_content_ben: "⚡ Key Benefit: Content that converts followers into paying customers — consistently",
            exec_ads_title: "Meta & Google Ads Campaigns", exec_ads_desc: "Highly targeted advertising campaigns across Facebook, Instagram, and Google — with clear ROI tracking, A/B testing, and regular optimization to maximize results.", exec_ads_ben: "⚡ Key Benefit: Measurable, trackable leads from every dollar spent on advertising",
            exec_wa_title: "WhatsApp & Email Marketing", exec_wa_desc: "Automated follow-up sequences, broadcast campaigns, and nurture flows via WhatsApp and email — designed to convert leads who aren't ready to buy yet.", exec_wa_ben: "⚡ Key Benefit: Re-engage warm leads on autopilot — without extra manual effort",
            exec_gmb_title: "Google My Business Management", exec_gmb_desc: "Full GMB profile optimization, regular posting, Q&amp;A management, photo updates, and a strategic approach to maximizing local search visibility.", exec_gmb_ben: "⚡ Key Benefit: Dominate local search results and be found by ready-to-buy customers",
            exec_review_title: "Review Boost Strategy", exec_review_desc: "A systematic, ethical approach to gathering more 5-star Google and Facebook reviews — including customer request templates, follow-up sequences, and response management.", exec_review_ben: "⚡ Key Benefit: Build social proof and trust before prospects even contact you",
            exec_staff_title: "Staff Training & Development", exec_staff_desc: "Structured training for your team covering customer handling, communication skills, sales mindset, SOP usage, and performance reporting — designed to make your team operate at its highest level.", exec_staff_1: "Customer communication & handling", exec_staff_2: "Sales mindset & conversion techniques", exec_staff_3: "SOP usage & daily reporting discipline", exec_staff_4: "Time management & accountability", exec_staff_5: "Brand representation standards", exec_staff_6: "KPI awareness & performance mindset", exec_staff_ben: "⚡ Key Benefit: Your team performs at its very best — consistently, without micromanagement",
            exec_cta_title: "Ready to Start Executing?", exec_cta_desc: "All execution services are delivered as part of your custom growth system — not as standalone tasks.", exec_btn_book: "Book Strategy Call", exec_btn_prog: "View Growth Programs",

            // Case Studies Page
            case_header_title: "Client Success Stories", case_header_desc: "Real results from real businesses. See how our system-driven approach transforms companies — from chaos to clarity.",
            case1_tag: "Food & Beverage", case1_title: "Colombo Restaurant Group", case_lbl_prob: "🔴 Problem", case1_prob: "Inconsistent customer service across 3 outlets, no digital marketing presence, and the owner working 14+ hours a day with no clear growth direction.", case_lbl_sol: "🔵 Solution", case1_sol: "Implemented customer-handling SOPs for all outlets, launched a unified social media strategy, trained 12 staff members, and set up a KPI dashboard for daily reporting.", case_lbl_res: "🟢 Result", case1_res: "Revenue increased by <strong>40%</strong> in 3 months. Owner reduced working hours from 14 to 6 per day. All 3 outlets now operate independently using the SOP system.", case1_stat1: "Revenue Growth", case_stat_months: "Months", case1_stat2: "Owner Time Saved/Day",
            case2_tag: "Retail / Fashion", case2_title: "Kandy Fashion Boutique", case_lbl_prob2: "🔴 Problem", case2_prob: "Severe seasonal revenue drops, zero digital presence, no system for capturing or following up with leads. Relying entirely on walk-in customers.", case_lbl_sol2: "🔵 Solution", case2_sol: "Launched Instagram and Facebook management, ran targeted Meta Ads campaigns, built a WhatsApp marketing sequence for seasonal promotions, and set up a lead capture system.", case_lbl_res2: "🟢 Result", case2_res: "Instagram following grew <strong>3x</strong> in 60 days. Foot traffic increased by <strong>60%</strong>. Revenue became consistent year-round, eliminating the seasonal slump entirely.", case2_stat1: "Follower Growth", case2_stat2: "More Foot Traffic", case2_stat3_num: "Year", case2_stat3: "Round Revenue",
            case3_tag: "Education", case3_title: "Private Institute, Galle", case_lbl_prob3: "🔴 Problem", case3_prob: "Manual enrollment process causing leads to fall through the cracks, no tracking system, and staff confusion about responsibilities during peak enrollment periods.", case_lbl_sol3: "🔵 Solution", case3_sol: "Built a structured enrollment SOP, created a WhatsApp-based lead management system, trained the admissions team, and set up a KPI dashboard to track enrollment rates daily.", case_lbl_res3: "🟢 Result", case3_res: "Student enrollments doubled (<strong>2x</strong>) in just 3 months. Lead follow-up rate went from 40% to <strong>100%</strong>. Staff now operate the enrollment process independently and accurately.", case3_stat1: "Enrollments", case3_stat2: "Lead Follow-up", case_stat_months2: "Months",
            case_outcome: "These are example client transformations. Your results depend on your business, goals, and commitment to implementing the system.", case_cta_title: "Ready to Write Your Own Success Story?", case_cta_desc: "Start with a free 48-hour business analysis — and see exactly where your growth is waiting.", case_btn_free: "Get Free 48-Hour Analysis", case_btn_prog: "View Our Programs"
        },
        ta: {
            nav_home: "முகப்பு", nav_about: "பற்றி", nav_programs: "திட்டங்கள்", nav_services: "சேவைகள்", nav_autopilot: "ஆட்டோபைலட்", nav_execution: "செயல்பாடு", nav_cases: "வழக்கு ஆய்வுகள்", nav_112_day: "112 நாள் சிஸ்டம்", nav_contact: "தொடர்பு",
            
            hero_title: "112 நாள் வணிக வளர்ச்சி மற்றும் ஆட்டோபைலட் சிஸ்டம்",
            hero_subtitle: "நாங்கள் மார்க்கெட்டிங் மட்டும் செய்வதில்லை. உங்கள் வணிகத்தை வளர்க்கும் சிஸ்டங்களை உருவாக்குகிறோம்.",
            hero_desc: "Grow Up Partner-இல், உங்கள் வணிகத்தை அளவிடக்கூடிய அமைப்பாக மாற்ற டிஜிட்டல் மார்க்கெட்டிங், SOP, KPI கண்காணிப்பு மற்றும் ஊழியர் பயிற்சியை இணைக்கிறோம்.",
            hero_cta1: "48 மணிநேர பகுப்பாய்வு பெறுக",
            hero_cta2: "எங்களை தொடர்பு கொள்க",

            what_we_do_title: "நாங்கள் என்ன செய்கிறோம்",
            what_we_do_subtitle: "3 வலிமையான நிலைகளில் வணிகங்களை உருவாக்குகிறோம்",
            wwd_layer1_title: "1. வளர்ச்சி மார்க்கெட்டிங்", wwd_layer1_desc: "மூலோபாய டிஜிட்டல் மார்க்கெட்டிங் மூலம் பார்வையை அதிகரித்து விற்பனையை உயர்த்துதல்.",
            wwd_layer2_title: "2. வணிக சிஸ்டங்கள்", wwd_layer2_desc: "உரிமையாளரின் தொடர்ச்சியான ஈடுபாடு இல்லாமல் வணிகம் இயங்க SOP மற்றும் AutoPilot செயல்முறைகள்.",
            wwd_layer3_title: "3. செயல்திறன் கட்டுப்பாடு", wwd_layer3_desc: "KPI மற்றும் கட்டமைக்கப்பட்ட அறிக்கை மூலம் வணிக வளர்ச்சியை கண்காணித்தல்.",

            core_services_title: "எங்கள் முக்கிய சேவைகள்",
            srv_48hrs: "48 மணிநேர வணிக பகுப்பாய்வு", srv_growth_mkt: "வளர்ச்சி மார்க்கெட்டிங்", srv_sop: "SOP மேம்பாடு", srv_autopilot: "AutoPilot அமலாக்கம்",
            srv_kpi: "KPI கண்காணிப்பு சிஸ்டம்", srv_staff: "ஊழியர் பயிற்சி", srv_21days: "21 நாள் வணிக வளர்ச்சி திட்டம்", srv_112days: "112 நாள் முழு வளர்ச்சி அமைப்பு",
            view_all_services: "அனைத்து சேவைகளையும் காண்க",

            why_choose_title: "எங்களை ஏன் தேர்வு செய்ய வேண்டும்",
            why1: "மார்க்கெட்டிங் + சிஸ்டம் + மூலோபாயம் ஒரே தீர்வு", why2: "முடிவுகள் சார்ந்த செயல்பாடு", why3: "கட்டமைக்கப்பட்ட வளர்ச்சி அணுகுமுறை",
            why4: "உரிமையாளர் சார்புத்தன்மையை குறைத்தல்", why5: "அளவிடக்கூடிய KPI முடிவுகள்", why6: "ஊழியர் பயிற்சி இணைக்கப்பட்டுள்ளது", why7: "112 நாள் மாற்று மாதிரி",

            hiw_title: "இது எப்படி வேலை செய்கிறது",
            hiw_step1: "48 மணிநேர வணிக பகுப்பாய்வு", hiw_step2: "மூலோபாயம் மற்றும் வளர்ச்சி திட்டம்", hiw_step3: "அமலாக்கம் (மார்க்கெட்டிங் + SOP + KPI + பயிற்சி)", hiw_step4: "ஆட்டோபைலட் வணிக அமைப்பு",

            final_cta_title: "சரியான அமைப்புடன் உங்கள் வணிகம் வேகமாக வளரும்",
            final_cta_desc: "எங்கள் 48 மணிநேர வணிக பகுப்பாய்வுடன் உங்கள் பயணத்தை இன்றே தொடங்குங்கள்.",
            phone_number: "+94 77 902 9696",
            brand_line: "நாங்கள் உங்கள் வணிகத்தை வளர்ப்பது மட்டும் அல்ல, அதை தொடர்ந்து வளர்க்கும் சிஸ்டங்களை உருவாக்குகிறோம்.",
            
            about_title: "நாங்கள் யார்",
            about_desc: "Grow Up Partner (Pvt) Ltd என்பது ஒரு வணிக வளர்ச்சி மற்றும் டிஜிட்டல் மாற்று நிறுவனம்.",
            about_desc2: "உங்கள் வணிகத்தை சிறப்பாக இயக்கவும் வளரவும் உதவும் சிஸ்டங்களை உருவாக்குகிறோம்.",
            about_mission_title: "எங்கள் நோக்கம்", about_mission_desc: "கட்டமைக்கப்பட்ட அமைப்புகள் மூலம் வணிகங்களை வளர உதவுவது.",
            about_approach_title: "எங்கள் அணுகுமுறை", about_approach_subtitle: "நாங்கள் கவனம் செலுத்துவது:",
            app1: "உங்கள் வணிகத்தை ஆழமாகப் புரிந்துகொள்வது", app2: "தனிப்பயனாக்கப்பட்ட வளர்ச்சி உத்திகள்", app3: "SOP மற்றும் AutoPilot அமைப்புகள்", app4: "ஊழியர் பயிற்சி", app5: "KPI கண்காணிப்பு",
            about_diff_title: "எங்கள் தனித்துவம்", about_diff_desc: "பிற நிறுவனங்கள் மார்க்கெட்டிங் மட்டுமே செய்கின்றன. நாங்கள் உங்கள் வணிக வளர்ச்சியை ஒரு சிஸ்டமாக கையாளுகிறோம்.",

            services_header_title: "எங்கள் சேவைகள்", services_header_desc: "உங்கள் வணிகத்தை அளவிடுவதற்கான விரிவான தீர்வுகள்.",
            
            srv1_title: "1. 48 மணிநேர வணிக பகுப்பாய்வு", srv1_desc: "உங்கள் தற்போதைய வணிக நிலையை புரிந்து கொள்ளுங்கள்.",
            srv1_p1: "மார்க்கெட்டிங் விமர்சனம்", srv1_p2: "சமூக ஊடக பகுப்பாய்வு", srv1_p3: "வாடிக்கையாளர் தொடர்பு", srv1_p4: "விற்பனை செயல்முறை", srv1_p5: "வளர்ச்சி வாய்ப்புகள்",
            
            srv2_title: "2. வளர்ச்சி மார்க்கெட்டிங் சேவைகள்", srv2_desc: "பார்வை மற்றும் விற்பனையை அதிகரிக்க முழுமையான டிஜிட்டல் மார்க்கெட்டிங் தீர்வுகள்.",
            srv2_p1: "சமூக ஊடக மேலாண்மை", srv2_p2: "உள்ளடக்கம் உருவாக்கம் (Reels, படங்கள், வீடியோக்கள்)", srv2_p3: "Meta விளம்பரங்கள்", srv2_p4: "WhatsApp மார்க்கெட்டிங்", srv2_p5: "Google Business Profile & மதிப்பாய்வு உயர்வு",

            srv3_title: "3. SOP மேம்பாடு", srv3_desc: "உங்கள் அன்றாட வணிக நடவடிக்கைகளுக்கான முறையான அமைப்புகளை நாங்கள் உருவாக்குகிறோம்.",
            srv3_p1: "ஊழியர் SOP", srv3_p2: "விற்பனை SOP", srv3_p3: "வாடிக்கையாளர் கையாளுதல் SOP", srv3_p4: "அறிக்கை SOP", srv3_p5: "செயல்பாட்டு முறைகள்",

            srv4_title: "4. ஆட்டோபைலட் (AutoPilot) அமலாக்கம்", srv4_desc: "உரிமையாளரின் தொடர்ச்சியான தலையீடு இல்லாமல் உங்கள் வணிகத்தை இயங்கச் செய்யுங்கள்.",
            srv4_p1: "செயல்முறை ஆட்டோமேஷன் திட்டம்", srv4_p2: "பணிப்பாய்வு கட்டமைப்பு", srv4_p3: "பொறுப்புக்கூறல் அமைப்புகள்", srv4_p4: "தினசரி கண்காணிப்பு அமைப்பு",

            srv5_title: "5. KPI கண்காணிப்பு சிஸ்டம்", srv5_desc: "தரவுகளுடன் உங்கள் வணிகச் செயல்திறனை அளவிடுங்கள்.",
            srv5_p1: "KPI அமைப்பு & டாஷ்போர்டு", srv5_p2: "விற்பனை கண்காணிப்பு", srv5_p3: "மார்க்கெட்டிங் செயல்திறன் கண்காணிப்பு", srv5_p4: "பணியாளர் செயல்திறன் கண்காணிப்பு",

            srv6_title: "6. ஊழியர் பயிற்சி", srv6_desc: "நன்றாகச் செயல்படவும் வணிக வளர்ச்சிக்கு உதவவும் உங்கள் குழுவிற்குப் பயிற்சி அளிக்கவும்.",
            srv6_p1: "வாடிக்கையாளர் கையாளுதல்", srv6_p2: "தொடர்புத் திறன்", srv6_p3: "விற்பனை மனநிலை", srv6_p4: "SOP பயன்பாடு & அறிக்கை ஒழுக்கம்",

            srv_badge_02: "சேவை 02", srv_badge_03: "சேவை 03", srv_badge_04: "சேவை 04", srv_badge_05: "சேவை 05", srv_badge_06: "சேவை 06",

            srv7_title: "7. 21 நாள் வளர்ச்சி திட்டம்", srv7_desc: "உரிமையாளர்களுக்கான பயிற்சி.",
            srv7_p1: "வளர்ச்சி உத்தி", srv7_p2: "மார்க்கெட்டிங் புரிதல்", srv7_p3: "SOP மற்றும் அமைப்புகள்", srv7_p4: "KPI விழிப்புணர்வு",

            srv8_title: "8. 112 நாள் வணிக வளர்ச்சி சிஸ்டம்", srv8_desc: "உங்கள் வணிகத்தை முழுமையாக மாற்றும் முதன்மை சேவை.", learn_more: "மேலும் அறிய",

            "112_header_title": "112 நாட்களில் உங்கள் வணிகத்தை மாற்றுங்கள்", "112_header_desc": "வணிகத்தை வளர்க்கவும், முறைப்படுத்தவும் வடிவமைக்கப்பட்டுள்ளது.",
            "112_get_title": "உங்களுக்கு கிடைப்பது", get1: "தெளிவான உத்தி", get2: "வலுவான மார்க்கெட்டிங்", get3: "SOP செயல்பாடுகள்", get4: "ஆட்டோபைலட் முறை", get5: "KPI கண்காணிப்பு", get6: "பயிற்சி பெற்ற ஊழியர்கள்", get7: "அளவிடக்கூடிய முடிவுகள்",
            "112_result_title": "எதிர்பார்க்கக்கூடிய முடிவுகள்", res1: "அதிக லீட்ஸ்", res2: "சிறந்த வாடிக்கையாளர் மேலாண்மை", res3: "வலுவான குழு", res4: "உரிமையாளர் பணிச்சுமை குறைவு", res5: "கட்டமைக்கப்பட்ட வளர்ச்சி",
            guarantee_title: "எங்கள் உத்தரவாதம்", guarantee_desc: "ஒப்புக்கொள்ளப்பட்ட இலக்குகள் எட்டப்படாவிட்டால், 100% பணம் திரும்ப வழங்கும் உத்தரவாதம்.", "112_cta_title": "48 மணிநேர வணிக பகுப்பாய்வுடன் தொடங்குங்கள்.",

            contact_title: "தொடர்பு கொள்க", contact_desc: "உங்கள் வணிகத்தை சரியாக கட்டமைப்போம்.", reach_out: "எங்களை தொடர்பு கொள்ள", phone_label: "தொலைபேசி:", email_label: "மின்னஞ்சல்:",
            form_name: "பெயர்", form_email: "மின்னஞ்சல்", form_message: "செய்தி", form_submit: "48 மணிநேர பகுப்பாய்வை பதிவு செய்யவும்",
            footer_copy: "© 2026 Grow Up Business Partner (Pvt) Ltd. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

            // Programs Page (Tamil)
            prog_header_title: "எங்கள் வளர்ச்சி திட்டங்கள்", prog_header_desc: "உங்கள் வணிகத்தை பகுப்பாய்வு செய்யவும், பயிற்றுவிக்கவும் மற்றும் மாற்றவும் 3 கட்டமைக்கப்பட்ட திட்டங்கள்.",
            prog_badge_01: "திட்டம் 01", prog_48h_title: "48 மணிநேர வணிக பகுப்பாய்வு", prog_48h_desc: "48 மணி நேரத்திற்குள் உங்கள் வணிக ஆரோக்கியம் பற்றிய முழுமையான புரிதலைப் பெறுங்கள் — உடனடியாக செயல்படக்கூடிய உத்திகளுடன்.", prog_48h_highlight: "🎯 ஆரம்பிக்க சிறந்த இடம் — எந்த கட்டாயமும் இல்லை", prog_btn_free: "இலவச பகுப்பாய்வை பெறவும்", prog_btn_call: "உத்தி அழைப்பை பதிவு செய்யவும் (Strategy Call)", prog_inc_title: "உள்ளடங்குபவை:", prog_inc_1: "மார்க்கெட்டிங் செயல்திறன் மதிப்பாய்வு", prog_inc_2: "சமூக ஊடக மற்றும் டிஜிட்டல் தணிக்கை", prog_inc_3: "விற்பனை செயல்முறை மதிப்பீடு", prog_inc_4: "வாடிக்கையாளர் பயணம் மேப்பிங்", prog_inc_5: "போட்டியாளர் பகுப்பாய்வு", prog_inc_6: "மறைந்துள்ள வளர்ச்சி வாய்ப்புகள் அடையாளம்", prog_inc_7: "48 மணிநேரத்தில் விரிவான ரிகார்ட்",
            prog_badge_02: "திட்டம் 02", prog_21d_title: "21 நாட்கள் வணிக வளர்ச்சி பயிற்சி", prog_21d_desc: "உரிமையாளர்களுக்கான தீவிர பயிற்சி திட்டம், வணிகத்தின் கட்டமைப்பு, சிஸ்டம்கள் மற்றும் வளர்ச்சி நடைமுறைகளை 3 வாரங்களில் வழங்குகிறது.", prog_wk1_badge: "வாரம் 1", prog_wk1_title: "அடித்தளம்", prog_wk1_desc: "வணிக மனப்பான்மை மாற்றம், பார்வை தெளிவு, வாடிக்கையாளர் புரிதல் மற்றும் வளர்ச்சிக்கு தேவையான மார்க்கெட்டிங் அடிப்படைகள்.", prog_wk2_badge: "வாரம் 2", prog_wk2_title: "சிஸ்டம்கள்", prog_wk2_desc: "SOP வளர்ச்சி, KPI கட்டமைப்பு, செயல்முறை ஆவணம் மற்றும் குழுவிற்கான பொறுப்பு சிஸ்டம்கள் உருவாக்குதல்.", prog_wk3_badge: "வாரம் 3", prog_wk3_title: "செயலாக்கம்", prog_wk3_desc: "வளர்ச்சி உத்தி செயல்படுத்தல், லீட் கையாளுதல் சிஸ்டம், டிஜிட்டல் மார்க்கெட்டிங் தொடக்கம் மற்றும் ஆட்டோபைலட் (AutoPilot) உத்தி.", prog_out_title: "பயிற்சி விளைவுகள்", prog_out_desc: "21 நாட்களின் முடிவில், உங்கள் வணிக வளர்ச்சிக்கான முழுமையான மற்றும் தனிப்பயனாக்கப்பட்ட திட்டத்தை பெறுவீர்கள் — உடனடியாக செயல்படுத்தக்கூடிய உத்திகளுடன்.", prog_btn_book: "பயிற்சி பதிவு செய்யவும்",
            prog_badge_03: "திட்டம் 03", prog_112d_title: "112 நாட்கள் வணிக வளர்ச்சி & AutoPilot சிஸ்டம்", prog_112d_desc: "எங்கள் முதன்மை மாற்றுத் திட்டம் — வணிகத்தின் முழுமையான மறுசீரமைப்பு, மார்க்கெட்டிங் வெளியீடு மற்றும் முன்கூட்டிய ஆட்டோபைலட் சிஸ்டம் 4 கட்டங்களில்.", prog_ph1_badge: "கட்டம் 1 · நாட்கள் 1–28", prog_ph1_title: "நோயறிதல் (Diagnosis)", prog_ph1_1: "முழு வணிக தணிக்கை", prog_ph1_2: "போட்டியாளர் பகுப்பாய்வு", prog_ph1_3: "உத்தி மேம்பாடு", prog_ph2_badge: "கட்டம் 2 · நாட்கள் 29–56", prog_ph2_title: "SOP உருவாக்கம்", prog_ph2_1: "செயல்முறை ஆவணம் (Process Documentation)", prog_ph2_2: "பணியாளர் பயிற்சி", prog_ph2_3: "சிஸ்டம் அமைப்பு", prog_ph3_badge: "கட்டம் 3 · நாட்கள் 57–84", prog_ph3_title: "KPI சிஸ்டம்", prog_ph3_1: "KPI டாஷ்போர்டு (Dashboard)", prog_ph3_2: "செயல்திறன் கண்காணிப்பு", prog_ph3_3: "அறிக்கை செயல்முறை", prog_ph4_badge: "கட்டம் 4 · நாட்கள் 85–112", prog_ph4_title: "முழு செயலாக்கம் (Full Execution)", prog_ph4_1: "மார்க்கெட்டிங் வெளியீடு", prog_ph4_2: "மேம்பாடு & அளவீடு (Scaling)", prog_ph4_3: "ஆட்டோபைலட் (AutoPilot) செயல்பாடு",
            prog_get_title: "நீங்கள் பெறுபவை", prog_get_1: "தெளிவான வணிக உத்தி", prog_get_2: "வலுவான மார்க்கெட்டிங் சிஸ்டம்", prog_get_3: "SOP செயல்பாடுகள்", prog_get_4: "ஆட்டோபைலட் (AutoPilot) முறை", prog_get_5: "KPI கண்காணிப்பு சிஸ்டம்", prog_get_6: "பயிற்சி பெற்ற பணியாளர்கள்", prog_get_7: "அளவிடக்கூடிய, ஆவணப்படுத்தப்பட்ட முடிவுகள்", prog_res_title: "எதிர்பார்க்கக்கூடிய முடிவுகள்", prog_res_1: "முக்கியமான லீட்ஸ் அதிகரிப்பு", prog_res_2: "சிறந்த வாடிக்கையாளர் கையாளுதல்", prog_res_3: "வலுவான குழுவின் செயல்திறன்", prog_res_4: "உரிமையாளர் வேலைப்பளு குறைப்பு", prog_res_5: "திட்டமிடப்பட்ட, அளவிடக்கூடிய வளர்ச்சி", prog_btn_start: "உங்கள் 112 நாட்கள் பயணத்தை தொடங்குக →", prog_gua_title: "எங்கள் உத்தரவாதம்", prog_gua_desc: "ஒப்புக்கொள்ளப்பட்ட இலக்குகள் 112 நாட்களுக்குள் அடையப்படாவிட்டால், நாங்கள் 100% பணம் திரும்பப் பெறும் உத்தரவாதம் வழங்குகிறோம் (ஒப்பந்தத்தின்படி).",

            // AutoPilot Page (Tamil)
            ap_header_title: "ஆட்டோபைலட் (AutoPilot) வணிக முறை", ap_header_desc: "உரிமையாளரின் தொடர்ச்சியான ஈடுபாடு இல்லாமல் வணிகம் இயங்க சிஸ்டம்களை உருவாக்குதல்.",
            ap_badge_success: "வெற்றியை வரையறுத்தல்", ap_badge_warning: "எச்சரிக்கை அறிகுறிகள்",
            ap_what_title: "ஆட்டோபைலட் (AutoPilot) முறை என்றால் என்ன?", ap_what_desc1: "ஆட்டோபைலட் (AutoPilot) முறை என்பது உங்கள் வணிகம் சுமூகமாகவும் கணிக்கக்கூடிய வகையிலும் உங்கள் தொடர்ச்சியான தலையீடு இல்லாமல் செயல்படும் நிலையை குறிக்கும்.", ap_what_desc2: "SOPகள், KPI சிஸ்டம்கள் மற்றும் செயல்முறைகள் ஒருங்கிணைந்து செயல்படும்போது, உங்கள் குழுவிற்கு என்ன செய்ய வேண்டும் என்பது சரியாக தெரியும் — அது உங்களை கேட்காமலேயே நடைபெறும்.", ap_what_think_strong: "இதை இவ்வாறு எண்ணலாம்:", ap_what_think_desc: "உங்கள் வணிகம் ஒரு சிறப்பான இயந்திரம் போல செயல்படும் — நீங்கள் உடல் ரீதியாக இருக்கிறீர்களோ இல்லையோ.", ap_signs_title: "⚠️ உங்கள் வணிகத்திற்கு ஆட்டோபைலட் முறை தேவை என்பதற்கான அறிகுறிகள்:", ap_signs_1: "நீங்கள் உங்கள் வணிகத்தில் வாரம் 60+ மணிநேரம் வேலை செய்வது", ap_signs_2: "நீங்கள் ஒரு நாள் விடுப்பு எடுத்தால் வணிகம் மெதுவாகிறது அல்லது நின்றுவிடுவது", ap_signs_3: "உங்கள் வழிகாட்டுதல்கள் இல்லாமல் பணியாளர்களுக்கு என்ன செய்ய வேண்டும் என்று தெரியாத நிலை", ap_signs_4: "நிலையான லீட்-க்ளோ அல்லது பின்தொடரும் சிஸ்டம் இல்லாமல் இருப்பது", ap_signs_5: "மாதம் மாதம் வருமானம் கணிக்க முடியாதது", ap_signs_6: "உங்களைப் போல் அதிகமானவர்களை வேலைக்கு எடுக்காமல் வளர முடியாது என்ற உணர்வு",
            ap_pillars_title: "ஆட்டோபைலட் சிஸ்டம்: 3 தூண்கள்", ap_pillars_desc: "ஆட்டோபைலட் முறை ஒன்றிணைக்கப்பட்ட மூன்று சிஸ்டம்களின் அடிப்படையில் கட்டமைக்கப்பட்டுள்ளது.", ap_pil1_title: "SOP சிஸ்டம்", ap_pil1_desc: "முழுமையான மற்றும் ஆவணப்படுத்தப்பட்ட தரநிலை செயல்முறை நடைமுறைகள் (SOP) — வாடிக்கையாளர் கையாளுதல் முதல் அறிக்கை சமர்ப்பித்தல் வரை. உங்கள் குழு புத்தக வழிகாட்டிகளை பின்தொடரும்.", ap_pil1_1: "விற்பனை (Sales) SOP", ap_pil1_2: "வாடிக்கையாளர் கையாளுதல் SOP", ap_pil1_3: "அறிக்கை சமர்ப்பித்தல் SOP", ap_pil2_title: "KPI டாஷ்போர்டு", ap_pil2_desc: "மார்க்கெட்டிங், விற்பனை மற்றும் செயல்பாடுகளில் நிகழ்நேர செயல்திறன் கண்காணிப்பு. வேலை செய்வதில் வெற்றி காண்பதையும் எங்கு மேம்படுத்த வேண்டும் என்பதையும் ஒரே பார்வையில் பார்க்க முடியும்.", ap_pil2_1: "விற்பனை & வருமானக் கண்காணிப்பு", ap_pil2_2: "மார்க்கெட்டிங் செயல்திறன் அளவீடு", ap_pil2_3: "பணியாளர் செயல்திறன் குறியீடு", ap_pil3_title: "செயலாக்க இயந்திரம் (Execution Engine)", ap_pil3_desc: "மார்க்கெட்டிங், கன்டென்ட், விளம்பரங்கள் மற்றும் லீட் கையாளுதல் போன்ற செயல்முறைகள் முன்கூட்டியே கட்டப்பட்ட, மீண்டும் செய்யக்கூடிய அமைப்புகளில் இயங்கும்.", ap_pil3_1: "ஆட்டோமேட்டட் லீட் க்ளோ (Automated Lead Flow)", ap_pil3_2: "தகவல் வழங்கும் அட்டவணை", ap_pil3_3: "விளம்பர மேலாண்மை சிஸ்டம்",
            ap_bene_title: "ஆட்டோபைலட் முறையின் நன்மைகள்", ap_bene1_title: "உரிமையாளர் சார்புத்தன்மையை குறைத்தல்", ap_bene1_desc: "உங்கள் வணிகம் இனி உங்களை சுற்றி சுழலாது. பணியாளர்கள் பயிற்சியளிக்கப்பட்டுள்ளனர், சிஸ்டம்கள் இயங்குகின்றன, முடிவுகள் சுயமாக கண்காணிக்கப்படுகின்றன.", ap_bene2_title: "அளவிடக்கூடிய செயல்பாடுகள்", ap_bene2_desc: "பூஜ்ஜியத்திலிருந்து தொடங்காமல், கூடுதல் வாடிக்கையாளர்கள், பணியாளர்கள் அல்லது கிளைகளை சேர்க்க முடியும். உங்கள் சிஸ்டம்கள் வளர்ச்சியுடன் நேர்த்தியாக அடியெடுத்து வைக்கும்.", ap_bene3_title: "நிலையான வளர்ச்சி", ap_bene3_desc: "ஆட்டோபைலட் முறை ஒவ்வொரு மாதமும் கணிக்கடவல்ல நிலையான வருமானத்தையும் வாடிக்கையாளர் ஓட்டத்தையும் உருவாக்குகிறது.",
            ap_who_title: "ஆட்டோபைலட் (AutoPilot) முறை யாருக்கு?", ap_who1_title: "அதிக வேலைப்பளு கொண்ட உரிமையாளர்கள்", ap_who1_desc: "அதிகமான நேரம் வேலை செய்து சோர்வடைந்தவர்கள் மற்றும் வருமானத்தை நிலைநிறுத்தி நேரத்தைச் சேமிக்க விரும்புபவர்கள்.", ap_who2_title: "வளரும் நிறுவனங்கள்", ap_who2_desc: "5+ பணியாளர்களுடன், குழு விரிவடையும் போது செயல்பாட்டுத் தரம் குறையாமல் பார்த்துக்கொள்ள விரும்பும் நிறுவனங்கள்.", ap_who3_title: "வளர்ச்சிக்கு தயாராக உள்ள தொழில்முனைவோர்", ap_who3_desc: "உங்கள் சேவையை அங்கீகரித்து, குழப்பங்களின்றி வளர செயல்முறை உள்கட்டமைப்பு தேவைப்படுபவர்கள்.", ap_who4_title: "நிலையான வளர்ச்சியை எதிர்பார்க்கும் வணிகங்கள்", ap_who4_desc: "மாறிவரும் வருமானம், சீரற்ற வாடிக்கையாளர் சேவை அல்லது சில முக்கிய நபர்களை சார்ந்து இயங்கும் வணிகங்கள்.", ap_cta_title: "உங்கள் வணிகத்தை ஆட்டோபைலட்டில் (AutoPilot) அமைக்க தயாரா?", ap_cta_desc: "எங்கள் இலவச 48 மணிநேர பகுப்பாய்வோடு தொடங்குங்கள் — ஆட்டோபைலட் திட்டத்தை சேர்ந்து வடிவமைப்போம்.", ap_btn_free: "இலவச 48 மணிநேர பகுப்பாய்வு", ap_btn_prog: "அனைத்து திட்டங்களை காண்க",

            // Execution Page (Tamil)
            exec_header_title: "செயற்பாட்டுச் சேவைகள் (Execution Services)", exec_header_desc: "உங்கள் வணிக வளர்ச்சி அமைப்புடன் இணைந்து வழங்கப்படும் அனுபவம் பெற்ற செயலாக்க சேவைகள்.",
            exec_social_title: "சமூக ஊடக மேலாண்மை", exec_social_desc: "உங்களின் Facebook, Instagram மற்றும் LinkedIn பக்கங்களின் மாதாந்திர மேலாண்மை — அட்டவணை, உள்ளடக்கம், பதிவுகள் மற்றும் வளர்ச்சிக்கண்காணிப்பு.", exec_social_ben: "⚡ முக்கிய நன்மை: உங்கள் பார்வையாளர்களை 24/7 தொடர்பில் வைத்துக்கொள்ளும் நிலையான பிராண்ட் இருப்பு",
            exec_content_title: "உள்ளடக்கம் உருவாக்கம் (Content Creation)", exec_content_desc: "தொழில்முறை ரீல்ஸ் (Reels), தயாரிப்புப் படங்கள், பிராண்ட் வீடியோக்கள் மற்றும் கரோசல்கள் — அனைத்து முதன்மை தளங்களிலும் சிறப்பாக செயல்படும் உகந்தது.", exec_content_ben: "⚡ முக்கிய நன்மை: ஃபாலோயர்களை வாடிக்கையாளர்களாக மாற்றக்கூடிய சக்திவாய்ந்த உள்ளடக்கம்",
            exec_ads_title: "Meta & Google விளம்பரங்கள்", exec_ads_desc: "Facebook, Instagram மற்றும் Google இல் மிகச் சரியாக திட்டமிடப்பட்ட விளம்பரங்கள் — ROI கண்காணிப்பு மற்றும் முடிவுகளை மேம்படுத்த தொடர்ச்சியான மேம்பாடு.", exec_ads_ben: "⚡ முக்கிய நன்மை: விளம்பரத்திற்கு செலவிடும் ஒவ்வொரு ரூபாயிலிருந்தும் அளவிடக்கூடிய லீட்ஸ்",
            exec_wa_title: "WhatsApp & மின்னஞ்சல் மார்க்கெட்டிங்", exec_wa_desc: "வாங்கத் தயாராக இல்லாத லீட்ஸ்களை வாடிக்கையாளர்களாக மாற்ற வடிவமைக்கப்பட்ட WhatsApp மற்றும் மின்னஞ்சல் ஆட்டோமேஷன் செயல்முறைகள்.", exec_wa_ben: "⚡ முக்கிய நன்மை: கூடுதல் மனித உழைப்பு இல்லாமல் லீட்ஸ்களை ஆட்டோபைலட்டில் மாற்றுவது",
            exec_gmb_title: "Google My Business மேலாண்மை", exec_gmb_desc: "GMB அப்-டேட்ஸ், புதிய பதிவுகள், Q&A மேலாண்மை மற்றும் உள்ளூர் தேடல் முடிவுகளில் உங்கள் வணிகத்தின் பார்வையை அதிகரிப்பதற்கான உத்தி.", exec_gmb_ben: "⚡ முக்கிய நன்மை: உள்ளூர் தேடலில் முன்னிலை பெறுவது மற்றும் உடனடியாக வாங்க தயாராக இருப்பவர்களை கவர்வது",
            exec_review_title: "Review Boost உத்தி (மதிப்பீடு பெருக்கல்)", exec_review_desc: "Google & Facebook-இல் 5-நட்சத்திர (5-Star) மதிப்பீடுகளை பெறுவதற்கான நெறிமுறை அணுகுமுறை — வாடிக்கையாளர்களுடன் பின்தொடரும் சீரான செயல்முறை.", exec_review_ben: "⚡ முக்கிய நன்மை: தொடர்புகொள்ள முன்பே நம்பகத்தன்மையையும் (Trust) சமூக அங்கீகாரத்தையும் (Social Proof) உருவாக்குதல்",
            exec_staff_title: "பணியாளர் பயிற்சி & மேம்பாடு", exec_staff_desc: "வாடிக்கையாளர் கையாளுதல், தொடர்பு கொள்ளும் திறன், விற்பனை மனப்பான்மை, SOP பயன்பாடு மற்றும் அறிக்கை சமர்ப்பித்தல் — உங்கள் குழு சிறப்பாக செயல்பட கட்டமைக்கப்பட்ட பயிற்சி.", exec_staff_1: "வாடிக்கையாளர் தொடர்பு & கையாளுதல்", exec_staff_2: "விற்பனை மனப்பான்மை மற்றும் உத்தி", exec_staff_3: "SOP பயன்பாடு & தினசரி அறிக்கை சமர்ப்பித்தல்", exec_staff_4: "நேர மேலாண்மை மற்றும் பொறுப்புணர்ச்சி", exec_staff_5: "பிராண்ட் பிரதிநிதித்துவ அளவுகோல்", exec_staff_6: "KPI விழிப்புணர்வு & செயல்பாட்டு மனப்பான்மை", exec_staff_ben: "⚡ முக்கிய நன்மை: உங்களின் தொடர்ச்சியான தலையீடு இன்றி உங்கள் குழு நிலையாகச் சிறப்பாக செயல்படும்",
            exec_cta_title: "செயற்களத்தில் இறங்க தயாரா?", exec_cta_desc: "அனைத்து செயலாக்க சேவைகளும் உங்கள் தனிப்பயன் வளர்ச்சி அமைப்பின் ஒரு பகுதியாக முழமையாக வழங்கப்படுகின்றன.", exec_btn_book: "உத்தி அழைப்பை பதிவு செய்க (Strategy Call)", exec_btn_prog: "வளர்ச்சி திட்டங்களை காண்க",

            // Case Studies Page (Tamil)
            case_header_title: "வாடிக்கையாளர் வெற்றி கதைகள்", case_header_desc: "உண்மையான வணிகங்களின் உண்மையான முடிவுகள். எங்கள் அமைப்பு சார்ந்த அணுகுமுறை வணிகங்களை எவ்வாறு மாற்றியுள்ளது என்பதை பாருங்கள் — குழப்பத்திலிருந்து தெளிவுக்கு.",
            case1_tag: "உணவு மற்றும் பானங்கள்", case1_title: "கொழும்பு உணவகக் குழு (Colombo Restaurant Group)", case_lbl_prob: "🔴 பிரச்சனை", case1_prob: "3 கிளைகளிலும் முறையற்ற வாடிக்கையாளர் சேவை, டிஜிட்டல் மார்க்கெட்டிங் இல்லாமை மற்றும் உரிமையாளர் தினம் 14 மணிநேரம் வேலை செய்கிறார் — ஆனால் தெளிவான வளர்ச்சி இல்லை.", case_lbl_sol: "🔵 தீர்வு", case1_sol: "அனைத்து கிளைகளுக்கும் வாடிக்கையாளர் கையாளுதல் SOP, ஒருமைப்படுத்தப்பட்ட சமூக ஊடக யுக்தி, 12 பணியாளர்களுக்கு பயிற்சி மற்றும் தினசரி KPI டாஷ்போர்டு அமைப்பு.", case_lbl_res: "🟢 முடிவு", case1_res: "3 மாதங்களில் வருமானம் <strong>40%</strong> அதிகரித்தது. உரிமையாளரின் வேலை நேரங்கள் 14 இலிருந்து 6 ஆக குறைக்கப்பட்டது. அனைத்து 3 கிளைகளும் SOP சிஸ்டம் மூலம் தனித்து செயல்படுகின்றன.", case1_stat1: "வருமான வளர்ச்சி", case_stat_months: "மாதங்கள்", case1_stat2: "உரிமையாளர் சேமித்த நேரம்/நாள்",
            case2_tag: "சில்லறை / ஆடை (Retail/Fashion)", case2_title: "கண்டி பேஷன் பூட்டிக் (Kandy Fashion Boutique)", case_lbl_prob2: "🔴 பிரச்சனை", case2_prob: "பருவகாலங்களில் ஏற்படும் வருமான வீழ்ச்சி, டிஜிட்டல் இருப்பு 0, லீட்களைத் தொடர்ந்து கவனிப்பது மற்றும் அமைப்பு இல்லாத நிலை. நேரடியாக வருபவர்களை மட்டுமே நம்பியிருத்தல்.", case_lbl_sol2: "🔵 தீர்வு", case2_sol: "Instagram மற்றும் Facebook மேலாண்மை, Meta விளம்பரங்கள், பருவகால சலுகைகளுக்கு WhatsApp மார்க்கெட்டிங் அமைப்பு மற்றும் லீட் கேப்சர் சிஸ்டம் அமைப்பு.", case_lbl_res2: "🟢 முடிவு", case2_res: "Instagram Followers 60 நாட்களில் <strong>3x</strong> வளர்ந்தனர். வாடிக்கையாளர் வருகை <strong>60%</strong> அதிகரித்தது. பருவகால வருமான வீழ்ச்சி நீக்கப்பட்டு ஆண்டு முழுவதும் வருமானம் நிலையானது.", case2_stat1: "Follower வளர்ச்சி", case2_stat2: "அதிகப்படுத்தப்பட்ட Foot Traffic", case2_stat3_num: "வருடம்", case2_stat3: "முழுவதும் வருமானம்",
            case3_tag: "கல்வி", case3_title: "தனியார் நிறுவனம், காலி (Private Institute, Galle)", case_lbl_prob3: "🔴 பிரச்சனை", case3_prob: "கைமுறையான மாணவர் சேர்ப்பு முறை, கண்காணிப்பு சிஸ்டம் இல்லாமை மற்றும் அதிக சேர்க்கை நேரங்களில் பணியாளர்களிடையே உள்ள குழப்பங்கள்.", case_lbl_sol3: "🔵 தீர்வு", case3_sol: "ஒரு கட்டமைக்கப்பட்ட மாணவர் சேர்ப்பு SOP, WhatsApp அடிப்படையிலான லீட் மேலாண்மை அமைப்பு, குழுவிற்கு பயிற்சி மற்றும் தினசரி சேர்க்கையை கண்காணிக்க KPI டாஷ்போர்டு அமைப்பு.", case_lbl_res3: "🟢 முடிவு", case3_res: "மாணவர் சேர்க்கை வெறும் 3 மாதங்களில் <strong>2x</strong> ஆக இரட்டிப்பானது. லீட் ஃபாலோ-அப் 40%-லிருந்து <strong>100%</strong> ஆக உயர்ந்தது. தற்போது பணியாளர்கள் சேர்க்கை முறையை சுயமாகவும் துல்லியமாகவும் இயக்குகின்றனர்.", case3_stat1: "மாணவர் சேர்க்கைகள்", case3_stat2: "லீட் ஃபாலோ-அப்", case_stat_months2: "மாதங்கள்",
            case_outcome: "இவை வாடிக்கையாளர் மாற்று அமைப்பின் சில உதாரணங்கள். உங்கள் முடிவுகள் உங்கள் வணிகம், குறிக்கோள்கள் மற்றும் சிஸ்டமை செயல்படுத்துவதற்கான உங்கள் உறுதிப்பாட்டைப் பொறுத்தது.", case_cta_title: "உங்கள் சொந்த வெற்றிக் கதையை எழுதத் தயாரா?", case_cta_desc: "இலவச 48 மணிநேர வணிக பகுப்பாய்வுடன் தொடங்குங்கள் — மற்றும் உங்கள் வளர்ச்சி எங்கு காத்துக்கொண்டிருக்கிறது என்பதை அறிந்துகொள்ளுங்கள்.", case_btn_free: "இலவச 48 மணிநேர பகுப்பாய்வு", case_btn_prog: "எங்கள் திட்டங்களை காண்க"
        }
    };

    let currentLang = 'en';
    
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.style.transition = 'opacity 0.2s ease-in-out';
    });

    document.getElementById('lang-toggle').addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ta' : 'en';
        
        const isEn = currentLang === 'en';
        document.getElementById('lang-toggle').innerHTML = 
            `<span class="${isEn ? 'active' : ''}">EN</span> / <span class="${!isEn ? 'active' : ''}">TA</span>`;

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            
            element.style.opacity = 0;
            setTimeout(() => {
                if (translations[currentLang] && translations[currentLang][key]) {
                    if(element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[currentLang][key];
                    } else {
                        element.innerHTML = translations[currentLang][key]; // Using innerHTML to support <br> tags
                    }
                }
                element.style.opacity = 1;
            }, 200);
        });
    });

    // --- Scroll Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.section-header, .card, .wwd-card, .service-box, .why-3d-card, .step-card, .step-arrow, .check-list li, .cta-container, .guarantee-box, .service-detail-card, .case-study-card, .program-outcome-box, .program-highlight-box, .form-section, .program-badge-modern, .program-visual-scene, .phase-card-premium, .program-card-glass, .reveal-smooth'
    );

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        scrollObserver.observe(el);
    });

    // Apply staggered delays for grid items and lists
    const gridsToStagger = ['.grid-2', '.grid-3', '.grid-4', '.services-grid', '.check-list', '.timeline-grid', '.custom-list', '.why-3d-grid'];
    
    gridsToStagger.forEach(selector => {
        document.querySelectorAll(selector).forEach(container => {
            Array.from(container.children).forEach((child, index) => {
                if (child.classList.contains('animate-on-scroll') || child.matches('.card, .wwd-card, .service-box, .why-3d-card, .step-card, .step-arrow, li')) {
                    child.style.transitionDelay = `${index * 0.1}s`;
                }
            });
        });
    });

    // --- Horizontal Sticky Scroll Logic ---
    const stickyWrapper = document.getElementById('core-services-wrapper');
    const trackContainer = document.getElementById('core-services-track-container');
    const track = document.getElementById('core-services-track');

    if (stickyWrapper && trackContainer && track) {
        let isMobile = window.innerWidth <= 1024;
        
        const calcScroll = () => {
            if (isMobile) {
                track.style.transform = 'none';
                return;
            }

            const wrapperRect = stickyWrapper.getBoundingClientRect();
            // When wrapping starts arriving
            const scrollDistance = wrapperRect.height - window.innerHeight;
            // Negative top means it's stuck and scrolling inside
            const currentScroll = Math.max(0, -wrapperRect.top);
            
            let progress = currentScroll / scrollDistance;
            progress = Math.max(0, Math.min(1, progress));

            // Max translation required to show last card
            const maxTranslateX = track.scrollWidth - trackContainer.clientWidth;

            if (maxTranslateX > 0) {
                track.style.transform = `translate3d(-${progress * maxTranslateX}px, 0, 0)`;
            } else {
                track.style.transform = `translate3d(0, 0, 0)`;
            }
        };

        window.addEventListener('scroll', () => requestAnimationFrame(calcScroll), { passive: true });
        window.addEventListener('resize', () => {
            isMobile = window.innerWidth <= 1024;
            requestAnimationFrame(calcScroll);
        }, { passive: true });
        
        calcScroll(); // Initial check
    }

    // --- Vertical Timeline Motion Graphics ---
    const hwTimeline = document.getElementById('hiw-timeline');
    const hwBeam = document.getElementById('hiw-beam');
    const hwSteps = document.querySelectorAll('.timeline-step');
    
    if (hwTimeline && hwBeam && hwSteps.length > 0) {
        const calcTimelineScroll = () => {
            const timelineRect = hwTimeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // The top of the timeline track offset by half the screen height
            const startOffset = windowHeight * 0.6; 
            const scrollProgress = startOffset - timelineRect.top;
            const timelineHeight = timelineRect.height;
            
            let percentage = (scrollProgress / timelineHeight) * 100;
            percentage = Math.max(0, Math.min(100, percentage));
            
            // Grow the laser beam
            hwBeam.style.height = `${percentage}%`;
            
            // Detect collision between beam and step nodes
            const beamBottomY = timelineRect.top + (timelineHeight * (percentage / 100));
            
            hwSteps.forEach((step) => {
                const nodeElement = step.querySelector('.timeline-node');
                if (nodeElement) {
                    const nodeRect = nodeElement.getBoundingClientRect();
                    const nodeCenterY = nodeRect.top + (nodeRect.height / 2);
                    
                    if (beamBottomY >= nodeCenterY - 10) {
                        step.classList.add('active');
                    } else {
                        step.classList.remove('active');
                    }
                }
            });
        };
        
        window.addEventListener('scroll', () => requestAnimationFrame(calcTimelineScroll), { passive: true });
        window.addEventListener('resize', () => requestAnimationFrame(calcTimelineScroll), { passive: true });
        calcTimelineScroll();
    }

    // --- About Hero Mouse Parallax ---
    const aboutHero = document.querySelector('.about-hero');
    const logoScene = document.getElementById('about-logo-scene');
    
    if (aboutHero && logoScene) {
        aboutHero.addEventListener('mousemove', (e) => {
            const rect = aboutHero.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            // Calculate rotation (max 15 degrees)
            const rotateX = (mouseY / (rect.height / 2)) * -15;
            const rotateY = (mouseX / (rect.width / 2)) * 15;
            
            requestAnimationFrame(() => {
                logoScene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        });
        
        // Reset rotation when mouse leaves
        aboutHero.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                logoScene.style.transform = 'rotateX(0deg) rotateY(0deg)';
            });
        });
    }

/* ─── Programs Page Scroll Logic (Growth Chart) ─── */
if (document.body.classList.contains('programs-page')) {
    const growthPath = document.querySelector('#growth-path');
    const milestones = {
        ms25: document.querySelector('#ms-25'),
        ms50: document.querySelector('#ms-50'),
        ms100: document.querySelector('#ms-100')
    };

    if (growthPath) {
        const pathLength = growthPath.getTotalLength();
        
        // Initialize path
        growthPath.style.strokeDasharray = pathLength;
        growthPath.style.strokeDashoffset = pathLength;

        window.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            const drawLength = pathLength * scrollPercent;
            
            // Draw path
            growthPath.style.strokeDashoffset = pathLength - drawLength;

            // Activate milestones based on scroll depth
            if (scrollPercent > 0.25) milestones.ms25?.classList.add('active');
            else milestones.ms25?.classList.remove('active');

            if (scrollPercent > 0.50) milestones.ms50?.classList.add('active');
            else milestones.ms50?.classList.remove('active');

            if (scrollPercent > 0.85) milestones.ms100?.classList.add('active');
            else milestones.ms100?.classList.remove('active');

            // Navbar on Dark Programs Hero
            if (navbar) {
                if (window.scrollY > window.innerHeight * 0.7) {
                    navbar.classList.remove('nav-on-dark');
                } else {
                    navbar.classList.add('nav-on-dark');
                }
            }
        });
        // --- 3D Hero Chart Animation & Parallax ---
        const heroChart = document.querySelector('#hero-3d-chart');
        const isometricContainer = document.querySelector('#isometric-container');
        const heroSection = document.querySelector('.programs-hero');

        if (heroChart && isometricContainer) {
            // Trigger Gold Completion automatically as requested
            setTimeout(() => {
                heroChart.classList.add('completed');
            }, 300);

            // Added 3D Mouse Parallax for the Hero Chart
            heroSection?.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                // Subtle tilt adjustment on top of the base isometric rotation
                const rotateX = 60 + (y * 10);
                const rotateZ = -45 + (x * 15);

                requestAnimationFrame(() => {
                    isometricContainer.style.transform = `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;
                });
            });

            // Reset position on mouse leave
            heroSection?.addEventListener('mouseleave', () => {
                isometricContainer.style.transform = `rotateX(60deg) rotateZ(-45deg)`;
            });
        }
    }
}
/* ─── Services Page 3D Stage Parallax ─── */
if (document.body.classList.contains('services-page')) {
    const servicesStage = document.getElementById('services-3d-stage');
    const heroSection = document.querySelector('.programs-hero');

    if (servicesStage && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            // Fluid 3D tilt for the whole stage
            const rotateY = x * 20; // Side to side
            const rotateX = -y * 20; // Up and down

            requestAnimationFrame(() => {
                servicesStage.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            });
        });

        // Smooth reset on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                servicesStage.style.transform = `rotateY(0deg) rotateX(0deg)`;
            });
        });

        // --- Navbar on Dark Hero Logic ---
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > window.innerHeight * 0.7) {
                    navbar.classList.remove('nav-on-dark');
                } else {
                    navbar.classList.add('nav-on-dark');
                }
            }, { passive: true });
        }
    }

    } // End of services-page logic

    // --- 3D Fold-In Reveal Observer (Shared) ---
    const foldObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-fold').forEach(el => foldObserver.observe(el));

    // --- Multi-Target 3D Visual Parallax (Shared) ---
    const visualScenes = document.querySelectorAll('.service-visual-3d-scene');
    visualScenes.forEach(scene => {
        const tiltCard = scene.querySelector('.tilt-card');
        if (!tiltCard) return;
        
        scene.addEventListener('mousemove', (e) => {
            const rect = scene.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            requestAnimationFrame(() => {
                tiltCard.style.transform = `rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale(1.05)`;
            });
        });

        scene.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                tiltCard.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
            });
        });
    });

    // --- AutoPilot Page Specific Logic ---
    if (document.body.classList.contains('autopilot-page')) {
        const botStage = document.getElementById('autopilot-3d-stage');
        const mainBot = document.getElementById('main-bot');
        const heroSection = document.querySelector('.programs-hero');

        if (botStage && heroSection && mainBot) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                // Stage tilt (environment)
                const stageRotateY = x * 25;
                const stageRotateX = -y * 25;

                // Bot counter-tilt (makes it look more alive)
                const botRotateY = x * 15;
                const botRotateX = -y * 15;

                requestAnimationFrame(() => {
                    botStage.style.transform = `rotateY(${stageRotateY}deg) rotateX(${stageRotateX}deg)`;
                    mainBot.style.transform = `rotateY(${botRotateY}deg) rotateX(${botRotateX}deg)`;
                });
            });

            heroSection.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    botStage.style.transform = `rotateY(0deg) rotateX(0deg)`;
                    mainBot.style.transform = `rotateY(0deg) rotateX(0deg)`;
                });
            });
        }

        // Navbar visibility logic for AutoPilot Dark Hero
        const apNavbar = document.querySelector('.navbar');
        if (apNavbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > window.innerHeight * 0.7) {
                    apNavbar.classList.remove('nav-on-dark');
                } else {
                    apNavbar.classList.add('nav-on-dark');
                }
            }, { passive: true });
        }
    }

    // --- Execution Page Specific Logic ---
    if (document.body.classList.contains('execution-page')) {
        const systemStage = document.getElementById('execution-3d-system');
        const heroSection = document.querySelector('.programs-hero');

        if (systemStage && heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                // Stage tilt
                const stageRotateY = x * 30;
                const stageRotateX = -y * 30;

                requestAnimationFrame(() => {
                    systemStage.style.transform = `rotateY(${stageRotateY}deg) rotateX(${stageRotateX}deg)`;
                });
            });

            heroSection.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    systemStage.style.transform = `rotateY(0deg) rotateX(0deg)`;
                });
            });
        }

        // Navbar visibility logic for Execution Dark Hero
        const execNavbar = document.querySelector('.navbar');
        if (execNavbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > window.innerHeight * 0.7) {
                    execNavbar.classList.remove('nav-on-dark');
                } else {
                    execNavbar.classList.add('nav-on-dark');
                }
            }, { passive: true });
        }
        // --- 3D Cards Tilt Animation ---
        const execCards = document.querySelectorAll('.exec-card-3d');
        execCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                requestAnimationFrame(() => {
                    card.style.transform = `translateY(-12px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`;
                    card.style.boxShadow = `${-x * 20}px ${-y * 20 + 28}px 60px rgba(0,74,173,0.2)`;
                });
            });

            card.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                });
            });
        });
    }

    // --- Case Studies Page Specific Logic ---
    if (document.body.classList.contains('cases-page')) {

        // 3D Mouse Parallax for the hero transform scene
        const casesScene = document.getElementById('cases-3d-scene');
        const casesHero = document.querySelector('.cases-hero');
        if (casesScene && casesHero) {
            casesHero.addEventListener('mousemove', (e) => {
                const rect = casesHero.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                requestAnimationFrame(() => {
                    casesScene.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
                    casesScene.style.animation = 'none';
                });
            });
            casesHero.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    casesScene.style.transform = '';
                    casesScene.style.animation = '';
                });
            });
        }

        // Navbar scroll logic
        const casesNavbar = document.querySelector('.navbar');
        if (casesNavbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > window.innerHeight * 0.7) {
                    casesNavbar.classList.remove('nav-on-dark');
                } else {
                    casesNavbar.classList.add('nav-on-dark');
                }
            }, { passive: true });
        }

        // Animated stat counters — trigger when card scrolls into view
        const animateCounter = (el) => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            if (isNaN(target)) return;
            const duration = 1400;
            const startTime = performance.now();
            const step = (now) => {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(eased * target);
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.csm-val[data-target]').forEach(animateCounter);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.case-card-modern').forEach(card => {
            counterObserver.observe(card);
        });
    }

    // --- Contact Page Specific Logic ---
    if (document.body.classList.contains('contact-page')) {

        // Navbar scroll behavior on contact page
        const contactNavbar = document.querySelector('.navbar');
        if (contactNavbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > window.innerHeight * 0.45) {
                    contactNavbar.classList.remove('nav-on-dark');
                } else {
                    contactNavbar.classList.add('nav-on-dark');
                }
            }, { passive: true });
        }

        // Form submission feedback & WhatsApp Redirection
        const contactForm = document.getElementById('contact-form');
        const submitBtn   = document.getElementById('contact-submit');
        if (contactForm && submitBtn) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                // Get form values
                const name    = document.getElementById('cf-name').value;
                const email   = document.getElementById('cf-email').value;
                const phone   = document.getElementById('cf-phone').value || 'Not provided';
                const message = document.getElementById('cf-message').value;

                // Build WhatsApp message
                const waMessage = `Business Inquiry:\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;
                const waUrl = `https://wa.me/94779029696?text=${encodeURIComponent(waMessage)}`;

                // UI Feedback
                submitBtn.disabled = true;
                const originalBtnContent = submitBtn.innerHTML;

                submitBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span>Message Ready! Opening WhatsApp...</span>
                `;
                submitBtn.style.background = 'linear-gradient(135deg,#16a34a,#22c55e)';

                // Open WhatsApp after a short delay to allow the user to see the success state
                setTimeout(() => {
                    window.open(waUrl, '_blank');
                    
                    // Reset form and button after a bit more time
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.style.background = '';
                    }, 2000);
                }, 1200);
            });
        }

        // Staggered entrance for contact cards
        const contactCards = document.querySelectorAll('.contact-card-modern');
        contactCards.forEach((card, i) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 400 + i * 150);
        });
    }

    // --- 112-Day System Page Specific Logic ---
    if (document.body.classList.contains('system-112-page')) {
        
        // 3D Parallax for the 112-Day Hero Engine
        const engine = document.getElementById('112-parallax-engine');
        const heroSection = document.querySelector('.system-112-hero');
        
        if (engine && heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                requestAnimationFrame(() => {
                    engine.style.transform = `rotateY(${x * 25}deg) rotateX(${-y * 25}deg)`;
                });
            });
            
            heroSection.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    engine.style.transform = 'rotateY(0deg) rotateX(0deg)';
                });
            });
        }

        // Scroll highlights for Phases (adding a "pulse" to phase numbers)
        const phases = document.querySelectorAll('.phase-item');
        const phaseObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('phase-active');
                }
            });
        }, { threshold: 0.5 });

        phases.forEach(p => phaseObserver.observe(p));
    }
});
