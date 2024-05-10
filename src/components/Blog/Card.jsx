import { urlFor } from "../../utils/sanity";
import Link from 'next/link';
import dayjs from "dayjs";


var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone')
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)


const Card = ({ dt }) => {

    function formatTimestamp(utcDateString) {
        return dayjs(utcDateString).tz("Asia/Calcutta", true).format('MMM DD,YYYY')
    }

    return (
        <div className='w-[10/12] h-1/2 min-h-[400px] rounded-t-xl overflow-hidden'>
            <Link className="w-full h-full" href={`/blog/${dt.currentSlug}`}>
            <div className='h-[60%] w-full relative'>
                <img src={urlFor(dt.titleImage).url()} className='h-full w-full object-cover' />
                
            </div>
            <div style={{ background: "linear-gradient(180deg, rgba(5,246,174,0.3) 0%, rgba(5,246,174,0.7) 100%)" }} className='relative rounded-b-xl w-full h-[40%]'>
                <div className='h-[calc(100%-1px)]  w-[calc(100%-2px)] absolute top-0 bg-black left-px flex flex-col justify-between gap-2.5 p-4 rounded-b-xl'>
                    {/* <h4 className='text-gray-300 text-sm'>Product</h4> */}
                    <h2 className='text-lg font-medium tracking-wider'>{dt.title}</h2>
                    <h3 className='text-sm text-gray-200 tracking-wider'>{dt.smallDescription}</h3>
                    <h4 className='text-sm flex gap-6 items-center text-gray-200'><span>By {dt.author.name }</span> <span>{formatTimestamp(dt.createdAt)}</span></h4>
                </div>
                </div>
            </Link>
        </div>
    )
}

export default Card