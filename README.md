# Lucas Dillenburg – Portfolio

A modern, responsive portfolio built with React and Tailwind CSS, featuring a custom red palette, dark/light theme toggle, and language switcher (PT/EN).

## ✨ Features

- **Modern UI**: Glassmorphism, gradients, and custom red palette (#8B1E3F, #E63946)
- **Responsive Design**: Mobile-first, adapts to all screen sizes
- **Theme Toggle**: Switch between dark and light modes
- **Language Toggle**: Instantly switch between Portuguese and English
- **Sections**:
  - Hero
  - About
  - Experience
  - Education
  - Skills
  - Technologies
  - Projects
  - Contact
- **Animated Elements**: Smooth transitions and subtle animations

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Technologies.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── public/
├── tailwind.config.js
├── package.json
└── ...
```

## 🌐 Customization

- **Colors**: Edit `tailwind.config.js` to adjust the custom palette.
- **Content**: Update the text and data in each component under `src/components/`.
- **Images**: Place your images in `src/assets/images/`.

## 📦 Build for Production

```bash
npm run build
```

## 📝 License

MIT
