export const repoData = {
  "2D-Skeletonization": {
    "description": "",
    "insight": "",
    "gpu_enabled": false,
    "files": []
  },
  "3d-centroid-proofreader": {
    "description": "**Codebase Intelligence:** This Python codebase contains 20 extracted functions across 2 files. Key extracted functionality includes: install_and_import, read_swc, save_swc, LoadingWorker, ProofreaderDockWidget, and more.",
    "insight": "The 3d-centroid-proofreader project is a specialized Python-based tool designed for the interactive visualization and corrective editing (proofreading) of 3D neuronal or similar tree-like structures, commonly represented in the SWC (Standard Wavefront Coordinate) file format. Its holistic capability lies in providing neuroscientists and researchers with an intuitive platform to refine and validate automatically or manually traced morphological reconstructions, leveraging the powerful 3D rendering and extensibility of the napari scientific image viewer. The repository is intended to be used by launching the provided 'run_proofreader.sh' script or executing 'launcher.py', which will open a napari instance with the 'ProofreaderDockWidget' activated. Users then load SWC files, visualize the 3D structures, and utilize the dock widget's tools to perform critical proofreading tasks such as correcting misconnections, removing spurious branches, adding missing segments, or adjusting node positions, with the ability to save the modified structures back into the SWC format. Architecturally, the project is structured as a napari plugin, with 'napari_proofreader.py' serving as the core component that defines the 'ProofreaderDockWidget' and orchestrates the user interface with the underlying data. Key algorithmic highlights include robust 'read_swc' and 'save_swc' functions for managing the domain-specific data format, a 'LoadingWorker' to handle potentially large datasets asynchronously, ensuring UI responsiveness, and implicitly, a suite of interactive 3D editing algorithms for manipulating the centroid-based tree structures directly within the napari environment.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "launcher.py",
        "summary": "Key capabilities: install_and_import",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "napari_proofreader.py",
        "summary": "Key capabilities: read_swc, save_swc, LoadingWorker, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "run_proofreader.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "3D_Developing_brain": {
    "description": "Code for Comparison of Cell Detection in 3D Histological Developing Brain",
    "insight": "The '3D_Developing_brain' repository offers a comprehensive computational framework for comparing different cell detection methodologies within complex 3D histological images of developing brain tissue, serving a vital role in the domain of bioimage informatics and developmental neuroscience. Its holistic capability is to benchmark and assess the efficacy of various algorithms for accurately identifying and localizing cells in volumetric microscopy data, which is fundamental for understanding neurogenesis, cell migration patterns, and disease progression in brain development. The intended usage involves users first engaging with the two provided Jupyter notebooks, MEDIAR_(model1).ipynb and MultiStreamCellSeg_(model_2).ipynb, which serve as executable pipelines to apply and generate cell detection results using two distinct computational models on their 3D image datasets. Following the generation of these detections, the eval1.m MATLAB script is designed to load the model outputs alongside ground truth data to perform a rigorous, quantitative evaluation and comparison of the models' performance, likely calculating metrics such as precision, recall, and F1-score. Architecturally, the project highlights the implementation of two sophisticated cell detection algorithms\u2014one named MEDIAR and the other, MultiStreamCellSeg, which strongly suggests a multi-stream neural network designed for robust segmentation\u2014with their development and application orchestrated within the interactive and iterative Python-based Jupyter environment. The separation of model execution in Python notebooks and the dedicated evaluation in a MATLAB script underscores a common research practice where advanced deep learning methods are built in Python while robust, often standardized, quantitative analysis and reporting are performed using MATLAB's scientific computing capabilities.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "MEDIAR_(model1).ipynb",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "MultiStreamCellSeg_(model_2).ipynb",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "eval1.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "3_MET_TCNN": {
    "description": "For Paper in NeuroComputing 2018",
    "insight": "The 3_MET_TCNN repository presents a sophisticated, multi-stage deep learning pipeline primarily developed for neurocomputing research, likely accompanying a 2018 paper on applying Temporal Convolutional Neural Networks (TCNNs) to analyze specific neurophysiological time-series data, where \"MET\" likely denotes a domain-specific signal or experimental condition such as metabolic data, motor evoked potentials, or other neural measurements. The project's holistic capability lies in its ability to process complex neural data, learn intricate temporal patterns using TCNNs, and arrive at a specific classification or prediction relevant to neuroscience. Intended usage involves a sequential execution flow: first, dataPrep.py is used to preprocess raw neurophysiological data into a suitable format; subsequently, stage1.py trains an initial model or extracts preliminary features; then, stage2Data.py prepares specific inputs for the second stage, potentially utilizing outputs from stage 1; stage2.py proceeds with further training or representation learning; finally, stage3.py completes the model training or makes final predictions, with test.py providing comprehensive evaluation of the entire system's performance. Key architectural and algorithmic highlights include the strategic application of TCNNs for effective temporal sequence modeling, crucial for neuroscience time-series, and a distinct three-stage processing architecture that implies a hierarchical or cascading model design. This multi-stage approach allows for progressive feature learning, refined data representation, or handling different aspects of the neurocomputing task, underscoring a robust and modular methodology for tackling challenging problems in brain data analysis.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "dataPrep.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stage1.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stage2.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stage2Data.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stage3.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "atlas_free_slice_alignment": {
    "description": "",
    "insight": "The 'atlas_free_slice_alignment' repository provides a sophisticated computational framework for the precise, non-atlas-dependent alignment of sequential 2D image slices, primarily targeting data acquired from complex optical or imaging systems that generate slices susceptible to various geometric deformations. Its holistic capability lies in accurately registering these slices and correcting for non-rigid transformations without relying on a pre-existing anatomical atlas, making it particularly useful in scientific imaging domains where dynamic or diverse samples preclude the use of fixed templates. The repository is intended to be used by first consulting its Sphinx-generated documentation (indicated by docs/conf.py) for a comprehensive conceptual understanding and setup instructions. Users can then engage with source/notebooks/example.ipynb for a practical, hands-on demonstration of the core alignment process, while source/notebooks/slice_alignment_parallel Telescope a=0.25 c=0.25 deform only-Copy1.ipynb provides a deeper dive into a specific, complex use case, demonstrating parameter tuning and deformation correction tailored for particular optical system characteristics. The primary means of applying the alignment algorithms to user-provided datasets would be through executing source/scripts/slice_alignment.py, likely via a command-line interface, with source/scripts/slice_alignment_help.py potentially providing utility functions or command-line argument parsing. Key architectural highlights include a robust, script-based core for automated execution, complemented by Jupyter notebooks for interactive exploration, visualization, and detailed exposition of complex algorithms and parameters, fostering reproducibility and understanding. Algorithmically, the project emphasizes \"atlas-free\" registration, suggesting the implementation of advanced image-based or feature-based alignment strategies, with a specific focus on \"deform only\" transformations, implying the use of sophisticated warping models (e.g., B-splines, thin-plate splines) to precisely correct for geometric distortions inherent to specialized imaging setups like the \"parallel Telescope\" context hinted at in the notebook titles.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "docs/conf.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "source/notebooks/example.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "source/notebooks/slice_alignment_parallel Telescope a=0.25 c=0.25 deform only-Copy1.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "source/scripts/slice_alignment.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "source/scripts/slice_alignment_help.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "Cropping_NZ": {
    "description": "**Codebase Intelligence:** This MATLAB codebase contains 27 extracted functions across 18 files. Key extracted functionality includes: crop_1, crop_2, crop_3, crop_4, crop_Brains, and more.",
    "insight": "The Cropping_NZ MATLAB codebase is a specialized image processing utility primarily focused on automated or semi-automated region-of-interest extraction (cropping) from biological and medical image data, particularly neuroimaging scans from various species like mice, marmosets, and potentially human brains. Its holistic capability revolves around streamlining the pre-processing step of isolating relevant anatomical structures from larger image volumes or series, often within a research or diagnostic context where consistent and precise cropping is essential. This repository is intended to be used by researchers or technicians to batch process a collection of images; a typical workflow involves converting raw image data from a specific NGR format to TIFF using ngr2tif.m, then preparing a list of target files or directories for processing, likely managed by scripts like crop_list.m or crop_list_rescan.m. The core 'crop_X' functions (e.g., crop_Brains, crop_marmoset, crop_mouse_single, crop_sagital_quad) are then invoked to perform highly tailored cropping operations, selecting optimal regions based on species, anatomical plane, or specific acquisition protocol. The process includes robust logging via crop_logs.m for tracking operations, errors, and successful processing. Architecturally, the project employs a modular design with distinct functions for various cropping scenarios, indicating the use of highly specialized algorithms or predefined parameters for region identification. A key algorithmic highlight is the integration of natural-order file sorting through the 'natsortfiles' module, which is crucial for ensuring correct sequential processing of multi-slice or time-series image data where filenames contain numerical components. The system also features dedicated modules for robust batch processing and initial file format conversion, making it a comprehensive tool for efficient, high-throughput image data preparation in a scientific research setting.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "crop_1.m",
        "summary": "Key capabilities: crop_1",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_2.m",
        "summary": "Key capabilities: crop_2",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_3.m",
        "summary": "Key capabilities: crop_3",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_4.m",
        "summary": "Key capabilities: crop_4",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_Brains.m",
        "summary": "Key capabilities: crop_Brains",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_list.m",
        "summary": "Key capabilities: crop_list",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_list_rescan.m",
        "summary": "Key capabilities: crop_list_rescan",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_logs.m",
        "summary": "Key capabilities: crop_logs",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_marmoset.m",
        "summary": "Key capabilities: crop_marmoset",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_mouse_double.m",
        "summary": "Key capabilities: crop_mouse_double",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_mouse_double_inv.m",
        "summary": "Key capabilities: crop_mouse_double_inv",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_mouse_single.m",
        "summary": "Key capabilities: crop_mouse_single",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "crop_sagital_quad.m",
        "summary": "Key capabilities: crop_sagital_quad",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "natsortfiles/html/natsortfiles_doc.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "natsortfiles/natsort.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "natsortfiles/natsortfiles.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "natsortfiles/natsortfiles_doc.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "natsortfiles/natsortfiles_test.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "natsortfiles/testfun.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "ngr2tif.m",
        "summary": "Key capabilities: ngr2tif, checkfileexists",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "cw_graph_tools": {
    "description": "**Codebase Intelligence:** This MATLAB codebase contains 13 extracted functions across 11 files. Key extracted functionality includes: add_tree, create_forest_from_json, delete_tree, edit_cw_json, edit_graph, and more.",
    "insight": "The 'cw_graph_tools' MATLAB repository provides a specialized toolkit for the computational manipulation, analysis, and visualization of structures related to CW complexes, a concept from algebraic topology, or a similar graph-theoretic framework denoted by the \"cw\" prefix. Its holistic capability centers on managing complex topological data, likely representing the 0- and 1-skeletons (vertices and edges) of such structures, through a robust set of functions for creation, modification, analysis, and persistence. Users are intended to interact with this repository by first loading or generating a CW complex structure, typically from a JSON file using functions like create_forest_from_json or load_cw_json, indicating a data-driven approach. They would then proceed to modify these structures using dedicated functions such as add_tree, delete_tree, and edit_graph, which allow for granular control over the constituent components, likely trees within a larger forest or graph. Analytical insights can be derived through algorithms like find_loops for cycle detection and find_mst for identifying minimum spanning trees, highlighting a strong reliance on graph theory principles for structural understanding. Finally, visualization is facilitated by plot_cw_complex, providing a graphical representation of the complex, and the results or modified structures can be persistently stored back to JSON format via export_forest_to_json or save_cw_json. Architecturally, the repository emphasizes JSON as its core data serialization format, ensuring interoperability and data persistence, and leverages a modular design for its graph and tree operations. Key algorithmic highlights include the integration of standard graph theory algorithms (e.g., MST, loop detection) within a specialized \"cw\" context, suggesting optimized or tailored implementations for this specific domain, alongside an essential visualization component to aid user comprehension.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "add_tree.m",
        "summary": "Key capabilities: add_tree",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "create_forest_from_json.m",
        "summary": "Key capabilities: create_forest_from_json",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "delete_tree.m",
        "summary": "Key capabilities: delete_tree",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "edit_cw_json.m",
        "summary": "Key capabilities: edit_cw_json",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "edit_graph.m",
        "summary": "Key capabilities: edit_graph",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "export_forest_to_json.m",
        "summary": "Key capabilities: export_forest_to_json",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "find_loops.m",
        "summary": "Key capabilities: find_loops",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "find_mst.m",
        "summary": "Key capabilities: find_mst, find_dt, union_dt",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "load_cw_json.m",
        "summary": "Key capabilities: load_cw_json",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "plot_cw_complex.m",
        "summary": "Key capabilities: plot_cw_complex",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "save_cw_json.m",
        "summary": "Key capabilities: save_cw_json",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "DKCell": {
    "description": "**Codebase Intelligence:** This Python codebase contains 296 extracted functions across 72 files. Key extracted functionality includes: Config, Config, augment, union, intersection, and more.",
    "insight": "The DKCell repository provides a comprehensive, hybrid language solution for biomedical image analysis, primarily focused on cell detection, segmentation, or classification tasks using a deep learning approach grounded in meticulous data annotation. This project is intended to be used by first employing the substantial collection of MATLAB/Octave scripts, such as genCellTrainData.m and getDataTrain.m, to generate, process, and manage training data and annotations, often involving visualization and verification via scripts like viewAnnot.m and verifyDK_csv.m. This annotation-centric preprocessing leverages the included jsonlab library for robust handling of structured data in various formats (JSON, MessagePack, UBJSON) with compression. Following data preparation, the project transitions to its Python components, where a powerful Inception-ResNet-V2 convolutional neural network, likely benefiting from transfer learning with ImageNet pre-training as suggested by export_imagenet.py, is adapted or fine-tuned for the specific cell analysis task, potentially incorporating specialized layers like FixedBatchNormalization.py. Key architectural and algorithmic highlights include this unique hybrid strategy that combines MATLAB's strengths in image processing and rapid prototyping with Python's deep learning capabilities, the sophisticated and versatile data serialization and compression provided by the jsonlab library for managing complex annotations, and the effective application of transfer learning with a high-performance deep neural network architecture to address challenges in biomedical imaging.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "Annotation_TrainingData_Cells/genCellTrainData.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/getDataTrain.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/getDataTrain_RGB_Sep2021.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/Contents.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/base64decode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/base64encode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/decodevarname.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/encodevarname.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/examples/demo_jsonlab_basic.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/examples/demo_msgpack_basic.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/examples/demo_ubjson_basic.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/examples/jsonlab_selftest.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/examples/jsonlab_speedtest.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/fast_match_bracket.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/gendocs.sh",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/genlog.sh",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/gzipdecode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/gzipencode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/isoctavemesh.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/jdatadecode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/jdataencode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/jsonopt.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/loadjson.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/loadmsgpack.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/loadubjson.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/lz4decode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/lz4encode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/lz4hcdecode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/lz4hcencode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/lzipdecode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/lzipencode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/lzmadecode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/lzmaencode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/match_bracket.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/mergestruct.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/nestbracket2dim.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/savejson.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/savemsgpack.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/saveubjson.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/varargin2struct.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/zlibdecode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/jsonlab/jsonlab/zlibencode.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/normal.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/parseXML.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/scratch.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/verifyDK_csv.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/viewAnnot.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Annotation_TrainingData_Cells/visCells_dist.m",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "FixedBatchNormalization.py",
        "summary": "Key capabilities: FixedBatchNormalization, build, call, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Transper/inception_resnet_v2/export_imagenet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Transper/inception_resnet_v2/inception_resnet_v2.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "config.py",
        "summary": "Key capabilities: Config",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "configDK.py",
        "summary": "Key capabilities: Config",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "data_augment.py",
        "summary": "Key capabilities: augment",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "data_generators.py",
        "summary": "Key capabilities: union, intersection, iou, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "getRegMask.py",
        "summary": "Key capabilities: getRegMask",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "getRegMask_DK39.py",
        "summary": "Key capabilities: getRegMask",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "img_overlay.py",
        "summary": "Key capabilities: imread_fast, imwrite_fast",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "inception_resnet_v2.py",
        "summary": "Key capabilities: get_weight_path, get_img_output_length, conv2d_bn, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/FixedBatchNormalization.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/RoiPoolingConv.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/config.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/configDK.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/data_augment.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/data_generators.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/inception_resnet_v2.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/losses.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/pascal_voc_parser.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/resnet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/roi_helpers.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/simple_parser.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/vgg.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "keras_frcnn/xception.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "measure_map.py",
        "summary": "Key capabilities: get_map, format_img",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "run_DK_cellDet.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "splitCode/split.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_DK39.py",
        "summary": "Key capabilities: imread_fast, imwrite_fast, format_img_size, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_DK39_0.py",
        "summary": "Key capabilities: imread_fast, imwrite_fast, format_img_size, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_DK39_1.py",
        "summary": "Key capabilities: imread_fast, imwrite_fast, format_img_size, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_DK55_trainset.py",
        "summary": "Key capabilities: imread_fast, imwrite_fast, format_img_size, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_DK_May_2021.py",
        "summary": "Key capabilities: imread_fast, imwrite_fast, format_img_size, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_DK_May_2021_GPU0.py",
        "summary": "Key capabilities: imread_fast, imwrite_fast, pre_proc, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_DK_May_2021_GPU0_utest.py",
        "summary": "Key capabilities: imread_fast, imwrite_fast, pre_proc, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_DK_May_2021_GPU1.py",
        "summary": "Key capabilities: imread_fast, imwrite_fast, pre_proc, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_G_DK39.py",
        "summary": "Key capabilities: imread_fast, format_img_size, format_img_channels, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_frcnn_full_rev_DK39.py",
        "summary": "Key capabilities: imread_fast, format_img_size, format_img_channels, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_frcnn_DK.py",
        "summary": "Key capabilities: write_log",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_frcnn_DK_May21.py",
        "summary": "Key capabilities: write_log",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "DM_2D": {
    "description": "**Codebase Intelligence:** This C++ codebase contains 185 extracted functions across 55 files. Key extracted functionality includes: load_persistence_diagram, test_2d_func, save_image_data, get_date, __remove_dups, and more.",
    "insight": "This DM_2D repository is a sophisticated, high-performance computational topology project primarily focused on calculating persistent homology, particularly for two-dimensional data, likely leveraging Discrete Morse Theory for simplification. Its core capability lies in a distributed persistent homology algorithm (DIPHA), implemented in C++ and designed for parallel execution using MPI, making it suitable for analyzing large-scale datasets such as images or grid-based structures for feature extraction and topological data analysis. Users are intended to generate or prepare 2D input data, potentially using the provided Matlab scripts for synthetic data creation (e.g., ramp images, spheres, noisy data), and then feed this into the compiled C++ DIPHA engine to compute persistence diagrams, typically executed on a parallel computing environment. The Python files likely serve as a high-level interface or wrapper, orchestrating data input, execution of the C++ binary, and initial post-processing, while the Matlab scripts further aid in visualizing the computed persistence diagrams and analyzing intermediate results like discrete Morse edge information. Architecturally, the project's highlights include its C++ core with a strong emphasis on distributed computing through MPI, incorporating advanced column reduction algorithms (e.g., compute_reduced_columns, reduction_kernel) and custom, optimized data structures (like flat column stacks, heap columns, and write-once arrays) to efficiently process various complex types, notably weighted cubical complexes. The integration of the psort-1.0 library underscores its commitment to high-performance parallel sorting, critical for large-scale distributed computations, and the comprehensive Matlab utilities provide essential tooling for data preparation, testing, and result interpretation, forming a complete workflow for topological data analysis.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "DiMo2d/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/__init__func.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/build/CMakeFiles/3.16.3/CompilerIdC/CMakeCCompilerId.c",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/build/CMakeFiles/3.16.3/CompilerIdCXX/CMakeCXXCompilerId.cpp",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/build/CMakeFiles/FindMPI/test_mpi.cpp",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/mem_usage/mem_usage.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/driver/MersenneTwister.h",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/driver/psort_bench.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/funnel.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/funnel.timpl.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/psort.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/psort_alltoall.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/psort_merge.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/psort_samplesort.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/psort_seqsort.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/psort_splitters.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/psort_util.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/sort.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/externals/psort-1.0/src/sort.timpl.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/algorithms/compute_reduced_columns.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/algorithms/dualize_explicit_complex.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/algorithms/generate_unreduced_columns.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/algorithms/get_cell_to_filtration_map.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/algorithms/get_filtration_to_cell_map.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/algorithms/reduction_kernel.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/data_structures/distributed_vector.h",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/data_structures/flat_column_stack.h",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/data_structures/heap_column.h",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/data_structures/write_once_array_of_arrays.h",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/data_structures/write_once_column_array.h",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/element_distribution.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/file_types.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/globals.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/includes.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/inputs/abstract_weighted_cell_complex.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/inputs/full_rips_complex.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/inputs/sparse_rips_complex.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/inputs/weighted_cubical_complex.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/inputs/weighted_explicit_complex.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/macros.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/mpi_utils.h",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/include/dipha/outputs/save_persistence_diagram.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/create_noise_image_data.m",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/create_noisy_ramp_image_data.m",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/create_ramp_image_data.m",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/create_smooth_image_data.m",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/create_sphere.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/load_discrete_morse_edge_info.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/load_persistence_diagram.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/plot_midlife_persistence_diagram.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/plot_persistence_diagram.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/plot_persistence_diagram_density.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/save_distance_matrix.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/save_image_data.m",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/matlab/save_weighted_triangle_surface.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/src/create_phat_filtration.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/src/dipha.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/src/dualize.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-2d-thresh/src/full_to_sparse_distance_matrix.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/dipha-output-2d-ve-et-thresh/ComputeGraphReconstruction.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/matlab/load_persistence_diagram.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/matlab/save_image_data.m",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/paths_src/ComputePaths.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo2d/code/paths_src/Point.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "load_persistence_diagram.m",
        "summary": "Key capabilities: load_persistence_diagram",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "package_testing.py",
        "summary": "Key capabilities: test_2d_func",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "save_image_data.m",
        "summary": "Key capabilities: save_image_data",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "DM_3D": {
    "description": "**Codebase Intelligence:** This C++ codebase contains 282 extracted functions across 48 files. Key extracted functionality includes: load_persistence_diagram, test_3d_func, parallel_dipha_input, save_3d_image_data, split_domain, and more.",
    "insight": "The DM_3D repository is a sophisticated codebase designed for distributed and parallel topological data analysis (TDA) of 3D volumetric image data, primarily focusing on persistent homology. Its holistic capability is to extract robust topological features\u2014such as connected components, loops, and voids\u2014from complex 3D datasets by constructing and analyzing their underlying topological structures, represented as persistence diagrams. This project operates in the domain of scientific computing, image analysis, and advanced data exploration, likely for applications in fields like medical imaging, materials science, or astrophysics, where understanding the intrinsic shape and connectivity of data is critical. The repository is intended to be used as a hybrid system where MATLAB scripts (e.g., dipha_input_gen.m, parallel_dipha_input.m) serve as the primary user interface for data preparation, orchestrating distributed computations, and loading/visualizing persistence diagrams, while the heavy-duty computational tasks are handled by highly optimized C++ executables. Users would typically prepare their 3D image data in MATLAB, use provided scripts to generate input suitable for distributed persistent homology computation (possibly using a 'split-compute-merge' paradigm for large datasets, indicated by functions like split_domain and the merge module), execute the C++ components (e.g., DiMoSC.cpp, ComputeGraphReconstruction.cpp which might integrate with the PHAT library), and then return to MATLAB for post-processing and analysis of the resulting persistence diagrams and reconstructed graph structures. Key architectural and algorithmic highlights include a strong reliance on Persistent Homology (via the integrated PHAT library, offering various reduction algorithms and pivot column representations for efficiency), a clear design for distributed and parallel processing to scale to large 3D volumes (evidenced by 'dipha' integration and explicit 'merge' functionality), and the systematic construction and manipulation of simplicial complexes and discrete vector fields for accurately representing and analyzing the topology of the input data. The combination of efficient C++ for core algorithms and MATLAB for ease of use provides a powerful platform for advanced topological data analysis.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "DiMo3d/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/dipha-output/ComputeGraphReconstruction.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/matlab/dipha_input_gen.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/matlab/load_persistence_diagram.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/matlab/parallel_dipha_input.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/matlab/save_3d_image_data.m",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/merge/combine.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/merge/hash.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/merge/hash.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/merge/merge.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/merge/merge_graph.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/DiMoSC.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/DiscreteVField.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/Simplex.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/Simplicial2Complex.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/graph_spt.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/graph_spt_list.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/persistence.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/addons/alpha_3.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/addons/rips.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/fps.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/fps.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/algorithms/chunk_reduction.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/algorithms/row_reduction.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/algorithms/spectral_sequence_reduction.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/algorithms/standard_reduction.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/algorithms/twist_reduction.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/boundary_matrix.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/compute_persistence_pairs.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/helpers/dualize.h",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/helpers/misc.h",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/helpers/thread_local_storage.h",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/persistence_pairs.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/representations/abstract_pivot_column.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/representations/bit_tree_pivot_column.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/representations/full_pivot_column.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/representations/heap_pivot_column.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/representations/sparse_pivot_column.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/representations/vector_heap.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/representations/vector_list.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/representations/vector_set.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/include/phat/representations/vector_vector.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/src/benchmark.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/src/convert.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/src/info.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/src/phat.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/src/relative_example.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/src/self_test.cpp",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/phat/src/simple_example.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DiMo3d/code/spt_cpp/spt.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "dipha_input_gen.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "load_persistence_diagram.m",
        "summary": "Key capabilities: load_persistence_diagram",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "package_testing.py",
        "summary": "Key capabilities: test_3d_func",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "parallel_dipha_input.m",
        "summary": "Key capabilities: parallel_dipha_input",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "save_3d_image_data.m",
        "summary": "Key capabilities: save_3d_image_data",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "DM_Lucas": {
    "description": "**Codebase Intelligence:** This C++ codebase contains 364 extracted functions across 129 files. Key extracted functionality includes: parallel_dipha_input, function, function, function, func, and more.",
    "insight": "DM_Lucas is a sophisticated C++ codebase primarily focused on the scalable computation of persistent homology, a key tool in computational topology for analyzing the shape and structure of data. Its holistic capability lies in providing robust and efficient algorithms for extracting topological features from large datasets, addressing the significant computational challenges often associated with such analyses, particularly through its emphasis on parallel processing as indicated by functionality like \"parallel_dipha_input.\" This repository is intended to be used by researchers and practitioners in data science, scientific computing, and related fields to process complex data \u2013 such as point clouds or geometric structures \u2013 and derive topological insights like persistence diagrams. Users would likely compile and execute the project's tools, providing their data in a suitable format, possibly converting it to a structure compatible with the DIPHA algorithm, to leverage its parallel capabilities for high-performance topological data analysis. Architecturally, the project highlights a strong emphasis on parallel and distributed algorithms, underpinning its ability to handle large-scale computations. This suggests the implementation of optimized data structures for simplicial complexes, efficient boundary matrix computations, and reduction algorithms specifically adapted for parallel execution, likely supporting paradigms like message passing to facilitate distributed processing across multiple computational nodes, all contributing to its comprehensive and scalable approach to persistent homology.",
    "gpu_enabled": false,
    "files": []
  },
  "DM_MG": {
    "description": "Morse GAN",
    "insight": "This \"Morse GAN\" project represents a fascinating application of deep generative models to the domain of Morse code, likely aiming to synthesize or transform Morse signal representations. Its holistic capability revolves around leveraging Generative Adversarial Networks, specifically the Pix2Pix architecture, for image-to-image translation within the context of Morse code. This could involve tasks such as generating realistic Morse code waveforms or spectrograms from abstract representations, denoising noisy Morse signals, or translating between different visual or spectral forms of Morse code. The project is intended to be used in a two-stage process. First, the MATLAB scripts (create_dm_patches.m, create_dm_patches_p.m, create_dm_patches_p16.m) are executed to prepare the dataset. These scripts are crucial for converting raw Morse code data (which might be audio, text, or some other digital signal) into standardized \"patches\"\u2014likely image representations such as spectrogram snippets\u2014suitable for training a deep learning model. The different patch scripts likely correspond to variations in patch size or preprocessing techniques. Once these image patches are generated, the 'pix2pix.py' script is then employed to train a conditional GAN model using this prepared dataset. This Python script embodies the core deep learning component, defining the Pix2Pix network architecture, managing the training loop, and enabling the generation or translation capabilities. Key architectural and algorithmic highlights include the central role of Generative Adversarial Networks (GANs), specifically the Pix2Pix model, which is renowned for its efficacy in diverse image-to-image translation tasks. The use of MATLAB for intricate data preprocessing to create \"patches\" underscores the importance of domain-specific feature engineering, transforming abstract Morse code data into a visual format consumable by image-based neural networks. This combination of robust data preparation and a powerful generative model allows the project to explore the creation and manipulation of Morse code signals through a deep learning paradigm.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "create_dm_patches.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "create_dm_patches_p.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "create_dm_patches_p16.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "pix2pix.py",
        "summary": "Key capabilities: structural_loss, imageLoader, imageLoaderReturn, and more",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "DM_net": {
    "description": "**Codebase Intelligence:** This Python codebase contains 10111 extracted functions across 465 files. Key extracted functionality includes: readImagesTwice, readImagesTwice, clipped_zoom, imageLoader, readImagesTwice, and more.",
    "insight": "The 'DM_net' repository presents a sophisticated, hybrid Python and MATLAB codebase engineered for advanced deep learning-based image processing and computer vision tasks, especially those requiring the analysis or transformation of multiple image inputs. Its holistic capability is centered around the development, training, rigorous evaluation, and deployment of neural network models, particularly emphasizing the UNet architecture, for applications such as image segmentation, comparison, or feature extraction within domains like medical imaging, remote sensing change detection, or image enhancement, where precise image-to-image mapping or comparative analysis is critical. This repository is intended to be used as a complete workflow: initially, users would employ the `createData*.py` scripts to generate and preprocess image datasets, potentially incorporating augmentation techniques like `clipped_zoom`; subsequently, various deep learning models, including specialized UNet and multi-input configurations (e.g., `fullModel_2Img.py`), would be defined via `createNET*.py` and trained using the `fullModel*.py` scripts; post-training, model performance is quantitatively assessed through the MATLAB-based `eval_metric.m` and `thresh4eval.m` scripts for comprehensive evaluation; finally, the trained models are deployed for inference on new image data using `tsting.py` or `tsting_singleIP.py`. Key architectural and algorithmic highlights include a modular design that clearly separates network definition from full model implementations, robust support for multi-input image processing (evidenced by functions like `readImagesTwice`), and a comprehensive data pipeline that emphasizes augmentation and precise data preparation, all underpinned by a hybrid evaluation strategy that leverages both Python's deep learning capabilities and MATLAB's analytical tools for thorough quantitative assessment.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "createBlack.py",
        "summary": "Key capabilities: readImagesTwice",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createData.py",
        "summary": "Key capabilities: readImagesTwice, clipped_zoom, imageLoader",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createDataA.py",
        "summary": "Key capabilities: readImagesTwice",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createDataFT.py",
        "summary": "Key capabilities: readImagesTwice",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createDataTest.py",
        "summary": "Key capabilities: readImagesTwice, imageLoader",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createNETa.py",
        "summary": "Key capabilities: jaccard_distance, dmnet",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createNEt.py",
        "summary": "Key capabilities: jaccard_distance, dmnet",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createNEt_U.py",
        "summary": "Key capabilities: jaccard_distance, dmnetU",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createNEt_long.py",
        "summary": "Key capabilities: jaccard_distance, dmnetLong",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "data.py",
        "summary": "Key capabilities: adjustData, trainGenerator, validateGenerator, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "eval_metric.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fullModel.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fullModelA.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fullModelFT.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fullModelLong.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fullModel_2Img.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fullModel_U.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "modelUnet.py",
        "summary": "Key capabilities: jaccard_distance, unet",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "new_tst.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "thresh4eval.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "tsting.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "tsting_singleIP.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "emlddmm": {
    "description": "Expectation maximization algorithm for deformable registration with contrast prediction and optional slice positioning",
    "insight": "",
    "gpu_enabled": false,
    "files": [
      {
        "path": "curve_annotator.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/2D_metadata_setup.html",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/Mouse_Serial_Section_Example.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_modules/emlddmm.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_modules/histsetup.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_modules/index.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_modules/test_emlddmm.html",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_modules/transformation_graph.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_modules/transformation_graph_v01.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/_sphinx_javascript_frameworks_compat.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/basic.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/css/badge_only.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/css/theme.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/doctools.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/documentation_options.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/graphviz.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/jquery-3.6.0.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/jquery.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/js/badge_only.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/js/html5shiv-printshiv.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/js/html5shiv.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/js/theme.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/language_data.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/nbsphinx-code-cells.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/nbsphinx-gallery.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/pygments.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/searchtools.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/sphinx_highlight.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/underscore-1.13.1.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/_static/underscore.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/coordinate_systems.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/curve_annotator.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/documentation.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/emlddmm.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/example_rat_registration.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/examples.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/file_formats.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/genindex.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/histsetup.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/human_mri_example.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/index.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/input_specification.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/installation.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/introduction.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/modules.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/output_specification.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/py-modindex.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/search.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/searchindex.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/test_emlddmm.html",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/todo.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/transformation_graph.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/build/html/transformation_graph_v01.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/prepare_docs.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/source/Mouse_Serial_Section_Example.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/source/conf.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/source/human_mri_example.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "emlddmm.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "examples/human_mri_example/human_mri_example.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "examples/mouse_fmost_example/example_mouse_atlas_to_fmost_registration.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "examples/mouse_serial_section_example/Mouse_Serial_Section_Example.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "examples/rat_iDISCO_hemisphere_example/example_rat_registration.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "histsetup.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "manual_point_align.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "point_mapper.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scratch/scratch.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "tests/test_emlddmm.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "transformation_graph_v01.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/hackathon_fmost_demo_v00.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/hackathon_fmost_demo_v01_daniel.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/json_input_generator.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/point_mapping_script.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/run_emlddmm_marmoset_v02.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/run_emlddmm_marmoset_v03.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/run_emlddmm_mouse_787small_v00.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/run_emlddmm_mouse_skull_3d_atlas_v00.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/run_emlddmm_mouse_skull_3d_v00.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/run_emlddmm_mricloud.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/run_emlddmm_v00.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/run_emlddmm_v01.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/test_transformation_graph.ipynb",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "unsorted_examples/transformation_graph.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "vtkreader.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "GFP-Cell-Detection": {
    "description": "**Codebase Intelligence:** This MATLAB codebase contains 47 extracted functions across 29 files. Key extracted functionality includes: cell_filling, circfit, cluster, edge_layers, Euclidean_Signature, and more.",
    "insight": "This GFP-Cell-Detection repository offers a holistic biomedical image analysis capability, primarily focused on the robust detection and segmentation of GFP-labeled cells or vascular structures within microscopy images, operating within the domain of computational bioimaging. It is intended to be used as a multi-stage MATLAB pipeline for processing fluorescent microscopy data: users would typically initiate the process via 'main.m', 'gfp_main.m', or 'main_bam.m', potentially leveraging 'run_script.sh' for batch processing. The workflow begins with 'pre_proc.m' for initial image preparation, followed by sequential phases, such as 'phase1.m' and 'phase2.m', which orchestrate feature extraction, cell/vessel detection, and refinement. Subsequently, the system allows for rigorous performance evaluation using 'pr_recall.m' and 'weighted_pr_recall.m' against 'Ground_truth_labelling.m', enabling quantitative assessment of detection accuracy. Architecturally, the project highlights include a sophisticated Frangi filtering module ('frangi_filter_version2a') for enhancing ridge-like (vessel) or blob-like (cell) structures, offering both 2D and 3D capabilities with performance-optimized MEX files for Gaussian blurring and eigenvalue computation. Key algorithmic components further encompass 'circfit.m' and 'fit_circles.m' for identifying circular cell-like objects, 'cell_filling.m' for creating solid masks, 'cluster.m' for grouping detections, and 'Euclidean_Signature.m' for shape description, all contributing to a comprehensive system for automated biological object detection and analysis.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "GFP_Cell_Detection/Euclidean_Signature.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/Evaluation/Ground_truth_labelling.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/Evaluation/pr_recall.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/Evaluation/weighted_pr_recall.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/Vessels.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/cell_filling.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/circfit.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/cluster.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/edge_layers.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/eval_pts.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/fit_circles.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/FrangiFilter2D.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/FrangiFilter3D.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/Hessian2D.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/Hessian3D.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/eig2image.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/eig3volume.c",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/imgaussian.c",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/imgaussian.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/main_ridge.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/frangi_filter_version2a/nonmaxsup.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/gaussFun.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/gfp_main.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/main.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/main_bam.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/normal.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/phase1.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/phase2.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/pre_proc.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/residue.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/residue1.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/run_script.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/swap.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/weighted_pr_recall_gfp.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "GFP_Cell_Detection/zcc.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "run_script.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "Github_test": {
    "description": "",
    "insight": "This 'Github_test' repository, containing only a 'test.py' file, appears to serve as a foundational or experimental project, primarily designed for demonstrating, validating, or exploring basic functionalities within a GitHub ecosystem using Python. Its holistic capability, given the names, points towards a domain centered around software development lifecycle, CI/CD pipeline testing, or simply as a sandbox for learning GitHub features like repositories, commits, pushes, and potentially GitHub Actions. The repository is most likely intended to be used as a simple executable Python script, where 'test.py' would be run either locally from the command line (e.g., 'python test.py') or within a GitHub Actions workflow to observe its output or behavior. Its primary purpose would be to confirm environmental setups, test basic Python script execution within a given context, or serve as a minimalist example project for new GitHub users or contributors to understand repository mechanics. Without the specific content of 'test.py', it is impossible to identify any key architectural patterns or algorithmic highlights; the project's design is likely very straightforward, possibly involving simple print statements, basic logic, or calls to standard Python libraries, serving as a lightweight testbed rather than a complex application with sophisticated algorithms or a multi-tiered architecture.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "test.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "github_test2": {
    "description": "Just for Test",
    "insight": "This repository, named 'github_test2' and described as \"Just for Test\", serves primarily as an experimental sandbox for developers, demonstrating no specific holistic capability or domain beyond that of a general programming testbed. Its core capability lies in facilitating ad-hoc code development, testing, and potentially serving as a practice ground for Git and GitHub workflows. The project is intended to be used by developers for internal experimentation, writing and running small Python scripts to test ideas, features, or to observe the behavior of Git operations, such as how new files like 'new_file_after_pull.py' integrate after a pull. It is not designed for production deployment, end-user interaction, or integration into larger systems as a functional component. Architecturally, the repository appears to be a flat collection of independent Python scripts ('test.py', 'test1.py') rather than a structured application, suggesting a minimal or absent architectural pattern. Algorithmic highlights are undefined without code content, but given its testing nature, the files likely contain simple procedural logic, basic function definitions, or experimental code snippets for various small tasks or unit-like tests, without indicating any complex data structures or sophisticated algorithms.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "new_file_after_pull.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test1.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "HF_learn": {
    "description": "",
    "insight": "The HF_learn repository serves as an introductory, hands-on learning resource focused on the Hugging Face Transformers library, deeply entrenched in the domain of Natural Language Processing (NLP) and modern deep learning architectures. Its holistic capability is to demystify and provide practical application experience with state-of-the-art Transformer models for various NLP tasks, making complex AI accessible for learners and practitioners. The repository is intended to be used interactively, with users executing the provided Jupyter notebooks, Test_HF.ipynb and Transformer_HF_Tut.ipynb, as guided tutorials and executable code examples. This approach allows learners to progressively understand core concepts such as model loading, tokenization, pipeline usage, and potentially fine-tuning, thereby gaining direct, practical experience with the Hugging Face ecosystem in a step-by-step manner. From an architectural and algorithmic perspective, the project primarily highlights the efficient deployment and utilization of pre-trained Transformer models (like those from the BERT, GPT, or T5 families) via the Hugging Face library's high-level API. It emphasizes understanding how to leverage these complex deep learning architectures for practical NLP applications rather than focusing on the intricate low-level implementation details of the Transformer algorithm itself, making advanced NLP accessible for rapid experimentation and learning by abstracting away much of the underlying complexity.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "Test_HF.ipynb",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Transformer_HF_Tut.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "HG2PD": {
    "description": "**Codebase Intelligence:** This Python codebase contains 5043 extracted functions across 227 files. Key extracted functionality includes: Command, RequirementCommand, _build_session, parse_args, populate_requirement_set, and more.",
    "insight": "This 'HG2PD' repository is a sophisticated Python framework primarily focused on the orchestration and management of machine learning training processes, placing its core capability within the domain of MLOps and experimental ML development, as evidenced by the critical files train.py and train_prot.py. Its holistic capability lies in providing a comprehensive, programmatic environment for data scientists and ML engineers to define, execute, and oversee complex training workflows, likely encompassing various datasets, model architectures, hyperparameter configurations, and resource allocations. The repository is intended to be used predominantly through a robust command-line interface, leveraging functions like parse_args, Command, and RequirementCommand to enable users to precisely initiate training runs, configure experimental parameters, and manage intricate dependencies or specific operational requirements for their models and environments. The presence of a _build_session function further suggests a design capable of managing persistent connections, remote resources, or distributed training contexts, facilitating scalable and reproducible ML experiments. Architecturally, the project features a highly modular command-line framework for command dispatch and task execution, a dedicated system for explicit dependency or requirement management (illustrated by populate_requirement_set for defining environmental or data prerequisites), and sophisticated session management capabilities crucial for handling the lifecycle of training jobs. The inclusion of 'train_prot.py' points towards a structured, algorithmic approach to defining training protocols or experimental prototypes, allowing for advanced definition and execution of repeatable and controlled machine learning experiments, all within a substantial and feature-rich codebase.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "train.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_prot.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "Human_Tissue_Dev": {
    "description": "Development projects related to wet lab processing of human tissue",
    "insight": "",
    "gpu_enabled": false,
    "files": [
      {
        "path": "3_Staining/Code/Legacy/LegacyStainer.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "3_Staining/Code/Legacy/csViewer.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "3_Staining/Code/Legacy/radioButtonTest.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "3_Staining/Code/Legacy/size_test.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "3_Staining/Code/Legacy/widgetTime.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "3_Staining/Code/Stainer.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "3_Staining/Code/stainerControl.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/AISLER-2Layer/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/AISLER-4Layer/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/Alchitry_Au/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/JLCPCB_1-2Layer/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/JLCPCB_Multilayer/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/OshPark-2Layer/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/OshPark-4Layer/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/PCBWay/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/Sierra 10 layer Board/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/Sierra 12 layer Board/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/Sierra 2 layer Board/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/Sierra 4 layer Board/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/Sierra 6 layer Board/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/Sierra 8 layer Board/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "4_Coverslipping/PCB/coverslipper_board/lib/kicad_templates-master/UCDavis/meta/info.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "injDet": {
    "description": "**Codebase Intelligence:** This Python codebase contains 7660 extracted functions across 333 files. Key extracted functionality includes: makepath, abs__file__, removeduppaths, addbuilddir, _init_pathinfo, and more.",
    "insight": "The 'injDet' repository, short for \"Injection Detection,\" is a sophisticated Python codebase dedicated to identifying and mitigating code injection vulnerabilities within software systems. Its holistic capability centers around static or potentially dynamic analysis of code or a running environment to detect common injection flaws such as SQL injection, command injection, or cross-site scripting (XSS). The presence of numerous functions related to path manipulation and build system interaction, including makepath, abs__file__, removeduppaths, addbuilddir, and _init_pathinfo, suggests a strong emphasis on preparing and analyzing a codebase or development environment, implying a tool designed to integrate into a CI/CD pipeline or for dedicated security audits, focusing on the security domain of vulnerability assessment. Intended usage of this repository would involve pointing it at a target codebase or project to perform a deep, automated security analysis, likely configured through a build-like process to resolve dependencies and project structure, with the expectation of receiving a comprehensive report detailing potential injection vulnerabilities, their locations, and possibly severity. Architecturally, the project appears to follow a multi-stage analysis pipeline: 'phase1.py' likely handles the initial setup, environment preparation, source code ingestion, and preliminary parsing, utilizing the path-related utility functions to correctly resolve and access files. 'phase2_G.py' then probably implements a core analytical engine, focusing on graph-based analysis (e.g., Control Flow Graphs or Data Flow Graphs) to trace data propagation and identify potential taint sources and sinks within the code. Following this, 'phase2_R.py' would likely apply specific detection rules, heuristics, or a refinement process to the findings from 'phase2_G', potentially filtering false positives or categorizing vulnerabilities based on predefined patterns, leading to the final, actionable detection results. This staged approach allows for modularity, complexity management, and potentially different analytical strategies for various vulnerability types.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "phase1.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "phase2_G.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "phase2_R.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "makemore_Samik": {
    "description": "**Codebase Intelligence:** This Jupyter Notebook codebase contains 63 extracted functions across 2 files. Key extracted functionality includes: get_batch, estimate_loss, BigramLanguageModel, forward, generate, and more.",
    "insight": "The 'makemore_Samik' repository functions as a comprehensive, educational deep learning project primarily focused on character-level language modeling, drawing inspiration from Andrej Karpathy's popular 'makemore' series. Its holistic capability lies in providing a hands-on platform for understanding fundamental neural network concepts, from basic language model architectures to advanced training techniques and modern generative models within the domain of Natural Language Processing. Users are intended to engage with this repository primarily through its rich collection of Jupyter Notebooks, such as 'build_makemore_samik.ipynb' and 'gpt_dev_samik.ipynb', executing them sequentially to explore, learn, and experiment with different model implementations, observe the training process, and generate new character sequences. The 'Samik' suffix on many files suggests a personalized exploration and modification of the original educational series. Key architectural and algorithmic highlights include the implementation of Bigram Language Models as a foundational step, progression to Multi-Layer Perceptrons (MLP) for more complex pattern recognition, a deep dive into manual Backpropagation for understanding gradient flow, the integration of Batch Normalization for training stability, and the exploration of more advanced concepts like Wavenet-style architectures for sequence generation and foundational elements leading towards GPT-like transformer models, all demonstrated through core functions like get_batch for data loading, estimate_loss for evaluation, and forward/generate for model execution and inference.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "bigram_samik.py",
        "summary": "Key capabilities: get_batch, estimate_loss, BigramLanguageModel, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "build_makemore_backprop_ninja.ipynb",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "build_makemore_backprop_ninja_samik.ipynb",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "build_makemore_batchnorm.ipynb",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "build_makemore_batchnorm_Samik.ipynb",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "build_makemore_mlp.ipynb",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "build_makemore_mlp_samik.ipynb",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "build_makemore_samik.ipynb",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "gpt_dev.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "gpt_dev_samik.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "makemore.py",
        "summary": "Key capabilities: ModelConfig, NewGELU, CausalSelfAttention, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "makemore_part5_wavenet.ipynb",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "makemore_part5_wavenet_samik.ipynb",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "MakeUPMirror": {
    "description": "**Codebase Intelligence:** This Python codebase contains 4 extracted functions across 1 files. Key extracted functionality includes: LRN, call, get_config.",
    "insight": "The 'MakeUPMirror' project is a specialized computer vision codebase primarily focused on facial image processing, likely for virtual makeup application, facial attribute manipulation, or aesthetic transformation analysis. Its holistic capability revolves around deep learning for understanding and altering facial features, particularly in the context of makeup. The repository is intended to be used by researchers or developers to prepare facial image datasets using 'dataPrep.py' scripts (found in 'VMU' and 'YMU' directories for different configurations), train deep neural networks defined in 'network.py' (which incorporate techniques like Local Response Normalization, or LRN), and potentially employ metric learning strategies using 'tripletData.py' to learn robust feature embeddings. The 'discriminate.py' file suggests the possible involvement of a Generative Adversarial Network (GAN) for realistic image synthesis, allowing the system to apply or remove makeup, or transform facial attributes virtually. The training and evaluation workflow is supported by 'test.py', with configurable parameters managed via 'get_config'. Key architectural highlights include its reliance on deep learning (evidenced by LRN and network structures) combined with metric learning via triplet data generation, facilitating tasks requiring similarity-aware embeddings. The modular design, with separate data preparation scripts for VMU and YMU, indicates a flexible and organized approach to handling different datasets or experimental setups. Furthermore, the presence of 'image_save.m' suggests potential integration with MATLAB for specific image processing, analysis, or visualization tasks.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "LRN.py",
        "summary": "Key capabilities: LRN, call, get_config",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "VMU/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "VMU/dataPrep.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "VMU/tripletData.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "YMU/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "YMU/dataPrep.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "YMU/tripletData.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "custom_merge.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "dataPrep.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "discriminate.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "image_save.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "network.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "tetsing.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "tripletData.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "Marmoset-Brain-Atlas": {
    "description": "",
    "insight": "",
    "gpu_enabled": false,
    "files": [
      {
        "path": "src/ontology/run.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/scripts/run-command.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "Mediar_4_devBrain": {
    "description": "**Codebase Intelligence:** This Python codebase contains 132 extracted functions across 23 files. Key extracted functionality includes: public_paths_labeled, official_paths_labeled, official_paths_tuning, add_mapping_to_json, natural_sort_key, and more.",
    "insight": "This project is a sophisticated machine learning framework primarily designed for advanced image analysis, strongly suggesting applications in the biomedical domain, such as cellular imaging or medical diagnostics, given modules like 'CellAware' and specific image processing utilities. Its holistic capability lies in providing a comprehensive platform to develop, train, evaluate, and deploy deep learning models, particularly focusing on custom Transformer-based architectures named 'MEDIARFormer', alongside baseline models and ensemble prediction capabilities. Users are intended to engage with this repository by first preparing and organizing their labeled image datasets using utilities like 'generate_mapping.py' to establish path mappings; then, configuring their experiments through a `SetupDict.py` system; subsequently, initiating training runs via `main.py` or similar entry points, leveraging `core/MEDIAR/Trainer.py` or `core/Baseline/Trainer.py` with custom data transformations; evaluating model performance with `evaluate.py` using defined measures; and finally, performing predictions on new data via `predict.py`. Key architectural highlights include a modular design separating base trainers and predictors from their specific implementations, enabling flexible experimentation with models like the specialized 'MEDIARFormer' and robust ensemble methods. The data pipeline is highly customized, featuring domain-specific transformations (e.g., 'CellAware', 'LoadImage', 'NormalizeImage') within `train_tools/data_utils/custom`, supported by strong data management utilities for handling labeled paths and dataset splits effectively, all contributing to a robust and extensible system for image-based deep learning.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "SetupDict.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/BasePredictor.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/BaseTrainer.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/Baseline/Predictor.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/Baseline/Trainer.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/Baseline/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/Baseline/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/MEDIAR/EnsemblePredictor.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/MEDIAR/Predictor.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/MEDIAR/Trainer.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/MEDIAR/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/MEDIAR/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "core/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "evaluate.py",
        "summary": "Key capabilities: main",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "generate_mapping.py",
        "summary": "Key capabilities: public_paths_labeled, official_paths_labeled, official_paths_tuning, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "main.py",
        "summary": "Key capabilities: _get_setups",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "predict.py",
        "summary": "Key capabilities: main",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/__init__.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/data_utils/__init__.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/data_utils/custom/CellAware.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/data_utils/custom/LoadImage.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/data_utils/custom/NormalizeImage.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/data_utils/custom/__init__.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/data_utils/datasetter.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/data_utils/transforms.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/data_utils/utils.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/measures.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/models/MEDIARFormer.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/models/__init__.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_tools/utils.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "ML_Semantic-Segmenation-2020": {
    "description": "**Codebase Intelligence:** This Python codebase contains 21 extracted functions across 9 files. Key extracted functionality includes: readImagesTwice, readImagesTwice, readImagesTwice, readImagesTwice, soft_dice_loss, and more.",
    "insight": "The repository 'ML_Semantic-Segmenation-2020' is a Python-based machine learning project primarily focused on Semantic Segmentation, a computer vision task that involves classifying each pixel in an image to a corresponding class. The presence of 'soft_dice_loss' immediately signals its likely application in medical image segmentation or scenarios with significant class imbalance, where precise boundary detection and handling of foreground/background representation are critical. The multiple 'createDataX.py' files (e.g., createData.py, createData1.py, createData255.py, createDataTest.py) indicate a robust and potentially complex data preprocessing pipeline, likely dealing with different data formats, normalization techniques (like scaling to 0-1 or 0-255), and separate preparation for training and testing datasets. The repeated appearance of 'readImagesTwice' across functions suggests a common pattern of loading both input images and their corresponding ground-truth segmentation masks. 'createNetR.py' clearly houses the definition of the neural network architecture, which, for semantic segmentation, would typically be an encoder-decoder type like a U-Net. 'fullModel.py' integrates these components, responsible for the complete model training process. Finally, the 'tsting.py', 'tsting_PS.py', and 'tsting_single.py' files denote various scripts for evaluating the trained model, likely covering batch inference, performance scoring (PS), and individual image prediction, confirming a full development lifecycle from data to deployment.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "createData.py",
        "summary": "Key capabilities: readImagesTwice",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createData1.py",
        "summary": "Key capabilities: readImagesTwice",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createData255.py",
        "summary": "Key capabilities: readImagesTwice",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createDataTest.py",
        "summary": "Key capabilities: readImagesTwice",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "createNetR.py",
        "summary": "Key capabilities: soft_dice_loss, dice_loss, comb_loss, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "data.py",
        "summary": "Key capabilities: adjustData, trainGenerator, validateGenerator, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fullModel.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "tsting.py",
        "summary": "Key capabilities: sigmoid, testImages",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "tsting_PS.py",
        "summary": "Key capabilities: sigmoid, testImages",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "tsting_single.py",
        "summary": "Key capabilities: sigmoid, testImages",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "ML_Semantic_Segmenation_NMI": {
    "description": "**Codebase Intelligence:** This Jupyter Notebook codebase contains 1296 extracted functions across 123 files. Key extracted functionality includes: bfs, retrieve_path, cal_connectivity, cal_fp_tp, cal_fp_tp, and more.",
    "insight": "The ML_Semantic_Segmenation_NMI repository presents a comprehensive machine learning framework primarily dedicated to advanced semantic and instance segmentation within biomedical imaging, particularly targeting structures like cell nuclei and neuronal boutons, suggesting applications in neuroscience or cell biology research. This project's holistic capability encompasses the entire lifecycle of deep learning-based image analysis, from dataset generation and model training to sophisticated evaluation of segmentation quality. It is intended for researchers to develop, train, and benchmark deep learning models by first preparing specialized datasets using scripts like `createData*.py`, followed by training segmentation networks such as U-Net (`modelUnet.py`) or Mask R-CNN (`Mask_RCNN/mrcnn/model.py`). Inference and subsequent rigorous evaluation are performed using scripts like `tsting_*.py` and a dedicated suite of metric calculation modules, including `cal_F1.py`, `cal_connectivity.py`, and `dk_metric/image_metrics.py`, with `demo.ipynb` facilitating interactive exploration. Key architectural and algorithmic highlights include the deployment of established deep learning architectures like U-Net and Mask R-CNN, alongside robust image processing utilities for managing large image tiles (`Splitter.py`, `merge_tiles.py`). The project emphasizes advanced evaluation metrics, exemplified by graph-based connectivity analysis (`cal_connectivity.py` utilizing `bfs` and `retrieve_path`) and pixel-level true/false positive calculations (`cal_fp_tp`). Furthermore, the inclusion of C++ optimized components like `bouton_code/src/ComputeGraphReconstruction.cpp` and directories like \"DM_base\" and \"morse_code\" suggests an exploration of performance-critical graph algorithms or diffusion-map-based feature extraction, enriching the project's analytical depth for complex biological image understanding.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "ComputeScore/Injection Removal/ImageDiff.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "ComputeScore/Injection Removal/Splitter.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "ComputeScore/Injection Removal/merge_tiles.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "ComputeScore/cal_F1.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "ComputeScore/cal_connectivity.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "ComputeScore/dk_metric/__pycache__/image_metrics.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "ComputeScore/dk_metric/image_metrics.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "ComputeScore/main_180405.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "ComputeScore/main_backup.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/createData.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/createData1.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/createData255.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/createDataTest.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/createNetR.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/data.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/fullModel.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/modelUnet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/tsting.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/tsting_PS.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "DM_base/tsting_single.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/build/lib/mrcnn/__init__.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/build/lib/mrcnn/config.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/build/lib/mrcnn/model.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/build/lib/mrcnn/parallel_model.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/build/lib/mrcnn/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/build/lib/mrcnn/visualize.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/mrcnn/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/mrcnn/config.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/mrcnn/model.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/mrcnn/parallel_model.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/mrcnn/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/mrcnn/visualize.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/samples/demo.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/samples/nucleus/area_det.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/samples/nucleus/nucleus.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/samples/nucleus/nucleus0.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/samples/nucleus/nucleus1.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/samples/nucleus/nucleus2.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/samples/nucleus/nucleus_axonarbors.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/samples/nucleus/nucleus_dendrites.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/samples/nucleus/nucleus_passAxons.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Mask_RCNN/setup.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "bouton_code/bouton.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "bouton_code/bouton_x_process.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "bouton_code/gaussian.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "bouton_code/src/ComputeGraphReconstruction.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/GSIMPg2i.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/albu_dingkang.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/createNetR.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/dm.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/fullModel.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/gray_scale_simp.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/jp2compare.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/new_dm.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/new_dm_mba.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/new_dm_mba1.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/paths_src/ComputePaths.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/paths_src/Point.h",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/pytorch_zoo/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/pytorch_zoo/abstract_model.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/pytorch_zoo/inception.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/pytorch_zoo/resnet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/pytorch_zoo/unet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/remove_dup_edges.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/src/ComputeGraphReconstruction.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/src/DIMOgraph2image.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/src/base_triangulation_2d.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/tsting_single.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/tsting_single_cal.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/wrapper.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/wrapperALBU.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/wrapperALBU_PS.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/wrapperDM1.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/wrapperDMPP.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "morse_code/wrapperDMPP_MBA.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/albu_dingkang.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/augmentations/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/augmentations/composition.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/augmentations/functional.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/augmentations/transforms.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/config.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/create_spacenet_masks.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/dataset/__init__.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/dataset/abstract_image_provider.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/dataset/abstract_image_type.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/dataset/image_cropper.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/dataset/neural_dataset.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/dataset/raw_image.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/dataset/reading_image_provider.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/merge_preds.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/other_tools/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/other_tools/all_dems_min_max.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/other_tools/apls_tools.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/other_tools/gen_folds.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/other_tools/make_submission.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/other_tools/merge_preds.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/other_tools/sknw.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/fold4_gen.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/renamer.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/renamer1.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/scratch.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/scratch1.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/scratch_bw.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/scratch_dmIP.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/scratch_maskBase64.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/scratch_maskCopy.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/scratch_redWeb.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pre_processing/tif2rgb.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_utils/__init__.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_utils/callbacks.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_utils/concrete_eval.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_utils/eval.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_utils/loss.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_utils/train.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_utils/transforms.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/_utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/abstract_model.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/alexnet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/densenet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/_utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/backbone_utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/faster_rcnn.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/generalized_rcnn.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/image_list.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/keypoint_rcnn.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/mask_rcnn.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/roi_heads.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/rpn.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/detection/transform.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/googlenet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/inception.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/mnasnet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/mobilenet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/quantization/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/quantization/googlenet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/quantization/inception.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/quantization/mobilenet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/quantization/resnet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/quantization/shufflenetv2.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/quantization/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/resnet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/segmentation/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/segmentation/_utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/segmentation/deeplabv3.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/segmentation/fcn.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/segmentation/segmentation.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/shufflenetv2.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/squeezenet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/unet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/vgg.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/video/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/pytorch_zoo/video/resnet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/run_training.sh",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/skeleton.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/train.sh",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/train_4folds.sh",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/train_eval.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/wrapperALBU.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/wrapperALBU_PS.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "MoP_boundary": {
    "description": "**Codebase Intelligence:** This MATLAB codebase contains 5 extracted functions across 5 files. Key extracted functionality includes: borderDet, calculate_cortical_normal, d_runline, get_medial_axis, runline1.",
    "insight": "The MoP_boundary repository is a specialized MATLAB-based computational neuroanatomy pipeline designed for the automated segmentation and morphological analysis of cortical boundaries in brain histology, specifically targeting regions like the primary motor cortex (MoP) in Nissl-stained tissue sections. This toolset operates within the domain of neuroinformatics and biomedical image processing, allowing researchers to precisely map cortical thickness, trace laminar boundaries, and analyze structural transitions in brain slices. To use this repository, a researcher typically runs the master orchestration script, script_mopBorder_SB_May24.m, or utilizes Unsup_nissl_seg_old.m for unsupervised segmentation workflows, feeding in high-resolution histological images to output quantified cortical profiles. Structurally, the codebase is highly modular, relying on key geometric algorithms where borderDet.m first isolates the region of interest, get_medial_axis.m identifies the central topological skeleton of the cortical ribbon, calculate_cortical_normal.m computes perpendicular vectors across the cortical thickness to establish spatial trajectories, and runline1.m alongside d_runline.m performs directional line-scanning to sample staining intensities and detect layer transitions. By combining these geometric modeling techniques with intensity profiling, the pipeline delivers a robust framework for reconstructing cortical geometry and streamlining quantitative neuroanatomical studies.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "Unsup_nissl_seg_old.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "borderDet.m",
        "summary": "Key capabilities: borderDet",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "calculate_cortical_normal.m",
        "summary": "Key capabilities: calculate_cortical_normal",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "d_runline.m",
        "summary": "Key capabilities: d_runline",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "get_medial_axis.m",
        "summary": "Key capabilities: get_medial_axis",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "runline1.m",
        "summary": "Key capabilities: runline1",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "script_mopBorder_SB_May24.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "mouse-marmoset-comparison-app": {
    "description": "",
    "insight": "The mouse-marmoset-comparison-app is a specialized bioinformatics web platform engineered to facilitate comparative analysis between mouse and marmoset model organisms, bridging the gap between rodent and non-human primate research domains. It serves as an interactive explorer for visualizing and analyzing orthologous genes, brain regions, or physiological data points, leveraging a reactive Angular architecture coupled with high-performance Server-Side Rendering (SSR) driven by Express and Vite. To use this system, researchers browse and query specific biological entities through the frontend user interface, while developers run, test, and deploy the application using the integrated Angular CLI, utilizing the data service to fetch and process comparative datasets from external APIs or local stores. Architecturally, the repository represents a modern Angular setup featuring a hybrid or transitionary module-to-standalone layout, optimized with custom routing configurations, server-side bootloaders, and a dedicated HTTP data service layer that abstracts complex cross-species mappings to deliver fast, SEO-optimized, and performant comparisons directly to the user's browser.",
    "gpu_enabled": false,
    "files": [
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/@angular_common.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/@angular_common_http.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/@angular_core.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/@angular_forms.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/@angular_platform-browser.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/@angular_router.js",
        "summary": "API routes and backend controllers.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/chunk-D6PF24LJ.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/chunk-HNZBTQQY.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/chunk-I3APFXH3.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/chunk-RDHXSB74.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps/chunk-Z44F37CK.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/@angular_common.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/@angular_common_http.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/@angular_core.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/@angular_forms.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/@angular_platform-browser.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/@angular_platform-server_init.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/@angular_router.js",
        "summary": "API routes and backend controllers.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/@angular_ssr.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/@angular_ssr_node.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/chunk-6DU2HRTW.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/chunk-6XPXFVTG.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/chunk-BTYALREI.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/chunk-FITUF5IC.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/chunk-NFBLRUPM.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/chunk-T7ZA3WRX.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/chunk-WXMOVWUU.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/chunk-YQZF7T32.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/express.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": ".angular/cache/20.3.9/mouse-marmoset-comparison-app/vite/deps_ssr/xhr2-E5RTESSH.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/app.component.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/app.component.html",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/app.component.ts",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/app.config.server.ts",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/app.config.ts",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/app.module.ts",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/app.routes.server.ts",
        "summary": "API routes and backend controllers.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/app.routes.ts",
        "summary": "API routes and backend controllers.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/app.spec.ts",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/app/data.service.ts",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/index.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/main.server.ts",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/main.ts",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/server.ts",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/styles.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "mouse-muscle-atlas": {
    "description": "",
    "insight": "",
    "gpu_enabled": false,
    "files": [
      {
        "path": "docs/ontology-tree.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/owl_to_tree.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/ontology/run.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/scripts/run-command.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "MultiStreamCellSeg_4_devBrain": {
    "description": "**Codebase Intelligence:** This Python codebase contains 668 extracted functions across 42 files. Key extracted functionality includes: conv3x3, conv1x1, BasicBlock, Bottleneck, ResNet, and more.",
    "insight": "The MultiStreamCellSeg_4_devBrain repository is a specialized deep learning suite designed for high-throughput cell segmentation and classification in developmental brain imaging, offering robust tools to analyze complex cellular morphology and spatial distribution in dense tissue environments. To use this repository, researchers can run inference pipelines like predict.py or predict_unet_convnext.py to segment raw images, employ the comprehensive finetuning modules located in the fintune_on_newdataset directory to adapt pre-trained models to novel cell types, evaluate segmentation accuracy using compute_metric.py, and classify segmented cell populations through supervised and unsupervised classifiers. Architecturally, the framework stands out by blending modern ConvNeXt backbones with flexible UNet decoders and embedding a customized implementation of StarDist, which models cells as star-convex polygons and leverages non-maximum suppression alongside robust multi-ray geometric representations to achieve state-of-the-art segmentation in highly clustered cell populations.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "cellseg_time_eval.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "classification/train_classification.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "classification/unsup_classification.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "classifiers.py",
        "summary": "Key capabilities: conv3x3, conv1x1, BasicBlock, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "compute_metric.py",
        "summary": "Key capabilities: _intersection_over_union, _label_overlap, _true_positive, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "finetune_convnext_stardist.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/classifiers.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/compute_metric.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/fintune.ipynb",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/models/__init__.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/models/convnext.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/models/flexible_unet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/models/flexible_unet_convext.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/models/flexible_unet_convnext.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/overlay.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/__init__.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/big.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/bioimageio_utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/geometry/__init__.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/geometry/geom2d.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/matching.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/models/__init__.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/models/base.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/models/model2d.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/nms.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/rays3d.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/sample_patches.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fintune_on_newdataset/stardist_pkg/version.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "models/__init__.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "models/convnext.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "models/flexible_unet.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "models/flexible_unet_convext.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "models/flexible_unet_convnext.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "overlay.py",
        "summary": "Key capabilities: get_bounding_box, colorize, random_colors, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "predict.py",
        "summary": "Key capabilities: normalize_channel",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "predict_unet_convnext.py",
        "summary": "Key capabilities: normalize_channel",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "run.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/big.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/bioimageio_utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/geometry/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/geometry/geom2d.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/matching.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/models/__init__.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/models/base.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/models/model2d.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/nms.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/rays3d.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/sample_patches.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "stardist_pkg/version.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_convnext_hover..py",
        "summary": "Key capabilities: rm_n_mkdir, HoverDataset, valid_step, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "train_convnext_stardist.py",
        "summary": "Key capabilities: main",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "utils.py",
        "summary": "Key capabilities: normalize, fix_mirror_padding, get_bounding_box, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "utils_modify.py",
        "summary": "Key capabilities: normalize, fix_mirror_padding, get_bounding_box, and more",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "myBio": {
    "description": "**Codebase Intelligence:** This JavaScript codebase contains 11 extracted functions across 9 files. Key extracted functionality includes: get_cat, get_cat, get_largest_image, find_pdf, find_fig_bbox, and more.",
    "insight": "The myBio repository is a highly sophisticated, data-driven academic and professional portfolio platform designed to automatically compile, enrich, and present an individual's career achievements, research publications, and GitHub metrics. This codebase is intended to be used as a self-updating personal website; developers or researchers execute the extensive suite of Python utility scripts to fetch scholarly citations from Google Scholar, extract high-quality figures and layout bounding boxes from publication PDFs, build localized image databases, and categorize assets, while the React-based frontend serves an interactive timeline, experience log, and education profile to end-users. Key architectural and algorithmic highlights of this system include its dual-layer structure\u2014combining a rich preprocessing pipeline of Python scripts for heavy-duty PDF and metadata parsing with a lightweight React SPA\u2014and its integration of advanced image harvesting algorithms like find_fig_bbox and get_largest_image alongside a Gemini-powered serverless chat API that allows visitors to converse naturally with the portfolio data.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "api/chat.js",
        "summary": "API routes and backend controllers.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "api/repo_data.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "append_css.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "apply_categories.py",
        "summary": "Key capabilities: get_cat",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "apply_categories_arrays.py",
        "summary": "Key capabilities: get_cat",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "apply_choices.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "apply_hardware_images.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "build_image_db.py",
        "summary": "Key capabilities: get_largest_image",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "eslint.config.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "extract_figures.py",
        "summary": "Key capabilities: find_pdf, find_fig_bbox",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "extract_more_images.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "extract_neuro.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "extract_pdf_images.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fetch_scholar.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fix_build.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fix_data_final.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fix_posix.py",
        "summary": "Key capabilities: get_largest_image",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fix_pub_images.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fix_pubs.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fix_pubs.py",
        "summary": "Key capabilities: replace_image",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "gemini_search.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "generate_options.py",
        "summary": "Key capabilities: get_images",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "get_cites.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "index.html",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "match_all_images.py",
        "summary": "Key capabilities: get_import_var, clean_str",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "parse_local_scholar.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "parse_scholar.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "refactor_imports.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "refactor_projects.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scratch_update.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/App.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/App.jsx",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/About/About.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/About/About.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/CareerTimeline/CareerTimeline.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/CareerTimeline/CareerTimeline.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Education/Education.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Education/Education.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Education/EducationDetail.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Education/EducationDetail.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Experience/Experience.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Experience/Experience.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Experience/ExperienceDetail.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Experience/ExperienceDetail.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Footer/Footer.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Footer/Footer.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/GeminiAssistant/GeminiAssistant.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/GeminiAssistant/GeminiAssistant.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/GitHubStats/GitHubStats.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/GitHubStats/GitHubStats.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/GithubRepos/GithubRepos.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/GithubRepos/GithubRepos.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/GithubRepos/RepoFunctions.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/GithubRepos/RepoFunctions.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Hero/Hero.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Hero/Hero.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Navbar/Navbar.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Navbar/Navbar.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Projects/ProjectDetail.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Projects/ProjectDetail.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Projects/Projects.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Projects/Projects.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Publications/PublicationDetail.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Publications/PublicationDetail.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Publications/Publications.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Publications/Publications.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/ResearchGraph/ResearchGraph.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/ResearchGraph/ResearchGraph.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Skills/Skills.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/components/Skills/Skills.jsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/data/educationData.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/data/experienceData.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/data/imageDatabase.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/data/projectsData.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/data/projectsImageDatabase.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/data/publicationsData.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/data/skillsData.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/data/timelineData.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/index.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "src/main.jsx",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "update_db.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "update_db_names.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "update_from_tex.py",
        "summary": "Key capabilities: get_or_create_import",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "update_publications.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "update_pubs_from_resume.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "vite.config.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "Myelin-Conversion": {
    "description": "**Codebase Intelligence:** This MATLAB codebase contains 1 extracted functions across 1 files. Key extracted functionality includes: trfm2processDet.",
    "insight": "The Myelin-Conversion repository is a specialized MATLAB-based computational toolkit designed for the biomedical and neuroimaging domains, specifically focusing on the translation and processing of myelin-related structural metrics. The holistic capability of this codebase centers on converting raw anatomical transformation matrices or quantitative myelin signals into standardized, deterministic process detections, which are crucial for assessing axonal health, g-ratio calculations, and white matter integrity. In practice, this repository is intended to be used as a modular step within larger neuroimaging or histological analysis pipelines, where researchers can feed raw transform parameters or structural image tensors into the primary function, trfm2processDet, to output refined, processed data ready for deterministic modeling or morphological analysis. Architecturally, the project favors a lean, single-function design encapsulated in trfm2processDet.m, which optimizes algorithmic efficiency by focusing on the mathematical mappings, coordinate transformations, or thresholding steps required to convert raw acquisition or simulation outputs into actionable myelin process detection maps, facilitating seamless integration with existing MATLAB neuroimaging toolboxes.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "trfm2processDet.m",
        "summary": "Key capabilities: trfm2processDet",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "neetcode-gpt": {
    "description": "GPT built from scratch \u2014 assembled from my NeetCode ML course submissions",
    "insight": "The neetcode-gpt repository serves as a highly structured, educational codebase that systematically constructs the foundational blocks of deep learning and Generative Pre-trained Transformer models entirely from first-principles machine learning concepts. To use this repository effectively, a developer or student should progress sequentially through its three distinct tiers: beginning with the foundations directory to understand low-level mathematical implementations such as manual backpropagation, custom activation functions, and gradient descent algorithms using basic arrays; moving onto the data preprocessing utilities to grasp tokenization and text preparation; and finally, utilizing the modular implementations in the model directory, such as custom embeddings, batch normalization, and layer normalization layers, to construct and run training loops for neural networks. Architecturally, the project is brilliant in its incremental complexity, highlighting how basic mathematical models like linear regression and single-neuron classifiers scale into multi-layer perceptrons with custom weight initialization schemes, which are then combined with PyTorch abstractions and sophisticated normalization mechanisms crucial for the stability of modern attention-based architectures. By studying and executing these modular scripts, users gain an intimate, white-box understanding of how the foundational building blocks of deep learning transition from raw mathematical formulas into high-performance, deep generative architectures.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "data/__init__.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "data/nlp_preprocessing.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/activations.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/backprop.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/digit_classifier.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/gradient_descent.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/linear_regression.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/linear_regression_training.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/loss.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/mlp.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/multi_layer_backprop.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/neuron.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/pytorch_basics.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/sentiment.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/softmax.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/training_loop.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "foundations/weight_init.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "model/__init__.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "model/batch_normalization.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "model/embeddings.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "model/normalization.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "neetcode-submissions-samik1986": {
    "description": "My NeetCode.io problem submissions",
    "insight": "The neetcode-submissions-samik1986 repository represents a comprehensive personal reference suite and educational archive designed to master technical coding interviews through highly optimized solutions to core computer science problems. Covering essential domains like dynamic programming, tree traversals, linked list manipulation, and bitwise operations, the repository is primarily intended to be used as a learning companion and benchmark tool where developers can study, compare, and test implementations in both Python and C++ to build systemic algorithmic intuition. By exploring files like merge-k-sorted-linked-lists, longest-substring-without-duplicates, and implement-prefix-tree, users can analyze critical architectural patterns, including the use of divide-and-conquer strategies, optimized sliding window sliding boundaries, explicit memory management in C++, and modular tree node designs. Ultimately, this collection serves as a practical, multi-language guide that showcases how to transition from brute-force approaches to optimal time and space complexities, making it an invaluable asset for anyone refining their problem-solving and software engineering capabilities.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "Data Structures & Algorithms/add-two-numbers/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/anagram-groups/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/buy-and-sell-crypto/submission-2.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/climbing-stairs/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/count-paths/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/daily-temperatures/submission-0.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/depth-of-binary-tree/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/depth-of-binary-tree/submission-1.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/duplicate-integer/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/evaluate-reverse-polish-notation/submission-0.cpp",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/find-minimum-in-rotated-sorted-array/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/find-target-in-rotated-sorted-array/submission-1.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/house-robber-ii/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/house-robber/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/implement-prefix-tree/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/invert-a-binary-tree/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/is-anagram/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/is-palindrome/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/level-order-traversal-of-binary-tree/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/linked-list-cycle-detection/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/longest-common-prefix/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/longest-common-subsequence/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/longest-consecutive-sequence/submission-2.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/longest-repeating-substring-with-replacement/submission-2.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/longest-substring-without-duplicates/submission-8.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/longest-substring-without-duplicates/submission-9.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/lowest-common-ancestor-in-binary-search-tree/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/max-water-container/submission-1.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/median-of-two-sorted-arrays/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/merge-k-sorted-linked-lists/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/merge-two-sorted-linked-lists/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/middle-of-the-linked-list/submission-4.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/minimum-path-sum/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/minimum-stack/submission-0.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/number-of-one-bits/submission-0.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/palindrome-number/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/permutation-string/submission-0.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/pow-x-n/submission-0.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/products-of-array-discluding-self/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/remove-node-from-end-of-linked-list/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/reorder-linked-list/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/reorder-linked-list/submission-1.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/reverse-a-linked-list/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/reverse-bits/submission-0.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/reverse-integer/submission-1.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/reverse-string/submission-0.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/rotate-matrix/submission-0.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/same-binary-tree/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/same-binary-tree/submission-1.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/search-in-rotated-sorted-array-ii/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/single-number/submission-0.cpp",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/string-encode-and-decode/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/subtree-of-a-binary-tree/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/top-k-elements-in-list/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/trapping-rain-water/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/trapping-rain-water/submission-1.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/trapping-rain-water/submission-2.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/triangle/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/two-integer-sum/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/valid-binary-search-tree/submission-0.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "Data Structures & Algorithms/validate-parentheses/submission-4.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "NeuronBrowser": {
    "description": "",
    "insight": "",
    "gpu_enabled": false,
    "files": []
  },
  "ontology-editor": {
    "description": "",
    "insight": "",
    "gpu_enabled": false,
    "files": [
      {
        "path": "scripts/add_parent_relationships.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/ai_context.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/ai_create_changes.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/ai_create_changes_v2.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/ai_enhanced_prompt.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/ai_process_request.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/ai_query.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/bootstrap_species.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/generate_changelog.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/generate_embeddings.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/generate_owl.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/generate_tree.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/generate_wiki.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/import_brain_nomenclature.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/lateralize_relationships.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/lateralize_structures.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/move_structure.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/parse_ai_response_from_issue.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/parse_reorganization_request.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/process_batch_reorg.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/process_relationship_issue.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/process_removal_issue.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/process_structure_issue.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/qc_check.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/remove_lateralized_parents.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/semantic_search.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/sync_to_db.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/test_ai_process.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/test_enhanced_ai.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/validate.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/verify_relationship_consistency.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scripts/yaml_utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "samik1986": {
    "description": "Config files for my GitHub profile.",
    "insight": "The samik1986 repository is a specialized GitHub profile configuration project designed to serve as a dynamic, personalized digital portfolio and landing page that showcases the developer's technical skill set, open-source contributions, and professional background. Operating within the domain of personal branding and developer identity curation, its primary utility is realized when GitHub automatically renders the repository's contents directly on the owner's public profile page, providing a visually compelling overview for recruiters, collaborators, and the broader tech community. Architecturally, the repository leverages a lightweight, declarative structure centered around a Markdown document, which is often enriched with custom HTML, dynamic SVGs, and status badges from external APIs such as Shields.io or GitHub Readme Stats to pull real-time metrics. Furthermore, it may integrate automated continuous integration workflows via GitHub Actions that run on scheduled cron jobs to dynamically update content, such as recent blog posts, coding hours, or live repository statistics, ensuring the profile remains a fresh and accurate reflection of the developer's active contributions without requiring manual intervention.",
    "gpu_enabled": false,
    "files": []
  },
  "siamDA": {
    "description": "**Codebase Intelligence:** This Python codebase contains 10 extracted functions across 2 files. Key extracted functionality includes: MyLayer, build, call, compute_output_shape, euclidean_distance, and more.",
    "insight": "The siamDA repository provides a comprehensive deep learning framework for domain-adaptive face recognition and metric learning, specifically targeting Face Recognition Systems (FRS) through the integration of Siamese neural networks and Autoencoders. Operating in the domain of transfer learning, computer vision, and representation learning, the codebase enables researchers to learn domain-invariant and highly discriminative feature representations, which is particularly useful for challenging datasets like the IITM face database. To utilize this repository, a user first prepares and pre-processes face image datasets using data preparation scripts such as prepareDataFRS.py and siamDataIITM.py, then configures and builds the joint deep learning architecture via modelBuild.py, trains the model using the specialized training logic in siamese.py and ae.py (supported by data loaders in aeData.py), and finally evaluates performance and visualizes high-dimensional embeddings or reconstructed inputs through test.py and showFig.py. Architecturally, the project is characterized by its use of custom TensorFlow/Keras layers (such as MyLayer in customLayer.py and newLayer.py) which define specialized forward passes (call), weight initializations (build), and shape computations (compute_output_shape) to calculate customized distance metrics like Euclidean distance directly within the computational graph. By coupling unsupervised reconstruction objectives from autoencoders with supervised contrastive or distance-based losses from Siamese networks, the system enforces a latent space that is robust to domain shifts (such as variations in lighting, pose, or sensor quality) while maintaining high class separability, making it an advanced pipeline for robust, domain-adapted biometric verification.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "ae.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "aeData.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "customLayer.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "modelBuild.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "newLayer.py",
        "summary": "Key capabilities: MyLayer, build, call, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "prepareDataFRS.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "showFig.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "siamDataIITM.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "siamese.py",
        "summary": "Key capabilities: euclidean_distance, contrastive_loss, create_pairs, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "spine_registration": {
    "description": "registration for spine data from dong lab",
    "insight": "This spine_registration project provides a holistic capability for automated anatomical registration of spinal cord imaging data, primarily focusing on aligning individual subject scans to a standardized spinal cord atlas, likely leveraging specific anatomical landmarks or features. Hailing from the biomedical imaging and neuroscience domain, specifically for research from the Dong Lab, its purpose is to enable quantitative comparisons and analyses across different datasets by normalizing spinal cord anatomy. The repository is intended to be used by researchers and scientists who need to process spinal cord images; users would typically begin by interacting with the Jupyter notebooks, such as 'example.ipynb' and 'register_spine_v04_spinal_cord_4_atlas_to_reflection_points_lines.ipynb', to explore the methodology, visualize intermediate steps, and adapt parameters for specific datasets. For more automated or batch processing, the standalone Python scripts like 'spine_reg_pipeline.py' would then orchestrate the end-to-end registration workflow. Architecturally, the core algorithmic highlights, likely implemented in 'spine_reg.py', include feature-based registration approaches that use 'reflection points' and 'lines' for robust alignment, potentially serving as initial fiducial registrations before or in conjunction with intensity-based methods to map individual spinal cords to an atlas. The pipeline script would manage data loading, pre-processing, calling these registration functions, and post-processing steps, reflecting a structured approach to complex image alignment tasks, while 'docs/conf.py' suggests an intention for comprehensive documentation.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "docs/conf.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "source/notebooks/example.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "source/notebooks/register_spine_v04_spinal_cord_4_atlas_to_reflection_points_lines.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "source/scripts/spine_reg.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "source/scripts/spine_reg_pipeline.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "tf_lddmm": {
    "description": "**Codebase Intelligence:** This Python codebase contains 2 extracted functions across 1 files. Key extracted functionality includes: read_from_pickle.",
    "insight": "The tf_lddmm repository is a specialized suite designed for computational anatomy and medical image registration, focusing on Large Deformation Diffeomorphic Metric Mapping (LDDMM) implemented using TensorFlow. Its primary holistic capability is to facilitate diffeomorphic (topology-preserving and invertible) transformations of medical images or geometric data into a common reference or atlas space, which is crucial for group-level statistical analysis in neuroimaging and digital anatomy. To use this repository, a practitioner typically executes the main script transform2atlas.py or integrates its utilities into their pipeline, passing source datasets along with pre-computed deformation maps or velocity fields that are seamlessly loaded using the read_from_pickle function. Architecturally, the project relies on TensorFlow to accelerate computationally intensive tensor operations, including spatial grid generation, differential warping, and high-dimensional interpolation. Algorithmically, it highlights the power of LDDMM by mapping source structures to target templates along a geodesic flow, ensuring that the structural transformations remain physically realistic, smooth, and mathematically invertible.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "transform2atlas.py",
        "summary": "Key capabilities: read_from_pickle",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "um1_3d_volume": {
    "description": "**Codebase Intelligence:** This JavaScript codebase contains 266 extracted functions across 111 files. Key extracted functionality includes: create_line_volume, create_point_volume, create_reconstructed_line_volume, detect_3d_cells_blob, load_tiff_volume, and more.",
    "insight": "The 'um1_3d_volume' repository offers a sophisticated, polyglot suite of tools for advanced 3D volumetric data processing, analysis, and interactive visualization, primarily targeted at complex biological imaging applications, such as neurobiology, indicated by functionalities for neuronal detection and tracing. Its holistic capability encompasses the entire pipeline from raw TIFF volume ingestion and division, through intricate 3D reconstruction of lines, points, and entire volumes, to precise feature detection of cells and centroids within these volumes. The repository is intended to be used by researchers or image analysis professionals to process large-scale 3D microscopy datasets, reconstruct biological structures, model them as complex graphs (e.g., neuronal trees), perform topological analysis on these graphs using specialized MATLAB tools (cw_graph_tools), and then interactively visualize and proofread the results using a Napari-based viewer. Furthermore, the inclusion of robust deployment scripts for both cloud and on-premise GPU-accelerated environments, alongside a Django web application, suggests an intention for scalable, collaborative data management and a web-accessible platform for initiating analyses or reviewing outcomes. Key architectural highlights include a powerful MATLAB core for computationally intensive 3D image processing, blob detection, and graph-theoretic algorithms like Minimum Spanning Tree for complex structure analysis; a Python layer leveraging Napari for interactive multi-dimensional data visualization and real-time streaming, and Django for a full-fledged web interface providing a collaborative front-end. The reliance on JSON for graph data interchange between MATLAB and potentially other components, coupled with shell scripts for bare-metal GPU server setup and cloud/on-premise deployment, underlines a design for high-performance, distributed processing and a deployable, production-ready system for managing and exploring extensive 3D biological datasets.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "centroid_cw_processing/process_centroids.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "centroid_cw_processing/utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cloud_proofreading/bare_metal_setup/bootstrap_ubuntu_gpu.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cloud_proofreading/deploy_cloud.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cloud_proofreading/deploy_on_premise.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cloud_proofreading/napari_stream/entrypoint.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cloud_proofreading/napari_stream/unified_viewer.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "create_3d_lines.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "create_line_volume.m",
        "summary": "Key capabilities: create_line_volume",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "create_point_volume.m",
        "summary": "Key capabilities: create_point_volume",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "create_reconstructed_line_volume.m",
        "summary": "Key capabilities: create_reconstructed_line_volume",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/add_tree.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/create_forest_from_json.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/delete_tree.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/edit_cw_json.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/edit_graph.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/export_forest_to_json.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/find_loops.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/find_mst.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/load_cw_json.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/plot_cw_complex.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "cw_graph_tools/save_cw_json.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "detect_3d_cells_blob.m",
        "summary": "Key capabilities: detect_3d_cells_blob, load_tiff_volume, visualize_detections",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "detect_3d_cells_centroids.m",
        "summary": "Key capabilities: detect_3d_cells_centroids",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "detect_neurons_napari.py",
        "summary": "Key capabilities: detect_neurons_napari",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "divide_tiff.py",
        "summary": "Key capabilities: divide_tiff_into_quadrants",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/django_webapp/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/django_webapp/asgi.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/django_webapp/settings.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/django_webapp/urls.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/django_webapp/wsgi.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/manage.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/autocomplete.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/base.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/changelists.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/dark_mode.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/dashboard.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/forms.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/login.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/nav_sidebar.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/responsive.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/responsive_rtl.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/rtl.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/unusable_password_field.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/vendor/select2/select2.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/vendor/select2/select2.min.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/css/widgets.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/SelectBox.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/SelectFilter2.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/actions.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/admin/DateTimeShortcuts.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/admin/RelatedObjectLookups.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/autocomplete.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/calendar.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/cancel.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/change_form.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/core.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/filters.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/inlines.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/jquery.init.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/nav_sidebar.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/popup_response.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/prepopulate.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/prepopulate_init.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/theme.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/urlify.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/jquery/jquery.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/jquery/jquery.min.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/af.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ar.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/az.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/bg.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/bn.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/bs.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ca.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/cs.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/da.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/de.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/dsb.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/el.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/en.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/es.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/et.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/eu.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/fa.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/fi.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/fr.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/gl.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/he.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/hi.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/hr.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/hsb.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/hu.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/hy.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/id.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/is.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/it.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ja.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ka.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/km.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ko.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/lt.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/lv.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/mk.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ms.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/nb.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ne.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/nl.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/pl.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ps.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/pt-BR.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/pt.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ro.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/ru.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/sk.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/sl.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/sq.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/sr-Cyrl.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/sr.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/sv.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/th.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/tk.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/tr.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/uk.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/vi.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/zh-CN.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/i18n/zh-TW.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/select2.full.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/select2/select2.full.min.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/xregexp/xregexp.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/admin/js/vendor/xregexp/xregexp.min.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dash_table/async-export.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dash_table/async-highlight.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dash_table/async-table.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dash_table/bundle.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dash_table/demo.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/async-datepicker.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/async-dropdown.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/async-graph.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/async-highlight.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/async-markdown.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/async-mathjax.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/async-slider.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/async-upload.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/dash_core_components-shared.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/dash_core_components.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/dcc/proptypes.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/polyfill@7.12.1.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/prop-types@15.8.1.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/prop-types@15.8.1.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react-dom@16.14.0.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react-dom@16.14.0.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react-dom@18.2.0.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react-dom@18.2.0.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react-dom@18.3.1.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react-dom@18.3.1.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react@16.14.0.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react@16.14.0.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react@18.2.0.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react@18.2.0.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react@18.3.1.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/deps/react@18.3.1.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/dash/html/dash_html_components.min.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/staticfiles/dash/component/plotly/package_data/plotly.min.js",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/viewer/__init__.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/viewer/admin.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/viewer/apps.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/viewer/dash_apps.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/viewer/migrations/__init__.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/viewer/models.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/viewer/tests.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/viewer/urls.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "django_webapp/viewer/views.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docker_cell_detection/run_centroids.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docker_cell_detection/run_centroids_DAPI.py",
        "summary": "API routes and backend controllers.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docker_cell_detection/run_centroids_FP.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docker_cell_detection/run_pipeline.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docker_cell_detection/run_pipeline_parallel.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docker_cell_detection/scale_swc.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docker_cell_detection/visualize_3d.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docker_cell_detection/visualize_napari.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "downsample_volumes.m",
        "summary": "Key capabilities: downsample_volumes, save_nrrd_volume",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "eval_full_volume_line_endpoints.m",
        "summary": "Key capabilities: find_extremes_2d, rotate_and_unpad, crop_volume",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "extract_endpoints_from_stereo.m",
        "summary": "Key capabilities: extract_endpoints_from_stereo",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "extract_subset.m",
        "summary": "Key capabilities: extract_subset",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_cpp_pipeline/Filters2D.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_cpp_pipeline/Filters2D.hpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_cpp_pipeline/Geometry3D.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_cpp_pipeline/Geometry3D.hpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_cpp_pipeline/TiffIO.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_cpp_pipeline/TiffIO.hpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_cpp_pipeline/main.cpp",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/backproject_skeletons.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/compute_mip_pictures.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/compute_skeleton.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/display_subvolume_overlay.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/display_volume_skeleton.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/export_cw_complex_2d.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/export_cw_complex_json.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/extract_endpoints_silent.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/save_multipage_tiff.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/save_nrrd_volume.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/save_overlay.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/skel_to_graph_2d.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/swap_pts.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_modules/triangulate_endpoints_fast.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_pipeline_smoketest.m",
        "summary": "Key capabilities: compute_mip_pictures, compute_skeleton, save_overlay, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "fp_volume_pipeline.m",
        "summary": "Key capabilities: fp_volume_pipeline",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "frangi_filter_version2a/FrangiFilter2D.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "frangi_filter_version2a/FrangiFilter3D.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "frangi_filter_version2a/Hessian2D.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "frangi_filter_version2a/Hessian3D.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "frangi_filter_version2a/eig2image.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "frangi_filter_version2a/eig3volume.c",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "frangi_filter_version2a/eig3volume.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "frangi_filter_version2a/imgaussian.c",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "frangi_filter_version2a/imgaussian.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "generate_ppt.py",
        "summary": "Key capabilities: get_flowchart_image, create_presentation",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "master_eval_modular.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "master_pipeline_q1.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "master_pipeline_short.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/create_synthetic_data.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/create_tutorial_data.py",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/cw_extraction.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/detect_somas.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/generate_gif.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/pipeline/config.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/pipeline/core/cell_detection.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/pipeline/core/graph_export.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/pipeline/core/neurite_detection.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/pipeline/main.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/pipeline/run_pipeline.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/pipeline/test_frangi.py",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/pipeline/visualization/flex_visualizer.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/pipeline/visualization/proofreader.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/process_neurites.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/run_linux.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/run_pipeline.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/tutorial.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/utils/__init__.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neurite_detection/utils/viewer.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neuron_detection/__init__.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neuron_detection/graph_utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neuron_detection/io_utils.py",
        "summary": "Utility and helper functions.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neuron_detection/main.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neuron_detection/processing.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neuron_detection/visualization.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neuron_detection/visualize_swc_volume.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neuron_processing/zernike_pipeline/cluster_ch03_zernike.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "neuron_processing/zernike_pipeline/napari_viewer.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "overlay_lines.m",
        "summary": "Key capabilities: overlay_lines",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "overlay_volumes.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "process_vesselness_3d.m",
        "summary": "Key capabilities: process_vesselness_3d, compute_mip_angle, backproject_to_3d, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "proofreading/launcher.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "proofreading/napari_proofreader.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "proofreading/run_proofreader.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "reconstruct_endpoints_stereo.m",
        "summary": "Key capabilities: reconstruct_endpoints_stereo",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "reconstruct_line_from_endpoints.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "reconstruct_single_point.m",
        "summary": "Key capabilities: reconstruct_single_point",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "reconstruct_volume.m",
        "summary": "Key capabilities: reconstruct_volume",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "run_script.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "scratch.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "show_geom.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "show_geom2.m",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "skel_master_eval_modular.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "take_volume_pictures.m",
        "summary": "Key capabilities: take_volume_pictures",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_info.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_json_export.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_plot.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_single_point_stereo.m",
        "summary": "Key capabilities: test_single_point_stereo, create_point_volume, reconstruct_single_point, and more",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_skel_to_graph.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "test_stereo_line_cv_toolbox.m",
        "summary": "Contains testing or evaluation scripts.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "visualize_3d_cells.m",
        "summary": "Key capabilities: visualize_3d_cells",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "visualize_full_cells_subset.m",
        "summary": "Key capabilities: visualize_full_cells_subset",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "visualize_napari_csv.py",
        "summary": "Key capabilities: load_csv_points, visualize_napari_csv",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "visualize_subvol_napari.py",
        "summary": "Key capabilities: visualize_subvol",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "volshow_cells_subset.m",
        "summary": "Key capabilities: volshow_cells_subset",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "webapp/app.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "webapp/static/main.js",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "webapp/static/style.css",
        "summary": "Frontend layout and styling templates.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zarr_viewer/convert_tiff_to_ome_zarr.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zarr_viewer/frontend/eslint.config.js",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zarr_viewer/frontend/src/App.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zarr_viewer/frontend/src/App.tsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zarr_viewer/frontend/src/index.css",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zarr_viewer/frontend/src/main.tsx",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zarr_viewer/frontend/vite.config.ts",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zarr_viewer/launch.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zarr_viewer/serve_zarr.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zernike_feature_pipeline_package/batch_process_zernike.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zernike_feature_pipeline_package/build_zernike_filter_gpu.py",
        "summary": "User interface components and rendering logic.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zernike_feature_pipeline_package/launcher.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zernike_feature_pipeline_package/run_pipeline.sh",
        "summary": "Shell script for automation or deployment.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zernike_feature_pipeline_package/zernike_basis.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zernike_feature_pipeline_package/zernike_basis_gpu.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zernike_feature_pipeline_package/zernike_radial.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "zernike_feature_pipeline_package/zernike_spherical.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "wiNN": {
    "description": "Initial Commit",
    "insight": "The 'wiNN' project, characterized by its 'Initial Commit' and core files model.py, trainData.py, and wiNN.py, holistically represents a foundational machine learning initiative squarely within the domain of deep learning and neural networks. The name 'wiNN' itself subtly suggests a specialized focus, potentially indicating a \"Windowed Neural Network\" for sequential data processing, a \"Weighted Neural Network\" emphasizing particular features or connections, or even a system designed for competitive \"winning\" in a particular context like game AI. This repository is intended to be used by first leveraging trainData.py to generate, load, and preprocess the specific dataset required for the model. Following data preparation, wiNN.py acts as the primary orchestrator, initiating the training process. It instantiates the neural network architecture meticulously defined within model.py, feeds it the prepared data from trainData.py, manages hyperparameters, executes the optimization algorithm, and ultimately trains the model, likely saving its state for future inference or further analysis. Architecturally, model.py is the cornerstone, encapsulating the entire neural network's design, including its layers, activation functions, and overall topology. trainData.py emphasizes the crucial role of data engineering, ensuring the model receives appropriately structured and cleaned input. Finally, wiNN.py serves as the operational hub, tying these components together by implementing the training loop, defining the loss function, and managing the chosen optimization strategy to facilitate the learning process.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "model.py",
        "summary": "Defines deep learning model architectures or networks.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "trainData.py",
        "summary": "Handles model training routines and loops.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "wiNN.py",
        "summary": "Key capabilities: wt, y_hat",
        "is_gpu": false,
        "functions": []
      }
    ]
  },
  "yolo_model": {
    "description": "Object segmentation + quantification from microscopy images",
    "insight": "This repository offers a holistic capability for automated object segmentation and quantification specifically tailored for microscopy images, venturing into the critical domain of bioimage analysis where precise detection of structures within complex, often volumetric, data is paramount for scientific discovery. The project's deep specialization in 3D object detection, as evidenced by files like 'yolo_3d.ipynb' and 'yolo_help_3D.py', positions it as a powerful tool for analyzing 3D microscopy datasets, enabling researchers to count, locate, and measure objects in three dimensions. The repository is primarily intended to be used by researchers and developers who need to apply state-of-the-art object detection techniques to their microscopy data. Users are expected to leverage the interactive Jupyter notebooks, such as 'yolo_preprocessing.ipynb' for preparing their image data, 'load_h5_data.ipynb' for handling common data formats, and 'yolo_3d.ipynb' or 'yolo_example_3D.ipynb' for training 3D YOLO models or performing inference on new images. The utility scripts in 'docs/scripts/' offer modular functionalities like 'yolo_tiles.py' for managing large image sizes, 'yolo_post_help.py' for refining detection outputs, and 'yolo_avg_prec.py' for robust model evaluation, which can be integrated into custom pipelines or executed independently. Key architectural and algorithmic highlights include the robust adaptation of the YOLO algorithm for 3D volumetric data, a significant advancement for microscopy; the pragmatic handling of high-resolution images through a tiling strategy ('yolo_tiles.py') to overcome memory constraints; and a comprehensive pipeline encompassing preprocessing, training, inference, and rigorous evaluation using metrics like average precision, ensuring a complete and scientifically sound framework for object quantification in biological imaging.",
    "gpu_enabled": false,
    "files": [
      {
        "path": "docs/conf.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/notebooks/load_h5_data.ipynb",
        "summary": "Data loading and preprocessing pipeline.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/notebooks/yolo_3d.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/notebooks/yolo_3d_scratch.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/notebooks/yolo_example.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/notebooks/yolo_example_3D.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/notebooks/yolo_extra_comp.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/notebooks/yolo_pipeline.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/notebooks/yolo_preprocessing.ipynb",
        "summary": "Jupyter Notebook for exploratory data analysis or experiments.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/scripts/ds_yolo_output.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/scripts/yolo_avg_prec.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/scripts/yolo_help.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/scripts/yolo_help_3D.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/scripts/yolo_post_help.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      },
      {
        "path": "docs/scripts/yolo_tiles.py",
        "summary": "Core application logic or configuration.",
        "is_gpu": false,
        "functions": []
      }
    ]
  }
};