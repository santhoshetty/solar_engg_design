# Product Requirements Document (PRD)

**Project Name:** 4Solar Engineering Design Website  
**Project Summary:** The 4Solar website serves as an online presence for a solar engineering design company. It provides a visual overview of the company's offerings, past projects, company background, and contact form for inquiries, primarily targeting solar installers and EPC companies.

## Core Functionalities

### 1. Landing Page with Video

- Displays a video on the transformation of a solar cell into a solar farm.
- Sticky navigation bar should be visible on this page.
- Should include a brief call-to-action (CTA) that directs users to the services page.
- **Dependencies**: Video file (provided by the client)

### 2. Services Page

- Describes all the services offered by 4Solar.
- Should contain service sections/cards with brief descriptions and icons.
- **Reusable Component**: `ServiceCard`

### 3. Project Gallery

- Displays a gallery of past projects, each with a thumbnail, title, and brief description.
- Clicking on a project opens a dedicated page with detailed project information.
- **Reusable Component**: `ProjectCard`
- **Dependencies**: Images and details for each project (provided by the client)

### 4. About Page

- Contains information about 4Solar, its history, and the founding team.
- Should be engaging and visually appealing, using any branding assets available.
- **Reusable Component**: Could include team member or timeline components if needed.

### 5. Contact Page

- A form that captures user inquiries and sends them via email to 4Solar.
- Fields: Name, Email, Phone (optional), Message.
- **Reusable Component**: `ContactForm`
- **Dependencies**: Email API configuration for form submission

## Technical Requirements

- **Framework**: Next.js 19
- **Styling**: Tailwind CSS for responsive, custom styling.
- **Icons**: Lucide Icons library
- **UI Components**: ShadCN
- **Documented Files**: All main folders should contain a README or relevant documentation for setup and usage.
- **API and Utils**: Any external API usage (e.g., for email submission) should be handled via helper functions in the `lib` folder.

## File Structure

```plaintext
solar_engg_design_website
├── README.md
├── app
│   ├── about
│   │   └── page.tsx
│   ├── careers
│   │   └── page.tsx
│   ├── components
│   │   └── Hero.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── projects
│   │   ├── [projectId]
│   │   └── page.tsx
│   └── services
│       ├── detail-engineering
│       ├── feasibility-study
│       ├── page.tsx
│       └── permit-design
├── components
│   ├── EmailTemplate.tsx
│   ├── Footer.tsx
│   ├── LoadingState.tsx
│   ├── LogoCarousel.tsx
│   ├── Navbar.tsx
│   ├── PDFHeader.tsx
│   ├── PageTransition.tsx
│   ├── ProcessTimeline.tsx
│   ├── ProjectCard.tsx
│   ├── ServiceCard.tsx
│   └── VideoPlayer.tsx
├── components.json
├── instructions
│   └── instructions.md
├── lib
│   ├── constants.ts
│   └── utils.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── audio
│   │   └── background-music.mp3
│   ├── images
│   │   ├── about
│   │   ├── companies
│   │   ├── global-presence.png
│   │   ├── hero.webp
│   │   ├── logo
│   │   ├── projects
│   │   ├── services
│   │   ├── steps
│   │   └── team
│   └── videos
│       └── solar-transformation.mp4
├── tailwind.config.ts
└── tsconfig.json
```

## Documentation Provided

### 1. README.md

- Project purpose and brief description.
- Setup instructions for initial deployment and configuration.
- Links to any additional documentation or resources.

### 2. Instructions Folder

- **instructions.md**: Additional instructions for setup or configuration beyond the README (e.g., environment variables, specific library configurations).

### 3. Code Documentation

- In-code comments should be added to complex functions or logic in `utils.ts`.
- Each component should have a brief comment at the top describing its purpose, especially those in `components` (e.g., `VideoPlayer`, `ContactForm`).

## Additional Notes

- **Dependencies**: Ensure that all provided assets, such as video files for the landing page and project images, are correctly referenced and accessible in the `public` folder.
- **Consistency**: Use Tailwind for styling throughout the project to maintain consistency. Follow a defined color and typography scale to align with 4Solar's brand identity.
- **Testing**: Basic browser testing is required to ensure cross-browser compatibility.

## Conclusion

This PRD defines the structure and details required for developing the 4Solar website. By organizing the project into clear sections with reusable components, developers can efficiently build and extend the site's features.