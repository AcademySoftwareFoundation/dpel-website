---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 7
# Image for the project card
cardImage: {
  src: "../images/aws-picchu-edit/aws-picchu-edit-still.png",
  alt: "AWS Picchu Edit title card",
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "aws-picchu-edit",
    type: "primary"
  },
]
# The description of the project card
description: "Picchu is a short film created using Amazon Nimble Studio 
that follows the journey of an Andean girl named Mayu propelled by the 
unconditional support of her mother. 
The original DaVinci Resolve project, source media, and 
OpenTimelineIO assets are available for download."
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
title: "AWS Picchu Edit"
# Used mainly for the Breadcrumbs
titleAlt: "AWS Picchu Edit"
# The url of the blog page. Please remember to add this base url before you add the rest of the url.
url: "picchu"
# The cover image of the blog page
coverImage: {
  src: "./images/aws-picchu-edit/aws-picchu-edit-still.png",
  alt: "AWS Picchu Edit still image",
}
# The image caption under the cover image
imageCaption: {
  # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: [
    "Picchu is a story that follows the journey of an Andean girl named 
    Mayu propelled by the unconditional support of her mother. The film 
    reflects the reality of many children around the world. It was created 
    using Amazon Nimble Studio, a service that empowers artists to animate 
    in the cloud.",
    "Edited with ",
    "."
  ],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: [{
    text: "Watch the film here!",
    link: "https://www.youtube.com/watch?v=vKSaF8NvMiQ"
  },
  {
    text: "DaVinci Resolve Studio 17",
    link: "https://www.blackmagicdesign.com/products/davinciresolve"
  }]
}

# The extra image gallery
# [] []
# [] []
otherImages: [
  "../images/aws-picchu-edit/aws-picchu-edit-davinci-resolve.png",
  "../images/aws-picchu-edit/aws-picchu-edit-otio-raven.png"
]

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "By downloading any of these files, you agree to the terms of the license linked below.",
  licenseButtonText: "ASWF Asset License",
  licenseButtonLink: "aws-picchu-edit/aws-picchu-edit-license",
  # This header is only if the table needs a header < Please see Intel page for example of that >
  downloadTableHeader: "",

  # The download links and button setup for the download table.
  downloads: [{
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/picchu/picchu_v10_az.dra.zip",
    size: "3.72 GB",
    hashA: "MD5: 0c6b12404d7fd3f4b1702e94af35cd63",
    hashB: "SHA-1: 74fb1829b03ac5b2de65bf8b8563796099014d46",
    descriptionBold: "DaVinci Resolve Studio 17 Project",
    extraDescription: " (24 fps 4096 x 2048 H.264 video, WAV audio). *Note: Some media omitted due to licensing restrictions.",
    type: "primary"
  },
  {
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/picchu/aws-picchu-edit-rendered.mp4",
    size: "2.88 GB",
    hashA: "MD5: 7c0843d6234bba2281ffcae9f0ed6eda",
    hashB: "SHA-1: 5b0aed70264ec1711f3d901ec6f3c34d165724ea",
    descriptionBold: "Rendered MP4 video file",
    extraDescription: " (24 fps 4096 x 2048 H.264 video, AAC audio). *Note: Some audio omitted due to licensing restrictions.",
    type: "primary"
  },
  {
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/picchu/aws-picchu-edit-4096x2048.otioz",
    size: "2.01 GB",
    hashA: "MD5: 69dd1d4093e1185ad9771cdd17902cf9",
    hashB: "SHA-1: 709cb61b3bcae7628678d64d75ee17e0f26b7495",
    descriptionBold: "OpenTimelineIO OTIOZ with embedded media",
    extraDescription: " (24 fps 4096 x 2048 H.264 video, WAV audio). *Note: Some media omitted due to licensing restrictions.",
    type: "primary"
  },
  {
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/picchu/aws-picchu-edit.otio",
    size: "5.6 MB",
    hashA: "MD5: 46e5bc9b57fa5d1ffef365732fa88495",
    hashB: "SHA-1: d118c452a66b47c4caa562e58fa86a8a33bb880b",
    descriptionBold: "OpenTimelineIO OTIO without media",
    type: "primary"
  }]
}
---
