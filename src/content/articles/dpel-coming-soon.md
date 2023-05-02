---
############################################################
# Feel free to copy and paste this as a new article 
# markdown file.

# Card view on home page
############################################################
# Should the project show up on the home page
show: false
# The order the project card will show up on the home page
order: 7
# Image for the project card
cardImage: {
  src: "./images/general/cropped-dpel-stacked-black.png",
  alt: "",
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "Coming soon",
    # Please remember to add this base url before you add the rest of the url
    url: "",
    type: "disabled"
  },
]
# The description of the project card
description: "Coming soon..."
descriptionLinks: {
  text: "",
  url: ""
}

############################################################
# Article / Blog View
############################################################

# The layout file the blog page is using
layout: ""
# Title of the blog page
title: "DPEL Project Name"
# Used mainly for the Breadcrumbs
titleAlt: ""
# The url of the blog page. Please remember to add this base url before you add the rest of the url.
url: "/"
# The cover image of the blog page
coverImage: {
  src: "",
  alt: "",
}
# The image caption under the cover image
imageCaption: {
  # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: [""],
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
otherImages: ["", "", "", ""]

# The download section of the blog
downloadSection: {
  title: "",
  subtext: "",
  licenseButtonText: "",
  licenseButtonLink: "",
  # This header is only if the table needs a header < Please see Intel page for example of that >
  downloadTableHeader: "",

  # The download links and button setup for the download table.
  downloads: [{
    buttonText: "",
    downloadUrl: "",
    size: "",
    description: "",
    type: 'primary',
  }]
}
---