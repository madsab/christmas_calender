/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		colors: {
    			primary: '#590012',
    			burgundy: '#86022A',
    			secondary: '#FCEBE1',
    			accent: '#456759'
    		},

    		animation: {
    			'flip': 'flip 0.5s linear',
    			'flip-reverse': 'flip-reverse 0.5s linear'
    		},
    		keyframes: {
    			flip: {
    				'0%': {
    					transform: 'rotateY(0deg)'
    				},
    				'100%': {
    					transform: 'rotateY(180deg)'
    				}
    			},
    			'flip-reverse': {
    				'0%': {
    					transform: 'rotateY(180deg)'
    				},
    				'100%': {
    					transform: 'rotateY(0deg)'
    				}
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
