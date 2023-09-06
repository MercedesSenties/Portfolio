import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import AppBanner from '../components/shared/AppBanner';
import AboutMe from '../components/about/AboutMe';
import ContactDetails from '../components/contact/ContactDetails';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="AM" />

			<AppBanner />

			<ProjectsGrid />

			<AboutMe />

			<ContactDetails />

			{/* <div id="contact" className="mt-20 text-ternary-dark dark:text-ternary-light">
				<p className="text-center font-general-medium text-2xl sm:text-4xl mb-10">
					CONTACT
				</p>
				<p className="text-center sm:text-left font-general-medium text-2xl sm:text-2xl lg:text-3xl md:text-4xl mb-5">
					I'd love to get in touch!
				</p>
				<p className="text-center sm:text-left font-general-medium text-xl sm:text-xl md:text-2xl mb-1">
					Feel free to send me a message on <a
					href="https://www.linkedin.com/in/ana-mercedes-senties/"
					target="__blank"
					className="text-xl sm:text-2xl font-general-regular hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
					>
						Linkedin
					</a>, or reach out over <a
					href="mailto:anamercedes.senties@me.com"
					target="__blank"
					className="text-xl sm:text-2xl font-general-regular hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
					>
						email
					</a>.
				</p>
			</div> */}

		</div>
	);
}
