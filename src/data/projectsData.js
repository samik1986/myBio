import imgBrainConnects from '../assets/project_brain.png';
import imgAtlas from '../assets/project_atlas.png';
import imgMarmoset from '../assets/project_marmoset.png';

export const featuredProjects = [
  {
    id: "p1",
    name: "BRAIN CONNECTS (BICAN)",
    description: "Development of a pipeline to detect neuronal connectivity in human and non-human primates across different scales.",
    details: "This NIH-funded project focuses on mapping neuronal connectivity globally across mammalian brains. The pipeline involves state-of-the-art computer vision and deep learning techniques to trace micro and macro connections, aiming to build a comprehensive cell atlas network.",
    language: "Python / C++",
    image: imgBrainConnects,
    link: "https://brainseer.org/"
  },
  {
    id: "p2",
    name: "3D Multimodal Micron-Scale Human Brain",
    description: "A 3D multimodal histological cell atlas bridging single cell data, neuropathology and neuroradiology.",
    details: "Working towards a 3D atlas of the human brain that integrates various modalities. This involves aligning histological sections and performing semantic segmentation to map individual cellular structures in high resolution.",
    language: "MATLAB / Python",
    image: imgAtlas,
    link: "#"
  },
  {
    id: "p3",
    name: "Marmoset Enhancers Mapping",
    description: "Developing cell type-specific enhancers and connectivity mapping pipelines for marmoset brains.",
    details: "This project maps genetic barcodes to track enhancers in marmoset brains. The multi-omics approach is visualized through an interactive portal to better understand cellular behavior and specific regulatory elements.",
    language: "Python / TS",
    image: imgMarmoset,
    link: "https://marmosetconnects.org/"
  }
];

export const githubProjects = [
  {
    id: 1,
    name: "ML_Semantic_Segmenation_NMI",
    description: "Semantic segmentation implementation for NMI images. Features deep learning architectures and metrics evaluation.",
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
  },
  {
    id: 3,
    name: "Sensitivity-and-Specificity-Calculation",
    description: "Calculation of Sensitivity and Specificity Calculation for Enhancer based images.",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/MitraLab-Organization/Sensitivity-and-Specificity-Calculation"
  },
  {
    id: 4,
    name: "3D_Developing_brain",
    description: "Code for Comparison of Cell Detection in 3D Histological Developing Brain.",
    language: "Jupyter Notebook",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/3D_Developing_brain"
  }
];
