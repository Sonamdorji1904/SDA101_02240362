### Reflection

In this exercise, I created and styled an HTML table to track my grades throughout the semester. The table included columns for the module name, assignment/exam name, maximum marks, marks obtained, percentage, and grade. This project helped me practice structuring complex data in a way that’s both functional and visually appealing.

Styling tables can be tricky due to the rigid layout, but this project allowed me to explore how to enhance readability through proper spacing, color schemes, and hover effects. My goal was to make the table user-friendly and ensure that the data was easy to interpret at a glance.

### Documentation

1. **HTML Structure**:
   - The table included six columns: Module, Assignment/Exam Name, Maximum Marks, Marks Obtained, Percentage, and Grade. 
   - I made use of the `<thead>` tag to separate the table headers from the data, and the `<tbody>` tag to organize the main content. This ensured that the table remained semantically correct and accessible.

2. **CSS Styling**:
   - **Table Layout**: I used `border-collapse: collapse;` to merge the table borders and give the layout a clean and streamlined look. I also applied consistent padding to each cell to avoid clutter and ensure readability.
   - **Colors**: I opted for alternating row colors (zebra striping) using the `nth-child` selector, which helped in distinguishing rows quickly, especially when there are many rows of data. This visual separation helps the user track information across columns more easily.
   - **Hover Effect**: I added hover effects to each row to enhance interactivity. When hovering over a row, the background color changes subtly, making it clear which row is being focused on.
   - **Borders and Spacing**: Borders were styled minimally to avoid overwhelming the table with too much visual noise. I kept borders thin but used slightly darker shades for the header row to differentiate it from the data rows.
   - **Font**: A clean and modern font was chosen, ensuring that all text remains legible and professional-looking. Font sizes were adjusted to maintain readability without overwhelming the user with too much information at once.

### Challenges I Faced

One of the primary challenges was making the table both visually appealing and practical. With so much data, it’s easy for tables to look cluttered or difficult to read. I had to carefully balance the padding, row height, and font size to ensure that each row provided enough space for the content while maintaining a neat overall appearance.

Another challenge was ensuring responsiveness. Tables are often difficult to make responsive since they have a fixed number of columns. I had to experiment with flexible widths to ensure the table adapts on smaller screens, either by adjusting column widths or enabling horizontal scrolling when necessary.

Lastly, getting the hover effects to work smoothly with alternating row colors required extra CSS specificity. I had to ensure that the hover state overrode the alternating row color without losing the table’s visual consistency.