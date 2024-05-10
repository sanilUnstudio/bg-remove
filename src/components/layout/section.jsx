import { cn } from '@/utils/helper'

const Section = ({ children, className,...props }) => {
    return (
        <section className={cn('my-12 md:my-24 py-2 text-white',className)} {...props}>
            {children}
        </section>
    )
}

export default Section