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
