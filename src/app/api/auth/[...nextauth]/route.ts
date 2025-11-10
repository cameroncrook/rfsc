import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/lib/prisma';
import * as bcrypt from 'bcrypt';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials?: { email?: string; password?: string } | undefined, req?: any) {
                if (!credentials?.email || !credentials?.password) return null;

                const coach = await prisma.coach.findUnique({
                    where: { email: credentials.email },
                });

                if (!coach || !coach.password) {
                    return null;
                }

                const isValid = await bcrypt.compare(credentials.password, coach.password);
                if (!isValid) {
                    return null;
                }

                return { id: String(coach.coach_id), name: coach.first_name, email: coach.email };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/coach/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST };