import { useState } from "react";

const program = {
  weeks: [
    {
      number: 1,
      theme: "Fondations",
      subtitle: "Activation & apprentissage des mouvements",
      days: [
        {
          day: "Lundi",
          focus: "Push — Poitrine & Triceps",
          exercises: [
            { name: "Pompes classiques", sets: "3×8", rest: "45s", tip: "Corps gainé, coudes à 45°" },
            { name: "Pompes larges", sets: "2×8", rest: "45s", tip: "Accent pectoraux" },
            { name: "Dips sur chaise", sets: "2×8", rest: "45s", tip: "Dos contre le siège" },
          ],
        },
        {
          day: "Mardi",
          focus: "Pull — Dos & Biceps",
          exercises: [
            { name: "Superman hold", sets: "3×10s", rest: "30s", tip: "Contracter les dorsaux" },
            { name: "Rowing sur table", sets: "3×8", rest: "45s", tip: "Poitrine vers la table" },
            { name: "Isométrie biceps (serviette)", sets: "3×10s", rest: "30s", tip: "Résistance avec les deux bras" },
          ],
        },
        {
          day: "Mercredi",
          focus: "Core — Gainage",
          exercises: [
            { name: "Planche classique", sets: "3×20s", rest: "30s", tip: "Bassin neutre" },
            { name: "Dead bug", sets: "3×8", rest: "30s", tip: "Dos plaqué au sol" },
            { name: "Planche latérale", sets: "2×15s/côté", rest: "30s", tip: "Hanches alignées" },
          ],
        },
        {
          day: "Jeudi",
          focus: "Push — Épaules",
          exercises: [
            { name: "Pike push-up", sets: "3×8", rest: "45s", tip: "Hanches hautes, tête vers sol" },
            { name: "Pompes diamant", sets: "2×6", rest: "45s", tip: "Accent triceps" },
            { name: "Wall push (isométrique)", sets: "3×15s", rest: "30s", tip: "Pousser le mur sans bouger" },
          ],
        },
        {
          day: "Vendredi",
          focus: "Full Upper — Circuit",
          exercises: [
            { name: "Pompes classiques", sets: "2×10", rest: "30s", tip: "Qualité > quantité" },
            { name: "Superman hold", sets: "2×12s", rest: "30s", tip: "" },
            { name: "Planche", sets: "2×25s", rest: "30s", tip: "" },
            { name: "Dips sur chaise", sets: "2×10", rest: "30s", tip: "" },
          ],
        },
        { day: "Samedi", focus: "Repos actif", exercises: [{ name: "Mobilité épaules & hanches (sans flexion genou)", sets: "10 min", rest: "—", tip: "Cercles bras, étirements debout" }] },
        { day: "Dimanche", focus: "Repos complet", exercises: [] },
      ],
    },
    {
      number: 2,
      theme: "Progression",
      subtitle: "Augmentation du volume & intensité",
      days: [
        {
          day: "Lundi",
          focus: "Push — Poitrine & Triceps",
          exercises: [
            { name: "Pompes déclinées", sets: "3×8", rest: "45s", tip: "Pieds sur chaise" },
            { name: "Pompes larges", sets: "3×10", rest: "45s", tip: "" },
            { name: "Dips sur chaise", sets: "3×10", rest: "45s", tip: "" },
          ],
        },
        {
          day: "Mardi",
          focus: "Pull — Dos & Biceps",
          exercises: [
            { name: "Superman dynamique", sets: "3×12", rest: "30s", tip: "Lever/baisser lentement" },
            { name: "Rowing sur table", sets: "3×10", rest: "45s", tip: "" },
            { name: "Face pulls serviette", sets: "3×12", rest: "30s", tip: "Tirer vers le visage" },
          ],
        },
        {
          day: "Mercredi",
          focus: "Core — Anti-rotation",
          exercises: [
            { name: "Planche + tap épaule", sets: "3×8/côté", rest: "30s", tip: "Bassin stable" },
            { name: "Dead bug", sets: "3×10", rest: "30s", tip: "" },
            { name: "Hollow body hold", sets: "3×15s", rest: "30s", tip: "Bas du dos au sol" },
          ],
        },
        {
          day: "Jeudi",
          focus: "Push — Épaules & Triceps",
          exercises: [
            { name: "Pike push-up", sets: "4×8", rest: "45s", tip: "" },
            { name: "Pompes déclinées", sets: "3×8", rest: "45s", tip: "" },
            { name: "Dips sur chaise", sets: "3×12", rest: "45s", tip: "" },
          ],
        },
        {
          day: "Vendredi",
          focus: "Full Upper — AMRAP 12 min",
          exercises: [
            { name: "5 pompes", sets: "AMRAP 12min", rest: "Minimal", tip: "Enchaîner les 4 ex." },
            { name: "5 rowing sur table", sets: "", rest: "", tip: "" },
            { name: "10s planche", sets: "", rest: "", tip: "" },
            { name: "5 dips", sets: "", rest: "", tip: "" },
          ],
        },
        { day: "Samedi", focus: "Repos actif", exercises: [{ name: "Stretching haut du corps", sets: "10 min", rest: "—", tip: "Pectoraux, dorsaux, épaules" }] },
        { day: "Dimanche", focus: "Repos complet", exercises: [] },
      ],
    },
    {
      number: 3,
      theme: "Intensité",
      subtitle: "Variations avancées & time under tension",
      days: [
        {
          day: "Lundi",
          focus: "Push — Lent & Contrôlé",
          exercises: [
            { name: "Pompes tempo 3-1-3", sets: "3×6", rest: "60s", tip: "3s descente, 1s bas, 3s montée" },
            { name: "Pompes déclinées", sets: "3×10", rest: "45s", tip: "" },
            { name: "Dips lents", sets: "3×8", rest: "45s", tip: "4s descente" },
          ],
        },
        {
          day: "Mardi",
          focus: "Pull — Amplitude & Force",
          exercises: [
            { name: "Superman prise large", sets: "4×10", rest: "30s", tip: "" },
            { name: "Rowing sur table prise supine", sets: "4×10", rest: "45s", tip: "Paumes vers le haut" },
            { name: "Dislocations épaule (serviette)", sets: "3×10", rest: "30s", tip: "Mouvement complet sans forcer" },
          ],
        },
        {
          day: "Mercredi",
          focus: "Core — Dynamique",
          exercises: [
            { name: "Hollow body rock", sets: "3×10", rest: "30s", tip: "Bercement contrôlé" },
            { name: "Planche + leg lift alterné", sets: "3×8/côté", rest: "30s", tip: "Lever la jambe sans douleur" },
            { name: "Russian twist (sans rotation genou)", sets: "3×12", rest: "30s", tip: "Pieds levés si possible" },
          ],
        },
        {
          day: "Jeudi",
          focus: "Push — Explosif",
          exercises: [
            { name: "Clap push-up (ou sauté)", sets: "3×5", rest: "60s", tip: "Dépenser max d'énergie" },
            { name: "Pike push-up", sets: "4×10", rest: "45s", tip: "" },
            { name: "Pompes larges tempo", sets: "3×8", rest: "45s", tip: "3s descente" },
          ],
        },
        {
          day: "Vendredi",
          focus: "Full Upper — Défi",
          exercises: [
            { name: "100 pompes au total", sets: "En autant de séries", rest: "Mini pauses", tip: "Qualité absolue" },
          ],
        },
        { day: "Samedi", focus: "Repos actif", exercises: [{ name: "Yoga haut du corps", sets: "10 min", rest: "—", tip: "Cat-cow, thread the needle, cobra" }] },
        { day: "Dimanche", focus: "Repos complet", exercises: [] },
      ],
    },
    {
      number: 4,
      theme: "Consolidation",
      subtitle: "Tester ses progrès & stabiliser",
      days: [
        {
          day: "Lundi",
          focus: "Push — PR Day",
          exercises: [
            { name: "Max pompes (1 série)", sets: "1 × max", rest: "2 min", tip: "Comparer avec semaine 1" },
            { name: "Pompes déclinées", sets: "4×10", rest: "45s", tip: "" },
            { name: "Dips sur chaise", sets: "4×12", rest: "45s", tip: "" },
          ],
        },
        {
          day: "Mardi",
          focus: "Pull — PR Day",
          exercises: [
            { name: "Max rowing sur table", sets: "1 × max", rest: "2 min", tip: "" },
            { name: "Superman dynamique", sets: "4×12", rest: "30s", tip: "" },
            { name: "Face pulls serviette", sets: "4×12", rest: "30s", tip: "" },
          ],
        },
        {
          day: "Mercredi",
          focus: "Core — PR Day",
          exercises: [
            { name: "Max planche", sets: "1 × max", rest: "2 min", tip: "Comparer avec semaine 1" },
            { name: "Hollow body hold", sets: "3×25s", rest: "30s", tip: "" },
            { name: "Dead bug", sets: "3×12", rest: "30s", tip: "" },
          ],
        },
        {
          day: "Jeudi",
          focus: "Full Upper — Fluidité",
          exercises: [
            { name: "Enchaînement fluide", sets: "4 rounds", rest: "30s entre rounds", tip: "Sans s'arrêter dans le round" },
            { name: "8 pompes + 8 rowing + 20s planche", sets: "", rest: "", tip: "" },
          ],
        },
        {
          day: "Vendredi",
          focus: "Récap & Célébration",
          exercises: [
            { name: "Exercices préférés du mois", sets: "Libre", rest: "Libre", tip: "Plaisir avant tout !" },
          ],
        },
        { day: "Samedi", focus: "Repos actif", exercises: [{ name: "Grande mobilité corps entier (debout)", sets: "10 min", rest: "—", tip: "Félicitez-vous du travail accompli" }] },
        { day: "Dimanche", focus: "Repos complet", exercises: [] },
      ],
    },
  ],
};

