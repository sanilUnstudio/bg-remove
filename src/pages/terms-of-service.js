import Head from 'next/head';
import Link from 'next/link';
import TopNavbar from '@/components/layout/navbar';

import Layout from '../components/CommonComponents/Layout';
import { NextSeo } from 'next-seo';
import Footer2 from '../components/CommonComponents/Footer2';

let pageURL = 'https://unstudio.ai/terms-of-service';

export default function Cancellation() {
	return (
		<Layout>
			<NextSeo
				title='Create Stunning Product Visuals using AI, instantly | Unstudio'
				description='Unstudio uses AI to create stunning visuals for your products for marketing, social media, website and more, instantly. No Photoshoots required.'
				canonical={pageURL}
				instagram={{
					handle: '@unstudio.ai',
					site: '@unstudio.ai',
					cardType: 'summary_large_image',
				}}
				linkedin={{
					handle: '@unstudio.ai',
					site: '@unstudio.ai',
					cardType: 'summary_large_image',
				}}
				openGraph={{
					url: pageURL,
					title: 'Create Stunning Product Visuals using AI, instantly | Unstudio',
					description:
						'Unstudio uses AI to create stunning visuals for your products for marketing, social media, website and more, instantly. No Photoshoots required.',
					site_name:
						'Create Stunning Product Visuals using AI, instantly | Unstudio',
				}}
			></NextSeo>

			<div className='bg-[#171717] h-screen'>
				<Head>
					<script
						type='application/ld+json'
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								'@context': 'https://schema.org',
								'@type': 'Project',
								name: 'Unstudio',
								alternateName: 'AI product visuals',
								url: 'https://www.unstudio.ai/',
								logo: 'https://www.unstudio.ai/logo_unstudio3.png',
								sameAs: [
									'https://www.linkedin.com/company/unstudioai',
									'https://www.instagram.com/unstudio.ai/',
									'https://www.unstudio.ai/',
								],
							}),
						}}
					/>
				</Head>
				<TopNavbar/>
				<div className='w-full flex flex-col justify-center items-center overflow-y-scroll'>
					<div
						className='w-full grow flex flex-col justify-center items-center'
						loading='lazy'
						style={{
							backgroundImage:
								"url('https://res.cloudinary.com/dyj34z2ri/image/upload/v1670317370/bg_wxrqeb.webp')",
						}}
					>
						<div className=' w-4/5 flex flex-col items-center pt-6 pb-6'>
							<div className='text-white text-[3rem] md:text-[4rem] font-bold text-center font-be-vietnam'>
								Terms of Service
							</div>
							<div className='h-full text-white my-2 font-inter '>
								<p className='font-semibold text-xl text-center'>
									Your responsibilites in using Unstudio
								</p>
								<br />
								<p className='text-center text-sm'>
									By using the unstudio.ai website or product
									(“Services”), you are agreeing to be bound
									by the following terms and conditions
									(“Terms of Service”). If you are entering
									into this agreement on behalf of a company
									or other legal entity, you represent that
									you have the authority to bind such entity,
									its affiliates and all users who access our
									services through your account to these terms
									and conditions, in which case the terms
									“you” or “your” shall refer to such entity,
									its affiliates and users associated with it.
									If you do not have such authority, or if you
									do not agree with these terms and
									conditions, you must not accept this
									agreement and may not use the services.
									Unstudio reserves the right to update and
									change the Terms of Service from time to
									time without notice. Any new features that
									augment or enhance the current Services,
									including the release of new tools and
									resources, shall be subject to the Terms of
									Service. Continued use of the Services after
									any such changes shall constitute your
									consent to such changes.
									<br />
									<br />
									Violation of any of the terms below will
									result in the termination of your Account.
									While Unstudio prohibits such conduct and
									Content on the Services, you understand and
									agree that Unstudio cannot be responsible
									for the Content posted on the Services and
									you nonetheless may be exposed to such
									materials. You agree to use the Service at
									your own risk.
								</p>
							</div>
						</div>
					</div>

					<Footer2 />
				</div>
			</div>
		</Layout>
	);
}
