---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: false
# The order the project card will show up on the home page
order: 12
# Image for the project card
cardImage: {
  src: "../images/StEM3/hero.jpg",
  alt: "Stem 3 still image",
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "asc-stem3",
    type: "primary"
  },
  {
    text: "PROJECT HOME",
    url: "https://theasc.com/society/stem3",
    type: "primary"
  }
]
# The description of the project card
description: "The American Society of Cinematographers Motion Imaging Technology Council introduces the next phase of the ASC Standard Evaluation Material projects: ASC MITC StEM3-VP, the third StEM project specifically for in-camera visual effects virtual production LED wall/volume technology. For more information, visit the"
descriptionLinks: {
  text: "ASC StEM3 website.",
  url: "https://theasc.com/society/stem3"
}

############################################################
# Article / Blog View
############################################################
# The layout file the blog page is using
layout: "../../layout/ASCStem3Layout.astro"
# Optional banner displayed above the title. Remove or leave empty to hide.
bannerText: "Coming Summer 2026"
# Title of the blog page
title: "ASC StEM3 - Standard Evaluation Material 3"
# Used mainly for the Breadcrumbs
titleAlt: "Standard Evaluation Material 3"
# The url of the blog page
url: "asc-stem3"
# The cover image at the top of the blog
coverImage: {
  src: "../images/StEM3/hero.jpg",
  alt: "ASC Stem 3",
}
# The image caption under the cover image
imageCaption: {
  # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: [
    "The American Society of Cinematographers Motion Imaging Technology Council introduces the next phase of the ASC Standard Evaluation Material projects: ASC MITC StEM3-VP, the third StEM project specifically for in-camera visual effects virtual production LED wall/volume technology.",
    "Created by the ASC's MITC under the leadership of the Virtual Production committee, the StEM3-VP is a suite of donated assets that will be available to download from the Academy Software Foundation's Digital Production Library shortly, in summer 2026. The suite features multiple Epic Games Unreal Engine pre-built environments donated by top virtual production companies around the world, 2D driving plates, and 2D test elements that a cinematographer may use to test and evaluate a stage before shooting their production on it. The StEM3-VP assets can be used to check the performance and integrity of the LED panels and system functions.",
    "In addition, among the assets is a short scene shot by David Klein, ASC, written by Michael Goi, ASC, ISC and ASC associate member Jay Holben and directed by Holben. \"Warped: CyberCity\" showcases the capabilities of the ICVFX volume technology and provides a visual example using one of the donated assets.",
    "For more information, visit the "
  ],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: [
  {
    text: "",
    link: ""
  },
  {
    text: "",
    link: ""
  },
  {
    text: "",
    link: ""
  },
  {
    text: "ASC StEM3 website.",
    link: "https://theasc.com/society/stem3"
  }]
}

# The extra image gallery
# [] []
# [] []
otherImages: [
  {
    title: "Asset Gallery",
    images: [
      "../images/StEM3/gallery1.jpg",
      "../images/StEM3/gallery2.jpg",
      "../images/StEM3/gallery3.jpg",
      "../images/StEM3/gallery4.jpg",
      "../images/StEM3/gallery5.jpg",
      "../images/StEM3/gallery6.jpg",
      "../images/StEM3/gallery7.jpg",
      "../images/StEM3/gallery8.jpg",
      "../images/StEM3/gallery9.jpg",
    ]
  },
  {
    title: '"Warped : Cybercity" short film',
    images: [
      "../images/StEM3/warped1.jpg",
      "../images/StEM3/warped2.jpg",
      "../images/StEM3/warped3.jpg",
      "../images/StEM3/warped4.jpg",
    ]
  }
]

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "By downloading any of these files, you agree to the terms of this license:",
  licenseButtonText: "ASWF Asset License",
  # This header is only if the table needs a header < Please see Intel page for example of that >
  downloadTableHeader: "",
  # The download links and button setup for the download table.
  downloads: [{
    tableHeader: '"Warped : Cybercity"',
    downloadsList: [{
          buttons: [{
            text: "DOWNLOAD - COMING SOON",
            url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
            type: "primary",
          }],
          size: "XX.X GB",
          description: "",
          descriptionBold: '"Warped : Cybercity" short film',
          extraDescription: "Add technical information here",
        },
        {
          buttons: [{
            text: "DOWNLOAD - COMING SOON",
            url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
            type: "primary",
          }],
          size: "XX.X GB",
          description: "",
          descriptionBold: '"Warped : Cybercity" behind the scene',
          extraDescription: "Add technical information here",
        }
      ]
  },
  {
    tableHeader: 'StEM3 Assets : 3D Scenes',
    downloadsList: [{
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Cybercity",
        extraDescription: "Add technical information here",
      },
      {
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Forest",
        extraDescription: "Add technical information here",
      },
      {
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Base Camp",
        extraDescription: "Add technical information here",
      },
      {
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Subway Station",
        extraDescription: "Add technical information here",
      },
      {
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Back Alley",
        extraDescription: "Add technical information here",
      },
      {
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Saloon",
        extraDescription: "Add technical information here",
      }
    ]
  },
  {
    tableHeader: 'StEM3 Assets : 2D Plates',
    downloadsList: [
      {
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Los Angeles Driving plate",
        extraDescription: "Add technical information here",
      },
      {
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Soda cans plates",
        extraDescription: "Add technical information here",
      },
      {
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Lightning plate",
        extraDescription: "Add technical information here",
      },
      {
        buttons: [{
          text: "DOWNLOAD - COMING SOON",
          url: "https://dpel-assets.aswf.io/asc-stem3/coming-soon",
          type: "primary",
        }],
        size: "XX.X GB",
        description: "",
        descriptionBold: "StEM3 Charts",
        extraDescription: "Add technical information here",
      },
    ]
  }
  ]
}

hideButtons: true
licenseContent: [
  "ASWF Digital Assets License v1.1",
  "StEM3 -- Copyright 2026 -- American Society of Cinematographers -- All rights reserved.",
  "Redistribution and use of these digital assets, with or without modification, solely for education, training, research, software and hardware development, performance benchmarking (including publication of benchmark results and permitting reproducibility of the benchmark results by third parties), or software and hardware product demonstrations, are permitted provided that the following conditions are met:"
]

licenseConditions: [
  "Redistributions of these digital assets or any part of them must include the above copyright notice, this list of conditions and the disclaimer below, and if applicable, a description of how the redistributed versions of the digital assets differ from the originals.",
  "Publications showing images derived from these digital assets must include the above copyright notice.",
  "The names of copyright holder or the names of its contributors may NOT be used to promote or to imply endorsement, sponsorship, or affiliation with products developed or tested utilizing these digital assets or benchmarking results obtained from these digital assets, without prior written permission from copyright holder.",
  "The assets and their output may only be referred to as the Asset Name listed above, and your use of the Asset Name shall be solely to identify the digital assets. Other than as expressly permitted by this License, you may NOT use any trade names, trademarks, service marks, or product names of the copyright holder for any purpose."
]

licenseDisclaimer: 'DISCLAIMER: THESE DIGITAL ASSETS ARE PROVIDED BY THE COPYRIGHT HOLDER "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THESE DIGITAL ASSETS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
---
