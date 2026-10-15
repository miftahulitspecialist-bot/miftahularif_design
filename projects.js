/* Portfolio data, grouped per brand. Edit this file to add or change work.
 *
 * To add a new brand: copy one whole { ... } block inside BRANDS, change the
 * values, and put its images in assets/images/.
 *
 * Each project needs: title, category, description, tools, img, w, h
 * (w and h = image width and height in pixels, used to avoid layout jumps).
 */
const BRANDS = [
  {
    name: "RasaKu Kitchen",
    tagline: "Rasa autentik, dibuat dengan hati",
    type: "Food & beverage · SME",
    year: "2025",
    summary: "Complete visual identity and marketing materials for a home-style kitchen brand, from logo system to print, social media, and event communication.",
    palette: ["#23422E", "#D2793A", "#C9A34A", "#F8F5EC", "#A7B89E"],
    projects: [
      {
        title: "SME visual identity",
        category: "Branding",
        description: "Logo variations, color palette, typography, icon set, and usage guidelines that keep the brand consistent.",
        tools: ["Illustrator", "Photoshop"],
        img: "assets/images/rasaku-visual-identity.jpg", w: 1122, h: 1402
      },
      {
        title: "Print branding materials",
        category: "Print",
        description: "Brochure, business cards, promo posters, table standee, stickers, and packaging inserts.",
        tools: ["Illustrator", "Photoshop"],
        img: "assets/images/rasaku-print-branding.jpg", w: 1086, h: 1448
      },
      {
        title: "Instagram content",
        category: "Social Media",
        description: "Feed designs for product promotion, ordering steps, testimonials, and menu highlights.",
        tools: ["Canva", "Photoshop"],
        img: "assets/images/rasaku-instagram-content.jpg", w: 1254, h: 1254
      },
      {
        title: "Digital campaign assets",
        category: "Campaign",
        description: "Web banners, promo voucher, and social media assets that support the digital campaign.",
        tools: ["Photoshop", "Canva"],
        img: "assets/images/rasaku-digital-campaign.jpg", w: 1600, h: 900
      },
      {
        title: "Event communication",
        category: "Print",
        description: "Grand opening poster, event backdrop, pull-up banner, and table tent.",
        tools: ["Illustrator"],
        img: "assets/images/rasaku-event-communication.jpg", w: 1086, h: 1448
      }
    ]
  }
];
