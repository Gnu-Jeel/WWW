export default function useHeaderNavLinks() { // Removed translate parameter
  const headerNavLinks = [
    { href: '/', title: 'Home' }, // Replace with actual title or use a translation solution if needed
    { href: '/blog', title: 'Blog' },
    { href: '/album', title: 'Album' },
    // { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' },
  ]

  return headerNavLinks
}