import React, { FC } from 'react'
import { Work } from '@helper/types'

const WorkSection: FC = () => {
	const workList: Work[] = [
		{
			company: 'Hitachi eBworx',
			role: 'Application Engineer',
			date: 'June 2022 - Now',
			place: 'Bangkok, Thailand',
			list: [
				'Working on agile methodology',
				'Develop micro frontends by using React.js with TypeScript',
				'Develop microservices by using Java Spring Boot',
			],
			link: 'http://www.hitachi-ebworx.com/',
		},
		{
			company: '(Summer Internship) Computer Service Center, KMITL.',
			role: 'Web Application Developer',
			date: 'June 2021 - July 2021',
			place: 'Computer Service Center, King mongkut s institute of technology ladkrabang, Thailand',
			list: [
				'Queue management system',
				'Full-stack',
				'Built web application on Django framework with HTML, CSS and JQuery',
				'Design databases and back-end',
				'Read and analyze requirements',
			],
			link: 'https://queue.kmitl.ac.th/',
		},
		
	]

	return (
		<>
			<span className="relative text-3xl font-normal text-teal-600 bg-teal-100 rounded-full px-4 py-2 transition-all dark:text-gray-900">
				Work Experience
				<div className="absolute -top-16" id="workexperience" />
			</span>
			<div className="pt-4 pl-4">
				<ol className="relative border-l border-gray-200 transition-all dark:border-gray-700">
					{workList.map((work, index) => (
						<li className="ml-6 mb-10 last:mb-6" key={index}>
							<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white transition-all dark:bg-blue-900 dark:ring-gray-900">
								<svg
									className="h-3 w-3 text-blue-600 transition-all dark:text-blue-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clipRule="evenodd"
									></path>
								</svg>
							</span>
							<h3 className="mb-1 flex items-center text-lg font-semibold uppercase text-gray-900 transition-all dark:text-white">
								{work.company}{' '}
								{index === 0 && (
									<span className="mr-2 ml-3 hidden rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium capitalize text-blue-800 transition-all dark:bg-blue-200 dark:text-blue-800 md:inline">
										Latest
									</span>
								)}
							</h3>
							<span className="mb-2 block text-sm font-normal leading-normal text-gray-400 transition-all dark:text-gray-500">
								{work.role}
							</span>
							<p
								className={`text-base font-normal text-gray-500 transition-all dark:text-gray-400 ${
									work?.list ? 'mb-2' : 'mb-4'
								}`}
							>
								{work.date}
								<span className="hidden sm:inline"> | </span>
								<br className="block sm:hidden" />
								{work.place}
							</p>
							{work?.list && (
								<ul className="mb-4 ml-[20px] list-disc text-base font-normal text-gray-500 transition-all dark:text-gray-400">
									{work.list.map((listElement, index) => {
										return (
											<li key={index} className="mb-2 last:mb-0">
												{listElement}
											</li>
										)
									})}
								</ul>
							)}
							{work?.link && (
								<a
									href={work.link}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-black dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>
									More Information{' '}
									<svg
										className="ml-2 h-3 w-3"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</a>
							)}
						</li>
					))}
				</ol>
			</div>
		</>
	)
}

export default WorkSection