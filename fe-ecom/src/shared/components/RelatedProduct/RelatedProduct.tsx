import imgMark_1 from "../../assets/imgs/Mask_group_(1).png";
import imgMark_2 from "../../assets/imgs/Mask_group_(2).png";
import imgMark_3 from "../../assets/imgs/Mask_group_(3).png";
import imgMark_4 from "../../assets/imgs/Mask_group_(4).png";

const callouts = [
  {
    name: "Trenton modular sofa_3",
    description: "Work from home accessories",
    imageSrc: imgMark_1,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
    price: "25,000,00",
  },
  {
    name: "Granite dining table with dining chair",
    description: "Journals and note-taking",
    imageSrc: imgMark_2,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
    price: "25,000,00",
  },
  {
    name: "Outdoor bar table and stool",
    description: "Daily commute essentials",
    imageSrc: imgMark_3,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
    price: "25,000,00",
  },
  {
    name: "Plain console with teak mirror",
    description: "Daily commute essentials",
    imageSrc: imgMark_4,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
    price: "25,000,00",
  },
];

export default function RelatedProduct() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Top Picks For You
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </p>
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="my-6 h-[40px] text-lg font-semibold text-gray-900">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  RS. {callout.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
