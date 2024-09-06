<template>
	<div class="absolute inset-0 flex items-center justify-center z-50">
		<div class="absolute inset-0 bg-black opacity-50"></div>
		<div
			class="relative z-10 text-center flex flex-col items-center bg-white p-10 rounded-lg shadow-xl"
		>
			<svg
				class="animate-spin h-8 w-8 text-gray-600 mb-2"
				fill="none"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					fill="currentColor"
				></path>
			</svg>
			<p class="text-gray-600">
				Пожалуйста, подождите, данные загружаются...
			</p>
		</div>
	</div>
</template>
