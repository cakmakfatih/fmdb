import { MaxWidthLayout } from "../../layout/MainLayout";

export function Header() {
    return (
        <header className="flex justify-between items-stretch flex-col border-b border-slate-700 z-10">
            <section className="flex bg-black text-white py-4 border-b border-gray-700 px-4 flex-1 items-stretch justify-center">
                <MaxWidthLayout className="justify-between select-none">
                    <div className="flex items-center px-2 flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                        </svg>
                        <h1 className="rounded text-xl font-bold ml-2 tracking-wide">
                            fmdb
                        </h1>
                        <input type="text" placeholder="Search.." className="p-2 px-3 ml-4 flex-1 rounded bg-gray-700 focus:bg-gray-500 outline-none focus:ring-white/[0.82] transition-all duration-75 focus:ring-1 border-none" />
                        <div className="flex-[2]"></div>
                    </div>
                    <div className="flex items-end justify-center px-2 flex-col">
                        <button className="min-w-[120px] border font-medium transition-all duration-75 text-sm border-white/[0.42] bg-black/[0.12] hover:bg-red-600 active:bg-red-800 px-5 py-2 mr-2 rounded-full">
                            Sign In
                        </button>
                        <span className="text-sm mr-3 mt-1 opacity-55 hover:opacity-90 click:opacity-100 cursor-pointer">
                            Not a member? Sign up!
                        </span>
                    </div>
                </MaxWidthLayout>
            </section>
            <section className="flex bg-black text-white flex-1 items-stretch justify-center">
                <MaxWidthLayout className="select-none mx-6">
                    <nav className="flex-1 flex justify-between">
                        <ul className="flex items-stretch">
                            <li className="flex items-stretch">
                                <a className="border-b-4 py-2 px-4 border-white" href="">
                                    Home
                                </a>
                            </li>
                            <li className="flex items-stretch">
                                <a className="border-b-4 py-2 text-white/[0.52] px-4 border-white/[0.00] hover:border-white/[0.78] hover:text-white/[0.78] hover:bg-gray-600" href="">
                                    Tv Shows
                                </a>
                            </li>
                            <li className="flex items-stretch">
                                <a className="border-b-4 py-2 text-white/[0.52] px-4 border-white/[0.00] hover:border-white/[0.78] hover:text-white/[0.78] hover:bg-gray-600" href="">
                                    Movies
                                </a>
                            </li>
                        </ul>
                        <ul className="flex items-stretch">
                            <li className="flex items-stretch">
                                <a className="border-b-4 py-2 text-white/[0.52] px-4 border-white/[0.00] hover:border-white/[0.78] hover:text-white/[0.78] hover:bg-gray-600" href="">
                                    Docs
                                </a>
                            </li>
                            <li className="flex items-stretch">
                                <a className="border-b-4 py-2 text-white/[0.52] px-4 border-white/[0.00] hover:border-white/[0.78] hover:text-white/[0.78] hover:bg-gray-600" href="">
                                    Bookmarks
                                </a>
                            </li>
                        </ul>
                    </nav>
                </MaxWidthLayout>
            </section>
        </header>
    );
}