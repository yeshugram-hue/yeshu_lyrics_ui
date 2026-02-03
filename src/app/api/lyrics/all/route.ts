
import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server';
const supabaseUrl = process.env.SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET() {
    try {
        const songResult = await supabase.from("lyrics").select("*");
        return NextResponse.json(
            { data: songResult },
            { status: 200 }
        );
    } catch (err) {
        console.log("Err")
    }
}

