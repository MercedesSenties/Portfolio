import {
	FiGithub,
	FiLinkedin,
	FiMail,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiMail />,
		url: 'mailto:anamercedes.senties@me.com',
	},
	{
		id: 2,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/ana-mercedes-senties/',
	},
];

function AppFooter() {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-6 sm:mb-12">
					<a
					href="https://github.com/realstoman/nextjs-tailwindcss-portfolio"
					target="__blank"
					className="text-base sm:text-xl mb-5 font-general-regular hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500 text-ternary-dark dark:text-ternary-light"
					>
						Download my resume
					</a>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-lg sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
}

export default AppFooter;
