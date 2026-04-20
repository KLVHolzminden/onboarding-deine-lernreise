import { Chapter } from "@/lib/types";

export const chapter4: Chapter = {
  id: "lehrteam",
  title: "Kapitel 4: Im Lehrteam und im Lehrgang handeln",
  shortTitle: "Lehrteam",
  description:
    "Du trainierst Rollenverständnis und typische Handlungssituationen im Zusammenspiel mit anderen.",
  objective:
    "Du kannst Rollen im Lehrteam handlungsbezogen unterscheiden und in Seminar-Situationen angemessen reagieren.",
  accent: "moss",
  scenes: [
    {
      id: "c4-role-matching",
      type: "matching",
      eyebrow: "Rollen im Lehrteam",
      title: "Wer übernimmt was im Zusammenspiel?",
      prompt:
        "Ordne die typischen Aufgaben der passenden Rolle zu. Die Grenzen können je nach Format fließend sein, aber die Grundlogik soll klar werden.",
      pairs: [
        { id: "breakouts", label: "Breakout-Räume oder Arbeitsphasen technisch und methodisch begleiten" },
        { id: "coordination", label: "Gesamtverantwortung für Ablauf und Lehrgangskoordination" },
        { id: "content", label: "Fachinhalte vermitteln und Lernsituationen gestalten" },
        { id: "process", label: "Teilnehmende im Lernprozess begleiten und Entwicklung sichtbar machen" },
      ],
      targets: [
        { id: "moderation", label: "Moderator*in", description: "Rahmt Prozesse und moderiert Formate" },
        { id: "leitung", label: "Lehrgangsleitung", description: "Koordiniert den Lehrgang und trägt Verantwortung" },
        { id: "referent", label: "Referent*in", description: "Plant und gestaltet Inhalte" },
        { id: "lern", label: "Lernbegleitung", description: "Unterstützt Reflexion und Entwicklung" },
      ],
      answers: {
        breakouts: "moderation",
        coordination: "leitung",
        content: "referent",
        process: "lern",
      },
      feedback: {
        success:
          "So werden die Rollen greifbar. In der Praxis überlappen sie teils, aber eine klare Grundorientierung macht Teamarbeit deutlich leichter.",
        gentle:
          "Achte besonders auf den Unterschied zwischen Fachverantwortung, Gesamtkoordination, Moderation und Lernbegleitung.",
      },
      insights: [
        {
          id: "ins-c4-roles-didaktik",
          category: "didaktik",
          triggerType: "card",
          triggerLabel: "Warum Rollenklarheit Lernprozesse entlastet",
          title: "Didaktik-Insight",
          content:
            "Teilnehmende spüren schnell, ob ein Lehrteam abgestimmt handelt. Wenn Rollen klar sind, werden Übergänge ruhiger, Unsicherheiten kleiner und die Aufmerksamkeit bleibt eher beim Lernen als bei der Organisation.",
          points: 1,
        },
      ],
      takeaway: "Gute Lehrteams arbeiten nicht doppelt, sondern abgestimmt.",
      estimatedMinutes: 3,
    },
    {
      id: "c4-tech-case",
      type: "scenario",
      eyebrow: "Mini-Fall",
      title: "Die Technik im Online-Seminar hakt direkt zu Beginn",
      prompt:
        "Zwei Teilnehmende hören nichts, der Chat ist unruhig und der Start droht zu kippen. Wie reagierst du im Lehrteam sinnvoll?",
      options: [
        {
          id: "a",
          label: "Ich erkläre parallel den Fachinhalt weiter, damit keine Zeit verloren geht.",
          insight:
            "So verlieren die betroffenen Teilnehmenden schnell den Anschluss. Erst muss der Rahmen wieder stabil werden.",
        },
        {
          id: "b",
          label: "Ich spreche die Situation offen an, vergebe klare Mini-Aufgaben im Team und halte die Gruppe informiert.",
          insight:
            "Das ist professionell. Transparenz, Rollenabstimmung und kurze Orientierung erhalten die Arbeitsfähigkeit der Gruppe.",
          isBest: true,
        },
        {
          id: "c",
          label: "Ich warte still ab, bis jemand anderes das Problem löst.",
          insight:
            "Schweigen erzeugt Unsicherheit. Auch wenn du nicht alles löst, kannst du Orientierung geben.",
        },
      ],
      insights: [
        {
          id: "ins-c4-tech-practice",
          category: "praxis",
          triggerType: "inline",
          triggerLabel: "Was in hektischen Momenten zuerst hilft →",
          title: "Praxis-Insight",
          content:
            "In Technikstörungen beruhigt oft schon ein kurzer Satz: Wir ordnen uns gerade neu, ihr bekommt gleich Orientierung. Diese kleine Transparenz verhindert häufig mehr Unruhe als eine sofort perfekte technische Lösung.",
          points: 1,
        },
      ],
      takeaway: "In kritischen Momenten braucht die Gruppe zuerst Halt, dann Inhalt.",
      estimatedMinutes: 2,
    },
    {
      id: "c4-time-pressure",
      type: "scenario",
      eyebrow: "Mini-Fall",
      title: "Die Zeit läuft davon und die Gruppe ist mitten im Austausch",
      prompt:
        "Du merkst: Wenn ihr so weitermacht, kippt der Tagesplan. Gleichzeitig ist das Gespräch gerade wertvoll. Was ist die beste Reaktion?",
      options: [
        {
          id: "a",
          label: "Ich beende die Diskussion abrupt und ziehe meinen Plan unverändert durch.",
          insight:
            "Das sichert zwar den Plan, kann aber Motivation und Lerntiefe deutlich bremsen.",
        },
        {
          id: "b",
          label: "Ich mache den Zielkonflikt transparent und entscheide bewusst, was wir vertiefen und was wir straffen.",
          insight:
            "Genau hier zeigt sich professionelle Leitung: transparent priorisieren statt hektisch abarbeiten.",
          isBest: true,
        },
        {
          id: "c",
          label: "Ich ignoriere die Uhr und hoffe, dass wir später irgendwie aufholen.",
          insight:
            "Das verlagert den Druck nur nach hinten und macht spätere Lernsituationen oft hektischer.",
        },
      ],
      insights: [
        {
          id: "ins-c4-time-didaktik",
          category: "didaktik",
          triggerType: "card",
          triggerLabel: "Warum Priorisieren professioneller ist als Abarbeiten",
          title: "Didaktik-Insight",
          content:
            "Zeitdruck wird in Lehrgängen selten durch mehr Tempo gelöst. Lernwirksamer ist ein bewusstes Priorisieren: Welche Sequenz ist für das Ziel heute wirklich zentral und was kann knapper oder später geschehen?",
          points: 1,
        },
      ],
      takeaway:
        "Zeitmanagement ist keine starre Kontrolle, sondern eine bewusste Priorisierung am Lernziel entlang.",
      transferQuestion:
        "Wie könntest du in deinem Thema gut zwischen Muss, Soll und Kann unterscheiden?",
      estimatedMinutes: 2,
    },
    {
      id: "c4-team-reflection",
      type: "reflection",
      eyebrow: "Zusammenarbeit",
      title: "Wie möchtest du im Lehrteam auftreten?",
      prompt:
        "Formuliere deinen Beitrag zu einer guten Zusammenarbeit im Lehrgang.",
      prompts: [
        {
          id: "team-contribution",
          label: "Das bringe ich in ein Lehrteam ein",
          placeholder: "Zum Beispiel: Struktur, Ruhe, Aktivierung, gute Absprachen, Empathie ...",
        },
        {
          id: "team-support",
          label: "Dabei wünsche ich mir Unterstützung",
          placeholder: "Zum Beispiel: Feedback, Hospitation, klare Rollen, gemeinsame Vorbereitung ...",
        },
      ],
      insights: [
        {
          id: "ins-c4-team-org",
          category: "organisation",
          triggerType: "inline",
          triggerLabel: "Wie gute Zusammenarbeit vorbereitet wird →",
          title: "Organisations-Insight",
          content:
            "Viele Teamprobleme entstehen nicht erst im Seminar, sondern vor dem Seminar: wenn Rollen, Erwartungen und Kommunikationswege unklar bleiben. Eine kurze gemeinsame Vorbereitung ist deshalb oft wertvoller als spätere Improvisation.",
          points: 1,
        },
      ],
      takeaway:
        "Gute Teamarbeit entsteht, wenn eigene Stärken und benötigte Unterstützung sichtbar werden.",
      estimatedMinutes: 3,
    },
  ],
};
