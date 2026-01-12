---
name: Refactor to Atomic Design Structure
overview: ""
todos:
  - id: f594d561-0330-4548-8cc7-5e3b94e5fe05
    content: Install and configure Tailwind CSS with custom design system (colors, fonts, spacing)
    status: pending
  - id: 458cdaa7-3008-4284-bd4f-b28181ff16b0
    content: Install Framer Motion for animations and configure Firebase for Firestore
    status: pending
  - id: 6b4e6db3-af99-47ee-aab5-8ff4c1cb3e11
    content: Build Header and Footer components with navigation and sticky behavior
    status: pending
  - id: 703e3afb-31bc-461a-879c-5d9a46d7c5f0
    content: Configure React Router with all page routes and navigation structure
    status: pending
  - id: fd08e673-f767-4ebd-a15a-b6adb033afff
    content: Create reusable components (Button, Card, Icon, Section) with Tailwind styling
    status: pending
  - id: a13c62c3-5347-40ed-86af-a70eda09ee9b
    content: Build Home page with all 5 sections (Hero, Differentiators, Process, Projects, Values)
    status: pending
  - id: f1efa9fa-daac-41be-ab07-df994d7ddaae
    content: Build Services page and ServiceDetail template with 6 service cards
    status: pending
  - id: 28e381f8-d66d-4219-bfb0-eed961944bcc
    content: Build Projects page with carousel, grid, and project showcase components
    status: pending
  - id: 3ade4925-1564-4403-92d5-0c5df8fc7118
    content: Build About page with story, team grid, and values sections
    status: pending
  - id: 216ceca4-3099-4c4c-937e-d5bd2cf0c871
    content: Build Employment page with hiring process and application form
    status: pending
  - id: e736cc82-10d5-4d5f-b6e0-015ee879c1a8
    content: Integrate Firestore for contact and employment form submissions
    status: pending
  - id: ca2c32fd-7bbf-4556-b3fa-828118ed0b46
    content: Add scroll animations, polish interactions, and test responsiveness
    status: pending
---

# Refactor to Atomic Design Structure

## Overview

Reorganize the current component structure from feature-based folders to atomic design principles for improved maintainability, reusability, and scalability.

## Current Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── home/            # Home page sections
│   ├── services/        # Services page sections
│   ├── projects/        # Projects page sections
│   ├── about/           # About page sections
│   ├── employment/      # Employment page sections
│   └── shared/          # Button, Card, Icon, Section
└── pages/               # Page components
```

## Target Atomic Design Structure

```
src/
├── components/
│   ├── atoms/           # Smallest building blocks
│   │   ├── Button.jsx
│   │   ├── Icon.jsx
│   │   ├── Input.jsx
│   │   ├── TextArea.jsx
│   │   ├── Select.jsx
│   │   ├── Label.jsx
│   │   └── Badge.jsx
│   ├── molecules/       # Combinations of atoms
│   │   ├── Card.jsx
│   │   ├── FormField.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TeamMemberCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── JobListingCard.jsx
│   │   ├── NavLink.jsx
│   │   └── SocialLinks.jsx
│   ├── organisms/       # Complex components (sections)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── ProjectGrid.jsx
│   │   ├── TeamGrid.jsx
│   │   ├── ProcessTimeline.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── ApplicationForm.jsx
│   │   ├── ContactForm.jsx
│   │   └── ValuesList.jsx
│   └── templates/       # Page layouts (optional)
│       └── MainLayout.jsx
└── pages/               # Page components (compose organisms)
    ├── Home.jsx
    ├── Services.jsx
    ├── ServiceDetail.jsx
    ├── Projects.jsx
    ├── About.jsx
    └── Employment.jsx
