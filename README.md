# VolleyRotation - Project Overview

VolleyRotation is a web application designed to help volleyball coaches and referees manage player rotations during matches. The app enables users to input team rosters, select starting lineups, and automatically track player positions as the score progresses according to official volleyball rotation rules.

## Why Another Volleyball App?

While there are existing volleyball applications, VolleyRotation addresses a specific pain point I've experienced in my coaching career. Beyond solving this immediate need, this project serves as a proof of concept for integration with my larger VolleyScore application. I've chosen to develop this as a standalone project first to validate the rotation tracking functionality before incorporating it into the broader ecosystem.

## Technical Challenges

The primary technical challenge lies in volleyball's unique rotation system. Players rotate clockwise when winning a point off the opponent's serve, moving through six court positions (numbered 1-6, starting from bottom-right and continuing counter-clockwise to middle-back). This rotation pattern doesn't map naturally to standard array indexing, requiring a custom solution for position tracking.

## User Experience Goals

- **Smart Substitution Controls**: Restrict substitution options to bench players only, and when re-substituting, limit choices to the original player (following volleyball regulations)
- **Mobile-First Design**: Prioritize mobile responsiveness for sideline use during matches

## Technology Stack

- **NextJS** - React framework for web application
- **TypeScript** - Type safety and developer experience
- **TailwindCSS** - Utility-first styling
- **Zustand** - Lightweight state management

## Development Plan

I'm focusing on an MVP approach, building incrementally with each component fully functional before moving forward:

1. **Data Architecture**: Establish robust match and player data structures
2. **Team Management**: Build forms for team creation and player registration
3. **Lineup Selection**: Implement starting lineup configuration
4. **Court Visualization**: Create interactive court display with player positioning
5. **Scoring & Rotation**: Develop automatic rotation system tied to scoring events
