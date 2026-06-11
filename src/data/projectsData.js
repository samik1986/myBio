import { projectsImageDatabase } from './projectsImageDatabase';

export const projectsData = [
{
    id: "bican",
    title: "BRAIN Initiative Cell Atlas Network (BICAN)",
    date: "2023 - Present",
    category: "Neuroscience & 3D Brain Atlases",
    image: projectsImageDatabase["bican"],
    description: "Contributing to the mission to construct a complete reference atlas of the mammalian brain. Developing cutting-edge computational frameworks to integrate single-cell and spatial data at unprecedented scale.",
    technologies: ["Cloud Computing", "Deep Learning", "Python"],
    tools: ["Cloud Computing", "Deep Learning", "Python"],
    field: "Neuroanatomy & Multi-omics",
    funding: "NIH BRAIN Initiative",
    link: "https://braininitiative.nih.gov/brain-programs/cell-census-network-biccn",
    github: "https://github.com/samik1986"
  },
{
    id: "biccn",
    title: "BRAIN Initiative Cell Census Network (BICCN)",
    date: "2018 - 2023",
    category: "Neuroscience & Single-Cell",
    image: projectsImageDatabase["biccn"],
    description: "Participated in the BICCN to provide a comprehensive reference of cell types in the brain. Contributed to building the data ecosystem and computational tools for mapping the mammalian primary motor cortex.",
    technologies: ["Single-Cell RNA-seq", "Spatial Transcriptomics", "Python", "R"],
    tools: ["Single-Cell RNA-seq", "Spatial Transcriptomics", "Python", "R"],
    field: "Single-Cell Analysis",
    funding: "NIH BRAIN Initiative",
    link: "https://biccn.org/",
    github: "https://github.com/samik1986"
  },
{
    id: "3d-developing-brain",
    title: "3D Histological Atlas of the Developing Brain",
    date: "2023 - 2024",
    category: "Neuroanatomy & Development",
    image: projectsImageDatabase["3d-developing-brain"],
    description: "Developed a three-dimensional histological cell atlas of the developing human brain. Built deep learning frameworks for automated cell detection and comparison in 3D histological datasets.",
    technologies: ["Python", "Jupyter Notebook", "Deep Learning", "Computer Vision"],
    tools: ["Python", "Jupyter Notebook", "Deep Learning", "Computer Vision"],
    field: "Neurodevelopment",
    funding: "NIH",
    link: "https://scholar.google.com/scholar?q=A%20three-dimensional%20histological%20cell%20atlas%20of%20the%20developing%20human%20brain",
    github: "https://github.com/samik1986/3D_Developing_brain"
  },
{
    id: "brain-connects",
    title: "BRAIN CONNECTS: Multimodal Brain Mapping",
    date: "2023 - Present",
    category: "Neuroscience",
    image: projectsImageDatabase["brain-connects"],
    description: "Developing automated, scalable computational pipelines for the BRAIN CONNECTS initiative to detect mammalian neuronal connectivity across PB-scale whole-brain imaging datasets.",
    technologies: ["Python", "PyTorch", "AWS", "Fiji", "MATLAB"],
    tools: ["PyTorch", "AWS", "Fiji", "MATLAB"],
    field: "Computational Neuroanatomy",
    funding: "NIH BRAIN Initiative",
    link: "https://brainconnects.org",
    github: "https://github.com/samik1986"
  },
{
    id: "human-brain-atlas",
    title: "3D Histological Cell Atlas",
    date: "2020 - 2023",
    category: "Neuroanatomy",
    image: projectsImageDatabase["human-brain-atlas"],
    description: "Led the computational development of the first cell census atlas of the mammalian primary motor cortex. Utilized deep learning for precise cell counting and registration, bridging single-cell data with neuro-radiology.",
    technologies: ["C++", "Python", "ITK", "SimpleITK"],
    tools: ["ITK", "SimpleITK", "Python", "C++"],
    field: "3D Imaging & Histology",
    funding: "Internal CSHL",
    link: "https://cshl.edu",
    github: "https://github.com/samik1986/brain_atlas"
  },
{
    id: "semseg-framework",
    title: "SemSeg: Semantic Segmentation Framework",
    date: "2018 - 2020",
    category: "Deep Learning",
    image: projectsImageDatabase["semseg-framework"],
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
    image: projectsImageDatabase["interactive-visualization"],
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
    image: projectsImageDatabase["marmoset-enhancers"],
    description: "Spearheaded integration of transcriptomic (RNA-seq) and genetic barcode data to map cell-type specific connections. Built automated deep learning pipelines to segment enhancer expressions.",
    technologies: ["PyTorch", "OpenCV", "CUDA", "Neuroglancer"],
    tools: ["PyTorch", "OpenCV", "CUDA", "Neuroglancer"],
    field: "Multi-omics & Computer Vision",
    funding: "NIH BRAIN Initiative",
    link: "#",
    github: "https://github.com/samik1986"
  },
{
    id: "lr-sd-gan",
    title: "LR-GAN & SD-GAN for Image Restoration",
    date: "2016 - 2019",
    category: "Generative AI",
    image: projectsImageDatabase["lr-sd-gan"],
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
    image: projectsImageDatabase["posix-gan"],
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
    image: projectsImageDatabase["transfer-cnn"],
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
    image: projectsImageDatabase["makeup-mirror"],
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
    image: projectsImageDatabase["drdo-satellite"],
    description: "Deployed robust object detection and tracking algorithms for identifying moving targets in satellite imagery and real-time video feeds for the Indian Defense Research and Development Organization.",
    technologies: ["MATLAB", "Image Processing", "Object Tracking"],
    link: "#",
    github: "https://github.com/samik1986"
  },
{
    id: "quantum-computing",
    title: "Quantum Computing & Reversible Logic",
    date: "2011 - 2012",
    category: "Hardware Security",
    image: projectsImageDatabase["quantum-computing"],
    description: "Developed and simulated reversible logic circuits and secure scan designs to enhance hardware security and reduce power dissipation, with applications in quantum computing.",
    technologies: ["Hardware Description Languages", "Simulation Tools", "Quantum Computing"],
    link: "#",
    github: "https://github.com/samik1986"
  }

];

