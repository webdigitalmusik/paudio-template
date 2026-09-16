export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_TITLE = 'P.Audio Indonesia - Komponen Loudspeaker Profesional';
const DEFAULT_DESC = 'Distribusi dan suku cadang transduser resmi P.Audio untuk sound engineer, box builder, dan instalasi audio profesional di Indonesia.';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80';

export function updateDocumentSEO(props: SEOProps) {
  // 1. Update Title
  const formattedTitle = props.title.includes('P.Audio') ? props.title : `${props.title} | P.Audio Indonesia`;
  document.title = formattedTitle;

  // Helper to set or create meta tag
  const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
    let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 2. Meta description & keywords
  setMeta('name', 'description', props.description || DEFAULT_DESC);
  if (props.keywords && props.keywords.length > 0) {
    setMeta('name', 'keywords', props.keywords.join(', '));
  }

  // 3. OpenGraph
  setMeta('property', 'og:title', formattedTitle);
  setMeta('property', 'og:description', props.description || DEFAULT_DESC);
  setMeta('property', 'og:type', props.ogType || 'website');
  setMeta('property', 'og:site_name', 'P.Audio Indonesia');
  setMeta('property', 'og:image', props.ogImage || DEFAULT_IMAGE);

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://paudio.id';
  const fullUrl = props.canonicalPath 
    ? `${origin}${props.canonicalPath.startsWith('/') ? props.canonicalPath : `/${props.canonicalPath}`}`
    : typeof window !== 'undefined' ? window.location.href : origin;

  setMeta('property', 'og:url', fullUrl);

  if (props.ogType === 'article') {
    if (props.datePublished) {
      setMeta('property', 'article:published_time', props.datePublished);
    }
    if (props.dateModified) {
      setMeta('property', 'article:modified_time', props.dateModified);
    }
    if (props.authorName) {
      setMeta('property', 'article:author', props.authorName);
    }
  }

  // 4. Twitter Card
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', formattedTitle);
  setMeta('name', 'twitter:description', props.description || DEFAULT_DESC);
  setMeta('name', 'twitter:image', props.ogImage || DEFAULT_IMAGE);

  // 5. Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', fullUrl);

  // 6. Schema.org JSON-LD Structured Data
  let jsonLdScript = document.getElementById('paudio-structured-data');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.setAttribute('type', 'application/ld+json');
    jsonLdScript.setAttribute('id', 'paudio-structured-data');
    document.head.appendChild(jsonLdScript);
  }

  if (props.jsonLd) {
    jsonLdScript.textContent = JSON.stringify(props.jsonLd, null, 2);
  }
}
