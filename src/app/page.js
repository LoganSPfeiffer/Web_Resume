export default function Page() {
  return (
    <>
      <header>
        <h1>Your Name</h1>
        <p>Job Title</p>
        <address>
          <a href="mailto:you@example.com">you@example.com</a>
        </address>
      </header>

      <main>
        <section aria-labelledby="summary-heading">
          <h2 id="summary-heading">Summary</h2>
        </section>

        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
        </section>

        <section aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
        </section>

        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
        </section>
      </main>

      <footer>
        <p>Links / Contact</p>
      </footer>
    </>
  );
}
