---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 8
# Image for the project card
cardImage: {
  src: "../images/alab/alab-image001.gif",
  alt: "ALAB trailer main image",
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "alab",
    type: "primary"
  },
  {
    text: "GITHUB REPOSITORY",
    url: "https://github.com/DigitalProductionExampleLibrary/ALab",
    type: "primary"
  },
]
# The description of the project card
description: "A full production scene with over 300 assets and two characters, with looping animation in the first open-sourced USD scene and shot context from a studio. Supplied as three separate downloads: the full production scene, high-quality textures, and baked procedural fur and fabric for the animated characters. For more information, visit the "
descriptionLinks: {
  text: "Netflix Animation Studios ALab website.",
  url: "https://animallogic.com/technology/alab/"
}

############################################################
# Article / Blog View
############################################################

# The layout file the blog page is using
layout: "../../layout/BlogPostLayout4.astro"
# Title of the blog page
title: "Netflix Animation Studios ALab - USD Production Scene"
# Used mainly for the Breadcrumbs
titleAlt: "ALab"
# The url of the blog page
url: "alab"
# The cover image of the blog page
coverImage: {
  src: "../images/alab/DPELMainPage.jpg",
  alt: "ALAB main image",
}
# The image caption under the cover image
imageCaption: {
  # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: [
    "A full production scene created by Netflix Animation Studios for exploration by the wider community to be used in demonstrations, training material, and in the testing of USD support across software and pipeline. ALab has over 300 assets, complete with high-quality textures and two characters with looping animation in shot context, expanding on the static scenes released to date. Supplied as separate downloads: the asset structure (available ", 
    " as well), geometry / rigs / shaders assets, high-quality textures, and baked procedural fur and fabric for the animated characters. For more information, visit the ",
    ", read the ",
    ", or join us on ", 
    "."
  ],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: [{
    text: "in GitHub",
    link: "https://github.com/DigitalProductionExampleLibrary/ALab"
  },
  {
    text: "Netflix Animation Studios ALab website",
    link: "https://animallogic.com/technology/alab/"
  },
  {
    text: "technical documentation",
    link: "https://digitalproductionexamplelibrary.github.io/ALab/main"
  },
  {
    text: "Slack.",
    link: "https://academysoftwarefdn.slack.com/channels/C03S4QB8N04"
  }]
}

# The extra image gallery
# [] []
# [] []
otherImages: ["../images/alab/DPELDownload1.jpg", "../images/alab/DPELDownload2.jpg", "../images/alab/DPELDownload3.jpg", "../images/alab/DPELDownload4.jpg"]

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "By downloading any of these files, you agree to the terms of the license linked below.",
  licenseButtonText: "ASWF Asset License",
  licenseButtonLink: "alab/alab-license",
  # This header is only if the table needs a header < Please see Intel page for example of that >
  downloadTableHeader: "",

  # The download links and button setup for the download table.
  downloads: [{
    buttons: [
      {
        text: "GITHUB REPOSITORY",
        url: "https://github.com/DigitalProductionExampleLibrary/ALab",
        type: "primary",
      },
      {
        text: "DOWNLOAD",
        url: "https://github.com/DigitalProductionExampleLibrary/ALab/archive/refs/tags/v2.3.0.zip",
        type: "primary",
      }
    ],
    size: "294 MB",
    description: "",
    descriptionBold: "Asset Structure - v.2.3.0",
    extraDescription: "Main asset structure for the ALab showcasing how all assets relate to each other through USD composition arcs. This is purely the USD structure linking all files, and does not include any geometry, shaders or lights.  Also includes a Gaussian Splat representation of the scene. Clone the GitHub repository, or download the Zip artifact from the GitHub Release.",
  },
  {
    buttons: [{
      text: "DOWNLOAD",
      url: "https://dpel-assets.aswf.io/usd-alab/alab-techvars.v2.2.0.zip",
      type: "primary",
    }],
    size: "8.9 GB",
    description: "",
    descriptionBold: "Techvar Assets - v.2.2.0",
    extraDescription: "Assets holding the heavy creative content from DCCs (geometry, lights, shaders, textures, rigs), which Netflix Animation Studios refers to as 'techvar assets'. Merge this with the 'Asset Structure' package to render the ALab with 1k textures and without fur & cloth.",
  },
  {
    buttons: [{
      text: "DOWNLOAD",
      url: "https://aswf-dpel-assets.s3.amazonaws.com/usd-alab/alab-textures.v2.2.0.zip",
      type: "primary",
    }],
    size: "71.4 GB",
    description: "",
    descriptionBold: "Texture Pack - v.2.2.0",
    extraDescription: "4k half float mipmapped OpenEXR textures in ACEScg color space. Merge this to see much higher quality for final rendering.",
  },
  {
    buttons: [{
      text: "DOWNLOAD",
      url: "https://dpel-assets.aswf.io/usd-alab/alab-cameras.v2.2.0.zip",
      type: "primary",
    }],
    size: "500 KB",
    description: "",
    descriptionBold: "Cameras - v.2.2.0",
    extraDescription: "Cameras from the ALab Phase 2 trailer. Merge this to be able to select any trailer camera directly from the USD stage.",
  },             
  {
    buttons: [{
      text: "DOWNLOAD",
      url: "https://dpel-assets.aswf.io/usd-alab/alab-procedurals.v2.2.0.zip",
      type: "primary",
    }],
    size: "18.1 GB",
    description: "",
    descriptionBold: "Baked Procedurals - v.2.2.0",
    extraDescription: "The “cached” USD representation of our render-time procedurals in the shot. Merge this to see the fur & cloth on the animated characters.",
  }]
}
---
