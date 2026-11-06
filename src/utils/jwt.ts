import jwt, { Secret, SignOptions } from 'jsonwebtoken'

export type JwtPayload = {
  id: string
  email: string
}

export const signJwt = (payload: JwtPayload, expiresIn?: SignOptions['expiresIn']) => {
  const secret = process.env.JWT_SECRET

  if (!secret) {
    throw new Error('JWT_SECRET não configurado')
  }

  const options: SignOptions | undefined = expiresIn
    ? { expiresIn }
    : undefined

  return options
    ? jwt.sign(payload, secret, options)
    : jwt.sign(payload, secret)
}

export const verifyJwt = (token: string) => {
  const secret: Secret = process.env.JWT_SECRET as unknown as Secret
  return jwt.verify(token,secret) as JwtPayload
}