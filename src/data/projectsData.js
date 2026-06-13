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
    description: "[Extracted 20 functions/classes across 2 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/3d-centroid-proofreader",
    updatedAt: "2026-05-26T19:06:05Z",
    languages: [
      {
        name: "Python",
        percentage: 96
        repo_insight: "The 3d-centroid-proofreader project is a specialized Python-based tool designed for the interactive visualization and corrective editing (proofreading) of 3D neuronal or similar tree-like structures, commonly represented in the SWC (Standard Wavefront Coordinate) file format. Its holistic capability lies in providing neuroscientists and researchers with an intuitive platform to refine and validate automatically or manually traced morphological reconstructions, leveraging the powerful 3D rendering and extensibility of the napari scientific image viewer. The repository is intended to be used by launching the provided 'run_proofreader.sh' script or executing 'launcher.py', which will open a napari instance with the 'ProofreaderDockWidget' activated. Users then load SWC files, visualize the 3D structures, and utilize the dock widget's tools to perform critical proofreading tasks such as correcting misconnections, removing spurious branches, adding missing segments, or adjusting node positions, with the ability to save the modified structures back into the SWC format. Architecturally, the project is structured as a napari plugin, with 'napari_proofreader.py' serving as the core component that defines the 'ProofreaderDockWidget' and orchestrates the user interface with the underlying data. Key algorithmic highlights include robust 'read_swc' and 'save_swc' functions for managing the domain-specific data format, a 'LoadingWorker' to handle potentially large datasets asynchronously, ensuring UI responsiveness, and implicitly, a suite of interactive 3D editing algorithms for manipulating the centroid-based tree structures directly within the napari environment.",
},
      {
        name: "Shell",
        percentage: 2.9
      },
      {
        name: "Batchfile",
        percentage: 1.1
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 20 extracted functions across 2 files. Key extracted functionality includes: install_and_import, read_swc, save_swc, LoadingWorker, ProofreaderDockWidget, and more."
  },
  {
    id: 2,
    name: "3D_Developing_brain",
    description: "Code for Comparison of Cell Detection in 3D Histological Developing Brain",
    language: "Jupyter Notebook",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/3D_Developing_brain",
    updatedAt: "2025-09-09T16:26:16Z",
    languages: [
      {
        name: "Jupyter Notebook",
        percentage: 100
        repo_insight: "The '3D_Developing_brain' repository offers a comprehensive computational framework for comparing different cell detection methodologies within complex 3D histological images of developing brain tissue, serving a vital role in the domain of bioimage informatics and developmental neuroscience. Its holistic capability is to benchmark and assess the efficacy of various algorithms for accurately identifying and localizing cells in volumetric microscopy data, which is fundamental for understanding neurogenesis, cell migration patterns, and disease progression in brain development. The intended usage involves users first engaging with the two provided Jupyter notebooks, MEDIAR_(model1).ipynb and MultiStreamCellSeg_(model_2).ipynb, which serve as executable pipelines to apply and generate cell detection results using two distinct computational models on their 3D image datasets. Following the generation of these detections, the eval1.m MATLAB script is designed to load the model outputs alongside ground truth data to perform a rigorous, quantitative evaluation and comparison of the models' performance, likely calculating metrics such as precision, recall, and F1-score. Architecturally, the project highlights the implementation of two sophisticated cell detection algorithms—one named MEDIAR and the other, MultiStreamCellSeg, which strongly suggests a multi-stream neural network designed for robust segmentation—with their development and application orchestrated within the interactive and iterative Python-based Jupyter environment. The separation of model execution in Python notebooks and the dedicated evaluation in a MATLAB script underscores a common research practice where advanced deep learning methods are built in Python while robust, often standardized, quantitative analysis and reporting are performed using MATLAB's scientific computing capabilities.",
},
      {
        name: "MATLAB",
        percentage: 0
      }
    ],
    hasApiData: false
  },
  {
    id: 3,
    name: "3_MET_TCNN",
    description: "For Paper in NeuroComputing 2018",
    language: "Python",
    stars: 2,
    forks: 0,
    githubUrl: "https://github.com/samik1986/3_MET_TCNN",
    updatedAt: "2025-09-09T16:26:36Z",
    languages: [
      {
        name: "Python",
        percentage: 100
      }
    ],
    hasApiData: false
  },
  {
    id: 4,
    name: "Cropping_NZ",
    description: "[Extracted 27 functions/classes across 18 files for research plug-and-play].",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/Cropping_NZ",
    updatedAt: "2025-09-09T16:26:21Z",
    languages: [
      {
        name: "MATLAB",
        percentage: 88.5
      },
      {
        name: "HTML",
        percentage: 11.5
      }
    ],
    hasApiData: true,
    gist: "This MATLAB codebase contains 27 extracted functions across 18 files. Key extracted functionality includes: crop_1, crop_2, crop_3, crop_4, crop_Brains, and more."
  },
  {
    id: 5,
    name: "cw_graph_tools",
    description: "[Extracted 13 functions/classes across 11 files for research plug-and-play].",
    language: "MATLAB",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/cw_graph_tools",
    updatedAt: "2026-04-15T13:47:38Z",
    languages: [
      {
        name: "MATLAB",
        percentage: 100
      }
    ],
    hasApiData: true,
    gist: "This MATLAB codebase contains 13 extracted functions across 11 files. Key extracted functionality includes: add_tree, create_forest_from_json, delete_tree, edit_cw_json, edit_graph, and more."
  },
  {
    id: 6,
    name: "DKCell",
    description: "[Extracted 296 functions/classes across 72 files for research plug-and-play].",
    language: "Python",
    stars: 1,
    forks: 1,
    githubUrl: "https://github.com/samik1986/DKCell",
    updatedAt: "2025-09-09T16:26:45Z",
    languages: [
      {
        name: "Python",
        percentage: 54
      },
      {
        name: "MATLAB",
        percentage: 45.6
      },
      {
        name: "Shell",
        percentage: 0.4
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 296 extracted functions across 72 files. Key extracted functionality includes: Config, Config, augment, union, intersection, and more."
  },
  {
    id: 7,
    name: "DM_2D",
    description: "[Extracted 185 functions/classes across 55 files for research plug-and-play].",
    language: "C++",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_2D",
    updatedAt: "2025-09-09T16:26:43Z",
    languages: [
      {
        name: "C++",
        percentage: 51.6
      },
      {
        name: "CMake",
        percentage: 14.6
      },
      {
        name: "Makefile",
        percentage: 14.5
      },
      {
        name: "Python",
        percentage: 7.5
      },
      {
        name: "MATLAB",
        percentage: 7.2
      },
      {
        name: "C",
        percentage: 4.6
      }
    ],
    hasApiData: true,
    gist: "This C++ codebase contains 185 extracted functions across 55 files. Key extracted functionality includes: load_persistence_diagram, test_2d_func, save_image_data, get_date, __remove_dups, and more."
  },
  {
    id: 8,
    name: "DM_3D",
    description: "[Extracted 282 functions/classes across 48 files for research plug-and-play].",
    language: "C++",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_3D",
    updatedAt: "2025-09-09T16:26:43Z",
    languages: [
      {
        name: "C++",
        percentage: 91.5
      },
      {
        name: "Python",
        percentage: 5.4
      },
      {
        name: "MATLAB",
        percentage: 2.5
      },
      {
        name: "CMake",
        percentage: 0.6
      }
    ],
    hasApiData: true,
    gist: "This C++ codebase contains 282 extracted functions across 48 files. Key extracted functionality includes: load_persistence_diagram, test_3d_func, parallel_dipha_input, save_3d_image_data, split_domain, and more."
  },
  {
    id: 9,
    name: "DM_Lucas",
    description: "[Extracted 364 functions/classes across 129 files for research plug-and-play].",
    language: "C++",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_Lucas",
    updatedAt: "2022-07-19T18:20:59Z",
    languages: [
      {
        name: "C++",
        percentage: 58.6
      },
      {
        name: "Makefile",
        percentage: 12
      },
      {
        name: "CMake",
        percentage: 11.1
      },
      {
        name: "Python",
        percentage: 7.4
      },
      {
        name: "MATLAB",
        percentage: 6.5
      },
      {
        name: "C",
        percentage: 4.4
      }
    ],
    hasApiData: true,
    gist: "This C++ codebase contains 364 extracted functions across 129 files. Key extracted functionality includes: parallel_dipha_input, function, function, function, func, and more."
  },
  {
    id: 10,
    name: "DM_MG",
    description: "Morse GAN [Extracted 14 functions/classes across 1 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_MG",
    updatedAt: "2019-05-16T17:26:07Z",
    languages: [
      {
        name: "Python",
        percentage: 72
      },
      {
        name: "MATLAB",
        percentage: 28
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 14 extracted functions across 1 files. Key extracted functionality includes: structural_loss, imageLoader, imageLoaderReturn, readImagesEdge, readImages, and more."
  },
  {
    id: 11,
    name: "DM_net",
    description: "[Extracted 10111 functions/classes across 465 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/DM_net",
    updatedAt: "2019-08-02T18:33:52Z",
    languages: [
      {
        name: "Python",
        percentage: 99.5
      },
      {
        name: "Shell",
        percentage: 0.3
      },
      {
        name: "MATLAB",
        percentage: 0.2
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 10111 extracted functions across 465 files. Key extracted functionality includes: readImagesTwice, readImagesTwice, clipped_zoom, imageLoader, readImagesTwice, and more."
  },
  {
    id: 12,
    name: "GFP-Cell-Detection",
    description: "[Extracted 47 functions/classes across 29 files for research plug-and-play].",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/GFP-Cell-Detection",
    updatedAt: "2025-09-09T16:26:26Z",
    languages: [
      {
        name: "MATLAB",
        percentage: 64.4
      },
      {
        name: "C",
        percentage: 35.3
      },
      {
        name: "Shell",
        percentage: 0.3
      }
    ],
    hasApiData: true,
    gist: "This MATLAB codebase contains 47 extracted functions across 29 files. Key extracted functionality includes: cell_filling, circfit, cluster, edge_layers, Euclidean_Signature, and more."
  },
  {
    id: 13,
    name: "Github_test",
    description: "",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/Github_test",
    updatedAt: "2025-10-23T19:09:37Z",
    languages: [
      {
        name: "Python",
        percentage: 100
      }
    ],
    hasApiData: false
  },
  {
    id: 14,
    name: "github_test2",
    description: "Just for Test",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/github_test2",
    updatedAt: "2025-10-23T19:04:31Z",
    languages: [
      {
        name: "Python",
        percentage: 100
      }
    ],
    hasApiData: false
  },
  {
    id: 15,
    name: "HF_learn",
    description: "",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/HF_learn",
    updatedAt: "2025-09-26T20:19:02Z",
    languages: [
      {
        name: "Jupyter Notebook",
        percentage: 100
      }
    ],
    hasApiData: false
  },
  {
    id: 16,
    name: "HG2PD",
    description: "[Extracted 5043 functions/classes across 227 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/HG2PD",
    updatedAt: "2019-04-25T18:18:35Z",
    languages: [
      {
        name: "Python",
        percentage: 99.4
      },
      {
        name: "Shell",
        percentage: 0.6
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 5043 extracted functions across 227 files. Key extracted functionality includes: Command, RequirementCommand, _build_session, parse_args, populate_requirement_set, and more."
  },
  {
    id: 17,
    name: "injDet",
    description: "[Extracted 7660 functions/classes across 333 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/injDet",
    updatedAt: "2019-04-08T19:56:32Z",
    languages: [
      {
        name: "Python",
        percentage: 99.8
      },
      {
        name: "Shell",
        percentage: 0.2
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 7660 extracted functions across 333 files. Key extracted functionality includes: makepath, abs__file__, removeduppaths, addbuilddir, _init_pathinfo, and more."
  },
  {
    id: 18,
    name: "keras-survGAN",
    description: "Surveillance Face generartion",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/keras-survGAN",
    updatedAt: "2017-09-09T13:10:40Z",
    languages: [],
    hasApiData: false
  },
  {
    id: 19,
    name: "makemore_Samik",
    description: "[Extracted 63 functions/classes across 2 files for research plug-and-play].",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/makemore_Samik",
    updatedAt: "2025-09-24T21:24:24Z",
    languages: [
      {
        name: "Jupyter Notebook",
        percentage: 98.5
      },
      {
        name: "Python",
        percentage: 1.5
      }
    ],
    hasApiData: true,
    gist: "This Jupyter Notebook codebase contains 63 extracted functions across 2 files. Key extracted functionality includes: get_batch, estimate_loss, BigramLanguageModel, forward, generate, and more."
  },
  {
    id: 20,
    name: "MakeUPMirror",
    description: "[Extracted 4 functions/classes across 1 files for research plug-and-play].",
    language: "Python",
    stars: 2,
    forks: 0,
    githubUrl: "https://github.com/samik1986/MakeUPMirror",
    updatedAt: "2025-09-09T16:27:27Z",
    languages: [
      {
        name: "Python",
        percentage: 94.4
      },
      {
        name: "MATLAB",
        percentage: 5.6
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 4 extracted functions across 1 files. Key extracted functionality includes: LRN, call, get_config."
  },
  {
    id: 21,
    name: "Mediar_4_devBrain",
    description: "[Extracted 132 functions/classes across 23 files for research plug-and-play].",
    language: "Python",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/Mediar_4_devBrain",
    updatedAt: "2025-09-09T16:26:18Z",
    languages: [
      {
        name: "Python",
        percentage: 100
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 132 extracted functions across 23 files. Key extracted functionality includes: public_paths_labeled, official_paths_labeled, official_paths_tuning, add_mapping_to_json, natural_sort_key, and more."
  },
  {
    id: 22,
    name: "ML_Semantic-Segmenation-2020",
    description: "[Extracted 21 functions/classes across 9 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/ML_Semantic-Segmenation-2020",
    updatedAt: "2020-03-26T17:34:44Z",
    languages: [
      {
        name: "Python",
        percentage: 100
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 21 extracted functions across 9 files. Key extracted functionality includes: readImagesTwice, readImagesTwice, readImagesTwice, readImagesTwice, soft_dice_loss, and more."
  },
  {
    id: 23,
    name: "ML_Semantic_Segmenation_NMI",
    description: "[Extracted 1296 functions/classes across 123 files for research plug-and-play].",
    language: "Jupyter Notebook",
    stars: 20,
    forks: 5,
    githubUrl: "https://github.com/samik1986/ML_Semantic_Segmenation_NMI",
    updatedAt: "2025-09-09T16:26:21Z",
    languages: [
      {
        name: "Jupyter Notebook",
        percentage: 56.6
      },
      {
        name: "Python",
        percentage: 41.4
      },
      {
        name: "C++",
        percentage: 2
      },
      {
        name: "Shell",
        percentage: 0
      }
    ],
    hasApiData: true,
    gist: "This Jupyter Notebook codebase contains 1296 extracted functions across 123 files. Key extracted functionality includes: bfs, retrieve_path, cal_connectivity, cal_fp_tp, cal_fp_tp, and more."
  },
  {
    id: 24,
    name: "MoP_boundary",
    description: "[Extracted 5 functions/classes across 5 files for research plug-and-play].",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/MoP_boundary",
    updatedAt: "2025-09-09T16:27:49Z",
    languages: [
      {
        name: "MATLAB",
        percentage: 100
      }
    ],
    hasApiData: true,
    gist: "This MATLAB codebase contains 5 extracted functions across 5 files. Key extracted functionality includes: borderDet, calculate_cortical_normal, d_runline, get_medial_axis, runline1."
  },
  {
    id: 25,
    name: "MorseGAN_git",
    description: "Morse",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/MorseGAN_git",
    updatedAt: "2019-05-16T16:32:53Z",
    languages: [],
    hasApiData: false
  },
  {
    id: 26,
    name: "mouse-marmoset-comparison-app",
    description: "",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/mouse-marmoset-comparison-app",
    updatedAt: "2025-11-19T19:16:43Z",
    languages: [
      {
        name: "TypeScript",
        percentage: 88.1
      },
      {
        name: "HTML",
        percentage: 6.8
      },
      {
        name: "CSS",
        percentage: 5.1
      }
    ],
    hasApiData: false
  },
  {
    id: 27,
    name: "MultiStreamCellSeg_4_devBrain",
    description: "[Extracted 668 functions/classes across 42 files for research plug-and-play].",
    language: "Python",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/MultiStreamCellSeg_4_devBrain",
    updatedAt: "2025-09-09T16:26:17Z",
    languages: [
      {
        name: "Python",
        percentage: 58.2
      },
      {
        name: "Jupyter Notebook",
        percentage: 41.2
      },
      {
        name: "C",
        percentage: 0.6
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 668 extracted functions across 42 files. Key extracted functionality includes: conv3x3, conv1x1, BasicBlock, Bottleneck, ResNet, and more."
  },
  {
    id: 28,
    name: "myBio",
    description: "[Extracted 11 functions/classes across 9 files for research plug-and-play].",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/myBio",
    updatedAt: "2026-06-13T16:39:26Z",
    languages: [
      {
        name: "JavaScript",
        percentage: 54.9
      },
      {
        name: "Python",
        percentage: 27.9
      },
      {
        name: "CSS",
        percentage: 17
      },
      {
        name: "HTML",
        percentage: 0.1
      }
    ],
    hasApiData: true,
    gist: "This JavaScript codebase contains 11 extracted functions across 9 files. Key extracted functionality includes: get_cat, get_cat, get_largest_image, find_pdf, find_fig_bbox, and more."
  },
  {
    id: 29,
    name: "Myelin-Conversion",
    description: "[Extracted 1 functions/classes across 1 files for research plug-and-play].",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/Myelin-Conversion",
    updatedAt: "2025-09-09T16:26:20Z",
    languages: [
      {
        name: "MATLAB",
        percentage: 100
      }
    ],
    hasApiData: true,
    gist: "This MATLAB codebase contains 1 extracted functions across 1 files. Key extracted functionality includes: trfm2processDet."
  },
  {
    id: 30,
    name: "neetcode-gpt",
    description: "GPT built from scratch — assembled from my NeetCode ML course submissions [Extracted 50 functions/classes across 19 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/neetcode-gpt",
    updatedAt: "2026-04-27T10:41:44Z",
    languages: [
      {
        name: "Python",
        percentage: 100
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 50 extracted functions across 19 files. Key extracted functionality includes: Solution, get_dataset, Solution, sigmoid, relu, and more."
  },
  {
    id: 31,
    name: "neetcode-submissions-samik1986",
    description: "My NeetCode.io problem submissions [Extracted 131 functions/classes across 60 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/neetcode-submissions-samik1986",
    updatedAt: "2026-05-29T14:07:24Z",
    languages: [
      {
        name: "Python",
        percentage: 83
      },
      {
        name: "C++",
        percentage: 17
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 131 extracted functions across 60 files. Key extracted functionality includes: Solution, addTwoNumbers, Solution, groupAnagrams, Solution, and more."
  },
  {
    id: 32,
    name: "newTCNN",
    description: "",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/newTCNN",
    updatedAt: "2017-06-20T11:17:56Z",
    languages: [],
    hasApiData: false
  },
  {
    id: 33,
    name: "newWiNN",
    description: "",
    language: "",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/newWiNN",
    updatedAt: "2025-09-09T16:26:34Z",
    languages: [],
    hasApiData: false
  },
  {
    id: 34,
    name: "samik1986",
    description: "Config files for my GitHub profile.",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/samik1986",
    updatedAt: "2022-12-07T20:36:54Z",
    languages: [],
    hasApiData: false
  },
  {
    id: 35,
    name: "siamDA",
    description: "[Extracted 10 functions/classes across 2 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/siamDA",
    updatedAt: "2017-06-20T11:22:52Z",
    languages: [
      {
        name: "Python",
        percentage: 100
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 10 extracted functions across 2 files. Key extracted functionality includes: MyLayer, build, call, compute_output_shape, euclidean_distance, and more."
  },
  {
    id: 36,
    name: "tf_lddmm",
    description: "[Extracted 2 functions/classes across 1 files for research plug-and-play].",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/tf_lddmm",
    updatedAt: "2019-05-06T15:58:42Z",
    languages: [
      {
        name: "Python",
        percentage: 100
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 2 extracted functions across 1 files. Key extracted functionality includes: read_from_pickle."
  },
  {
    id: 37,
    name: "tranferNET",
    description: "DA_SIAM",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/tranferNET",
    updatedAt: "2017-06-02T06:16:44Z",
    languages: [],
    hasApiData: false
  },
  {
    id: 38,
    name: "transferNET",
    description: "",
    language: "",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/transferNET",
    updatedAt: "2017-06-20T10:57:40Z",
    languages: [],
    hasApiData: false
  },
  {
    id: 39,
    name: "um1_3d_volume",
    description: "[Extracted 266 functions/classes across 111 files for research plug-and-play].",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/samik1986/um1_3d_volume",
    updatedAt: "2026-06-10T19:09:36Z",
    languages: [
      {
        name: "JavaScript",
        percentage: 83.9
      },
      {
        name: "Python",
        percentage: 7
      },
      {
        name: "MATLAB",
        percentage: 4.6
      },
      {
        name: "CSS",
        percentage: 2.4
      },
      {
        name: "C",
        percentage: 0.8
      },
      {
        name: "C++",
        percentage: 0.7
      },
      {
        name: "TypeScript",
        percentage: 0.2
      },
      {
        name: "Shell",
        percentage: 0.2
      },
      {
        name: "Batchfile",
        percentage: 0.1
      },
      {
        name: "Dockerfile",
        percentage: 0.1
      },
      {
        name: "CMake",
        percentage: 0
      },
      {
        name: "M",
        percentage: 0
      }
    ],
    hasApiData: true,
    gist: "This JavaScript codebase contains 266 extracted functions across 111 files. Key extracted functionality includes: create_line_volume, create_point_volume, create_reconstructed_line_volume, detect_3d_cells_blob, load_tiff_volume, and more."
  },
  {
    id: 40,
    name: "wiNN",
    description: "Initial Commit [Extracted 7568 functions/classes across 332 files for research plug-and-play].",
    language: "Python",
    stars: 1,
    forks: 0,
    githubUrl: "https://github.com/samik1986/wiNN",
    updatedAt: "2025-09-09T16:26:33Z",
    languages: [
      {
        name: "Python",
        percentage: 99.7
      },
      {
        name: "Shell",
        percentage: 0.3
      }
    ],
    hasApiData: true,
    gist: "This Python codebase contains 7568 extracted functions across 332 files. Key extracted functionality includes: wt, y_hat, makepath, abs__file__, removeduppaths, and more."
  },
  {
    id: 41,
    name: "yolo_model (twardlab)",
    description: "Object segmentation + quantification from microscopy images (twardlab)",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/twardlab/yolo_model",
    updatedAt: "2026-05-22T23:08:18Z",
    languages: [],
    hasApiData: false
  },
  {
    id: 42,
    name: "atlas_free_slice_alignment (twardlab)",
    description: "Atlas free slice alignment (twardlab)",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/twardlab/atlas_free_slice_alignment",
    updatedAt: "2026-01-28T21:56:46Z",
    languages: [
      {
        name: "Jupyter Notebook",
        percentage: 62.6
      },
      {
        name: "Python",
        percentage: 37.4
      }
    ],
    hasApiData: false
  },
  {
    id: 43,
    name: "spine_registration (twardlab)",
    description: "Registration for spine data from dong lab (twardlab)",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/twardlab/spine_registration",
    updatedAt: "2026-01-20T19:19:44Z",
    languages: [
      {
        name: "Jupyter Notebook",
        percentage: 62.1
      },
      {
        name: "Python",
        percentage: 37.9
      }
    ],
    hasApiData: false
  },
  {
    id: 44,
    name: "emlddmm (twardlab)",
    description: "Expectation maximization algorithm for deformable registration (twardlab)",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/twardlab/emlddmm",
    updatedAt: "2025-12-07T18:52:19Z",
    languages: [
      {
        name: "Jupyter Notebook",
        percentage: 99.2
      },
      {
        name: "Python",
        percentage: 0.7
      },
      {
        name: "HTML",
        percentage: 0
      },
      {
        name: "MATLAB",
        percentage: 0
      }
    ],
    hasApiData: false
  },
  {
    id: 45,
    name: "Marmoset-Brain-Atlas (MitraLab)",
    description: "Marmoset Brain Atlas project (MitraLab)",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/MitraLab-Organization/Marmoset-Brain-Atlas",
    updatedAt: "2026-05-12T14:19:53Z",
    languages: [
      {
        name: "Makefile",
        percentage: 79.5
      },
      {
        name: "Shell",
        percentage: 17.3
      },
      {
        name: "Ruby",
        percentage: 2.8
      },
      {
        name: "Batchfile",
        percentage: 0.4
      }
    ],
    hasApiData: false
  },
  {
    id: 46,
    name: "ontology-editor (MitraLab)",
    description: "Ontology editor tool (MitraLab)",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/MitraLab-Organization/ontology-editor",
    updatedAt: "2026-04-13T18:01:58Z",
    languages: [
      {
        name: "Python",
        percentage: 100
      }
    ],
    hasApiData: false
  },
  {
    id: 47,
    name: "mouse-muscle-atlas (MitraLab)",
    description: "Mouse muscle atlas project (MitraLab)",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/MitraLab-Organization/mouse-muscle-atlas",
    updatedAt: "2026-04-30T22:02:11Z",
    languages: [
      {
        name: "Makefile",
        percentage: 70.3
      },
      {
        name: "Shell",
        percentage: 15.3
      },
      {
        name: "Python",
        percentage: 11.6
      },
      {
        name: "Ruby",
        percentage: 2.5
      },
      {
        name: "Batchfile",
        percentage: 0.3
      }
    ],
    hasApiData: false
  },
  {
    id: 48,
    name: "2D-Skeletonization (MitraLab)",
    description: "Skeletonization and Summarization of Tracer Injected Data (MitraLab)",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/MitraLab-Organization/2D-Skeletonization",
    updatedAt: "2026-03-10T16:28:42Z",
    languages: [
      {
        name: "C++",
        percentage: 88.9
      },
      {
        name: "C",
        percentage: 7.1
      },
      {
        name: "Python",
        percentage: 1.2
      },
      {
        name: "Jupyter Notebook",
        percentage: 1.2
      },
      {
        name: "Shell",
        percentage: 0.4
      },
      {
        name: "Gnuplot",
        percentage: 0.4
      },
      {
        name: "HTML",
        percentage: 0.2
      },
      {
        name: "Perl",
        percentage: 0.2
      },
      {
        name: "Makefile",
        percentage: 0.1
      },
      {
        name: "CMake",
        percentage: 0.1
      },
      {
        name: "Terra",
        percentage: 0.1
      },
      {
        name: "QMake",
        percentage: 0.1
      },
      {
        name: "GLSL",
        percentage: 0
      },
      {
        name: "M4",
        percentage: 0
      },
      {
        name: "Awk",
        percentage: 0
      },
      {
        name: "OpenEdge ABL",
        percentage: 0
      },
      {
        name: "Raku",
        percentage: 0
      },
      {
        name: "SWIG",
        percentage: 0
      },
      {
        name: "Dockerfile",
        percentage: 0
      },
      {
        name: "Batchfile",
        percentage: 0
      },
      {
        name: "RAML",
        percentage: 0
      },
      {
        name: "MATLAB",
        percentage: 0
      },
      {
        name: "ImageJ Macro",
        percentage: 0
      },
      {
        name: "CSS",
        percentage: 0
      },
      {
        name: "QuakeC",
        percentage: 0
      }
    ],
    hasApiData: false
  },
  {
    id: 49,
    name: "Human_Tissue_Dev (MitraLab)",
    description: "Development projects related to wet lab processing of human tissue (MitraLab)",
    language: "Python",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/MitraLab-Organization/Human_Tissue_Dev",
    updatedAt: "2025-12-25T02:20:46Z",
    languages: [
      {
        name: "C++",
        percentage: 61.8
      },
      {
        name: "Python",
        percentage: 28.4
      },
      {
        name: "HTML",
        percentage: 9.8
      },
      {
        name: "Batchfile",
        percentage: 0
      }
    ],
    hasApiData: false
  },
  {
    id: 50,
    name: "Skeleton_Dockerized (MitraLab)",
    description: "Dockerized skeletonization tools (MitraLab)",
    language: "Dockerfile",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/MitraLab-Organization/Skeleton_Dockerized",
    updatedAt: "2025-11-06T17:41:23Z",
    languages: [],
    hasApiData: false
  },
  {
    id: 51,
    name: "NeuronBrowser (MitraLab)",
    description: "NeuronBrowser project (MitraLab)",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/MitraLab-Organization/NeuronBrowser",
    updatedAt: "2025-09-16T14:44:09Z",
    languages: [
      {
        name: "JavaScript",
        percentage: 54.7
      },
      {
        name: "TypeScript",
        percentage: 36.3
      },
      {
        name: "Python",
        percentage: 6.9
      },
      {
        name: "Shell",
        percentage: 1.4
      },
      {
        name: "CSS",
        percentage: 0.3
      },
      {
        name: "HTML",
        percentage: 0.2
      },
      {
        name: "Dockerfile",
        percentage: 0.2
      },
      {
        name: "Go",
        percentage: 0
      }
    ],
    hasApiData: false
  }
];