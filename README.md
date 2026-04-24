# Portfolio - Full Stack Developer & Systems Architect

A high-performance, visually stunning portfolio website built with React 19, Framer Motion, and Firebase. This project showcases advanced techniques in UI/UX design, including dynamic 3D effects, responsive layouts, and secure cloud integration.

## ✨ Key Features

- **🚀 Dynamic 3D Profile Card**: An interactive hero section featuring a 3D tilt effect that responds to mouse movement with smooth, spring-based animations.
- **🖼️ Image Lightbox**: A custom-built modal system for project snapshots, allowing viewers to see high-quality imagery in a seamless overlay.
- **🏗️ Project Showcase**: Detailed project pages for hardware (Bionic Arm) and software (POS System) implementations, complete with technical specs.
- **📨 Firebase Contact Form**: A fully functional "Contact Me" section integrated with Firebase Firestore for secure message storage and management.
- **🛡️ Firestore Security Rules**: Robust security configuration that allows public form submissions while protecting private data.
- **📱 Responsive Design**: Fully optimized for all screen sizes using Tailwind CSS and modern CSS techniques.
- **🌙 Dark Mesh Aesthetics**: A premium, developer-focused aesthetic using custom mesh gradients and subtle micro-animations.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend**: [Firebase](https://firebase.google.com/) (Firestore, Hosting, Analytics)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Firebase account](https://firebase.google.com/) for cloud features

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/deveraxtianrey-cyber/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   Create a `src/firebase.ts` file and add your project configuration (see [Firebase Docs](https://firebase.google.com/docs/web/setup)).

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🚀 Deployment

The project is configured for Firebase Hosting.

1. **Build the production bundle**:
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**:
   ```bash
   firebase deploy
   ```

## 📂 Project Structure

```text
├── public/          # Static assets (images, icons)
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page-level components
│   ├── firebase.ts  # Firebase initialization
│   ├── App.tsx      # Main routing and layout
│   └── main.tsx     # Application entry point
├── firestore.rules  # Database security configuration
└── firebase.json    # Firebase deployment configuration
```

## 📄 License

© 2026 Christian Rey M. De Vera. All rights reserved.
