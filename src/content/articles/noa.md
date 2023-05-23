---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 3
# Image for the project card
cardImage: {
  src: "./images/noa/noa_render_02.png",
  alt: "AWS Noa Character"
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "noa",
    type: "primary"
  }
]
# The description of the project card
description: "A complete animatable main character, with rig, geometry, textures, and hair groom, represented in Maya. Noa is the hero of the short film Spanner, created by AWS’s in-house production team FuzzyPixel."

############################################################
# Article / Blog View
############################################################
# The layout file the blog page is using
layout: "../../layout/BlogPostLayout2.astro"
# Title of the blog page
title: "AWS Noa Character"
# Used mainly for the Breadcrumbs
titleAlt: "AWS Noa Character"
# The url of the blog page
url: "noa"
# The cover image of the blog page
coverImage: {
  src: "images/noa/noa_marketing_sunset_wallpaper_05_ultrawide_noLogo.png",
  alt: "AWS Noa Character",
}
# The image caption under the cover image
imageCaption: {
   # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: ["Noa is the main character of the short film Spanner. Spanner was created by FuzzyPixel, a production team within AWS that consists of artists and creatives that push and test new cloud technologies to help ensure they stand up to the rigors of real-world production.",],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: []
}

# Film link for Noa
filmLink: {
  text: "Watch The film here!",
  url: "https://vimeo.com/487443367"
}

# Asset info extra
extraHeaderContent: {
  subtext: "Created With:",
  description: "Maya 2020 R4",
  extraDescription: "MtoA 4.0.1 Arnold Core 6.0.1.0 Yeti v3.6.0",
  secondSubtext: "Asset Size:",
  secondDescription: "5.9 GB"
}

# The extra image gallery
# [] []
# [] []
otherImages: [ 
  "images/noa/noa_render_06-1-1.png", 
  "images/noa/noa_render_02.png",
  "images/noa/noa_Spanner_207_v01-1.png"]

includedContentTop: {
  title: "What's Included",
  contentList: [   
      { text: "Maya rig file" },
      { text: "Maya look file with Yeti hair" },
      { text: "Maya look file with geo hair" },
      { text: "Geometry Cache Folder:",
        children: true,
        childrenText: [
          "Noa Model (referenced into the look files)"
        ] 
      },
      { text: "Textures Folder:",
        children: true,
        childrenText: [
          "High resolution textures for rendering (used in the look files)",
          "Low resolution textures for rig (used in the rig file)"
        ] 
      },
  ],
  note: "Note: when you open any of the files, you will need to repath the textures, and in the look files you will need to repath the alembic cache, to point to the location of the files on your computer.",
  fileNotes: [
    {
      subtitle: "Rig File:",
      description: "The rig file contains the character model (including low resolution hair geometry) and simple materials with low resolution textures applied."
    },
    {
      subtitle: "Look File - Yeti Hair:",
      description: "The look file contains the character model with high resolution textures and materials applied. This look file also contains a Yeti hair system that can be simulated. In order to use this look file interactively or for rendering, you will need a Yeti license."
    },
    {
      subtitle: "Look File - Geo Hair:",
      description: "The look file contains the character model with high resolution textures and materials applied. This look file contains hair geometry, and does not require any extra licensing to render."
    }
  ]
}

# Content list for Noa
includedContentBottom: {
  title: "Animating and Rendering Noa",
  contentList: [
    {
      subtitle: "Animate Noa",
      list: [
        {text: "(Optional) Reference the rig file into an animation file."},
        {text: "Create a performance with the rig."},
        {text: "Bake out an alembic cache for the character."}
      ]
    },
    {
      subtitle: "Render the Animation",
      list: [
        {
          text: "Create a copy of the look file.",
          children: true,
          childrenText: [
            { text1: "Choose which look file you'd like to use: the version with Yeti hair, or the version without Yeti hair."}
          ] 
        },
        {
          text: "Update the alembic reference to point at the animation export you did earlier.",
          children: true,
          childrenText: [
            {
              text1: "Go to File ",
              text2: "Reference Editor"
            },
            { text1: "Right mouse click on the reference called noaRN noa.abc" },
            { text1: "Choose Reference ",
              text2: "Replace Reference" 
            },
            { text1: "Navigate to your animation alembic export." }
          ]
        },
        {
          text: "Add lights to the file and render with Arnold."
        }
      ]
    }
  ]
}

# Credits for Noa asset
credits: {
  subtitle: "Credits",
  list: [
    "Created by FuzzyPixel, an AWS Creative Team",
    "Original Character Design: Pierre Perifel",
    "Character Model, Surfacing and Groom: Cris Fudge",
    "Character Rig: Nico Sanghrajka"
  ]
}

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "BY DOWNLOADING THESE FILES, YOU AGREE TO THE TERMS OF THE LICENSE LINKED BELOW.",
  licenseButtonText: "ASWF Asset License",
  licenseButtonLink: "noa/aws-noa-license",
  tableHeader: "",
  # The download links and button setup for the download table.
  downloads: [{
    buttonText: "DOWNLOAD",
    downloadUrl: "https://dpel-assets.aswf.io/aws-spanner-char-noa/aws-spanner-char-noa.zip",
    size: "34.4 GB (38.1 GB unpacked)",
    description: "All the clouds. 30 VDB files.",
    type: "primary"
  }]
}
---
