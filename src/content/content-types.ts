export type ContentLink = {
  label: string;
  href: string;
};

export type SeoContent = {
  title: string;
  description: string;
};

export type BrandContent = {
  name: string;
  tagline: string;
};

export type ContactConfig = {
  phone: string;
  email: string;
  address: string;
};

export type FooterConfig = {
  copyright: string;
  icp: ContentLink;
  policeBeian: ContentLink;
  legalLinks: ContentLink[];
};

export type SiteConfig = {
  brand: BrandContent;
  seo: SeoContent;
  contact: ContactConfig;
  footer: FooterConfig;
};

export type StatItemContent = {
  value: string;
  label: string;
};

export type StructureCardContent = {
  title: string;
  tags: string[];
};

export type SectionItem = {
  index: string;
  title: string;
  description: string;
};

export type SimpleCardContent = {
  title: string;
  description: string;
};

export type LayerContent = {
  level: string;
  name: string;
  side: string;
  items: string[];
};

export type ScenarioCardContent = {
  index: string;
  tag: string;
  title: string;
  description: string;
  chips: string[];
};

export type AboutStatContent = {
  value: string;
  title: string;
  description: string;
};

export type ContactItemContent = {
  title: string;
  value: string;
  meta: string;
  type: "phone" | "email" | "address";
};

export type FormFieldContent = {
  label: string;
  placeholder: string;
};

export type ContactFormContent = {
  title: string;
  description: string;
  fields: {
    name: FormFieldContent;
    company: FormFieldContent;
    email: FormFieldContent;
    message: FormFieldContent;
  };
  submitLabel: string;
};

export type FooterColumnContent = {
  title: string;
  links: ContentLink[];
};

export type HomePageContent = {
  header: {
    navigation: ContentLink[];
    contactButtonLabel: string;
  };
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    description: string;
    primaryButton: ContentLink;
    secondaryButton: ContentLink;
    stats: StatItemContent[];
    structureCards: StructureCardContent[];
  };
  sections: {
    value: {
      titleCard: {
        titleLines: [string, string, string];
        highlightedLine: string;
        description: string;
        action: ContentLink;
      };
      items: SectionItem[];
    };
    capabilities: {
      eyebrow: string;
      title: string;
      action: ContentLink;
      featured: {
        title: string;
        description: string;
        tags: string[];
        detailLink: ContentLink;
      };
      cards: SimpleCardContent[];
      base: {
        title: string;
        description: string;
        tags: string[];
      };
    };
    architecture: {
      eyebrow: string;
      title: string;
      titleLines: [string, string];
      description: string;
      highlights: string[];
      action: ContentLink;
      layers: LayerContent[];
    };
    scenarios: {
      eyebrow: string;
      title: string;
      cards: ScenarioCardContent[];
    };
    about: {
      eyebrow: string;
      title: string;
      titleLines: [string, string];
      paragraphs: [string, ...string[]];
      action: ContentLink;
      statsPanelTitle: string;
      stats: AboutStatContent[];
    };
    contact: {
      eyebrow: string;
      title: string;
      titleLines: [string, string];
      description: string;
      items: ContactItemContent[];
      form: ContactFormContent;
    };
  };
  footer: {
    description: string;
    columns: FooterColumnContent[];
  };
};
