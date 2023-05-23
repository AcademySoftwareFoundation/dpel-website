---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 6
# Image for the project card
cardImage: {
  src: "./images/4004/render_20181.jpeg",
  alt: "4004 Moore Lane main image",
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "4004-moore-lane",
    type: "primary"
  },
]
# The description of the project card
description: "A USD scene of a house with interior furnishings and exterior landscape, built to demonstrate typical problem areas for ray tracing renderers, such as narrow openings and recessed light sources."
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
title: "4004 Moore Lane - USD Scene from Intel®"
# Used mainly for the Breadcrumbs
titleAlt: "4004 Moore Lane"
# The url of the blog page
url: "4004-moore-lane"
# The cover image at the top of the blog
coverImage: {
  src: "images/4004/render_20181.jpeg",
  alt: "4004 Moore Lane",
}
# The image caption under the cover image
imageCaption: {
  # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: ["4004 Moore Lane is an open-source USD asset, the purpose of which is to provide a fully composed, high-quality scene for the purpose of testing various visual computing issues. The house itself was wrapped around a number of typical problem areas for light transport and noise sampling. Thin openings in exterior walls, recessed area light sources, deeply shadowed corners, and high-frequency details are all “stops” on the tour of issues around the house interior. The exterior landscape surrounding the house consisted of a relatively simple ecosystem of instanced plants which could provide some additional levels of complexity. In addition to the geometry itself being designed to exacerbate some typical issues, the USD structure itself was created for several layers of testing.",],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: [{
    text: "",
    link: ""
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
  "images/4004/4004ExteriorBanner-1.jpg",
  "images/4004/render_0131.jpeg",  
  "images/4004/render_0812.jpeg",
  "images/4004/render_0542.jpeg"]

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "By downloading any of these files, you agree to the terms of the license linked below.",
  licenseButtonText: "ASWF Asset License",
  licenseButtonLink: "4004-moore-lane/moore-lane-license",
  licenseButtonType: "secondary",
  # This header is only if the table needs a header < Please see Intel page for example of that >
  downloadTableHeader: "",
  # The download links and button setup for the download table.
  downloads: [{
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/4004-moore-lane/intel_moore-lane.zip",
    size: "7.5 GB",
    description: "4004 Moore Lane v 1.0.0",
    type: "primary"
  }]
}
---