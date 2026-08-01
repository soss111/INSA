/**
 * INSA kursuste materjalid — Google Drive lingid
 *
 * Kuidas asendada kohatäited:
 * 1. Jaga fail Google Drive'is (Igaüks, kellel on link → Vaataja).
 * 2. Kopeeri faili ID URL-ist:
 *    https://drive.google.com/file/d/FILE_ID/view?...  →  FILE_ID
 * 3. Asenda presentationId / workbookId väärtused allpool.
 *
 * Eelvaade:  https://drive.google.com/file/d/FILE_ID/preview
 * Allalaadimine: https://drive.google.com/uc?export=download&id=FILE_ID
 * Kaustavaade: https://drive.google.com/embeddedfolderview?id=FOLDER_ID#list
 */
window.INSA_DATA = {
  modules: [
    {
      id: "tark-toostus",
      title: "Tark tööstus",
      tagline: "Tootmine, mehhatroonika ja targa maja lahendused",
      courses: [
        {
          id: "inseneeria-ja-tootmine",
          title: "Inseneeria ja tootmine",
          description: "Sissejuhatus tootmisprotsessidesse ja insenerimõtlemisse.",
          presentationId: "1WLU3wkWx_yYyqAvSx2kW0N3Ae89OfLK0",
          workbookId: "1LZjklzoH0EtCcduhhYjgU3xN9pOjMyE1",
        },
        {
          id: "mehhatroonika-1",
          title: "Mehhatroonika 1",
          description: "Mehaanika, elektroonika ja juhtimise alused.",
          presentationId: "PLACEHOLDER_PRESENTATION_ID",
          workbookId: "PLACEHOLDER_WORKBOOK_ID",
        },
        {
          id: "targa-maja-lahendused",
          title: "Targa maja lihtsad lahendused",
          description: "Praktilised nutikodu ja automaatika ideed.",
          presentationId: "1hFvcx0PXsStk_uKYE_pPa8BN1_-7gd68",
          workbookId: "PLACEHOLDER_WORKBOOK_ID",
        },
      ],
    },
    {
      id: "cadrina-inseneeria",
      title: "CADrina inseneeria",
      tagline: "Disain, prototüüpimine ja mehhatroonika",
      courses: [
        {
          id: "cadrina-inseneeria-kursus",
          title: "CADrina inseneeria",
          description: "CAD-põhine inseneeria ja projekteerimine.",
          presentationId: "PLACEHOLDER_PRESENTATION_ID",
          workbookId: "PLACEHOLDER_WORKBOOK_ID",
        },
        {
          id: "kasutajakeskne-disain",
          title: "Kasutajakeskne disain ja prototüüpimine",
          description: "Kasutajast lähtuv disainiprotsess ja prototüüpide loomine.",
          presentationId: "PLACEHOLDER_PRESENTATION_ID",
          workbookId: "PLACEHOLDER_WORKBOOK_ID",
        },
        {
          id: "mehhatroonika-2",
          title: "Mehhatroonika 2",
          description: "Sügavam sukeldumine mehhatroonika süsteemidesse.",
          presentationId: "PLACEHOLDER_PRESENTATION_ID",
          workbookId: "PLACEHOLDER_WORKBOOK_ID",
        },
      ],
    },
    {
      id: "andmekogur-sateliit",
      title: "Andmekogur-satelliit",
      tagline: "STEM avastusretk satelliitprojektini",
      courses: [
        {
          id: "stem-avastusretk",
          title: "Põnev avastamisretk STEM maailma",
          description: "Sissejuhatus STEM-i ja Andmekogur-satelliidi maailma.",
          presentationId: "13YPIbg4kZM6Kq4TeA-yJlyo_FEOBTfxk",
          workbookId: "1i2ypjjCyUOqGrKRfPqnbAc7955JIX6NE",
        },
        {
          id: "andmekogur-sateliit-mehhatroonika",
          title: "Andmekogur-satelliit mehhatroonika",
          description: "Satelliidi mehhatroonika, andurid ja juhtimine.",
          presentationId: "PLACEHOLDER_PRESENTATION_ID",
          workbookId: "PLACEHOLDER_WORKBOOK_ID",
        },
        {
          id: "andmekogur-sateliit-voistlus",
          title: "Andmekogur-satelliit võistlus",
          description: "Võistluseks valmistumine ja projektitöö.",
          presentationId: "PLACEHOLDER_PRESENTATION_ID",
          workbookId: "PLACEHOLDER_WORKBOOK_ID",
        },
      ],
    },
  ],
  team: [
    // portfolioUrl: lisa õpetajaportfoolio URL; tühi string peidab lingi
    {
      name: "Lauri Soosaar",
      role: "Inseneeriaõpetaja",
      portfolioUrl: "https://laurisoosaar.wixsite.com/mysite",
      bio: "Tootearendusinsener ja STEM-õpetaja, kellel on kogemus nii tööstusettevõtetes kui koolides. Koos Liis Proosiga on ta üle kümne aasta vedanud algatust Merkuur Mobiilsed töötoad — liikuvad tehnoloogia- ja STEM-õppeklassid, mis tulevad ise noorte juurde, et koos luua põnevaid tooteid.",
    },
    {
      name: "Rasmus Kits",
      role: "Inseneeriaõpetaja",
      portfolioUrl: "",
      bio: "Pikaajaline robootika- ja informaatikaõpetaja. Ta on korduvalt olnud võistluse Robotex peakohtunik ning panustanud aktiivselt digi- ja tehnoloogiaõppe arendamisse.",
    },
    {
      name: "Liis Proos",
      role: "Karjäärispetsialist",
      portfolioUrl: "",
      bio: "Koos Lauri Soosaarega on ta üle kümne aasta arendanud Merkuur Mobiilseid töötubasid. Lisaks on Liis end tugevalt koolitanud karjäärinõustajana — seega oskab ta anda noortele selgeid soovitusi inseneeria tulevikuvalikute kohta.",
    },
    {
      name: "Holger Bremen",
      role: "Inseneeriaõpetaja",
      portfolioUrl: "",
      bio: "On pikka aega õpetanud Kadrina Keskkoolis inseneeriatunde ja eest vedanud võistlust CADrina. Holger õpetab aktiivselt ka kutsekoolis.",
    },
    {
      name: "Kristina Ruder",
      role: "Õpetaja",
      portfolioUrl: "",
      bio: "Noor inseneeriahuviline õpetaja, kelle soov on panna meie inseneeriakeel helisema kaunis emakeeles.",
    },
  ],
};
