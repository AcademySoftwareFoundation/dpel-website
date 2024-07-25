---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 9
# Image for the project card
cardImage: {
  src: "../images/airship/airship_highRes.jpg",
  alt: "AWS Airship Asset"
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "airship",
    type: "primary"
  }
]
# The description of the project card
description: "A complete animatable airship asset, with rig, geometry, textures, and surfacing, represented in Maya. The airship is featured in the short film Spanner, created by AWS’s in-house production team FuzzyPixel."

############################################################
# Article / Blog View
############################################################
# The layout file the blog page is using
layout: "../../layout/BlogPostLayout3.astro"
# Title of the blog page
title: "AWS Airship Asset"
# Used mainly for the Breadcrumbs
titleAlt: "AWS Airship Asset"
# The url of the blog page
url: "airship"
# The cover image of the blog page
coverImage: {
  src: "../images/airship/airship_highRes.jpg",
  alt: "AWS Airship Asset",
}
# The image caption under the cover image
imageCaption: {
   # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: ["The airship asset was showcased in Spanner, a short film produced by FuzzyPixel, an AWS creative team. FuzzyPixel specializes in rigorously testing cloud technologies, ensuring they meet the demanding standards of real-world production environments.",],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: []
}

# Film link for Spanner
filmLink: {
  text: "Watch The film here!",
  url: "https://vimeo.com/487443367"
}

# Asset info extra
extraHeaderContent: {
  subtext: "Created With:",
  description: "Maya 2024",
  extraDescription: "MtoA 5.3.5.1 Arnold Core 7.2.5.1",
  secondSubtext: "Asset Size:",
  secondDescription: "44.2 GB"
}

includedContentTop: {
  title: "What's Included",
  contentList: [   
      { text: "Maya model file" },
      { text: "Maya rig file" },
      { text: "Maya surfacing file" },
      { text: "Textures" },
  ],
  note: "Note: when you open the rig file, you will need to repath the reference to the low resolution model, and when you open the surf file you’ll need to repath the textures, to point to the location of the files on your computer.",
  fileNotes: [
    {
      subtitle: "Rig File",
      description: "The rig file references the low resolution airship model and contains a simple airship rig."
    },
    {
      subtitle: "Surfacing",
      description: "The surf file contains the high resolution airship model with UDIMS, high resolution textures, and materials applied."
    },
    {
      subtitle: "Textures",
      description: "High resolution textures organized by section of the airship."
    },
  ]
}

# Content list for Airship
includedContentBottom: {
  title: "Animate and Render the Airship",
  contentList: [
    {text: "(Optional) Reference the rig file into a new Maya file and save as the animation file."},
    {text: "Create a performance with the rig."},
    {text: "In Maya, go to the file menu and open the reference editor."},
    {text: "In the reference editor, locate the reference called airshipLow.ma"},
    {text: "Select the reference and right mouse click on it"},
    {text: "Hover over 'Reference' and choose 'Replace Reference'"},
    {text: "Navigate to the airship surfacing file: [PATH]/airship/surf/airship_surf.ma"},
    {text: "Allow the high resolution, surfaced airship to load (this may take a few minutes)"},
    {text: "Add lights to the scene and render"},
  ]
}

# Credits for Airship asset
credits: {
  subtitle: "Credits",
  list: [
    "Created by FuzzyPixel, an AWS Creative Team",
    "Modeling and Surfacing: Amaru Zeas",
    "Rig: Nico Sanghrajka",
  ]
}

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "BY DOWNLOADING THESE FILES, YOU AGREE TO THE TERMS OF THE LICENSE LINKED BELOW.",
  licenseButtonText: "ASWF Asset License",
  licenseButtonLink: "airship/aws-airship-license",
  tableHeader: "",
  # The download links and button setup for the download table.
  downloads: [{
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/aws-spanner-asset-airship/aws-spanner-asset-airship-v1.0.zip",
    size: "42.3 GB",
    description: "AWS Airsihp Asset Zip",
    type: "primary"
  }]
}
---
