import { client } from './client'

const opts = { next: { revalidate: 60 } }

// ─── STARTSEITE ───────────────────────────────────────────────
export async function getStartseite() {
  try {
    return await client.fetch(`*[_type == "startseite" && _id == "startseite"][0]`, {}, opts)
  } catch {
    return null
  }
}

// ─── EINSTELLUNGEN ────────────────────────────────────────────
export async function getEinstellungen() {
  try {
    return await client.fetch(
      `*[_type == "einstellungen" && _id == "einstellungen"][0] {
        name, berufsbezeichnung,
        telefon, email, region,
        instagram, facebook, linkedin,
        seoTitel, seoBeschreibung,
        footerBeschreibung,
        "heroBildUrl": heroBild.asset->url,
        "heroBildAlt": heroBild.alt,
        "portraitBildUrl": portraitBild.asset->url,
        "portraitBildAlt": portraitBild.alt,
        "ueberMichBild1Url": ueberMichBild1.asset->url,
        "ueberMichBild1Alt": ueberMichBild1.alt,
        "ueberMichBild2Url": ueberMichBild2.asset->url,
        "ueberMichBild2Alt": ueberMichBild2.alt
      }`,
      {},
      opts
    )
  } catch {
    return null
  }
}

// ─── LEISTUNGEN ───────────────────────────────────────────────
export async function getLeistungen() {
  try {
    return await client.fetch(
      `*[_type == "leistung"] | order(reihenfolge asc) { _id, titel, beschreibung }`,
      {},
      opts
    )
  } catch {
    return []
  }
}

// ─── EVENTS ───────────────────────────────────────────────────
export async function getEvents() {
  try {
    return await client.fetch(
      `*[_type == "event"] | order(reihenfolge asc) {
        _id, name, beschreibung, kategorie,
        "bildUrl": bild.asset->url, reihenfolge
      }`,
      {},
      opts
    )
  } catch {
    return []
  }
}

// ─── REFERENZEN ───────────────────────────────────────────────
export async function getReferenzen() {
  try {
    return await client.fetch(
      `*[_type == "referenz"] | order(reihenfolge asc) {
        _id, typ, name, rolle, zitat, istInstagram, vimeoId
      }`,
      {},
      opts
    )
  } catch {
    return []
  }
}

// ─── FAQ ──────────────────────────────────────────────────────
export async function getFaq() {
  try {
    return await client.fetch(
      `*[_type == "faqItem"] | order(reihenfolge asc) { _id, frage, antwort }`,
      {},
      opts
    )
  } catch {
    return []
  }
}

// ─── IMPRESSUM ────────────────────────────────────────────────
export async function getImpressum() {
  try {
    return await client.fetch(`*[_type == "impressum" && _id == "impressum"][0]`, {}, opts)
  } catch {
    return null
  }
}

// ─── DATENSCHUTZ ──────────────────────────────────────────────
export async function getDatenschutz() {
  try {
    return await client.fetch(`*[_type == "datenschutz" && _id == "datenschutz"][0]`, {}, opts)
  } catch {
    return null
  }
}
