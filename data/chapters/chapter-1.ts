import { Chapter } from "@/lib/types";

export const chapter1: Chapter = {
  id: "ankommen",
  title: "Kapitel 1: Ankommen und Motivation",
  shortTitle: "Ankommen",
  description:
    "Ein motivierender Einstieg in deine neue Rolle mit Selbstcheck, Perspektivwechsel und persönlicher Standortbestimmung.",
  objective:
    "Du entwickelst ein erstes Bild deiner Rolle und formulierst, warum du als Referent*in wirken möchtest.",
  accent: "sky",
  scenes: [
    {
      id: "c1-welcome",
      type: "intro",
      eyebrow: "Willkommen",
      title: "Du bist jetzt Teil eines starken Referierenden-Netzwerks",
      prompt:
        "Neue Referierende starten nicht bei null. Diese Lernreise begleitet dich Schritt für Schritt in Richtung erster Lehrgang.",
      context:
        "Du bekommst keine Folienablage, sondern eine praktische Lernumgebung mit Situationen, Entscheidungen und kompakten Merksätzen.",
      highlights: [
        "6 Episoden entlang deines ersten Lehrgangs",
        "kurze Lernschritte mit sofortigem Feedback",
        "persönliche Reflexion und konkrete nächste Schritte",
      ],
      insights: [
        {
          id: "ins-c1-welcome-network",
          category: "organisation",
          triggerType: "card",
          triggerLabel: "Wer dich von Anfang an trägt",
          title: "Ein Blick hinter die Organisation",
          content:
            "Neue Referierende starten im LSB Niedersachsen nicht als Einzelkämpfer*innen. Hinter dem ersten Einsatz stehen Lehrgangsleitung, regionale Kontakte und organisatorische Begleitung. Wer diese Struktur früh kennt, startet meist ruhiger und klarer.",
          points: 1,
        },
      ],
      takeaway: "Du wirst nicht nur informiert, sondern vorbereitet.",
      estimatedMinutes: 2,
    },
    {
      id: "c1-perspective",
      type: "scenario",
      eyebrow: "Perspektivwechsel",
      title: "Nicht mehr eine*r von 20, sondern eine*r für 20",
      prompt:
        "Du gehst zum ersten Mal mit dem Blick einer Referentin in einen Lehrgang. Was verändert sich zuerst?",
      context:
        "Eine neue Rolle bedeutet nicht nur mehr Redeanteil, sondern mehr Verantwortung für Lernprozesse, Energie und Orientierung.",
      options: [
        {
          id: "a",
          label: "Ich muss vor allem möglichst viel Fachwissen zeigen.",
          insight:
            "Fachwissen ist wichtig, aber die Gruppe braucht vor allem eine gute Lernbegleitung und klare Lernanlässe.",
        },
        {
          id: "b",
          label: "Ich gestalte den Rahmen, in dem Teilnehmende lernen, ausprobieren und reflektieren können.",
          insight:
            "Genau darum geht es. Als Referent*in verantwortest du Lernräume und Entscheidungen, nicht nur Input.",
          isBest: true,
        },
        {
          id: "c",
          label: "Ich halte mich möglichst neutral heraus und lasse die Gruppe alles selbst organisieren.",
          insight:
            "Selbststeuerung ist wertvoll, braucht aber Orientierung. Lernprozesse gelingen besser mit klarer Rahmung.",
        },
      ],
      insights: [
        {
          id: "ins-c1-perspective-practice",
          category: "praxis",
          triggerType: "inline",
          triggerLabel: "Wie ein guter Einstieg wirkt →",
          title: "Aus der Praxis",
          content:
            "Erfahrene Referierende denken beim Einstieg weniger an ihren ersten Satz als an die erste Aktivität der Gruppe. Sobald Teilnehmende etwas beobachten, beantworten oder ausprobieren, entsteht früher Kontakt und die Gruppe wird lesbarer.",
          points: 1,
        },
      ],
      takeaway:
        "Referierende sind Lernbegleitende. Sie schaffen Situationen, in denen Menschen handlungsfähig werden.",
      transferQuestion:
        "Woran sollen Teilnehmende nach deinem ersten Einsatz merken, dass du sie gut begleitet hast?",
      estimatedMinutes: 3,
    },
    {
      id: "c1-self-check",
      type: "multipleChoice",
      eyebrow: "Kompetenznetz",
      title: "Welche Ressource bringst du bereits mit?",
      prompt:
        "Du denkst an deinen möglichen ersten Einsatz. Welche deiner Stärken würde dir dort am meisten helfen?",
      options: [
        {
          id: "a",
          label: "Ich kann Gruppen gut wahrnehmen und auf Stimmung reagieren.",
          insight:
            "Diese Stärke unterstützt Aktivierung, Anpassung und Lernbegleitung im Lehrgang.",
          isBest: true,
        },
        {
          id: "b",
          label: "Ich arbeite besonders sorgfältig mit Ablaufsicherheit und Vorbereitung.",
          insight:
            "Eine starke Basis. Gute Vorbereitung entlastet den Kopf und schafft Luft für die Gruppe.",
          isBest: true,
        },
        {
          id: "c",
          label: "Ich traue mir zu, Inhalte klar und anschaulich zu vermitteln.",
          insight:
            "Sehr wertvoll. Gute Vermittlung wird noch stärker, wenn sie mit Aktivierung und Transfer verbunden ist.",
          isBest: true,
        },
      ],
      insights: [
        {
          id: "ins-c1-selfcheck-didaktik",
          category: "didaktik",
          triggerType: "card",
          triggerLabel: "Warum Stärken wichtiger sind als Perfektion",
          title: "Didaktik-Insight",
          content:
            "Neue Referierende müssen nicht alles zugleich können. Didaktisch ist es klüger, vorhandene Stärken bewusst einzusetzen und einzelne Entwicklungsfelder nach und nach auszubauen. Das erzeugt mehr Sicherheit als ein unrealistischer Perfektionsanspruch.",
          points: 1,
        },
      ],
      takeaway:
        "Du startest nicht ohne Kompetenzen. Die Kunst liegt darin, vorhandene Stärken bewusst in Lehrsituationen einzusetzen.",
      estimatedMinutes: 2,
    },
    {
      id: "c1-reflection",
      type: "reflection",
      eyebrow: "Dein Startpunkt",
      title: "Warum möchtest du Referent*in sein?",
      prompt:
        "Halte fest, was dich motiviert und was du in deiner Rolle bewirken möchtest.",
      prompts: [
        {
          id: "motivation",
          label: "Das reizt mich an der Rolle",
          placeholder: "Zum Beispiel: Menschen in Bewegung bringen, Wissen teilen, Lernräume gestalten ...",
        },
        {
          id: "goal",
          label: "Das möchte ich in meinem ersten Lehrgang erreichen",
          placeholder: "Zum Beispiel: einen guten Einstieg schaffen, Sicherheit gewinnen, in Kontakt mit der Gruppe kommen ...",
        },
      ],
      insights: [
        {
          id: "ins-c1-reflection-goal",
          category: "praxis",
          triggerType: "inline",
          triggerLabel: "Ein Beispiel für ein gutes Zielbild →",
          title: "Praxis-Insight",
          content:
            "Ein hilfreiches Ziel für den ersten Einsatz ist selten: alles perfekt machen. Tragfähiger sind Ziele wie: einen klaren Einstieg gestalten, die Gruppe aktivieren oder im Lehrteam sicher mitgehen. Solche Ziele lassen sich später besser auswerten.",
          points: 1,
        },
      ],
      takeaway:
        "Ein klares Warum trägt durch Unsicherheit und hilft dir, in Lehrsituationen stimmig zu handeln.",
      estimatedMinutes: 3,
    },
  ],
};
