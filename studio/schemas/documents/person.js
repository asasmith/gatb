export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
    },
  ],
}
