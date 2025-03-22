import { useState } from "react";
import img1 from "../../assets/imgs/Mask_group(6).png";

const tabs = [
  { id: "description", label: "Description" },
  { id: "additional", label: "Additional Information" },
  { id: "reviews", label: "Reviews (5)" },
];

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mb-16">
      {/* Tab List */}
      <div className="mb-8 flex justify-center space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-xl font-semibold ${
              activeTab === tab.id
                ? "border-primary text-primary border-b-2"
                : "text-muted-foreground text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "description" && (
          <div className="description font-light">
            <div className="container px-4 sm:px-20">
              <p className="text-justify text-base text-gray-500 sm:text-lg">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p className="pt-6 text-justify text-base text-gray-500 sm:pt-10 sm:text-lg">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:gap-6 sm:pt-10">
              <img
                src={img1}
                alt="Kilburn Speaker"
                className="max-h-96 w-full bg-[#FFF9E5] sm:w-1/2"
              />
              <img
                src={img1}
                alt="Kilburn Speaker"
                className="max-h-96 w-full bg-[#FFF9E5] sm:w-1/2"
              />
            </div>
          </div>
        )}
        {activeTab === "additional" && (
          <p className="text-muted-foreground">
            <strong>Dimensions:</strong> W 200 × D 80 × H 70 cm
          </p>
        )}
        {activeTab === "reviews" && (
          <p className="text-muted-foreground">⭐⭐⭐⭐⭐ Based on 5 reviews</p>
        )}
      </div>
    </div>
  );
}
