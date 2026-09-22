# GOLD Center website — GitHub Pages package

This is a static GitHub Pages website for **GOLD Center — Governance, Oversight, Law & Diplomacy**.

## Deployment

Upload the contents of this folder to the root of the `GOLD-Center` GitHub repository. GitHub Pages should publish from:

- Branch: `main`
- Folder: `/ (root)`
- Custom domain: `goldc.org`

## Course enquiry form

The course enquiry form uses **FormSubmit** because GitHub Pages cannot send email by itself.

Current destination configured in `index.html`:

`info@goldc.org`

On the **first real form submission**, FormSubmit normally sends an activation/confirmation email to that address. Confirm it once and later submissions should be forwarded there.

If the receiving mailbox should be different, edit this line in `index.html`:

```html
<form class="interest-form" action="https://formsubmit.co/info@goldc.org" method="POST">
```

Replace `info@goldc.org` with the mailbox you want to receive course enquiries.

The form includes a honeypot anti-spam field, consent checkbox, bilingual labels, and redirects back to the registration section after submission.

## Partnerships

A dedicated Partnerships section has been added for **PJL** and **UNICRI**. The cards deliberately use typographic marks rather than third-party logos. Official partner logos can be added later if approved brand assets are available.

## Language

English is the default. Arabic translations are stored in `assets/js/main.js`. The revised Arabic is written as institutional Arabic rather than as a literal translation.
