import PageTitle from "@/components/PageTitle";

export default function Contact() {
  return (
    <>
      <div className="col-span-9 col-start-3 md:col-span-6  md:col-start-5">
        <PageTitle title="Contact" />
      </div>
      <div className="col-span-9 col-start-3 md:col-span-6  md:col-start-5 ">
        To get in touch, please email me at{" "}
        <a
          href="mailto:hello@laurienicholas.net"
          className="text-brand underline"
          target="_blank"
        >
          hello@laurienicholas.net
        </a>
        , or send me a message on{" "}
        <a
          href="https://www.linkedin.com/in/laurie-nicholas/"
          className="text-brand underline"
          target="_blank"
        >
          LinkedIn
        </a>
        .
      </div>
    </>
  );
}
