// @ts-check
import {defineConfig, passthroughImageService} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from "starlight-theme-nova";
import starlightScrollToTop from "starlight-scroll-to-top";

// https://astro.build/config
export default defineConfig({
    site: "https://jamctl.github.io",
    image: {
        service: passthroughImageService(),
    },
    integrations: [
        starlight({
            title: 'Jamctl Docs',
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/jamctl/jamctl'}],
            sidebar: [
                {
                    label: '使用',
                    autogenerate: {directory: 'start'},
                },
                {
                    label: '关于',
                    autogenerate: {directory: 'about'},
                },
            ],
            plugins: [starlightThemeNova(), starlightScrollToTop({
                position: 'right',
                tooltipText: '返回顶部',
                showTooltip: true,
                smoothScroll: true,
                threshold: 20,
                svgPath: 'm4.5 15.75 7.5-7.5 7.5 7.5',
                svgStrokeWidth: 1,
                borderRadius: '50',
            })],
            expressiveCode: true
        }),
    ],
});
