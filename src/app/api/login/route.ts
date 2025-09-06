import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // importa il tuo client Prisma
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 1. Controllo se l'utente esiste
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Utente non trovato", user: null },
        { status: 200 }
      );
    }

    // 2. Verifica password
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    const isPasswordValid = password === user.password; // rimuovi questa linea e decommenta la precedente in produzione
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Password errata", user: null },
        { status: 200 }
      );
    }

    // 3. Successo → puoi creare una sessione/JWT o restituire i dati
    return NextResponse.json(
      { message: "Login effettuato", user },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: "Errore interno" }, { status: 500 });
  }
}
