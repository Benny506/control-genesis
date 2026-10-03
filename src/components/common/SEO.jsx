import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = "Control Genesis — We Build Digital Solutions",
  description = "We build digital solutions. Control Genesis architects, designs, and engineers world-class web and mobile ecosystems for ambitious startups and global enterprises.",
  keywords = "Control Genesis, We build digital solutions, software development, web architecture, mobile applications, healthcare systems, enterprise platforms, UX design",
  canonical,
  ogType = "website",
  image = "https://controlgenesis.com/assets/images/backgroundPattern.webp",
  schema,
  breadcrumbs,
}) {
  const siteUrl = "https://controlgenesis.com";
  const fullTitle = title.includes("Control Genesis") ? title : `${title} | Control Genesis`;
  const canonicalUrl = canonical || siteUrl;

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    }))
  } : null;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Control Genesis" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Social */}
      <meta property="og:site_name" content="Control Genesis" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@controlgenesis" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Page Specific Structured Data (Schema.org JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Breadcrumbs Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
