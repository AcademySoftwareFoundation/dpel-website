# DPEL Website Doc

**DPEL: Digital Production Example Library**
A library of digital assets - 3D scenes, digital cinema footage, etc. - that demonstrate the scale and complexity of modern feature film production, including computer graphics, visual effects and animation.

## 🚀 Project Structure

Inside the DPEL project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg ( This is the icon that shows up in the browser tab )
│   └── images/ ( All images for the site is stored here )
├── src/
│   └── component/ ( templated elements for the pages )
│   └── content/ ( markdown files are all in here )
│   └── js/ ( utility functions that augment the site's data )
│   └── layout/ ( layout of the markdown data and layout of the page )
│   └── pages/ 
│       └── index.astro ( this is the home page wrapper )
│   └── styles/ ( includes the global style of the entire site )
└── package.json ( dependencies file )
```

About Astro: 
Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
Any static assets, like images, can be placed in the `public/` directory.

## Project Commands
All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Need NPM, what is NPM?
To run the above commands on your local environment, you will need to install NPM on your own environment.
You can install it from here: https://nodejs.org/en/download.
Please install based on the OS you are working on.
To test if you have the it installed you should be able to type ```npm install``` or ```node -v```.

## License
Astro: https://github.com/withastro/astro/blob/main/LICENSE

## To create a new article page
1.) Go to the src > pages folder and create a new folder.
    Name the folder to the url name you want. ie. name: 4004-moore-lane -> url end will be /4004-moore-lane.
2.) Create an `index.astro` file under the new folder.
3.) Copy and paste the code from /alab ( under the same src/pages folder ) and use that as a starter.
4.) Go to the src > content > articles folder and create a `.md` file.
5.) Copy and paste the markdown layout from `DPEL-coming-soon.md`. Fill/Edit in the appropriate info as needed.
6.) Go back to the `index.astro` file under the project folder you set up earlier from /pages. Update this line with your markdown (`.md`) file name --> `const assetContent = await Astro.glob("../../content/articles/fileName.md");`
7.) Save your files and run `npm start dev` to run the project.
8.) You can check this page by going to the name of the folder you set under the pages/ folder.

## To create a new license page
1.) Go under the new folder you made for the article page and create new folder again with the url name you want.
2.) Create an `index.astro` file under the new folder.
3.) Copy and paste the code from /alab-license ( under the same src/pages folder ) and use that as a starter.
4.) Go to the src > content > license folder and create a `.md` file.
5.) Copy and paste the markdown layout from `alab-license.md`. Fill/Edit in the appropriate info as needed.
6.) Go back to the `index.astro` file under the project's license folder you set up earlier from /pages. Update this line with your markdown (`.md`) file name --> `const licenseContent = await Astro.glob("../../../content/license/license-markdown-file-name.md");`
7.) Save your files and run `npm start dev` to run the project.
8.) You can check this page by going to the name of the folder you set under the pages/ folder.

## There are images on the page
All images should be stored in the public/images/ folder. It is important that they are separated by project/page topic that they will be under for organization. 

## Still need help? 
Please reach out to `assets-discussion@lists.aswf.io` or find us on the [ASWF Slack](https://slack.aswf.io/) at `#assets`
