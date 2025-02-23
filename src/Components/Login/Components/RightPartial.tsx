export default function RightPartial() {
  return (
    <div className="flex-1 min-w-[60%] flex items-center justify-center">
      <form className="flex w-[400px] h-3/5 flex-col justify-between items-center">
        <div className="text-primary-light pb-4 text-4xl font-bold tracking-wider">
          ΣΥΝΔΕΣΗ
        </div>
        <div className="w-full">
          <label htmlFor="username" className="flex justify-center">
            Δ/νση ηλεκτρονικού ταχυδρομείου
          </label>
          <input
            type="text"
            name="username"
            id="username"
            //   onChange={OnChange}
            placeholder="Username"
            className="custom-input py-4 px-3 mt-2"
            autoComplete="username"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="flex justify-center">
            Κωδικός πρόσβασης
          </label>
          <input
            type="password"
            name="password"
            id="password"
            //   onChange={OnChange}
            placeholder="Password"
            className="custom-input py-4 px-3 mt-2"
            autoComplete="password"
            required
          />
        </div>
        <button
          type="submit"
          className="transition duration-300 ease-in-out rounded-lg w-2/3 font-semibold shadow-[0_0_20px_rgba(0,0,0,0.25)] text-center py-3 px-3 text-lg leading-tight bg-primary text-white cursor-pointer hover:bg-primary-light hover:shadow-[0_0_30px_rgba(0,0,0,0.25)]"
        >
          Είσοδος
        </button>
        <div>Ξέχασα τον κωδικό μου</div>
      </form>
    </div>
  );
}
