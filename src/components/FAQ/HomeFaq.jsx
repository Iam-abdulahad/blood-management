import React from 'react';

const HomeFaq = () => {
    return (
        <div className='container mx-auto px-5'>
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white dark:text-white text-center py-6">Frequently asked questions</h2>
            <section className="w-full divide-y divide-slate-200 rounded border border-slate-200 bg-white">
                <details className="group p-4" open>
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        What is a blood management organization (BMO)?
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
                        A blood management organization (BMO) is an entity dedicated to the efficient and safe use of blood and blood products in healthcare settings. BMOs work to optimize the entire blood supply chain, from donation to transfusion, to ensure patient safety and reduce costs.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    Why is blood management important?
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
                    Blood management is crucial to ensure that the right blood products are available for patients who need them, reduce unnecessary transfusions, minimize the risks associated with blood transfusions, and conserve a limited resource.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    How does blood management benefit patients?
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
                    Blood management benefits patients by minimizing their exposure to unnecessary blood transfusions, reducing the risk of transfusion-related complications, and ensuring that they receive the right blood products when needed.
                    </p>
                </details>
                <details className="group p-4">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    What are the primary goals of a BMO?
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
                    The primary goals of a BMO include promoting patient safety, ensuring the appropriate use of blood products, reducing healthcare costs, and optimizing the blood supply chain.
                    </p>
                </details>
            </section>
        </div>
    );
};

export default HomeFaq;