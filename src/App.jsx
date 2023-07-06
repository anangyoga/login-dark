import { ReactComponent as EyeIcon } from "./assets/eye.svg";

const App = () => {
  return (
    <main className="bg-black min-h-screen">
      <section className="flex items-center px-[60px] min-h-screen">
        <div className="w-2/3">
          <h1 className="text-8xl font-semibold text-white leading-normal">Welcome Back .!</h1>

          <div className="pl-5">
            <span className="text-[32px] text-white font-semibold italic border-4 border-white px-6 py-[14px]">Skip the lag ?</span>
          </div>
        </div>
        <div className="w-1/3">
          <div className="border border-gray-200 rounded-2xl bg-white bg-opacity-10 backdrop-blur-xl px-10 py-24 text-white flex flex-col gap-[14px]">
            <div>
              <h3 className="text-4xl leading-normal font-semibold">Login</h3>
              <p className="text-base font-medium leading-normal">Glad you’re back.!</p>
            </div>
            <div className="flex flex-col gap-6">
              <input className="px-4 py-[14px] w-full bg-transparent border border-gray-100 rounded-2xl placeholder:text-xl placeholder:font-normal placeholder:text-white placeholder:leading-normal" type="text" placeholder="Username" />

              <div className="relative flex flex-col gap-[14px]">
                <input
                  className="px-4 py-[14px] w-full bg-transparent border border-gray-100 rounded-2xl placeholder:text-xl placeholder:font-normal placeholder:text-white placeholder:leading-normal"
                  type="password"
                  placeholder="Password"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                  <EyeIcon className="h-[18px] w-[18px]" />
                </div>
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <label>Remember Me</label>
                </div>
              </div>
              <button className="text-xl font-semibold leading-normal px-[10px] py-[14px] bg-gradient-to-r from-[#628EFF] via-[#8740CD] to-[#580475] rounded-2xl">Login</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
