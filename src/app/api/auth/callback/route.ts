import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

const ADMIN_EMAIL = "shriradhemaacharitablesociety@gmail.com";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createServerSupabaseClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const userEmail = user.email?.toLowerCase().trim();

        // Create donor profile for non-admin Google sign-in users
        if (userEmail !== ADMIN_EMAIL) {
          const { data: existingProfile } = await supabase
            .from("donor_profiles")
            .select("id")
            .eq("id", user.id)
            .single();

          if (!existingProfile) {
            await supabase.from("donor_profiles").insert({
              id: user.id,
              full_name: user.user_metadata?.full_name || user.user_metadata?.name || "Donor",
              phone: null,
              pan: null,
            });
          }
        }

        // Route: admin email → admin, everyone else → donor
        if (userEmail === ADMIN_EMAIL) {
          return NextResponse.redirect(`${origin}/admin`);
        } else {
          return NextResponse.redirect(`${origin}/donor`);
        }
      }
    }
  }

  return NextResponse.redirect(`${origin}/login`);
}
