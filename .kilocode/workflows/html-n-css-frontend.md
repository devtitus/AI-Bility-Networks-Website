# 🎨 HTML & CSS Frontend Workflow (Agent-Optimized)

This workflow is designed **exclusively for static frontend work** involving  
**HTML, CSS, layouts, responsiveness, and visual correctness** — no JS, no frameworks.

---

## 🎯 Goal

Deliver a **visually correct, responsive, accessible, and maintainable** HTML/CSS frontend with minimal regressions.

---

## 📥 Inputs

- HTML files
- CSS files (or SCSS compiled output)
- Design reference (Figma, image, URL) — optional
- Target browsers & screen sizes

---

## 🧭 Workflow Phases

---

## 1️⃣ Structure & Semantic Audit

### Objective

Ensure correct HTML structure and semantics before touching styles.

### Steps

1. Validate document structure (`doctype`, `head`, `body`)
2. Check semantic tags (`header`, `nav`, `main`, `section`, `article`, `footer`)
3. Detect invalid nesting
4. Identify reusable blocks
5. Flag missing accessibility attributes

### Outputs

- `semantic_issues.md`
- Suggested tag replacements
- Accessibility gaps list

### Stop Condition

No critical structural violations

---

## 2️⃣ Layout System Identification

### Objective

Understand how layout is built.

### Steps

1. Identify layout strategy:
   - Flexbox
   - Grid
   - Floats / positioning (legacy)
2. Detect container hierarchy
3. Identify fixed vs fluid widths
4. Detect layout anti-patterns (`height: 100vh`, absolute stacking abuse)

### Outputs

- Layout map
- Problematic layout patterns list

---

## 3️⃣ CSS Architecture Review

### Objective

Reduce fragility and improve maintainability.

### Steps

1. Inspect selector specificity
2. Detect deeply nested selectors
3. Identify global vs component styles
4. Detect duplicated rules
5. Identify unused CSS

### Outputs

- CSS smell report
- Suggested refactor areas
- Specificity risk score

---

## 4️⃣ Visual Consistency Check

### Objective

Ensure consistent UI appearance.

### Steps

1. Compare spacing (margin/padding)
2. Normalize font sizes & line heights
3. Check color consistency
4. Validate border radius & shadows
5. Identify hardcoded magic values

### Outputs

- Visual inconsistency list
- Tokenization suggestions (colors, spacing, fonts)

---

## 5️⃣ Responsive Behavior Validation

### Objective

Ensure layout works across screen sizes.

### Steps

1. Test key breakpoints (mobile / tablet / desktop)
2. Detect overflow & horizontal scroll
3. Validate media queries
4. Check image scaling
5. Verify touch targets

### Outputs

- Breakpoint issues list
- Responsive fixes checklist

### Stop Condition

No layout break at target resolutions

---

## 6️⃣ Cross-Browser Compatibility Check

### Objective

Avoid browser-specific failures.

### Steps

1. Identify unsupported CSS features
2. Check vendor prefix requirements
3. Validate fallback styles
4. Test font rendering differences

### Outputs

- Compatibility risk report
- Required fallbacks list

---

## 7️⃣ Accessibility Validation (HTML/CSS Scope)

### Objective

Ensure accessibility compliance without JS.

### Steps

1. Check color contrast ratios
2. Validate heading hierarchy
3. Verify focus states
4. Ensure readable font sizes
5. Detect missing `alt` attributes

### Outputs

- Accessibility audit report
- WCAG issue list

---

## 8️⃣ Performance Optimization (CSS/HTML)

### Objective

Reduce rendering and loading cost.

### Steps

1. Detect unused CSS
2. Reduce layout thrashing patterns
3. Optimize font loading
4. Minimize DOM depth
5. Optimize images (sizes, formats)

### Outputs

- Performance optimization list
- DOM complexity score

---

## 9️⃣ Fix Implementation

### Objective

Apply improvements safely.

### Steps

1. Apply minimal CSS changes
2. Avoid layout-breaking refactors
3. Validate visual parity
4. Re-test responsiveness

### Outputs

- Code diff
- Fix summary

---

## 🔟 Final Verification & Handoff

### Objective

Ensure production readiness.

### Steps

1. Re-run all validation checks
2. Capture before/after screenshots
3. Validate against design reference
4. Document decisions

### Outputs

- `frontend_report.md`
- Screenshot comparison
- Confidence score (0–100)

---

## 🧠 Agent Rules

- Never refactor layout before understanding structure
- Avoid `!important` unless justified
- Prefer semantic HTML over divs
- Fix mobile first
- Small, reversible CSS changes only

---

🚀 *Designed for static HTML/CSS projects and frontend-only agents.*