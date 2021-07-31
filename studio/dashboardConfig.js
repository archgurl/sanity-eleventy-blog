export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6105b29ca18b5b7184c8295f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-emaahbdq',
                  apiId: 'aabd08af-26fa-4622-8fb0-6e3229892a3d'
                },
                {
                  buildHookId: '6105b29cdcc8a2fa5054a7ad',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-d9oamwek',
                  apiId: '1cada190-b79e-4ef8-8ab6-750d67fca455'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/archgurl/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-d9oamwek.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
