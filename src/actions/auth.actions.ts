'use server'

import { prisma } from '@/db/prisma'
import bcrypt from 'bcryptjs'
import { logEvent } from '@/utils/sentry'
import { signAuthToken, setAuthCookie } from '@/lib/auth'

// Register new user
export async function registerUser() {
    
}