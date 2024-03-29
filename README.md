# Refactoring UI Reflections and Journalling prototype

## Journalling Prototype

### Project Scope

A user should be able to:

- Add a dated journal entry
- Include an image to describe their day in one photo (optional)
- View existing journal entries
- Search journal entries

### Design

I will be using the resources from the Refactoring UI book to guide my approach as I envision the website's layout and user interface. The idea here is to keep it super simple and build up on that.

### Building with:

ReactJS, Tailwind CSS and Vite

### Static UI

I intend to start with a static UI before I can get around to adding the dynamic functionality.

### Implement the journal entry creation

Create a form or interface for users to input and save their journal entries. This would also provide the option of adding an image to go with the journal entry. I will then implement the logic to handle saving the entries - using local storage initially and then a backend API.

#### My Approach

In the 'Refactoring UI' book, the authors opine that when starting from scratch, it is best to start with a feature - not a layout. thinking of the app at the onset can be overwhelming, since as it were, the app as it were, is a collection oof many features. to do this, I needed to start with a piece of actual functionality.

Since I am building a journal web app, my interface will need:

- A field for the actual journal entry
- A submit button
- an interface that displays the journal entry


- Controling an input with a state variable
Inputs are typically uncontrolled as they only show the initial value, not what the value is right now. To make it a controlled input, we need to pass the value prop to the input so that it always has the value passed. This is done by declaring a state value


Once I had this in place, the next step was to get the value from the text area and display it on the 'Journal Posted' section. The only tricky thing that I found was that my textarea was controlled using state variable, but within the Child component, and NOT on the parent component where the button to be clicked is. So I need to 'lift the state up' and pass down props from the parent to the child component.

Once this is done, I need to pass the journal entry from the textarea to the 'Journal entry' child component.

### Display the journal entries

Build a feature to display saved journal entries and images (if any) in a user-friendly format. Use React components to render each entry.

### Implement searching

Add functionality to search for journal entries so that users can filter and categorize their entries.

### Optimize and Deploy

Optimize my code for performance, accessibility, and SEO before deploying to Netlify.

### Continuous Learning and Improvement

Reflect on this project, identify areas for improvement, and seek feedback from peers and the developer community. Keep learning and iterating on my skills and projects.

## Starting From Scratch

### Start with a feature not a layout

An app is a collection of features, so start with a piece of actual functionality.

So when I think about my journalling website, the most elemental piece of functionality is the ability to add

### Detail comes later

Dont get hung up on typefaces, icons and shadows etc

### Hang on with the color fast

design in and then switch it up later

### Do not overinvest

The idea is to move fast to building the real thing. This goes for sketches and wireframes. Dont design too much - you do not need every single feature working. Design a simple version and then build it. there'll be challenges, but fix them on the go. Design > code

### Choose a personality

Think typography. Classic - serif typeface. playful - rounded sans serif. for a plainer look, think neutral sans serif.

Think color. Blue is safe, ubiquitous. Gold is sophisticated. pink is playful.

Think Border radius.

Think Tone!

### Limit Choices

The paradox of choice. To counter this, define systems in advance. that goes for color and for fonts.

work with elimination, using the pre-defined systems. Have systems for font, line height, color, margin, padding, width, height, box-shadows.


```jsx

```
