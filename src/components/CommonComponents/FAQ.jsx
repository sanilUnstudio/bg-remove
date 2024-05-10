import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";
import Section from '../layout/section';
const FaqData = [
    {id:'1', title:'What is Unstudio?', content:'Unstudio is building a suite of AI design tools to empower every brand and creative to create stunning design content for their audience. Our first tool helps you design studio quality photoshoots and marketing images with full control and highest quality.'},
    {id:'2', title:'Is there a free plan available?', content:`Basic features are available for free. You can generate upto 30 free images. You don’t have to put in your credit card for the free plan. Please subscribe to one of the paid plans for advanced features and more images generations.`},
    {id:'3', title: 'How much does Unstudio cost?', content: 'Please check out the pricing page for an in depth comparison of plans and the features.'},
    {id:'4', title: 'Who owns the right to the images I generate using Unstudio.ai?', content: 'You own the images that you have generated. You have the commercial license to use your images, even in the free plan.'},
    {id:'5', title: 'Is customer support available for Unstudio.ai users?', content: 'Yes we are always happy to help you design amazing stuff, please reach out to us at support@unstudio.ai.'},
]

const FAQ = () => {
        return (
            <Section className=' my-0 md:my-0'>
            <h1 className="font-poppin tracking-wide px-1  leading-8 md:leading-10 text-2xl md:text-4xl lg:text-5xl text-white text-center mt-4">
                Frequently Asked Questions...
            </h1>
            <div className='w-11/12 md:w-9/12 mx-auto mt-10'>
                <Accordion
                    itemClasses={{
                        base: "py-0 w-full border-[#5D5D5D] border-b-[.5px] px-6",
                            title: "font-poppin text-white text-sm md:text-lg",
                        trigger: "md:px-2 py-0 font-poppin text-white data-[hover=true]:text-default-100 h-14 flex items-center",
                        indicator: "text-medium -rotate-90 data-[open=true]:rotate-90 text-white text-2xl",
                        content: "text-small md:text-base px-2 font-poppin",
                        divider: "bg-white text-white"
                    }}
                >
                    {FaqData.map((faq) => (
                        <AccordionItem key={faq.id} aria-label={faq.title} title={faq.title}>
                            {faq.content}
                        </AccordionItem>
                    
                    ))}
                </Accordion>
            </div>
        </Section>
    )
}

export default FAQ