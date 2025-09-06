import { PrismaClient, Prisma } from "../db/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export async function main() {
  console.log("🌱 Inizio seeding del database...");

  // Hash della password
  const hashedPassword = await bcrypt.hash("password123", 10);

  const userData: Prisma.UserCreateInput[] = [
    {
      username: "mario_rossi",
      email: "mario.rossi@example.com",
      password: hashedPassword,
      name: "Mario Rossi",
      emailVerified: true,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      posts: {
        create: [
          {
            title: "Benvenuti nel mio blog!",
            content:
              "Questo è il mio primo post. Sono molto emozionato di condividere i miei pensieri con voi. Spero che troverete interessanti i contenuti che pubblicherò.",
            published: true,
          },
          {
            title: "Tutorial: Come iniziare con TypeScript",
            content:
              "TypeScript sta diventando sempre più popolare. Ecco una guida per principianti su come iniziare, configurare il progetto e sfruttare al meglio il type system.",
            published: true,
          },
        ],
      },
    },
    {
      username: "giulia_bianchi",
      email: "giulia.bianchi@example.com",
      password: hashedPassword,
      name: "Giulia Bianchi",
      emailVerified: true,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      posts: {
        create: [
          {
            title: "I migliori framework JavaScript del 2025",
            content:
              "In questo articolo esploriamo i framework JavaScript più popolari di quest'anno. React continua a dominare, ma Vue e Svelte stanno guadagnando terreno.",
            published: true,
          },
          {
            title: "Guida completa a Prisma ORM",
            content:
              "Prisma è uno degli ORM più potenti per Node.js. In questa guida vedremo come configurarlo, usarlo con TypeScript e le migliori pratiche.",
            published: true,
          },
          {
            title: "Database design: le migliori pratiche",
            content:
              "Progettare un database efficiente è fondamentale. In questo articolo parliamo di normalizzazione, indici, relazioni e performance.",
            published: true,
          },
        ],
      },
    },
    {
      username: "luca_ferrari",
      email: "luca.ferrari@example.com",
      password: hashedPassword,
      name: "Luca Ferrari",
      emailVerified: false,
      posts: {
        create: [
          {
            title: "Le mie ricette italiane preferite",
            content:
              "Condivido con voi alcune delle ricette tradizionali italiane che amo di più. Dalla carbonara ai ragù, passando per i dolci come il tiramisù.",
            published: false,
          },
        ],
      },
    },
    {
      username: "anna_verde",
      email: "anna.verde@example.com",
      password: hashedPassword,
      name: "Anna Verde",
      emailVerified: true,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      posts: {
        create: [
          {
            title: "Viaggio in Toscana: i luoghi da non perdere",
            content:
              "La Toscana è una regione meravigliosa. In questo post vi racconto i luoghi che mi hanno colpito di più durante il mio ultimo viaggio.",
            published: true,
          },
          {
            title: "La mia routine mattutina",
            content:
              "Vi racconto come organizzo le mie mattinate per essere più produttivo. Meditazione, esercizio fisico e una buona colazione sono la chiave.",
            published: false,
          },
        ],
      },
    },
    {
      username: "admin",
      email: "admin@admin.com",
      password: hashedPassword,
      name: "Amministratore",
      emailVerified: true,
      posts: {
        create: [
          {
            title: "Welcome to our platform",
            content:
              "This is an admin post to welcome all new users to our amazing platform. Enjoy your stay!",
            published: true,
          },
        ],
      },
    },
  ];

  // Crea gli utenti con i loro post
  for (const u of userData) {
    const user = await prisma.user.create({ data: u });
    console.log(`👤 Creato utente: ${user.name} (${user.email})`);
  }
  console.log("✅ Seeding completato con successo!");
}

main();
