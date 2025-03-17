import imgBackground from "../../assets/imgs/Rectangle_1.png";

export default function RelatedProduct() {
  return (
    <section className="section-odd">
      <div
        className="flex h-[300px] items-center overflow-hidden bg-cover bg-center bg-no-repeat py-5 sm:py-10"
        style={{ backgroundImage: `url(${imgBackground})` }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Shop
            </h2>
            <div className="mt-5 flex items-center gap-x-6">
              <a href="#" className="relative text-xl text-gray-900">
                Home <span aria-hidden="true">→</span> Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
