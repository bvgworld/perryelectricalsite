# Perry Electrical Website

A modern, professional website for Perry Electrical - an electrical contractor specializing in commercial, industrial, and institutional projects across Kansas.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS with custom design system
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **SEO:** React Helmet Async with Schema.org markup
- **Backend:** Firebase (Firestore, Auth)
- **Hosting:** Firebase Hosting
- **Icons:** Lucide React

## 🎨 Design System

### Brand Colors
- **Primary Blue:** `#1A73AA` - Trust, professionalism
- **Accent Dark Blue:** `#0F2D40` - Header, footer, backgrounds
- **Secondary Green:** `#3BA676` - Icons, buttons, highlights
- **Tertiary Light Gray:** `#E5E5E5` - Backgrounds, section separators
- **Text Dark Gray:** `#333333` - Body text

### Typography
- **Heading Font:** Inter (bold, geometric, modern)
- **Body Font:** Source Sans 3 (legible, clean)
- **Accent Font:** Oswald (optional for large headers)

### Spacing
- 8pt spacing system (8px, 16px, 24px, 32px, etc.)
- Consistent padding: `px-4 sm:px-8 lg:px-16`
- Section spacing: `py-12 sm:py-16`

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/      → Header, Footer, Nav, Container
│   ├── sections/    → Hero, Services, Projects, About, Careers, Process
│   └── ui/          → Buttons, Inputs, Modals, Cards
├── pages/
│   ├── index.jsx         (Home)
│   ├── about.jsx
│   ├── services.jsx
│   ├── projects.jsx
│   ├── careers.jsx
│   └── services/         (Service detail subpages)
├── lib/             → Firebase config & utilities, SEO helpers
├── hooks/           → Custom React hooks
├── data/            → Static JSON (projects, services, testimonials)
├── assets/          → Images, logos, icons
└── styles/          → global.css, Tailwind setup
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/perryelectricalsite.git
cd perryelectricalsite
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your Firebase credentials to `.env.local`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔥 Firebase Setup

### Firestore Collections

The app uses the following Firestore collections:

- **`/projects`** - Project portfolio items
- **`/services`** - Service offerings
- **`/jobs`** - Open job positions
- **`/reviews`** - Customer testimonials

### Security Rules

Ensure you configure Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /services/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /jobs/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /reviews/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 📄 Pages

- **Home** (`/`) - Hero, differentiators, process, featured projects, core values
- **Services** (`/services`) - Service overview and cards
  - Panel Upgrades (`/services/panel-upgrades`)
  - EV Chargers (`/services/ev-chargers`)
  - Lighting (`/services/lighting`)
  - Generators (`/services/generators`)
  - Tripping Breaker (`/services/tripping-breaker`)
  - Outlets (`/services/outlets`)
- **Projects** (`/projects`) - Portfolio showcase
- **About** (`/about`) - Company story, values, team
- **Careers** (`/careers`) - Jobs, hiring process, application form

## 🎯 SEO Features

- React Helmet Async for meta tags
- Schema.org LocalBusiness structured data
- Open Graph tags for social media
- Twitter Card support
- Sitemap.xml and robots.txt
- Service area targeting (Kansas)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Tested on all major devices and browsers

## 🚀 Deployment

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase (if not already done):
```bash
firebase init
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

## 🔧 Development Standards

- ES6+ syntax (const, arrow functions, import/export)
- Component composition over complexity
- Keep components under 200 lines when possible
- Extract logic into helper functions or custom hooks
- Use semantic HTML5 structure
- Mobile-first responsive design

## 📝 License

© 2025 Perry Electrical. All rights reserved.

## 👨‍💻 Author

Built with ❤️ for Perry Electrical

---

For questions or support, contact: info@perryelec.com
