import jwt, { Secret, SignOptions } from 'jsonwebtoken'

export type JwtPayload = {
  id: string
  email: string
}

export const signJwt = (payload: JwtPayload, expiresIn?: string) => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET não configurado')
  }

  const options: SignOptions = expiresIn
    ? {
        expiresIn: expiresIn as NonNullable<SignOptions['expiresIn']>,
      }
    : {}

  return jwt.sign(payload, secret as Secret, options)
}