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
		</div>
	);
}
