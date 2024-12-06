export default function GoogleMap1() {
  return (
    <>
      <section className="p-0 wow fadeInUp" data-wow-delay="300ms">
        <div className="mx-auto maxw1700 bdrs16 position-relative mx20-lg">
          <iframe
            className="contact-page-map"
            loading="lazy"
            src="https://maps.google.com/maps?q=54B%20Adeniyi%20Jones%20Avenue,%20Ikeja,%20Lagos&t=m&z=15&output=embed&iwloc=near"
            title="54B Adeniyi Jones Avenue, Ikeja, Lagos"
            aria-label="54B Adeniyi Jones Avenue, Ikeja, Lagos"
          />
        </div>
      </section>
    </>
  );
}
