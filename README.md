# Shweta Padmanabha for Cedar Park City Council

A modern, professional campaign website for Shweta Padmanabha's run for Cedar Park City Council.

## Deployment

This website is deployed on Vercel. To deploy updates:

1. Push changes to the main branch on GitHub
2. Vercel will automatically deploy the changes

For manual deployment, connect your GitHub repository to Vercel.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Semantic HTML and proper ARIA labels
- **Fast Loading**: Optimized for performance
- **Interactive**: Smooth scrolling, modal dialogs, and animated sections

## Setup Instructions

1. **Add Images**: 
   - Place your logo image as `logo.png` in the root directory
   - The logo should match the design shown in your reference image

2. **Open the Website**:
   - Simply open `index.html` in a web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Customize Content**:
   - Edit `index.html` to update any text content
   - Modify `styles.css` to adjust colors, fonts, or layout
   - Update `script.js` for additional interactivity

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── logo.png           # Campaign logo (you need to add this)
└── README.md          # This file
```

## Customization

### Colors
The color scheme is defined in `styles.css` using CSS variables:
- `--primary-blue`: #1a3a5f (Main blue)
- `--accent-orange`: #d84a3a (Orange accent)
- `--dark-blue`: #0d2440 (Dark blue)

### Sections
The website includes the following sections:
- **Home**: Hero section with main message
- **Meet Shweta**: Personal journey and professional experience
- **Community Leadership**: Civic engagement history
- **Local Cedar Park Leadership**: Local involvement
- **Vision & Commitment**: Campaign vision statement
- **Priorities**: Key campaign priorities
- **Endorsements**: Placeholder for endorsements
- **Campaign Events**: Placeholder for events
- **Get Involved**: Volunteer and donation information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Make sure to add your actual logo image as `logo.png`
- Update contact email addresses in the footer and modal
- Add actual endorsement and event content when available
- Consider adding social media links if needed

## License

This website is created for Shweta Padmanabha's campaign for Cedar Park City Council.

