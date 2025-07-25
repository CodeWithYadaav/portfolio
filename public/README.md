# Public Assets Folder

This folder contains all public assets for the portfolio website.

## Structure

### `/images/`

Place your images here:

- `profile.png` - Your professional headshot/profile photo (PNG preferred)
- `profile.jpg` - Alternative JPG format (fallback)
- Any other images you want to use

### `/documents/`

Place your documents here:

- `resume.pdf` - Your resume PDF file
- Any other documents you want to make downloadable

## How to Use

1. **Add Your Photo:**

   - Place your professional photo as `public/images/profile.png` (preferred)
   - Alternative: `public/images/profile.jpg` (fallback)
   - Supported formats: PNG, JPG, WebP
   - Recommended size: 400x400px (square) for best results

2. **Add Your Resume:**

   - Place your resume as `public/documents/resume.pdf`
   - The website will automatically link to this file

3. **File Naming:**
   - Keep file names simple and without spaces
   - Use lowercase letters and hyphens if needed
   - Example: `profile-photo.png`, `praveen-resume.pdf`

## Current Setup

The website is currently configured to look for:

- Profile photo: `public/images/profile.png` (primary) or `public/images/profile.jpg` (fallback)
- Resume PDF: `public/documents/resume.pdf`

## Smart Fallback System

The website has a smart fallback system:

1. **First**: Tries to load `profile.png`
2. **Second**: If PNG fails, tries `profile.jpg`
3. **Third**: If both fail, shows a professional icon

This ensures your website always looks good, regardless of which format you use!

If you use different filenames, update the paths in `index.html` and `script.js` accordingly.
