-- Donor profiles (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.donor_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  phone TEXT,
  pan TEXT,
  address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Donations
CREATE TABLE IF NOT EXISTS public.donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id UUID REFERENCES public.donor_profiles(id) ON DELETE SET NULL,
  amount INTEGER NOT NULL,
  seva_type TEXT DEFAULT 'general',
  frequency TEXT DEFAULT 'one-time' CHECK (frequency IN ('one-time', 'monthly')),
  payment_id TEXT,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  receipt_number TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Generate receipt number on insert
CREATE OR REPLACE FUNCTION generate_receipt_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.receipt_number := 'SRMCS-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(CAST(FLOOR(RANDOM() * 99999 + 1) AS TEXT), 5, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER set_receipt_number
  BEFORE INSERT ON public.donations
  FOR EACH ROW
  WHEN (NEW.receipt_number IS NULL)
  EXECUTE FUNCTION generate_receipt_number();

-- Row Level Security
ALTER TABLE public.donor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Donors can read/update their own profile
CREATE POLICY "Donors can view own profile" ON public.donor_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Donors can update own profile" ON public.donor_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Donors can insert own profile" ON public.donor_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Donors can view their own donations
CREATE POLICY "Donors can view own donations" ON public.donations
  FOR SELECT USING (auth.uid() = donor_id);

-- Service role can do everything (for admin)
CREATE POLICY "Service role full access profiles" ON public.donor_profiles
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access donations" ON public.donations
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================================
-- Subscribers
-- ============================================================
CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ
);

ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Anyone can subscribe (insert only)
CREATE POLICY "Public can subscribe" ON public.subscribers
  FOR INSERT WITH CHECK (true);

-- Service role full access
CREATE POLICY "Service role full access subscribers" ON public.subscribers
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================================
-- Contact messages
-- ============================================================
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Anyone can send a message (insert only)
CREATE POLICY "Public can send messages" ON public.messages
  FOR INSERT WITH CHECK (true);

-- Service role full access
CREATE POLICY "Service role full access messages" ON public.messages
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================================
-- Blog posts
-- ============================================================
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  title_hi TEXT,
  category TEXT,
  content TEXT,
  excerpt TEXT,
  author TEXT DEFAULT 'Society Admin',
  featured BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  read_time TEXT DEFAULT '3 min',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read published posts
CREATE POLICY "Public can read published posts" ON public.blog_posts
  FOR SELECT USING (status = 'published');

-- Service role full access
CREATE POLICY "Service role full access blog_posts" ON public.blog_posts
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================================
-- Events
-- ============================================================
CREATE TABLE IF NOT EXISTS public.events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL,
  type_label TEXT NOT NULL,
  title TEXT NOT NULL,
  title_hi TEXT,
  date TEXT NOT NULL,
  time TEXT,
  location TEXT NOT NULL,
  address TEXT,
  description TEXT,
  description_hi TEXT,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'completed')),
  write_up TEXT,
  write_up_hi TEXT,
  attendees INTEGER,
  completed_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Public can read events
CREATE POLICY "Public can read events" ON public.events
  FOR SELECT USING (true);

-- Service role full access
CREATE POLICY "Service role full access events" ON public.events
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================================
-- Gallery images
-- ============================================================
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  category TEXT DEFAULT 'events',
  caption TEXT,
  caption_hi TEXT,
  event_id UUID REFERENCES public.events(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Public can view gallery
CREATE POLICY "Public can view gallery" ON public.gallery
  FOR SELECT USING (true);

-- Service role full access
CREATE POLICY "Service role full access gallery" ON public.gallery
  FOR ALL USING (auth.role() = 'service_role');
