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
    repo_insight: "The 3d-centroid-proofreader project is a specialized Python-based tool designed for the interactive visualization and corrective editing (proofreading) of 3D neuronal or similar tree-like structures, commonly represented in the SWC (Standard Wavefront Coordinate) file format. Its holistic capability lies in providing neuroscientists and researchers with an intuitive platform to refine and validate automatically or manually traced morphological reconstructions, leveraging the powerful 3D rendering and extensibility of the napari scientific image viewer. The repository is intended to be used by launching the provided 'run_proofreader.sh' script or executing 'launcher.py', which will open a napari instance with the 'ProofreaderDockWidget' activated. Users then load SWC files, visualize the 3D structures, and utilize the dock widget's tools to perform critical proofreading tasks such as correcting misconnections, removing spurious branches, adding missing segments, or adjusting node positions, with the ability to save the modified structures back into the SWC format. Architecturally, the project is structured as a napari plugin, with 'napari_proofreader.py' serving as the core component that defines the 'ProofreaderDockWidget' and orchestrates the user interface with the underlying data. Key algorithmic highlights include robust 'read_swc' and 'save_swc' functions for managing the domain-specific data format, a 'LoadingWorker' to handle potentially large datasets asynchronously, ensuring UI responsiveness, and implicitly, a suite of interactive 3D editing algorithms for manipulating the centroid-based tree structures directly within the napari environment.",
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
    repo_insight: "The '3D_Developing_brain' repository offers a comprehensive computational framework for comparing different cell detection methodologies within complex 3D histological images of developing brain tissue, serving a vital role in the domain of bioimage informatics and developmental neuroscience. Its holistic capability is to benchmark and assess the efficacy of various algorithms for accurately identifying and localizing cells in volumetric microscopy data, which is fundamental for understanding neurogenesis, cell migration patterns, and disease progression in brain development. The intended usage involves users first engaging with the two provided Jupyter notebooks, MEDIAR_(model1).ipynb and MultiStreamCellSeg_(model_2).ipynb, which serve as executable pipelines to apply and generate cell detection results using two distinct computational models on their 3D image datasets. Following the generation of these detections, the eval1.m MATLAB script is designed to load the model outputs alongside ground truth data to perform a rigorous, quantitative evaluation and comparison of the models' performance, likely calculating metrics such as precision, recall, and F1-score. Architecturally, the project highlights the implementation of two sophisticated cell detection algorithms—one named MEDIAR and the other, MultiStreamCellSeg, which strongly suggests a multi-stream neural network designed for robust segmentation—with their development and application orchestrated within the interactive and iterative Python-based Jupyter environment. The separation of model execution in Python notebooks and the dedicated evaluation in a MATLAB script underscores a common research practice where advanced deep learning methods are built in Python while robust, often standardized, quantitative analysis and reporting are performed using MATLAB's scientific computing capabilities.",
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
    repo_insight: "The 3_MET_TCNN repository presents a sophisticated, multi-stage deep learning pipeline primarily developed for neurocomputing research, likely accompanying a 2018 paper on applying Temporal Convolutional Neural Networks (TCNNs) to analyze specific neurophysiological time-series data, where \"MET\" likely denotes a domain-specific signal or experimental condition such as metabolic data, motor evoked potentials, or other neural measurements. The project's holistic capability lies in its ability to process complex neural data, learn intricate temporal patterns using TCNNs, and arrive at a specific classification or prediction relevant to neuroscience. Intended usage involves a sequential execution flow: first, dataPrep.py is used to preprocess raw neurophysiological data into a suitable format; subsequently, stage1.py trains an initial model or extracts preliminary features; then, stage2Data.py prepares specific inputs for the second stage, potentially utilizing outputs from stage 1; stage2.py proceeds with further training or representation learning; finally, stage3.py completes the model training or makes final predictions, with test.py providing comprehensive evaluation of the entire system's performance. Key architectural and algorithmic highlights include the strategic application of TCNNs for effective temporal sequence modeling, crucial for neuroscience time-series, and a distinct three-stage processing architecture that implies a hierarchical or cascading model design. This multi-stage approach allows for progressive feature learning, refined data representation, or handling different aspects of the neurocomputing task, underscoring a robust and modular methodology for tackling challenging problems in brain data analysis.",
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
    repo_insight: "The Cropping_NZ MATLAB codebase is a specialized image processing utility primarily focused on automated or semi-automated region-of-interest extraction (cropping) from biological and medical image data, particularly neuroimaging scans from various species like mice, marmosets, and potentially human brains. Its holistic capability revolves around streamlining the pre-processing step of isolating relevant anatomical structures from larger image volumes or series, often within a research or diagnostic context where consistent and precise cropping is essential. This repository is intended to be used by researchers or technicians to batch process a collection of images; a typical workflow involves converting raw image data from a specific NGR format to TIFF using ngr2tif.m, then preparing a list of target files or directories for processing, likely managed by scripts like crop_list.m or crop_list_rescan.m. The core 'crop_X' functions (e.g., crop_Brains, crop_marmoset, crop_mouse_single, crop_sagital_quad) are then invoked to perform highly tailored cropping operations, selecting optimal regions based on species, anatomical plane, or specific acquisition protocol. The process includes robust logging via crop_logs.m for tracking operations, errors, and successful processing. Architecturally, the project employs a modular design with distinct functions for various cropping scenarios, indicating the use of highly specialized algorithms or predefined parameters for region identification. A key algorithmic highlight is the integration of natural-order file sorting through the 'natsortfiles' module, which is crucial for ensuring correct sequential processing of multi-slice or time-series image data where filenames contain numerical components. The system also features dedicated modules for robust batch processing and initial file format conversion, making it a comprehensive tool for efficient, high-throughput image data preparation in a scientific research setting.",
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
    repo_insight: "The 'cw_graph_tools' MATLAB repository provides a specialized toolkit for the computational manipulation, analysis, and visualization of structures related to CW complexes, a concept from algebraic topology, or a similar graph-theoretic framework denoted by the \"cw\" prefix. Its holistic capability centers on managing complex topological data, likely representing the 0- and 1-skeletons (vertices and edges) of such structures, through a robust set of functions for creation, modification, analysis, and persistence. Users are intended to interact with this repository by first loading or generating a CW complex structure, typically from a JSON file using functions like create_forest_from_json or load_cw_json, indicating a data-driven approach. They would then proceed to modify these structures using dedicated functions such as add_tree, delete_tree, and edit_graph, which allow for granular control over the constituent components, likely trees within a larger forest or graph. Analytical insights can be derived through algorithms like find_loops for cycle detection and find_mst for identifying minimum spanning trees, highlighting a strong reliance on graph theory principles for structural understanding. Finally, visualization is facilitated by plot_cw_complex, providing a graphical representation of the complex, and the results or modified structures can be persistently stored back to JSON format via export_forest_to_json or save_cw_json. Architecturally, the repository emphasizes JSON as its core data serialization format, ensuring interoperability and data persistence, and leverages a modular design for its graph and tree operations. Key algorithmic highlights include the integration of standard graph theory algorithms (e.g., MST, loop detection) within a specialized \"cw\" context, suggesting optimized or tailored implementations for this specific domain, alongside an essential visualization component to aid user comprehension.",
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
    repo_insight: "The DKCell repository provides a comprehensive, hybrid language solution for biomedical image analysis, primarily focused on cell detection, segmentation, or classification tasks using a deep learning approach grounded in meticulous data annotation. This project is intended to be used by first employing the substantial collection of MATLAB/Octave scripts, such as genCellTrainData.m and getDataTrain.m, to generate, process, and manage training data and annotations, often involving visualization and verification via scripts like viewAnnot.m and verifyDK_csv.m. This annotation-centric preprocessing leverages the included jsonlab library for robust handling of structured data in various formats (JSON, MessagePack, UBJSON) with compression. Following data preparation, the project transitions to its Python components, where a powerful Inception-ResNet-V2 convolutional neural network, likely benefiting from transfer learning with ImageNet pre-training as suggested by export_imagenet.py, is adapted or fine-tuned for the specific cell analysis task, potentially incorporating specialized layers like FixedBatchNormalization.py. Key architectural and algorithmic highlights include this unique hybrid strategy that combines MATLAB's strengths in image processing and rapid prototyping with Python's deep learning capabilities, the sophisticated and versatile data serialization and compression provided by the jsonlab library for managing complex annotations, and the effective application of transfer learning with a high-performance deep neural network architecture to address challenges in biomedical imaging.",
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
    repo_insight: "This DM_2D repository is a sophisticated, high-performance computational topology project primarily focused on calculating persistent homology, particularly for two-dimensional data, likely leveraging Discrete Morse Theory for simplification. Its core capability lies in a distributed persistent homology algorithm (DIPHA), implemented in C++ and designed for parallel execution using MPI, making it suitable for analyzing large-scale datasets such as images or grid-based structures for feature extraction and topological data analysis. Users are intended to generate or prepare 2D input data, potentially using the provided Matlab scripts for synthetic data creation (e.g., ramp images, spheres, noisy data), and then feed this into the compiled C++ DIPHA engine to compute persistence diagrams, typically executed on a parallel computing environment. The Python files likely serve as a high-level interface or wrapper, orchestrating data input, execution of the C++ binary, and initial post-processing, while the Matlab scripts further aid in visualizing the computed persistence diagrams and analyzing intermediate results like discrete Morse edge information. Architecturally, the project's highlights include its C++ core with a strong emphasis on distributed computing through MPI, incorporating advanced column reduction algorithms (e.g., compute_reduced_columns, reduction_kernel) and custom, optimized data structures (like flat column stacks, heap columns, and write-once arrays) to efficiently process various complex types, notably weighted cubical complexes. The integration of the psort-1.0 library underscores its commitment to high-performance parallel sorting, critical for large-scale distributed computations, and the comprehensive Matlab utilities provide essential tooling for data preparation, testing, and result interpretation, forming a complete workflow for topological data analysis.",
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
    repo_insight: "The DM_3D repository is a sophisticated codebase designed for distributed and parallel topological data analysis (TDA) of 3D volumetric image data, primarily focusing on persistent homology. Its holistic capability is to extract robust topological features—such as connected components, loops, and voids—from complex 3D datasets by constructing and analyzing their underlying topological structures, represented as persistence diagrams. This project operates in the domain of scientific computing, image analysis, and advanced data exploration, likely for applications in fields like medical imaging, materials science, or astrophysics, where understanding the intrinsic shape and connectivity of data is critical. The repository is intended to be used as a hybrid system where MATLAB scripts (e.g., dipha_input_gen.m, parallel_dipha_input.m) serve as the primary user interface for data preparation, orchestrating distributed computations, and loading/visualizing persistence diagrams, while the heavy-duty computational tasks are handled by highly optimized C++ executables. Users would typically prepare their 3D image data in MATLAB, use provided scripts to generate input suitable for distributed persistent homology computation (possibly using a 'split-compute-merge' paradigm for large datasets, indicated by functions like split_domain and the merge module), execute the C++ components (e.g., DiMoSC.cpp, ComputeGraphReconstruction.cpp which might integrate with the PHAT library), and then return to MATLAB for post-processing and analysis of the resulting persistence diagrams and reconstructed graph structures. Key architectural and algorithmic highlights include a strong reliance on Persistent Homology (via the integrated PHAT library, offering various reduction algorithms and pivot column representations for efficiency), a clear design for distributed and parallel processing to scale to large 3D volumes (evidenced by 'dipha' integration and explicit 'merge' functionality), and the systematic construction and manipulation of simplicial complexes and discrete vector fields for accurately representing and analyzing the topology of the input data. The combination of efficient C++ for core algorithms and MATLAB for ease of use provides a powerful platform for advanced topological data analysis.",
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
    repo_insight: "DM_Lucas is a sophisticated C++ codebase primarily focused on the scalable computation of persistent homology, a key tool in computational topology for analyzing the shape and structure of data. Its holistic capability lies in providing robust and efficient algorithms for extracting topological features from large datasets, addressing the significant computational challenges often associated with such analyses, particularly through its emphasis on parallel processing as indicated by functionality like \"parallel_dipha_input.\" This repository is intended to be used by researchers and practitioners in data science, scientific computing, and related fields to process complex data – such as point clouds or geometric structures – and derive topological insights like persistence diagrams. Users would likely compile and execute the project's tools, providing their data in a suitable format, possibly converting it to a structure compatible with the DIPHA algorithm, to leverage its parallel capabilities for high-performance topological data analysis. Architecturally, the project highlights a strong emphasis on parallel and distributed algorithms, underpinning its ability to handle large-scale computations. This suggests the implementation of optimized data structures for simplicial complexes, efficient boundary matrix computations, and reduction algorithms specifically adapted for parallel execution, likely supporting paradigms like message passing to facilitate distributed processing across multiple computational nodes, all contributing to its comprehensive and scalable approach to persistent homology.",
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
    repo_insight: "This \"Morse GAN\" project represents a fascinating application of deep generative models to the domain of Morse code, likely aiming to synthesize or transform Morse signal representations. Its holistic capability revolves around leveraging Generative Adversarial Networks, specifically the Pix2Pix architecture, for image-to-image translation within the context of Morse code. This could involve tasks such as generating realistic Morse code waveforms or spectrograms from abstract representations, denoising noisy Morse signals, or translating between different visual or spectral forms of Morse code. The project is intended to be used in a two-stage process. First, the MATLAB scripts (create_dm_patches.m, create_dm_patches_p.m, create_dm_patches_p16.m) are executed to prepare the dataset. These scripts are crucial for converting raw Morse code data (which might be audio, text, or some other digital signal) into standardized \"patches\"—likely image representations such as spectrogram snippets—suitable for training a deep learning model. The different patch scripts likely correspond to variations in patch size or preprocessing techniques. Once these image patches are generated, the 'pix2pix.py' script is then employed to train a conditional GAN model using this prepared dataset. This Python script embodies the core deep learning component, defining the Pix2Pix network architecture, managing the training loop, and enabling the generation or translation capabilities. Key architectural and algorithmic highlights include the central role of Generative Adversarial Networks (GANs), specifically the Pix2Pix model, which is renowned for its efficacy in diverse image-to-image translation tasks. The use of MATLAB for intricate data preprocessing to create \"patches\" underscores the importance of domain-specific feature engineering, transforming abstract Morse code data into a visual format consumable by image-based neural networks. This combination of robust data preparation and a powerful generative model allows the project to explore the creation and manipulation of Morse code signals through a deep learning paradigm.",
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
    repo_insight: "The 'DM_net' repository presents a sophisticated, hybrid Python and MATLAB codebase engineered for advanced deep learning-based image processing and computer vision tasks, especially those requiring the analysis or transformation of multiple image inputs. Its holistic capability is centered around the development, training, rigorous evaluation, and deployment of neural network models, particularly emphasizing the UNet architecture, for applications such as image segmentation, comparison, or feature extraction within domains like medical imaging, remote sensing change detection, or image enhancement, where precise image-to-image mapping or comparative analysis is critical. This repository is intended to be used as a complete workflow: initially, users would employ the `createData*.py` scripts to generate and preprocess image datasets, potentially incorporating augmentation techniques like `clipped_zoom`; subsequently, various deep learning models, including specialized UNet and multi-input configurations (e.g., `fullModel_2Img.py`), would be defined via `createNET*.py` and trained using the `fullModel*.py` scripts; post-training, model performance is quantitatively assessed through the MATLAB-based `eval_metric.m` and `thresh4eval.m` scripts for comprehensive evaluation; finally, the trained models are deployed for inference on new image data using `tsting.py` or `tsting_singleIP.py`. Key architectural and algorithmic highlights include a modular design that clearly separates network definition from full model implementations, robust support for multi-input image processing (evidenced by functions like `readImagesTwice`), and a comprehensive data pipeline that emphasizes augmentation and precise data preparation, all underpinned by a hybrid evaluation strategy that leverages both Python's deep learning capabilities and MATLAB's analytical tools for thorough quantitative assessment.",
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
    repo_insight: "This GFP-Cell-Detection repository offers a holistic biomedical image analysis capability, primarily focused on the robust detection and segmentation of GFP-labeled cells or vascular structures within microscopy images, operating within the domain of computational bioimaging. It is intended to be used as a multi-stage MATLAB pipeline for processing fluorescent microscopy data: users would typically initiate the process via 'main.m', 'gfp_main.m', or 'main_bam.m', potentially leveraging 'run_script.sh' for batch processing. The workflow begins with 'pre_proc.m' for initial image preparation, followed by sequential phases, such as 'phase1.m' and 'phase2.m', which orchestrate feature extraction, cell/vessel detection, and refinement. Subsequently, the system allows for rigorous performance evaluation using 'pr_recall.m' and 'weighted_pr_recall.m' against 'Ground_truth_labelling.m', enabling quantitative assessment of detection accuracy. Architecturally, the project highlights include a sophisticated Frangi filtering module ('frangi_filter_version2a') for enhancing ridge-like (vessel) or blob-like (cell) structures, offering both 2D and 3D capabilities with performance-optimized MEX files for Gaussian blurring and eigenvalue computation. Key algorithmic components further encompass 'circfit.m' and 'fit_circles.m' for identifying circular cell-like objects, 'cell_filling.m' for creating solid masks, 'cluster.m' for grouping detections, and 'Euclidean_Signature.m' for shape description, all contributing to a comprehensive system for automated biological object detection and analysis.",
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
    repo_insight: "This 'Github_test' repository, containing only a 'test.py' file, appears to serve as a foundational or experimental project, primarily designed for demonstrating, validating, or exploring basic functionalities within a GitHub ecosystem using Python. Its holistic capability, given the names, points towards a domain centered around software development lifecycle, CI/CD pipeline testing, or simply as a sandbox for learning GitHub features like repositories, commits, pushes, and potentially GitHub Actions. The repository is most likely intended to be used as a simple executable Python script, where 'test.py' would be run either locally from the command line (e.g., 'python test.py') or within a GitHub Actions workflow to observe its output or behavior. Its primary purpose would be to confirm environmental setups, test basic Python script execution within a given context, or serve as a minimalist example project for new GitHub users or contributors to understand repository mechanics. Without the specific content of 'test.py', it is impossible to identify any key architectural patterns or algorithmic highlights; the project's design is likely very straightforward, possibly involving simple print statements, basic logic, or calls to standard Python libraries, serving as a lightweight testbed rather than a complex application with sophisticated algorithms or a multi-tiered architecture.",
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
    repo_insight: "This repository, named 'github_test2' and described as \"Just for Test\", serves primarily as an experimental sandbox for developers, demonstrating no specific holistic capability or domain beyond that of a general programming testbed. Its core capability lies in facilitating ad-hoc code development, testing, and potentially serving as a practice ground for Git and GitHub workflows. The project is intended to be used by developers for internal experimentation, writing and running small Python scripts to test ideas, features, or to observe the behavior of Git operations, such as how new files like 'new_file_after_pull.py' integrate after a pull. It is not designed for production deployment, end-user interaction, or integration into larger systems as a functional component. Architecturally, the repository appears to be a flat collection of independent Python scripts ('test.py', 'test1.py') rather than a structured application, suggesting a minimal or absent architectural pattern. Algorithmic highlights are undefined without code content, but given its testing nature, the files likely contain simple procedural logic, basic function definitions, or experimental code snippets for various small tasks or unit-like tests, without indicating any complex data structures or sophisticated algorithms.",
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
    repo_insight: "The HF_learn repository serves as an introductory, hands-on learning resource focused on the Hugging Face Transformers library, deeply entrenched in the domain of Natural Language Processing (NLP) and modern deep learning architectures. Its holistic capability is to demystify and provide practical application experience with state-of-the-art Transformer models for various NLP tasks, making complex AI accessible for learners and practitioners. The repository is intended to be used interactively, with users executing the provided Jupyter notebooks, Test_HF.ipynb and Transformer_HF_Tut.ipynb, as guided tutorials and executable code examples. This approach allows learners to progressively understand core concepts such as model loading, tokenization, pipeline usage, and potentially fine-tuning, thereby gaining direct, practical experience with the Hugging Face ecosystem in a step-by-step manner. From an architectural and algorithmic perspective, the project primarily highlights the efficient deployment and utilization of pre-trained Transformer models (like those from the BERT, GPT, or T5 families) via the Hugging Face library's high-level API. It emphasizes understanding how to leverage these complex deep learning architectures for practical NLP applications rather than focusing on the intricate low-level implementation details of the Transformer algorithm itself, making advanced NLP accessible for rapid experimentation and learning by abstracting away much of the underlying complexity.",
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
    repo_insight: "This 'HG2PD' repository is a sophisticated Python framework primarily focused on the orchestration and management of machine learning training processes, placing its core capability within the domain of MLOps and experimental ML development, as evidenced by the critical files train.py and train_prot.py. Its holistic capability lies in providing a comprehensive, programmatic environment for data scientists and ML engineers to define, execute, and oversee complex training workflows, likely encompassing various datasets, model architectures, hyperparameter configurations, and resource allocations. The repository is intended to be used predominantly through a robust command-line interface, leveraging functions like parse_args, Command, and RequirementCommand to enable users to precisely initiate training runs, configure experimental parameters, and manage intricate dependencies or specific operational requirements for their models and environments. The presence of a _build_session function further suggests a design capable of managing persistent connections, remote resources, or distributed training contexts, facilitating scalable and reproducible ML experiments. Architecturally, the project features a highly modular command-line framework for command dispatch and task execution, a dedicated system for explicit dependency or requirement management (illustrated by populate_requirement_set for defining environmental or data prerequisites), and sophisticated session management capabilities crucial for handling the lifecycle of training jobs. The inclusion of 'train_prot.py' points towards a structured, algorithmic approach to defining training protocols or experimental prototypes, allowing for advanced definition and execution of repeatable and controlled machine learning experiments, all within a substantial and feature-rich codebase.",
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
    repo_insight: "The 'injDet' repository, short for \"Injection Detection,\" is a sophisticated Python codebase dedicated to identifying and mitigating code injection vulnerabilities within software systems. Its holistic capability centers around static or potentially dynamic analysis of code or a running environment to detect common injection flaws such as SQL injection, command injection, or cross-site scripting (XSS). The presence of numerous functions related to path manipulation and build system interaction, including makepath, abs__file__, removeduppaths, addbuilddir, and _init_pathinfo, suggests a strong emphasis on preparing and analyzing a codebase or development environment, implying a tool designed to integrate into a CI/CD pipeline or for dedicated security audits, focusing on the security domain of vulnerability assessment. Intended usage of this repository would involve pointing it at a target codebase or project to perform a deep, automated security analysis, likely configured through a build-like process to resolve dependencies and project structure, with the expectation of receiving a comprehensive report detailing potential injection vulnerabilities, their locations, and possibly severity. Architecturally, the project appears to follow a multi-stage analysis pipeline: 'phase1.py' likely handles the initial setup, environment preparation, source code ingestion, and preliminary parsing, utilizing the path-related utility functions to correctly resolve and access files. 'phase2_G.py' then probably implements a core analytical engine, focusing on graph-based analysis (e.g., Control Flow Graphs or Data Flow Graphs) to trace data propagation and identify potential taint sources and sinks within the code. Following this, 'phase2_R.py' would likely apply specific detection rules, heuristics, or a refinement process to the findings from 'phase2_G', potentially filtering false positives or categorizing vulnerabilities based on predefined patterns, leading to the final, actionable detection results. This staged approach allows for modularity, complexity management, and potentially different analytical strategies for various vulnerability types.",
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
    repo_insight: "The 'makemore_Samik' repository functions as a comprehensive, educational deep learning project primarily focused on character-level language modeling, drawing inspiration from Andrej Karpathy's popular 'makemore' series. Its holistic capability lies in providing a hands-on platform for understanding fundamental neural network concepts, from basic language model architectures to advanced training techniques and modern generative models within the domain of Natural Language Processing. Users are intended to engage with this repository primarily through its rich collection of Jupyter Notebooks, such as 'build_makemore_samik.ipynb' and 'gpt_dev_samik.ipynb', executing them sequentially to explore, learn, and experiment with different model implementations, observe the training process, and generate new character sequences. The 'Samik' suffix on many files suggests a personalized exploration and modification of the original educational series. Key architectural and algorithmic highlights include the implementation of Bigram Language Models as a foundational step, progression to Multi-Layer Perceptrons (MLP) for more complex pattern recognition, a deep dive into manual Backpropagation for understanding gradient flow, the integration of Batch Normalization for training stability, and the exploration of more advanced concepts like Wavenet-style architectures for sequence generation and foundational elements leading towards GPT-like transformer models, all demonstrated through core functions like get_batch for data loading, estimate_loss for evaluation, and forward/generate for model execution and inference.",
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
    repo_insight: "The 'MakeUPMirror' project is a specialized computer vision codebase primarily focused on facial image processing, likely for virtual makeup application, facial attribute manipulation, or aesthetic transformation analysis. Its holistic capability revolves around deep learning for understanding and altering facial features, particularly in the context of makeup. The repository is intended to be used by researchers or developers to prepare facial image datasets using 'dataPrep.py' scripts (found in 'VMU' and 'YMU' directories for different configurations), train deep neural networks defined in 'network.py' (which incorporate techniques like Local Response Normalization, or LRN), and potentially employ metric learning strategies using 'tripletData.py' to learn robust feature embeddings. The 'discriminate.py' file suggests the possible involvement of a Generative Adversarial Network (GAN) for realistic image synthesis, allowing the system to apply or remove makeup, or transform facial attributes virtually. The training and evaluation workflow is supported by 'test.py', with configurable parameters managed via 'get_config'. Key architectural highlights include its reliance on deep learning (evidenced by LRN and network structures) combined with metric learning via triplet data generation, facilitating tasks requiring similarity-aware embeddings. The modular design, with separate data preparation scripts for VMU and YMU, indicates a flexible and organized approach to handling different datasets or experimental setups. Furthermore, the presence of 'image_save.m' suggests potential integration with MATLAB for specific image processing, analysis, or visualization tasks.",
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
    repo_insight: "This project is a sophisticated machine learning framework primarily designed for advanced image analysis, strongly suggesting applications in the biomedical domain, such as cellular imaging or medical diagnostics, given modules like 'CellAware' and specific image processing utilities. Its holistic capability lies in providing a comprehensive platform to develop, train, evaluate, and deploy deep learning models, particularly focusing on custom Transformer-based architectures named 'MEDIARFormer', alongside baseline models and ensemble prediction capabilities. Users are intended to engage with this repository by first preparing and organizing their labeled image datasets using utilities like 'generate_mapping.py' to establish path mappings; then, configuring their experiments through a `SetupDict.py` system; subsequently, initiating training runs via `main.py` or similar entry points, leveraging `core/MEDIAR/Trainer.py` or `core/Baseline/Trainer.py` with custom data transformations; evaluating model performance with `evaluate.py` using defined measures; and finally, performing predictions on new data via `predict.py`. Key architectural highlights include a modular design separating base trainers and predictors from their specific implementations, enabling flexible experimentation with models like the specialized 'MEDIARFormer' and robust ensemble methods. The data pipeline is highly customized, featuring domain-specific transformations (e.g., 'CellAware', 'LoadImage', 'NormalizeImage') within `train_tools/data_utils/custom`, supported by strong data management utilities for handling labeled paths and dataset splits effectively, all contributing to a robust and extensible system for image-based deep learning.",
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
    repo_insight: "The repository 'ML_Semantic-Segmenation-2020' is a Python-based machine learning project primarily focused on Semantic Segmentation, a computer vision task that involves classifying each pixel in an image to a corresponding class. The presence of 'soft_dice_loss' immediately signals its likely application in medical image segmentation or scenarios with significant class imbalance, where precise boundary detection and handling of foreground/background representation are critical. The multiple 'createDataX.py' files (e.g., createData.py, createData1.py, createData255.py, createDataTest.py) indicate a robust and potentially complex data preprocessing pipeline, likely dealing with different data formats, normalization techniques (like scaling to 0-1 or 0-255), and separate preparation for training and testing datasets. The repeated appearance of 'readImagesTwice' across functions suggests a common pattern of loading both input images and their corresponding ground-truth segmentation masks. 'createNetR.py' clearly houses the definition of the neural network architecture, which, for semantic segmentation, would typically be an encoder-decoder type like a U-Net. 'fullModel.py' integrates these components, responsible for the complete model training process. Finally, the 'tsting.py', 'tsting_PS.py', and 'tsting_single.py' files denote various scripts for evaluating the trained model, likely covering batch inference, performance scoring (PS), and individual image prediction, confirming a full development lifecycle from data to deployment.",
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
    repo_insight: "The ML_Semantic_Segmenation_NMI repository presents a comprehensive machine learning framework primarily dedicated to advanced semantic and instance segmentation within biomedical imaging, particularly targeting structures like cell nuclei and neuronal boutons, suggesting applications in neuroscience or cell biology research. This project's holistic capability encompasses the entire lifecycle of deep learning-based image analysis, from dataset generation and model training to sophisticated evaluation of segmentation quality. It is intended for researchers to develop, train, and benchmark deep learning models by first preparing specialized datasets using scripts like `createData*.py`, followed by training segmentation networks such as U-Net (`modelUnet.py`) or Mask R-CNN (`Mask_RCNN/mrcnn/model.py`). Inference and subsequent rigorous evaluation are performed using scripts like `tsting_*.py` and a dedicated suite of metric calculation modules, including `cal_F1.py`, `cal_connectivity.py`, and `dk_metric/image_metrics.py`, with `demo.ipynb` facilitating interactive exploration. Key architectural and algorithmic highlights include the deployment of established deep learning architectures like U-Net and Mask R-CNN, alongside robust image processing utilities for managing large image tiles (`Splitter.py`, `merge_tiles.py`). The project emphasizes advanced evaluation metrics, exemplified by graph-based connectivity analysis (`cal_connectivity.py` utilizing `bfs` and `retrieve_path`) and pixel-level true/false positive calculations (`cal_fp_tp`). Furthermore, the inclusion of C++ optimized components like `bouton_code/src/ComputeGraphReconstruction.cpp` and directories like \"DM_base\" and \"morse_code\" suggests an exploration of performance-critical graph algorithms or diffusion-map-based feature extraction, enriching the project's analytical depth for complex biological image understanding.",
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