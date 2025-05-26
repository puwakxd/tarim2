// Backend konfigürasyonu - tek yerden yönet
export const config = {
  // Backend hazır olduğunda bu değerleri değiştir
  BACKEND_URL: "http://localhost:8000", // Backend URL'in
  API_SECRET: "your-api-secret", // API secret'ın

  // API endpoints
  endpoints: {
    // Stats
    stats: "/api/stats",

    // Services
    services: "/api/services",

    // News
    news: "/api/news",
    newsFeatured: "/api/news/featured",
    newsCategories: "/api/news/categories",

    // Branches
    branches: "/api/branches",
    branchCities: "/api/branches/cities",

    // Products
    products: "/api/products",
    productCategories: "/api/products/categories",

    // Contact
    contact: "/api/contact",
    contactInfo: "/api/contact/info",
    contactDepartments: "/api/contact/departments",

    // Applications
    applications: "/api/applications",
    smsVerification: "/api/sms/send-verification",
    smsVerify: "/api/sms/verify",

    // Corporate
    corporateAbout: "/api/corporate/about",
    corporateHistory: "/api/corporate/history",
    corporateValues: "/api/corporate/values",
  },

  // Cache durations (seconds)
  cache: {
    stats: 3600, // 1 hour
    services: 3600, // 1 hour
    news: 300, // 5 minutes
    branches: 3600, // 1 hour
    products: 3600, // 1 hour
    corporate: 86400, // 24 hours
  },

  // Headers
  getHeaders: () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${config.API_SECRET}`,
  }),

  // Full URL builder
  getUrl: (endpoint: string) => `${config.BACKEND_URL}${endpoint}`,
}
