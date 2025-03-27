import {defineConfig} from 'vitepress'
import {search as zhSearch} from './zh'

export const shared = defineConfig({
    title: "Gsvc",
    description: "A Toy Based on Spring Boot & grpc-java",
    base: "/",
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    markdown: {
        math: true
    },
    rewrites: {
        'cn/:rest*': ':rest*'
    },
    themeConfig: {
        search: {
            provider: 'local',
            options: {
                locales: {
                    ...zhSearch
                }
            }
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/ninggf/gsvc'}
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Apzda Team'
        }
    },
    sitemap: {
        hostname: 'https://gsvc.apzda.com',
        transformItems(items) {
            // @ts-ignore
            return items.filter((item) => !item.url.includes('migration'))
        }
    }
})
