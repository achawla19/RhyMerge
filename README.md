# RhyMerge - Music Collaboration Platform

A minimal, production-ready frontend bootstrap for RhyMerge, where producers, vocalists, and sound engineers unite to create extraordinary music together.

## 🎵 Figma Design Sources

- **RhyMerge Final Design**: [View on Figma](https://www.figma.com/design/ZQOJI4buC15SdIAiSsE7gu/RhyMerge-Final?node-id=0-1&p=f)
- **RhyMerge Wireframes**: [View on Figma](https://www.figma.com/design/VqgJSwN2vguNSXdRz16j4Q/RhyMerge-Wireframes?node-id=0-1&p=f)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager
- Python 3.9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd rhymerge

# Install frontend dependencies
cd frontend
yarn install

# Install backend dependencies
cd ../backend
pip install -r requirements.txt
```

### Running the Application

#### Frontend (Development)
```bash
cd frontend
yarn start
# Opens at http://localhost:3000
```

#### Backend (Development)
```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
# API runs at http://localhost:8001
```

Or use supervisor (production-like):
```bash
sudo supervisorctl restart all
```

## 📁 Project Structure

```
/app
├── frontend/
│   ├── public/
│   │   └── assets/
│   │       ├── logo.svg
│   │       ├── hero-bg.jpg
│   │       ├── who1.jpg
│   │       ├── who2.jpg
│   │       ├── who3.jpg
│   │       └── sample1.mp3
│   ├── src/
│   │   ├── components/
│   │   │   ├── index.jsx         # Component barrel exports
│   │   │   ├── Navbar.jsx        # Sidebar navigation with mobile support
│   │   │   ├── Hero.jsx          # Landing hero with animations
│   │   │   ├── WhoFor.jsx        # Three persona cards
│   │   │   └── AudioPlayer.jsx   # Spotify-style audio player
│   │   ├── pages/
│   │   │   └── Home.jsx          # Main home page
│   │   ├── App.js                # Main app component
│   │   ├── AppRouter.jsx         # React Router setup
│   │   └── index.css             # Global styles
│   └── package.json
│
└── backend/
    ├── server.py                 # FastAPI backend (minimal endpoints)
    └── requirements.txt
```

## 🎨 Tech Stack

### Frontend
- **React 19** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Create React App** - Build tooling

### Backend
- **FastAPI** - Python web framework
- **MongoDB** - Database
- **Motor** - Async MongoDB driver

## 🎯 Components Overview

### Navbar
- Responsive sidebar navigation
- Mobile hamburger menu with slide-over
- Active route highlighting
- Navigation links: Home, Community, Projects, Messages, Profile

### Hero
- Full-width hero section with background image
- Gradient overlay matching brand colors
- Framer Motion entrance animations
- Respects `prefers-reduced-motion`
- Primary CTA: "Start A Project"
- Secondary CTA: "Find Artists"

### WhoFor
- Three circular avatar cards
- Personas: Music Producers, Vocalists, Sound Engineers
- Hover effects with scale and color transitions
- Fully responsive grid layout

### AudioPlayer
- HTML5 audio controls
- Play/Pause button
- Seekable progress bar
- Volume control with mute toggle
- Keyboard accessible (Space for play/pause, arrows for seeking)
- Spotify-inspired design

## 🎨 Color Palette

```css
--brand-dark: #0B2540        /* Page background */
--primary-violet: #7B61FF     /* Primary brand color */
--accent-pink: #E36FFF        /* Accent highlights */
--cta-red: #E11D48            /* Call-to-action buttons */
--muted-gray: #9CA3AF         /* Secondary text */
--text-white: #FFFFFF         /* Primary text */
```

## 🔤 Typography

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

## ♿ Accessibility Features

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on all images
- Respects reduced motion preferences
- WCAG AA color contrast compliance

## 📱 Responsive Design

- **Mobile**: < 768px (hamburger menu, stacked layout)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (sidebar always visible)

## 🔮 Future Backend Integration

Minimal backend endpoints are prepared for future integration:

- `GET /api/` - Health check
- `POST /api/status` - Status check creation
- `GET /api/status` - Get all status checks

Additional endpoints to be added:
- User authentication
- Project management
- Audio file upload/streaming
- Real-time collaboration features
- Messaging system

## 📝 Notes

- This bootstrap intentionally includes only **Navbar**, **Home**, **WhoFor**, and **AudioPlayer** for fast frontend prototyping
- Assets are placeholders and can be replaced with final production assets
- Backend is minimal and ready for expansion
- All routes except Home show "Coming soon" placeholder pages

## 🙏 Credits

- Design: RhyMerge Figma files
- Sample audio: SoundHelix
- Images: Unsplash & Pexels
- Icons: Lucide React

---

**© 2025 RhyMerge. Where music minds merge.**