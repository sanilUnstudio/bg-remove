export default {
    name: 'rowImages',
    title: 'Row of Images',
    type: 'object',
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'A short description of the image for accessibility (e.g., screen readers) and SEO'
                },
                
            ],
        }],
            options: {
                layout: 'grid' 
            }
        }
    ],
    preview: {
        select: {
          images: 'images',
        },
        prepare(selection) {
          const {images} = selection;
          return {
            title: `Row of ${images.length} images`,
            media: images?.[0],
          }
        }
      }
};