# Sticker Animation Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a fade animation switching between two sticker images for the smartphone penlight product card.
**Architecture:** Add a new CSS keyframes animation to `app/globals.css` (or inline if not present), and update `components/ProductLineup.tsx` to render two overlapping `next/image` components that use the animation classes.
**Tech Stack:** Next.js, Tailwind CSS, raw CSS animations.

---

### Task 1: Add Animation CSS

**Files:**
- Modify: `app/globals.css` (or `index.css`, check the main CSS file)

- [ ] **Step 1: Locate the main CSS file**
Run: `find . -name "*global*.css" -o -name "*index*.css"`
Expected: Path to the main CSS file (e.g., `app/globals.css`)

- [ ] **Step 2: Add the fade animation keyframes and classes**
Append the following to the CSS file:
```css
@keyframes stickerFadeSwap {
  0%, 45% { opacity: 1; z-index: 10; }
  50%, 95% { opacity: 0; z-index: 1; }
  100% { opacity: 1; z-index: 10; }
}

.animate-sticker-1 {
  animation: stickerFadeSwap 6s infinite;
}

.animate-sticker-2 {
  animation: stickerFadeSwap 6s infinite;
  animation-delay: -3s; /* Offset by half the duration */
}
```

- [ ] **Step 3: Verify CSS compilation**
Run: `pnpm run build` (or check the running dev server output for errors)
Expected: No CSS parsing errors.

- [ ] **Step 4: Commit**
```bash
git add <path/to/css>
git commit -m "feat(ui): add keyframes for sticker fade animation"
```

---

### Task 2: Update ProductLineup Component

**Files:**
- Modify: `components/ProductLineup.tsx`

- [ ] **Step 1: Import `Image` from `next/image`**
Ensure `import Image from "next/image";` is at the top of the file.

- [ ] **Step 2: Replace placeholder with overlapping images**
Locate `PRODUCTS[0]` rendering block inside `ProductLineup.tsx` (around line 133).
Replace the `Smartphone` icon placeholder with:
```tsx
<div className="absolute inset-x-8 inset-y-12 flex flex-col items-center justify-center">
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 flex items-center justify-center w-[75%] h-auto mx-auto animate-sticker-1 drop-shadow-md">
      <Image
        src="/images/スマホペンライトデコシールPKイメージ_野球チームバラエティ.png"
        alt="スマホペンライトシール バラエティ"
        width={400}
        height={800}
        className="w-full h-auto object-contain"
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center w-[75%] h-auto mx-auto animate-sticker-2 drop-shadow-md">
      <Image
        src="/images/スマホペンライトデコシールPKイメージ_野球チームマスコット.png"
        alt="スマホペンライトシール マスコット"
        width={400}
        height={800}
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
</div>
```

- [ ] **Step 3: Verify rendering**
Visit the app in the browser: `http://localhost:3000`
Expected: The sticker images appear and cross-fade every 3 seconds.

- [ ] **Step 4: Commit**
```bash
git add components/ProductLineup.tsx
git commit -m "feat(ui): implement sticker cross-fade animation in lineup"
```
