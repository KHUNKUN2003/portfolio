# Modern Fullstack Portfolio Design

## Goal

สร้าง web portfolio สำหรับสมัครงานตำแหน่ง Fullstack Developer ของ กฤษณพงศ์ มณีศรี (Kritsanapong Maneesri) โดยให้ภาพรวมดูทันสมัย โทนขาว-เขียว อ่านง่ายสำหรับ HR และมีรายละเอียดเชิงเทคนิคพอสำหรับทีม developer/interviewer

## Audience

- HR หรือ recruiter ที่ต้องการเห็น role, contact, skills, education, experience และ project อย่างรวดเร็ว
- ทีมเทคนิคที่ต้องการเห็น fullstack workflow, backend/database/platform experience และการทำงานกับระบบจริง

## Visual Direction

- Modern interactive, clean white-green theme
- พื้นหลังหลักสีขาว ใช้เขียวเป็น accent สำหรับ CTA, node, highlight, link และ state
- ใช้ layout แบบ first-screen strong hero: ฝั่งซ้ายเป็น identity + headline + CTA, ฝั่งขวาเป็น visual system card
- ลูกเล่นควรเป็น micro-interactions ที่ไม่รบกวนการอ่าน เช่น hover lift, animated architecture nodes, code card glow, scroll reveal, smooth anchor navigation
- หลีกเลี่ยง gradient หนัก ๆ หรือสีเดียวทั้งหน้า ให้มี contrast จาก dark green, white, soft green และ neutral text

## Information Architecture

1. Header
   - Brand: Kritsanapong Maneesri หรือ KM
   - Navigation: Projects, Stack, Experience, Awards, Contact
   - CTA: Hire Me หรือ Contact

2. Hero
   - H1: Fullstack Developer for real product systems.
   - Supporting copy: เน้น frontend, backend, database, API workflow และ product systems
   - CTA หลัก: View HEYLTH Case Study
   - CTA รอง: Download Resume
   - Tech chips: React 19, Node.js, Express, PostgreSQL, LINE LIFF, Gemini API
   - Interactive visual: profile card, architecture nodes, code card

3. About / Profile
   - สรุปจาก resume: จบ/กำลังจบสาย Computer Engineering, สนใจ programming, device control, network, cloud computing และพร้อมเรียนรู้งานจริง
   - Contact quick facts: Yala, Thailand, email, phone, LINE, GitHub

4. Skills
   - Group skills into readable clusters:
     - Frontend: React, Vite, JavaScript, TypeScript, Next.js, Angular, Flutter, HTML, CSS
     - Backend & API: Node.js, Express, REST APIs, Postman, Java, Python
     - Database: PostgreSQL, MySQL, SQL Query Language, Database Systems
     - Platform & Tools: LINE LIFF, LINE Messaging API, Git/GitHub, Docker, Microsoft Office
     - Additional Strengths: Cloud Computing, Network Security, Internet of Things, Robotics, Computing

5. Featured Project: HEYLTH
   - Position as the main case study
   - Description: LINE OA health-tracking system for trainers and clients
   - Highlight workflows:
     - LIFF registration
     - Email OTP verification
     - Rich Menu state management
     - Trainer approval workflows
     - AI-generated health questions and suggestions via Gemini API
     - Client dashboards and tracking history
     - Monthly PDF reports via PDFKit
   - Stack:
     - Frontend: React 19, Vite, JavaScript, LINE LIFF SDK, lucide-react, CSS
     - Backend: Node.js, Express, LINE Messaging API SDK, Nodemailer, PDFKit, Gemini API
     - Database: PostgreSQL, Neon PostgreSQL, database/schema.sql
     - Deployment: Vercel frontend, ngrok for webhook testing, Docker Compose for local PostgreSQL

6. Experience
   - Fulltank Garage, Fullstack Developer, 2023
     - รับงานทำ application เพื่อแก้ปัญหาของลูกค้า
     - ผลิต application เพื่อธุรกิจ technology startup
   - Thailand National Sports University Yala Campus, Frontend & Documents, 2022
     - จัดการและอัปเดตข่าวสาร/กิจกรรมลงเว็บไซต์
     - เตรียมเอกสารรายงาน
     - ซ่อมคอมพิวเตอร์หรือเครื่องพิมพ์ในวิทยาเขต
   - P Room Multimedia Studio, Productions, 2023
     - Animation, graphic design, photography/video production และงานจากเทศบาล

7. Education
   - Rajamangala University of Technology Srivijaya, Songkhla Campus
     - Bachelor's degree, Computer Engineering
     - GPA 3.63
   - Yala Technical College
     - Vocational Certificate
     - Higher Vocational Certificate
     - GPA values from resume: 3.68 and 3.63

8. Awards / Certificates
   - Programming device control award, regional southern competition, 2564
   - Programming device control silver medal / second runner-up, 2565
   - Cloud Computing gold standard awards, 2565 and 2566
   - Digital thinking project award, 2565
   - Cloud Computing regional/national placements, 2565-2567
   - Innovation/invention academic competition second runner-up, 2567

9. Contact
   - Email: khunkun2003official@gmail.com
   - Phone: 0986875752
   - LINE: @Khunkun2003
   - GitHub: KHUNKUN2003

## Interaction Design

- Header links smooth-scroll to sections
- CTA "View HEYLTH Case Study" scrolls to project section
- CTA "Download Resume" links to local/public resume file if included in the project; otherwise a disabled/secondary state with clear title attribute is acceptable until a copy is added
- Skills show subtle hover state and are grouped to avoid a large flat chip wall
- HEYLTH case study includes an architecture/workflow visual built in HTML/CSS, not a static screenshot
- Awards can be displayed as a compact timeline or horizontally scrollable cards on mobile
- Contact actions use clickable mailto, tel, and external GitHub links

## Technical Shape

- Since the workspace is empty, implement as a static portfolio first unless a framework is intentionally added later
- Recommended initial implementation:
  - `index.html`
  - `styles.css`
  - `script.js`
  - optional `assets/` for resume or images
- The site should work by opening `index.html` directly, with no build step required
- Use semantic HTML, responsive CSS, accessible button/link labels, and reduced-motion support

## Responsive Requirements

- Desktop: two-column hero with visual panel on the right
- Tablet: hero can stay two-column only if text remains readable; otherwise stack
- Mobile: header collapses into simple top bar, hero stacks, CTA buttons wrap cleanly, sections use single column
- No text overflow inside chips, buttons, cards, or timeline items

## Verification

- Open the HTML locally and inspect desktop and mobile viewport behavior
- Verify navigation anchors, contact links, and CTA scroll
- Verify text does not overlap or overflow
- Verify the final visual direction matches `modern-interactive-direction.html` in overall structure, palette, typography feel, and interaction intent

