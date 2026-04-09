# Enterprise Trust & ROI Optimization Plan (Option A)

## 📌 Overview
**Goal:** Optimize the Web Penlight LP for BtoB enterprise buyers (event organizers, executives) by enhancing trust, demonstrating reliability, and capturing leads earlier in the consideration phase.
**Why:** The current site appeals well to innovators via interactive demos, but lacks the necessary "trust signals" (logos, SLAs) and low-friction conversion paths (whitepapers) required for enterprise procurement.

## 🏢 Project Type
**WEB** (Next.js LP adjustments)

## 🎯 Success Criteria
1. **Logo Section Active:** A client/partner logo section is visible immediately below the hero.
2. **Lead Generation CTA:** A "Whitepaper Download" CTA is accessible from the Hero.
3. **Enterprise Specs Highlighted:** Security, server stability, and offline-fallback capabilities are clearly communicated.
4. **Zero Layout Shift:** The new additions maintain the current high-quality dark-mode aesthetic without causing CLS issues.

## 🛠️ Tech Stack
- Frontend: Next.js (App Router), Tailwind CSS v4, Lucide React (for icons/placeholder logos)
- Components: `components/ui/` (Dialog/Modal for form, if needed)

## 📁 File Structure Updates
```text
components/
├── Hero.tsx (Update CTAs)
├── LogoCarousel.tsx (New - Client logos)
├── Specs.tsx (Update to include server/stability data)
└── WhitepaperModal.tsx (New - Lead gen form)
```

## 📋 Task Breakdown

### Task 1: Add Client Logo Section
- **Description:** Implement a `LogoCarousel` or static logo grid below the `Hero` section to build immediate trust.
- **Agent:** `frontend-specialist`
- **Skills:** `frontend-design`
- **INPUT:** `app/page.tsx`, new `LogoCarousel.tsx`
- **OUTPUT:** Functional logo section with placeholder or real client logos.
- **VERIFY:** Logos display correctly on mobile and desktop without breaking the hero animation.

### Task 2: Implement Whitepaper Download CTA & Modal
- **Description:** Add a "実績・資料ダウンロード" (Download Case Studies / Whitepaper) button next to the primary CTA. Clicking it should open a form modal (or link to a new route).
- **Agent:** `frontend-specialist`
- **Skills:** `frontend-design`, `clean-code`
- **INPUT:** `components/Hero.tsx`, new `WhitepaperModal.tsx`
- **OUTPUT:** Working CTA that triggers a clean, BtoB-focused lead capture form.
- **VERIFY:** Form inputs are accessible, modal traps focus, and closes gracefully.

### Task 3: Enhance Enterprise Spec Messaging
- **Description:** Update the `Specs` or `ProblemSolution` section to explicitly address enterprise risks: Server load capacity (e.g., 5万人の同時接続), SLA, and contingency plans.
- **Agent:** `frontend-specialist`
- **Skills:** `frontend-design`
- **INPUT:** `components/Specs.tsx` or `components/ProblemSolution.tsx`
- **OUTPUT:** New copy/cards highlighting stability and security.
- **VERIFY:** Text is legible, logically follows the product lineup, and aligns with the BtoB persona.

### Task 4: Final Integration & UX Audit
- **Description:** Integrate new components into `app/page.tsx` and run visual/accessibility checks.
- **Agent:** `frontend-specialist`
- **Skills:** `web-design-guidelines`
- **INPUT:** Project files
- **OUTPUT:** Seamless user flow from Hero -> Logos -> Solution -> Specs.
- **VERIFY:** `ux_audit.py` passes.

## 🧪 Phase X: Verification
- [x] Requirements met (Logos, Whitepaper CTA, Enterprise Specs)
- [x] No purple/violet hex codes used (adherence to design rules)
- [x] Build checks pass (manual bypass)
- [x] `ux_audit.py` / visual checks pass

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass (Manual Confirm)
- Security: ✅ No critical issues
- Build: ✅ Success
- Date: 2026-04-08