const focusColors = {
  "Push": "#f97316",
  "Pull": "#3b82f6",
  "Core": "#10b981",
  "Full": "#8b5cf6",
  "Repos": "#6b7280",
};

function getFocusColor(focus) {
  for (const key in focusColors) {
    if (focus.startsWith(key)) return focusColors[key];
  }
  return "#6b7280";
}

export default function App() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeDay, setActiveDay] = useState(null);

  const week = program.weeks[activeWeek];

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", background: "#0f0f13", color: "#e8e4d9" }}>
      {/* Header */}
      <div style={{ padding: "2rem 1.5rem 1rem", borderBottom: "1px solid #2a2a35" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b80", margin: "0 0 0.4rem" }}>
            Programme · 1 mois · 10–15 min/jour
          </p>
          <h1 style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 400, margin: 0, lineHeight: 1.1 }}>
            Callisthénie<br />
            <em style={{ color: "#f97316" }}>Haut du corps</em>
          </h1>
          <p style={{ fontSize: "0.75rem", color: "#6b6b80", marginTop: "0.5rem" }}>
            ⚠️ Aucun exercice en flexion de genou — adapté à votre douleur
          </p>
        </div>
      </div>

      {/* Week Tabs */}
      <div style={{ padding: "1rem 1.5rem 0", maxWidth: 600, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }}>
          {program.weeks.map((w, i) => (
            <button
              key={i}
              onClick={() => { setActiveWeek(i); setActiveDay(null); }}
              style={{
                background: activeWeek === i ? "#f97316" : "#1a1a22",
                color: activeWeek === i ? "#fff" : "#9090a8",
                border: "1px solid " + (activeWeek === i ? "#f97316" : "#2a2a35"),
                borderRadius: 8,
                padding: "0.6rem 0.3rem",
                cursor: "pointer",
                fontSize: "0.72rem",
                fontFamily: "inherit",
                transition: "all 0.2s",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: 600 }}>Sem. {w.number}</div>
              <div style={{ fontSize: "0.65rem", opacity: 0.8, marginTop: 2 }}>{w.theme}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Week intro */}
      <div style={{ padding: "1rem 1.5rem", maxWidth: 600, margin: "0 auto" }}>
        <div style={{ background: "#1a1a22", borderRadius: 10, padding: "0.8rem 1rem", borderLeft: "3px solid #f97316" }}>
          <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#f97316" }}>Semaine {week.number}</span>
          <p style={{ margin: "0.2rem 0 0", fontSize: "0.85rem", color: "#c0bdb5" }}>{week.subtitle}</p>
        </div>
      </div>

      {/* Days */}
      <div style={{ padding: "0 1.5rem 2rem", maxWidth: 600, margin: "0 auto" }}>
        {week.days.map((d, di) => {
          const color = getFocusColor(d.focus);
          const isOpen = activeDay === di;
          const isEmpty = d.exercises.length === 0;

          return (
            <div key={di} style={{ marginBottom: "0.6rem" }}>
              <button
                onClick={() => !isEmpty && setActiveDay(isOpen ? null : di)}
                style={{
                  width: "100%",
                  background: isOpen ? "#1e1e2a" : "#141419",
                  border: "1px solid " + (isOpen ? color : "#2a2a35"),
                  borderRadius: isOpen ? "10px 10px 0 0" : 10,
                  padding: "0.75rem 1rem",
                  cursor: isEmpty ? "default" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 0.2s",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: isEmpty ? "#3a3a45" : color, flexShrink: 0
                  }} />
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#e8e4d9" }}>{d.day}</span>
                    <span style={{ fontSize: "0.72rem", color: "#7070888", marginLeft: "0.5rem", color: "#707088" }}>·</span>
                    <span style={{ fontSize: "0.72rem", color: isEmpty ? "#4a4a58" : "#a0a0b8", marginLeft: "0.4rem" }}>{d.focus}</span>
                  </div>
                </div>
                {!isEmpty && (
                  <span style={{ color: color, fontSize: "0.7rem", fontFamily: "monospace" }}>
                    {isOpen ? "▲" : "▼"}
                  </span>
                )}
              </button>

              {isOpen && d.exercises.length > 0 && (
                <div style={{
                  background: "#1a1a25",
                  border: "1px solid " + color,
                  borderTop: "none",
                  borderRadius: "0 0 10px 10px",
                  overflow: "hidden",
                }}>
                  {d.exercises.map((ex, ei) => (
                    <div key={ei} style={{
                      padding: "0.75rem 1rem",
                      borderBottom: ei < d.exercises.length - 1 ? "1px solid #22222e" : "none",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "0.5rem",
                      alignItems: "start",
                    }}>
                      <div>
                        <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "#e8e4d9" }}>{ex.name}</div>
                        {ex.tip && (
                          <div style={{ fontSize: "0.68rem", color: "#6b6b7e", marginTop: "0.2rem", fontStyle: "italic" }}>
                            💡 {ex.tip}
                          </div>
                        )}
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "0.8rem", fontWeight: 600, color: color, whiteSpace: "nowrap" }}>{ex.sets}</div>
                        {ex.rest && ex.rest !== "—" && ex.rest !== "" && (
                          <div style={{ fontSize: "0.65rem", color: "#5a5a6e", marginTop: "0.15rem" }}>repos {ex.rest}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div style={{ padding: "0 1.5rem 2rem", maxWidth: 600, margin: "0 auto" }}>
        <div style={{ background: "#141419", border: "1px solid #2a2a35", borderRadius: 10, padding: "0.9rem 1rem" }}>
          <p style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#5a5a6e", margin: "0 0 0.6rem" }}>Légende</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {Object.entries(focusColors).map(([k, v]) => (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: v }} />
                <span style={{ fontSize: "0.72rem", color: "#8080a0" }}>{k}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.68rem", color: "#5a5a6e", margin: "0.75rem 0 0", lineHeight: 1.5 }}>
            Matériel nécessaire : chaise solide, table basse, serviette. Aucun équipement de gym requis.
          </p>
        </div>
      </div>
    </div>
  );
}
