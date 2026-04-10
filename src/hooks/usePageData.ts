import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { getIcon } from "@/lib/iconMap";
import type { Subtopic, ResourceLink, NewsLink } from "@/components/BlockPage";

interface PageData {
  title: string;
  subtitle: string;
  icon: ReturnType<typeof getIcon>;
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

export function usePageData(slug: string) {
  return useQuery<PageData | null>({
    queryKey: ["page", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      if (!data) return null;

      const subtopics = (data.subtopics as any[]).map((s: any) => ({
        ...s,
        icon: getIcon(s.icon),
      }));

      return {
        title: data.title,
        subtitle: data.subtitle,
        icon: getIcon(data.icon_name),
        description: data.description,
        audience: data.audience,
        connections: data.connections,
        subtopics,
        ethicsNote: data.ethics_note ?? undefined,
        tools: (data.tools as unknown as ResourceLink[] | null) ?? undefined,
        websites: (data.websites as unknown as ResourceLink[] | null) ?? undefined,
        relatedAreas: (data.related_areas as unknown as any[] | null) ?? undefined,
        newsLinks: (data.news_links as unknown as NewsLink[] | null) ?? undefined,
      };
    },
  });
}
