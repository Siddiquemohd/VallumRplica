import Link from 'next/link';

const MediaSection = () => {
  return (
<>
<section className="relative bg-white">
        {/* Background Image and Overlay */}
        <div className="relative pt-[115px]">
          <img
            src="/images/hand-shak.jpg" // Replace this with the actual image path
            alt="Team Hands"
            className="w-full h-[400px] object-cover" // Ensures the image fits like the provided design
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Media
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            <a href="/" className="hover:underline">HOME</a> &gt; Media
          </p>
        </div>
      </section>
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="shadow-lg p-3 md:p-4" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* First Media Item */}
            <div className="mb-4">
              <div className="bg-gray-100 p-3">
                <div className="full-image"></div>
                <div className="text-center">
                  <div className="grid-item-content">
                    <strong className="text-blue-500">
                      <Link
                        href="https://www.financialexpress.com/money/suitable-for-high-risk-takers-go-for-staggered-bets-in-infra-funds-3567206/"
                        target="_blank"
                      >
                        Suitable for high risk-takers: Go for staggered bets in infra funds
                      </Link>
                    </strong>
                  </div>
                  <div className="grid-item-footer mt-3">
                    <hr />
                    <Link
                      href="https://www.financialexpress.com/money/suitable-for-high-risk-takers-go-for-staggered-bets-in-infra-funds-3567206/"
                      target="_blank"
                      className="text-sm text-blue-600"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Media Item */}
            <div className="mb-4">
              <div className="bg-gray-100 p-3">
                <div className="full-image">
                  <img
                    src="https://vallum.in/api/img/insights/202407300224137555.png"
                    alt="image"
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-center">
                  <div className="grid-item-content">
                    <strong className="text-blue-500">
                      <Link
                        href="https://www.livemint.com/market/bse-psu-index-what-should-investors-do-in-terms-of-nbfcs-public-sector-banks-stock-market-upcoming-union-budget-11721208674337.html"
                        target="_blank"
                      >
                        Earnings vs Expectations: Have PSU stocks become uninvestable
                      </Link>
                    </strong>
                  </div>
                  <div className="grid-item-footer mt-3">
                    <hr />
                    <Link
                      href="https://www.livemint.com/market/bse-psu-index-what-should-investors-do-in-terms-of-nbfcs-public-sector-banks-stock-market-upcoming-union-budget-11721208674337.html"
                      target="_blank"
                      className="text-sm text-blue-600"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Media Item */}
            <div className="mb-4">
              <div className="bg-gray-100 p-3">
                <div className="full-image"></div>
                <div className="text-center">
                  <div className="grid-item-content">
                    <strong className="text-blue-500">
                      <Link
                        href="https://vallum.in/api/img/insights/202407300219105604.pdf"
                        target="_blank"
                      >
                        Rice exporters rally over 9% amid likely easing of curbs
                      </Link>
                    </strong>
                  </div>
                  <div className="grid-item-footer mt-3">
                    <hr />
                    <Link
                      href="https://vallum.in/api/img/insights/202407300219105604.pdf"
                      target="_blank"
                      className="text-sm text-blue-600"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Media Item */}
            <div className="mb-4">
              <div className="bg-gray-100 p-3">
                <div className="full-image"></div>
                <div className="text-center">
                  <div className="grid-item-content">
                    <strong className="text-blue-500">
                      <Link
                        href="https://www.financialexpress.com/money/reduce-dependence-on-only-equities-stagger-your-investments-in-multi-asset-funds-3553619/"
                        target="_blank"
                      >
                        Reduce dependence on only equities: Stagger your investments in multi-asset funds
                      </Link>
                    </strong>
                  </div>
                  <div className="grid-item-footer mt-3">
                    <hr />
                    <Link
                      href="https://www.financialexpress.com/money/reduce-dependence-on-only-equities-stagger-your-investments-in-multi-asset-funds-3553619/"
                      target="_blank"
                      className="text-sm text-blue-600"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Fifth Media Item */}
            <div className="mb-4">
              <div className="bg-gray-100 p-3">
                <div className="full-image"></div>
                <div className="text-center">
                  <div className="grid-item-content">
                    <strong className="text-blue-500">
                      <Link
                        href="https://economictimes.indiatimes.com/markets/stocks/news/equity-market-investors-a-new-powerful-political-constituency/articleshow/111568712.cms?from=mdr"
                        target="_blank"
                      >
                        Equity market investors: A new powerful political constituency
                      </Link>
                    </strong>
                  </div>
                  <div className="grid-item-footer mt-3">
                    <hr />
                    <Link
                      href="https://economictimes.indiatimes.com/markets/stocks/news/equity-market-investors-a-new-powerful-political-constituency/articleshow/111568712.cms?from=mdr"
                      target="_blank"
                      className="text-sm text-blue-600"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Media Item */}
            <div className="mb-4">
              <div className="bg-gray-100 p-3">
                <div className="full-image">
                  <iframe
                    className="w-full h-80"
                    src="https://www.youtube.com/embed/tMfrPtWxry8?si=RnCfM"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    title="video"
                  />
                </div>
                <div className="text-center">
                  <div className="grid-item-content">
                    <strong className="text-blue-500">
                      <Link
                        href="https://www.youtube.com/embed/tMfrPtWxry8?si=RnCfM"
                        target="_blank"
                      >
                        The Market Ahead Of Samvat 2078 | CNBC TV 18 NSE Closing Bell
                      </Link>
                    </strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MediaSection;
