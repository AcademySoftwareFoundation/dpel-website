---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 11
# Image for the project card
cardImage: {
  src: "../images/solemates/solemates_01.png",
  alt: "NAS Sole Mates main image",
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "solemates",
    type: "primary"
  },
  {
    text: "GITHUB REPOSITORY",
    url: "https://github.com/DigitalProductionExampleLibrary/SoleMates",
    type: "primary"
  },
]
# The description of the project card
description: "SoleMates is an HDR production example made with ALab. It is a complete compositing example that includes Nuke Script, EXR sequences, and high dynamic range render layers and media."
descriptionLinks: {
  text: "",
  url: ""
}

############################################################
# Article / Blog View
############################################################

# The layout file the blog page is using
layout: "../../layout/BlogPostLayout4.astro"
# Title of the blog page
title: "NAS Sole Mates - HDR Production Example"
# Used mainly for the Breadcrumbs
titleAlt: "SoleMates"
# The url of the blog page
url: "solemates"
# The cover image of the blog page
coverImage: {
  src: "../images/solemates/solemates_01.png",
  alt: "Sole Mates main image",
}
# The image caption under the cover image
imageCaption: {
  # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: [
    "Sole Mates is a High Dynamic Range (HDR) production example from Netflix Animation Studios. It is a complete compositing package created using the ALab production scene and ACES 2.0. It includes data for a 61 frame shot, with 42 different lighting render layers covering environments, characters, and volume renders, which also contain Cryptomatte data. The package comes with a Nuke script, rendered OpenEXR sequence, and both HDR and SDR videos. The full package is roughly 104 GB, and a smaller single frame package is ",
    ". The beauty lighting render layer, OpenEXR sequence, and HDR/SDR videos are also available as smaller separate downloads (see below)."
  ],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: [{
    text: "available on GitHub",
    link: "https://github.com/DigitalProductionExampleLibrary/SoleMates"
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
  "../images/solemates/solemates_02.png", 
  "../images/solemates/solemates_multipasses_bty_char.png", 
  "../images/solemates/solemates_cryptomatte_set.png", 
  "../images/solemates/solemates_node_graph.png"
]

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "By downloading any of these files, you agree to the terms of the license linked below.",
  licenseButtonText: "ASWF Asset License",
  licenseButtonLink: "solemates/solemates-license",
  # This header is only if the table needs a header < Please see Intel page for example of that >
  downloadTableHeader: "",

  # The download links and button setup for the download table.
  downloads: [{
    buttons: [{
      text: "DOWNLOAD",
      url: "https://aswf-dpel-assets.s3.amazonaws.com/solemates/nas_solemates_hdr_production_example-v1.0.0.zip",
      type: "primary",
    }],
    size: "104.8 GB",
    description: "",
    descriptionBold: "NAS Sole Mates - HDR Production Example - v.1.0.0",
    extraDescription: "The Main package of the Sole Mates Production Example containing all the assets. This package includes all the following downloads.",
  },
  {
    buttons: [
      {
        text: "GITHUB REPOSITORY",
        url: "https://github.com/DigitalProductionExampleLibrary/SoleMates",
        type: "primary",
      },
      {
        text: "DOWNLOAD",
        url: "https://github.com/DigitalProductionExampleLibrary/SoleMates/archive/refs/tags/v1.0.0.zip",
        type: "primary",
      }
    ],
    size: "1.7 GB",
    description: "",
    descriptionBold: "Sole Mates Single Frame Package - v.1.0.0",
    extraDescription: "Single Frame Package is a lighter version of the complete package, hosted on GitHub. It includes a single frame from all lighting render layers and the OpenEXR sequence, and a Nuke script set up for that frame. It also contains the full range SDR and HDR videos. Clone the repository, or download the zip archive directly.",
  },
  {
    buttons: [{
      text: "DOWNLOAD",
      url: "https://dpel-assets.aswf.io/solemates/lighting_beauty_set_render_layer-cryptomatte_manifests-v1.0.0.zip",
      type: "primary",
    }],
    size: "14.2 GB",
    description: "",
    descriptionBold: "Lighting Render Layer (Beauty Set Only) - v.1.0.0",
    extraDescription: "A single lighting render layer for the Beauty Set with full frame range and including the cryptomatte channels and manifests.",
  },
  {
    buttons: [{
      text: "DOWNLOAD",
      url: "https://dpel-assets.aswf.io/solemates/exr_sequences-v1.0.0.zip",
      type: "primary",
    }],
    size: "430.9 MB",
    description: "",
    descriptionBold: "OpenEXR Sequences - v.1.1.0",
    extraDescription: "The OpenEXR Sequence is the final export of the package with 16-bit float precision. It is in ACES2065-1 (AP0) color space and intended to view with ACES 2.0 display transforms.",
  },
  {
    buttons: [{
      text: "DOWNLOAD",
      url: "https://dpel-assets.aswf.io/solemates/quicktime_media-sdr_hdr-v1.0.0.zip",
      type: "primary",
    }],
    size: "169.4 MB",
    description: "",
    descriptionBold: "QuickTime SDR + HDR Media - v.1.0.0",
    extraDescription: "HDR and SDR videos (HDR - 2:1 @2k, 1000nits ProRes4444XQ, Rec2020, ACES 2.0, 2048x1024) (SDR - 2:1 @ 2k, 100nits ProRes422HQ, Rec709, ACES 2.0, 2048x1024)",
  }]
}
---
