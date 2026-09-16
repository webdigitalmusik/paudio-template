import React, { useState } from 'react';
import { APPLICATION_GUIDES, PRODUCTS } from '../data/products';
import { ApplicationGuide, TransducerProduct } from '../types';

interface ApplicationsSectionProps {
  onSelectProduct: (product: TransducerProduct) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ onSelectProduct }) => {
  const [selectedGuide, setSelectedGuide] = useState<ApplicationGuide | null>(null);

  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 border-b border-[#E5E7EB]" id="aplikasi">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div>
          <span className="text-[#ED1C24] font-mono text-xs uppercase font-semibold tracking-wider">
            // PENERAPAN SISTEM
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#111827] mt-1">
            Solusi Sesuai Kebutuhan Box
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPLICATION_GUIDES.map((app) => (
            <div
              key={app.id}
              onClick={() => setSelectedGuide(app)}
              className="border border-[#E5E7EB] hover:border-[#ED1C24] p-6 rounded bg-[#F7F7F8] hover:bg-white flex flex-col justify-between transition-all duration-200 cursor-pointer group hover:shadow-md"
            >
              <div>
                <span className="material-symbols-outlined text-[#ED1C24] text-[32px] mb-3 block">
                  {app.icon}
                </span>
                <h3 className="font-heading text-base font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors">
                  {app.title}
                </h3>
                <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                  {app.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5E7EB] mt-4 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[11px] text-[#9CA3AF] block">Rekomendasi:</span>
                  <p className="text-xs font-semibold text-[#111827]">{app.recommendation}</p>
                </div>
                <span className="material-symbols-outlined text-[#ED1C24] text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Application Details and Recommended Models */}
        {selectedGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white rounded-lg border border-[#2E2E33] max-w-2xl w-full p-6 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ED1C24] text-[30px]">
                    {selectedGuide.icon}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#111827]">
                      {selectedGuide.title}
                    </h3>
                    <span className="font-mono text-xs text-gray-500">
                      Rekomendasi Sound Engineer P.Audio
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="text-gray-400 hover:text-black p-1"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="font-mono text-xs font-bold text-[#ED1C24] uppercase">
                  Kriteria Desain Akustik
                </h4>
                <ul className="space-y-2 text-xs text-[#4B5563] list-disc list-inside">
                  {selectedGuide.detailedSpecs.map((spec, i) => (
                    <li key={i} className="leading-relaxed">{spec}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#E5E7EB]">
                <h4 className="font-mono text-xs font-bold text-[#111827] uppercase">
                  Driver P.Audio yang Direkomendasikan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedGuide.recommendedModelIds.map((modelId) => {
                    const model = PRODUCTS.find((p) => p.id === modelId);
                    if (!model) return null;
                    return (
                      <div
                        key={model.id}
                        onClick={() => {
                          setSelectedGuide(null);
                          onSelectProduct(model);
                        }}
                        className="p-3 border border-[#E5E7EB] hover:border-[#ED1C24] rounded bg-[#F7F7F8] hover:bg-white flex items-center gap-3 cursor-pointer transition-colors"
                      >
                        <img src={model.image} alt={model.name} className="w-12 h-12 object-contain" />
                        <div>
                          <div className="font-heading font-bold text-xs text-[#111827]">{model.name}</div>
                          <div className="font-mono text-[10px] text-[#ED1C24] font-semibold">{model.powerAes}W • {model.size}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="bg-[#18181B] hover:bg-[#ED1C24] text-white font-mono text-xs font-semibold px-4 py-2 rounded transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
