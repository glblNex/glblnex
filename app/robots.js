export default function robots() {
  const allowAll = { allow: '/', disallow: [] }

  return {
    rules: [
      { userAgent: '*', ...allowAll },
      { userAgent: 'GPTBot', ...allowAll },
      { userAgent: 'ChatGPT-User', ...allowAll },
      { userAgent: 'ClaudeBot', ...allowAll },
      { userAgent: 'anthropic-ai', ...allowAll },
      { userAgent: 'Google-Extended', ...allowAll },
      { userAgent: 'PerplexityBot', ...allowAll },
      { userAgent: 'Applebot-Extended', ...allowAll },
    ],
    sitemap: 'https://glblnex.com/sitemap.xml',
    host: 'https://glblnex.com',
  }
}
