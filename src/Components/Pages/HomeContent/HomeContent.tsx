import { ElipseSVG } from "../../../svg";
import { HomePageOptions } from "../../Dashboard/data";

export default function HomeContent() {
  return (
    <div className="pt-[5vw] w-3/4 grid gap-10 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {HomePageOptions &&
        HomePageOptions.map((el) => {
          return (
            <div key={el.id} className="relative">
              <div className="absolute left-0 top-0 -z-10">
                <ElipseSVG fillColor={el.svgColor} />
              </div>
              <div className="z-20 bg-white m-10 px-8 py-2 w-[300px] border border-bg rounded-md">
                <div className="text-lg font-bold">{el.title}</div>
                <div className="text-sm font-semibold opacity-[34%]">
                  {el.subtitle}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
