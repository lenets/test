/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_ENQUIRY_PAGE_FORMSPARK: string; // Test: eSmarY3i
  VITE_NEWSLETTER_PAGE_FORMSPARK: string; // Test: eSmarY3i
  VITE_NEWSLETTER_FORM_FORMSPARK: string; // Test: eSmarY3i
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
