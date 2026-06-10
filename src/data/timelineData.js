export const rawTimelineData = [
  // Education
  { name: 'B.Tech (St. Thomas)', category: 'Education', time: [2004, 2008], description: "Bachelor's degree in Computer Science & Engineering" },
  { name: 'M.E. (IIEST Shibpur)', category: 'Education', time: [2008, 2010], description: "Master's thesis on Secure scan design" },
  { name: 'Ph.D. (IIT Madras)', category: 'Education', time: [2010, 2019], description: "Dissertation on Face Recognition from Degraded images" },

  // Experience
  { name: 'Asst. Professor (Heritage)', category: 'Experience', time: [2010, 2012], description: "Taught Computer Graphics & Multimedia, mentored thesis projects." },
  { name: 'Project Officer (IIT Madras)', category: 'Experience', time: [2012, 2018], description: "Led multiple CV projects including Scene Understanding and Target Localization." },
  { name: 'Science Analyst (CSHL)', category: 'Experience', time: [2018, 2026], description: "Developing algorithms for neuronal connectivity detection and multi-modal brain mapping." },

  // Projects
  { name: 'Scene Understanding', category: 'Projects', time: [2012, 2015], description: "Hyperclassifier based Visual Intelligent System (IIT Madras)." },
  { name: 'Satellite Target Loc.', category: 'Projects', time: [2015, 2018], description: "Localization of targets in satellite images for DRDO (IIT Madras)." },
  { name: 'BRAIN CONNECTS', category: 'Projects', time: [2018, 2026], description: "Pipeline to detect neuronal connectivity across scales (CSHL)." },
  { name: '3D Human Brain Atlas', category: 'Projects', time: [2020, 2026], description: "Multimodal histological cell atlas mapping (CSHL)." },
  { name: 'Marmoset Enhancers', category: 'Projects', time: [2022, 2026], description: "Cell type-specific enhancers and connectivity mapping (CSHL)." },

  // Fields
  { name: 'Computer Vision', category: 'Fields', time: [2012, 2026], description: "Image processing, object detection, semantic segmentation." },
  { name: 'Machine Learning', category: 'Fields', time: [2014, 2026], description: "Deep learning architectures and statistical learning." },
  { name: 'Neuroscience', category: 'Fields', time: [2018, 2026], description: "Brain connectivity, micro-scale brain mapping." },

  // Languages
  { name: 'C/C++', category: 'Languages', time: [2004, 2026], description: "Performance-critical programming." },
  { name: 'MATLAB', category: 'Languages', time: [2010, 2026], description: "Scientific computing and early algorithm development." },
  { name: 'Python', category: 'Languages', time: [2015, 2026], description: "Primary language for Data Science and Deep Learning." },
  { name: 'JS/TS', category: 'Languages', time: [2020, 2026], description: "Web applications and portals." },

  // Tools
  { name: 'OpenCV', category: 'Tools', time: [2012, 2026], description: "Core computer vision library." },
  { name: 'PyTorch/Keras', category: 'Tools', time: [2016, 2026], description: "Deep learning frameworks." },
  { name: 'AWS AppStream', category: 'Tools', time: [2020, 2026], description: "Cloud computing and deployments." },
  { name: 'React/Node', category: 'Tools', time: [2022, 2026], description: "Fullstack web portal development." }
];

export const formattedTimelineData = rawTimelineData.map(item => ({
  name: item.name,
  category: item.category,
  description: item.description,
  [item.category]: item.time // This creates the dynamic key for Recharts floating bars
}));

export const categoryColors = {
  'Education': '#9064FF',
  'Experience': '#FFB020',
  'Projects': '#FF6060',
  'Fields': '#38bdf8',
  'Languages': '#10b981',
  'Tools': '#f43f5e'
};
