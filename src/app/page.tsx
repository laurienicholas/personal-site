import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2 className="col-span-full text-4xl font-[GaramondPremierProSubhead] italic border-b-1 border-neutral-50/50">
        Selected Experience
      </h2>

      <WorkItem
        company="Mina"
        years="2020 - 2024"
        images={[
          {
            path: "/work-images/mina-1.jpg",
            alt: "Isometric illustration of the mina logo going to different energy providers",
          },
          {
            path: "/work-images/mina-2.jpg",
            alt: "An EV charger",
          },
          {
            path: "/work-images/mina-3.jpg",
            alt: "An allstar chargepass card being tapped on an EV charger",
          },
        ]}
        description={[
          `As employee #2 at EV payments startup Mina, I played a central role in taking the company
          from inception to £35m exit in 2 years, and completing a successful
          integration into a $billion matrix organisation.`,
          `Focussing the team on building things that drove numbers we cared
          about, I grew the product & engineering function to 4 cross-functional
          squads, each with clear remit and autonomy.`,
        ]}
      />
      <WorkItem
        company="PitchIn®"
        years="2023 - 2025"
        images={[
          {
            path: "/work-images/pitchin-1.png",
            alt: "Women playing netball with an overlay of someone paying for a game with the PitchIn app",
          },
          {
            path: "/work-images/pitchin-2.png",
            alt: "Ready to join the revolution? Download PitchIn today!",
          },
          {
            path: "/work-images/pitchin-3.png",
            alt: "Some men playing football with an overlay of the pitchin app showing how a payment has been split",
          },
        ]}
        description={[
          `I founded PitchIn® while still at Mina, and in 2024 took the plunge to go full time.`,
          `I successfully built and launched the app, and it has been used to process thousands of payments, helping organise hundreds of sports games.`,
        ]}
      />
      <WorkItem
        company="EO"
        years="2025"
        images={[
          {
            path: "/work-images/eo-1.png",
            alt: "EO fleet charging evo system - design and deployment, EO Hub, EO cloud software, smart fleet consultation, AC and DC charging hardware, 24/7/365 operations and maintenance service",
          },
          {
            path: "/work-images/eo-2.png",
            alt: "EO",
          },
          {
            path: "/work-images/eo-3.gif",
            alt: "Animated gif showing the EO cloud software in action",
          },
        ]}
        description={[
          `Based on my work at Mina, EO asked me to come and help set up their new Product function.`,
          `By focussing on culture, ways of working and tailored individual development, I was able to accelerate their product maturity and completely transform how they prioritise and validate work.`,
        ]}
      />
      <WorkItem
        company="Taro Pumps"
        years="2017-2020"
        images={[
          {
            path: "/work-images/taro-1.jpg",
            alt: "Taro Pumps factory team working in the factoy",
          },
          {
            path: "/work-images/taro-2.jpg",
            alt: "Taro submersible pump product",
          },
          {
            path: "/work-images/taro-3.jpg",
            alt: "Retail worker using the POS part of the system",
          },
        ]}
        description={[
          `Revolutionised a £100m+ business through greenfield software that touches everything from franchised retail POS, to factory inventory, servicing, and production management.`,
          `-`,
          `Growing up exclusively in the U.K, water pumps were never something even on my radar. In India they’re essential not only for homes but industry and agriculture.`,
          `I was lucky enough to lead the visionary software-enabled reimagining of one of this incredible nation’s blue chip manufacturers, delivering huge measurable results across B2C & B2B.`,
        ]}
      />
      <WorkItem
        company="Razor"
        years="2014-2017"
        images={[
          {
            path: "/work-images/razor-1.jpg",
            alt: "Virgin trains at a station",
          },
          {
            path: "/work-images/razor-2.jpg",
            alt: "Someone scanning a digital ticket at a concert",
          },
          {
            path: "/work-images/razor-3.jpg",
            alt: "A water company worker inspecting a construction site using a tablet",
          },
        ]}
        description={[
          `As Consulting Head of Build at Razor I drove outcome driven solutions for a huge range of clients across B2B & B2C sectors.`,
          `Oftentimes working with clients as diverse as a water company in the morning, a ticketing platform over lunch and a care home provider in the afternoon, I still credit this experience with building my foundations of continuous discovery and ‘on-a-sixpence’ context switching.`,
        ]}
      />
    </>
  );
}

function WorkItem({
  company,
  years,
  images,
  description,
}: {
  company: string;
  years: string;
  images: { path: string; alt: string }[];
  description: string[];
}) {
  return (
    <article className="col-span-full grid grid-cols-subgrid border-b-1 pb-5 border-neutral-50/20">
      {images.map((image, index) => (
        <Image
          src={image.path}
          alt={image.alt}
          key={index}
          width={380}
          height={250}
          className="col-span-4"
        />
      ))}
      <div className="col-span-4 mt-5">
        <h3 className="text-4xl">{company}</h3>
        <p className="text-lg">{years}</p>
      </div>
      <div className="col-span-4 mt-5 ">
        {description.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </article>
  );
}
