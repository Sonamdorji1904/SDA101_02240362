### Reflection

This exercise involved creating a simple landing page for a fictional e-commerce site focused on selling tech gadgets. The landing page required several key components: a navigation bar, a product listing section using a grid layout, and a footer. I also had to ensure that the page was responsive for different devices, making use of media queries for tablet and desktop breakpoints.

Creating a landing page like this provided an excellent opportunity to apply both semantic HTML elements and responsive design principles. I focused on structuring the webpage correctly with elements such as `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`, making the layout not only visually appealing but also accessible and SEO-friendly. It was a great chance to improve my understanding of grid layout and media queries, especially how to adjust layouts for varying screen sizes.

### Documentation

1. **HTML Structure**:
   - I started by using semantic HTML tags to give the page a meaningful structure. A `<header>` tag housed the navigation bar, `<main>` contained the product grid section, and the `<footer>` had important links like privacy policy, terms of service, and social media.
   - The navigation bar was straightforward, with anchor links for "Home", "Products", "About Us", and "Contact".
   - The product listing section used a grid layout with at least six products. Each product displayed an image, name, and price.

2. **CSS and Responsiveness**:
   - **Grid Layout**: The grid layout in the product section allowed me to present products neatly, ensuring that the layout adapted to different screen sizes. I used `grid-template-columns` to define columns, which collapsed into a single column on smaller devices like tablets.
   - **Hero Section**: At the top of the page, I created a responsive hero section with a background image and overlay text. I used relative units like `vh` and `vw` for height and width to make the hero section responsive. The text overlay was styled to be centered and adjust with screen sizes.
   - **Media Queries**: I applied media queries to ensure the layout shifted based on the screen size. For tablet devices (768px to 1023px), the grid shifted from three products per row to two products per row. For desktop screens (1024px and above), the grid displayed three products per row.
   - **Relative Units**: Throughout the project, I used relative units like `em`, `rem`, `vh`, and `vw` to ensure that the page scaled properly across different screen sizes, rather than relying on fixed pixel units.

### Challenges I Faced

One of the main challenges was creating a responsive grid layout that looked good on different screen sizes. Getting the right balance between the number of columns, the size of product images, and the spacing between products was tricky, especially as the grid needed to look cohesive on both desktop and mobile.

Additionally, ensuring that the hero section with the background image and overlay text scaled appropriately on smaller screens required a lot of experimentation. I had to play with various combinations of `vh`, `vw`, and media queries to ensure that the text overlay remained legible and centered across different screen sizes without obscuring the background image.

Lastly, I encountered some difficulty with making the navigation bar responsive. I had to research how to implement a mobile-friendly dropdown or hamburger menu, as the navigation bar could not fit horizontally on smaller screens.

Overall, this project helped solidify my understanding of both semantic HTML and responsive design. It highlighted the importance of testing across multiple screen sizes to ensure a seamless user experience.