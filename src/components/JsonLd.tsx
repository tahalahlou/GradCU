import React from 'react';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'GradCU',
    'headline': 'Columbia Course Planner',
    'description': 'An interactive tool to plan your Columbia academic journey. Visualize course prerequisites, track requirements, and optimize your graduation path.',
    'url': '',
    'applicationCategory': 'EducationalApplication',
    'operatingSystem': 'Web',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'author': {
      '@type': 'Organization',
      'name': 'GradCU Team'
    },
    'audience': {
      '@type': 'Audience',
      'name': 'Columbia University Students'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 