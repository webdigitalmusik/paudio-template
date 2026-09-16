import React, { useState } from 'react';

export const QualityStandardsSection: React.FC = () => {
  const [activeInfo, setActiveInfo] = useState<number | null>(null);

  const standards = [
    {
      icon: 'precision_manufacturing',
      title: 'Chassis Aluminium Cor',
      desc: 'Struktur rangka kokoh anti-resonansi yang menyalurkan panas dari celah magnet secara optimal.',
      details: 'Diproduksi menggunakan metode high-pressure die casting aluminium alloy A380 dengan rusuk penguat aerodinamis untuk mengurangi turbulensi aliran udara di belakang konus speaker.'
    },
    {
      icon: 'local_fire_department',
      title: 'High Temp Voice Coil',
      desc: 'Kawat tembaga tahan panas tinggi dengan former serat kaca (fiberglass) berdaya tahan termal hingga 300°C.',
      details: 'Menggunakan kawat tembaga bebas oksigen (OFC) bermutu tinggi dan perekat resin polimer thermoset yang tidak meleleh atau lepas lilitan pada level daya puncak berkepanjangan.'
    },
    {
      icon: 'water_drop',
      title: 'Weatherproof Cone',
      desc: 'Pulp kertas berkualitas tinggi dengan pelapis anti-air untuk menjaga stabilitas parameter di cuaca tropis Indonesia.',
      details: 'Formulasi serat selulosa panjang asal Selandia Baru yang dipresisi dan dilapisi lapisan hidrofobik ganda pada sisi depan dan belakang konus, tahan terhadap kelembaban udara 95% RH.'
    },
    {
      icon: 'verified',
      title: 'Klippel Verified',
      desc: 'Analisis distorsi motor magnetik dan linearitas pergerakan konus terkalibrasi sistem uji Klippel.',
      details: 'Setiap purwarupa transduser dianalisis dengan penganalisis laser Klippel R&D dari Jerman untuk memetakan linearitas Bl(x), Kms(x), dan distorsi intermodulasi (IMD) pada level ekskursi ekstrem.'
    }
  ];

  return (
    <section className="w-full bg-[#111111] text-white py-20 px-6 md:px-12 border-b border-[#2E2E33]" id="kualitas">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="max-w-2xl">
          <span className="text-[#ED1C24] font-mono text-xs uppercase font-semibold tracking-wider">
            // STANDAR KUALITAS PABRIKAN
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white mt-1">
            Dirancang untuk Daya Tahan Maksimal
          </h2>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Setiap komponen dirancang dengan toleransi mekanis tinggi guna menjamin kestabilan performa pada level daya puncak tanpa resiko deformasi voice coil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std, idx) => (
            <div
              key={idx}
              onClick={() => setActiveInfo(activeInfo === idx ? null : idx)}
              className="bg-[#18181B] border border-[#2E2E33] hover:border-gray-500 p-6 rounded flex flex-col justify-between cursor-pointer transition-all duration-200 group"
            >
              <div>
                <div className="w-10 h-10 rounded bg-[#111111] border border-[#2E2E33] flex items-center justify-center text-[#ED1C24] mb-4 group-hover:border-[#ED1C24] transition-colors">
                  <span className="material-symbols-outlined text-[22px]">{std.icon}</span>
                </div>
                <h4 className="font-heading text-base font-bold text-white group-hover:text-[#ED1C24] transition-colors">
                  {std.title}
                </h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {std.desc}
                </p>

                {activeInfo === idx && (
                  <div className="mt-3 pt-3 border-t border-[#2E2E33] text-[11px] text-gray-300 font-mono leading-relaxed bg-[#111111]/50 p-2 rounded">
                    {std.details}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#2E2E33]/60 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>{activeInfo === idx ? 'Tutup Info' : 'Standar R&D'}</span>
                <span className="text-[#ED1C24] material-symbols-outlined text-[14px]">
                  {activeInfo === idx ? 'expand_less' : 'info'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
