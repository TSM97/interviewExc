import LogoSVG from "../../../svg/LogoSVG";
import NavOption from "../../../svg/NavOption";
import { menuOptions, materialEntriesOptions } from "../data";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between text-nowrap min-h-screen border-r-2 border-border">
      <section className="flex gap-3 items-center p-4 pt-10 pr-12">
        <div className="w-14 h-14">
          <LogoSVG />
        </div>
        <div className="font-semibold">
          <div>Warehouse</div>
          <div>Management</div>
        </div>
      </section>
      <nav className="w-full min-h-2/3 flex flex-col gap-5 px-3">
        <section>
          <div className="pb-3 flex items-center gap-2 font-semibold text-xs text-[rgba(0,0,0,0.58)]">
            <NavOption />
            <div>ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</div>
          </div>
          {menuOptions &&
            menuOptions.map((option) => (
              <button
                type="button"
                key={option.name}
                className="flex item-center text-secondary-light gap-2 px-4 py-2 w-full"
              >
                <div>{option.icon}</div>
                <div>{option.name}</div>
              </button>
            ))}
        </section>
        <section>
          <div className="pb-3 flex items-center gap-2 font-semibold text-xs text-[rgba(0,0,0,0.58)]">
            <NavOption />
            <div>ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</div>
          </div>
          {materialEntriesOptions &&
            materialEntriesOptions.map((option) => (
              <button
                type="button"
                key={option.name}
                className="flex item-center text-secondary-light gap-2 px-4 py-2 w-full"
              >
                <div>{option.icon}</div>
                <div>{option.name}</div>
              </button>
            ))}
        </section>
      </nav>
      <section className="py-3 border-t-2 border-border">
        <button className="px-4 py-2 w-full flex items-center gap-2 font-semibold text-xs text-[rgba(0,0,0,0.58)]">
          <div>ICON</div>
          <div>ΡΥΘΜΙΣΕΙΣ</div>
        </button>
      </section>
    </aside>
  );
}
