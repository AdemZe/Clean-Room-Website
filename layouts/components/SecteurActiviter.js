import Image from "next/image";
import { markdownify } from "@lib/utils/textConverter";

const SecteurActiviter = ({ feature }) => {
  if (!feature) {
    return null;
  }

  return (
    <section className="py-6 md:py-10 bg-gray-50">   
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {markdownify(feature.title)}
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-700 mt-4"></div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {feature.features.map((item, i) => (
            <div
              className="feature-card rounded-xl bg-white p-6 pb-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-blue-700 border border-transparent"
              key={`feature-${i}`}
            >
              {item.icon && (
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-50/70 mb-6 transition-all duration-300">
                  <Image className="mx-auto" src={item.icon} width={36} height={36} alt={item.name} />
                </div>
              )}
              <div className="mt-4">
                <h5 className="text-xl font-bold text-gray-800 transition-colors duration-300">
                  {markdownify(item.name)}
                </h5>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecteurActiviter;



