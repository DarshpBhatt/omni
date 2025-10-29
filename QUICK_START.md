# Quick Start: Creating a Shopify Site with Cursor

## For www.sparklingpoolsandspas.ca

### Immediate Next Steps:

1. **Install Shopify CLI**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Create/Login to Shopify Partner Account**
   - Go to https://partners.shopify.com
   - Sign up (it's free)
   - Create a development store

3. **Connect Your Store**
   ```bash
   shopify auth login
   shopify theme dev
   ```

4. **Choose Your Starting Template**

   **Option 1: Start with Dawn (Free, Most Popular)**
   ```bash
   shopify theme init
   # When prompted, choose "Download from Shopify Theme Store"
   # Enter theme ID: 887 (Dawn)
   ```

   **Option 2: Browse Themes First**
   - Visit https://themes.shopify.com/
   - Search for themes suitable for retail/home improvement
   - Note the theme ID or download it
   - Use `shopify theme pull` to get it locally

   **Option 3: Start Fresh**
   ```bash
   shopify theme init
   # Choose "Create a new theme"
   ```

5. **Start Customizing in Cursor**
   - Open the theme directory in Cursor
   - Modify Liquid templates
   - Update CSS/JS in assets/
   - Add sections for pools/spas content

### Recommended First Customizations:

1. **Update Brand Colors** - Edit `assets/base.css` or theme settings
2. **Modify Homepage** - Edit `templates/index.liquid` or sections
3. **Add Logo** - Upload to `assets/` and reference in `layout/theme.liquid`
4. **Customize Navigation** - Edit header sections
5. **Add Product Collections** - Create collections for Pools, Spas, Chemicals, etc.

### Useful Cursor Features:

- **Ask Cursor AI**: "How do I create a product collection in Shopify?"
- **Code Completion**: Cursor knows Liquid syntax
- **File Search**: Cmd/Ctrl+P to find theme files quickly
- **Multi-file Edits**: Make changes across multiple theme files simultaneously

### Common Tasks:

**Add a new section:**
- Create file in `sections/` directory
- Use `{% schema %}` to define settings
- Add to templates using `{% section 'section-name' %}`

**Modify styles:**
- Edit CSS in `assets/` directory
- Use theme settings for customizable colors/fonts

**Add JavaScript:**
- Add to `assets/theme.js` or create new .js files
- Reference in `layout/theme.liquid`

### Tips:

- Always use `shopify theme dev` for local preview with hot reload
- Test on mobile devices (Shopify themes are responsive by default)
- Use Shopify's theme inspector in browser DevTools
- Check Shopify docs: https://shopify.dev/themes

### Getting Help:

- Shopify Theme Docs: https://shopify.dev/themes
- Liquid Reference: https://shopify.dev/api/liquid
- In Cursor: Ask "How do I [task] in Shopify Liquid?"

---

**Next:** Once you've chosen a theme and set up your environment, we can start customizing it for Sparkling Pools & Spas!