```

## Refactoring Steps

### Phase 1: Create Atomic Structure

1. Create new folder structure: `atoms/`, `molecules/`, `organisms/`, `templates/`
2. Move existing shared components to appropriate levels
3. Update import paths in all components

### Phase 2: Refactor Atoms

Current atoms in `shared/`:

- **Button.jsx** → `atoms/Button.jsx` ✅ Already atomic
- **Icon.jsx** → `atoms/Icon.jsx` ✅ Already atomic

New atoms to extract:

- **Input.jsx** - Extract from forms (text input)
- **TextArea.jsx** - Extract from forms (textarea)
- **Select.jsx** - Extract from forms (select dropdown)
- **Label.jsx** - Extract from forms (form labels)
- **Badge.jsx** - Create for tags/labels (e.g., "Featured", "New")

### Phase 3: Refactor Molecules

Current molecules:

- **Card.jsx** → `molecules/Card.jsx` ✅ Already molecule
- **Section.jsx** → Remove (this is a layout wrapper, integrate into organisms)

New molecules to create by extracting repeated patterns:

- **ProjectCard.jsx** - Extract from FeaturedProjects and ProjectGrid
- **ServiceCard.jsx** - Extract from ServiceCards
- **TeamMemberCard.jsx** - Extract from TeamGrid
- **TestimonialCard.jsx** - Extract from Testimonials
- **JobListingCard.jsx** - Extract from OpenPositions
- **FormField.jsx** - Combination of Label + Input/TextArea/Select
- **NavLink.jsx** - Extract from Header navigation
- **SocialLinks.jsx** - Extract from Footer (if social icons added)

### Phase 4: Refactor Organisms

Move all section-level components to organisms:

**From layout/**

- Header.jsx → `organisms/Header.jsx`
- Footer.jsx → `organisms/Footer.jsx`

**From home/**

- HeroSection.jsx → `organisms/HeroSection.jsx`
- Differentiators.jsx → `organisms/DifferentiatorsSection.jsx`
- ProvenProcess.jsx → `organisms/ProcessTimeline.jsx`
- FeaturedProjects.jsx → `organisms/FeaturedProjectsSection.jsx`
- CoreValues.jsx → `organisms/CoreValuesSection.jsx`

**From services/**

- ServicesHero.jsx → `organisms/ServicesHeroSection.jsx`
- ServiceCards.jsx → `organisms/ServicesGrid.jsx`
- ServiceAreaMap.jsx → `organisms/ServiceAreaSection.jsx`
- ServiceProcess.jsx → `organisms/ServiceProcessSection.jsx`
- Testimonials.jsx → `organisms/TestimonialsSection.jsx`
- ValuesGuarantee.jsx → `organisms/ValuesGuaranteeSection.jsx`

**From projects/**

- ProjectHeroCarousel.jsx → `organisms/ProjectHeroCarousel.jsx`
- ProjectGrid.jsx → `organisms/ProjectGrid.jsx`
- ContractorLogos.jsx → `organisms/ContractorLogosSection.jsx`
- SuccessStory.jsx → `organisms/SuccessStorySection.jsx`
- ProjectCTA.jsx → `organisms/ProjectCTA.jsx`

**From about/**

- AboutHero.jsx → `organisms/AboutHeroSection.jsx`
- OurStory.jsx → `organisms/OurStorySection.jsx`
- CoreValuesList.jsx → `organisms/CoreValuesList.jsx`
- TeamGrid.jsx → `organisms/TeamGrid.jsx`
- GuaranteeSection.jsx → `organisms/GuaranteeSection.jsx`
- AboutCTA.jsx → `organisms/AboutCTA.jsx`

**From employment/**

- EmploymentHero.jsx → `organisms/EmploymentHeroSection.jsx`
- HiringProcess.jsx → `organisms/HiringProcessSection.jsx`
- BenefitsOverview.jsx → `organisms/BenefitsSection.jsx`
- OpenPositions.jsx → `organisms/JobListingsSection.jsx`
- ApplicationForm.jsx → `organisms/ApplicationForm.jsx`

### Phase 5: Update Pages

Update all page files to import from new atomic structure:

- Update Home.jsx
- Update Services.jsx
- Update ServiceDetail.jsx
- Update Projects.jsx
- Update About.jsx
- Update Employment.jsx

### Phase 6: Cleanup

1. Delete old folder structure (`layout/`, `home/`, `services/`, etc.)
2. Update any remaining import paths
3. Test all pages to ensure no broken imports
4. Run linter and fix any issues

## Benefits of Atomic Design

1. **Reusability** - Atoms and molecules can be used across multiple pages
2. **Maintainability** - Clear hierarchy makes finding components easier
3. **Scalability** - Easy to add new pages by composing existing organisms
4. **Testing** - Easier to test individual atoms and molecules
5. **Design System** - Aligns with design system principles
6. **Onboarding** - New developers can understand structure quickly

## File Movement Summary

### Atoms (7 files)

- Button.jsx ✓ (existing)
- Icon.jsx ✓ (existing)
- Input.jsx (new)
- TextArea.jsx (new)
- Select.jsx (new)
- Label.jsx (new)
- Badge.jsx (new)

### Molecules (8 files)

- Card.jsx ✓ (existing)
- ProjectCard.jsx (extract)
- ServiceCard.jsx (extract)
- TeamMemberCard.jsx (extract)
- TestimonialCard.jsx (extract)
- JobListingCard.jsx (extract)
- FormField.jsx (new)
- NavLink.jsx (extract)

### Organisms (~30 files)

- All section-level components from layout/, home/, services/, projects/, about/, employment/
- Header.jsx, Footer.jsx
- All hero sections, grids, forms, CTAs

### Pages (6 files)

- No changes to page files, only import path updates

## Implementation Notes

- Keep all existing functionality intact
- Only reorganize, don't rewrite logic
- Maintain all props and prop types
- Update all import statements
- Keep the same component names (just new locations)
- Test each page after refactoring
- Ensure dev server runs without errors

## Success Criteria

✅ All components follow atomic design hierarchy

✅ Clear separation between atoms, molecules, and organisms

✅ No duplicate code across components

✅ All pages render correctly

✅ No linter errors

✅ Dev server runs successfully

✅ Import paths are clean and logical