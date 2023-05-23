---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 5
# Image for the project card
cardImage: {
  src: "./images/alab-trailer/alab-trailer-main.png",
  alt: "ALAB trailer main image",
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "alab-trailer",
    type: "primary"
  },
  {
    text: "WATCH TRAILER",
    url: "https://www.youtube.com/watch?v=yxsk7ZKk67I",
    type: "primary"
  },
]
# The description of the project card
description: "Edit list with full media clips and audio, provided natively for both Avid and OTIO, for the ALab promotional trailer."
descriptionLinks: {
  text: "",
  url: ""
}

############################################################
# Article / Blog View
############################################################
# The layout file the blog page is using
layout: "../../layout/BlogPostLayout2.astro"
# Title of the blog page
title: "Animal Logic ALab - Trailer"
# Used mainly for the Breadcrumbs
titleAlt: "ALab Trailer"
# The url of the blog page
url: "alab-trailer"
# The cover image at the top of the blog
coverImage: {
  src: "images/alab-trailer/alab-trailer-main.png",
  alt: "ALAB trailer main image",
}
# The image caption under the cover image
imageCaption: {
  # Text is separated by sections to allow text links to be added in between. <text> <link> <text>
  text: ["Following the release of the ALab asset set, Animal Logic has released the ", " trailer as its own asset. Initially provided natively for both Avid and ", " and with full media and mixed audio, the community is encouraged to use these assets in demonstrations, training material, and in any context where timeline-based media examples would be useful. For more information, visit the ",", or join us on "],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: [
  {
    text: "promotional announcement",
    link: "https://animallogic.com/alab/"
  },
  {
    text: "OpenTimelineIO",
    link: "https://opentimeline.io/"
  },
  {
    text: "Animal Logic ALab website",
    link: "https://animallogic.com/alab/"
  },
  {
    text: "Slack.",
    link: "https://academysoftwarefdn.slack.com/channels/C03S4QB8N04"
  }]
}

# The extra image gallery
# [] []
# [] []
otherImages: [
  "images/alab-trailer/ezgif.com-gif-maker.gif", 
  "images/alab-trailer/ezgif.com-gif-maker-3.gif", 
  "images/alab-trailer/alab-trailer-4.png", 
  "images/alab-trailer/alab-trailer-5.png"
]

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "By downloading any of these files, you agree to the terms of the license linked below.",
  licenseButtonText: "ASWF Asset License",
  licenseButtonLink: "alab/alab-license",
  licenseButtonType: "secondary",
  # This header is only if the table needs a header < Please see Intel page for example of that >
  downloadTableHeader: "",
  # The download links and button setup for the download table.
  downloads: [{
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/alab-trailer/alab-trailer.zip",
    size: "474 MB",
    description: "Avid Project + DNxHD media – v.1.0.0",
    type: "primary"
  },
  {
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/alab-trailer/animal_logic_alab_trailer_otio_and_media.zip",
    size: "547 MB",
    description: "OpenTimelineIO + media in multiple formats – v.1.0.0",
    type: "primary"
  },
  {
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/alab-trailer/alab_mk020_final_edit.h264.otioz",
    size: "374 MB",
    description: "OpenTimelineIO self-contained bundle (.otioz) – v.1.0.0",
    type: "primary"
  }]
}
---
