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
      { name: "APPRAISAL & SCORING OF RIN, EXP.FAMILY CARE.ppt", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/APPRAISAL%20&%20SCORING%20OF%20RIN,%20EXP.FAMILY%20CARE.ppt" },
      { name: "CAOSCE EXPECTATIONS FROM EXAMINERS AND STUDENTS.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/CAOSCE%20EXPECTATIONS%20FROM%20EXAMINERS%20AND%20STUDENTS.pptx" },
      { name: "CLINICAL PLACEMENT, NURSING DIAGNOSES.ppt", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/CLINICAL%20PLACEMENT,%20NURSING%20DIAGNOSES.ppt" },
      { name: "DIGITAL ASSESSEMENT & EVALUATION IN MODERN EDUCATIONAL KANO.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/DIGITAL%20ASSESSEMENT%20&%20EVALUATION%20IN%20MODERN%20EDUCATIONAL%20KANO.pptx" },
      { name: "E-POSTING APPLICATION DEMONSTRATION.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/E-POSTING%20APPLICATION%20DEMONSTRATION.pptx" },
      { name: "EXAMINATION MALPRACTICE.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/EXAMINATION%20MALPRACTICE.pptx" },
      { name: "KEYNOTE ADDRESS.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/KEYNOTE%20ADDRESS.pptx" },
      { name: "Mentorship and Preceptorship Model.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/Mentorship%20and%20Preceptorship%20Model.pptx" },
      { name: "OBJECTIVITY IN CAOSCE ASSESSMENT OF STUDENTS.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/OBJECTIVITY%20IN%20CAOSCE%20ASSESSMENT%20OF%20STUDENTS.pptx" },
      { name: "REQUIREMENT FOR CBT AND CAOSCE CENTRES.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/REQUIREMENT%20FOR%20CBT%20AND%20CAOSCE%20CENTRES.pptx" },
      { name: "RULES AND REG GUIDING COUNCIL EXAMINATION.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/RULES%20AND%20REG%20GUIDING%20COUNCIL%20EXAMINATION.pptx" },
      { name: "Test Item Construction and Assessment Methods.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/KANO%20CENTER%20-%20PAPER%20PRESENTATIONS%20(TECH)/Test%20Item%20Construction%20and%20Assessment%20Methods.pptx" },
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
