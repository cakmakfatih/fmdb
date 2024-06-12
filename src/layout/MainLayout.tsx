function MaxWidthLayout({ children, className } : { children: JSX.Element | JSX.Element[], className?: string}) {
    return (
        <div className={`w-full max-w-[1800px] flex items-center ${className}`}>
            { children }
        </div>
    );
}

function MainLayout({ children }: {children?: JSX.Element | JSX.Element[]}): JSX.Element {
    return (
        <div className="items-stretch bg-gray-900 flex flex-1 flex-col absolute left-0 top-0 w-full h-full min-h-0 min-w-0 text-gray-600 subpixel-antialiased">
            <header className="flex justify-between items-stretch flex-col border-b border-slate-700">
                <section className="flex bg-white text-gray-600 py-4 border-b px-4 flex-1 items-stretch justify-center">
                    <MaxWidthLayout className="justify-between">
                        <div className="flex items-center px-2 flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                            </svg>
                            <h1 className="rounded text-xl font-bold ml-2 tracking-wide">
                                fmdb
                            </h1>
                            <input type="text" placeholder="Ara.." className="p-2 px-3 ml-4 flex-1 rounded-sm bg-gray-200 focus:bg-white focus:outline-none focus:ring-slate-400 transition-all duration-75 focus:ring focus:border-none" />
                        </div>
                        <div className="flex items-center px-2">
                            <button className="border font-bold transition-all duration-75 text-sm border-black/[0.24] bg-transparent hover:bg-gray-100 active:bg-gray-200 px-5 py-2 mr-2 rounded-full">
                                Giriş Yap
                            </button>
                        </div>
                    </MaxWidthLayout>
                </section>
                <section className="flex bg-gray-800 text-white flex-1 items-stretch justify-center">
                    <MaxWidthLayout>
                        <nav className="flex">
                            <ul className="flex items-stretch">
                                <li className="flex items-stretch">
                                    <a className="border-b-4 py-2 px-4 border-white" href="">
                                        Filmler
                                    </a>
                                </li>
                                <li className="flex items-stretch">
                                    <a className="border-b-4 py-2 text-white/[0.52] px-4 border-white/[0.00] hover:border-white/[0.78] hover:text-white/[0.78] hover:bg-gray-600" href="">
                                        Diziler
                                    </a>
                                </li>
                                <li className="flex items-stretch">
                                    <a className="border-b-4 py-2 text-white/[0.52] px-4 border-white/[0.00] hover:border-white/[0.78] hover:text-white/[0.78] hover:bg-gray-600" href="">
                                        Kategoriler
                                    </a>
                                </li>
                                <li className="flex items-stretch">
                                    <a className="border-b-4 py-2 text-white/[0.52] px-4 border-white/[0.00] hover:border-white/[0.78] hover:text-white/[0.78] hover:bg-gray-600" href="">
                                        Forum
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </MaxWidthLayout>
                </section>
            </header>
            {children}
        </div>
    );
}

export default MainLayout;
