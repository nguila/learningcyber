import { motion } from "framer-motion";
import { LucideIcon, ChevronRight, CheckCircle2, Lightbulb, BookOpen, AlertTriangle } from "lucide-react";
import { useState } from "react";

export interface Subtopic {
  title: string;
  icon: LucideIcon;
  explanation: string;
  importance: string;
  realExample: string;
  practicalTask: string;
  bestPractices: string[];
}

interface BlockPageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  audience: string;
  connections: string;
  subtopics: Subtopic[];
  ethicsNote?: string;
}

export default function BlockPage({
  title, subtitle, icon: Icon, description, audience, connections, subtopics, ethicsNote
}: BlockPageProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background grid-pattern">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 cyber-gradient opacity-50" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/10 cyber-border">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
                <p className="text-primary font-mono text-sm">{subtitle}</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-3xl text-base leading-relaxed mb-6">{description}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-card cyber-border p-4">
                <h3 className="text-sm font-semibold text-primary mb-1">👥 Para quem?</h3>
                <p className="text-sm text-muted-foreground">{audience}</p>
              </div>
              <div className="rounded-lg bg-card cyber-border p-4">
                <h3 className="text-sm font-semibold text-primary mb-1">🔗 Ligações</h3>
                <p className="text-sm text-muted-foreground">{connections}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtopics */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-4">
        {subtopics.map((sub, i) => {
          const isOpen = expanded === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl bg-card cyber-border overflow-hidden card-hover"
            >
              <button
                onClick={() => setExpanded(isOpen ? null : i)}
                className="w-full flex items-center gap-3 p-4 sm:p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <sub.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="flex-1 font-semibold text-foreground">{sub.title}</span>
                <ChevronRight className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-90' : ''}`} />
              </button>

              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-4 sm:px-5 pb-5 space-y-4 border-t border-border/50"
                >
                  <div className="pt-4">
                    <div className="flex items-start gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">Explicação Simples</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{sub.explanation}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mb-3">
                      <AlertTriangle className="h-4 w-4 text-accent mt-1 shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">Porque é importante?</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{sub.importance}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mb-3">
                      <Lightbulb className="h-4 w-4 text-yellow-500 mt-1 shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">Exemplo do Mundo Real</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{sub.realExample}</p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-primary/5 cyber-border p-4 mb-3">
                      <h4 className="text-sm font-semibold text-primary mb-1">🛠️ Tarefa Prática para Iniciantes</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{sub.practicalTask}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">✅ Boas Práticas</h4>
                      <ul className="space-y-1.5">
                        {sub.bestPractices.map((bp, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {ethicsNote && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
          <div className="rounded-xl bg-destructive/5 border border-destructive/20 p-5">
            <h3 className="text-sm font-bold text-destructive mb-2">⚠️ Nota Ética</h3>
            <p className="text-sm text-muted-foreground">{ethicsNote}</p>
          </div>
        </div>
      )}
    </div>
  );
}
