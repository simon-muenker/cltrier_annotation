# Open Text-Annotation Tool

A configurable web interface for conducting text annotation studies with demographic surveys. This tool enables researchers to collect structured insights through customizable questionnaires and systematic text analysis.

## Overview

The Open Text-Annotation Tool is an educational and research platform that allows users to:

- **Create custom annotation projects** with tailored survey questions and text samples
- **Collect demographic data** through configurable survey forms
- **Export results** in standard JSON format for further analysis
- **Maintain data privacy** with client-side processing and transparent data handling

## Features

### Configurable Survey System

- Customizable demographic questionnaires
- Multiple choice options with validation
- Progress tracking and visual feedback
- Default values and optional questions support

### Text Annotation Interface

- Multi-dimensional annotation categories
- Sample-by-sample annotation workflow
- Navigation controls with progress indicators
- Customizable annotation options and descriptions

### Data Management

- JSON-based configuration system
- Client-side data storage and processing
- Export functionality for collected responses
- Import/export of custom datasets
- Transparent data handling with downloadable results

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/simon-muenker/Open-Text-Annotation-Tool.git
   cd Open-Text-Annotation-Tool
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser to `localhost:4321/Open-Text-Annotation-Tool`

## Usage

### Getting Started

1. Visit the setup page at `/setup` to upload your custom configuration or explore with the demo
2. Complete the demographic survey (Step 1)
3. Annotate the provided text samples (Step 2)
4. Download your results and submit to the specified upload location (Step 3)

### Configuration Format

The tool uses JSON configuration files with the following structure:

```json
{
  "sections": {
    "hero": { "title": "...", "introduction": "..." },
    "survey": { "headline": "...", "description": "...", "contactMail": "..." },
    "annotation": { "headline": "...", "description": "..." },
    "submission": {
      "headline": "...",
      "description": "...",
      "uploadUrl": "..."
    }
  },
  "survey": [
    {
      "id": "...",
      "label": "...",
      "options": ["None", "Option 1", "Option 2"],
      "description": "optional description"
    }
  ],
  "annotation": [
    {
      "id": "...",
      "label": "...",
      "options": ["None", "Category 1", "Category 2"],
      "description": "optional description"
    }
  ],
  "samples": [
    {
      "id": "...",
      "features": [
        {
          "label": "...",
          "content": "..."
        }
      ]
    }
  ]
}
```

### Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run prettier`        | Format code with Prettier                        |
| `npm run eslint`          | Lint code and fix issues                         |

## Privacy & Data Handling

- **Client-side processing**: All data processing happens in your browser
- **No external tracking**: No analytics or user tracking implemented
- **Transparent data export**: Results downloadable in human-readable JSON format
- **Local storage**: Configuration and responses stored locally in browser
- **No server dependency**: Can run entirely offline after initial load

## Relevant Sources

- **Frontend**: Astro.js with Svelte components
- **Styling**: Tailwind CSS
- **State Management**: Nanostores with persistent storage
