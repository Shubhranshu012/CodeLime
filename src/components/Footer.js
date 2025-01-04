import Image from 'next/image'
import React from 'react'

export default function footer() {
  return (
    <div class="mt-[5vh] text-center mb-[5vh]">
      <a href="/" class="flex items-center justify-center mb-5 text-2xl font-semibold text-[#FFFCE1]">
        <div class="h-10 mr-3 sm:h-9 w-8 text-[#FFFCE1]">
          <Image src="/Logo1.png" alt="" width={10} height={10} layout="responsive" />
        </div>
        CodeLime
      </a>

      <span class="block text-sm text-center text-gray-500">© 2024-2026 CodeLime™. All Rights Reserved.
        Built with &nbsp;
        <a href="https://nextjs.org" class="text-purple-600 hover:underline">NextJs </a> and
        <a href="https://tailwindcss.com" class="text-purple-600 hover:underline"> Tailwind CSS</a>.
      </span>
    </div>
  )
}
