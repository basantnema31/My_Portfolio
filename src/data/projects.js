export const projects = [
  {
    id: "face-mask-detection",
    title: "Face Mask Detection",
    tagline: "A machine learning solution for public health safety.",
    description: "A machine learning model that detects whether a person is wearing a face mask and if they are coughing.",
    fullDescription: "Built during the height of the COVID-19 pandemic, this project uses Teachable Machine to provide real-time audio-visual feedback on mask compliance and coughing detection. It is designed for low-latency web environments, making it ideal for entry-point scanning systems in schools or offices.",
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=600&auto=format&fit=crop",
    tech: ["Teachable Machine", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/omanandswami/",
    live: "https://github.com/omanandswami/",
    highlights: [
      "Real-time audio notification for non-compliance",
      "90%+ detection accuracy in standard lighting",
      "Zero-latency processing via Teachable Machine web model"
    ]
  },
  {
    id: "clean-city",
    title: "Clean City",
    tagline: "Modernizing urban waste management through digital platforms.",
    description: "A beautifully crafted productivity suite utilizing React and Node to manage daily tasks seamlessly across platforms.",
    fullDescription: "Clean City is a prototype for an urban management system that allows citizens to report and track waste issues in real-time. It features a clean dashboard for administrators and a responsive mobile interface for the public to submit geotagged reports.",
    imageDark: "/Clean City Dark.png",
    imageLight: "/Clean City Light.png",
    tech: ["React", "Node.js", "Tailwind CSS", "PostgreSQL"],
    github: "https://basantnema31.github.io/clean-city",
    live: "https://basantnema31.github.io/clean-city",
    highlights: [
      "Intuitive dashboard for urban administrators",
      "Real-time task tracking and reporting system",
      "Mobile-first responsive design for public use"
    ]
  },
  {
    id: "cloud-visualizer",
    title: "Cloud Infrastructure Visualizer",
    tagline: "Real-time mapping of AWS architecture configurations.",
    description: "Architected a custom interactive dashboard to map sprawling AWS configurations directly in the browser via native APIs.",
    fullDescription: "This advanced tool provides DevOps teams with a visual map of their cloud infrastructure, including EC2 instances, S3 buckets, and RDS databases. It uses native AWS SDKs to pull live data and render it in an interactive browser-based dashboard.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    tech: ["TypeScript", "AWS Native APIs", "Next.js", "D3.js"],
    github: "https://github.com/omanandswami/",
    live: "https://github.com/omanandswami/",
    highlights: [
      "Interactive D3.js visualization for large infrastructure",
      "Real-time configuration mapping via AWS SDK",
      "Secure credential management for safe data retrieval"
    ]
  }
];
