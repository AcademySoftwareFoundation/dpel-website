---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 10
# Image for the project card
cardImage: {
  src: "../images/shader-playground/OpenPBR_title.jpg",
  alt: "OpenPBR Shader Playground title card",
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "shader-playground",
    type: "primary"
  },
]
# The description of the project card
description: "OpenPBR Shader Playground is a MaterialX and OpenUSD asset created by Adobe to illustrate a modern look-development approach using the OpenPBR Surface Shading Model developed by Adobe and Autodesk. The asset is a whimsical take on a child's arts-and-crafts space, using materials that demonstrate novel aspects of the OpenPBR specification."
descriptionLinks: {
  text: "",
  url: ""
}

############################################################
# Article / Blog View
############################################################

# The layout file the blog page is using
layout: "../../layout/BlogPostLayout.astro"
# Title of the blog page
title: "OpenPBR Shader Playground"
# Used mainly for the Breadcrumbs
titleAlt: "OpenPBR Shader Playground"
# The url of the blog page. Please remember to add this base url before you add the rest of the url.
url: "shader-playground"
# The cover image of the blog page
coverImage: {
  src: "./images/shader-playground/OpenPBR_title.jpg",
  alt: "OpenPBR Shader Playground",
}
# The image caption under the cover image
imageCaption: {
  # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: [
    "OpenPBR Shader Playground is a",
    "and",
    "asset created by Adobe to illustrate a modern look-development approach using the",
    "developed by Adobe and Autodesk. Designed as an über-shader, OpenPBR Surface aims to provide an industry standard material representation capable of accurately modeling the vast majority of CG materials used in practical visual effects and feature animation productions. The OpenPBR Shader Playground asset is a whimsical take on a child’s arts-and-crafts space, utilizing material configurations that highlight novel aspects of OpenPBR, such as new fuzz, metal, emission, volume, and thin-wall behaviors, and serves as a reference validation for clients wishing to integrate with OpenPBR. The asset is expressed using OpenUSD, which references material networks composed of standard MaterialX and OpenPBR node definitions contained within MaterialX documents. The scene was originally created by Adobe in Autodesk Maya and Adobe Substance, and converted to OpenUSD and MaterialX in Omniverse by NVIDIA and Adobe. Renders were produced using Arnold for Maya and NVIDIA Omniverse.",
  ],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: [{
    text: " MaterialX ",
    link: "https://materialx.org/"
  },
  {
    text: " OpenUSD ",
    link: "https://openusd.org/"
  },
  {
    text: " OpenPBR Surface Shading Model ",
    link: "https://academysoftwarefoundation.github.io/OpenPBR/"
  },
  {
    text: "",
    link: ""
  }]
}

# The extra image gallery
# [] []
# [] []
otherImages: [
#  "../images/shader-playground/shader-playground-meetmat-text.jpg",
#  "../images/shader-playground/shader-playground-scissorsmug-text.jpg",
#  "../images/shader-playground/shader-playground-paintbrushes-text.jpg",
#  "../images/shader-playground/shader-playground-paintbrush-breakdown.gif",
]

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "By downloading any of these files, you agree to the terms of the license linked below.",
  licenseButtonText: "ASWF Asset License",
  licenseButtonLink: "shader-playground/shader-playground-license",
  # This header is only if the table needs a header < Please see Intel page for example of that >
  downloadTableHeader: "",

  # The download links and button setup for the download table.
  downloads: [{
    buttons: [
      {
        text: "GITHUB REPOSITORY",
        url: "https://github.com/DigitalProductionExampleLibrary/OpenPBRShaderPlayground",
        type: "primary",
      },
      {
        text: "DOWNLOAD",
        url: "https://github.com/DigitalProductionExampleLibrary/OpenPBRShaderPlayground/archive/refs/tags/v1.0.zip",
        type: "primary",
      }
    ],
    size: "1.94 GB",
    description: "",
    descriptionBold: "OpenPBR Shader Playground - v1.0",
    extraDescription: "The asset in full is hosted on GitHub. Download the asset by cloning the repository for the latest updates (or contributions), or download the .zip archive in the GitHub release artifact.",
  }]
}
---
