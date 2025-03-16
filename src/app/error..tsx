'use client'

import Link from 'next/link'
import { AlertOctagon, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ErrorPage({
  error,
}: {
  error?: Error & { digest?: string }
}) {
  const errorMessage = error?.message || 'Ocorreu um erro inesperado'
  const errorDigest = error?.digest

  return (
    <div className="min-h-[50vh] bg-blue-500 rounded-lg shadow-lg p-8 text-center flex flex-col items-center justify-center m-4">
      <div className="flex justify-center mb-6">
        <div className="bg-yellow-300 rounded-full p-4">
          <AlertOctagon size={48} className="text-blue-700" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-white mb-2">Erro na Página</h1>

      <p className="text-blue-200 mb-8 max-w-md">
        Ocorreu um erro ao carregar esta página. Você pode tentar novamente ou
        voltar para a página inicial.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          onClick={() => window.location.reload()}
          className="bg-yellow-300 hover:bg-yellow-400 text-blue-700"
        >
          <RefreshCw className="mr-2" size={16} />
          Tentar Novamente
        </Button>

        <Button
          asChild
          variant="outline"
          className="border-blue-300 hover:bg-blue-400"
        >
          <Link href="/dashboard">
            <Home className="mr-2 " size={16} />
            Página Inicial
          </Link>
        </Button>
      </div>

      {errorDigest && (
        <p className="mt-8 text-blue-200 text-sm">
          Código do erro:{' '}
          <span className="font-mono bg-blue-600 px-2 py-1 rounded">
            {errorDigest}
          </span>
        </p>
      )}
    </div>
  )
}
