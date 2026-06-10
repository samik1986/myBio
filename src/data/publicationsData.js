import pub1Img from '../assets/pub_skeletonization.png';
import pub2Img from '../assets/pub_segmentation.png';
import pub3Img from '../assets/pub_diffeomorphic.png';

export const publications = [
  {
    id: 1,
    title: "Skeletonization of neuronal processes using Discrete Morse techniques from computational topology",
    authors: "Samik Banerjee, et al.",
    journal: "Preprint",
    year: "2025",
    link: "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en",
    citations: "New",
    image: pub1Img,
    overview: "A computational topology approach utilizing Discrete Morse theory to extract and analyze single-axon skeletons from neuronal imaging, bridging anatomical structure with tracer injection data.",
    details: "This research bridges the gap between single-axon skeletons and tracer injections to improve the mapping of neural networks in vertebrates. By utilizing Discrete Morse theory from computational topology, the pipeline can successfully trace intricate neuronal processes in noisy and high-resolution imaging data.",
    images: [pub1Img]
  },
  {
    id: 2,
    title: "Semantic segmentation of microscopic neuroanatomical data by combining topological priors with encoder-decoder deep networks",
    authors: "Samik Banerjee, et al.",
    journal: "Nature Machine Intelligence",
    year: "2020",
    link: "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en",
    citations: "High",
    image: pub2Img,
    overview: "Introduced a deep learning framework integrating topological priors to significantly improve the semantic segmentation of complex microscopic neuroanatomical images.",
    details: "The paper proposes a novel deep learning framework that incorporates topological priors directly into an encoder-decoder architecture. This approach enables highly accurate semantic segmentation of complex microscopic neuroanatomical images, preserving structural connectivity which traditional loss functions often fail to capture.",
    images: [pub2Img]
  },
  {
    id: 3,
    title: "Solving the where problem and quantifying geometric variation in neuroanatomy using generative diffeomorphic mapping",
    authors: "Samik Banerjee, et al.",
    journal: "Preprint",
    year: "2024",
    link: "https://scholar.google.com/citations?user=XbMnDucAAAAJ&hl=en",
    citations: "New",
    image: pub3Img,
    overview: "Developed a generative statistical model for spatial mapping of molecular and anatomical brain datasets into a common 3D reference atlas.",
    details: "This paper presents a generative statistical model that enables the spatial mapping of molecular and anatomical brain datasets into a unified 3D reference atlas. It quantifies neuroanatomical geometric variation across subjects, providing a mathematical foundation for registering high-resolution microscopy datasets.",
    images: [pub3Img]
  }
];
