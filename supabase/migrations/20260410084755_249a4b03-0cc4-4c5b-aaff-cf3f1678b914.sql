
CREATE TABLE public.pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  description TEXT NOT NULL,
  audience TEXT NOT NULL,
  connections TEXT NOT NULL,
  subtopics JSONB NOT NULL DEFAULT '[]'::jsonb,
  ethics_note TEXT,
  tools JSONB DEFAULT '[]'::jsonb,
  websites JSONB DEFAULT '[]'::jsonb,
  related_areas JSONB DEFAULT '[]'::jsonb,
  news_links JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Pages are publicly readable"
  ON public.pages FOR SELECT
  USING (true);

CREATE INDEX idx_pages_slug ON public.pages (slug);
