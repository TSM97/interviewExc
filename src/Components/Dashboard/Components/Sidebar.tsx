import { LogoSVG } from "../../../svg";
import NavOption from "../../../svg/NavOption";
import { SettingsIcon } from "../../../svg";
import { menuOptions, materialEntriesOptions } from "../data";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between text-nowrap min-h-screen border-r-2 border-border">
      {/* Logo */}
      <section className="flex gap-3 px-5 items-center pt-10 pr-12">
        <div className="w-14 h-14">
          <LogoSVG />
        </div>
        <div className="font-semibold">
          <div>Warehouse</div>
          <div>Management</div>
        </div>
      </section>
      {/* Nav */}
      <nav className="w-full min-h-2/3 flex flex-col gap-5">
        <section>
          <div className="pb-3  px-5 flex items-center gap-2 font-semibold text-xs text-[rgba(0,0,0,0.58)]">
            <NavOption />
            <div>ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</div>
          </div>
          {menuOptions &&
            menuOptions.map((option) => (
              <NavLink
                to={`${option.path}`}
                key={option.id}
                className={({ isActive }) =>
                  `transition-colors ease-in duration-200 flex items-center gap-4 pl-9 py-2 w-full text-secondary-light ${
                    isActive ? "bg-primary" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`flex items-center ${
                        isActive ? "text-white" : "text-primary-light"
                      }`}
                    >
                      {option.icon}
                    </span>
                    <div className={isActive ? "text-white" : ""}>
                      {option.name}
                    </div>
                  </>
                )}
              </NavLink>
            ))}
        </section>
        <section>
          <div className="pb-3 flex  px-5 items-center gap-2 font-semibold text-xs text-[rgba(0,0,0,0.58)]">
            <NavOption />
            <div>ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</div>
          </div>
          {materialEntriesOptions &&
            materialEntriesOptions.map((option) => (
              <button
                type="button"
                key={option.name}
                className="flex items-center  px-5 text-secondary-light gap-2 py-2 w-full"
              >
                <div>{option.icon}</div>
                <div>{option.name}</div>
              </button>
            ))}
        </section>
      </nav>
      {/* Settings */}
      <section className="py-3  px-5 border-t-2 border-border">
        <button className="py-2 w-full flex items-center gap-2 font-semibold text-xs text-[rgba(0,0,0,0.58)]">
          <SettingsIcon />
          <div>ΡΥΘΜΙΣΕΙΣ</div>
        </button>
      </section>
    </aside>
  );
}
