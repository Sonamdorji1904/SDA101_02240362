### Reflection

In this exercise, I worked on creating a stylized list of college events using both HTML and CSS. The list included an ordered list of events, and for each event, I used a nested unordered list to display additional details such as time and location. This allowed me to explore how lists can be effectively used to present structured information in a more organized manner.

Styling lists in CSS was both fun and challenging as I aimed to move beyond the default styles. I focused on improving readability, visual appeal, and interactivity by introducing custom bullets, spacing, and hover effects.

### Documentation

1. **HTML Structure**:
   - The HTML file included an ordered list (`<ol>`) of at least five college events. Each event had a nested unordered list (`<ul>`) to display the event's time and location.
   - The use of nested lists helped in grouping related information under each event, ensuring that it was displayed in a clear and hierarchical way.

2. **CSS Styling**:
   - **Custom Bullets**: Instead of using the default numbers for the ordered list, I used the `list-style-type` property to create custom bullets. Additionally, I experimented with using images as list markers for more visual distinction.
   - **Hover Effects**: For each event, I added hover effects using `:hover` in CSS, so when a user hovers over the event, the text color or background color changes. This provided interactivity and a subtle visual cue to highlight each event as the user navigates through the list.
   - **Spacing and Padding**: Proper spacing and padding were crucial to ensure the list was easy to read. I adjusted the `margin` and `padding` properties to prevent the text from feeling cramped and gave each event enough space to stand out without overwhelming the user.
   - **Font and Colors**: I applied consistent fonts and a color scheme that matched the rest of the page’s design. I used colors that contrasted well to make the text easy to read, even after applying hover effects.

### Challenges I Faced

One of the primary challenges was creating custom list markers that fit well with the overall design. Initially, I experimented with different types of bullets and even custom icons, but aligning them with the text proved to be tricky. I had to adjust the `padding-left` property to ensure the custom bullets didn’t overlap with the event details.

Another challenge was maintaining the readability of the list when applying hover effects. While changing the background color during hover interactions was a good addition, it sometimes interfered with the text color, making the event details harder to read. To overcome this, I had to carefully select contrasting colors and test them for accessibility.

Lastly, keeping the nested unordered list properly aligned under each event was another hurdle. Without careful attention to CSS rules, the nested list could either appear too close to or too far from the event name. I spent some time fine-tuning the margins and padding to ensure everything was aligned consistently and looked professional.