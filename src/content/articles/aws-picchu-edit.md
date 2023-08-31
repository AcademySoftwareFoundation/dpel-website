---
############################################################
# Feel free to copy and paste this as a new article 
# markdown file.

# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 7
# Image for the project card
cardImage: {
  src: "./images/aws-picchu-edit/aws-picchu-edit-still.png",
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
    text: "DaVinci Resolve 17",
    link: "https://www.blackmagicdesign.com/products/davinciresolve"
  }]
}

# The extra image gallery
# [] []
# [] []
otherImages: ["/images/aws-picchu-edit/aws-picchu-edit-davinci-resolve.png", "/images/aws-picchu-edit/aws-picchu-edit-otio-raven.png"]

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
    downloadUrl: "TODO",
    size: "3.72 GB",
    description: "DaVinci Resolve 17 Project (24 fps 4096 x 2048 H.264 video, WAV audio)",
    type: "primary"
  },
  {
    buttonText: "DOWNLOAD",
    downloadUrl: "TODO",
    size: "2.88 GB",
    description: "Rendered MP4 video file (24 fps 4096 x 2048 H.264 video, AAC audio)",
    type: "primary"
  },
  {
    buttonText: "DOWNLOAD",
    downloadUrl: "TODO",
    size: "2.01 GB",
    description: "OpenTimelineIO OTIOZ with embedded media (24 fps 4096 x 2048 H.264 video, WAV audio)",
    type: "primary"
  },
  {
    buttonText: "DOWNLOAD",
    downloadUrl: "TODO",
    size: "5.6 MB",
    description: "OpenTimelineIO OTIO without media",
    type: "primary"
  }]
}
---
