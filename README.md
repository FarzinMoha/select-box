# install:
```bash
$ yarn install
```

# debug:
```bash
$ yarn dev
```

and check the result on: 
[http://localhost:3000](http://localhost:3000) 
with your browser to check the project

# build:
```bash
$ yarn build
```

## Project Description

This is a test project that implements a multi drop-down select component. The component allows users to select multiple items from a dropdown list and also add new custom items by typing them in an input field and pressing Enter. The dropdown automatically closes when clicking outside of it.

**Built with:**
- Next.js "PAGE ROUTER"
- TypeScript  
- SCSS

The component is designed to be reusable and follows modern web development practices.

## Components

### Input Component

A reusable input component that serves as the base for the SelectBox component.

**Props:**
- `rightIcon` (optional): React node that displays an icon on the right side of the input
- `paddingLeft` (optional): Custom left padding for the input field
- All standard HTML input attributes (placeholder, disabled, onClick, etc.)

**Features:**
- Forward ref support for direct access to the input element
- Customizable padding and right icon
- Styled with SCSS modules

### SelectBox Component

A flexible dropdown select component that supports both single and multi-selection modes.

**Props:**
- `options`: Array of SelectOption objects `{id: number, label: string, value: string}`
- `name`: Input name for form handling
- `placeholder` (optional): Placeholder text for the input
- `value`: Currently selected option(s) - can be SelectOption, SelectOption[], or null
- `onChange`: Callback function that receives a change event with the new value
- `isMulti` (optional, default: false): Enables multi-selection mode
- `isDisabled` (optional, default: false): Disables the component interaction
- `isClearable` (optional, default: false): Shows a clear button to reset selection

**Features:**
- **Single/Multi Selection**: Toggle between single and multiple item selection
- **Click Outside to Close**: Automatically closes dropdown when clicking outside
- **Keyboard Accessible**: Full keyboard navigation support
- **Visual Feedback**: Selected items are highlighted with checkmarks
- **Clear Functionality**: Optional clear button in multi-select mode
- **Disabled State**: Prevents interaction when disabled
- **Smooth Animations**: Arrow rotation and dropdown transitions