import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="col-span-9 col-start-3 md:col-span-6  md:col-start-5">
        <PageTitle title="Profile" />
      </div>
      <div className="col-span-9 col-start-3 md:col-span-6  md:col-start-5 ">
        <p>
          Since picking up my first tech book (HTML 3.2) in 1999 I’ve been
          obsessed with making digital products.
        </p>
        <p>
          In the 26 years since I’ve had the privilege of working with, and
          learning from some of the best in the biz, and I’ve developed a deep
          understanding of what it takes to create successful products, and
          successful product teams.
        </p>
        <p>The three qualities I credit my success to most in the field are:</p>
        <ol className="list-decimal list-outside">
          <li>
            My unwavering core passion for making things (and the love of
            building high performing teams to make those things!)
          </li>
          <li>My absolute obsession with the customer</li>
          <li>My complete intolerance of poor design and user experience</li>
        </ol>
        <p>
          Blending these attributes with broad experience of all facets of
          software development, I tend to find success in bringing product
          vision to businesses, and getting teams excited to get behind a
          strategy to achieve it.
        </p>
        <p>
          As of September 2025 I’m seeking new roles, so if you think we’d be a
          match, please don’t hesitate to{" "}
          <Link href="/contact" className="text-brand underline">
            reach out.
          </Link>
        </p>
      </div>
    </>
  );
}