export const githubProjects = [
  {
    id: 1,
    name: "3d-centroid-proofreader",
    description: "",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/3d-centroid-proofreader"
  },
  {
    id: 2,
    name: "3D_Developing_brain",
    description: "Code for Comparison of Cell Detection in 3D Histological Developing Brain",
    language: "Jupyter Notebook",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/3D_Developing_brain"
  },
  {
    id: 3,
    name: "3_MET_TCNN",
    description: "For Paper in NeuroComputing 2018",
    language: "Python",
    stars: 2,
    forks: 0,
    githubUrl: "https://github.com/samik1986/3_MET_TCNN"
  },
  {
    id: 4,
    name: "Cropping_NZ",
    description: "",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/Cropping_NZ"
  },
  {
    id: 5,
    name: "cw_graph_tools",
    description: "",
    language: "MATLAB",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/cw_graph_tools"
  },
  {
    id: 6,
    name: "DKCell",
    description: "",
    language: "Python",
    stars: 1,
    forks: 1,
    githubUrl: "https://github.com/samik1986/DKCell"
  },
  {
    id: 7,
    name: "DM_2D",
    description: "",
    language: "C++",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_2D"
  },
  {
    id: 8,
    name: "DM_3D",
    description: "",
    language: "C++",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_3D"
  },
  {
    id: 9,
    name: "DM_Lucas",
    description: "",
    language: "C++",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_Lucas"
  },
  {
    id: 10,
    name: "DM_MG",
    description: "Morse GAN",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_MG"
  },
  {
    id: 11,
    name: "DM_net",
    description: "",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_net"
  },
  {
    id: 12,
    name: "GFP-Cell-Detection",
    description: "",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/GFP-Cell-Detection"
  },
  {
    id: 13,
    name: "Github_test",
    description: "",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/Github_test"
  },
  {
    id: 14,
    name: "github_test2",
    description: "Just for Test",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/github_test2"
  },
  {
    id: 15,
    name: "HF_learn",
    description: "",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/HF_learn"
  },
  {
    id: 16,
    name: "HG2PD",
    description: "",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/HG2PD"
  },
  {
    id: 17,
    name: "injDet",
    description: "",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/injDet"
  },
  {
    id: 18,
    name: "keras-survGAN",
    description: "Surveillance Face generartion",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/keras-survGAN"
  },
  {
    id: 19,
    name: "makemore_Samik",
    description: "",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/makemore_Samik"
  },
  {
    id: 20,
    name: "MakeUPMirror",
    description: "",
    language: "Python",
    stars: 2,
    forks: 0,
    githubUrl: "https://github.com/samik1986/MakeUPMirror"
  },
  {
    id: 21,
    name: "Mediar_4_devBrain",
    description: "",
    language: "Python",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/Mediar_4_devBrain"
  },
  {
    id: 22,
    name: "ML_Semantic-Segmenation-2020",
    description: "",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/ML_Semantic-Segmenation-2020"
  },
  {
    id: 23,
    name: "ML_Semantic_Segmenation_NMI",
    description: "",
    language: "Jupyter Notebook",
    stars: 20,
    forks: 5,
    githubUrl: "https://github.com/samik1986/ML_Semantic_Segmenation_NMI"
  },
  {
    id: 24,
    name: "MoP_boundary",
    description: "",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/MoP_boundary"
  },
  {
    id: 25,
    name: "MorseGAN_git",
    description: "Morse",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/MorseGAN_git"
  },
  {
    id: 26,
    name: "mouse-marmoset-comparison-app",
    description: "",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/mouse-marmoset-comparison-app"
  },
  {
    id: 27,
    name: "MultiStreamCellSeg_4_devBrain",
    description: "",
    language: "Python",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/MultiStreamCellSeg_4_devBrain"
  },
  {
    id: 28,
    name: "myBio",
    description: "",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/myBio"
  },
  {
    id: 29,
    name: "Myelin-Conversion",
    description: "",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/Myelin-Conversion"
  },
  {
    id: 30,
    name: "neetcode-gpt",
    description: "GPT built from scratch — assembled from my NeetCode ML course submissions",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/neetcode-gpt"
  },
  {
    id: 31,
    name: "neetcode-submissions-samik1986",
    description: "My NeetCode.io problem submissions",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/neetcode-submissions-samik1986"
  },
  {
    id: 32,
    name: "newTCNN",
    description: "",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/newTCNN"
  },
  {
    id: 33,
    name: "newWiNN",
    description: "",
    language: "",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/newWiNN"
  },
  {
    id: 34,
    name: "samik1986",
    description: "Config files for my GitHub profile.",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/samik1986"
  },
  {
    id: 35,
    name: "siamDA",
    description: "",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/siamDA"
  },
  {
    id: 36,
    name: "tf_lddmm",
    description: "",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/tf_lddmm"
  },
  {
    id: 37,
    name: "tranferNET",
    description: "DA_SIAM",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/tranferNET"
  },
  {
    id: 38,
    name: "transferNET",
    description: "",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/transferNET"
  },
  {
    id: 39,
    name: "um1_3d_volume",
    description: "",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/um1_3d_volume"
  },
  {
    id: 40,
    name: "wiNN",
    description: "Initial Commit",
    language: "Python",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/wiNN"
  },
];