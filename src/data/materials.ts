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
      { name: "Anyebe PPT Competence base Assesment for Effective Eduaction and Practive.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/Anyebe%20PPT%20Competence%20base%20Assesment%20for%20Effective%20Eduaction%20and%20Practive.pptx" },
      { name: "APPRAISAL AND SCORING OF RIN.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/APPRAISAL%20AND%20SCORING%20OF%20RIN.pptx" },
      { name: "CAOSCE EXPECTATIONS FROM EXAMINERS AND STUDENTS.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/CAOSCE%20EXPECTATIONS%20FROM%20EXAMINERS%20AND%20STUDENTS.pptx" },
      { name: "E-POSTING APPLICATION DEMONSTRATION.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/E-POSTING%20APPLICATION%20DEMONSTRATION.pptx" },
      { name: "EXAMINATION MALPRACTICE.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/EXAMINATION%20MALPRACTICE.pptx" },
      { name: "MENTORSHIP AND PRECEPTORSHIP.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/MENTORSHIP%20AND%20PRECEPTORSHIP.pptx" },
      { name: "Nursing & Midewifery Council of Nigeria (Artificial Intelligence).pdf", type: "pdf", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/Nursing%20&%20Midewifery%20Council%20of%20Nigeria%20(Artificial%20Intelligence).pdf" },
      { name: "OBJECTIVITY IN CAOSCE ASSESSMENT OF STUDENTS.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/OBJECTIVITY%20IN%20CAOSCE%20ASSESSMENT%20OF%20STUDENTS.pptx" },
      { name: "OVER VIEW OF THE MODULAR METHOD OF COUNCIL EXAMINERS WORKSHOP 2025 JOS CENTRE.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/OVER%20VIEW%20OF%20THE%20MODULAR%20METHOD%20OF%20COUNCIL%20EXAMINERS%20WORKSHOP%202025%20JOS%20CENTRE.pptx" },
      { name: "PPH with E-MOTIVE  Presentation BY NMCN July 2025.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/PPH%20with%20E-MOTIVE%20%20Presentation%20BY%20NMCN%20July%202025.pptx" },
      { name: "REQUIREMENT FOR CBT AND CAOSCE CENTRES.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/REQUIREMENT%20FOR%20CBT%20AND%20CAOSCE%20CENTRES.pptx" },
      { name: "RULES AND REG GUIDING COUNCIL EXAMINATION.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/RULES%20AND%20REG%20GUIDING%20COUNCIL%20EXAMINATION.pptx" },
      { name: "STRENGHTENING FORMATIVE AND SUMMATIVE.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/STRENGHTENING%20FORMATIVE%20AND%20SUMMATIVE.pptx" },
      { name: "TEST ITEM CONSTRUCTION AND ASSESSMENT JOS.pptx", type: "ppt", url: "https://vzeqdlvoucqumgpisctk.supabase.co/storage/v1/object/public/documents/PLATEAU/TEST%20ITEM%20CONSTRUCTION%20AND%20ASSESSMENT%20JOS.pptx" },
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
