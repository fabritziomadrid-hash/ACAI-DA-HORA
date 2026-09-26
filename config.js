/*
 * Configurações públicas da loja para o GitHub Pages.
 * Nunca coloque aqui senhas, chaves secretas ou a chave service_role do Supabase.
 */
window.LOJA_CONFIG = Object.freeze({
  whatsapp: "5541987026386", // DDI + DDD + número, somente dígitos
  storeAddress: "Rua Mário Gasparin, 1042 - Sítio Cercado, Curitiba",
  storeMapUrl: "https://maps.app.goo.gl/JWHzdoPEsV7i5Xjd9",
  instagramUrl: "https://www.instagram.com/acaidah.ora/",
  businessTimeZone: "America/Sao_Paulo",
  businessHours: {
    domingo: [{ open: "15:00", close: "21:00" }],
    segunda: [],
    terca: [{ open: "16:00", close: "21:00" }],
    quarta: [{ open: "16:00", close: "21:00" }],
    quinta: [{ open: "15:00", close: "21:00" }],
    sexta: [],
    sabado: [{ open: "15:00", close: "21:00" }]
  },
  supabaseUrl: "https://hqecsfbtwuruirnlfabl.supabase.co",
  supabaseAnonKey: "sb_publishable_syLjj0RW8HHyhiOLkzWlnw_oZWWw9Xh", // Chave pública, nunca service_role
  databaseTable: "pedidos"
});
