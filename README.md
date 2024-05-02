# Weekday UI

A dashboard made using Weekday's API to display cards about job listings.

## How to run?

I have hosted the app. Check the link in the description of the repo. However, if you want to clone it, simply fire up a terminal and run <code>npm i</code> in the root directory.

## File Structure

<strong>-src/components:</strong>

<ol>
<li><strong>Button.jsx: </strong>Reusable button component made using MUI Button component.</li>
<li><strong>Input.jsx: </strong>Reusable input component made using MUI Input component.</li>
<li><strong>JobCard.jsx: </strong>Card component used for listing jobs.</li>
<li><strong>JobsGrid.jsx: </strong>Parent of JobCard component used to make a grid of JobCard component.</li>
<li><strong>Select.jsx: </strong>Reusable select component made using MUI Select component.</li>
</ol>
<strong>-src/layout:</strong>
<ol>
<li><strong>AppBar.jsx: </strong>The Navbar component present at the top of the app made using MUI AppBar.</li>
</ol>
<strong>-src/pages:</strong>
<ol>
<li><strong>Root.jsx: </strong>This is the root page which is the parent of all the other pages. This can be used to run any code, e.g., Context, Redux, Toast, etc., which will be common for all the pages/screens.</li>
<li><strong>about: </strong>A dummy page added to test the React Router.</li>
<li><strong>jobPage: </strong>The main page of the app, which displays job listings in the form of cards.</li>
</ol>
<strong>-src/routes:</strong>
<ol>
<li><strong>index.jsx: </strong>Contains the React Router Dom configuration.</li>
</ol>
<strong>-src/store/redux:</strong>
<ol>
<li><strong>store.jsx: </strong>Contains the React Redux Toolkit configurations</li>
<li><strong>jobsSlice.jsx: </strong>Contains the slice for jobs which contains the API call.</li>
</ol>
<strong>-src/util:</strong>
<ol>
<li><strong>helper.js: </strong>This contains reusable helper functions.</li>
</ol>

## Assignment Requirements

| Requirement       | Status | Description                                                                                     |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------- |
| Job Cards         | ✅     | Cards have been implemented as per the design.                                                  |
| Filters           | ⌛     | The UI has been made but the filter functionality is pending.                                   |
| Infinite Scroll   | ✅     | Implemented, 10 new cards will be fetched each time the user scrolls to the bottom of the page. |
| Responsive Design | ✅     | The UI is responsive for all screen sizes.                                                      |

<em>The filtering logic is under process. I was unable to implement due to the assignment falling in the middle of the week :)</em>

## Technological Requirements

| Technology  | Status |
| ----------- | ------ |
| ReactJS     | ✅     |
| Redux       | ✅     |
| CSS         | ✅     |
| Material UI | ✅     |
