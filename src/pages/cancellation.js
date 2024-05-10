import Head from 'next/head';
import Link from 'next/link';
import TopNavbar from '@/components/layout/navbar';
import Layout from '../components/CommonComponents/Layout';

import Footer2 from '../components/CommonComponents/Footer2';
import { NextSeo } from 'next-seo';
let pageURL = 'https://unstudio.ai/cancellation';

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
					className='w-full grid items-center'
					loading='lazy'
					style={{
						backgroundImage:
							"url('https://res.cloudinary.com/dyj34z2ri/image/upload/v1670317370/bg_wxrqeb.webp')",
					}}
				>
					<div className=' flex flex-col items-center  max-w-screen  mx-auto h-full  pt-2 w-4/5 pb-6 '>
						<div className='text-white text-[3rem] md:text-[4rem] font-bold text-center font-be-vietnam'>
							Cancellation Policies
						</div>
						<div className='text-white font-inter mt-8 mb-4'>
							Your subscription begins as soon as your initial
							payment is processed. You will be charged, in one
							lump sum, the amount shown on the ordering page. All
							amounts shown on the ordering page are in USD.
						</div>
						<div className='text-white font-inter'>
							<p className='font-semibold text-xl text-center mb-3'>
								Automatic Renewals and Charges
							</p>
							<p>
								On your annual renewal date, your subscription
								will automatically renew for another year on the
								then-current Software Service Agreement terms,
								unless you cancel your subscription in
								accordance with the below or Unstudio notifies
								you at least thirty (30) days in advance that it
								is not renewing. Accordingly, every year on your
								annual renewal date until you or we cancel, we
								will automatically charge you an amount equal to
								the number of users on your account multiplied
								by the then-current rate for your plan, plus
								applicable taxes. Additionally, we will
								automatically charge you every three months
								following your subscription start date for the
								then-current term for new paid users you add to
								your account (if any) through a true-up process.
								Before charging you, we will notify you of the
								new paid users added to your account since the
								last billing period. You can choose to either
								keep new paid users or downgrade them to free
								users. On your true-up date, you will be charged
								a prorated amount for the paid users you decide
								to keep for the remaining time in your annual
								term.
							</p>
							<br />
							<p>
								We may change your plan’s rate each annual
								renewal term, but we will notify you in advance
								of any rate change and give you the option to
								cancel. We may also change your plan’s rate at
								any time upon at least 30 day’s written notice,
								provided that if you do not agree with such
								pricing changes you may terminate your
								subscription during such notice period and
								receive a refund for any amounts pre-paid but
								not used at the time of termination.
							</p>
							<p className='font-semibold text-xl text-center mb-3'>
								Cancellation
							</p>
							<p>
								You may cancel your subscription at any time at
								least 30 days before the end of your annual term
								by contacting our support team at
								support@unstudio.ai. In most cases,
								subscriptions are non-refundable. Please review
								our Refund Policy below.
							</p>
							<p className='font-semibold text-xl text-center mb-3'>
								Refund Policy
							</p>
							<p className='mb-2'>
								If you cancel your subscription, you will not
								receive a refund of any portion of the fee paid
								for your annual term, except in limited cases
								described herein. You will be responsible for
								all subscription fees (plus any applicable taxes
								and other charges) incurred for your annual
								term. If you live in the E.U. or Turkey, you are
								eligible for a refund if you cancel your
								subscription within 14 days of purchase. To
								request a refund, send us an email at
								support@unstudio.ai and include your country of
								residence. If you think there’s been an error in
								billing, please contact our support team at
								support@unstudio.ai and we’ll work with you to
								find a solution.
							</p>
						</div>
					</div>
					<Footer2 />
				</div>
			</div>
		</Layout>
	);
}
