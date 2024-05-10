import Head from 'next/head';
import Link from 'next/link';
import TopNavbar from '@/components/layout/navbar';

import Layout from '../components/CommonComponents/Layout';
import { NextSeo } from 'next-seo';
import Footer2 from '../components/CommonComponents/Footer2';

let pageURL = 'https://unstudio.ai/privacy-policy';

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

			<div className='bg-[#171717] h-screen pb-16 '>
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
				<TopNavbar />
				<div
					className='h-[100vh] w-full grid  items-center'
					loading='lazy'
					style={{
						backgroundImage:
							"url('https://res.cloudinary.com/dyj34z2ri/image/upload/v1670317370/bg_wxrqeb.webp')",
					}}
				>
					<div className=' flex flex-col items-center  max-w-screen  mx-auto h-full  pt-2 w-4/5 pb-6 text-white'>
						<div className='text-4xl text-center font-be-vietnam '>
							Privacy Policy
						</div>
						<div className='my-2'>
							<h2 className=' text-2xl '>
								How Unstudio collects and uses data
							</h2>
							<p className='text-base font-inter'>
								This Privacy Policy explains how Pebblely
								collects, uses, processes, discloses, and
								safeguards information we obtain from and about
								our customers, visitors to our Sites, and
								business prospects and partners (collectively,
								“You”), including information we collect when
								you visit our websites or other services offered
								by Pebblely, or purchase our products and
								services (collectively, our “Services”).
							</p>
						</div>
						<div className='my-2 text-white'>
							<h2 className=' text-2xl '>
								Information we collect
							</h2>
							<p className='text-base font-inter'>
								For the purpose of this Privacy Policy,
								“Personal Information” means any information
								relating to an identified or identifiable
								individual. We obtain Personal Information
								relating to you, our business partner, from
								various sources described below. Where
								applicable, we indicate whether and why you must
								provide us with Personal Information, as well as
								the consequences of failing to do so. If you do
								not provide Personal Information when requested,
								you may not be able to benefit from our Services
								if that information is necessary to provide you
								with the service or if we are legally required
								to collect it.
							</p>
						</div>
					</div>
					<Footer2 />
				</div>
			</div>
		</Layout>
	);
}
