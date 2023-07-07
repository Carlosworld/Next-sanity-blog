// import { title } from 'process';
// import { defineConfig } from 'sanity';
// import { deskTool } from "sanity/desk";
// // import project from './sanity/schemas/project-schema';
// import schemas from './sanity/schemas';

// const config = defineConfig({
//     projectId:"j6ez3qrl",
//     dataset:"production",
//     title:"My Personal Website",
//     apiVersion:"2023-03-04",
//     BasedPath:"/admin",
//     plugins:[deskTool()],
//     schema: { types: schemas},
// });

// export default config;

import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  // ...
  plugins: [
    dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'My Netlify deploys',
            sites: [
              {
                title: 'Sanity Studio',
                apiId: 'ef29bd4a-05e6-4bbe-8348-0aea9e0e740c',
                buildHookId: 'https://api.netlify.com/build_hooks/64a8998701213a216978703a',
                name: 'next-sanity-app',
              },
              {
                title: 'Website',
                apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
                buildHookId: 'yyyyxxxxxyyyxxdxxx',
                name: 'next-sanity-app',
                url: 'https://next-sanity-app.netlify.app',
              }
            ]
        })
      ]
    })
  ]
})

function defineConfig(arg0: {
    // ...
    plugins: import("sanity").PluginOptions[];
}) {
    throw new Error("Function not implemented.");
}
