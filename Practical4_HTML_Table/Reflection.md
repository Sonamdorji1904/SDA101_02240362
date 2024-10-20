### Reflection

For this exercise, I created an HTML table to represent my weekly course schedule. The task helped me solidify my understanding of using HTML tables effectively for organizing and presenting structured data. Tables are a straightforward way to represent time-based data, and in this case, creating a timetable with days of the week and specific time slots provided a practical approach to building a functional and visually clear schedule.

The main focus was on ensuring that each element of the table was properly aligned and that the overall layout was user-friendly. It was important to group related elements, like time slots and corresponding courses, in a way that made the table easy to read at a glance.

### Documentation

1. **Table Structure**:
   - The table was structured with the `<table>` element, which contained rows (`<tr>`) and columns (`<td>` and `<th>`).
   - **Header Row**: I used the `<th>` element for the days of the week (Monday to Friday) to make sure these column headers stood out from the data rows.
   - **Row Headers**: Each time slot (e.g., 9:00 AM–11:00 AM, 11:00 AM–1:00 PM) was placed in the first column as a row header. This ensured that the table could easily be understood as a timetable with time on the left and courses on the right.
   - **Cells**: The courses were added to the corresponding cells under the appropriate day and time. Empty time slots were left blank where there were no classes, allowing for a clearer representation of free time.

2. **CSS for Styling**:
   - I added basic styling to make the table more visually appealing. Using CSS, I adjusted the borders of the table for better clarity and used `border-collapse: collapse` to merge borders of adjoining cells. I also added padding and adjusted the alignment to ensure that both the headers and data were easy to read.

### Challenges I Faced

One challenge I faced was making the table visually appealing while maintaining clarity. Initially, the table looked cluttered and disorganized due to inconsistent column widths and poor spacing. I had to experiment with CSS to apply uniform styles, especially when adjusting the width of columns to ensure that the text did not overlap or look crammed.

Another challenge was ensuring that the table remained readable on smaller screens. While this wasn’t a requirement for the exercise, it prompted me to consider responsive design techniques in the future. Without any CSS grid system or responsive design framework, the table could appear too large or difficult to navigate on smaller devices.

Lastly, I had to pay close attention to how the data was organized within the table. Incorrectly nested rows or columns could easily lead to misalignment, making the timetable confusing. Careful attention to detail was required when placing each course in its appropriate time slot, which helped reinforce the importance of accuracy when working with tables.