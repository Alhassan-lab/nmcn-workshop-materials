export type Material = {
  name: string;
  type: 'pdf' | 'ppt' | 'doc';
  url: string;
};

export type Zone = {
  name: string;
  slug: string;
  materials: Material[];
};

export const zones: Zone[] = [
  {
    name: "KANO",
    slug: "kano",
    materials: [
      { name: "Workshop Agenda.pdf", type: "pdf", url: "#" },
      { name: "Opening Presentation.ppt", type: "ppt", url: "#" },
      { name: "Participant Guide.doc", type: "doc", url: "#" },
      { name: "Case Studies.pdf", type: "pdf", url: "#" },
    ],
  },
  {
    name: "CROSS RIVER",
    slug: "cross-river",
    materials: [
      { name: "Day 1 Slides.ppt", type: "ppt", url: "#" },
      { name: "Group Work Instructions.doc", type: "doc", url: "#" },
      { name: "Resources List.pdf", type: "pdf", url: "#" },
    ],
  },
  {
    name: "PLATEAU",
    slug: "plateau",
    materials: [
      { name: "Main Session Deck.ppt", type: "ppt", url: "#" },
      { name: "Evaluation Form.doc", type: "doc", url: "#" },
      { name: "Further Reading.pdf", type: "pdf", url: "#" },
      { name: "Contact Sheet.pdf", type: "pdf", url: "#" },
    ],
  },
  {
    name: "GOMBE",
    slug: "gombe",
    materials: [
      { name: "Welcome Packet.pdf", type: "pdf", url: "#" },
      { name: "Session 1 Slides.ppt", type: "ppt", url: "#" },
      { name: "Session 2 Slides.ppt", type: "ppt", url: "#" },
    ],
  },
  {
    name: "EBONYI",
    slug: "ebonyi",
    materials: [
      { name: "Pre-reading Material.pdf", type: "pdf", url: "#" },
      { name: "Workshop Handbook.doc", type: "doc", url: "#" },
      { name: "Final Presentation.ppt", type: "ppt", url: "#" },
    ],
  },
  {
    name: "EKITI",
    slug: "ekiti",
    materials: [
      { name: "All Slides Combined.ppt", type: "ppt", url: "#" },
      { name: "Feedback Form.doc", type: "doc", url: "#" },
      { name: "Certificate Template.pdf", type: "pdf", url: "#" },
    ],
  },
];
