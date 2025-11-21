export default function Home() {
  return (
    <main className="min-h-screen bg-healey-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-healey-white/90 backdrop-blur-sm border-b border-healey-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold text-healey-charcoal font-[family-name:var(--font-display)]">
            HEALEY PRE-IPO
          </div>
          <a href="mailto:christine@healeypreipo.com" className="text-sm text-healey-gray-600 hover:text-healey-charcoal transition-colors">
            Contact Christine
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-healey-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-healey-white/10 text-healey-white/90 text-sm font-medium rounded-full mb-6">
            5-Email Educational Series
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Pre-IPO Investing:<br />The Wealth-Building Market You Couldn&apos;t Access
          </h1>
          <p className="text-xl text-healey-gray-200 max-w-2xl mx-auto">
            How to generate 2x-10x returns by investing before companies go public
          </p>
        </div>
      </section>

      {/* Course Objectives */}
      <section className="py-16 bg-healey-light border-b border-healey-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-healey-charcoal mb-8">What You&apos;ll Learn</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3 text-healey-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-healey-accent mt-1">1.</span>
                  <span>Why pre-IPO investors see 4x-10x returns while IPO investors often lose money</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-healey-accent mt-1">2.</span>
                  <span>How the secondary market works and where shares come from</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-healey-accent mt-1">3.</span>
                  <span>The different investment structures (SPVs, direct shares, tender offers)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-healey-accent mt-1">4.</span>
                  <span>Real risks and how to evaluate opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-healey-accent mt-1">5.</span>
                  <span>How to actually access deals without $1M+ minimums</span>
                </li>
              </ul>
            </div>

            <div className="bg-healey-white rounded-xl p-6 border border-healey-gray-200">
              <h3 className="font-semibold text-healey-charcoal mb-4">By the end of this series:</h3>
              <ul className="space-y-2 text-healey-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-healey-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Understand why pre-IPO generates outsized returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-healey-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Navigate the fragmented market without insider connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-healey-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Know which investment structures make sense for you</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-healey-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Spot winning opportunities and avoid disasters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Day Navigation */}
      <section className="py-6 bg-healey-white border-b border-healey-gray-200 sticky top-[73px] z-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <a href="#email1" className="px-4 py-2 bg-healey-light rounded-lg text-sm font-medium text-healey-gray-600 hover:bg-healey-charcoal hover:text-white transition-colors border border-healey-gray-200">Email 1</a>
            <a href="#email2" className="px-4 py-2 bg-healey-light rounded-lg text-sm font-medium text-healey-gray-600 hover:bg-healey-charcoal hover:text-white transition-colors border border-healey-gray-200">Email 2</a>
            <a href="#email3" className="px-4 py-2 bg-healey-light rounded-lg text-sm font-medium text-healey-gray-600 hover:bg-healey-charcoal hover:text-white transition-colors border border-healey-gray-200">Email 3</a>
            <a href="#email4" className="px-4 py-2 bg-healey-light rounded-lg text-sm font-medium text-healey-gray-600 hover:bg-healey-charcoal hover:text-white transition-colors border border-healey-gray-200">Email 4</a>
            <a href="#email5" className="px-4 py-2 bg-healey-light rounded-lg text-sm font-medium text-healey-gray-600 hover:bg-healey-charcoal hover:text-white transition-colors border border-healey-gray-200">Email 5</a>
          </div>
        </div>
      </section>

      {/* Email Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* EMAIL 1 */}
          <article id="email1" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-healey-charcoal rounded-xl flex items-center justify-center text-white font-semibold">
                1
              </span>
              <div>
                <p className="text-sm text-healey-gray-500 font-medium">Day 0 - Immediate</p>
                <h2 className="text-2xl font-semibold text-healey-charcoal">The Locked Vault</h2>
              </div>
            </div>

            <div className="bg-healey-white rounded-xl border border-healey-gray-200 overflow-hidden">
              <div className="bg-healey-light px-6 py-4 border-b border-healey-gray-200">
                <p className="text-sm text-healey-gray-500">Subject Line:</p>
                <p className="font-semibold text-healey-charcoal">&quot;Welcome to pre-IPO investing (the wealth-building market you couldn&apos;t access... until now)&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-healey-gray-600 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-3">Opening Hook:</h3>
                  <p className="text-lg">The biggest wealth creation in tech history happened before you could invest.</p>
                  <p className="mt-2">Here&apos;s why:</p>
                </div>

                <div className="bg-healey-light rounded-xl p-6 border border-healey-gray-200">
                  <h3 className="font-semibold text-healey-charcoal mb-4">The Pre-IPO Return Advantage</h3>
                  <p className="mb-4">When companies go public, most of the value creation has already happened. The data tells the story:</p>
                  <ul className="space-y-3 text-sm">
                    <li><strong>VC-backed IPOs (2024-2025):</strong> Companies surged 450% on average from their IPO price</li>
                    <li><strong>Pre-IPO to IPO jump (2024):</strong> Median pre-IPO valuation was $328M. Post-IPO: 4x higher</li>
                    <li><strong>Translation:</strong> If you invested at the last pre-IPO round, you saw 4x returns by IPO day</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-4">Real-World Examples:</h3>

                  <div className="space-y-4">
                    <div className="bg-healey-light rounded-lg p-4 border border-healey-gray-200">
                      <h4 className="font-semibold text-healey-charcoal mb-2">StandardAero (IPO: October 2024)</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Pre-IPO investors: ~$24/share equivalent</li>
                        <li>IPO pricing: $31/share</li>
                        <li>First-day close: $40/share</li>
                        <li className="text-healey-green font-medium">Pre-IPO gain: 67% on IPO day alone</li>
                      </ul>
                    </div>

                    <div className="bg-healey-light rounded-lg p-4 border border-healey-gray-200">
                      <h4 className="font-semibold text-healey-charcoal mb-2">Revolut (Secondary market 2024)</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Late 2024 tender offer: $45B valuation</li>
                        <li>Current secondary market: $70B+ estimated</li>
                        <li className="text-healey-green font-medium">Secondary buyers gain: 55%+ in less than 12 months</li>
                      </ul>
                    </div>

                    <div className="bg-healey-light rounded-lg p-4 border border-healey-gray-200">
                      <h4 className="font-semibold text-healey-charcoal mb-2">The Uber Reality Check</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Pre-IPO employees (2015-2017): Shares at $0.50-$5</li>
                        <li>IPO price (May 2019): $45</li>
                        <li className="text-healey-green font-medium">Pre-IPO gain: 9x-90x depending on entry</li>
                        <li className="text-healey-red">IPO day investors: Lost money for 2+ years</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-3">Why Pre-IPO Investors Win</h3>
                  <p className="mb-4">The math is simple: you&apos;re buying growth before it&apos;s priced in.</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-healey-red/5 border border-healey-red/20 rounded-lg p-4">
                      <h4 className="font-semibold text-healey-red mb-2">Public market investors pay for:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Proven track record (already validated)</li>
                        <li>• Market hype (everyone knows the company)</li>
                        <li>• IPO premium (banks price for maximum extraction)</li>
                      </ul>
                    </div>
                    <div className="bg-healey-green/5 border border-healey-green/20 rounded-lg p-4">
                      <h4 className="font-semibold text-healey-green mb-2">Pre-IPO investors buy:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Growth potential (before it materializes)</li>
                        <li>• Discounted valuations (10-30% below last round)</li>
                        <li>• Insider access (before mainstream)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-3">The &quot;Staying Private Longer&quot; Phenomenon</h3>
                  <p className="mb-4">Companies used to IPO after 4 years. Now? Average time to IPO is <strong>11 years</strong>.</p>
                  <p className="mb-4">More value creation happens privately:</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Uber:</strong> $3.7B (2014) → $82B at IPO (2019)</li>
                    <li><strong>Airbnb:</strong> $10B (2014) → $47B at IPO (2020)</li>
                    <li><strong>SpaceX:</strong> $10B (2015) → $400B (2025, still private)</li>
                  </ul>
                  <p className="mt-4 text-healey-accent font-medium">That 5-10 year window of explosive growth now happens before IPO—and you can access it.</p>
                </div>

                <div className="bg-healey-charcoal text-white rounded-xl p-6">
                  <h3 className="font-semibold mb-3">But Here&apos;s the Problem: Access is Brutally Hard</h3>
                  <div className="space-y-4 text-healey-gray-300 text-sm">
                    <div>
                      <h4 className="text-white font-medium mb-1">1. No Central Exchange</h4>
                      <p>Unlike buying Apple stock, pre-IPO shares trade in a fragmented secondary market with no centralized platform.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">2. Relationship-Based Access</h4>
                      <p>Historically required: VC firm with $100M+ fund, personal employee connections, or family office access.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">3. Astronomical Minimums</h4>
                      <p>$100,000 - $1,000,000 minimum per company. This locked out 99% of accredited investors.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">4. Information Asymmetry</h4>
                      <p>No Bloomberg terminal for private companies. No analyst coverage. No quarterly earnings.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-3">The Shift That Changed Everything</h3>
                  <p className="mb-4">Two things happened in the last 5 years:</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li><strong>Companies stayed private longer</strong> (4 years in 2000 → 11 years in 2025)</li>
                    <li><strong>Employees needed liquidity</strong> (can&apos;t wait a decade to access wealth)</li>
                  </ol>
                  <p className="mt-4">This created a massive secondary market—and your opportunity.</p>
                </div>

                <div className="bg-healey-light rounded-xl p-6 border border-healey-gray-200">
                  <h3 className="font-semibold text-healey-charcoal mb-3">What&apos;s Coming Next:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-healey-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Email 2:</strong> How the secondary market actually works</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-healey-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Email 3:</strong> Investment structures (SPVs, direct shares, tender offers)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-healey-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Email 4:</strong> Real risks and how to evaluate opportunities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-healey-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Email 5:</strong> How to access deals without $1M+ minimums</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-healey-gold/10 border border-healey-gold/30 rounded-xl p-4">
                  <p className="text-sm text-healey-gray-700">
                    <strong>P.S.</strong> If you&apos;re thinking &quot;This sounds too good to be true,&quot; you&apos;re right to be skeptical. Pre-IPO investing has real risks—illiquidity, overvaluation, and no IPO guarantee. We&apos;ll cover all of that in Email 4. But the returns data doesn&apos;t lie.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* EMAIL 2 */}
          <article id="email2" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-healey-charcoal rounded-xl flex items-center justify-center text-white font-semibold">
                2
              </span>
              <div>
                <p className="text-sm text-healey-gray-500 font-medium">Day 2</p>
                <h2 className="text-2xl font-semibold text-healey-charcoal">How the Market Works</h2>
              </div>
            </div>

            <div className="bg-healey-white rounded-xl border border-healey-gray-200 overflow-hidden">
              <div className="bg-healey-light px-6 py-4 border-b border-healey-gray-200">
                <p className="text-sm text-healey-gray-500">Subject Line:</p>
                <p className="font-semibold text-healey-charcoal">&quot;Why SpaceX employees sell $100M+ in shares every year (and how you can participate)&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-healey-gray-600 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-3">The Employee Liquidity Problem</h3>
                  <div className="bg-healey-light rounded-xl p-4 border border-healey-gray-200">
                    <p className="font-medium text-healey-charcoal mb-2">Sarah joined SpaceX in 2015 as an engineer:</p>
                    <ul className="space-y-1 text-sm mb-4">
                      <li>• $120,000 salary</li>
                      <li>• 10,000 stock options at $10/share</li>
                    </ul>
                    <p className="font-medium text-healey-charcoal mb-2">Fast forward to 2025:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Her SpaceX shares are worth <strong>$5.6 million</strong></li>
                      <li>• She can&apos;t sell them (company is still private)</li>
                      <li>• She wants to buy a house, pay off loans, diversify</li>
                    </ul>
                    <p className="mt-3 text-healey-accent font-medium">She&apos;s equity-rich but cash-poor. This is the pre-IPO liquidity crisis.</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-3">Why Companies Facilitate Secondary Sales</h3>
                  <p className="mb-4">Smart companies like SpaceX, Stripe, and OpenAI run structured liquidity programs. Why?</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li><strong>Retention:</strong> Employees don&apos;t quit just to access wealth</li>
                    <li><strong>Morale:</strong> Team members can buy homes, enjoy financial security</li>
                    <li><strong>Control:</strong> Company controls who buys shares</li>
                    <li><strong>Cap table management:</strong> Better than random secondary sales</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-3">How This Creates Your Opportunity</h3>
                  <p className="mb-4">When Sarah wants to sell $500K of her SpaceX shares:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Direct buyer would need $500K minimum (too high for most)</li>
                    <li>• Instead, platforms create <strong>SPVs</strong> that pool 10-20 investors</li>
                    <li>• Each investor contributes $25K-$100K</li>
                    <li>• The SPV buys Sarah&apos;s $500K block as a single entity</li>
                  </ul>
                  <p className="mt-4 text-healey-green font-medium">You get access to SpaceX shares with $25K instead of $500K.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-3">What Makes This Market Inefficient (And Profitable)</h3>
                  <p className="mb-4">Because it&apos;s fragmented and relationship-based:</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Discount opportunities:</strong> Sellers needing quick liquidity may accept 10-30% below last round</li>
                    <li><strong>Information edge:</strong> Investors who do deep diligence have advantage over hype-chasers</li>
                    <li><strong>Access premium:</strong> Getting into competitive deals requires trusted relationships</li>
                  </ul>
                </div>

                <div className="bg-healey-light rounded-xl p-4 border border-healey-gray-200">
                  <p className="font-semibold text-healey-charcoal">Tomorrow:</p>
                  <p className="text-sm text-healey-gray-600">The different investment structures (direct shares, SPVs, tender offers—and which is right for you)</p>
                </div>
              </div>
            </div>
          </article>

          {/* EMAIL 3 */}
          <article id="email3" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-healey-charcoal rounded-xl flex items-center justify-center text-white font-semibold">
                3
              </span>
              <div>
                <p className="text-sm text-healey-gray-500 font-medium">Day 4</p>
                <h2 className="text-2xl font-semibold text-healey-charcoal">Investment Structures Explained</h2>
              </div>
            </div>

            <div className="bg-healey-white rounded-xl border border-healey-gray-200 overflow-hidden">
              <div className="bg-healey-light px-6 py-4 border-b border-healey-gray-200">
                <p className="text-sm text-healey-gray-500">Subject Line:</p>
                <p className="font-semibold text-healey-charcoal">&quot;SPVs vs. Direct Shares vs. Tender Offers: The pre-IPO structure guide&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-healey-gray-600 leading-relaxed">
                <p>Not all pre-IPO investments are structured the same. Here&apos;s what you need to know:</p>

                {/* Structure 1 */}
                <div className="bg-healey-light rounded-xl p-6 border border-healey-gray-200">
                  <h3 className="font-semibold text-healey-charcoal mb-4">Structure #1: Direct Share Purchase</h3>
                  <p className="mb-4 text-sm">You buy shares directly from an employee, early investor, or secondary platform.</p>

                  <p className="text-sm font-medium text-healey-charcoal mb-2">Minimums: $100,000 - $1,000,000+</p>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm font-medium text-healey-green mb-2">Pros:</p>
                      <ul className="space-y-1 text-xs">
                        <li>✓ Direct ownership (no intermediary)</li>
                        <li>✓ Clearest structure</li>
                        <li>✓ Best terms (no SPV fees)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-healey-red mb-2">Cons:</p>
                      <ul className="space-y-1 text-xs">
                        <li>✗ Highest minimums</li>
                        <li>✗ Hardest to find</li>
                        <li>✗ Full capital upfront</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-healey-accent">Best for: High-net-worth investors who can deploy $250K+ per company</p>
                </div>

                {/* Structure 2 */}
                <div className="bg-healey-light rounded-xl p-6 border border-healey-gray-200">
                  <h3 className="font-semibold text-healey-charcoal mb-4">Structure #2: Special Purpose Vehicle (SPV)</h3>
                  <p className="mb-4 text-sm">A legal entity (LLC) that pools capital from multiple investors to buy shares in one company.</p>

                  <p className="text-sm font-medium text-healey-charcoal mb-2">Minimums: $25,000 - $100,000</p>

                  <div className="bg-healey-white rounded-lg p-3 mb-4 border border-healey-gray-200">
                    <p className="text-xs font-medium text-healey-charcoal mb-1">Example:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Target: OpenAI shares from early employee</li>
                      <li>• Block size: $2 million</li>
                      <li>• SPV: 40 investors × $50K each</li>
                      <li>• Your ownership: 2.5% of SPV = indirect OpenAI ownership</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-healey-green mb-2">Pros:</p>
                      <ul className="space-y-1 text-xs">
                        <li>✓ Accessible minimums ($25K-$100K)</li>
                        <li>✓ Democratizes access</li>
                        <li>✓ Platform handles legal work</li>
                        <li>✓ Diversification possible</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-healey-red mb-2">Cons:</p>
                      <ul className="space-y-1 text-xs">
                        <li>✗ Fees (1-2% annual + 5-10% carry)</li>
                        <li>✗ Extra legal layer</li>
                        <li>✗ Some companies restrict SPVs</li>
                        <li>✗ Less liquidity</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-healey-accent">Best for: Accredited investors with $50K-$200K to deploy across multiple positions</p>
                </div>

                {/* Structure 3 */}
                <div className="bg-healey-light rounded-xl p-6 border border-healey-gray-200">
                  <h3 className="font-semibold text-healey-charcoal mb-4">Structure #3: Company-Sponsored Tender Offer</h3>
                  <p className="mb-4 text-sm">The company runs a liquidity program allowing shareholders to sell to approved external investors.</p>

                  <p className="text-sm font-medium text-healey-charcoal mb-2">Minimums: $100K-$500K typical</p>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm font-medium text-healey-green mb-2">Pros:</p>
                      <ul className="space-y-1 text-xs">
                        <li>✓ Company-blessed (least friction)</li>
                        <li>✓ Transparent pricing</li>
                        <li>✓ Clean cap table</li>
                        <li>✓ Best liquidity potential</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-healey-red mb-2">Cons:</p>
                      <ul className="space-y-1 text-xs">
                        <li>✗ Infrequent (1-2x per year)</li>
                        <li>✗ Oversubscribed</li>
                        <li>✗ Company approval required</li>
                        <li>✗ Price may not reflect market</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-healey-accent">Best for: Investors who want company-sanctioned deals and are patient with timing</p>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-healey-gray-200">
                        <th className="text-left py-2 text-healey-charcoal">Feature</th>
                        <th className="text-center py-2 text-healey-charcoal">Direct</th>
                        <th className="text-center py-2 text-healey-charcoal">SPV</th>
                        <th className="text-center py-2 text-healey-charcoal">Tender</th>
                      </tr>
                    </thead>
                    <tbody className="text-healey-gray-600">
                      <tr className="border-b border-healey-gray-100">
                        <td className="py-2">Minimum</td>
                        <td className="text-center">$100K-$1M+</td>
                        <td className="text-center">$25K-$100K</td>
                        <td className="text-center">$100K-$500K</td>
                      </tr>
                      <tr className="border-b border-healey-gray-100">
                        <td className="py-2">Ownership</td>
                        <td className="text-center">Direct</td>
                        <td className="text-center">Indirect</td>
                        <td className="text-center">Direct</td>
                      </tr>
                      <tr className="border-b border-healey-gray-100">
                        <td className="py-2">Fees</td>
                        <td className="text-center">Lowest</td>
                        <td className="text-center">1-2% + carry</td>
                        <td className="text-center">Platform only</td>
                      </tr>
                      <tr>
                        <td className="py-2">Access</td>
                        <td className="text-center">Hardest</td>
                        <td className="text-center">Moderate</td>
                        <td className="text-center">Hardest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-healey-light rounded-xl p-4 border border-healey-gray-200">
                  <p className="font-semibold text-healey-charcoal">Tomorrow:</p>
                  <p className="text-sm text-healey-gray-600">The real risks of pre-IPO investing (and how to avoid the horror stories)</p>
                </div>
              </div>
            </div>
          </article>

          {/* EMAIL 4 */}
          <article id="email4" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-healey-charcoal rounded-xl flex items-center justify-center text-white font-semibold">
                4
              </span>
              <div>
                <p className="text-sm text-healey-gray-500 font-medium">Day 6</p>
                <h2 className="text-2xl font-semibold text-healey-charcoal">Understanding the Risks</h2>
              </div>
            </div>

            <div className="bg-healey-white rounded-xl border border-healey-gray-200 overflow-hidden">
              <div className="bg-healey-light px-6 py-4 border-b border-healey-gray-200">
                <p className="text-sm text-healey-gray-500">Subject Line:</p>
                <p className="font-semibold text-healey-charcoal">&quot;The 3 risks of pre-IPO investing (and why most &apos;horror stories&apos; miss the point)&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-healey-gray-600 leading-relaxed">
                <p className="font-medium text-healey-charcoal">High reward comes with real risks—here&apos;s what to watch for:</p>

                {/* Risk 1 */}
                <div className="bg-healey-red/5 border border-healey-red/20 rounded-xl p-6">
                  <h3 className="font-semibold text-healey-red mb-3">Risk #1: Illiquidity (The Lock-Up Problem)</h3>
                  <p className="mb-4 text-sm">Your capital is locked until a liquidity event:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>IPO:</strong> 180-day lock-up after IPO → then you can sell</li>
                    <li>• <strong>Acquisition:</strong> You get bought out at deal price</li>
                    <li>• <strong>Stays private:</strong> You&apos;re stuck indefinitely</li>
                  </ul>
                  <div className="mt-4 bg-healey-white rounded-lg p-3">
                    <p className="text-xs font-medium text-healey-charcoal mb-1">Timeframe reality:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Best case: 12-24 months</li>
                      <li>• Average case: 3-5 years</li>
                      <li>• Worst case: 7-10+ years (or never)</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-xs text-healey-charcoal font-medium">Mitigation: Only invest &quot;lock-up capital&quot; you won&apos;t need for 5+ years</p>
                </div>

                {/* Risk 2 */}
                <div className="bg-healey-red/5 border border-healey-red/20 rounded-xl p-6">
                  <h3 className="font-semibold text-healey-red mb-3">Risk #2: Overvaluation (The WeWork Problem)</h3>
                  <p className="mb-4 text-sm">Late-stage private valuations can be inflated by FOMO and growth-at-all-costs funding.</p>

                  <div className="bg-healey-white rounded-lg p-3 mb-4">
                    <p className="text-xs font-medium text-healey-charcoal mb-1">The WeWork disaster:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Last private valuation: $47 billion (2019)</li>
                      <li>• IPO attempt: Rejected at $10-15B</li>
                      <li>• Actual IPO (2021): $9 billion</li>
                      <li>• Current (2025): Less than $500 million</li>
                      <li className="text-healey-red font-medium">If you bought at $47B: Lost 99%+</li>
                    </ul>
                  </div>

                  <p className="text-xs text-healey-charcoal font-medium">Mitigation: Buy at 10-30% discounts to last round, focus on profitable companies</p>
                </div>

                {/* Risk 3 */}
                <div className="bg-healey-red/5 border border-healey-red/20 rounded-xl p-6">
                  <h3 className="font-semibold text-healey-red mb-3">Risk #3: No IPO Guarantee</h3>
                  <p className="mb-4 text-sm">Just because a company is late-stage doesn&apos;t mean it will IPO:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Market conditions close IPO window (2022-2023)</li>
                    <li>• Acquisition at lower valuation than expected</li>
                    <li>• Company pivots, struggles, or fails</li>
                  </ul>
                  <p className="mt-4 text-xs text-healey-charcoal font-medium">Mitigation: Diversify across 3-5+ companies, invest in strong business models</p>
                </div>

                <div className="bg-healey-charcoal text-white rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Truth Bomb: Pre-IPO investing isn&apos;t for everyone.</h3>
                  <p className="text-sm text-healey-gray-300 mb-3">If you:</p>
                  <ul className="space-y-1 text-sm text-healey-gray-300">
                    <li>• Need liquidity in next 3 years → <strong>Don&apos;t invest</strong></li>
                    <li>• Can&apos;t afford to lose 50-100% → <strong>Don&apos;t invest</strong></li>
                    <li>• Hate volatility and uncertainty → <strong>Don&apos;t invest</strong></li>
                  </ul>
                  <p className="mt-4 text-xs text-healey-gray-400">This is the &quot;private equity&quot; allocation of your portfolio—high risk, high reward, long time horizon.</p>
                </div>

                <div className="bg-healey-light rounded-xl p-4 border border-healey-gray-200">
                  <p className="font-semibold text-healey-charcoal">Tomorrow:</p>
                  <p className="text-sm text-healey-gray-600">How to evaluate which opportunities are worth it (the 4-question framework)</p>
                </div>
              </div>
            </div>
          </article>

          {/* EMAIL 5 */}
          <article id="email5" className="scroll-mt-40">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-healey-charcoal rounded-xl flex items-center justify-center text-white font-semibold">
                5
              </span>
              <div>
                <p className="text-sm text-healey-gray-500 font-medium">Day 8</p>
                <h2 className="text-2xl font-semibold text-healey-charcoal">Evaluation Framework + Access</h2>
              </div>
            </div>

            <div className="bg-healey-white rounded-xl border border-healey-gray-200 overflow-hidden">
              <div className="bg-healey-light px-6 py-4 border-b border-healey-gray-200">
                <p className="text-sm text-healey-gray-500">Subject Line:</p>
                <p className="font-semibold text-healey-charcoal">&quot;The 4 questions I ask before every pre-IPO investment&quot;</p>
              </div>

              <div className="p-6 space-y-6 text-healey-gray-600 leading-relaxed">

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-4">The Evaluation Framework</h3>

                  <div className="space-y-4">
                    <div className="bg-healey-light rounded-lg p-4 border border-healey-gray-200">
                      <h4 className="font-semibold text-healey-charcoal mb-2">Question 1: What&apos;s the path to liquidity?</h4>
                      <p className="text-sm">Is there a realistic IPO timeline? Strong acquisition interest? Or will this stay private for 10+ years?</p>
                    </div>

                    <div className="bg-healey-light rounded-lg p-4 border border-healey-gray-200">
                      <h4 className="font-semibold text-healey-charcoal mb-2">Question 2: Is the valuation reasonable?</h4>
                      <p className="text-sm">What&apos;s the price-to-revenue multiple? Is there a path to profitability? Am I buying at a discount to last round?</p>
                    </div>

                    <div className="bg-healey-light rounded-lg p-4 border border-healey-gray-200">
                      <h4 className="font-semibold text-healey-charcoal mb-2">Question 3: What are the deal terms?</h4>
                      <p className="text-sm">Liquidation preferences? Pro-rata rights? Information rights? Who else is in the cap table?</p>
                    </div>

                    <div className="bg-healey-light rounded-lg p-4 border border-healey-gray-200">
                      <h4 className="font-semibold text-healey-charcoal mb-2">Question 4: What structure makes sense?</h4>
                      <p className="text-sm">SPV fees? Direct share availability? Tender offer timing? Match structure to your capital and goals.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-4">How to Access Pre-IPO Opportunities</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-healey-light rounded-xl p-4 border border-healey-gray-200">
                      <h4 className="font-semibold text-healey-charcoal mb-3">The DIY Approach</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Sign up for platforms (EquityZen, Forge, etc.)</li>
                        <li>• Browse available deals</li>
                        <li>• Conduct your own due diligence</li>
                        <li>• Invest directly</li>
                      </ul>
                      <p className="mt-3 text-xs text-healey-green">Pros: No advisor fees, full control</p>
                      <p className="text-xs text-healey-red">Cons: Time-intensive, limited deal flow</p>
                    </div>

                    <div className="bg-healey-light rounded-xl p-4 border border-healey-gray-200">
                      <h4 className="font-semibold text-healey-charcoal mb-3">The Guided Approach</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Work with advisors who source and vet deals</li>
                        <li>• Get curated deal flow</li>
                        <li>• Receive due diligence analysis</li>
                        <li>• Advisor-negotiated terms</li>
                      </ul>
                      <p className="mt-3 text-xs text-healey-green">Pros: Expert curation, better access</p>
                      <p className="text-xs text-healey-red">Cons: Advisory fees</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-healey-charcoal mb-4">What Working With an Advisor Looks Like</h3>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-healey-charcoal rounded text-white text-xs flex items-center justify-center">1</span>
                      <div>
                        <p className="font-medium text-healey-charcoal">Discovery</p>
                        <p className="text-sm">Understand your goals, risk tolerance, portfolio allocation (typically 5-15% for pre-IPO)</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-healey-charcoal rounded text-white text-xs flex items-center justify-center">2</span>
                      <div>
                        <p className="font-medium text-healey-charcoal">Deal Flow</p>
                        <p className="text-sm">Advisor presents vetted opportunities (2-4 per quarter) with full analysis</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-healey-charcoal rounded text-white text-xs flex items-center justify-center">3</span>
                      <div>
                        <p className="font-medium text-healey-charcoal">Due Diligence</p>
                        <p className="text-sm">Review investment memos, ask questions, decide which opportunities align</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-healey-charcoal rounded text-white text-xs flex items-center justify-center">4</span>
                      <div>
                        <p className="font-medium text-healey-charcoal">Execution</p>
                        <p className="text-sm">Advisor facilitates paperwork, wire transfers, accreditation verification</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-healey-charcoal rounded text-white text-xs flex items-center justify-center">5</span>
                      <div>
                        <p className="font-medium text-healey-charcoal">Portfolio Management</p>
                        <p className="text-sm">Ongoing updates, liquidity event planning, tax considerations</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-healey-charcoal text-white rounded-xl p-6">
                  <h3 className="font-semibold mb-3">Ready to Explore Specific Opportunities?</h3>
                  <p className="text-sm text-healey-gray-300 mb-4">If you&apos;re an accredited investor with $50K-$500K to allocate:</p>
                  <p className="text-sm text-healey-gray-300 mb-4">Contact Christine to discuss:</p>
                  <ul className="space-y-1 text-sm text-healey-gray-300">
                    <li>• What sectors interest you (AI, fintech, biotech)</li>
                    <li>• Your liquidity timeline</li>
                    <li>• Preferred structure (direct, SPV, tender)</li>
                    <li>• Current deal flow opportunities</li>
                  </ul>
                  <a href="mailto:christine@healeypreipo.com" className="inline-block mt-4 bg-healey-white text-healey-charcoal px-6 py-3 rounded-lg font-semibold text-sm hover:bg-healey-light transition-colors">
                    Email Christine →
                  </a>
                </div>

                <div className="bg-healey-gold/10 border border-healey-gold/30 rounded-xl p-4">
                  <p className="text-sm text-healey-gray-700">
                    <strong>Not ready yet?</strong> That&apos;s completely fine. The best investors in this space are patient, educated, and strategic. Take your time—this opportunity isn&apos;t going anywhere.
                  </p>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* Compliance Footer */}
      <footer className="bg-healey-charcoal text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4 font-[family-name:var(--font-display)]">HEALEY PRE-IPO</h3>
            <p className="text-healey-gray-400 text-sm mb-2">Concierge access to private tech stocks</p>
            <p className="text-healey-gray-400 text-sm">christine@healeypreipo.com</p>
          </div>

          <div className="border-t border-healey-gray-700 pt-8">
            <p className="text-xs text-healey-gray-400 mb-4">
              Securities offered through Old City Securities, LLC, member FINRA. 589 5th Avenue, PH, New York, NY 10017.
            </p>
            <p className="text-xs text-healey-gray-500 leading-relaxed mb-4">
              <strong>Important Disclosures:</strong> Investing in pre-IPO and private companies involves substantial risk, including the potential loss of your entire investment. Such investments are speculative, illiquid, and subject to restrictions on resale and transfer. Private companies are not obligated to disclose financial information publicly, and shares are not as liquid as publicly traded stocks. Investors must wait until a liquidity event occurs, which can take several years to materialize.
            </p>
            <p className="text-xs text-healey-gray-500 leading-relaxed mb-4">
              Investments may be through various structures on a case-by-case basis, including but not limited to: SPVs, VC funds, and other means—not always direct ownership of company shares on the cap table. Past performance is not indicative of future results. The information provided is for educational purposes only and should not be construed as investment advice.
            </p>
            <p className="text-xs text-healey-gray-500">
              © {new Date().getFullYear()} Healey Pre-IPO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
