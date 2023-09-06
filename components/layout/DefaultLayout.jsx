import AppHeader from '../shared/AppHeader';
import AppFooterCopyright from '../shared/AppFooterCopyright';
import PagesMetaHead from '../PagesMetaHead';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<PagesMetaHead />
			<AppHeader />
			<div>{children}</div>
			<AppFooterCopyright />
		</>
	);
};

export default DefaultLayout;
