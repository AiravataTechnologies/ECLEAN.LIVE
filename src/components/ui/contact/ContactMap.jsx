export default function ContactMap() {
  return (
    <section className="contact-map-sec">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col">
            <div className="contact-map-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4966722429335!2d-75.80948658444869!3d42.075406879206916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dae40aa864a7e7%3A0x7a4c41ecda420673!2s66%20Golden%20St%2C%20Kirkwood%2C%20NY%2013795%2C%20USA!5e0!3m2!1sen!2sbd!4v1680634171309!5m2!1sen!2sbd"
                width="100%"
                height={650}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
