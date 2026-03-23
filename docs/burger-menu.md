# Burger Menu Component

A fully responsive, accessible, and theme-able burger menu component for NemesisNet.

## Features
- **Responsive:** Automatically switches to a hamburger menu on screens smaller than 768px.
- **Mobile-First:** Optimized for touch interactions and small screens (tested down to iPhone SE 375px).
- **Accessible:** Uses ARIA attributes (`aria-expanded`, `aria-label`) for screen readers.
- **Themable:** Fully integrated with `brand-tokens.css` for easy styling and dark/light mode support.

## Usage

### 1. HTML Structure
Ensure your navigation follows this structure:

```html
<nav id="site-navigation" class="main-navigation">
    <!-- Desktop Menu / Mobile overlay -->
    <ul id="primary-menu">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
    </ul>
    
    <!-- Theme Toggle (Optional) -->
    <button class="theme-toggle" id="theme-toggle">...</button>
    
    <!-- Burger Button -->
    <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu" aria-expanded="false">
        <span class="menu-toggle-icon"></span>
        <span class="menu-toggle-icon"></span>
        <span class="menu-toggle-icon"></span>
    </button>
</nav>
```

### 2. CSS Dependencies
Include the following stylesheets in your `<head>`:

```html
<link rel="stylesheet" href="src/brand-tokens.css">
<link rel="stylesheet" href="css/style.css"> <!-- Or your compiled CSS -->
```

### 3. JavaScript Initialization
Initialize the toggle logic:

```javascript
const menuToggle = document.getElementById('menu-toggle');
const siteNavigation = document.getElementById('site-navigation');

if(menuToggle && siteNavigation) {
    menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuToggle.classList.toggle('is-active');
        siteNavigation.classList.toggle('is-open');
    });
}
```

## Customization
- **Breakpoints:** Modify the `@media screen and (max-width: 768px)` query in `css/style.css` to change when the menu collapses.
- **Colors:** Adjust variables in `brand-tokens.css` to change the overall look.
