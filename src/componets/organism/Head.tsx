import PurelLabel from "../atom/PurelLabel";
import SiteHead from "../head/SiteHead";

const Head = () => {
  return (
    <div className="p-5 bg-purple-500 flex justify-center relative max-w-lg">
      <div className="absolute left-6 text-white">
        <SiteHead />
      </div>
      <PurelLabel contents="Website todo" />
    </div>
  );
};
export default Head;
