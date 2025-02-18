module.exports = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w500/**'
      },
      {
        protocol: "https",
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/original/**'
      }
    ]
  }
}
