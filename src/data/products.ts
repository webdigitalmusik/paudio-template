import { TransducerProduct, ApplicationGuide, TechnicalArticle } from '../types';

export const P_AUDIO_LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv75WKRkrrAluRNHMPYw1137iLzbILKzkRB6YaexKvtOuRZkm4v3CMvtAnNGZcljf3vkgOP2EUB8268zmzdFXvI70fIWM3v1AS7sByXB9otzcxpNWbP7CkGGAllI7LSdHPbNE6Ah4m9IHGI0pPP--q_3OiEBYBTmJ-U8WlqRsN4yKGxjoULpN53jGlCsAbyYO5xr79F-D1rLwrJxy45Rqgz5vXnVaCwVllFrx9cH6YpueI8t5r3BtVigS1JZLbNw9nInc';
export const P_AUDIO_FOOTER_LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6GIKgAr5l0KLTUrRzv10X-JZJFSOnm7P5-T5m1drQrPM5OCqWFPwyHjjSkZhQJ_2Lh8f8reLVzNjmdFYFTTvsR7Gc7AOSkdBiMNc81UDcSkCRZGRHHOyIW-bIZI3IXlbwKw85d4EUKszWJ94FhaGXLuQpFDZKcSdfYT6deNSv6eteVEVv30avE9XFkFk-rDcbMCi1Ru-sl2KoOFTeSxNcqrohFxicFE2rGFpldRztnmj6nsAVlD6Lzu0YFlAnFV9HKE';

export const PRODUCTS: TransducerProduct[] = [
  {
    id: 'gst-181500-v3',
    name: 'GST-181500 V3',
    model: 'GST-181500 V3',
    series: 'V3 SERIES',
    badge: '18 INCH',
    category: 'sub',
    categoryLabel: 'Subwoofer',
    size: '18"',
    powerAes: 1500,
    powerProgram: 3000,
    impedance: 8,
    sensitivity: 96.0,
    voiceCoil: '4.5" Copper',
    voiceCoilDiameterMm: 114.3,
    frequencyRange: '30 Hz – 1.5 kHz',
    magnetType: 'Ferrite Y35 High Density',
    chassis: 'Cast Aluminium Heavy-Duty',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XXRhG7of5F5pdrezJlpkm4bj7wkD_Xp7MZ_cza3h7YgHrKweZTPCtZZ0SFzFWRa6Q4v7HLGA2tL2Jk5A9mcDps-gt0U2BgE67Ru1bZSugVYGm_GNy4kVLKc1vWUdoE87HCXYQl1Ja3iXiBEoxOM4XIarqMLYp2Vn6DH-TJ6a54dJcHgLqDVlVFHfqkAshcWJOM7A8hZWe3jC4qub98mWNtsNaq-y8je5Ghi8C_-hDsJkTsqJmnWEqLo2g',
    images: [
      'https://lh3.googleusercontent.com/aida/AEtjO1XXRhG7of5F5pdrezJlpkm4bj7wkD_Xp7MZ_cza3h7YgHrKweZTPCtZZ0SFzFWRa6Q4v7HLGA2tL2Jk5A9mcDps-gt0U2BgE67Ru1bZSugVYGm_GNy4kVLKc1vWUdoE87HCXYQl1Ja3iXiBEoxOM4XIarqMLYp2Vn6DH-TJ6a54dJcHgLqDVlVFHfqkAshcWJOM7A8hZWe3jC4qub98mWNtsNaq-y8je5Ghi8C_-hDsJkTsqJmnWEqLo2g',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Touring Grade Concert Subwoofer dengan voice coil tembaga 4.5 inci yang dirancang khusus untuk dentuman bass lapangan jarak jauh dan tekanan suara tinggi tanpa distorsi mekanikal.',
    klippelVerified: true,
    thieleSmall: {
      fs: 35,
      re: 5.4,
      qms: 7.2,
      qes: 0.33,
      qts: 0.31,
      bl: 27.8,
      mms: 228,
      vas: 185,
      sd: 1225,
      xmax: 11.5,
      ebp: 106,
      efficiency: 2.4,
    },
    boxRecommendations: {
      type: 'Bass Reflex & Horn Loaded (Scooper/Planar)',
      recommendedVb: '160 - 220 Liter',
      recommendedFb: '34 - 38 Hz',
      usageNote: 'Rasio EBP 106 sangat fleksibel untuk boks bass reflex konser maupun manifold horn-loaded dengan respon pukulan transient cepat.',
    },
  },
  {
    id: 'sd-18el',
    name: 'SD-18EL',
    model: 'SD-18EL',
    series: 'EL SERIES',
    badge: '18 INCH',
    category: 'sub',
    categoryLabel: 'Subwoofer',
    size: '18"',
    powerAes: 1800,
    powerProgram: 3600,
    impedance: 8,
    sensitivity: 97.5,
    voiceCoil: '5.0" In/Out',
    voiceCoilDiameterMm: 127.0,
    frequencyRange: '28 Hz – 1.0 kHz',
    magnetType: 'Double Ferrite Sandwich',
    chassis: 'Deep Cast Aluminium Heat-Sink Basket',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XA-qd518S3t7dehKCEliWX8gc_rYOoN4VxeNewuZEJrrvtk9OaAIjwo9EvzKtWd9ndNY3R5nLg33A7wmn0JCPtoZmcIMwIss1m744amFdjS3H3qLBfo-ErE8Cb33ZLQvIo7lOR_a14hWUDXSkXTUG5wlptPYvBXpyc-YF-RIDHNWOlgtPrE-zPddtP0pF9aE6TBkGO6zodd1DeO2MJhonX5VemCxrALp19xH2y0TbgY6RzKE0GYni62TY_',
    images: [
      'https://lh3.googleusercontent.com/aida/AEtjO1XA-qd518S3t7dehKCEliWX8gc_rYOoN4VxeNewuZEJrrvtk9OaAIjwo9EvzKtWd9ndNY3R5nLg33A7wmn0JCPtoZmcIMwIss1m744amFdjS3H3qLBfo-ErE8Cb33ZLQvIo7lOR_a14hWUDXSkXTUG5wlptPYvBXpyc-YF-RIDHNWOlgtPrE-zPddtP0pF9aE6TBkGO6zodd1DeO2MJhonX5VemCxrALp19xH2y0TbgY6RzKE0GYni62TY_',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Heavy-Duty Infra Subwoofer flagship P.Audio bertenaga 1800 Watt AES murni. Dilengkapi voice coil inside/outside berdiameter masif 5.0 inci untuk dissipasi suhu ekstrem pada sub-bass infra 30 Hz.',
    klippelVerified: true,
    thieleSmall: {
      fs: 32,
      re: 5.2,
      qms: 8.5,
      qes: 0.31,
      qts: 0.30,
      bl: 31.5,
      mms: 275,
      vas: 198,
      sd: 1250,
      xmax: 14.0,
      ebp: 103,
      efficiency: 2.7,
    },
    boxRecommendations: {
      type: 'Infra Sub Bass Reflex / Double 18" Concert',
      recommendedVb: '180 - 250 Liter per driver',
      recommendedFb: '30 - 35 Hz',
      usageNote: 'Kekuatan BL 31.5 T-m menjamin pergerakan konus terkontrol sempurna bahkan saat digeber power amplifier 4000-5000W peak per channel.',
    },
  },
  {
    id: 'c18-650el',
    name: 'C18-650EL',
    model: 'C18-650EL',
    series: 'CLASSIC SERIES',
    badge: '18 INCH',
    category: 'sub',
    categoryLabel: 'Subwoofer',
    size: '18"',
    powerAes: 650,
    powerProgram: 1300,
    impedance: 8,
    sensitivity: 98.0,
    voiceCoil: '4.0" Copper',
    voiceCoilDiameterMm: 101.6,
    frequencyRange: '30 Hz – 2.0 kHz',
    magnetType: 'Heavy Ferrite Motor',
    chassis: 'Rigid Cast Aluminium Basket',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XXRhG7of5F5pdrezJlpkm4bj7wkD_Xp7MZ_cza3h7YgHrKweZTPCtZZ0SFzFWRa6Q4v7HLGA2tL2Jk5A9mcDps-gt0U2BgE67Ru1bZSugVYGm_GNy4kVLKc1vWUdoE87HCXYQl1Ja3iXiBEoxOM4XIarqMLYp2Vn6DH-TJ6a54dJcHgLqDVlVFHfqkAshcWJOM7A8hZWe3jC4qub98mWNtsNaq-y8je5Ghi8C_-hDsJkTsqJmnWEqLo2g',
    images: [
      'https://lh3.googleusercontent.com/aida/AEtjO1XXRhG7of5F5pdrezJlpkm4bj7wkD_Xp7MZ_cza3h7YgHrKweZTPCtZZ0SFzFWRa6Q4v7HLGA2tL2Jk5A9mcDps-gt0U2BgE67Ru1bZSugVYGm_GNy4kVLKc1vWUdoE87HCXYQl1Ja3iXiBEoxOM4XIarqMLYp2Vn6DH-TJ6a54dJcHgLqDVlVFHfqkAshcWJOM7A8hZWe3jC4qub98mWNtsNaq-y8je5Ghi8C_-hDsJkTsqJmnWEqLo2g',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Driver subwoofer 18 inci legendaris paling populer di kalangan rental audio panggung Indonesia. Menawarkan bass bulat empuk, pukulan punch bertenaga, dan ketahanan voice coil 4 inci yang teruji puluhan tahun.',
    klippelVerified: true,
    thieleSmall: {
      fs: 38,
      re: 5.6,
      qms: 6.9,
      qes: 0.36,
      qts: 0.34,
      bl: 24.2,
      mms: 195,
      vas: 215,
      sd: 1225,
      xmax: 8.5,
      ebp: 105,
      efficiency: 2.8,
    },
    boxRecommendations: {
      type: 'Bass Reflex / Scoop / Miniscoop / Planar',
      recommendedVb: '150 - 200 Liter',
      recommendedFb: '38 - 42 Hz',
      usageNote: 'Sangat cocok untuk boks tipe Miniscoop 18 dan Planar yang mengutamakan bass bulat, lincah, dan lontaran suara jauh di panggung pesta.',
    },
  },
  {
    id: 'bm-d750-ii',
    name: 'BM-D750 II',
    model: 'BM-D750 II',
    series: 'TITANIUM',
    badge: '2.0" EXIT',
    category: 'hf',
    categoryLabel: 'Compression Driver',
    size: '2.0" Exit',
    powerAes: 150,
    powerProgram: 300,
    impedance: 8,
    sensitivity: 108.0,
    voiceCoil: '3.0" Edge-wound',
    voiceCoilDiameterMm: 76.2,
    frequencyRange: '800 Hz – 20 kHz',
    magnetType: 'Heavy Ferrite Ring',
    chassis: 'Precision CNC Machined Phasing Plug',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPQwPt24h4G3jNQjRIeJMzjAAneyStdckwQ8BxnIuaZhz9-SIpZ0LEykVSNxhclcmk75suVCZz4Ygc5a5VhnpnIdrYlapE0W2dlEbYKa04eTq9yf3QGjk2p10LstKUZKTVeR29RZYyh-vr-Cu4kVNuZgWRYTyt7AMUYC7ftpUAtcKXPlEINXvbwnYFp5KgpT7vI_w8kTje8ZNdkzzAJ6GDY_b1sNIDA6T9qNbwsmJ4fXjGmR3gSnM2Xg',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPQwPt24h4G3jNQjRIeJMzjAAneyStdckwQ8BxnIuaZhz9-SIpZ0LEykVSNxhclcmk75suVCZz4Ygc5a5VhnpnIdrYlapE0W2dlEbYKa04eTq9yf3QGjk2p10LstKUZKTVeR29RZYyh-vr-Cu4kVNuZgWRYTyt7AMUYC7ftpUAtcKXPlEINXvbwnYFp5KgpT7vI_w8kTje8ZNdkzzAJ6GDY_b1sNIDA6T9qNbwsmJ4fXjGmR3gSnM2Xg',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Large Format Compression Driver legendaris dengan diafragma titanium murni 3.0 inci dan throat exit 2.0 inci. Karakter suara treble renyah, artikulasi vokal tajam, dan daya jangkau lemparan jauh.',
    klippelVerified: true,
    thieleSmall: {
      fs: 650,
      re: 6.2,
      qms: 0,
      qes: 0,
      qts: 0,
      bl: 13.5,
      mms: 4.8,
      vas: 0,
      sd: 45,
      xmax: 0.8,
      ebp: 0,
      efficiency: 28.0,
    },
    boxRecommendations: {
      type: 'Constant Directivity Horn 60x40 / 90x40',
      recommendedVb: 'N/A (Driver Horn)',
      recommendedFb: 'Crossover HPF: 1.2 kHz - 1.5 kHz (18-24dB/Oct)',
      usageNote: 'Direkomendasikan menggunakan crossover aktif DSP dengan titik potong minimal 1.2 kHz 24dB Butterworth atau Linkwitz-Riley.',
    },
  },
  {
    id: 'wn-15r',
    name: 'WN-15R',
    model: 'WN-15R',
    series: 'NEODYMIUM',
    badge: '15 INCH',
    category: 'mid',
    categoryLabel: 'Mid-Bass Transducer',
    size: '15"',
    powerAes: 800,
    powerProgram: 1600,
    impedance: 8,
    sensitivity: 99.0,
    voiceCoil: '4.0" Aluminum',
    voiceCoilDiameterMm: 101.6,
    frequencyRange: '50 Hz – 3.0 kHz',
    magnetType: 'High Grade NdFeB Neodymium',
    chassis: 'Ultra Light Aluminium Die-Cast',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOZJfNdxQPtHfwmsXC4dqQRx3tVFjzFn2i4oE_hEObi80XsaXWt4Z_CqjnaUFNmOUg0EIDg6ONW-SxFD9s6J9iNc6-unDWemt0Z0IX5UlqZVpWE3thpKWwJNJSo1nlcoq3UX8ZlY_lZI4Xs_h-9VtzGY1lnP4iLP2cUoq8iisb2KTiGbO6if0AXmoiYlKh7rPdqrEYqljdbJMQo4bmaLhnC5t9s0olViBBPSDf13b8zBpFI4SjWkNIOA',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOZJfNdxQPtHfwmsXC4dqQRx3tVFjzFn2i4oE_hEObi80XsaXWt4Z_CqjnaUFNmOUg0EIDg6ONW-SxFD9s6J9iNc6-unDWemt0Z0IX5UlqZVpWE3thpKWwJNJSo1nlcoq3UX8ZlY_lZI4Xs_h-9VtzGY1lnP4iLP2cUoq8iisb2KTiGbO6if0AXmoiYlKh7rPdqrEYqljdbJMQo4bmaLhnC5t9s0olViBBPSDf13b8zBpFI4SjWkNIOA',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Touring Mid-Bass Transducer Neodymium berbobot ringan dengan efisiensi tinggi 99 dB SPL. Sangat digemari perakit line array touring gantung dan floor monitor karena vokal lantang dan bobot yang mudah diangkat.',
    klippelVerified: true,
    thieleSmall: {
      fs: 48,
      re: 5.6,
      qms: 6.8,
      qes: 0.28,
      qts: 0.27,
      bl: 23.4,
      mms: 98,
      vas: 142,
      sd: 855,
      xmax: 6.5,
      ebp: 171,
      efficiency: 3.8,
    },
    boxRecommendations: {
      type: 'Vented Mid-High Box / 2-Way Line Array',
      recommendedVb: '55 - 85 Liter',
      recommendedFb: '52 - 58 Hz',
      usageNote: 'Nilai EBP 171 menghasilkan dorongan vokal dan mid-bass yang sangat padat dan fokus pada susunan modul line array gantung.',
    },
  },
  {
    id: 'e15-300s',
    name: 'E15-300S',
    model: 'E15-300S',
    series: 'ECONOMY SERIES',
    badge: '15 INCH',
    category: 'mid',
    categoryLabel: 'Mid-Bass Transducer',
    size: '15"',
    powerAes: 300,
    powerProgram: 600,
    impedance: 8,
    sensitivity: 98.0,
    voiceCoil: '3.0" Copper',
    voiceCoilDiameterMm: 76.2,
    frequencyRange: '45 Hz – 3.5 kHz',
    magnetType: 'Ferrite Standard',
    chassis: 'Heavy Pressed Steel / Alloy Basket',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOZJfNdxQPtHfwmsXC4dqQRx3tVFjzFn2i4oE_hEObi80XsaXWt4Z_CqjnaUFNmOUg0EIDg6ONW-SxFD9s6J9iNc6-unDWemt0Z0IX5UlqZVpWE3thpKWwJNJSo1nlcoq3UX8ZlY_lZI4Xs_h-9VtzGY1lnP4iLP2cUoq8iisb2KTiGbO6if0AXmoiYlKh7rPdqrEYqljdbJMQo4bmaLhnC5t9s0olViBBPSDf13b8zBpFI4SjWkNIOA',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOZJfNdxQPtHfwmsXC4dqQRx3tVFjzFn2i4oE_hEObi80XsaXWt4Z_CqjnaUFNmOUg0EIDg6ONW-SxFD9s6J9iNc6-unDWemt0Z0IX5UlqZVpWE3thpKWwJNJSo1nlcoq3UX8ZlY_lZI4Xs_h-9VtzGY1lnP4iLP2cUoq8iisb2KTiGbO6if0AXmoiYlKh7rPdqrEYqljdbJMQo4bmaLhnC5t9s0olViBBPSDf13b8zBpFI4SjWkNIOA',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Driver mid-bass 15 inci ekonomis paling dicari untuk sound hajatan kampung, masjid, dan monitor vokal. Karakter mid jelas, vokal tebal, dan tahan lama.',
    klippelVerified: true,
    thieleSmall: {
      fs: 52,
      re: 5.8,
      qms: 5.5,
      qes: 0.42,
      qts: 0.39,
      bl: 17.5,
      mms: 82,
      vas: 135,
      sd: 855,
      xmax: 4.5,
      ebp: 123,
      efficiency: 2.9,
    },
    boxRecommendations: {
      type: '2-Way Full Range / Floor Monitor',
      recommendedVb: '60 - 90 Liter',
      recommendedFb: '55 Hz',
      usageNote: 'Pilihan terbaik untuk dipadukan dengan driver tweter BM-D450S pada boks 2-way 15 inch point source.',
    },
  },
  {
    id: 'sd-21el',
    name: 'SD-21EL',
    model: 'SD-21EL',
    series: 'EL SERIES',
    badge: '21 INCH',
    category: 'sub',
    categoryLabel: 'Subwoofer',
    size: '21"',
    powerAes: 2000,
    powerProgram: 4000,
    impedance: 8,
    sensitivity: 98.0,
    voiceCoil: '5.0" Dual-Winding Copper',
    voiceCoilDiameterMm: 127.0,
    frequencyRange: '25 Hz – 800 Hz',
    magnetType: 'Super Sized Double Ferrite',
    chassis: 'Reinforced Multi-Spoke Cast Aluminium',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XA-qd518S3t7dehKCEliWX8gc_rYOoN4VxeNewuZEJrrvtk9OaAIjwo9EvzKtWd9ndNY3R5nLg33A7wmn0JCPtoZmcIMwIss1m744amFdjS3H3qLBfo-ErE8Cb33ZLQvIo7lOR_a14hWUDXSkXTUG5wlptPYvBXpyc-YF-RIDHNWOlgtPrE-zPddtP0pF9aE6TBkGO6zodd1DeO2MJhonX5VemCxrALp19xH2y0TbgY6RzKE0GYni62TY_',
    images: [
      'https://lh3.googleusercontent.com/aida/AEtjO1XA-qd518S3t7dehKCEliWX8gc_rYOoN4VxeNewuZEJrrvtk9OaAIjwo9EvzKtWd9ndNY3R5nLg33A7wmn0JCPtoZmcIMwIss1m744amFdjS3H3qLBfo-ErE8Cb33ZLQvIo7lOR_a14hWUDXSkXTUG5wlptPYvBXpyc-YF-RIDHNWOlgtPrE-zPddtP0pF9aE6TBkGO6zodd1DeO2MJhonX5VemCxrALp19xH2y0TbgY6RzKE0GYni62TY_',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Monster subwoofer 21 inci berdaya 2000W AES untuk sistem konser stadion dan festival akbar lapangan terbuka. Menggetarkan udara dengan respon frekuensi sub-sonik turun hingga 25 Hz.',
    klippelVerified: true,
    thieleSmall: {
      fs: 28,
      re: 5.1,
      qms: 9.1,
      qes: 0.29,
      qts: 0.28,
      bl: 33.8,
      mms: 360,
      vas: 310,
      sd: 1680,
      xmax: 15.0,
      ebp: 96,
      efficiency: 2.9,
    },
    boxRecommendations: {
      type: 'Large Vented / Bass-Horn Enclosure',
      recommendedVb: '250 - 350 Liter',
      recommendedFb: '28 - 32 Hz',
      usageNote: 'Sangat disarankan memakai bracing internal ganda pada kabinet boks karena tekanan internal kabinet mencapai level ekstrim.',
    },
  },
  {
    id: 'bm-d450s',
    name: 'BM-D450S',
    model: 'BM-D450S',
    series: 'TITANIUM',
    badge: '1.0" EXIT',
    category: 'hf',
    categoryLabel: 'Compression Driver',
    size: '1.0" Exit',
    powerAes: 80,
    powerProgram: 160,
    impedance: 8,
    sensitivity: 106.0,
    voiceCoil: '1.75" Aluminium Ribbon',
    voiceCoilDiameterMm: 44.4,
    frequencyRange: '1.2 kHz – 20 kHz',
    magnetType: 'Ferrite Standard',
    chassis: 'Screw-on 1-3/8" Thread Mount',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPQwPt24h4G3jNQjRIeJMzjAAneyStdckwQ8BxnIuaZhz9-SIpZ0LEykVSNxhclcmk75suVCZz4Ygc5a5VhnpnIdrYlapE0W2dlEbYKa04eTq9yf3QGjk2p10LstKUZKTVeR29RZYyh-vr-Cu4kVNuZgWRYTyt7AMUYC7ftpUAtcKXPlEINXvbwnYFp5KgpT7vI_w8kTje8ZNdkzzAJ6GDY_b1sNIDA6T9qNbwsmJ4fXjGmR3gSnM2Xg',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPQwPt24h4G3jNQjRIeJMzjAAneyStdckwQ8BxnIuaZhz9-SIpZ0LEykVSNxhclcmk75suVCZz4Ygc5a5VhnpnIdrYlapE0W2dlEbYKa04eTq9yf3QGjk2p10LstKUZKTVeR29RZYyh-vr-Cu4kVNuZgWRYTyt7AMUYC7ftpUAtcKXPlEINXvbwnYFp5KgpT7vI_w8kTje8ZNdkzzAJ6GDY_b1sNIDA6T9qNbwsmJ4fXjGmR3gSnM2Xg',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Driver tweter 1 inci drat ulir favorit untuk sound panggung skala medium, audio cafe, dan boks 2-way 15 inch point-source.',
    klippelVerified: true,
    thieleSmall: {
      fs: 900,
      re: 6.8,
      qms: 0,
      qes: 0,
      qts: 0,
      bl: 8.5,
      mms: 1.8,
      vas: 0,
      sd: 22,
      xmax: 0.5,
      ebp: 0,
      efficiency: 18.0,
    },
    boxRecommendations: {
      type: '1.0" Screw-on Horn Flare',
      recommendedVb: 'N/A',
      recommendedFb: 'Crossover HPF: 1.8 kHz 18dB/Oct',
      usageNote: 'Pilihan ekonomis dan tahan banting untuk upgrade tweeter boks pasif maupun aktif.',
    },
  },
];

export const APPLICATION_GUIDES: ApplicationGuide[] = [
  {
    id: 'subwoofer-lapangan',
    title: 'Subwoofer Lapangan',
    icon: 'speaker_group',
    description: 'Driver daya besar untuk boks tipe Bass-Reflex, Horn-Loaded (Scooper/Planar), dan konfigurasi Cardioid Array.',
    recommendation: '18" & 21" Cast Frame (SD-18EL, GST-181500 V3, SD-21EL)',
    detailedSpecs: [
      'Mampu menahan suhu voice coil hingga 300°C dengan sistem sirkulasi udara celah magnetik ganda.',
      'Rasio EBP 100-110 ideal untuk boks lemparan jauh seperti Planar, CBS, Miniscoop, dan Martin Audio style.',
      'Konus berpelapis resin tahan air anti melar akibat embun malam di panggung terbuka.'
    ],
    recommendedModelIds: ['sd-18el', 'gst-181500-v3', 'sd-21el']
  },
  {
    id: 'line-array-touring',
    title: 'Line Array Touring',
    icon: 'waves',
    description: 'Transduser Neodymium berbobot ringan dipadu Waveguide planar untuk respon jarak jauh pada event festival.',
    recommendation: 'Neodymium Mid + HF Driver (WN-15R, BM-D750 II)',
    detailedSpecs: [
      'Magnet Neodymium N45H memangkas bobot boks hingga 45% saat rigging gantung kapasitas tinggi.',
      'Sensitivitas sangat tinggi 99 - 108 dB untuk efisiensi daya amplifier pada jangkauan 50+ meter.',
      'Fase konus presisi untuk menghindari pembatalan frekuensi (comb filtering) antar modul bertingkat.'
    ],
    recommendedModelIds: ['wn-15r', 'bm-d750-ii']
  },
  {
    id: 'wedge-monitor',
    title: 'Wedge Monitor Panggung',
    icon: 'hearing',
    description: 'Kejelasan artikulasi vokal dan penolakan feedback tinggi untuk monitoring panggung live musisi.',
    recommendation: '12" & 15" Coaxial Transducer / WN-15R + BM-D750 II',
    detailedSpecs: [
      'Linearitas respon mid-vokal 800 Hz - 3.5 kHz tanpa lonjakan resonansi berbahaya penyebab feedback mic.',
      'Dispersi suara terkontrol agar hanya terdengar oleh musisi di depan boks tanpa bocor ke mic vokal.',
      'Gril dan sasis kokoh tahan injakan dan benturan selama penataan panggung konser.'
    ],
    recommendedModelIds: ['wn-15r', 'bm-d750-ii']
  },
  {
    id: 'instalasi-gedung',
    title: 'Instalasi Gedung & Rumah Ibadah',
    icon: 'domain',
    description: 'Ketahanan pemakaian kontinu dengan daun speaker tahan kelembaban untuk aula serbaguna dan masjid.',
    recommendation: 'Weather-Treated Cones (GST-181500 V3, BM-D450S)',
    detailedSpecs: [
      'Impedansi stabil pada pemakaian nonstop harian (continuous duty 24/7).',
      'Artikulasi vokal tajam dan jernih untuk pidato dan khutbah di ruang bergema tinggi.',
      'Klep suspensi silikon anti getas menjaga parameter T/S tetap presisi bertahun-tahun.'
    ],
    recommendedModelIds: ['gst-181500-v3', 'bm-d450s']
  }
];

export const TECHNICAL_ARTICLES: TechnicalArticle[] = [
  {
    id: 'cara-memilih-driver-18',
    slug: 'cara-memilih-driver-18-subwoofer-lapangan',
    tag: 'PARAMETER T/S',
    category: 'Parameter T/S & Desain Boks',
    title: 'Cara Memilih Driver 18 Inch: Karakteristik Bass Reflex vs Horn Loaded',
    summary: 'Panduan praktis membaca rasio EBP, Fs, dan Qts saat merancang boks subwoofer lapangan untuk mendapatkan tendangan bass solid jarak jauh.',
    readTime: '6 menit baca',
    datePublished: '2025-02-15',
    dateModified: '2025-02-28',
    author: {
      name: 'Ir. Hendra Wijaya',
      role: 'Senior Acoustic Engineer P.Audio ID',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1400&q=80',
    imageCaption: 'Pengukuran respons frekuensi dan ekskursi konus subwoofer 18 inci pada ruang uji anechoic.',
    seo: {
      metaTitle: 'Cara Memilih Driver 18 Inch Subwoofer Lapangan: Bass Reflex vs Horn | P.Audio ID',
      metaDescription: 'Pelajari cara memilih transduser 18 inci terbaik untuk boks CBS, Scooper, dan Bass Reflex berdasarkan parameter EBP, Fs, Qts, dan Xmax driver P.Audio.',
      keywords: [
        'cara memilih speaker 18 inch',
        'subwoofer lapangan',
        'ebp speaker',
        'paudio sd 18el',
        'boks horn loaded',
        'bass reflex',
        'parameter thiele small'
      ],
    },
    content: [
      'Saat merancang boks subwoofer untuk sistem tata suara panggung terbuka (outdoor sound system), kesalahan paling fatal yang sering ditemui adalah menentukan transduser semata-mata berdasarkan angka watt terbesar yang tertera pada kardus.',
      'Watt hanyalah indikator ketahanan termal kumparan (voice coil). Karakter suara, efisiensi akustik, dan respon nada rendah sebenarnya ditentukan oleh perpaduan parameter Thiele-Small (T/S) terhadap volume dan geometri enclosure boks speaker Anda.',
      'Salah satu parameter paling krusial yang wajib dipahami oleh setiap sound engineer dan box builder adalah EBP (Efficiency Bandwidth Product). Rumus dasar EBP adalah: EBP = Fs / Qes.',
      'Transduser dengan nilai EBP di bawah 50 memiliki redaman elektromagnetik rendah dan mekanikal lentur, sangat cocok untuk boks tertutup (Sealed Enclosure). Rentang EBP 50 hingga 90 ideal untuk boks Bass-Reflex berventilasi konvensional. Sedangkan driver dengan EBP di atas 90 hingga 120 (seperti P.Audio SD-18EL dan GST-181500 V3) memiliki motor magnet berkekuatan ekstrim (BL tinggi, Qes rendah), yang merupakan syarat mutlak untuk boks tipe Horn-Loaded seperti Scooper, CBS Trilogi, Miniscoop, maupun Planar Horn.',
      'Selain EBP, perhatikan pula nilai Xmax (Peak Linear Excursion). Untuk nada sub-bass rendah 30–45 Hz tanpa suara keprekan atau distorsi harmonik, pilihlah transduser dengan Xmax minimal 10 mm hingga 15 mm.'
    ],
    keyTakeaways: [
      'Rumus EBP = Fs / Qes adalah penentu utama apakah driver cocok untuk Bass-Reflex atau Horn-Loaded.',
      'Nilai EBP di atas 95 menjamin kontrol konus ketat saat bekerja di dalam ruang kompresi boks horn bertemperatur tinggi.',
      'Panjang ayunan linear (Xmax) di atas 10 mm menjamin frekuensi sub 35 Hz bebas distorsi mekanikal.',
      'P.Audio SD-18EL dan GST-181500 V3 memiliki EBP terkalibrasi Klippel Jerman untuk kebutuhan SPL lapangan konser.'
    ],
    sections: [
      {
        heading: '1. Mengapa Parameter EBP Sangat Menentukan Jenis Boks?',
        body: [
          'EBP mengukur perbandingan antara frekuensi resonansi bebas (Fs) konus dengan faktor redaman elektrik (Qes). Motor magnet yang sangat kuat menghasilkan nilai Qes yang rendah, sehingga nilai EBP otomatis melonjak tinggi.',
          'Pada boks bertipe corong (Horn-Loaded), udara di dalam ruang kompresi memberikan beban akustik (acoustic impedance) yang sangat berat ke bagian depan konus. Jika motor magnet speaker lemah (EBP < 80), konus tidak akan sanggup mendorong massa udara tersebut secara lincah, mengakibatkan suara bass terdengar loyo dan kumparan cepat panas.'
        ],
        callout: {
          type: 'formula',
          title: 'Formula Penentuan Boks',
          text: 'EBP = Fs / Qes. \n• EBP < 50: Sealed Box (Akustik Tertutup)\n• EBP 50 - 90: Vented Bass Reflex\n• EBP > 95: Horn Loaded, Bandpass, & High Pressure Reflex'
        }
      },
      {
        heading: '2. Pentingnya Linearitas Xmax vs Xmech',
        body: [
          'Banyak pemula salah mengartikan Xmax dengan jarak tempuh fisik maksimum (Xmech). Xmax adalah jarak pergerakan konus ke satu arah di mana kumparan suara masih berada dalam medan magnetik linier (fluks B konstan).',
          'Begitu kumparan bergerak melampaui Xmax, distorsi harmonik (THD) melonjak drastis dan efisiensi turun drastis. P.Audio mendesain motor magnetik SD-18EL dengan celah udara dalam (deep gap) dan Xmax 14.5 mm, sehingga nada dentuman kick drum dan bass synth tetap bersih walau digeber pada level konser.'
        ]
      },
      {
        heading: '3. Rekomendasi Penerapan Lapangan di Indonesia',
        body: [
          'Untuk kebutuhan hajatan outdoor, dangdut live, dan festival EDM di tanah lapang, kombinasi boks Planar atau CBS dengan driver P.Audio SD-18EL mampu memproyeksikan nada 40 Hz hingga 100 meter tanpa kehilangan pukulan dada (chest slam).',
          'Pastikan Anda menggunakan multipleks meranti berkualitas tebal minimal 18 mm serta sekrup dan lem kayu epoxy agar kabinet tidak bergetar dan membocorkan tekanan akustik.'
        ],
        callout: {
          type: 'tip',
          title: 'Pro-Tip Sound Engineer',
          text: 'Gunakan high pass filter (HPF) 24 dB/oct Linkwitz-Riley di DSP manajemen speaker Anda sekitar 3–5 Hz di bawah frekuensi tuning boks untuk melindungi driver dari ekskursi sub-sonik liar.'
        }
      }
    ],
    relatedDriverIds: ['sd-18el', 'gst-181500-v3', 'sd-21el']
  },
  {
    id: 'memahami-aes-vs-program',
    slug: 'memahami-aes-vs-program-power-limiter-dsp',
    tag: 'DAYA & LIMITER',
    category: 'Manajemen Daya & DSP',
    title: 'Memahami AES Power vs Program Power: Rahasia Mencegah Spool Terbakar',
    summary: 'Kupas tuntas perbedaan spesifikasi AES, Program (RMS), dan Peak Power pada lembar teknis, serta cara setting RMS Limiter pada crossover digital.',
    readTime: '7 menit baca',
    datePublished: '2025-02-18',
    dateModified: '2025-03-01',
    author: {
      name: 'Rudi Hermawan',
      role: 'DSP & System Alignment Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80',
    imageCaption: 'Pengaturan limiter dan gain structure pada digital speaker processor konsol FOH.',
    seo: {
      metaTitle: 'Panduan Menghitung AES Power vs Program Power Speaker | P.Audio ID',
      metaDescription: 'Cegah voice coil speaker terbakar dengan memahami rating AES2-1984, Program Power, dan formula kalkulasi threshold voltage limiter DSP.',
      keywords: [
        'aes power vs program power',
        'spool speaker terbakar',
        'setting limiter dsp',
        'power handling speaker',
        'paudio watt'
      ],
    },
    content: [
      'Keluhan voice coil terbakar atau spool lepas lilitan sering kali dialamatkan pada kualitas speaker yang dituduh jelek. Padahal, dalam 90% kasus uji forensik lab P.Audio, kerusakan disebabkan oleh ketidaksesuaian pengaturan daya amplifier dan ketiadaan limiter DSP yang tepat.',
      'Sering timbul keraguan ketika membaca spesifikasi teknis P.Audio: Mengapa ada angka "1800 Watt Continuous AES" dan "3600 Watt Continuous Program"? Mana yang harus dijadikan acuan saat memilih power amplifier?',
      'Standar AES2-1984 adalah prosedur pengujian laboratorium paling ketat di industri pro audio internasional. Speaker diuji menggunakan sinyal pink noise terfilter selama 2 jam penuh dengan rasio crest factor 6 dB (puncak 4x rata-rata). Ini mengukur ketahanan pembuangan panas kumparan saat bekerja tanpa jeda.',
      'Program Power umumnya dihitung 2x dari daya AES. Karena sinyal musik nyata memiliki dinamika alami (naik turun ketukan ritmis, bukan derau konstan tanpa jeda), kumparan memiliki waktu sepersekian detik untuk melepaskan panas di antara hentakan musik.',
      'Oleh sebab itu, aturan emas para sound engineer profesional adalah: Pilihlah amplifier dengan daya output 1.5x hingga 2x nilai Continuous AES speaker, kemudian pasang limiter proteksi tegangan (voltage limiter) pada prosesor crossover digital.'
    ],
    keyTakeaways: [
      'Daya AES adalah daya continuous panas selama 2 jam non-stop.',
      'Program Power (2x AES) merupakan acuan kapasitas amplifier yang ideal untuk sinyal musik dinamis.',
      'Clipping amplifier adalah pembunuh utama spool karena menghasilkan energi gelombang DC murni.',
      'Kalkulasi threshold limiter DSP dengan rumus: Vrms = sqrt(Power AES * Impedansi).'
    ],
    sections: [
      {
        heading: '1. Mengapa Amplifier Kecil Lebih Berbahaya daripada Amplifier Besar?',
        body: [
          'Banyak yang mengira menggunakan amplifier berdaya kecil (misal 800W untuk speaker 1500W) lebih aman. Ini adalah mitos paling berbahaya di dunia audio!',
          'Saat amplifier berdaya kecil dipaksa mengeluarkan volume panggung yang keras, sinyal output akan mengalami pemotongan gelombang (clipping). Sinyal terpotong ini berubah menjadi gelombang kotak (square wave) yang menyalurkan arus DC terus menerus ke celah magnet.',
          'Akibatnya, konus speaker berhenti bergerak naik-turun secara efisien sehingga sirkulasi udara pendingin terhenti, dan dalam hitungan menit kawat tembaga voice coil akan gosong meleleh.'
        ],
        callout: {
          type: 'warning',
          title: 'Bahaya Clipping',
          text: 'Distorsi klip menghasilkan harmonik frekuensi tinggi yang merusak diafragma tweeter compression driver dalam hitungan detik!'
        }
      },
      {
        heading: '2. Cara Menghitung Threshold Limiter pada DSP',
        body: [
          'Untuk melindungi transduser tanpa mengurangi punch musik, Anda harus mengeset RMS Voltage Limiter di DSP.',
          'Langkah 1: Hitung tegangan batas Vrms = √(Daya AES × Impedansi Nominal). Contoh untuk SD-18EL (1800W @ 8Ω): Vrms = √(1800 × 8) = √14400 = 120 Volt RMS.',
          'Langkah 2: Konversikan 120V ke skala dBu input prosesor sesuai sensitivitas gain amplifier Anda (umumnya 32 dB atau 26 dB).'
        ]
      }
    ],
    relatedDriverIds: ['sd-18el', 'gst-181500-v3', 'bm-d750-ii']
  },
  {
    id: 'ferrite-vs-neodymium',
    slug: 'ferrite-vs-neodymium-transduser-speaker',
    tag: 'MATERIAL MAGNET',
    category: 'Material & Konstruksi',
    title: 'Ferrite vs Neodymium: Perbandingan Karakteristik, Bobot, dan Disipasi Suhu',
    summary: 'Analisis mendalam perbedaan fluks magnetik Barium Ferrite dan Neodymium NdFeB untuk line array gantung vs subwoofer panggung.',
    readTime: '5 menit baca',
    datePublished: '2025-02-22',
    dateModified: '2025-02-28',
    author: {
      name: 'Bambang Sudibyo, M.T.',
      role: 'Transducer Materials Researcher',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80',
    imageCaption: 'Susunan rigging speaker line array berbahan magnet Neodymium pada festival outdoor.',
    seo: {
      metaTitle: 'Speaker Ferrite vs Neodymium: Mana Lebih Bagus untuk Sound System? | P.Audio ID',
      metaDescription: 'Bandingkan keunggulan speaker magnet Ferrite vs Neodymium: perbedaan bobot, toleransi suhu Curie, sensitivitas SPL, dan harga komponen.',
      keywords: [
        'speaker neodymium vs ferrite',
        'magnet speaker terbaik',
        'speaker ringan line array',
        'paudio wn 15r neodymium',
        'karakter magnet neodymium'
      ],
    },
    content: [
      'Dalam industri pembuatan komponen loudspeaker modern, pemilihan tipe magnet motor adalah kompromi mendasar antara bobot fisik, kekuatan fluks magnet, stabilitas termal, dan biaya investasi.',
      'Dua kubu material yang paling mendominasi panggung dunia adalah Barium/Strontium Ferrite dan Neodymium-Iron-Boron (NdFeB).',
      'Magnet Neodymium termasuk kelompok logam tanah jarang (rare earth) yang mampu menghasilkan kerapatan fluks magnetik hingga 10 kali lebih pekat per satuan volume dibanding magnet keramik ferit konvensional.',
      'Karena ukurannya yang kompak, transduser Neodymium seperti P.Audio WN-15R memangkas bobot total driver hingga 45%–60%. Jika sebuah boks line array 2-way gantung memakai 2 driver 15 inci dan 2 driver tweeter, penggunaan Neodymium bisa menghemat beban rigging ratusan kilogram di atas tiang panggung truss!',
      'Namun di sisi lain, Ferrite memiliki keunggulan termal tak tertandingi: suhu demagnetisasi (Curie Temperature) magnet ferit mencapai di atas 450°C, sementara Neodymium standar mulai kehilangan medan magnet di kisaran 120°C–150°C kecuali dirancang dengan grade khusus seperti N45SH berbiaya tinggi.'
    ],
    keyTakeaways: [
      'Neodymium sangat ideal untuk Line Array gantung dan monitor panggung demi efisiensi bobot dan SPL tinggi.',
      'Ferrite tetap menjadi raja untuk Subwoofer tanah bertenaga monster karena ketahanan suhu operasional tanpa batas.',
      'P.Audio WN-15R Neodymium membuktikan efisiensi 99 dB dengan bobot hanya 6.8 kg.',
      'Pilihlah material sesuai fungsi posisi kabinet dalam sistem tata suara Anda.'
    ],
    sections: [
      {
        heading: '1. Perbandingan Bobot pada Rigging Line Array',
        body: [
          'Dalam regulasi keselamatan panggung konser (safety rigging standards), batas beban maksimum chain hoist dan tiang truss sangat ketat. Menggunakan 8 hingga 12 modul line array per sisi dengan driver ferit berat sering kali melebihi kapasitas aman struktur panggung.',
          'Driver Neodymium P.Audio WN-Series dan BM-D750 II memangkas puluhan kilogram per boks, memungkinkan tim rental menggantung lebih banyak modul untuk menjangkau penonton jarak jauh secara aman.'
        ]
      },
      {
        heading: '2. Kapan Harus Memilih Ferrite untuk Subwoofer?',
        body: [
          'Subwoofer tanah (ground stack) beroperasi di frekuensi 30–80 Hz di mana kumparan menyerap energi listrik kontinu ratusan volt. Suhu di celah magnet bisa bertahan di angka 180°C selama konser 4 jam.',
          'Pada kondisi seperti ini, struktur magnet Ferrite tebal seperti pada P.Audio SD-18EL dan SD-21EL bertindak sebagai heatsink raksasa yang menyerap dan membuang panas ke udara luar secara stabil tanpa takut resiko de-magnetisasi.'
        ],
        callout: {
          type: 'tip',
          title: 'Rekomendasi Kombinasi Ideal',
          text: 'Gunakan driver Neodymium untuk modul Mid-High gantung (Fly Array) dan gunakan driver Ferrite bertorsi besar untuk Subwoofer bawah tanah.'
        }
      }
    ],
    relatedDriverIds: ['wn-15r', 'sd-18el', 'bm-d750-ii']
  },
  {
    id: 'panduan-desain-boks-cbs-vs-planar',
    slug: 'panduan-desain-boks-subwoofer-cbs-vs-planar',
    tag: 'DESAIN BOKS',
    category: 'Parameter T/S & Desain Boks',
    title: 'Panduan Desain Boks Subwoofer Lapangan: Karakter CBS Trilogi vs Planar Horn',
    summary: 'Bedah akustik dua boks favorit sound hajatan dan festival di Jawa: perbedaan jarak lemparan frekuensi, volume chamber, dan pemilihan driver yang pas.',
    readTime: '6 menit baca',
    datePublished: '2025-02-25',
    dateModified: '2025-03-02',
    author: {
      name: 'Ir. Hendra Wijaya',
      role: 'Senior Acoustic Engineer P.Audio ID',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1400&q=80',
    imageCaption: 'Uji dengar komparasi boks subwoofer horn lapangan pada arena terbuka.',
    seo: {
      metaTitle: 'Boks Subwoofer CBS vs Planar: Perbandingan Karakter Suara & Driver | P.Audio ID',
      metaDescription: 'Pahami perbedaan karakter suara boks CBS Trilogi vs Planar Horn 18 inci: jarak lemparan, efisiensi SPL, respon nada rendah, dan rekomendasi driver P.Audio.',
      keywords: [
        'boks cbs vs planar',
        'skema boks cbs 18 inch',
        'boks planar horn paudio',
        'subwoofer lemparan jauh',
        'speaker untuk boks cbs'
      ],
    },
    content: [
      'Di kancah audio panggung Indonesia, khususnya komunitas rental audio Jawa Timur, Jawa Tengah, dan Jawa Barat, dua desain boks subwoofer 18 inci sangat populer: Boks Planar Horn dan CBS (Continuous Bass System).',
      'Masing-masing desain memiliki prinsip akustik unik yang memerlukan pemilihan karakter driver transduser yang berbeda agar tidak menghasilkan suara dengung tanpa hentakan.',
      'Boks Planar mengandalkan ruang kompresi depan berbentuk corong trapesium (short front-horn) dengan port ventilasi di keempat sudutnya. Desain ini menghasilkan respon transient yang sangat cepat, pukulan bass dada (chest kick) di frekuensi 60–80 Hz yang tegas, dan lemparan suara yang sangat terfokus lurus ke depan.',
      'Sebaliknya, boks CBS mengadopsi prinsip labirin akustik bertingkat (multi-chamber acoustic acoustic waveguide) yang memperpanjang jalur gelombang suara sebelum dilepas ke udara bebas. Hasilnya adalah nada bass yang lebih gemuk, menyebar luas (wide dispersion), dan mampu menyentuh frekuensi rendah 35–45 Hz dengan sangat empuk.',
      'Untuk memaksimalkan kedua jenis boks ini, driver harus memiliki rangka aluminium cor yang kaku dan daun speaker berlapis resin anti-air seperti P.Audio SD-18EL agar konus tidak sobek dihantam tekanan internal boks.'
    ],
    keyTakeaways: [
      'Boks Planar unggul di pukulan punch dada 60–80 Hz dengan lemparan suara sangat jauh.',
      'Boks CBS memberikan resonansi sub-low 35–50 Hz yang lebih tebal dan merata ke area sekitar panggung.',
      'Kedua boks membutuhkan driver dengan EBP > 95 dan rangka die-cast tebal anti getar.',
      'P.Audio GST-181500 V3 dan SD-18EL adalah pasangan paling teruji untuk kedua geometri ini.'
    ],
    sections: [
      {
        heading: '1. Pemilihan Driver untuk Boks Planar',
        body: [
          'Pada boks Planar, corong depan membatasi ekspansi udara mendadak. Driver dengan kumparan 4 inci hingga 4.5 inci bertorsi tinggi (seperti GST-181500 V3) memberikan akselerasi konus seketika.',
          'Hasilnya, setiap hentakan kick drum terasa padat, bertenaga, dan tidak pecah walau ditonton dari jarak puluhan meter di lapangan terbuka.'
        ]
      },
      {
        heading: '2. Cara Menghindari Pembatalan Fasa pada Penataan Subwoofer',
        body: [
          'Saat mencampur boks Planar dan CBS dalam satu panggung, perhatikan waktu tunda fasa (phase delay). Karena panjang jalur akustik CBS lebih panjang dari Planar, sinyal suara dari CBS akan tiba terlambat beberapa milidetik.',
          'Gunakan mikrofon pengukur RTA (seperti SmaartLive) dan sesuaikan delay alignment pada prosesor DSP agar kedua gelombang bass saling menjumlahkan secara konstruktif dan tidak saling meniadakan.'
        ]
      }
    ],
    relatedDriverIds: ['gst-181500-v3', 'sd-18el', 'sd-21el']
  },
  {
    id: 'mencegah-kerusakan-tweeter-compression-driver',
    slug: 'mencegah-kerusakan-tweeter-compression-driver',
    tag: 'CROSSOVER & HF',
    category: 'Manajemen Daya & DSP',
    title: '5 Faktor Utama Penyebab Diafragma Tweeter Jebol dan Cara Memilih Horn Waveguide',
    summary: 'Tips praktis melindungi driver tweter 1" dan 2" exit P.Audio BM-Series dari feedback mic, over-excursion, dan distorsi harmonik tinggi.',
    readTime: '5 menit baca',
    datePublished: '2025-02-28',
    dateModified: '2025-03-03',
    author: {
      name: 'Rudi Hermawan',
      role: 'DSP & System Alignment Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=80',
    imageCaption: 'Pengujian diafragma titanium compression driver pada horn flare constant directivity.',
    seo: {
      metaTitle: 'Penyebab Tweeter Speaker Jebol & Cara Memilih Horn Waveguide | P.Audio ID',
      metaDescription: 'Pelajari penyebab utama diafragma tweeter compression driver putus dan cara setting titik potong frekuensi crossover HPF yang tepat pada P.Audio BM-D750.',
      keywords: [
        'tweeter speaker putus',
        'compression driver paudio',
        'bm d750 ii diafragma',
        'setting crossover tweeter',
        'waveguide horn speaker'
      ],
    },
    content: [
      'Driver kompresi frekuensi tinggi (HF Compression Driver) seperti seri legendaris P.Audio BM-D750 II dan BM-D450S adalah jantung kejernihan vokal dan artikulasi simbal panggung.',
      'Namun, diafragma titanium yang sangat tipis (sekitar 0.05 mm) menjadikannya komponen yang paling rentan rusak bila sistem tidak dilindungi dengan benar.',
      'Penyebab kerusakan pertama dan paling sering adalah menetapkan titik potong frekuensi (Crossover HPF) terlalu rendah. Banyak soundman memotong driver tweeter 2 inci di frekuensi 800 Hz dengan kemiringan filter landai (6 dB atau 12 dB/oct). Di bawah titik cutoff akustik corong horn, diafragma akan bergetar melampaui batas ekskursinya dan menabrak phase plug hingga pecah.',
      'Penyebab kedua adalah feedback mikrofon berkepanjangan (melolong nyaring di 4 kHz–8 kHz). Arus listrik dari feedback tersebut memanaskan kawat pita aluminium voice coil dalam waktu kurang dari 3 detik hingga putus terbakar.',
      'Dengan menerapkan kemiringan filter minimal 18 dB atau 24 dB/oktaf pada frekuensi rekomendasi pabrikan (1.2 kHz–1.5 kHz untuk BM-D750 II), usia pakai diafragma P.Audio dapat bertahan bertahun-tahun dalam kondisi kerja touring intensif.'
    ],
    keyTakeaways: [
      'Jangan pernah memotong crossover HF di bawah frekuensi batas cutoff horn flare yang digunakan.',
      'Gunakan slope kemiringan filter minimal 18 dB/oct atau 24 dB/oct Linkwitz-Riley di DSP.',
      'Pasang feedback suppressor atau kurangi gain mic vokal sebelum menaikkan master volume.',
      'Gunakan horn Constant Directivity aluminium untuk membantu membuang panas motor HF.'
    ],
    sections: [
      {
        heading: '1. Pemilihan Sudut Dispersi Corong (Horn Flare)',
        body: [
          'Corong horn bukan sekadar corong pembesar suara; ia adalah transformator impedansi akustik yang memuat diafragma driver.',
          'Pilihlah corong dengan sudut dispersi terukur seperti 60°x40° untuk panggung lemparan jauh atau 90°x40° untuk cakupan panggung lebar. Horn dengan throat 2 inci cor aluminium juga membantu menyerap panas dari sasis magnet driver kompresi.'
        ]
      },
      {
        heading: '2. Cara Mudah Mengganti Diafragma Orisinal',
        body: [
          'Jika diafragma rusak, pastikan Anda menggunakan Recone Kit Diafragma Orisinal P.Audio dengan dome titanium murni dan kawat edgewound aluminium ribbon.',
          'Bersihkan celah magnetik dari serpihan debu atau sisa kawat terbakar menggunakan selotip dua sisi sebelum memasang diafragma baru agar pergerakan spool tetap bebas gesekan.'
        ]
      }
    ],
    relatedDriverIds: ['bm-d750-ii', 'bm-d450s', 'wn-15r']
  }
];

