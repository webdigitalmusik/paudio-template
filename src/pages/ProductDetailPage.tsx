import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { TransducerProduct } from '../types';
import { updateDocumentSEO } from '../utils/seo';

interface ProductDetailPageProps {
  productId: string;
  onNavigateHome: () => void;
  onNavigateProductList: () => void;
  onNavigateProductDetail: (id: string) => void;
  onOpenCalculatorWithDriver: (product: TransducerProduct) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onNavigateHome,
  onNavigateProductList,
  onNavigateProductDetail,
  onOpenCalculatorWithDriver,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'ts' | 'box'>('ringkasan');
  const [copiedLink, setCopiedLink] = useState(false);

  const product: TransducerProduct | undefined = useMemo(() => {
    return PRODUCTS.find(
      (p) => p.id === productId || p.name.toLowerCase().replace(/\s+/g, '-') === productId.toLowerCase()
    );
  }, [productId]);

  const productImages = useMemo(() => {
    if (!product) return [];
    if (product.images && product.images.length > 0) {
      return product.images;
    }
    return [product.image];
  }, [product]);

  // Related products
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.size === product.size)).slice(0, 3);
  }, [product]);

  // Reset active image index when product changes
  useEffect(() => {
    setActiveImageIndex(0);
    window.scrollTo(0, 0);
  }, [productId]);

  // Update SEO for this product
  useEffect(() => {
    if (!product) {
      updateDocumentSEO({
        title: 'Produk Tidak Ditemukan | P.Audio Indonesia',
        description: 'Transduser loudspeaker P.Audio resmi tidak ditemukan.',
        canonicalPath: '/produk',
      });
      return;
    }

    const currentUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/produk/${product.id}`
        : `https://paudio.id/produk/${product.id}`;

    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `P.Audio ${product.name} ${product.categoryLabel}`,
      image: productImages,
      description: product.description,
      sku: product.id.toUpperCase(),
      mpn: product.model,
      brand: {
        '@type': 'Brand',
        name: 'P.Audio',
      },
      offers: {
        '@type': 'Offer',
        url: currentUrl,
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'P.Audio Indonesia Official',
        },
      },
      additionalProperty: [
        {
          '@type': 'PropertyValue',
          name: 'AES Power',
          value: `${product.powerAes} Watt`,
        },
        {
          '@type': 'PropertyValue',
          name: 'Nominal Impedance',
          value: `${product.impedance} Ohm`,
        },
        {
          '@type': 'PropertyValue',
          name: 'Sensitivity',
          value: `${product.sensitivity} dB`,
        },
        {
          '@type': 'PropertyValue',
          name: 'Voice Coil',
          value: product.voiceCoil,
        },
      ],
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: typeof window !== 'undefined' ? window.location.origin : 'https://paudio.id',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Katalog Produk',
          item: typeof window !== 'undefined' ? `${window.location.origin}/produk` : 'https://paudio.id/produk',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.name,
          item: currentUrl,
        },
      ],
    };

    updateDocumentSEO({
      title: `P.Audio ${product.name} (${product.size}) - Spesifikasi Resmi & Pesan WA`,
      description: `${product.name} ${product.categoryLabel} ${product.size}. Daya ${product.powerAes}W AES, Voice Coil ${product.voiceCoil}, impedansi ${product.impedance} Ohm. ${product.description.slice(0, 110)}`,
      keywords: [
        `paudio ${product.name.toLowerCase()}`,
        `harga paudio ${product.name.toLowerCase()}`,
        `speaker paudio ${product.size}`,
        `${product.name.toLowerCase()} indonesia`,
        `spesifikasi ${product.name.toLowerCase()}`,
      ],
      canonicalPath: `/produk/${product.id}`,
      ogType: 'website',
      ogImage: productImages[0],
      jsonLd: [productSchema, breadcrumbSchema],
    });
  }, [product, productImages]);

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  if (!product) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 text-center">
        <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">speaker</span>
        <h1 className="font-heading text-2xl font-bold text-gray-900 mb-2">Produk Tidak Ditemukan</h1>
        <p className="text-sm text-gray-600 mb-6 max-w-md">
          Model transduser yang Anda cari tidak tersedia dalam katalog resmi atau tautan tidak valid.
        </p>
        <button
          onClick={onNavigateProductList}
          className="bg-[#ED1C24] text-white px-5 py-2.5 rounded-lg text-xs font-mono font-semibold hover:bg-[#D0141C] transition-colors cursor-pointer"
        >
          Lihat Semua Produk
        </button>
      </div>
    );
  }

  // Pre-filled WhatsApp message for stock and price inquiry
  const waOrderText = encodeURIComponent(
    `Halo Admin P.Audio Indonesia, saya tertarik dengan produk:\n\n*Model: P.Audio ${product.name} (${product.size})*\n- Seri: ${product.series}\n- Kategori: ${product.categoryLabel}\n- Daya: ${product.powerAes}W AES (${product.powerProgram}W Program)\n- Impedansi: ${product.impedance} Ohm\n- Voice Coil: ${product.voiceCoil}\n\nApakah stok ready dan bisa diinfokan harga resmi distributor serta estimasi ongkos kirim? Terima kasih.`
  );

  // Pre-filled WhatsApp message for box and DSP consultation
  const waConsultText = encodeURIComponent(
    `Halo Admin P.Audio Indonesia, saya mau konsultasi desain boks dan rekomendasi amplifier untuk driver P.Audio ${product.name} (${product.size}).\n\nRekomendasi volume boks (liter) dan frekuensi tuning terbaik untuk boks saya bagaimana ya? Terima kasih.`
  );

  return (
    <div className="w-full bg-[#F7F7F8] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-gray-500 overflow-x-auto py-1">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#ED1C24] transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">home</span>
            <span>Beranda</span>
          </button>
          <span>/</span>
          <button
            onClick={onNavigateProductList}
            className="hover:text-[#ED1C24] transition-colors shrink-0 cursor-pointer"
          >
            Katalog Produk
          </button>
          <span>/</span>
          <span className="text-[#111827] font-semibold truncate">{product.name}</span>
        </nav>

        {/* Main Product Card */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
            {/* Left Column: Multi-Photo Interactive Gallery */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              {/* Main Photo Display Stage */}
              <div className="relative aspect-square bg-[#F4F4F6] rounded-2xl p-6 sm:p-8 flex items-center justify-center overflow-hidden border border-gray-200 group">
                <img
                  src={productImages[activeImageIndex]}
                  alt={`${product.name} - Foto ${activeImageIndex + 1}`}
                  className="max-h-full max-w-full object-contain transition-all duration-300 drop-shadow-md group-hover:scale-105"
                />

                {/* Badges Overlays */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
                  <span className="bg-[#111111]/90 backdrop-blur-xs text-[#ED1C24] font-mono text-xs font-bold px-2.5 py-1 rounded border border-[#2E2E33]">
                    {product.series}
                  </span>
                  {product.klippelVerified && (
                    <span className="bg-[#ED1C24] text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                      KLIPPEL VERIFIED
                    </span>
                  )}
                </div>

                {/* Photo Index Counter */}
                {productImages.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-full">
                    {activeImageIndex + 1} / {productImages.length} Foto
                  </div>
                )}

                {/* Next / Prev Navigation Buttons (if multiple images) */}
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 cursor-pointer"
                      title="Foto sebelumnya"
                      aria-label="Foto sebelumnya"
                    >
                      <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 cursor-pointer"
                      title="Foto berikutnya"
                      aria-label="Foto berikutnya"
                    >
                      <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Row (if more than 1 photo) */}
              {productImages.length > 1 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                      Galeri Foto ({productImages.length} Sudut Pandang)
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">Klik untuk mengganti</span>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                    {productImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`aspect-square rounded-xl p-2 bg-[#F9FAFB] border-2 transition-all flex items-center justify-center overflow-hidden cursor-pointer ${
                          activeImageIndex === idx
                            ? 'border-[#ED1C24] shadow-sm ring-2 ring-[#ED1C24]/20 scale-102 bg-white'
                            : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
                        }`}
                        title={`Tampilkan foto ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} Thumbnail ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trust Assurances Under Photos */}
              <div className="pt-2 grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-gray-600">
                <div className="bg-[#F7F7F8] p-2 rounded-lg border border-gray-200 flex flex-col items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[#ED1C24] text-[18px]">verified_user</span>
                  <span className="font-semibold">Original P.Audio</span>
                </div>
                <div className="bg-[#F7F7F8] p-2 rounded-lg border border-gray-200 flex flex-col items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[#ED1C24] text-[18px]">security</span>
                  <span className="font-semibold">Garansi 1 Tahun</span>
                </div>
                <div className="bg-[#F7F7F8] p-2 rounded-lg border border-gray-200 flex flex-col items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[#ED1C24] text-[18px]">local_shipping</span>
                  <span className="font-semibold">Kirim Seluruh RI</span>
                </div>
              </div>
            </div>

            {/* Right Column: Product Info & Direct WhatsApp Ordering */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Series and Category Label */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-[#ED1C24]/10 text-[#ED1C24] border border-[#ED1C24]/20 text-xs font-mono font-bold px-2.5 py-0.5 rounded">
                    {product.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-500 font-semibold uppercase">
                    {product.categoryLabel}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs font-mono text-gray-400">
                    Model: <strong className="text-gray-700">{product.model}</strong>
                  </span>
                </div>

                {/* Product Title */}
                <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]">
                  {product.name}
                </h1>

                {/* Short Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {product.description}
                </p>

                {/* Key Technical Highlights (Simplified Spec Grid) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                  <div className="bg-[#F9FAFB] border border-gray-200 p-3 rounded-xl font-mono text-center">
                    <span className="text-[10px] text-gray-400 block uppercase">Power AES</span>
                    <span className="font-bold text-base text-[#111827]">{product.powerAes}W</span>
                  </div>
                  <div className="bg-[#F9FAFB] border border-gray-200 p-3 rounded-xl font-mono text-center">
                    <span className="text-[10px] text-gray-400 block uppercase">Impedansi</span>
                    <span className="font-bold text-base text-[#111827]">{product.impedance}Ω</span>
                  </div>
                  <div className="bg-[#F9FAFB] border border-gray-200 p-3 rounded-xl font-mono text-center">
                    <span className="text-[10px] text-gray-400 block uppercase">Sensitivitas</span>
                    <span className="font-bold text-base text-[#111827]">{product.sensitivity} dB</span>
                  </div>
                  <div className="bg-[#F9FAFB] border border-gray-200 p-3 rounded-xl font-mono text-center">
                    <span className="text-[10px] text-gray-400 block uppercase">Voice Coil</span>
                    <span className="font-bold text-sm text-[#ED1C24] truncate block" title={product.voiceCoil}>
                      {product.voiceCoil}
                    </span>
                  </div>
                </div>

                {/* Specs List Summary */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-xs space-y-2">
                  <div className="flex justify-between py-1 border-b border-gray-200/70">
                    <span className="text-gray-500">Rentang Frekuensi:</span>
                    <span className="font-bold text-gray-900">{product.frequencyRange}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200/70">
                    <span className="text-gray-500">Continuous Program Power:</span>
                    <span className="font-bold text-gray-900">{product.powerProgram} Watt</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200/70">
                    <span className="text-gray-500">Tipe Magnet:</span>
                    <span className="font-bold text-gray-900">{product.magnetType}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-500">Struktur Rangka (Chassis):</span>
                    <span className="font-bold text-gray-900">{product.chassis}</span>
                  </div>
                </div>
              </div>

              {/* PRIMARY WHATSAPP ACTION SECTION */}
              <div className="bg-gradient-to-br from-gray-900 to-[#18181B] text-white rounded-2xl p-5 sm:p-6 border border-gray-800 space-y-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
                    <span className="font-mono text-xs font-semibold text-gray-300">
                      Stok Distributor Resmi Siap Kirim
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400">Garansi 1 Tahun</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-white">
                    Pesan Langsung atau Tanya Harga Terbaik
                  </h3>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    Dapatkan penawaran harga resmi distributor P.Audio Indonesia, diskon proyek panggung/rental, dan perhitungan ongkos kirim ke kota Anda.
                  </p>
                </div>

                {/* Big WhatsApp CTA Button */}
                <a
                  href={`https://wa.me/6281289902818?text=${waOrderText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-green-500/20 hover:scale-[1.01] text-center"
                >
                  <span className="material-symbols-outlined text-[24px]">chat</span>
                  <span>Tanya Harga &amp; Pesan via WhatsApp</span>
                </a>

                {/* Secondary Actions Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <a
                    href={`https://wa.me/6281289902818?text=${waConsultText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#2E2E33] hover:bg-[#3E3E42] text-white text-xs font-mono py-2.5 px-3 rounded-lg transition-colors text-center"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#25D366]">support_agent</span>
                    <span>Konsultasi Desain Boks</span>
                  </a>

                  <button
                    onClick={() => onOpenCalculatorWithDriver(product)}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#2E2E33] hover:bg-[#ED1C24] text-white text-xs font-mono py-2.5 px-3 rounded-lg transition-colors cursor-pointer text-center"
                  >
                    <span className="material-symbols-outlined text-[16px]">calculate</span>
                    <span>Kalkulator Boks Driver Ini</span>
                  </button>
                </div>

                {/* Share and Print Utility */}
                <div className="pt-2 border-t border-gray-800 flex items-center justify-between text-xs font-mono text-gray-400">
                  <button
                    onClick={handleCopyLink}
                    className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">link</span>
                    <span>{copiedLink ? 'Link Berhasil Disalin!' : 'Salin Tautan Produk'}</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">print</span>
                    <span>Cetak Lembar Spek</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Thiele-Small Parameters & Box Recommendation */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('ringkasan')}
              className={`pb-3 px-4 font-heading text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'ringkasan'
                  ? 'border-[#ED1C24] text-[#ED1C24]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              Rekomendasi Boks &amp; Karakter
            </button>
            <button
              onClick={() => setActiveTab('ts')}
              className={`pb-3 px-4 font-heading text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                activeTab === 'ts'
                  ? 'border-[#ED1C24] text-[#ED1C24]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              Parameter Thiele-Small Lengkap
            </button>
          </div>

          {activeTab === 'ringkasan' && (
            <div className="space-y-4">
              <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#ED1C24] font-mono text-xs font-bold uppercase">
                  <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                  <span>Rekomendasi Desain Enclosure / Boks Speaker</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <span className="text-gray-400 block text-[10px] uppercase">Tipe Boks Ideal</span>
                    <span className="font-bold text-gray-900 text-sm mt-0.5 block">{product.boxRecommendations.type}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <span className="text-gray-400 block text-[10px] uppercase">Volume Bersih (Vb)</span>
                    <span className="font-bold text-gray-900 text-sm mt-0.5 block">{product.boxRecommendations.recommendedVb}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <span className="text-gray-400 block text-[10px] uppercase">Tuning Frekuensi (Fb)</span>
                    <span className="font-bold text-gray-900 text-sm mt-0.5 block">{product.boxRecommendations.recommendedFb}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-sans leading-relaxed pt-1">
                  <strong>Catatan Khusus:</strong> {product.boxRecommendations.usageNote}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-red-50/50 border border-red-100 rounded-xl">
                <div>
                  <h4 className="font-heading font-bold text-sm text-gray-900">
                    Ingin Mensimulasikan Respon Frekuensi Boks Driver Ini?
                  </h4>
                  <p className="text-xs text-gray-600 font-sans mt-0.5">
                    Gunakan Kalkulator Boks P.Audio untuk menghitung dimensi lubang angin port Helmholtz dan kurva respon decibel.
                  </p>
                </div>
                <button
                  onClick={() => onOpenCalculatorWithDriver(product)}
                  className="bg-[#ED1C24] hover:bg-[#D0141C] text-white font-mono text-xs font-bold px-4 py-2.5 rounded-lg shrink-0 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span className="material-symbols-outlined text-[16px]">calculate</span>
                  <span>Buka Simulator Boks</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'ts' && (
            <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
              <table className="w-full text-xs font-mono">
                <tbody className="divide-y divide-[#E5E7EB]">
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-2.5 text-gray-600 font-semibold w-1/2">Resonansi Udara Bebas (Fs)</td>
                    <td className="px-4 py-2.5 font-bold text-[#111827]">{product.thieleSmall.fs} Hz</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-gray-600 font-semibold">Resistansi DC Voice Coil (Re)</td>
                    <td className="px-4 py-2.5 font-bold text-[#111827]">{product.thieleSmall.re} Ohm</td>
                  </tr>
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-2.5 text-gray-600 font-semibold">Faktor Q Mekanikal (Qms)</td>
                    <td className="px-4 py-2.5 font-bold text-[#111827]">{product.thieleSmall.qms}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-gray-600 font-semibold">Faktor Q Elektrikal (Qes)</td>
                    <td className="px-4 py-2.5 font-bold text-[#111827]">{product.thieleSmall.qes}</td>
                  </tr>
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-2.5 text-gray-600 font-semibold">Faktor Q Total (Qts)</td>
                    <td className="px-4 py-2.5 font-bold text-[#ED1C24]">{product.thieleSmall.qts}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-gray-600 font-semibold">Faktor Kekuatan Motor (BL)</td>
                    <td className="px-4 py-2.5 font-bold text-[#111827]">{product.thieleSmall.bl} T-m</td>
                  </tr>
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-2.5 text-gray-600 font-semibold">Massa Bergerak Total (Mms)</td>
                    <td className="px-4 py-2.5 font-bold text-[#111827]">{product.thieleSmall.mms} gram</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-gray-600 font-semibold">Volume Ekuivalen Udara (Vas)</td>
                    <td className="px-4 py-2.5 font-bold text-[#111827]">{product.thieleSmall.vas} Liter</td>
                  </tr>
                  <tr className="bg-[#F7F7F8]">
                    <td className="px-4 py-2.5 text-gray-600 font-semibold">Ekskursi Linear Maksimum (Xmax)</td>
                    <td className="px-4 py-2.5 font-bold text-[#111827]">{product.thieleSmall.xmax} mm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 text-gray-600 font-semibold">Efficiency Bandwidth Product (EBP)</td>
                    <td className="px-4 py-2.5 font-bold text-[#ED1C24]">{product.thieleSmall.ebp}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Related Transducer Models */}
        {relatedProducts.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[#ED1C24] font-mono text-xs uppercase font-semibold">
                  // PILIHAN TERKAIT
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111827]">
                  Model Transduser Serupa
                </h3>
              </div>
              <button
                onClick={onNavigateProductList}
                className="text-xs font-mono text-[#ED1C24] hover:underline cursor-pointer"
              >
                Lihat Semua ({PRODUCTS.length}) →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onNavigateProductDetail(rel.id)}
                  className="bg-white border border-[#E5E7EB] hover:border-gray-400 rounded-xl p-4 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="aspect-square bg-[#F7F7F8] rounded-lg p-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading font-bold text-sm text-[#111827] group-hover:text-[#ED1C24] transition-colors">
                          {rel.name}
                        </h4>
                        <span className="text-[#ED1C24] font-mono text-xs font-bold">{rel.powerAes}W</span>
                      </div>
                      <p className="text-[11px] text-gray-500 font-mono mt-0.5">
                        {rel.categoryLabel} • {rel.size} • {rel.impedance}Ω
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-[#ED1C24] font-semibold">
                    <span>Lihat Detail</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back navigation button */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <button
            onClick={onNavigateProductList}
            className="inline-flex items-center gap-1.5 bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 text-xs font-mono font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Kembali ke Katalog Produk</span>
          </button>

          <button
            onClick={onNavigateHome}
            className="text-xs font-mono text-gray-500 hover:text-[#111827] transition-colors cursor-pointer"
          >
            Menuju Beranda Utama
          </button>
        </div>
      </div>
    </div>
  );
};
