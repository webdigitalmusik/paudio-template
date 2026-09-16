import React from 'react';

interface CategoriesSectionProps {
  onSelectCategory: (category: 'all' | 'sub' | 'mid' | 'hf') => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (cat: 'all' | 'sub' | 'mid' | 'hf') => {
    onSelectCategory(cat);
    const element = document.getElementById('katalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 border-b border-[#E5E7EB]" id="kategori">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[#ED1C24] font-mono text-xs uppercase font-semibold tracking-wider">
              // ARSITEKTUR KOMPONEN
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#111827] mt-1">
              Kategori Transduser
            </h2>
          </div>
          <p className="text-[#4B5563] text-sm max-w-md">
            Telusuri modul suara sesuai jangkauan spektrum frekuensi dan kebutuhan kabinet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: LF Drivers & Subwoofers */}
          <button
            onClick={() => handleCategoryClick('sub')}
            className="group text-left bg-[#F7F7F8] hover:bg-white border border-[#E5E7EB] hover:border-[#ED1C24] p-6 rounded transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between text-[#4B5563] pb-4">
                <span className="material-symbols-outlined text-[#ED1C24] text-[28px]">speaker</span>
                <span className="font-mono text-xs text-[#9CA3AF]">LF-SERIES</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors">
                LF Drivers &amp; Subwoofers
              </h3>
              <p className="text-[#4B5563] text-xs mt-2 leading-relaxed">
                Driver 10", 12", 15", 18", hingga 21" bertenaga tinggi untuk kabinet subwoofer dan mid-bass lapangan.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs text-[#ED1C24] font-semibold flex items-center justify-between">
              <span>30 Hz – 2.5 kHz</span>
              <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </div>
          </button>

          {/* Card 2: HF Compression Drivers */}
          <button
            onClick={() => handleCategoryClick('hf')}
            className="group text-left bg-[#F7F7F8] hover:bg-white border border-[#E5E7EB] hover:border-[#ED1C24] p-6 rounded transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between text-[#4B5563] pb-4">
                <span className="material-symbols-outlined text-[#ED1C24] text-[28px]">graphic_eq</span>
                <span className="font-mono text-xs text-[#9CA3AF]">HF-SERIES</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors">
                HF Compression Drivers
              </h3>
              <p className="text-[#4B5563] text-xs mt-2 leading-relaxed">
                Diafragma titanium dan polyimide exit 1.0" hingga 2.0" untuk artikulasi vokal dan kejernihan frekuensi tinggi.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs text-[#ED1C24] font-semibold flex items-center justify-between">
              <span>500 Hz – 20 kHz</span>
              <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </div>
          </button>

          {/* Card 3: Horn & Waveguide */}
          <button
            onClick={() => handleCategoryClick('all')}
            className="group text-left bg-[#F7F7F8] hover:bg-white border border-[#E5E7EB] hover:border-[#ED1C24] p-6 rounded transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between text-[#4B5563] pb-4">
                <span className="material-symbols-outlined text-[#ED1C24] text-[28px]">campaign</span>
                <span className="font-mono text-xs text-[#9CA3AF]">WG-SERIES</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors">
                Horn &amp; Waveguide
              </h3>
              <p className="text-[#4B5563] text-xs mt-2 leading-relaxed">
                Corong Constant Directivity aluminium cor dan ABS tahan benturan dengan kontrol directivity presisi.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs text-[#ED1C24] font-semibold flex items-center justify-between">
              <span>60°x40° s/d 90°x40°</span>
              <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </div>
          </button>

          {/* Card 4: Recone Kit & Diafragma */}
          <button
            onClick={() => handleCategoryClick('all')}
            className="group text-left bg-[#F7F7F8] hover:bg-white border border-[#E5E7EB] hover:border-[#ED1C24] p-6 rounded transition-all duration-200 flex flex-col justify-between cursor-pointer hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between text-[#4B5563] pb-4">
                <span className="material-symbols-outlined text-[#ED1C24] text-[28px]">build_circle</span>
                <span className="font-mono text-xs text-[#9CA3AF]">SPT-KIT</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111827] group-hover:text-[#ED1C24] transition-colors">
                Recone Kit &amp; Diafragma
              </h3>
              <p className="text-[#4B5563] text-xs mt-2 leading-relaxed">
                Suku cadang asli pabrikan: voice coil, daun speaker, spider silikon, dan diafragma siap pasang.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs text-[#ED1C24] font-semibold flex items-center justify-between">
              <span>100% Genuine Parts</span>
              <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
