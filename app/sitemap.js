export default function sitemap() {
  const baseUrl = 'https://glblnex.com'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/started`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
