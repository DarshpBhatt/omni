# Shopify Theme Starter for Sparkling Pools & Spas

This is a basic Shopify theme structure to get you started. You'll need to download an actual theme from Shopify or use Shopify CLI to initialize one.

## Quick Start

1. Install Shopify CLI:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. Authenticate:
   ```bash
   shopify auth login
   ```

3. Initialize a theme (choose one):
   ```bash
   # Start with Dawn theme
   shopify theme init --theme-id 887
   
   # Or pull from your store
   shopify theme pull
   ```

4. Start development server:
   ```bash
   shopify theme dev --store=your-store.myshopify.com
   ```

## Customization Ideas for Pools & Spas

### Homepage Sections to Consider:
- Hero banner with pool/spa imagery
- Product categories (Pools, Spas, Chemicals, Equipment)
- Services section (Installation, Maintenance, Repairs)
- Featured products
- Customer testimonials
- Image gallery
- Location/service area map

### Key Pages:
- Products catalog
- Services page
- About Us
- Contact/Location
- Installation guides
- Maintenance tips

## Notes

This starter directory shows the basic structure. You'll need to use Shopify CLI to get actual theme files with all necessary Liquid templates and assets.
