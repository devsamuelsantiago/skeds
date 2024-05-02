import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  async function main() {
    const body = await request.json();

    const { name, email, phone, password } = body;

    await prisma.organization.create({
      data: {
        name,
        email,
        phone,
        password,
      },
    });

    const orgs = await prisma.organization.findMany();

    console.log(orgs);
    return Response.json({ data: orgs });
}

main()
.then(async () => {
    await prisma.$disconnect();
    
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
