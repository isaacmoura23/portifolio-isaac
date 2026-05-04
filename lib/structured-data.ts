import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/ehsanghaffar',
    },
    publisher: {
      '@type': 'Person',
      name: 'Ehsan Ghaffar',
      url: 'https://eindev.ir',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Isaac Moura — Full Stack Developer',
    description: "Full Stack Developer especializado em Java (Spring Boot), Angular e Node.js. Soluções escaláveis, APIs RESTful e microsserviços.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Isaac Moura',
      url: 'https://github.com/isaacmoura23',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Isaac Moura',
    url: 'https://github.com/isaacmoura23',
    email: 'zackisaacdev@gmail.com',
    sameAs: [
      'https://github.com/isaacmoura23',
      'https://linkedin.com/in/isaac-moura',
    ],
    jobTitle: 'Full Stack Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fortaleza',
      addressRegion: 'CE',
      addressCountry: 'BR',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
