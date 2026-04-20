import { Chapter } from "@/lib/types";

export const chapter3: Chapter = {
  id: "orientierung",
  title: "Kapitel 3: Orientierung im System",
  shortTitle: "System",
  description:
    "Du ordnest Organisation, Bildungsstruktur und Zuständigkeiten so ein, dass sie dir in echten Situationen helfen.",
  objective:
    "Du kennst die zentralen Aufgaben von LSB, Sportbünden und Vereinen und weißt, wo Unterstützung verortet ist.",
  accent: "sky",
  scenes: [
    {
      id: "c3-system-intro",
      type: "intro",
      eyebrow: "Vor der Vorbereitung",
      title: "Bildung im LSB Niedersachsen ist zentral gesteuert und regional umgesetzt",
      prompt:
        "Du bereitest deinen ersten Einsatz vor. Damit du nicht alles selbst klären musst, hilft ein klarer Blick auf das System hinter dem Lehrgang.",
      context:
        "Der LSB setzt Standards, entwickelt Qualität und verantwortet zentrale Bildungslinien. Kreis- und Stadtsportbünde setzen regional um, begleiten vor Ort und unterstützen Vereine.",
      highlights: [
        "LSB: Standards, Qualität, zentrale Angebote",
        "Sportbünde: regionale Umsetzung und Begleitung",
        "Vereine: lokaler Praxisort und konkrete Umsetzung",
      ],
      insights: [
        {
          id: "ins-c3-system-org",
          category: "organisation",
          triggerType: "card",
          triggerLabel: "So läuft das im LSB",
          title: "Organisations-Insight",
          content:
            "Neue Referierende erleben das System oft zuerst über einzelne Kontakte. Hilfreich wird es aber erst, wenn die Ebenen klar sind: Standards entstehen zentral, Begleitung passiert regional und Wirksamkeit zeigt sich im Verein.",
          points: 1,
        },
      ],
      takeaway:
        "Organisationswissen entlastet. Es zeigt dir, wer wofür ansprechbar ist.",
      estimatedMinutes: 2,
    },
    {
      id: "c3-org-matching",
      type: "matching",
      eyebrow: "Zuordnung",
      title: "Wer ist in welcher Ebene typischerweise zuständig?",
      prompt:
        "Ordne die Aufgaben der passenden Organisationsebene zu. Denk aus Sicht einer Referentin, die wissen will, an wen sie sich wendet.",
      pairs: [
        { id: "standards", label: "Qualitätsstandards für Bildungsangebote setzen" },
        { id: "regional", label: "Lehrgänge regional umsetzen und Vereine begleiten" },
        { id: "vereinspraxis", label: "Sportangebote direkt vor Ort gestalten" },
        { id: "ansprechperson", label: "Bei regionalen Fragen die nächste Begleitung bieten" },
      ],
      targets: [
        { id: "lsb", label: "LSB Niedersachsen", description: "Zentrale Bildung und Standards" },
        { id: "bund", label: "Kreis- oder Stadtsportbund", description: "Regionale Umsetzung und Beratung" },
        { id: "verein", label: "Verein", description: "Lokale Praxis und Anwendung" },
      ],
      answers: {
        standards: "lsb",
        regional: "bund",
        vereinspraxis: "verein",
        ansprechperson: "bund",
      },
      feedback: {
        success:
          "Genau so entsteht Orientierung. Wenn klar ist, wo Entscheidungen und Unterstützung liegen, werden Absprachen deutlich leichter.",
        gentle:
          "Fast geschafft. Wichtig ist vor allem die Unterscheidung zwischen zentraler Steuerung durch den LSB und regionaler Umsetzung durch die Sportbünde.",
      },
      insights: [
        {
          id: "ins-c3-matching-contact",
          category: "organisation",
          triggerType: "inline",
          triggerLabel: "Wer dich dabei konkret unterstützt →",
          title: "Blick hinter die Organisation",
          content:
            "Wenn du bei regionalen Fragen nicht weiterkommst, ist häufig nicht der LSB die erste Station, sondern die regionale Struktur im Sportbund. Genau diese Nähe macht Unterstützung für neue Referierende schneller erreichbar.",
          points: 1,
        },
      ],
      takeaway:
        "Nicht alles läuft über dieselbe Stelle. Gute Orientierung spart Zeit und verhindert Missverständnisse.",
      estimatedMinutes: 3,
    },
    {
      id: "c3-ordering",
      type: "ordering",
      eyebrow: "Vorbereitung",
      title: "Was klärst du vor einem ersten Lehrgang sinnvoll zuerst?",
      prompt:
        "Bringe die Schritte in eine hilfreiche Reihenfolge. Ziel ist ein ruhiger, gut vorbereiteter Start.",
      steps: [
        { id: "zielgruppe", label: "Zielgruppe, Rahmen und Lernziele des Lehrgangs klären" },
        { id: "team", label: "Mit Lehrgangsleitung und Lehrteam Rollen sowie Abläufe abstimmen" },
        { id: "material", label: "Materialien, Medien und Sportgeräte abstimmen" },
        { id: "methoden", label: "Methoden und Aktivierungen passend zur Gruppe planen" },
      ],
      correctOrder: ["zielgruppe", "team", "methoden", "material"],
      feedback: {
        success:
          "Das ist eine tragfähige Reihenfolge: erst Ziel und Rahmen, dann Zuständigkeiten, danach Didaktik und konkrete Ausstattung.",
        gentle:
          "Hilfreich ist, zuerst das gemeinsame Zielbild zu klären. Materialfragen werden besser, wenn Rollen, Gruppe und Methoden schon klar sind.",
      },
      insights: [
        {
          id: "ins-c3-ordering-practice",
          category: "praxis",
          triggerType: "card",
          triggerLabel: "Einblick aus einem gut vorbereiteten Lehrgang",
          title: "Praxis-Insight",
          content:
            "Erfahrene Lehrteams sprechen zuerst über Zielgruppe und Lernziele, erst danach über Material. So wird vermieden, dass Ausstattung den Lehrgang bestimmt statt das Lernziel. Gute Vorbereitung folgt immer zuerst der didaktischen Linie.",
          points: 1,
        },
      ],
      takeaway: "Vorbereitung beginnt mit Orientierung, nicht mit Materiallisten.",
      transferQuestion:
        "Welche zwei Punkte würdest du vor deinem ersten Einsatz besonders früh ansprechen?",
      estimatedMinutes: 3,
    },
    {
      id: "c3-info-contact",
      type: "infoCard",
      eyebrow: "Unterstützung",
      title: "Ansprechpersonen sind Teil deiner Startsicherheit",
      prompt:
        "Neue Referierende müssen nicht alles allein lösen. Organisatorische Begleitung, Lehrgangsleitung und regionale Kontakte helfen dir bei Planung und Umsetzung.",
      highlights: [
        "Lehrgangsleitung für Ablauf, Rahmen und Abstimmung",
        "organisatorische Begleitung bei Verträgen, Material und Kommunikation",
        "Kontakte in Sportbünden für regionale Einbindung und Anschluss",
      ],
      insights: [
        {
          id: "ins-c3-contact-praxis",
          category: "praxis",
          triggerType: "inline",
          triggerLabel: "Wann sich Kontakt besonders lohnt →",
          title: "Praxis-Insight",
          content:
            "Der beste Zeitpunkt für eine Rückfrage ist oft nicht dann, wenn schon Stress da ist. Wer vor dem ersten Einsatz früh Rollen, Material und Zielgruppe klärt, braucht später deutlich seltener hektische Nachsteuerung.",
          points: 1,
        },
      ],
      takeaway:
        "Sich früh abzustimmen ist Professionalität, nicht Unsicherheit.",
      estimatedMinutes: 2,
    },
  ],
};
