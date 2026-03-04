# Universal Redesign Guidance for Portfolio Website Art Direction Agents

This document provides global instructions and expectations for all
agents working on implementing a portfolio redesign. These guidelines
apply regardless of which art direction is being implemented.

Each art direction specification should be followed carefully, but the
instructions below define how the implementation process should work.

------------------------------------------------------------------------

# 1. Scope of Redesign

You are encouraged to fully redesign and rebuild the website as needed.

Do not feel constrained by the current implementation.

You may: - restructure the layout - rewrite components - refactor
architecture - replace styling systems - introduce new UI patterns -
remove unnecessary elements

If something in the current implementation does not serve the new art
direction, you should change or remove it.

The goal is a cohesive and high-quality implementation of the art
direction, not preserving legacy code.

------------------------------------------------------------------------

# 2. Code Quality Expectations

The implementation should aim for:

-   clean architecture
-   maintainable structure
-   clear component boundaries
-   readable code
-   minimal technical debt

Avoid quick hacks or temporary fixes.

Prefer: - reusable components - consistent styling patterns - clear file
organization - predictable behavior

------------------------------------------------------------------------

# 3. Placeholder Assets

If additional assets are required to properly implement the design (for
example images, videos, or illustrations), you should use placeholders
during implementation.

Examples include:

-   project hero images
-   project thumbnails
-   background textures
-   motion/video assets
-   portraits
-   illustrations

Use clear placeholder assets and include comments or notes explaining
what should replace them.

Example:

TODO: Replace with high-resolution hero image for Project X\
Recommended size: 2400x1400

or

TODO: Replace with looping background video showing product interaction\
Recommended duration: 6--10 seconds

The goal is to allow the design to be fully implemented before final
assets are available.

------------------------------------------------------------------------

# 4. Asset Requests

At the end of implementation, please provide a clear list of assets that
need to be supplied.

For each asset, specify:

-   where it is used
-   recommended dimensions
-   recommended format (PNG, JPG, SVG, MP4, etc.)
-   any style suggestions

Example format:

Asset Request

Project Hero Image\
Location: Project case study header\
Recommended size: 2400x1400\
Format: JPG\
Style: minimal product screenshot with neutral background

------------------------------------------------------------------------

# 5. Maintain Design Cohesion

While implementing the art direction, maintain consistency across the
entire site.

Ensure alignment in:

-   typography hierarchy
-   spacing scale
-   color usage
-   interaction patterns
-   animation timing
-   layout logic

The site should feel cohesive and intentional.

------------------------------------------------------------------------

# 6. Motion and Animation

Motion should enhance the experience but never become distracting.

Guidelines:

-   animations should be smooth
-   motion should feel intentional
-   transitions should be consistent
-   performance should remain excellent

Avoid:

-   excessive animations
-   long blocking transitions
-   heavy motion that impacts usability

------------------------------------------------------------------------

# 7. Responsiveness

The design must work across:

-   desktop
-   tablet
-   mobile

Layouts should adapt gracefully without breaking visual hierarchy.

Typography and spacing should remain balanced across screen sizes.

------------------------------------------------------------------------

# 8. Performance Considerations

Aim for fast load times and efficient rendering.

Guidelines:

-   avoid unnecessarily large assets
-   lazy load images where appropriate
-   minimize JavaScript where possible
-   ensure smooth scrolling performance

The final site should feel lightweight and responsive.

------------------------------------------------------------------------

# 9. Accessibility

Ensure the site remains accessible.

Consider:

-   readable font sizes
-   sufficient color contrast
-   semantic HTML structure
-   keyboard navigability where relevant
-   alt text for images

Accessibility should not be sacrificed for aesthetics.

------------------------------------------------------------------------

# 10. Project Presentation Quality

Project sections should feel carefully presented and easy to understand.

Avoid overly dense information.

Prioritize:

-   visual clarity
-   structured storytelling
-   clean hierarchy

Projects are the centerpiece of the portfolio.

------------------------------------------------------------------------

# 11. Navigation Simplicity

Navigation should remain clear and intuitive.

Avoid unnecessary complexity.

Visitors should easily find:

-   projects
-   about section
-   contact information

Navigation should support the experience rather than distract from it.

------------------------------------------------------------------------

# 12. Iteration Mindset

Treat this implementation as a design exploration.

If something can be improved within the art direction, feel free to
iterate.

However avoid deviating too far from the core philosophy of the assigned
art direction.

------------------------------------------------------------------------

# 13. Final Deliverable

The final implementation should include:

-   complete layout implementation
-   styling aligned with the art direction
-   working interactions and animations
-   placeholder assets where needed
-   clear documentation for asset replacement
-   clean and maintainable code

------------------------------------------------------------------------

# 14. Implementation Philosophy

Prioritize:

-   clarity
-   elegance
-   intentional design
-   high-quality execution

The goal is not just a functional portfolio, but a polished and
thoughtfully designed experience.
