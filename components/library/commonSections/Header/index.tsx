import React, { Suspense } from "react";
import AppHeaderLoadView from "../../loadComponents/appHeaderLoadView";

const CTATopbar = React.lazy(() => import("../../elements/CtaTopbar"));
const AppNavbar = React.lazy(() => import("../../elements/AppNavbar"));

interface AppHeaderPropsInterface {
  headerData: {
    logoUrl: string;
    logo: {
      url: string;
    };
    menuItem: {
      name: string;
      menuType: string;
      url: string | null;
      icon: {
        url: string;
      } | null;
    }[];
    megaMenu: {
      benefits: { text: string; icon: { url: string } }[];
      logo: {
        url: string;
      };
      navServices: {
        title: string;
        media: { url: string };
        url: string | null;
      }[];
    };
  };
}

const AppHeader: React.FC<AppHeaderPropsInterface> = ({ headerData }) => {
  console.log("this is headerData ---> ", headerData);
  return (
    <>
      <Suspense fallback={<AppHeaderLoadView/>}>
        <CTATopbar title="Makeup That Spell Attention - 4 Classy Makeup Looks." />

        {headerData && <AppNavbar headerData={headerData} />}
      </Suspense>
    </>
  );
};

export default AppHeader;
