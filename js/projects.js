/* Portfolio data, grouped per brand. Edit this file to add or change work.
 *
 * HOW TO ADD A NEW BRAND
 *   Copy a whole { ... } block inside BRANDS (see "Brand Dummy" at the bottom),
 *   change the values, and put its images in assets/images/.
 *   Put a comma between brand blocks (no comma after the last one).
 *
 * PROJECTS (images)
 *   Each project needs: title, category, description, tools, img, w, h
 *   (w and h = image width and height in pixels, used to avoid layout jumps).
 *   Optional: video: { ... }  -> adds a "Watch video" button to that project.
 *
 * VIDEOS (shown inside the same columns as the images, in the `videos` list)
 *   Optional: after: 2  -> place the video right after the 2nd item (default: at the end).
 *   Local file : { title, description, src: "assets/videos/name.mp4", poster: "assets/images/cover.jpg", ratio: "9:16" }
 *   YouTube    : { title, description, youtube: "VIDEO_ID", ratio: "16:9" }
 *   ratio: "16:9" (default) | "9:16" | "1:1" | "4:5"
 *
 * Everything named "Brand Dummy" / "dummy-*" is sample content: replace or delete it.
 */
const BRANDS = [
  {
    name: "RasaKu Kitchen",
    tagline: "Rasa autentik, dibuat dengan hati",
    type: "Food & beverage · SME",
    year: "2025-2026",
    summary: "Complete visual identity and marketing materials for a home-style kitchen brand, from logo system to print, social media, and event communication.",
    palette: ["#23422E", "#D2793A", "#C9A34A", "#F8F5EC", "#A7B89E"],
    projects: [
      {
        title: "SME visual identity",
        category: "Branding",
        description: "Logo variations, color palette, typography, icon set, and usage guidelines that keep the brand consistent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/rasaku-visual-identity.jpg", w: 1122, h: 1402
      },
      {
        title: "Print branding materials",
        category: "Print",
        description: "Brochure, business cards, promo posters, table standee, stickers, and packaging inserts.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/rasaku-print-branding.jpg", w: 1086, h: 1448
      },
      {
        title: "Instagram content",
        category: "Social Media",
        description: "Feed designs for product promotion, ordering steps, testimonials, and menu highlights.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/rasaku-instagram-content.jpg", w: 1254, h: 1254
      },
      {
        title: "Digital campaign assets",
        category: "Campaign",
        description: "Web banners, promo voucher, and social media assets that support the digital campaign.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/rasaku-digital-campaign.jpg", w: 1600, h: 900
      },
      {
        title: "Event communication",
        category: "Print",
        description: "Grand opening poster, event backdrop, pull-up banner, and table tent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/rasaku-event-communication.jpg", w: 1086, h: 1448
      }
    ],
    videos: []
  },

  /* ---- SAMPLE BRAND: replace everything below with your real brand ---- */
  {
    name: "KoinX",
    tagline: "Simplifying Crypto Taxes and Accounting.",
    type: "Software Development · SME",
    year: "2025-2026",
    summary: "Complete visual identity and marketing materials for KoinX, from logo system to print, social media, and event communication.",
    palette: ["#0866CC", "#FF9D00", "#0D1B2A", "#F5F7FA", "#ffffff"],
    projects: [
      {
        title: "Logo & identity",
        category: "Branding",
        description: "Brand Colors, Visual Language, Typography, Tone of Voice, and Social Media Example",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/KoinX Visual Identity Board.png", w: 1080, h: 1350
      },
      {
        title: "Instagram Content",
        category: "Social Media",
        description: "Awareness · Brand introduction, Educational content, Problem awareness, Product value, Brand centerpiece, Educational content, Solution.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/KoinX Crypto Clarity Carousel.png", w: 1080, h: 1080,
      },
      {
        title: "Print branding materials",
        category: "Print",
        description: "Brochure, business cards, posters, stickers, lanyard, Bulpoint and Book",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/KoinX Corporate Brand Identity Flat Lay.png", w: 1086, h: 1448
      },
      {
        title: "Digital campaign assets",
        category: "Campaign",
        description: "Web banners, promo voucher, and social media assets that support the digital campaign.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/KoinX Crypto Tax Marketing Collage.png", w: 1600, h: 900
      },
      {
title: "Event communication",
        category: "Print",
        description: "Grand opening poster, event backdrop, pull-up banner, and table tent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/KoinX Grand Opening Branding Board.png", w: 1086, h: 1448
      },
    ],
    videos: []
  },
  {
    name: "PJM Group",
    tagline: "Bersama Membangun Masa Depan.",
    type: "Real Estate · SME",
    year: "2025-2026",
    summary: "Complete visual identity and marketing materials for PJM Group, from logo system to print.",
    palette: ["#1E2A78", "#E01E37", "#2FB3E6", "#E6EAF2"],
    projects: [
      {
        title: "SME visual identity",
        category: "Branding",
        description: "Logo variations, color palette, typography, icon set, and usage guidelines that keep the brand consistent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/PJM Group Corporate Identity Board.png", w: 1122, h: 1402
      },
      {
        title: "Print branding materials",
        category: "Print",
        description: "Business cards, letterheads, envelopes, and corporate folders in a professional minimalist style.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/PJM Group Corporate Stationery Mockup.png", w: 1086, h: 1448
      },
      {
        title: "Instagram content",
        category: "Social Media",
        description: "Branding, Awareness · Brand introduction, Educational content, Problem awareness, Product value, Brand centerpiece, Educational content, Solution.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/PJM Group Corporate Brand Grid.png", w: 1254, h: 1254
      },
      {
        title: "Digital campaign assets",
        category: "Campaign",
        description: "Brand Awareness, Corporate Branding, Business Solutions, Investment & Growth, Collaboration.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/PJM Group Corporate Brand Toolkit.png", w: 1600, h: 900
      },
      {
        title: "Event communication",
        category: "Print",
        description: "Grand opening poster, event backdrop, pull-up banner, and table tent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/PJM Group Grand Opening Branding Mockup.png", w: 1086, h: 1448
      }
    ],
    videos: []
  },
  {
    name: "Apotek Pahala",
    tagline: "Sehat Bersama Pahala",
    type: "Pharmacy",
    year: "2025-2026",
    summary: "Complete visual identity and marketing materials for Apotek Pahala, from logo system to print.",
    palette: ["#b7192d", "#7e1022", "#d8a62e", "#fff8ec", "#292526"],
    projects: [
      {
        title: "SME visual identity",
        category: "Branding",
        description: "Logo variations, color palette, typography, icon set, and usage guidelines that keep the brand consistent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Apotek Pahala Brand Guidelines Board.png", w: 1122, h: 1402
      },
      {
        title: "Print branding materials",
        category: "Print",
        description: "Brochure, business cards, promo posters, table standee, stickers, and packaging inserts.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Apotek Pahala Branding Materials Board.png", w: 1086, h: 1448
      },
      {
        title: "Instagram content",
        category: "Social Media",
        description: "Feed designs for product promotion, ordering steps, testimonials, and menu highlights.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Apotek Pahala Instagram Grid Campaign.png", w: 1254, h: 1254
      },
      {
        title: "Digital campaign assets",
        category: "Campaign",
        description: "Web banners, promo voucher, and social media assets that support the digital campaign.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Apotek Pahala Health Campaign Banner.png", w: 1600, h: 900
      },
      {
        title: "Event communication",
        category: "Print",
        description: "Grand opening poster, event backdrop, pull-up banner, and table tent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Apotek Pahala Health Event Branding Board.png", w: 1086, h: 1448
      }
    ],
    videos: []
  },
  {
    name: "Nice for Kids",
    tagline: "Happy Kids, Brighter Future",
    type: "Retail",
    year: "2025-2026",
    summary: "Complete visual identity and marketing materials for Nice for Kids, from logo system to print.",
    palette: ["#7ac943", "#ffc529", "#ff8a3d", "#cfe8bb", "#fff9e6"],
    projects: [
      {
        title: "SME visual identity",
        category: "Branding",
        description: "Logo variations, color palette, typography, icon set, and usage guidelines that keep the brand consistent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Panduan Identitas Ceria Nice For Kids.png", w: 1122, h: 1402
      },
      {
        title: "Print branding materials",
        category: "Print",
        description: "Brochure, business cards, promo posters, table standee, stickers, and packaging inserts.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Mockup Branding Nice For Kids.png", w: 1086, h: 1448
      },
      {
        title: "Instagram content",
        category: "Social Media",
        description: "Feed designs for product promotion, ordering steps, testimonials, and menu highlights.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Kolase Promosi Ceria Nice For Kids.png", w: 1254, h: 1254
      },
      {
        title: "Digital campaign assets",
        category: "Campaign",
        description: "Web banners, promo voucher, and social media assets that support the digital campaign.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Kolase Promosi Ceria Nice For Kids(1).png", w: 1600, h: 900
      },
      {
        title: "Event communication",
        category: "Print",
        description: "Grand opening poster, event backdrop, pull-up banner, and table tent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Kolase Grand Opening Nice For Kids.png", w: 1086, h: 1448
      }
    ],
    videos: []
  },
  {
    name: "Al Hamra Restaurant",
    tagline: "Good Food, Good Mood at Hamra",
    type: "Food & Beverage · SME",
    year: "2025-2026",
    summary: "Complete visual identity and marketing materials for Al Hamra Restaurant, from logo system to print.",
    palette: ["#e8d8b7", "#6b4f3b", "#1f2a22", "#111111", "#f8f5ed"],
    projects: [
      {
        title: "SME visual identity",
        category: "Branding",
        description: "Logo variations, color palette, typography, icon set, and usage guidelines that keep the brand consistent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Hamra Cafe Visual Identity Guide.png", w: 1122, h: 1402
      },
      {
        title: "Print branding materials",
        category: "Print",
        description: "Brochure, business cards, promo posters, table standee, stickers, and packaging inserts.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Hamra Cafe & Resto Brand Showcase.png", w: 1086, h: 1448
      },
      {
        title: "Instagram content",
        category: "Social Media",
        description: "Feed designs for product promotion, ordering steps, testimonials, and menu highlights.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Hamra Café & Resto Instagram Grid.png", w: 1254, h: 1254
      },
      {
        title: "Digital campaign assets",
        category: "Campaign",
        description: "Web banners, promo voucher, and social media assets that support the digital campaign.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Hamra Café & Resto Promotional Collage.png", w: 1600, h: 900
      },
      {
        title: "Event communication",
        category: "Print",
        description: "Grand opening poster, event backdrop, pull-up banner, and table tent.",
        tools: ["Photoshop", "Canva", "Illustrator"],
        img: "assets/images/Ramadan Café Branding Collage.png", w: 1086, h: 1448
      }
    ],
    videos: []
  },
];
