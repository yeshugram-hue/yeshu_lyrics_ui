
import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server';
const supabaseUrl = process.env.SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
    const params = await ctx.params
    try {
        const songResult = await supabase.from("lyrics").select("*").eq("id", params.id);
        return NextResponse.json(
            { data: songResult },
            { status: 200 }
        );
    } catch (err) {
        console.log("Err", err)
    }
}

