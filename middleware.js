import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const regexHaveCokie = /login|about/g
const cookie = request.cookies.get('next-auth.session-token')?.value
if(cookie){
  if (regexHaveCokie.test(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
else{
  if (request.nextUrl.pathname.includes('/myorders')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
    


}
// export const config = {
//     matcher: '/about',
//   }