# NoteMinder

NoteMinder is a powerful application designed to streamline your note-taking process. With NoteMinder, you can effortlessly create, store, edit, and delete notes, while also adding colors and categories to enhance organization. The app also provides a convenient filtration feature, allowing you to easily search and sort notes by color and category.

## Installation Instructions

To get started with NoteMinder, follow these simple steps:

1. Run the command `npm i` to install any required dependencies.
2. Once the installation is complete, execute `npm start` to launch the project.

## Usage

Upon launching NoteMinder, you will find a side menu on the left side of the screen. This menu can be expanded to display descriptions for various actions, such as note creation and filtration. In the web version, if the menu is collapsed, tooltips will provide descriptions for each button.

When creating a new note, you have the option to assign a background color and category, enhancing the visual organization of your notes. These additional features are entirely optional and can be used based on your preference.

To edit a note, simply hover over the note card and click on the small pencil button that appears. This action will enable you to modify the text, background color, and category of the note.

NoteMinder provides a seamless editing experience, allowing you to make changes to your notes with ease. Whether you need to update the text content, change the background color to better represent the note's importance, or assign a different category for improved organization, the editing feature empowers you to customize your notes exactly as you prefer.

## File Structure

The file structure of NoteMinder is organized as follows:

- **src**
  - **animation**: This folder contains the code responsible for animating separate elements and components of the app using frame motion.
  - **buttons-arrays**: Here, you'll find arrays that are utilized for rendering buttons used in note filtration.
  - **components**: This folder further consists of three sub-folders:
    - **mobile**: Contains files specifically related to the mobile version of the app.
    - **mutual**: Holds reusable files that are utilized in various parts of the application.
    - **web**: Includes files dedicated to the web version of NoteMinder.
  - **hooks**: Contains a file with a custom hook implementation.
  - **store**: This folder holds the store file, APIs files, and slices related to NoteMinder's state management.
  - **styles**: Includes various files with custom styles for the application.
- **App.js**: The main entry point for NoteMinder.
- **index.js**: The root file for rendering the application.

## Credits

NoteMinder incorporates the following external libraries and frameworks to enhance its functionality:

- **mui**: The MUI library provides a comprehensive set of customizable UI components, allowing for a consistent and polished user interface.
- **framer-motion**: Framer Motion is utilized for animating elements and components of the app, creating smooth and visually appealing transitions.
- **sass**: The Sass preprocessor is employed to write modular and maintainable CSS stylesheets, making it easier to manage and customize the app's appearance.
- **react-masonry-css**: React Masonry CSS enables the creation of responsive and dynamic grid layouts, ensuring a visually pleasing arrangement of notes.
- **concurrently**: Concurrently is used to run multiple commands concurrently during the development process, increasing efficiency and reducing setup time.

These libraries have been integrated into NoteMinder to provide a seamless user experience, improved visual aesthetics, enhanced organization, and efficient development practices.

Happy note-taking with NoteMinder!
  
