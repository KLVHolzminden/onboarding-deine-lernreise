# LSB Niedersachsen: Lernreise für neue Referierende

Eine ruhige, szenariobasierte Lernplattform für das Onboarding neuer Referierender im LandesSportBund Niedersachsen e.V. Die Anwendung verbindet Orientierung, Handlungssicherheit und Motivation in einer kompakten interaktiven Lernreise.

## Projektziel

Die App unterstützt neue Referierende beim Einstieg in ihren ersten Lehrgang. Statt einer linearen Informationssammlung arbeitet sie mit realistischen Situationen, kurzen Entscheidungen, direktem Feedback, Merksätzen, Transferfragen und optionalen Insights.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion für dezente Übergänge
- `localStorage` für Fortschritt, Insights und Reflexionsnotizen

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Danach läuft die Anwendung unter dem in der Konsole ausgegebenen lokalen Link.

## Production-Build

```bash
npm run build
npm run start
```

Für eine lokal produktionsnahe Vorschau kann alternativ auch `npm run preview` genutzt werden.

## Projektstruktur

- `app/`: Next.js App Router, globale Seitenstruktur und API-Routen
- `components/learning/`: UI-Komponenten für Start, Szenen, Insights, Kapitelabschluss und Abschlussseite
- `data/`: inhaltliche Kursdaten und Kapitelmodule
- `lib/`: Datentypen, Speicherlogik und Hilfsfunktionen

## GitHub-Ready

Das Projekt ist für ein normales GitHub-Repository vorbereitet:

- `.gitignore` blendet Build-Artefakte, lokale Vercel-Dateien und Abhängigkeiten aus
- die Anwendung enthält keine fest verdrahteten `localhost`-URLs im UI
- der Build läuft produktionsfähig mit `npm run build`

Kurzer Standardablauf:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <DEIN_GITHUB_REPO_URL>
git push -u origin main
```

## Vercel-Deployment

Empfohlener Weg:

1. Repository zu GitHub pushen
2. in Vercel das GitHub-Repository importieren
3. Framework automatisch als Next.js erkennen lassen
4. deployen

Die Standardkonfiguration dieses Projekts reicht dafür aus. Eine zusätzliche Build-Sonderkonfiguration ist aktuell nicht nötig.

## Zugriffsschutz in der Testphase

Die App selbst enthält bewusst kein eigenes Login-System.

Für Testläufe wird der Zugriff über **Vercel Deployment Protection** geregelt. Testpersonen erhalten Zugriff über einen geschützten Deployment-Link oder einen Shareable Link aus Vercel. Sobald die Deployment-URL freigegeben ist, kann die Lernreise ohne internes Login direkt genutzt werden.

## Verhalten im Testbetrieb

- Testpersonen benötigen kein `npm`, kein Terminal und kein lokales Setup
- die App startet direkt über einen Link im Browser
- Fortschritt und Notizen werden lokal im jeweiligen Browser gespeichert
- die Oberfläche enthält keine Entwicklerhinweise oder `localhost`-Verweise

## Deployment-Anleitung

Eine kompakte Schritt-für-Schritt-Anleitung für GitHub und Vercel liegt in [DEPLOYMENT.md](C:\Users\User\Documents\New project\DEPLOYMENT.md).

## Inhalte anpassen

- Kursmetadaten: [data/course.ts](C:\Users\User\Documents\New project\data\course.ts)
- Kapitel und Szenen: `data/chapters/`
- Lernkomponenten: `components/learning/`
- Speicher- und Fortschrittslogik: [lib/storage.ts](C:\Users\User\Documents\New project\lib\storage.ts)
