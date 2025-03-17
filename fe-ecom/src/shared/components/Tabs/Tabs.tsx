import { useState } from "react";

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
      <div className="border-border mb-8 flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? "border-primary text-primary border-b-2"
                : "text-muted-foreground"
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
          <p className="text-muted-foreground">
            Introducing the new wooden sofa set...
          </p>
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
