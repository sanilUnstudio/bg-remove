import { Verified } from 'lucide-react'
import {defineField, defineArrayMember} from 'sanity'

export default {
    name: 'Unstudio-blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'title',
            },
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'keyword',
            title: 'Keyword',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'keyword',
            },
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                   
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'A short description of the image for accessibility (e.g., screen readers) and SEO'
                        },
                        
                    ],
                    options: {
                        hotspot: true // <-- Defaults to false
                    },
                },
                    {
                        type: 'rowImages',
                    }
            ],
        },
        {
            name: 'author',
            type: 'object',
            title: 'Author',
            fields: [
                {
                    name: 'name',
                    type: 'string',
                    title: 'Author Name',
                },
                {
                    name: 'profilePicture',
                    type: 'image',
                    title: 'Profile Picture',
                }
            ]
        },
        {
            name: 'verified',
            type: 'boolean',
            title: 'Verified',
            description: 'Indicates if the blog post has been verified (true or false)'
        }
    ],
}
