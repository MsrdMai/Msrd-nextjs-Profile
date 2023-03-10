import { Project } from '@helper/types'
import React, { FC, ReactNode } from 'react'

const TechnicalProjectSection: FC = () => {
	const technicalProjectList: Project[] = [
		{
			title: 'DEV DISRUPT',
			keywords: ['Website', 'Github', 'Talk'],
			date: 'October 2020',
			place: 'Bangkok, Thailand',
			list: [
				'Planning and design project structure about online video consultation',
				'Implemented Vue.js, Firebase and WebRTC for real-time video call',
			],
			link: 'https://www.facebook.com/100845578408011/posts/145822327243669/',
		},
		{
			title: 'ROBO INNOVATOR',
			keywords: ['Robot', 'Hardware', 'AI'],
			date: 'September 2020',
			place: 'Bangkok, Thailand',
			list: [
				'Member of Pascal team to design and create self-driving and logistics car by using ESP32 and NVIDIA Jetson Nano',
			],
			link: 'https://www.facebook.com/103398601365563/posts/170498621322227/',
		},
		{
			title: 'IoT Amaseis',
			keywords: ['Website', 'Hardware'],
			date: 'September 2020',
			place: 'Bangkok, Thailand',
			list: [
				'Develop earthquake frequency sensor by using NERDAQ project integrated with NBIoT to make a sensor sending data into internet',
				'Using Grafana as dashboard to monitor an earthquake frequency graph',
				'This project got 1st place winner in Invention Innovation Contest at Bangkok Meteorological Department',
			],
		},
		{
			title: 'Van booking system',
			keywords: ['Website', 'Talk'],
			date: 'August 2017',
			place: 'Chaiyaphum, Thailand',
			list: [
				'Design project structure that include register, login, dashboard and CRUD',
				'Built frontend with pure HTML, CSS and backend with pure PHP (phpMyAdmin)',
			],
		},
	]

	const [collapse, setCollapse] = React.useState<boolean>(false)

	React.useEffect(() => {
		technicalProjectList.length > 3 ? setCollapse(true) : setCollapse(false)
	}, [])

	const renderProject = (projectlist: Project[]): ReactNode =>
		projectlist.map((project, index) => (
			<div
				key={index}
				className={`mt-4 rounded-lg border border-gray-200 p-4 transition-all dark:border-gray-700`}
			>
				<h3 className="mb-1 flex items-center text-lg font-semibold uppercase text-gray-900 transition-all dark:text-white">
					{project.title}{' '}
					{project?.link && (
						<svg
							className="ml-2 inline-block h-6 w-6 cursor-pointer self-start"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							onClick={() => window.open(project.link)}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							></path>
						</svg>
					)}
				</h3>
				<span className="mb-2 block text-sm font-normal leading-normal text-gray-400 transition-all dark:text-gray-500">
					Keywords: {project.keywords.join(', ')}
				</span>
				<p className="mb-2 text-base font-normal text-gray-500 transition-all dark:text-gray-400">
					{project.date}
					<span className="hidden sm:inline"> | </span>
					<br className="block sm:hidden" />
					{project.place}
				</p>
				{project?.list && (
					<ul className="ml-[20px] list-disc text-base font-normal text-gray-500 transition-all dark:text-gray-400">
						{project.list.map((listElement, index) => {
							return (
								<li key={index} className="mb-2 last:mb-0">
									{listElement}
								</li>
							)
						})}
					</ul>
				)}
			</div>
		))

	return (
		<>
			<span className="relative text-3xl font-normal text-gray-500 transition-all dark:text-gray-300">
				Technical Projects
				<div className="absolute -top-16" id="technicalprojects" />
			</span>
			<div className="pb-6">
				{renderProject(technicalProjectList.slice(0, 3))}
				{!collapse && renderProject(technicalProjectList.slice(3))}
				{technicalProjectList.length > 3 && (
					<div className="mt-4 text-center sm:text-left">
						<button
							className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-black dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							onClick={() => setCollapse(!collapse)}
						>
							{collapse ? 'Show More' : 'Hide'}
						</button>
					</div>
				)}
			</div>
		</>
	)
}

export default TechnicalProjectSection