# GradCU – Columbia University Course Prerequisites Visualization

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An interactive visualization tool for exploring course prerequisites for **Columbia University’s Computer Science major** in SEAS. This tool helps students better understand course dependencies and plan their academic journey.

## About

GradCU is a modern, interactive tool designed to help Columbia students visualize and understand course prerequisites across the CS curriculum.
Built with Next.js and TypeScript, it provides a clean, intuitive interface for exploring course relationships.
This version builds on prior visualization ideas (@VineethSendilraj) while being redesigned entirely for Columbia.

## Features

- **Interactive Course Map**: Visual representation of Columbia CS prerequisites and their relationships
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Zoom & Pan**: Easily navigate through the course graph
- **Course Categories** (adapted for Columbia):
  - Math Requirements (Light Blue)
  - Science Requirements (Green)
  - SEAS Core (Yellow)
  - CS Intro Core (Sky Blue)
  - Probability & Statistics (Orange)
  - CS Area Foundation (Purple)
  - CS Electives (Pink)
  - Technical Electives / GTEs (Gray)
- **AND/OR Logic**: Diamond shapes represent alternative prerequisite paths

## Technical Details

### Course Node Structure
Each course is represented as a node with:
- Course ID (e.g., **COMS W3134**)
- Course Title
- Prerequisites
- Requirement Category (Thread)
- Multi-thread markers when a course satisfies more than one category

### Thread Requirements (Columbia SEAS)
- Required foundational CS coursework
- Math + Science foundations
- Area Foundation requirements (Systems, Theory, AI, etc.)
- 3000-level CS electives
- Technical electives (GTE)
- Some courses can satisfy multiple thread areas

## Getting Started

1. Visit the deployed site (if hosted)
2. Select which requirement categories you want to display
3. Explore course prerequisites and relationships
4. Use filters to focus on specific areas
5. Switch between light/dark mode for readability

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- Done -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
 
