---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 4
# Image for the project card
cardImage:
  { src: "../images/intel-clouds/intel-cloud.jpeg", alt: "Intel® Volumetric Cloud Library" }
# The buttons that will show up on the project card
buttons: [{ text: "DOWNLOADS PAGE", url: "intel-cloud-library", type: "primary" }]
# The description of the project card
description: "A collection of 30 VDB cloud assets, including both dense and sparse clouds, at resolutions ranging from quite small (< 1 MB) to quite large (> 8 GB)."
descriptionLinks: { text: "", url: "" }

############################################################
# Article / Blog View
############################################################
# The layout file the blog page is using
layout: "../../layout/BlogPostLayout.astro"
# Title of the blog page
title: "Intel® Volumetric Cloud Library"
# Used mainly for the Breadcrumbs
titleAlt: "Intel Volumetric Cloud Library"
# The url of the blog page
url: "intel-cloud-library"
# The cover image of the blog page
coverImage: { src: "../images/intel-clouds/intel-cloud.jpeg", alt: "Intel cloud library" }
# The image caption under the cover image
imageCaption: {
    # Text is separated by sections to allow links to be added in. <text> <link> <text>
    text:
      [
        "A collection of 30 VDB cloud assets: 5 different clouds, each in a dense version and a sparse version, and each of these at 3 different resolutions. The resolutions range from the very small (<1MB) for quick testing, through medium for typical film asset size, to the relatively large (>8GB) for scalability testing.",
      ],
    # Sample text links that would go in the caption if any. If not remove them like this:
    # {
    #   text: "",
    #   link: ""
    # }
    textLinks: [{ text: "", link: "" }, { text: "", link: "" }],
  }

# The extra image gallery
# [] []
# [] []
otherImages: []

# The download section of the blog
downloadSection: {
    title: "Downloadable Packages:",
    subtext: "By downloading any of these files, you agree to the terms of the license linked below.",
    licenseButtonText: "ASWF Asset License",
    licenseButtonLink: "intel-cloud-library/intel-volumetric-clouds-library",
    # This header is only if the table needs a header < Please see Intel page for example of that >
    tableHeader: "VOLUMETRIC CLOUDS",

    # The download links and button setup for the download table.
    downloads:
      [
        {
          buttonText: "DOWNLOAD",
          downloadUrl: "https://dpel-assets.aswf.io/intel-cloud-library/IntelVolumetricClouds_full.zip",
          size: "34.4 GB (38.1 GB unpacked)",
          description: "",
          descriptionBold: "All",
          extraDescription: " the clouds. 30 VDB files.",
          type: "primary",
        },
        {
          buttonText: "DOWNLOAD",
          downloadUrl: "https://dpel-assets.aswf.io/intel-cloud-library/IntelVolumetricClouds_dense.zip",
          size: "27.7 GB (30.7 GB unpacked)",
          description: "The ",
          descriptionBold: "dense",
          extraDescription: " clouds, at all 3 sizes. 15 VDB files.",
          type: "primary",
        },
        {
          buttonText: "DOWNLOAD",
          downloadUrl: "https://dpel-assets.aswf.io/intel-cloud-library/IntelVolumetricClouds_sparse.zip",
          size: "6.63 GB (7.40 GB unpacked)",
          description: "The ",
          descriptionBold: "sparse",
          extraDescription: " clouds, at all 3 sizes. 15 VDB files.",
          type: "primary",
        },
        {
          buttonText: "DOWNLOAD",
          downloadUrl: "https://dpel-assets.aswf.io/intel-cloud-library/IntelVolumetricClouds_large.zip",
          size: "33.8 GB (37.4 GB unpacked)",
          description: "The clouds at a ",
          descriptionBold: "large",
          extraDescription: " resolution. 10 VDB files.",
          type: "primary",
        },
        {
          buttonText: "DOWNLOAD",
          downloadUrl: "https://dpel-assets.aswf.io/intel-cloud-library/IntelVolumetricClouds_medium.zip",
          size: "534 MB (650 MB unpacked)",
          description: "The clouds at a ",
          descriptionBold: "medium",
          extraDescription: " resolution. 10 VDB files.",
          type: "primary",
        },
        {
          buttonText: "DOWNLOAD",
          downloadUrl: "https://dpel-assets.aswf.io/intel-cloud-library/IntelVolumetricClouds_small.zip",
          size: "10.1 MB (14.1 MB unpacked)",
          description: "The clouds at a ",
          descriptionBold: "small",
          extraDescription: " resolution. 10 VDB files.",
          type: "primary",
        },
      ],
  }
---
