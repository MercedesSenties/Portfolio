import PagesMetaHead from "../PagesMetaHead";
import AppFooterCopyright from "../shared/AppFooterCopyright";
import AppHeader from "../shared/AppHeader";

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
