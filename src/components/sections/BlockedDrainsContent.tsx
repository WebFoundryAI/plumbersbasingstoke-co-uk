import { Link } from "react-router-dom";
import { BRAND } from "@/config/brand";
import { Phone, ArrowRight } from "lucide-react";

/**
 * BlockedDrainsContent - Expanded content section for the main "Blocked Drains Manchester" page.
 * Contains ~1500 words of unique, structured content with H2/H3 hierarchy.
 * Includes internal links to service and location pages.
 */
export function BlockedDrainsContent() {
  return (
    <article className="section-padding bg-background">
      <div className="container-wide px-4">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          
          {/* Intro paragraphs */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you've got slow-draining sinks, gurgling pipes, or an outside drain backing up, you need a fix 
            that actually lasts. We clear blocked drains across Manchester using the right method for the 
            blockage type — not guesswork — and we explain what caused it so you can avoid repeat issues.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            We handle domestic and small commercial drainage problems, including urgent callouts. If you're 
            unsure what's blocked (internal waste vs external drain), we'll diagnose first and then clear it 
            using the least disruptive approach.
          </p>

          {/* Signs your drain is blocked */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Signs Your Drain Is Blocked
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Water draining slowly from sinks, baths, or showers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Toilets rising or struggling to flush</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Bad smells from plugholes or outside gullies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Gurgling sounds after using water</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Outside drain overflow during rain or appliance use</span>
              </li>
            </ul>
          </section>

          {/* Common causes */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Common Causes in Manchester Homes and Businesses
            </h2>
            
            <h3 className="text-xl font-semibold mb-2">Grease and Food Waste</h3>
            <p className="text-muted-foreground mb-6">
              Fat and oils cool inside pipes and trap debris. This is one of the most common causes of 
              kitchen blockages. Regular{" "}
              <Link to="/services/drain-jetting" className="text-primary hover:underline">
                drain jetting
              </Link>{" "}
              can prevent build-up before it becomes a problem.
            </p>

            <h3 className="text-xl font-semibold mb-2">Wet Wipes and Sanitary Products</h3>
            <p className="text-muted-foreground mb-6">
              Even "flushable" wipes can snag and build a solid blockage. We see this regularly in both 
              domestic properties and commercial premises across Manchester.
            </p>

            <h3 className="text-xl font-semibold mb-2">Hair and Soap Residue</h3>
            <p className="text-muted-foreground mb-6">
              Bathrooms often block from gradual build-up, especially in older pipework. A{" "}
              <Link to="/services/blocked-drains/blocked-bath" className="text-primary hover:underline">
                blocked bath or shower drain
              </Link>{" "}
              usually clears quickly with the right approach.
            </p>

            <h3 className="text-xl font-semibold mb-2">Tree Roots and Damaged Drains</h3>
            <p className="text-muted-foreground">
              Older properties and clay pipes can crack; roots exploit the gap and create repeat blockages. 
              If symptoms keep coming back, you likely need a{" "}
              <Link to="/services/cctv-drain-surveys" className="text-primary hover:underline">
                CCTV drain survey
              </Link>{" "}
              to identify the root cause.
            </p>
          </section>

          {/* How we clear a blocked drain */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              How We Clear a Blocked Drain (Our Process)
            </h2>
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <strong className="text-foreground">Quick assessment:</strong> where the blockage is, 
                  and whether it's internal or external
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <strong className="text-foreground">Safe access:</strong> we use rodding points / 
                  inspection chambers where possible
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <strong className="text-foreground">Clearance method:</strong>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>• Mechanical rodding for simple obstructions</li>
                    <li>• High-pressure jetting for heavy build-up and silt</li>
                    <li>• Targeted cleaning/descaling for stubborn residue</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</span>
                <div>
                  <strong className="text-foreground">Confirmation:</strong> test flow and check nearby 
                  points to ensure the line is clear
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">5</span>
                <div>
                  <strong className="text-foreground">Prevention advice:</strong> what caused it and 
                  how to reduce repeat issues
                </div>
              </li>
            </ol>
            <p className="text-muted-foreground mt-4">
              If repeat problems are likely, we recommend a{" "}
              <Link to="/services/cctv-drain-surveys" className="text-primary hover:underline">
                CCTV drain survey
              </Link>{" "}
              to confirm pipe condition.
            </p>
          </section>

          {/* What to do before we arrive */}
          <section className="mb-12 bg-muted/50 -mx-4 px-6 py-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What to Do Before We Arrive
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Stop using water fixtures connected to the affected line</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>If an outside drain is overflowing, keep children/pets away</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Take a quick note of which fixtures are affected (kitchen only vs whole house)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>If safe, photograph the affected gully or manhole area (helps diagnosis)</span>
              </li>
            </ul>
          </section>

          {/* Related drainage services */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Related Drainage Services
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose">
              <Link 
                to="/services/drain-jetting" 
                className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <span className="font-medium">Drain Jetting in Manchester</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link 
                to="/services/cctv-drain-surveys" 
                className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <span className="font-medium">CCTV Drain Surveys</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link 
                to="/services/drain-unblocking" 
                className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <span className="font-medium">Drain Cleaning & Maintenance</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link 
                to="/services/emergency-drain-services" 
                className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <span className="font-medium">Emergency Drain Unblocking</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </section>

          {/* Areas we cover */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Areas We Cover in Greater Manchester
            </h2>
            <p className="text-muted-foreground mb-4">
              We cover Manchester and nearby areas including:
            </p>
            <div className="grid sm:grid-cols-3 gap-2 not-prose text-sm">
              <Link to="/locations/didsbury" className="text-primary hover:underline">Didsbury</Link>
              <Link to="/locations/chorlton" className="text-primary hover:underline">Chorlton</Link>
              <span className="text-muted-foreground">Withington</span>
              <span className="text-muted-foreground">Rusholme</span>
              <span className="text-muted-foreground">Fallowfield</span>
              <Link to="/locations/salford" className="text-primary hover:underline">Salford</Link>
              <span className="text-muted-foreground">Trafford</span>
              <span className="text-muted-foreground">Stretford</span>
              <Link to="/locations/stockport" className="text-primary hover:underline">Stockport</Link>
              <Link to="/locations/altrincham" className="text-primary hover:underline">Altrincham</Link>
              <Link to="/locations/sale" className="text-primary hover:underline">Sale</Link>
              <span className="text-muted-foreground">Prestwich</span>
              <span className="text-muted-foreground">Middleton</span>
              <Link to="/locations/bolton" className="text-primary hover:underline">Bolton</Link>
              <span className="text-muted-foreground">Bury</span>
              <Link to="/locations/rochdale" className="text-primary hover:underline">Rochdale</Link>
            </div>
            <p className="text-muted-foreground mt-4">
              <Link to="/locations" className="text-primary hover:underline">View all service areas →</Link>
            </p>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How much does drain unblocking cost in Manchester?</h3>
                <p className="text-muted-foreground">
                  Costs depend on access, blockage type, and whether jetting/CCTV is needed. We'll confirm 
                  the likely approach before starting work. No call-out fee, fixed pricing upfront.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I use chemicals to clear the blockage?</h3>
                <p className="text-muted-foreground">
                  Avoid aggressive chemicals. They often fail on solid obstructions and can damage older 
                  pipes. Use a plunger as a first step, then get it assessed professionally.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer emergency callouts?</h3>
                <p className="text-muted-foreground">
                  Yes. If sewage is backing up, stop water use and contact us immediately. Our{" "}
                  <Link to="/services/emergency-drain-services" className="text-primary hover:underline">
                    24/7 emergency service
                  </Link>{" "}
                  covers all of Greater Manchester.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What if the blockage keeps coming back?</h3>
                <p className="text-muted-foreground">
                  Recurring blockages usually indicate pipe damage, root ingress, or a persistent build-up 
                  point. A CCTV survey is the fastest way to confirm the cause.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Will jetting damage my pipes?</h3>
                <p className="text-muted-foreground">
                  When used correctly, jetting is safe for most systems. If pipe condition is unknown, we 
                  assess first and use the appropriate pressure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Do you clear outside drains?</h3>
                <p className="text-muted-foreground">
                  Yes, including gullies, inspection chambers, and lines feeding into the main drain.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">How long does it take?</h3>
                <p className="text-muted-foreground">
                  Many blockages are cleared in under an hour, but timing depends on severity and access.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Do you provide prevention advice?</h3>
                <p className="text-muted-foreground">
                  Yes. We'll explain the cause and how to reduce the chance of repeat issues.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary/10 -mx-4 px-6 py-8 rounded-lg text-center not-prose">
            <h2 className="text-2xl font-bold mb-2">Need Your Drain Unblocked?</h2>
            <p className="text-muted-foreground mb-6">
              Call now for a free quote and same-day service across Manchester.
            </p>
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {BRAND.phone}
            </a>
          </section>

        </div>
      </div>
    </article>
  );
}
