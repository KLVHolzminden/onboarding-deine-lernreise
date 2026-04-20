import { Chapter } from "@/lib/types";

export const chapter2: Chapter = {
  id: "perspektivwechsel",
  title: "Kapitel 2: Perspektivwechsel – Was heißt Referent*in sein?",
  shortTitle: "Rolle",
  description:
    "Von Wissensvermittlung zu Lernbegleitung: Du erlebst, wie die Rolle handlungsorientiert funktioniert.",
  objective:
    "Du kannst typische Einstiegs- und Reaktionssituationen aus Sicht einer lernwirksamen Referent*in einordnen.",
  accent: "pine",
  scenes: [
    {
      id: "c2-seminar-start",
      type: "scenario",
      eyebrow: "Lehrgangsbeginn",
      title: "Die Gruppe wirkt noch zurückhaltend",
      prompt:
        "Du startest gleich mit 20 Teilnehmenden. Einige schauen abwartend, manche sind noch mit sich selbst beschäftigt. Wie beginnst du?",
      options: [
        {
          id: "a",
          label: "Mit einem 20-minütigen Vortrag, damit sofort klar ist, worum es geht.",
          insight:
            "Ein klarer Rahmen ist gut, aber ein längerer Vortrag zu Beginn aktiviert die Gruppe kaum.",
        },
        {
          id: "b",
          label: "Mit einer kurzen Aktivierung, einer Frage oder Bewegung, die direkt ins Thema führt.",
          insight:
            "Das ist lernwirksam: Die Gruppe kommt ins Handeln und du bekommst früh ein Gespür für Energie und Erwartungen.",
          isBest: true,
        },
        {
          id: "c",
          label: "Mit Materialverteilung ohne Einstieg, damit später mehr Zeit für Inhalte bleibt.",
          insight:
            "Organisatorische Effizienz hilft, ersetzt aber keinen bewusst gestalteten Lernstart.",
        },
      ],
      insights: [
        {
          id: "ins-c2-start-didaktik",
          category: "didaktik",
          triggerType: "card",
          triggerLabel: "Warum dieser Einstieg gut funktioniert",
          title: "Didaktik-Insight",
          content:
            "Aktivierende Einstiege haben zwei Vorteile zugleich: Sie holen die Gruppe in Bewegung und geben dir frueh diagnostische Hinweise. Du siehst schneller, wie aufmerksam, offen oder vorsichtig die Teilnehmenden gerade sind.",
          points: 1,
        },
      ],
      takeaway:
        "Ein guter Start schafft Beteiligung. Menschen lernen besser, wenn sie früh aktiv werden.",
      transferQuestion:
        "Welche kurze Aktivierung würde zu deinem Fachthema passen, ohne künstlich zu wirken?",
      estimatedMinutes: 3,
    },
    {
      id: "c2-critical-question",
      type: "scenario",
      eyebrow: "Mini-Fall",
      title: "Eine kritische Rückfrage kommt direkt aus der Gruppe",
      prompt:
        "Ein Teilnehmender sagt: 'Das klingt in der Theorie gut, aber in unserem Verein funktioniert das nie.' Wie reagierst du?",
      options: [
        {
          id: "a",
          label: "Ich verteidige das Konzept sofort und erklaere, warum der Einwand nicht stimmt.",
          insight:
            "So entsteht leicht ein Rechtfertigungsmodus. Die Gruppe lernt dann wenig aus der Situation.",
        },
        {
          id: "b",
          label: "Ich nehme den Einwand auf, frage nach dem konkreten Kontext und mache ihn für die Gruppe nutzbar.",
          insight:
            "Stark. Du behandelst die Rückfrage als Lernmaterial und verbindest Praxis mit Reflexion.",
          isBest: true,
        },
        {
          id: "c",
          label: "Ich uebergehe den Kommentar, damit die geplante Zeitstruktur erhalten bleibt.",
          insight:
            "Zeit ist wichtig, aber ein übergangener Einwand kann Motivation und Beteiligung deutlich senken.",
        },
      ],
      insights: [
        {
          id: "ins-c2-question-practice",
          category: "praxis",
          triggerType: "inline",
          triggerLabel: "So machen es erfahrene Referierende →",
          title: "Praxis-Insight",
          content:
            "Kritische Rueckfragen werden in guten Lehrgaengen oft nicht sofort beantwortet, sondern zuerst geoeffnet: Was genau klappt nicht? Woran liegt es im Verein? So wird aus Widerstand ein gemeinsamer Lernanlass fuer die ganze Gruppe.",
          points: 1,
        },
      ],
      takeaway:
        "Kritische Fragen sind keine Störung, sondern oft der Einstieg in echtes Lernen.",
      estimatedMinutes: 2,
    },
    {
      id: "c2-learning-role",
      type: "infoCard",
      eyebrow: "Merksatz",
      title: "Lernbegleitung statt nur Wissensabgabe",
      prompt:
        "Im LSB-Kontext bedeutet gute Referierendentätigkeit: Aktivieren, an Praxis anknüpfen, Sicherheit geben und Entwicklung sichtbar machen.",
      context:
        "Teilnehmende sollen nicht nur Informationen hören, sondern Kompetenzen aufbauen: wahrnehmen, entscheiden, ausprobieren, reflektieren und übertragen.",
      highlights: [
        "weniger Frontallogik, mehr Lernprozess",
        "Praxis und Reflexion bewusst verknüpfen",
        "Teilnehmende als aktive Mitgestaltende sehen",
      ],
      insights: [
        {
          id: "ins-c2-role-organisation",
          category: "organisation",
          triggerType: "card",
          triggerLabel: "Warum das im LSB so betont wird",
          title: "Blick in die Bildungslogik",
          content:
            "Im LSB-Kontext geht es nicht nur um Stoffvermittlung, sondern um handlungsfähige Menschen in Vereinen und Sportstrukturen. Deshalb wird Referierendentätigkeit hier konsequent als Lernbegleitung verstanden und nicht nur als Fachvortrag.",
          points: 1,
        },
      ],
      takeaway:
        "Lernen im Sport wird stark, wenn Kopf, Herz und Bewegung zusammenspielen.",
      estimatedMinutes: 2,
    },
    {
      id: "c2-role-reflection",
      type: "reflection",
      eyebrow: "Transfer",
      title: "Welche Art von Referent*in möchtest du sein?",
      prompt:
        "Übersetze den Perspektivwechsel in ein eigenes Rollenbild für deinen Start.",
      prompts: [
        {
          id: "role-strength",
          label: "So möchte ich Lernräume gestalten",
          placeholder: "Zum Beispiel: aktivierend, klar, zugewandt, praxisnah ...",
        },
        {
          id: "role-challenge",
          label: "Davor habe ich noch Respekt",
          placeholder: "Zum Beispiel: Gruppendynamik, Zeitmanagement, spontane Rückfragen ...",
        },
      ],
      insights: [
        {
          id: "ins-c2-reflection-role",
          category: "didaktik",
          triggerType: "inline",
          triggerLabel: "Was ein realistisches Rollenbild entlastet →",
          title: "Didaktik-Insight",
          content:
            "Ein gutes Rollenbild beschreibt nicht nur Haltung, sondern auch Grenzen. Wer weiß, dass Unsicherheit am Anfang normal ist, plant häufig klüger: mit klaren Schritten, Unterstützung im Team und weniger Druck auf perfekte Souveränität.",
          points: 1,
        },
      ],
      takeaway:
        "Ein realistisches Rollenbild kombiniert Motivation mit einer offenen Sicht auf Entwicklungsfelder.",
      estimatedMinutes: 3,
    },
  ],
};
