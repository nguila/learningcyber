import { usePageData } from "@/hooks/usePageData";
import BlockPage from "@/components/BlockPage";
import { Loader2 } from "lucide-react";

interface DatabasePageProps {
  slug: string;
}

export default function DatabasePage({ slug }: DatabasePageProps) {
  const { data, isLoading, error } = usePageData(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background grid-pattern flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background grid-pattern flex items-center justify-center">
        <p className="text-muted-foreground">Conteúdo não encontrado.</p>
      </div>
    );
  }

  return <BlockPage {...data} />;
}
