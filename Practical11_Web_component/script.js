class CustomCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create the card structure
        const card = document.createElement('div');
        card.classList.add('card');

        // Create the header, content, and footer slots
        const headerSlot = document.createElement('slot');
        headerSlot.name = 'header';
        const contentSlot = document.createElement('slot');
        contentSlot.name = 'content';
        const footerSlot = document.createElement('slot');
        footerSlot.name = 'footer';

        // Append slots to the card
        card.appendChild(headerSlot);
        card.appendChild(contentSlot);
        card.appendChild(footerSlot);

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .card {
                width: 500px; /* Set the width of the card */
                border: 1px solid var(--border-color, #ccc);
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                margin: 16px;
                padding: 16px;
                background-color: var(--bg-color, #fff);
                text-align: center; /* Center text in the card */
            }
            ::slotted(span) {
                display: block;
                font-weight: bold;
                margin-bottom: 8px;
            }
            ::slotted(img) {
                width: 100%; /* Set width to 100% to fit the card */
                height: auto; /* Set a fixed height */
                object-fit: cover; /* Cover to maintain aspect ratio */
                margin: 8px 0; /* Spacing around images */
                border-radius: 8px; /* Rounded corners for images */
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(card);
    }
}

// Define the custom element
customElements.define('custom-card', CustomCard);
