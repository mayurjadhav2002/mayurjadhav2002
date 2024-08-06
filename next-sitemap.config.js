// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://mayurjadhav.tech',
    generateRobotsTxt: true, // Optional
    transform: async (config, url) => {
      if (url.includes('/blog/')) {
        // Customize settings for blog URLs if needed
        return {
          loc: url,
          lastmod: new Date().toISOString(),
          changefreq: 'daily',
          priority: 0.7,
        };
      }
      return {
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.5,
      };
    },
  };
  