import { useLocation } from "react-router-dom";
import { pageConfig, pagePathsType } from "../../../pageConfig";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="h-[10vh] w-full border-b-2 border-border flex items-center justify-between px-5">
      <div className="text-2xl font-semibold">
        {pageConfig[pathname as pagePathsType]}
      </div>
      <div className="relative min-w-[600px]">
        <input
          type="text"
          placeholder="Αναζήτηση υλικού, έλεγχος αποθεμάτων"
          className="w-full px-4 font-semibold placeholder:text-[rgba(0,0,0,0.58)] focus:text-[rgba(0,0,0,0.58)] focus:outline-none py-2 pl-10 ring-bg ring-2 rounded-lg"
        />
        <div className="absolute left-3 top-2.5">
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-bg"
          >
            <path d="M20.6807 20.4995L16.1166 15.6984C15.7672 15.3308 15.7538 14.763 16.0376 14.3427C17.0286 12.8757 17.5642 11.1399 17.5642 9.34346C17.5642 4.44573 13.6245 0.460968 8.7821 0.460968C3.93973 0.460968 0 4.44573 0 9.34346C0 14.2412 3.93973 18.226 8.7821 18.226C10.3089 18.226 11.7754 17.8347 13.0834 17.0857C13.5152 16.8385 14.0681 16.8864 14.4109 17.247L19.0297 22.1057C19.2477 22.3347 19.5409 22.461 19.8552 22.461C20.1526 22.461 20.4348 22.3463 20.649 22.1377C21.1042 21.6948 21.1187 20.9602 20.6807 20.4995ZM8.7821 2.77814C12.3614 2.77814 15.2732 5.72327 15.2732 9.34346C15.2732 12.9637 12.3614 15.9088 8.7821 15.9088C5.20282 15.9088 2.29098 12.9637 2.29098 9.34346C2.29098 5.72327 5.20282 2.77814 8.7821 2.77814Z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
