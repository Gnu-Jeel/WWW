interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Personal Website',
    description: `A Next.js, Tailwind CSS project which is based on Next App directory with React Server Component and uses Contentlayer to manage markdown content. 
    It is my go-to place for sharing recent discoveries, experiences & tech tips, as well as sharing cool freebies.`,
    imgSrc: '/static/images/Personal Website.jpg',
    href: 'https://github.com/Gnu-Jeel/www',
  },

  {
    title: 'Feed You - Android RSS Reader App',
    description: `Feed You is a modern, feature-rich RSS reader app for Android built using Kotlin.
    It allows users to efficiently consume news and articles from their favorite websites in one centralized, ad-free interface.`,
    imgSrc: '/static/images/FeedYou.jpg',
    href: 'https://github.com/itsjeeldesai/feedyou',
  },

  {
    title: 'Walking Detection: Sensor-Based Motion Analysis for AR/VR',
    description: `Walking Detection is an innovative Android application that utilizes device sensors ( Accelerometer & Gyroscope ) to accurately detect and analyze walking motions.
    This project serves as a foundation for integrating real-world movement into AR/VR experiences, enhancing immersion and interactivity.`,
    imgSrc: '/static/images/Walking Detector.jpg',
    href: 'https://github.com/itsjeeldesai/Walking-Detector',
  },

  {
    title: 'Network Connectivity Monitor: Real-time Internet Quality Analysis for Android',
    description: `Network Connectivity Monitor is an Android application designed to provide real-time analysis of network connectivity and speed.
    This project serves as a crucial component for video streaming apps, ensuring optimal user experience by proactively managing network-related issues.`,
    imgSrc: '/static/images/Network Connectivity Monitor.jpg',
    href: 'https://github.com/itsjeeldesai/Network-Connectivity-Monitor',
  },

]

export default projectsData
