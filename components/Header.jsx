import { MenuIcon } from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { darkMode } from "../tailwind.config";
import DarkModeToggle from "./DarkMode"

function Header() {
    const {data: session} = useSession();
    const router = useRouter();

    return (
        <div className="shadow-sm border-b border-custom-tertiaryAccent bg-custom-primary sticky top-0 z-50 fade">
            <div className="grid grid-cols-2 md:max-w-3xl lg:grid-cols-3 xl:max-w-6xl mx-auto">
                {/* Left */}
                <div className="col-span-1 lg:col-span-2">
                    <div onClick={() => router.push('/')} className="relative w-176 hidden lg:inline-grid cursor-pointer ">
                        <h1 className="h-16 mt-1 font-kanit font-extrabold text-5xl text-custom-secondaryAccent">SelfRegulator</h1>
                    </div>
                    <div onClick={() => router.push('/')} className="relative w-20 h-20 lg:hidden flex-shrink-0 cursor-pointer flex items-center">
                        {console.log(DarkModeToggle())}
                        <svg class="text-custom-secondaryAccent fill-current" viewBox="0 0 500 500">
                            <polyline points="100 275.303 155.628 275.303 189.082 217.277 259.366 216.46 300.229 148.219 375.009 149.036 399.632 122.59 373.104 100.115 136.561 100 99.881 131.862"/>
                            <path d="M 796 469 m -51.996 0 a 51.996 51.996 0 1 0 103.992 0 a 51.996 51.996 0 1 0 -103.992 0 Z M 796 469 m -29.525 0 a 29.525 29.525 0 0 1 59.05 0 a 29.525 29.525 0 0 1 -59.05 0 Z" transform="matrix(-0.755435, 0.655224, -0.655224, -0.755435, 1140.884436, 122.725967)" bxShape="ring 796 469 29.525 29.525 51.996 51.996 1@a623dee3"/>
                            <polyline points="100.17400360107422 301.4339904785156 153.03399658203125 301.4339904785156 183.09300231933594 348.2430114746094 154.1699981689453 400 131.71600341796875 400 99.98799896240234 373.0140075683594"/>
                            <polyline points="181.40199279785156 400.12200927734375 204.02000427246094 362.6159973144531 273.6059875488281 362.6159973144531 315.6780090332031 289.8949890136719 279.8900146484375 231.48899841308594 311.95599365234375 175.97799682617188 391.8370056152344 175.97799682617188 399.95098876953125 165.27499389648438 400.0369873046875 363.3210144042969 362.635986328125 400.25"/>
                            <ellipse cx="134.842" cy="132.692" rx="34.878" ry="32.692"/>
                            <ellipse cx="134.759" cy="367.308" rx="35.243" ry="32.353" transform="matrix(0.989632, -0.143623, 0, 1.010476, 1.397124, 15.506551)"/>
                            <ellipse cx="365.122" cy="367.558" rx="34.878" ry="32.692"/>
                        </svg>
                    </div>
                </div>

                {/* Right*/}
                <div className="col-span-1 inline-flex items-center justify-end space-x-4">
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    <HomeIcon onClick={() => router.push('/')} className="navBtn" />
                    <DarkModeToggle />
                    {session ? (
                        <>
                            <img 
                                className="h-10 w-10 rounded-full cursor-pointer"
                                src={session.user.image}
                                alt="profile pic"
                                onClick={signOut}
                            />
                        </>
                    ) : 
                    (
                        <>
                            <button 
                                className="text-custom-secondary w-32 p-2 font-bold border border-gray-600 rounded hover:border-green-600 hover:text-green-600" 
                                onClick={signIn} 
                            >
                                Sign In
                            </button>                        
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Header
