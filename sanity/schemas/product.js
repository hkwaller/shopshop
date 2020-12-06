export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
    },
    {
      name: 'checked',
      title: 'Checked',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
