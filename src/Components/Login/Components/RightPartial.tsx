import { useContext, useState } from "react";
import authenticate from "../../../utils/authenticate";
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LoginEyesShowSVG, LoginEyeSVG } from "../../../svg";

export default function RightPartial() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const context = useContext(AuthContext);
  if (!context) return;
  const { setSession } = context;

  const handleLogin = async (
    username: string | undefined,
    password: string | undefined
  ) => {
    setIsLoading(true);
    if (username && password) {
      const result = await authenticate(username, password);
      if (result.ok) {
        setSession({
          isAuthenticated: result.data?.isAuthenticated,
          user: result.data?.username,
        });
        navigate("/");
      } else {
        if (result.message) setError(result.message);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="flex-1 flex-col min-w-[60%] flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(username, password);
        }}
        className="flex sm:w-[400px] sm:h-3/5 flex-col gap-13 items-center"
      >
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
            value={username}
            onChange={(e) => {
              setError("");
              setUsername(e.target.value);
            }}
            placeholder=""
            className={`custom-input py-4 px-3 mt-2 ${
              error && "!ring-red-400 !text-red-400"
            }`}
            autoComplete="username"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="flex justify-center mb-2">
            Κωδικός πρόσβασης
          </label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => {
                setError("");
                setPassword(e.target.value);
              }}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder=""
              className={`custom-input py-4 px-3 pr-10 ${
                error && "!ring-red-400 !text-red-400"
              }`}
              autoComplete="password"
              required
            />
            {password && (
              <div
                className="cursor-pointer"
                onTouchStart={() => setShowPassword(true)}
                onTouchEnd={() => setShowPassword(false)}
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
              >
                {showPassword ? (
                  <LoginEyesShowSVG className="absolute h-6 w-6 right-2 top-1/2 -translate-y-1/2" />
                ) : (
                  <LoginEyeSVG className="absolute h-6 w-6 right-2 top-1/2 -translate-y-1/2" />
                )}
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="transition duration-300 ease-in-out rounded-lg w-2/3 font-semibold shadow-[0_0_20px_rgba(0,0,0,0.25)] text-center py-3 px-3 text-lg leading-tight bg-primary text-white cursor-pointer hover:bg-primary-light hover:shadow-[0_0_30px_rgba(0,0,0,0.25)]"
        >
          {isLoading ? "Παρακαλώ περιμένετε" : "Είσοδος"}
        </button>
        <div className="text-center">
          <div className="h-6 text-red-500 text-md">{error && error}</div>
          <div>Ξέχασα τον κωδικό μου</div>
        </div>
      </form>
    </div>
  );
}
