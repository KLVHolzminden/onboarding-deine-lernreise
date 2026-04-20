import { Chapter } from "@/lib/types";

export const chapter6: Chapter = {
  id: "mein-start",
  title: "Kapitel 6: Mein Start als Referent*in",
  shortTitle: "Nächste Schritte",
  description:
    "Zum Abschluss verknüpfst du Rahmenbedingungen, Unterstützung, KI-Leitplanken und deine konkreten nächsten Schritte.",
  objective:
    "Du kennst wichtige Startbedingungen und leitest für dich einen realistischen, motivierenden nächsten Schritt ab.",
  accent: "ember",
  scenes: [
    {
      id: "c6-conditions",
      type: "infoCard",
      eyebrow: "Rahmenbedingungen",
      title: "Was deinen Start organisatorisch trägt",
      prompt:
        "Zum professionellen Einstieg gehören nicht nur gute Inhalte, sondern auch klare Absprachen und verlässliche Rahmen.",
      highlights: [
        "Honorarvertrag und organisatorische Begleitung geben Sicherheit",
        "Materialien, Medien und Sportgeräte werden abgestimmt, nicht allein getragen",
        "Lehrgangsleitung unterstützt bei Ablauf, Rolle und Nachbereitung",
        "Selbstverpflichtung und Qualitätsanspruch gehören zur Rolle dazu",
      ],
      insights: [
        {
          id: "ins-c6-conditions-org",
          category: "organisation",
          triggerType: "card",
          triggerLabel: "Was im Hintergrund Sicherheit schafft",
          title: "Organisations-Insight",
          content:
            "Klare Rahmenbedingungen wirken oft unsichtbar, solange sie gut laufen. Gerade für neue Referierende reduzieren sie aber kognitive Last: Verträge, Materialabsprachen und Ansprechpersonen schaffen den Kopf frei für die Gruppe.",
          points: 1,
        },
      ],
      takeaway:
        "Professionalität zeigt sich auch in verständlichen Absprachen und sauberer Vorbereitung.",
      estimatedMinutes: 2,
    },
    {
      id: "c6-ai-case",
      type: "scenario",
      eyebrow: "KI und Verantwortung",
      title: "Du willst KI für die Vorbereitung nutzen",
      prompt:
        "Eine KI kann dir helfen, Ideen zu sammeln oder Formulierungen zu strukturieren. Was ist im Aus- und Fortbildungskontext die beste Haltung?",
      options: [
        {
          id: "a",
          label: "KI erstellt das komplette Seminar, ich übernehme alles ungeprüft.",
          insight:
            "Das wäre nicht professionell. Verantwortung für Inhalte, Zielgruppe und Qualität bleibt bei dir.",
        },
        {
          id: "b",
          label: "Ich nutze KI als Hilfsmittel, prüfe Ergebnisse kritisch und passe sie an Lernziele und Rahmen an.",
          insight:
            "Genau so. KI kann unterstützen, ersetzt aber weder didaktische Verantwortung noch Datenschutz- und Qualitätsbewusstsein.",
          isBest: true,
        },
        {
          id: "c",
          label: "Ich verzichte grundsätzlich auf jede Form von KI, auch wenn sie mir Struktur geben könnte.",
          insight:
            "Eine reflektierte Nutzung kann sinnvoll sein. Entscheidend sind Transparenz, Verantwortung und passende Grenzen.",
        },
      ],
      insights: [
        {
          id: "ins-c6-ai-didaktik",
          category: "didaktik",
          triggerType: "inline",
          triggerLabel: "Wofür KI sinnvoll sein kann →",
          title: "Didaktik-Insight",
          content:
            "KI ist besonders hilfreich für Vorstrukturierung, Variantenbildung oder erste Formulierungsideen. Didaktisch entscheidend bleibt aber deine Auswahl: Was passt wirklich zur Zielgruppe, zum Format und zum Bildungsanspruch des LSB?",
          points: 1,
        },
      ],
      takeaway: "KI ist Werkzeug, nicht Ersatz für professionelle Urteilsfähigkeit.",
      estimatedMinutes: 2,
    },
    {
      id: "c6-start-reflection",
      type: "reflection",
      eyebrow: "Nächster Schritt",
      title: "Was brauchst du für einen guten Start?",
      prompt:
        "Formuliere deinen persönlichen Übergang von der Lernreise in die Praxis.",
      prompts: [
        {
          id: "next-step",
          label: "Mein nächster konkreter Schritt",
          placeholder: "Zum Beispiel: Hospitation anfragen, Team-Teaching vereinbaren, Unterlagen sichten ...",
        },
        {
          id: "support-needed",
          label: "Dafür brauche ich Unterstützung von",
          placeholder: "Zum Beispiel: Lehrgangsleitung, Sportbund, Fachbereich, erfahrene Referierende ...",
        },
        {
          id: "development-path",
          label: "Diese Weiterqualifizierung interessiert mich",
          placeholder: "Zum Beispiel: kostenfreie Fortbildung, Hospitation, Nachbereitungsgespräch ...",
        },
      ],
      insights: [
        {
          id: "ins-c6-start-practice",
          category: "praxis",
          triggerType: "card",
          triggerLabel: "Ein guter erster Schritt ist oft kleiner als gedacht",
          title: "Praxis-Insight",
          content:
            "Viele gelungene Einstiege beginnen nicht mit einem eigenen kompletten Lehrgang, sondern mit Hospitation, Team-Teaching oder einer abgegrenzten Teilsequenz. Das macht Entwicklung sichtbar, ohne unnötig Druck aufzubauen.",
          points: 1,
        },
      ],
      takeaway:
        "Ein guter Abschluss mündet in einen machbaren ersten Schritt, nicht in einen diffusen Vorsatz.",
      estimatedMinutes: 3,
    },
    {
      id: "c6-call-to-action",
      type: "callToAction",
      eyebrow: "Abschluss",
      title: "Dein Weg in den ersten Lehrgang beginnt jetzt konkret",
      prompt:
        "Nutze deine Reflexion als Startsignal: Hospitation, Team-Teaching, Nachbereitungsgespräch, Referierenden-Unterlagen und weitere Qualifizierung sind keine Extras, sondern Teil eines guten Einstiegs.",
      highlights: [
        "Hospitation vereinbaren",
        "Team-Teaching oder begleiteten Ersteinsatz planen",
        "Referierenden-Unterlagen und Wissensnetz sichten",
        "Kontakt zu passenden Personen im Sportbund aufnehmen",
      ],
      insights: [
        {
          id: "ins-c6-cta-network",
          category: "organisation",
          triggerType: "inline",
          triggerLabel: "Wer dir den Start leichter macht →",
          title: "Organisations-Insight",
          content:
            "Ein guter Abschluss verweist nicht nur auf Aufgaben, sondern auch auf Beziehungen. Gerade Kontakte im Sportbund und erfahrene Kolleg*innen sind oft der Unterschied zwischen einem diffusen Vorsatz und einem echten Startsignal.",
          points: 1,
        },
      ],
      takeaway: "Du musst nicht perfekt starten. Du sollst gut begleitet starten.",
      estimatedMinutes: 2,
    },
  ],
};
