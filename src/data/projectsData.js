export const projectsData = [
  {
    id: "brain-connects",
    title: "BRAIN CONNECTS: Multimodal Brain Mapping",
    date: "2023 - Present",
    category: "Neuroscience",
    image: "src/assets/project_brain.png",
    description: "Developing automated, scalable computational pipelines for the BRAIN CONNECTS initiative to detect mammalian neuronal connectivity across PB-scale whole-brain imaging datasets.",
    technologies: ["Python", "PyTorch", "AWS", "Fiji", "MATLAB"],
    link: "https://brainconnects.org",
    github: "https://github.com/samik1986"
  },
  {
    id: "human-brain-atlas",
    title: "3D Histological Cell Atlas",
    date: "2020 - 2023",
    category: "Neuroanatomy",
    image: "src/assets/project_atlas.png",
    description: "Led the computational development of the first cell census atlas of the mammalian primary motor cortex. Utilized deep learning for precise cell counting and registration, bridging single-cell data with neuro-radiology.",
    technologies: ["C++", "Python", "ITK", "SimpleITK"],
    link: "https://cshl.edu",
    github: "https://github.com/samik1986/brain_atlas"
  },
  {
    id: "semseg-framework",
    title: "SemSeg: Semantic Segmentation Framework",
    date: "2018 - 2020",
    category: "Deep Learning",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    description: "Formulated 'SemSeg,' a deep learning semantic segmentation framework achieving state-of-the-art accuracy in identifying neuroanatomical structures in high-resolution microscopic data.",
    technologies: ["PyTorch", "TensorFlow", "Keras"],
    link: "#",
    github: "https://github.com/samik1986"
  },
  {
    id: "interactive-visualization",
    title: "Interactive Web Visualization Platform",
    date: "2020 - Present",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description: "Developed an interactive web-based visualization platform used by international collaborators to visualize mammalian data (mouse, marmoset, human) at sub-micron resolution on AWS.",
    technologies: ["Angular", "Node.js", "TypeScript", "AWS EC2"],
    link: "#",
    github: "https://github.com/samik1986"
  },
  {
    id: "marmoset-enhancers",
    title: "Multi-omics Marmoset Enhancers",
    date: "2022 - Present",
    category: "Genomics & Vision",
    image: "src/assets/project_marmoset.png",
    description: "Spearheaded integration of transcriptomic (RNA-seq) and genetic barcode data to map cell-type specific connections. Built automated deep learning pipelines to segment enhancer expressions.",
    technologies: ["PyTorch", "OpenCV", "CUDA", "Neuroglancer"],
    link: "#",
    github: "https://github.com/samik1986"
  },
  {
    id: "lr-sd-gan",
    title: "LR-GAN & SD-GAN for Image Restoration",
    date: "2016 - 2019",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    description: "Designed LR-GAN to hallucinate high-resolution faces and SD-GAN to recover facial parts from occluded images using structural constraint losses on surveillance-grade inputs.",
    technologies: ["Python", "TensorFlow", "Generative Adversarial Networks"],
    link: "#",
    github: "https://github.com/samik1986"
  },
  {
    id: "posix-gan",
    title: "PosIX-GAN: Pose-Invariant Generation",
    date: "2016 - 2018",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1544256718-3baf237f39d0?auto=format&fit=crop&w=800&q=80",
    description: "Developed PosIX-GAN to generate multi-view face images from single monocular inputs, robustly handling extreme pose variations for identity verification.",
    technologies: ["PyTorch", "GANs", "Computer Vision"],
    link: "#",
    github: "https://github.com/samik1986"
  },
  {
    id: "transfer-cnn",
    title: "Transfer-CNN: Domain Adaptation",
    date: "2017 - 2019",
    category: "Deep Learning",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80",
    description: "Pioneered an unsupervised Domain Adaptation technique using Mutual Variation of Information to align surveillance face data with gallery images, boosting recognition rates by 15%.",
    technologies: ["CNNs", "Scikit-Learn", "Python", "MATLAB"],
    link: "#",
    github: "https://github.com/samik1986"
  },
  {
    id: "makeup-mirror",
    title: "MakeUpMirror: Siamese CNN Architecture",
    date: "2015 - 2017",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    description: "Engineered MakeUpMirror, a specialized Siamese CNN architecture designed to verify faces across heavy cosmetic changes by learning makeup-invariant features.",
    technologies: ["C++", "OpenCV", "Deep Learning"],
    link: "#",
    github: "https://github.com/samik1986"
  },
  {
    id: "drdo-satellite",
    title: "DRDO Target Localization",
    date: "2012 - 2015",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    description: "Deployed robust object detection and tracking algorithms for identifying moving targets in satellite imagery and real-time video feeds for the Indian Defense Research and Development Organization.",
    technologies: ["MATLAB", "Image Processing", "Object Tracking"],
    link: "#",
    github: "https://github.com/samik1986"
  }
];

export const featuredProjects = [
  {
    id: "brain-connects",
    name: "BRAIN CONNECTS (BICAN)",
    description: "Development of a pipeline to detect neuronal connectivity in human and non-human primates across different scales.",
    details: "This NIH-funded project focuses on mapping neuronal connectivity globally across mammalian brains.",
    language: "Python / C++",
    image: "src/assets/project_brain.png",
    link: "https://brainseer.org/"
  },
  {
    id: "human-brain-atlas",
    name: "3D Multimodal Micron-Scale Human Brain",
    description: "A 3D multimodal histological cell atlas bridging single cell data, neuropathology and neuroradiology.",
    details: "Working towards a 3D atlas of the human brain that integrates various modalities.",
    language: "MATLAB / Python",
    image: "src/assets/project_atlas.png",
    link: "#"
  },
  {
    id: "marmoset-enhancers",
    name: "Marmoset Enhancers Mapping",
    description: "Developing cell type-specific enhancers and connectivity mapping pipelines for marmoset brains.",
    details: "This project maps genetic barcodes to track enhancers in marmoset brains.",
    language: "Python / TS",
    image: "src/assets/project_marmoset.png",
    link: "https://marmosetconnects.org/"
  }
];

export const githubProjects = [
  {
    id: 1,
    name: "ML_Semantic_Segmenation_NMI",
    description: "Semantic segmentation implementation for NMI images.",
    language: "Jupyter Notebook",
    stars: 20,
    forks: 5,
    githubUrl: "https://github.com/samik1986/ML_Semantic_Segmenation_NMI"
  },
  {
    id: 2,
    name: "2D-Skeletonization",
    description: "Skeletonization and Summarization of Tracer Injected Data.",
    language: "C++",
    stars: 1,
    forks: 1,
    githubUrl: "https://github.com/MitraLab-Organization/2D-Skeletonization"
  }
];
