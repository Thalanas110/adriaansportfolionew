# Resume Download Design

## Summary

Add a dedicated resume download action to the `PILOT DOSSIER` section so recruiters and collaborators can retrieve a PDF copy of Adriaan's resume without leaving the page flow.

## Placement

The resume action lives in the dossier right column as its own panel, positioned above the existing `Connect` panel. This keeps the download close to education and identity details, which is where visitors naturally look for a formal resume.

## Content

- Panel label: `Resume`
- Supporting copy: short recruiter-facing explanation that the PDF is a direct download
- Primary action: `DOWNLOAD RESUME`
- Delivery behavior: same-origin anchor with the `download` attribute

## Data

Resume download metadata should live with the rest of the portfolio content data so the component stays presentational. The metadata includes:

- Public PDF path
- Download filename
- Short note for the panel copy

## Interaction

The resume action should feel like a primary dossier control, using the existing vault-terminal visual language rather than a plain text link. No duplicate hero CTA is needed for this change.

## Validation

- Add a regression test that verifies the configured resume asset exists in `public/`
- Verify the configured download filename is present and ends in `.pdf`
- Run the targeted test and a production build after implementation
