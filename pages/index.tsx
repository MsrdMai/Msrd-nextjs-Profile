import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import TableOfContents from '@components/TableOfContents/TableOfContents'
import HeroSection from '@components/HeroSection/HeroSection'
import EducationSection from '@components/EducationSection/EducationSection'
import SkillSection from '@components/SkillSection/SkillSection'
import WorkSection from '@components/WorkSection/WorkSection'
import ProjectSection from '@components/ProjectSection/ProjectSection'
import ContactSection from '@components/ContactSection/ContactSection'
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sirilada Sonsomboon (Mai) - Profile</title>
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:type" content="website" />
				<meta
					name="description"
					content="Hi, I'm Sirilada Sonsomboon A front end developer and interested in ..."
				/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/moonnight.ico" />
			</Head>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
			</Script>
			<div className="container mx-auto max-w-7xl px-2 py-4 pt-6 xs:px-8 md:pt-4 xl:px-0">
				<HeroSection />
				<hr className="my-4 border-gray-200 transition-all dark:border-gray-700 sm:mx-auto md:my-6" />
				<div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-4">
					<div>
						<TableOfContents />
					</div>
					<div className="lg:col-span-3">
						<EducationSection />
						<SkillSection />
						<WorkSection />
						<ProjectSection />
					</div>
				</div>
				<hr className="my-4 border-gray-200 transition-all dark:border-gray-700 sm:mx-auto md:my-6" />
				<ContactSection />
			</div>
		</>
	)
}
export default Home
