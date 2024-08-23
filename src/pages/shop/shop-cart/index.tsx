import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import HeaderInfo1 from "@/components/section/HeaderInfo1";
import ShopCartArea1 from "@/components/section/ShopCartArea1";

import MetaComponent from "@/components/common/MetaComponent";
import MarketLayouts from "@/components/layouts/MarketLayouts";
const metadata = {
  title: "Blackhards - AI Powered Game Project Marketplace | Shop Cart",
};

export default function ShopPageCart() {
  return (
    <MarketLayouts>
      <MetaComponent meta={metadata} />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <HeaderInfo1
        title="Shop Cart"
        brief="Give your visitor a smooth online experience with a solid UX design"
      />
      <ShopCartArea1 />
    </MarketLayouts>
  );
}
