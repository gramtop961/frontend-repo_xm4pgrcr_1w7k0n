import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Menu, X, ArrowRight, Sparkles, Users2, Building2, Briefcase, Mail, MapPin, Phone } from 'lucide-react';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#startups', label: 'Startups' },
    { href: '#events', label: 'Events' },
    { href: '#partners', label: 'Partners' },
    { href: '#news', label: 'News' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div id="home" className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Sticky Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-content-center font-bold">G</div>
              <div className="leading-tight">
                <p className="font-semibold">GTU Ventures</p>
                <p className="text-xs text-slate-500">Innovation & Incubation</p>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-blue-600 transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#apply" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors">
                Apply Now <ArrowRight size={16} />
              </a>
            </nav>

            <button className="lg:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 grid grid-cols-2 gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-sm text-slate-700 hover:text-blue-600">
                  {l.label}
                </a>
              ))}
              <a href="#apply" onClick={() => setMobileOpen(false)} className="col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700">
                Apply Now <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero with Spline cover */}
      <section className="relative pt-24">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl -mt-40 px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-200">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Nurturing Innovation and Entrepreneurship Across Gujarat
                </h1>
                <p className="mt-3 text-slate-600">
                  GTU Ventures is the startup incubation and innovation platform of Gujarat Technological University, enabling founders with mentorship, funding facilitation, and access to advanced infrastructure.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#apply" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700">
                    Start Your Application <ArrowRight size={16} />
                  </a>
                  <a href="#programs" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800">
                    Explore Programs
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full lg:w-auto">
                {[
                  { label: 'Startups Supported', value: '200+' },
                  { label: 'Mentors & Experts', value: '150+' },
                  { label: 'Programs Run', value: '50+' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience strips */}
      <section className="py-16" id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">About GTU Ventures</h2>
              <p className="mt-3 text-slate-600">
                The entrepreneurial arm of GTU, connecting academia, industry, and government to power a vibrant innovation ecosystem. We support founders from idea to impact through structured incubation, mentoring, and market access.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { icon: <Sparkles className="text-blue-600" size={20} />, title: 'Innovation First', desc: 'From grassroots to deep-tech' },
                  { icon: <Users2 className="text-blue-600" size={20} />, title: 'Mentor Network', desc: 'Leaders across domains' },
                  { icon: <Building2 className="text-blue-600" size={20} />, title: 'Infrastructure', desc: 'Labs, co-working, facilities' },
                  { icon: <Briefcase className="text-blue-600" size={20} />, title: 'Funding Access', desc: 'Grants, CSR, investors' },
                ].map((f) => (
                  <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-2 font-semibold">{f.icon}{f.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Who is this for?</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'Aspiring Founders','Students & Researchers','Mentors & Experts','Investors & CSR','Academic Institutions','Policy & Govt','Corporate Partners','Media & Public'
                ].map((a) => (
                  <div key={a} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">{a}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl sm:text-3xl font-bold">Programs</h2>
            <a href="#apply" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">Apply Now <ArrowRight size={16} /></a>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Pre-Incubation', desc: 'Idea validation, prototyping, and early mentorship.' },
              { title: 'Incubation', desc: 'Structured support, infrastructure, and market readiness.' },
              { title: 'Acceleration', desc: 'Growth sprints, investor connects, and scale-up support.' },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <a href="#apply" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">Apply <ArrowRight size={14} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startups */}
      <section id="startups" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Incubated Startups</h2>
          <p className="mt-2 text-slate-600">A showcase of founders building solutions across AI, manufacturing, agri-tech, health tech, sustainability, and more.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="h-10 w-10 rounded bg-blue-50 text-blue-700 grid place-content-center font-bold">S{i}</div>
                <h3 className="mt-3 font-semibold">Startup #{i}</h3>
                <p className="mt-1 text-sm text-slate-600">Domain • Brief description of the startup and notable milestones.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Events</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs text-slate-500">Date • Venue</p>
                <h3 className="mt-1 font-semibold">Upcoming Event #{i}</h3>
                <p className="mt-1 text-sm text-slate-600">A short overview of the event, workshops, or demo day.</p>
                <a href="#" className="mt-3 inline-block text-sm font-semibold text-blue-700">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Partners</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="h-16 rounded-xl border border-slate-200 bg-white/60 grid place-content-center text-slate-500">Logo {i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">News & Updates</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs text-slate-500">Category</p>
                <h3 className="mt-1 font-semibold">Media headline or blog title #{i}</h3>
                <p className="mt-1 text-sm text-slate-600">Short summary of the announcement, coverage, or article.</p>
                <a href="#" className="mt-3 inline-block text-sm font-semibold text-blue-700">Read more</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CoE and Reports */}
      <section id="coe" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Centres of Excellence (CoE)</h3>
              <p className="mt-2 text-sm text-slate-600">Brief on objectives, focus domains, and engagements with academia and industry.</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-blue-700">Discover</a>
            </div>
            <div id="reports" className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Annual & Impact Reports</h3>
              <p className="mt-2 text-sm text-slate-600">Access downloadable documents showcasing outcomes and learning.</p>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {[1,2,3,4].map((i) => (
                  <a key={i} href="#" className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">Report 20{i}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs, Gallery, Testimonials, Resources */}
      <section id="faqs" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">FAQs</h3>
              <ul className="mt-3 space-y-3 text-sm text-slate-700">
                <li><strong>Who can apply?</strong> • Students, researchers, and founders at any stage.</li>
                <li><strong>What support is offered?</strong> • Mentorship, space, labs, and funding connects.</li>
                <li><strong>How long is a cohort?</strong> • Typically 3–6 months depending on track.</li>
              </ul>
            </div>
            <div id="gallery" className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Gallery</h3>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="aspect-video rounded-lg bg-slate-100" />
                ))}
              </div>
            </div>
            <div id="testimonials" className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Testimonials</h3>
              <div className="mt-3 space-y-4">
                {[1,2,3].map((i) => (
                  <blockquote key={i} className="rounded-lg bg-slate-50 p-4 text-sm text-slate-700">“GTU Ventures helped us validate and scale faster.” — Founder #{i}</blockquote>
                ))}
              </div>
            </div>
            <div id="resources" className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Facilities & Resources</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <li className="rounded bg-slate-50 px-3 py-2">Labs & Prototyping</li>
                <li className="rounded bg-slate-50 px-3 py-2">Co-working Space</li>
                <li className="rounded bg-slate-50 px-3 py-2">Mentoring & Clinics</li>
                <li className="rounded bg-slate-50 px-3 py-2">Legal & Accounting</li>
                <li className="rounded bg-slate-50 px-3 py-2">Tools & Templates</li>
                <li className="rounded bg-slate-50 px-3 py-2">Downloads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Careers, Circulars, Initiatives, Team */}
      <section id="careers" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Careers</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Program Manager • Full-time</li>
                <li>Innovation Fellow • Internship</li>
                <li>Community Volunteer • Part-time</li>
              </ul>
            </div>
            <div id="circulars" className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Circulars / Notices / Tenders</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>Procurement Notice - Lab Equipment</li>
                <li>Startup Call - Cohort Applications</li>
                <li>Policy Update - Incubation Guidelines</li>
              </ul>
            </div>
            <div id="initiatives" className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Our Initiatives</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <li className="rounded bg-slate-50 px-3 py-2">DIC</li>
                <li className="rounded bg-slate-50 px-3 py-2">IPR</li>
                <li className="rounded bg-slate-50 px-3 py-2">GISC</li>
                <li className="rounded bg-slate-50 px-3 py-2">AIC-GISC Foundation</li>
              </ul>
            </div>
            <div id="team" className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Team</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div className="h-10 w-10 rounded-full bg-white border border-slate-200" />
                    <p className="mt-2 font-medium">Member #{i}</p>
                    <p className="text-sm text-slate-600">Role / Expertise</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Contact Us</h3>
              <form className="mt-4 grid grid-cols-2 gap-3">
                <input className="col-span-2 sm:col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Name" />
                <input className="col-span-2 sm:col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email" />
                <input className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Subject" />
                <textarea rows={4} className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Message" />
                <button type="button" className="col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700">Send Message</button>
              </form>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">Reach Us</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p className="flex items-start gap-2"><MapPin size={18} className="text-blue-600 mt-0.5" /> GTU Campus, Ahmedabad, Gujarat</p>
                <p className="flex items-start gap-2"><Phone size={18} className="text-blue-600 mt-0.5" /> +91-00000 00000</p>
                <p className="flex items-start gap-2"><Mail size={18} className="text-blue-600 mt-0.5" /> contact@gtuventures.in</p>
                <div className="mt-4 aspect-video rounded-lg bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} GTU Ventures. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#programs" className="hover:text-slate-900">Programs</a>
              <a href="#apply" className="hover:text-slate-900">Apply</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Anchor section for Apply CTA */}
      <div id="apply" className="sr-only" aria-hidden="true" />
    </div>
  );
}

export default App;
