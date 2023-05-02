---
############################################################
# Card view on home page
############################################################
# Should the project show up on the home page
show: true
# The order the project card will show up on the home page
order: 1
# Image for the project card
cardImage: {
  src: "./images/StEM2/StEM2-still-1-1.png",
  alt: "Stem 2 still image",
}
# The buttons that will show up on the project card
buttons: [
  {
    text: "DOWNLOADS PAGE",
    url: "asc-stem2",
    type: "primary"
  },
  {
    text: "PROJECT HOME",
    url: "https://theasc.com/society/stem2",
    type: "primary"
  }
]
# The description of the project card
description: "A short film designed to be used as both reference material and stress testing for color pipelines, image processing, and projection systems. Supplied in a range of image formats including high dynamic range (HDR), high resolution, and wide color gamut. For more information, visit the"
descriptionLinks: {
  text: "ASC StEM2 website.",
  url: "https://theasc.com/society/stem2"
}

############################################################
# Article / Blog View
############################################################
# The layout file the blog page is using
layout: "../../layout/ASCStem2Layout.astro"
# Title of the blog page
title: "ASC StEM2 - Standard Evaluation Material 2"
# Used mainly for the Breadcrumbs
titleAlt: "Standard Evaluation Material 2"
# The url of the blog page
url: "asc-stem2"
# The cover image at the top of the blog
coverImage: {
  src: "images/StEM2/vlcsnap-2021-12-03-15h26m41s477-1024x403.png",
  alt: "ASC Stem 2",
}
# The image caption under the cover image
imageCaption: {
  # Text is separated by sections to allow links to be added in. <text> <link> <text>
  text: ["A short film created by the American Society of Cinematographers Motion Imaging Technology Council designed to be used as both reference material and stress testing for color pipelines, image processing, monitors and projection systems. Supplied in a range of image formats including high dynamic range (HDR), high resolution, and wide color gamut. For more information, visit the "],
  # Sample text links that would go in the caption if any. If not remove them like this:
  # {
  #   text: "",
  #   link: ""
  # }
  textLinks: [{
    text: "ASC StEM2 website.",
    link: "https://theasc.com/society/stem2"
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
  "images/StEM2/vlcsnap-2021-12-03-15h27m16s208-1.png", 
  "images/StEM2/vlcsnap-2021-12-03-15h27m23s452-1.png", 
  "images/StEM2/vlcsnap-2021-12-03-15h41m16s094-1.png", 
  "images/StEM2/StEM2-still-1-1.png"]

# The download section of the blog
downloadSection: {
  title: "Downloadable Packages:",
  subtext: "By downloading any of these files, you agree to the terms of the license linked below.",
  licenseButtonText: "ASWF Asset License",
  # This header is only if the table needs a header < Please see Intel page for example of that >
  downloadTableHeader: "",
  # The download links and button setup for the download table.
  downloads: [{
    tableHeader: 'QUICKTIMES',
    downloadsList: [{
          buttonText: "DOWNLOAD",
          downloadUrl: "https://dpel-assets.aswf.io/asc-stem2/ASC_StEM2_178_2K_24_100nits_Rec709_Stereo.mp4",
          size: "412 MB",
          description: "Quicktime with stereo, 1.78 @ 2K, 100 nits, Rec709, 1920x1080",
          type: "primary"
        },
        {
          buttonText: "DOWNLOAD",
          downloadUrl: "https://aswf-dpel-assets.s3.amazonaws.com/asc-stem2/ASC_StEM2_178_UHD_24_100nits_Rec709_Stereo_ProRes422HQ.mov",
          size: "64 GB",
          description: "Quicktime with stereo, 1.78 @ UHD, 100 nits ProRes422HQ, Rec709, 3840x2160",
          type: "primary"
        },
        {
          buttonText: "DOWNLOAD",
          downloadUrl: "https://aswf-dpel-assets.s3.amazonaws.com/asc-stem2/ASC_StEM2_178_UHD_ST2084_1000nits_Rec2020_Stereo_DNxHR_HQX.mov",
          size: "55 GB",
          description: "Quicktime with stereo, 1.78 @ UHD, 1000 nits DNxHR_HQX, Rec2020",
          type: "primary"
        },{
          buttonText: "DOWNLOAD",
          downloadUrl: "https://aswf-dpel-assets.s3.amazonaws.com/asc-stem2/ASC_StEM2_178_UHD_ST2084_1000nits_Rec2020_Stereo_ProRes4444XQ.mov",
          size: "126 GB",
          description: "Quicktime with stereo, 1.78 @ UHD, 1000 nits ProRes4444XQ, Rec2020",
          type: "primary"
        },{
          buttonText: "DOWNLOAD",
          downloadUrl: "https://aswf-dpel-assets.s3.amazonaws.com/asc-stem2/ASC_StEM2_239_4K_24_100nits_Rec709_Stereo_ProRes422HQ.mov",
          size: "54 GB",
          description: "Quicktime with stereo, 2.39 @ 4K, 100 nits ProRes422HQ, Rec709, 4096x1716",
          type: "primary"
        },{
          buttonText: "COMING SOON",
          downloadUrl: "https://dpel.aswf.io/asc-stem2/#",
          size: "X GB",
          description: "Quicktime with stereo, 1.78 @ 8K, 1000 nits MPEG-5, Rec2020, 8192x3432",
          type: 'disabled',
        },
      ]
  },
  {
    tableHeader: 'DCPS',
    downloadsList: [{
        buttonText: "DOWNLOAD",
        downloadUrl: "https://dpel-assets.aswf.io/asc-stem2/ASC_StEM2_239_4K_26_48nits_P3_DCP/788782_StEM-2_TST-1-48nit-14fl_S_EN-XX_OV_71-IAB_4K_ASC_20220608_DLX_SMPTE_OV.zip",
        size: "19 GB",
        description: "48 nits, EOTF 2.6, P3",
        type: 'primary',
      },
      {
        buttonText: "DOWNLOAD",
        downloadUrl: "https://dpel-assets.aswf.io/asc-stem2/ASC_StEM2_239_4K_PQ_108nits_P3_DCP/781435_StEM-2_TST-1-108nit_S_EN-XX_OV_71-IAB_4K_ASC_20220608_DLX_SMPTE_OV.zip",
        size: "24 GB",
        description: "108 nits, EOTF PQ, P3",
        type: 'primary',
      },
      {
        buttonText: "DOWNLOAD",
        downloadUrl: "https://dpel-assets.aswf.io/asc-stem2/ASC_StEM2_239_4K_PQ_300nits_P3_DCP/781438_StEM-2_TST_-1-300nit_S_EN-XX_OV_71-IAB_4K_ASC_20220608_DLX_SMPTE_OV.zip",
        size: "24 GB",
        description: "300 nits, EOTF PQ, P3",
        type: 'primary',
      }]
  },
  {
    tableHeader: 'IMF',
    downloadsList: [
      {
        buttonText: "DOWNLOAD",
        downloadUrl: "https://aswf-dpel-assets.s3.amazonaws.com/asc-stem2/IMF/StEM2_TST_SDR_Rec709_IMF_App2e_Lossy.zip",
        size: "117.9 GB",
        description: "lossy SDR App 2E",
        type: 'primary',
      },
      {
        buttonText: "DOWNLOAD",
        downloadUrl: "https://aswf-dpel-assets.s3.amazonaws.com/asc-stem2/IMF/StEM2_TST_HDR_Rec2020PQ_IMF_APP2e_Lossy.zip",
        size: "242.7 GB",
        description: "lossy HDR App 2E",
        type: 'primary',
      },
      {
        buttonText: "DOWNLOAD",
        downloadUrl: "https://aswf-dpel-assets.s3.amazonaws.com/asc-stem2/IMF/StEM2_TST_HDR_Rec2020PQ_IMF_App2e_Lossless.zip",
        size: "553.6 GB",
        description: "lossless HDR App 2E",
        type: 'primary',
      },
      {
        buttonText: "COMING SOON",
        downloadUrl: "https://dpel.aswf.io/asc-stem2/#",
        size: "X GB",
        description: "DCDM App 4 (HTJ2K)",
        type: 'disabled',
      },
      {
        buttonText: "COMING SOON",
        downloadUrl: "https://dpel.aswf.io/asc-stem2/#",
        size: "X GB",
        description: "App 5",
        type: 'disabled',
      }
    ]
  },
  {
    tableHeader: "SINGLE FILE EXR",
    downloadsList: [
      {
        buttonText: "DOWNLOAD",
        downloadUrl: "https://aswf-dpel-assets.s3.amazonaws.com/asc-stem2/EXR/mission_StEM2_EXR_239_4096x1716.zip",
        size: "1.2 TB",
        description: "Single file movie in EXR - ACES AP0 LIN ST2065-1, 2.39, 4096x1716",
        type: 'primary',
      },
      {
        buttonText: "DOWNLOAD",
        downloadUrl: "https://aswf-dpel-assets.s3.amazonaws.com/asc-stem2/EXR/mission_StEM2_EXR_178_3840x2160.zip",
        size: "1.4 TB",
        description: "Single file movie in EXR - ACES AP0 LIN ST2065-1, 1.78, 3840x2160",
        type: 'primary',
      },
    ]
  }
  ]
}

hideButtons: true
licenseContent: [
  "ASWF Digital Assets License v1.1",
  "StEM2 -- Copyright 2022 -- American Society of Cinematographers -- All rights reserved.",
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
