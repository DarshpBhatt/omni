# Shopify Website Development Guide for www.sparklingpoolsandspas.ca

This guide will help you understand how to use Cursor to develop a Shopify website for Sparkling Pools & Spas.

## Prerequisites

1. **Shopify Partner Account** (free) - Sign up at https://partners.shopify.com
2. **Shopify CLI** - Tool for local development
3. **Node.js** (v14 or higher) - Required for Shopify CLI
4. **Git** - For version control

## Getting Started

### Step 1: Install Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

### Step 2: Authenticate with Shopify

```bash
shopify auth login
```

### Step 3: Create a Development Store

1. Go to https://partners.shopify.com
2. Navigate to "Stores" > "Add store" > "Development store"
3. Create a store for testing (you can use the free trial)

### Step 4: Initialize Theme

You have several options:

#### Option A: Start with a Starter Theme (Recommended)
```bash
# Download a free starter theme from Shopify Theme Store
shopify theme pull

# Or initialize a new theme from scratch
shopify theme init
```

#### Option B: Start with Dawn (Shopify's Free Theme)
```bash
# Download Dawn theme (most popular free theme)
shopify theme init --theme-id 887
```

#### Option C: Use a Premium Theme Template
1. Purchase/download a theme from the Shopify Theme Store
2. Upload it to your store
3. Pull it locally using `shopify theme pull`

## Working with Themes in Cursor

### Theme Structure

A Shopify theme typically has this structure:
```
theme/
├── assets/          # CSS, JavaScript, images
├── config/          # Theme settings schema
├── layout/          # Layout templates (theme.liquid, checkout.liquid)
├── locales/         # Translation files
├── sections/        # Reusable section files
├── snippets/        # Reusable code snippets
├── templates/       # Page templates
└── templates/customers/  # Customer account templates
```

### Key Files to Customize

1. **layout/theme.liquid** - Main layout wrapper
2. **templates/index.liquid** - Homepage template
3. **sections/** - Modular page sections (hero, products, etc.)
4. **assets/theme.css** or **assets/theme.scss** - Main styles
5. **assets/theme.js** - Main JavaScript

### Development Workflow

1. **Start Local Development Server**
   ```bash
   shopify theme dev --store=your-store-name.myshopify.com
   ```
   This starts a local server with hot reload at http://localhost:9292

2. **Push Changes to Store**
   ```bash
   shopify theme push
   ```

3. **Pull Changes from Store**
   ```bash
   shopify theme pull
   ```

### Using Cursor Features

1. **AI-Assisted Editing**: Use Cursor's AI to:
   - Generate Liquid code snippets
   - Write Shopify-specific JavaScript
   - Create responsive CSS
   - Write product queries and filters

2. **Code Completion**: Cursor understands:
   - Liquid template syntax
   - Shopify objects (products, collections, cart, etc.)
   - Shopify filters and tags

3. **File Navigation**: Use Cmd/Ctrl+P to quickly jump between theme files

## Recommended Themes for Pools & Spas Business

### Free Options:
- **Dawn** - Modern, minimalist, highly customizable
- **Craft** - Clean, product-focused
- **Sense** - Elegant, premium feel

### Premium Options (Check Theme Store):
- **Impulse** - Feature-rich, great for product showcases
- **Prestige** - Luxury feel, good for high-end products
- **Debut** - Simple, classic, versatile

## Next Steps for Sparkling Pools & Spas

1. **Choose a Theme**: Review themes in the Shopify Theme Store
2. **Set Up Local Environment**: Install CLI and authenticate
3. **Download Theme**: Pull your chosen theme locally
4. **Customize**: Use Cursor to modify colors, layouts, and content
5. **Add Content**: Products, collections, pages specific to pools/spas
6. **Test**: Use development store to test before going live

## Useful Shopify Liquid Objects

- `product` - Current product data
- `collection` - Current collection data
- `cart` - Shopping cart contents
- `customer` - Logged-in customer data
- `shop` - Store information
- `collections` - All collections

## Helpful Commands

```bash
# List all commands
shopify theme --help

# Check theme for issues
shopify theme check

# Package theme for deployment
shopify theme package

# View theme in store
shopify theme open
```

## Resources

- [Shopify Theme Development](https://shopify.dev/themes)
- [Liquid Documentation](https://shopify.dev/api/liquid)
- [Shopify CLI Documentation](https://shopify.dev/themes/tools/cli)
- [Theme Store](https://themes.shopify.com/)
