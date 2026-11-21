/* ══════════════════════════════════════════════════════════════════
   MIKE — SITE CONTENT
   Every word on the site lives in this file. Edit the text between the
   quotes, save, and the site updates. Rules of thumb:
   · Keep the quote marks ' ' around each piece of text.
   · If your text needs an apostrophe, use the curly one ’ (copy it from here),
     or put a backslash before a straight one:  'it\'s'
   · Keep the commas at the end of lines.
   · Leave a field as '' (empty) and the site shows "notes pending".
   ══════════════════════════════════════════════════════════════════ */

window.CONTENT = {

  /* ── HOME ─────────────────────────────────────────────── */
  name: 'Mike',
  role: 'art direction',
  adsPaneNote: 'selected campaigns',
  aboutPaneNote: 'the hand behind it',
  plateTitle: 'Plate I — a study in intent',
  mirrorLine: 'il disegno è intento',          // shown mirror-written, top right

  /* Lettered landmarks on the photo (a, b, c) */
  landmarks: { a: 'the city', b: 'the rock', c: 'the ridge' },

  /* ── ADS PAGE ─────────────────────────────────────────── */
  adsTitle: 'Ads',
  adsIntro: 'Six campaigns. Each one reads in four parts: the insight, the problem, the idea, and how it got made.',

  /* ── CAMPAIGNS ────────────────────────────────────────────
     slug   = the web address (#casio). Lowercase, no spaces.
     The first sentence of each part becomes the big statement;
     anything after it becomes the small note beside it.
     draft  = list the parts Claude drafted from your notes;
              they show a small "draft" tag until you delete them from the list. */
  campaigns: [
    {
      slug: 'delta', name: 'Delta', client: 'Delta Air Lines', format: 'photography campaign',
      insight: '',
      problem: '',
      idea: '',
      bts: '',
    },
    {
      slug: 'sour-patch', name: 'Sour Patch', client: 'Sour Patch Kids', format: 'campaign',
      insight: '',
      problem: '',
      idea: '',
      bts: '',
    },
    {
      slug: 'ocd', name: 'OCD', client: '—', format: 'campaign',
      insight: '',
      problem: '',
      idea: '',
      bts: '',
    },
    {
      slug: 'airpods', name: 'AirPods', client: 'Apple', format: 'pitch — “Collaborhythm”',
      insight: '',
      problem: '',
      idea: 'Collaborhythm: an AirPods idea built on nostalgia and a remix of Apple’s own sounds.',
      bts: 'Pitched to Apple in October 2026. I built two decks; Apple’s feedback pulled toward nostalgia and the sound remix, and that became Deck 2.',
    },
    {
      slug: 'casio', name: 'Casio', client: 'Casio Watches', format: 'tv spot · spec',
      insight: 'Everyone else’s milestones turn into a clock you feel you’re losing to.',
      problem: 'At a wedding, the single bridesmaid feels behind. She’s measuring her life against a timeline that isn’t hers.',
      idea: 'Vows, a kiss, the room cheers, and the camera drifts past the bridal party to one bridesmaid lost in thought. Black screen: “Your time. Not theirs.”',
      bts: 'Shot in Holladay, Utah in about three hours one morning, with little to no dialogue. Cast through BYU’s actor database. The goal on set was less stress than the last shoot, with the same attention.',
      draft: ['insight'],
    },
    {
      slug: 'black-forest', name: 'Black Forest', client: 'Black Forest Organic', format: 'student film',
      insight: 'Red 40 isn’t added once. It’s added to kids over and over by a system parents trust.',
      problem: 'Artificial dye is so common it has become invisible, side effects included.',
      idea: 'Kids ride a red factory belt through four stations: Top Off, Inject, Feed, Top Off. Parents appear only as gloved hands working the line. A tree cracks up through the concrete: “Black Forest Organic: a red for you.”',
      bts: 'An all-student crew on a grant of roughly $1,000 to $2,000. Piping and props were built arts-and-crafts style and sold with camera work, on one borrowed location for one day.',
      draft: ['insight', 'problem'],
    },
  ],

  /* ── ABOUT ME ─────────────────────────────────────────── */
  aboutTitle: 'About me',
  aboutStatement: 'An art director in BYU’s AdLab, finishing my last semester in Provo, Utah.',
  facts: [
    ['role', 'art director'],
    ['studio', 'BYU AdLab'],
    ['based', 'Provo, Utah'],
    ['places', '20 · 4 continents'],
  ],
  mapTitle: 'A constellation of places',

  /* Places: name, short code, latitude, longitude, story.
     Write each story in the last quotes. Empty = "story — not written yet". */
  places: [
    ['Canada', 'CA', 56.1, -106.3, ''],
    ['The Bahamas — Nassau', 'BS', 25.05, -77.35, ''],
    ['Dominican Republic', 'DO', 18.7, -70.2, ''],
    ['Ireland', 'IE', 53.35, -6.26, ''],
    ['Northern Ireland', 'NIR', 54.6, -5.93, ''],
    ['Scotland', 'SCT', 55.95, -3.19, ''],
    ['Wales', 'WLS', 51.48, -3.18, ''],
    ['England', 'ENG', 51.5, -0.13, ''],
    ['France', 'FR', 48.86, 2.35, ''],
    ['Spain', 'ES', 40.4, -3.7, ''],
    ['Monaco', 'MC', 43.74, 7.42, ''],
    ['Switzerland', 'CH', 47.37, 8.54, ''],
    ['Italy', 'IT', 41.9, 12.5, ''],
    ['Germany', 'DE', 52.52, 13.4, ''],
    ['Israel', 'IL', 31.77, 35.21, ''],
    ['Jordan', 'JO', 29.9, 36.2, ''],
    ['South Africa', 'ZA', -33.9, 18.4, ''],
    ['Mozambique', 'MZ', -25.9, 32.6, ''],
    ['Malaysia', 'MY', 3.1, 101.7, ''],
    ['Hong Kong', 'HK', 22.3, 114.2, ''],
  ],
};
