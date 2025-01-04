import React from 'react'

export default function footer() {
  return (
    <div class="mt-[5vh] text-center mb-[5vh]">
      <a href="/Temp" class="flex items-center justify-center mb-5 text-2xl font-semibold text-[#FFFCE1]">
        <img src="Logo1.png" class="h-12 mr-3 sm:h-9 text-[#FFFCE1]" alt="Landwind Logo" />
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
