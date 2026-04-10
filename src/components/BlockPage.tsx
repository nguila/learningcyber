import { motion } from "framer-motion";
import { LucideIcon, ChevronRight, CheckCircle2, Lightbulb, BookOpen, AlertTriangle, ExternalLink, Wrench as WrenchIcon, Globe, Compass, Newspaper, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export interface ResourceLink {
  name: string;
  url: string;
  desc: string;
}

export interface NewsLink {
  title: string;
  url: string;
  source: string;
}

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
  tools?: ResourceLink[];
  websites?: ResourceLink[];
  relatedAreas?: { title: string; url: string; desc: string }[];
  newsLinks?: NewsLink[];
}


export default function BlockPage({
  title, subtitle, icon: Icon, description, audience, connections, subtopics, ethicsNote,
  tools, websites, relatedAreas, newsLinks
}: BlockPageProps) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const pageKey = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const { completed, toggle, count } = useProgress(pageKey, subtopics.length);

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
            
            {/* Progress bar */}
            <div className="mb-6 rounded-lg bg-card cyber-border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-foreground">📊 Progresso</span>
                <span className="text-sm font-mono text-primary">{count}/{subtopics.length} concluídos</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${subtopics.length > 0 ? (count / subtopics.length) * 100 : 0}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

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
          const isDone = completed[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-xl bg-card cyber-border overflow-hidden card-hover ${isDone ? 'border-primary/30' : ''}`}
            >
              <div className="flex items-center">
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="flex-1 flex items-center gap-3 p-4 sm:p-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <sub.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className={`flex-1 font-semibold ${isDone ? 'text-primary' : 'text-foreground'}`}>{sub.title}</span>
                  <ChevronRight className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                </button>
                <button
                  onClick={() => toggle(i)}
                  className={`mr-4 p-2 rounded-lg transition-all ${isDone ? 'bg-primary/20 text-primary' : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'}`}
                  title={isDone ? 'Marcar como não concluído' : 'Marcar como concluído'}
                >
                  <Check className="h-4 w-4" />
                </button>
              </div>

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-8">
          <div className="rounded-xl bg-destructive/5 border border-destructive/20 p-5">
            <h3 className="text-sm font-bold text-destructive mb-2">⚠️ Nota Ética</h3>
            <p className="text-sm text-muted-foreground">{ethicsNote}</p>
          </div>
        </div>
      )}

      {/* News Links */}
      {newsLinks && newsLinks.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Newspaper className="h-6 w-6 text-primary" />
              Notícias & Leitura Recomendada
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {newsLinks.map((news, i) => (
                <a
                  key={i}
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-card cyber-border p-4 card-hover group flex items-start gap-3"
                >
                  <Newspaper className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">{news.title}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{news.source}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Resources Section */}
      {(tools || websites || relatedAreas) && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 space-y-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Compass className="h-6 w-6 text-primary" />
              Recursos & Ferramentas Recomendadas
            </h2>

            {tools && tools.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <WrenchIcon className="h-4 w-4" />
                  Ferramentas
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-card cyber-border p-4 card-hover group flex items-start gap-3"
                    >
                      <WrenchIcon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{tool.name}</span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{tool.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {websites && websites.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Sites & Referências
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {websites.map((site) => (
                    <a
                      key={site.name}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-card cyber-border p-4 card-hover group flex items-start gap-3"
                    >
                      <Globe className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{site.name}</span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{site.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {relatedAreas && relatedAreas.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Compass className="h-4 w-4" />
                  Áreas Relacionadas
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {relatedAreas.map((area) => (
                    <Link
                      key={area.title}
                      to={area.url}
                      className="rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 cyber-border p-4 card-hover group"
                    >
                      <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{area.title}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{area.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
