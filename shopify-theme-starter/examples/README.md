# Example Shopify Theme Sections

These are example Liquid template files that demonstrate how to create custom sections for your Shopify theme.

## Files

### custom-homepage-section.liquid
A hero/banner section for the homepage. Features:
- Customizable image, heading, subheading
- Call-to-action button
- Fully editable through Shopify theme customizer

**Usage:**
1. Save this file to `sections/hero-pools-spas.liquid`
2. In your theme customizer or `templates/index.liquid`, add: `{% section 'hero-pools-spas' %}`

### product-categories-section.liquid
A flexible product category showcase section. Features:
- Dynamic collection linking
- Image support (custom or collection featured image)
- Product count display
- Responsive grid layout

**Usage:**
1. Save this file to `sections/product-categories.liquid`
2. Add to your homepage template
3. Configure collections in the theme customizer

## Customization Tips

### Editing in Cursor:
- Use Cursor's syntax highlighting for Liquid
- Ask Cursor: "How do I add a new field to this Shopify section schema?"
- Use multi-cursor editing to update similar fields

### Adding Your Own Sections:
1. Create a new `.liquid` file in `sections/` directory
2. Start with HTML/Liquid template code
3. Add `{% schema %}` block at the end for theme customizer settings
4. Add `<style>` block for CSS (or use external CSS file)

### Testing:
- Use `shopify theme dev` to preview changes locally
- Test on mobile devices
- Check different product/collection scenarios

## Next Steps

1. Modify these examples to match your brand
2. Add more sections (testimonials, services, location, etc.)
3. Customize colors and typography
4. Add your products and collections in Shopify admin
