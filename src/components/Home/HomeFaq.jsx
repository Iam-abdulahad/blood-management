import React from 'react';

const HomeFaq = () => {
    return (
        <div className='container mx-auto px-5'>
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white dark:text-white text-center py-6">Frequently asked questions</h2>
            <section className="w-full divide-y divide-slate-200 rounded border border-slate-200 bg-white">
                <details className="group p-4" open>
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        Which languages are available for the components?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac21 desc-ac21"
                        >
                            <title id="title-ac21">Open icon</title>
                            <desc id="desc-ac21">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        Wind UI team currently releases it's components on HTML and React,
                        but also thinking on adding more in the future. You can easily
                        toggle between the two languages through the code blocks, on each
                        page component.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        Which icons are you using in the components?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac22 desc-ac22"
                        >
                            <title id="title-ac22">Open icon</title>
                            <desc id="desc-ac22">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        All our icons related ui components are using, heroicons SVG icons,
                        by the makers of Tailwind CSS.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        How can I learn about the latest changes?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac24 desc-ac24"
                        >
                            <title id="title-ac24">Open icon</title>
                            <desc id="desc-ac24">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        You can find all latest additions and updates in our Changelog page,
                        where we have a detailed timeline for any changes.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        Where can I find the official TailwindCSS documentation?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-slate-700 transition duration-300 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac23 desc-ac23"
                        >
                            <title id="title-ac23">Open icon</title>
                            <desc id="desc-ac23">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                        You can find the official TailwindCSS detailed documentation as well
                        as the official TailwindCSS website link on our footer under
                        Resources.
                    </p>
                </details>
            </section>
        </div>
    );
};

export default HomeFaq;