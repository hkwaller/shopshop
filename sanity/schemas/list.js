export default {
  name: 'list',
  title: 'List',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'product' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
