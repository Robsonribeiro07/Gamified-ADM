'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-500 rounded-full p-4">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-blue-500 rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-blue-400 rounded-full p-6">
                <Search size={64} className="text-blue-200" />
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-300 text-blue-700 rounded-full px-3 py-1 font-bold text-lg">
                404
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">
            Página Não Encontrada
          </h1>

          <p className="text-blue-200 mb-8">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>

          <div className="space-y-4">
            <Button
              asChild
              className="w-full bg-yellow-300 hover:bg-yellow-400 text-blue-700"
            >
              <Link href="/">
                <Home className="mr-2" size={16} />
                Voltar para a Página Inicial
              </Link>
            </Button>

            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="w-full border-blue-300  hover:bg-blue-400"
            >
              <ArrowLeft className="mr-2" size={16} />
              Voltar para a Página Anterior
            </Button>
          </div>

          <div className="mt-8 bg-blue-400 rounded-lg p-4 text-left">
            <h3 className="text-white font-medium mb-2">Você pode tentar:</h3>
            <ul className="text-blue-100 text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">•</span>
                Verificar se o endereço digitado está correto
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">•</span>
                Acessar nossa página de{' '}
                <Link href="/login" className="text-yellow-300 hover:underline">
                  login
                </Link>{' '}
                ou{' '}
                <Link
                  href="/signup"
                  className="text-yellow-300 hover:underline"
                >
                  cadastro
                </Link>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">•</span>
                Entrar em contato com o suporte se o problema persistir
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
