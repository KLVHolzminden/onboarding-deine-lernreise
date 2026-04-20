import { Chapter } from "@/lib/types";

export const chapter5: Chapter = {
  id: "lernen-im-sport",
  title: "Kapitel 5: So lernen Menschen im Sport",
  shortTitle: "Lernen",
  description:
    "Du verknüpfst Bildungsverständnis, Kompetenzorientierung und Methodenwahl mit realen Lehrsituationen.",
  objective:
    "Du kannst Lernangebote so denken, dass Menschen nicht nur hören, sondern aktiv Kompetenzen aufbauen.",
  accent: "pine",
  scenes: [
    {
      id: "c5-passive-group",
      type: "scenario",
      eyebrow: "Mini-Fall",
      title: "Die Gruppe bleibt trotz Input passiv",
      prompt:
        "Nach einer Erklärung nicken viele, aber kaum jemand beteiligt sich. Was ist jetzt didaktisch am sinnvollsten?",
      options: [
        {
          id: "a",
          label: "Ich erkläre denselben Punkt noch einmal ausführlicher.",
          insight:
            "Mehr Erklärung schafft nicht automatisch mehr Verstehen oder Beteiligung.",
        },
        {
          id: "b",
          label: "Ich wechsle in eine kurze Anwendung, Beobachtungsaufgabe oder Partnerreflexion.",
          insight:
            "Das passt zum Kompetenzgedanken: Menschen lernen, wenn sie Inhalte in Handlung und Austausch überführen.",
          isBest: true,
        },
        {
          id: "c",
          label: "Ich gehe direkt zur nächsten Folie über, damit das Tempo erhalten bleibt.",
          insight:
            "Tempo ersetzt keine Verarbeitung. Ohne Aktivierung bleibt viel Wissen oberflächlich.",
        },
      ],
      insights: [
        {
          id: "ins-c5-passive-didaktik",
          category: "didaktik",
          triggerType: "card",
          triggerLabel: "Warum das wirkt",
          title: "Didaktik-Insight",
          content:
            "Passivität ist oft kein Motivationsproblem, sondern ein Verarbeitungsproblem. Wenn Teilnehmende nach Input nichts tun können, bleibt Lernen schnell abstrakt. Kleine Anwendungen geben dem Gehörten Richtung und Bedeutung.",
          points: 1,
        },
      ],
      takeaway:
        "Kompetenzorientierung heißt: Lernen wird sichtbar, wenn Menschen etwas mit dem Inhalt tun.",
      estimatedMinutes: 2,
    },
    {
      id: "c5-education-card",
      type: "infoCard",
      eyebrow: "Bildungsverständnis",
      title: "Bildung bewegt Niedersachsen – und wir gestalten sie mit",
      prompt:
        "Im LSB-Verständnis verbindet Bildung Wissen, Haltung, Erfahrung und Bewegung. Lernen ist ganzheitlich: Kopf, Herz und Bewegung gehören zusammen.",
      context:
        "Gute Referierende schaffen Lernräume, in denen Menschen ausprobieren, reflektieren, scheitern dürfen und Entwicklung erleben.",
      highlights: [
        "Lernen beginnt bei echten Situationen",
        "Reflexion macht Erfahrung anschlussfähig",
        "Methoden werden vom Lernziel her gewählt",
      ],
      insights: [
        {
          id: "ins-c5-education-heart",
          category: "didaktik",
          triggerType: "inline",
          triggerLabel: "Was mit Kopf, Herz und Bewegung gemeint ist →",
          title: "Didaktik-Insight",
          content:
            "Das Bild meint keine romantische Formel, sondern drei Lernzugänge: verstehen, emotional bedeutsam erleben und in Handlung kommen. Gerade im Sport wirken diese Ebenen oft zusammen und machen Inhalte nachhaltiger.",
          points: 1,
        },
      ],
      takeaway:
        "Didaktik ist keine Dekoration. Sie ist das Werkzeug, mit dem Lernprozesse wirksam werden.",
      estimatedMinutes: 2,
    },
    {
      id: "c5-method-order",
      type: "ordering",
      eyebrow: "Lernarchitektur",
      title: "Wie baust du eine lernwirksame Mikro-Szene auf?",
      prompt:
        "Ordne die Schritte so, wie sie in dieser App und auch in vielen guten Lehrsituationen sinnvoll aufeinander folgen.",
      steps: [
        { id: "situation", label: "Mit einer Situation oder Aufgabe starten" },
        { id: "entscheidung", label: "Teilnehmende entscheiden, zuordnen oder reagieren lassen" },
        { id: "feedback", label: "Direktes Feedback und kurze Auswertung geben" },
        { id: "theorie", label: "Komprimierten Merksatz oder Theorieimpuls anschließen" },
      ],
      correctOrder: ["situation", "entscheidung", "feedback", "theorie"],
      feedback: {
        success:
          "Genau diese Reihenfolge stützt handlungsorientiertes Lernen: erst erleben, dann deuten, dann verdichten.",
        gentle:
          "Wichtig ist vor allem: Theorie folgt möglichst auf Erfahrung und Auswertung, nicht davor.",
      },
      insights: [
        {
          id: "ins-c5-ordering-practice",
          category: "praxis",
          triggerType: "card",
          triggerLabel: "So lässt sich eine Mikro-Szene schnell planen",
          title: "Praxis-Insight",
          content:
            "Viele gute Kurzsequenzen entstehen mit einer einfachen Leitfrage: Was sollen die Teilnehmenden zuerst erleben, bevor ich es erkläre? Wer so plant, entwickelt meist automatisch mehr Aktivierung und weniger Textlast.",
          points: 1,
        },
      ],
      takeaway: "Erfahrung vor Theorie entlastet und macht Inhalte anschlussfähig.",
      transferQuestion:
        "Welches Thema aus deinem Fachgebiet ließe sich genau in dieser Logik aufbauen?",
      estimatedMinutes: 3,
    },
    {
      id: "c5-reflection",
      type: "reflection",
      eyebrow: "Transfer",
      title: "Wie willst du Menschen in deinem Thema aktiv lernen lassen?",
      prompt:
        "Notiere einen didaktischen Vorsatz für deinen ersten Lehrgang.",
      prompts: [
        {
          id: "method-intent",
          label: "Diese Aktivierungsform möchte ich bewusst einsetzen",
          placeholder: "Zum Beispiel: kurzer Bewegungsimpuls, Partneraustausch, Beobachtungsauftrag ...",
        },
        {
          id: "competence-intent",
          label: "Daran will ich Lernen sichtbar machen",
          placeholder: "Zum Beispiel: durch Anwendung, Reflexion, Transfer, Feedback ...",
        },
      ],
      insights: [
        {
          id: "ins-c5-reflection-method",
          category: "praxis",
          triggerType: "inline",
          triggerLabel: "Ein realistischer Methodenvorsatz →",
          title: "Praxis-Insight",
          content:
            "Für den ersten Lehrgang reicht oft schon ein bewusster Aktivierungsanker, etwa eine Partnerfrage, eine Beobachtungsaufgabe oder ein kurzer Bewegungsimpuls. Kleine methodische Entscheidungen verändern häufig schon die ganze Lernatmosphäre.",
          points: 1,
        },
      ],
      takeaway:
        "Gute Methodenwahl folgt nicht dem Zufall, sondern dem Lernziel und der Gruppe.",
      estimatedMinutes: 3,
    },
  ],
};
