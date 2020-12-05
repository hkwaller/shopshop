export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
