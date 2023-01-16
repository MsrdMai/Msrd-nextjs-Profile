import React, { FC } from 'react'
import Typewriter from 'typewriter-effect'

const HeroSection: FC = () => {
	return (
		<>
			<div className="flex h-48 w-48 flex-col justify-between md:flex-row">
				<svg viewBox="0 0 100 100">
					<path
						d="m10,30 c -30 -20, 10 -30,0 0 z "
						fill="hsl(0, 100%, 95%)"
					>
						<animate
							attributeName="d"
							values="m10,0 c -20 -10, 10 -35,0 0 z;
							m20,20 c 0 -10, 30 -35,0 0 z;
							m10,40 c -30 -10, 10 -35,0 0 z;
							m20,60 c 0 -10, 30 -35,0 0 z;
							m10,80 c -30 -10, 10 -35,0 0 z;
							m20,100 c 0 -10, 30 -35,0 0 z;
							m0,130 c -30 -10, 10 -35,0 0 z"
							dur="4s"
							repeatCount="indefinite"
						/>
					</path>

					<path
						d="m10,30 c -30 -20, 10 -40,0 0 z"
						fill="hsl(0, 100%, 95%)"
					>
						<animate
							attributeName="d"
							values="m120,0 c -30 -10, 10 -40,0 0 z;
							m110,20 c 0 -10, 30 -40,0 0 z;
							m100,30 c -30 -10, 10 -40,0 0 z;
							m80,40 c 0 -10, 30 -45,0 0 z;
							m60,50 c -30 -10, 10 -45,0 0 z;
							m40,60 c 0 -10, 30 -30,0 0 z;
							m10,100 c -30 -10, 10 -40,0 0 z"
							dur="4s"
							repeatCount="indefinite"
						/>
					</path>

					<path
						d="m10,30 c 20 20, 10 -40,0 0 z "
						fill="hsl(0, 100%, 95%)"
					>
						<animate
							attributeName="d"
							values="m50,0 c 30 -10, 10 -40,0 0 z;
							m60,20 c 0 10, 30 -40,0 0 z;
							m50,30 c 30 10, 10 -40,0 0 z;
							m60,40 c 0 10, 30 -45,0 0 z;
							m40,50 c 30 10, 10 -45,0 0 z;
							m50,60 c 0 10, 30 -30,0 0 z;
							m70,100 c 30 -10, 10 -40,0 0 z"
							dur="4s"
							repeatCount="indefinite"
						/>
					</path>

					<path
						d="m20,30 c 10 10, 10 -20,0 0 z "
						fill="hsl(0, 100%, 95%)"
					>
						<animate
							attributeName="d"
							values="m50,0 c 30 -10, 10 -40,0 0 z;
							m20,20 c 0 10, 30 -40,0 0 z;
							m30,30 c 30 10, 10 -40,0 0 z;
							m10,40 c 0 10, 30 -45,0 0 z;
							m60,50 c 30 10, 10 -45,0 0 z;
							m40,60 c 0 10, 30 -30,0 0 z;
							m10,100 c 30 -10, 10 -40,0 0 z"
							dur="4s"
							repeatCount="indefinite"
						/>
					</path>
				</svg>
				
			</div>
			<div className="flex flex-col justify-between md:flex-row">
				<div className="flex flex-col justify-between gap-4 md:gap-0">
					<div>
						<span className="mb-2 block text-3xl font-medium transition-all dark:text-gray-200 sm:text-4xl lg:mb-0">
							Hi there, I&apos;m
						</span>
						<span className="block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-4xl font-medium leading-none text-transparent transition-all dark:from-violet-400 dark:to-pink-300 sm:text-5xl lg:leading-normal">
							Sirilada Sonsomboon
						</span>
						<div className="my-4 h-1.5 w-16 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all dark:from-green-400 dark:to-blue-500 lg:mt-0" />
						<div className="text-xl font-medium text-gray-800 transition-all dark:text-gray-300 xs:text-2xl sm:text-3xl">
							<Typewriter
								options={{
									strings: [
										'Web Developer',
										'UX/UI Designer',
										'Front-End Developer',
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</div>
					</div>
					<a
						href="/files/msrd_resume.pdf"
						target="_blank"
						rel="noreferrer"
						className="max-w-fit cursor-pointer text-lg font-medium transition-all dark:text-white xs:text-xl"
					>
						{'<Download Resume />'}
					</a>
				</div>

				<div className="relative my-4 hidden aspect-square w-full max-w-fit self-center sm:w-72 md:my-0 md:block">
					<div className="absolute -right-2 top-2 h-full w-full pb-2 pr-2 sm:p-4">
						<div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all dark:from-yellow-200 dark:to-amber-400" />
					</div>
					<div className="aspect-square h-full w-full pb-2 sm:h-72 sm:p-4">
						<img
							src="/images/msrd_image.jpg"
							alt="Sirilada Sonsomboon"
							title="Sirilada Sonsomboon"
							draggable="true"
							className="relative h-full w-full rounded-full"
						/>
					</div>
				</div>
				
			</div>
		</>
	)
}

export default HeroSection
