export const DOCS = 'https://opendataensemble.org/docs/';
export const GITHUB = 'https://github.com/OpenDataEnsemble/ode';
export const FORUM = 'https://forum.opendataensemble.org/';
export const SECURITY_EMAIL = 'security@opendataensemble.org';
export const GROUNDBREAKER = 'https://groundbreaker.org/';

export const pageLinks = [
  { href: '/about', label: 'About' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
];

export const faqs = [
  {
    question: 'What exactly is Open Data Ensemble?',
    answer:
      'ODE is a family of open-source tools for collecting and synchronizing data. Formulus is the mobile field companion, Synkronus connects your devices, and ODE Desktop, the Portal, and the CLI help you manage your work. They share one public API, so your data can flow into the tools you already use.',
  },
  {
    question: 'Does it really work without internet?',
    answer:
      'Yes. Formulus is offline-first: forms and custom app bundles run on your device, and observations and attachments are stored locally. You need a connection for initial setup, downloading bundles, and synchronizing, but not for everyday field collection once you’re set up.',
  },
  {
    question: 'Can I host it myself?',
    answer:
      'Yes. You can deploy Synkronus on your own infrastructure using Docker and connect the ODE clients to your server. You are responsible for your deployment, access controls, backups, and hosting costs. The documentation walks you through the architecture and setup.',
  },
  {
    question: 'Can I build my own forms and apps?',
    answer:
      'Absolutely. Define forms with JSON Schema and JSON Forms, or build a custom HTML, CSS, and JavaScript app bundle. Formulus provides a bridge for observation storage, attachments, and synchronization. ODE Desktop includes a workbench for local development.',
  },
];
