# Praveen Yadav - Portfolio 2026

A modern, high-end portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Smooth Animations**: Framer Motion powered entrance and scroll animations
- **Optimized Performance**: Fast loading times and excellent SEO
- **Clean Code**: Well-organized component structure with TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Navbar with theme toggle
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Experience timeline
│   ├── Projects.tsx       # Projects showcase
│   ├── TechStack.tsx      # Technical skills
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── ThemeProvider.tsx  # Theme context
├── public/
│   ├── images/            # Project images
│   └── documents/         # Resume PDF
└── ...config files
```

## 🎨 Customization

### Updating Content

1. **Personal Info**: Update contact details in `components/Hero.tsx` and `components/Contact.tsx`
2. **Projects**: Modify the `projects` array in `components/Projects.tsx`
3. **Experience**: Update the `experiences` array in `components/Experience.tsx`
4. **Tech Stack**: Customize `techCategories` in `components/TechStack.tsx`

### Styling

- **Colors**: Modify CSS variables in `app/globals.css`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Tailwind**: Customize `tailwind.config.ts`

## 📝 Key Improvements from Previous Version

- ✅ Removed low-signal sections (LeetCode stats, hobbies)
- ✅ Streamlined "About Me" to be professional and concise
- ✅ Modern minimalist design with high visual impact
- ✅ Built with Next.js for better performance and SEO
- ✅ Dark/light mode toggle with system preference detection
- ✅ Smooth Framer Motion animations throughout
- ✅ Modern typography (Inter font family)
- ✅ Clean, maintainable codebase with TypeScript

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The portfolio can also be deployed on:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting platform

## 📧 Contact

- **Email**: praveen098.py@gmail.com
- **LinkedIn**: [linkedin.com/in/praveen-yadav](https://linkedin.com/in/praveen-yadav)
- **Phone**: +91-7888859348

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js and Tailwind CSS

