import { Project } from '@helper/types'
import React, { FC, ReactNode } from 'react'

const ProjectSection: FC = () => {
	const ProjectSection: Project[] = [
		{
			title: 'MELON ORDER SERVICE AND TRACKING THE QUALITY OF MELON SYSTEM',
			keywords: ['Full-stack', 'Team'],
			date: '2022',
			list: [
				'Full-stack in Django framework and using Bootstrap 5',
				'Analyze Customer Needs and Improve',
				'Develop Image processing by OpenCV (Python)',
				'Medium the purchase and booking of melonto make it easier for melon farm owners to manage customer data.',
				'Reporting is produce by using an image processing method to get a sharper, more detailed image for observing melon changes'
			],
		},
		{
			title: 'Xlearning (attendance )',
			keywords: ['Frontend', 'UX & UI Design', 'Team'],
			date: '2020',
			list: [
				'Classroom attendance management system to solve the problem of learning in the new normal',
				'React Native (Front-End)',
				'Design User Interface',
				'Design new ideas to solve the problem of how to check the attendance of students without touching'
			],
		},
		{
			title: 'Restaurant-Tycoon',
			keywords: ['Full-stack', 'Team'],
			date: '2020',
			list: [
				'Restaurant management system (Warehouse, queue order for dine-in and take-away.)',
				'Full-stack in Django framework and using Bootstrap 5',
				'Analyze Customer Needs and Improve',
				'Design User Interface, databases and back-end',
			],
		},
		{
			title: 'POS ( Point of sale)',
			keywords: ['Full-stack'],
			date: '2019',
			list: [
				'Business management system (Record sales, manage products and sales report )',
				'Full-stack in Django framework and using Bootstrap 5',
				'Design User Interface, databases and back-end',
			],
		},
	]

	const [collapse, setCollapse] = React.useState<boolean>(false)

	React.useEffect(() => {
		ProjectSection.length > 3 ? setCollapse(true) : setCollapse(false)
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
			<span className="relative text-3xl font-normal text-orange-600 bg-orange-100 rounded-full px-4 py-2 transition-all dark:text-gray-900">
				Projects
				<div className="absolute -top-16" id="projects" />
			</span>
			<div>
				{renderProject(ProjectSection.slice(0, 3))}
				{!collapse && renderProject(ProjectSection.slice(3))}
				{ProjectSection.length > 3 && (
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

export default ProjectSection