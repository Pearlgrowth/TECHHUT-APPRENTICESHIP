# Style Guide

This guide outlines the visual design standards for the GitHub Profile Card challenge.

---

## Colors

| Name           | Hex     | Usage                               |
| -------------- | ------- | ----------------------------------- |
| Dark Banner    | #2D313C | Top banner background               |
| Accent Text    | #B0B9FF | “Design + Code” text                |
| Primary Button | #0571ED | Edit button                         |
| Text (Muted)   | #6B7387 | Username and bio                    |
| Background     | #F1F5FA | Page background                     |
| White          | #FFFFFF | Card background                     |
| Link Blue      | #0571ED | Website link (same as button color) |
| Icon Gray      | #DADFE9 | Icon and stroke outlines (optional) |

---

## Typography

### Font Families

- **Poppins**: Used for headings (`Dev Specs`, `Design + Code`)
- **Inter**: Used for body text (`@devspecs`, bio, links)

### Text Styles

| Element        | Font    | Size | Weight | Color   |
| -------------- | ------- | ---- | ------ | ------- |
| Banner Text    | Poppins | 14px | 500    | #B0B9FF |
| Name           | Poppins | 14px | 600    | #B0B9FF |
| Username       | Inter   | 14px | 400    | #6B7387 |
| Bio            | Inter   | 14px | 400    | #6B7387 |
| Button Text    | Inter   | 14px | 600    | #FFFFFF |
| Link (website) | Inter   | 14px | 400    | #0571ED |

---

## Layout & Spacing

| Element              | Value                              |
| -------------------- | ---------------------------------- |
| Card Border Radius   | 16px                               |
| Button Border Radius | 99px (fully pill)                  |
| Avatar Size          | 46x46px (circular)                 |
| Section Padding      | 16–24px (consistent inner spacing) |
| Gap Between Elements | 8px–12px (approximate)             |

---

## Components

### Banner

- Background: `#2D313C`
- Text: Centered `Design + Code`, Poppins 14px, #B0B9FF

### Avatar

- Circular image: 46x46px
- Slight overlap with banner for visual layering

### Profile Info

- **Name**: Poppins, bold, 14px
- **Username & Bio**: Inter, normal, 14px
- **Followers/Following**: Bold numbers + muted labels

### Links

- **Website**: Blue with link icon
- **Location**: Muted gray with location pin icon

### Button

- Label: "Edit"
- Background: #0571ED
- Text color: #FFFFFF
- Fully rounded: Border radius 99px

---

## Shadows & Borders

```css
/* Card shadow */
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);

/* Button hover effect */
button:hover {
  background-color: #0560c0;
}
```
