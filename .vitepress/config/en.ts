import {type DefaultTheme, defineConfig} from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: "A Toy Based on Spring Boot & grpc-java",

    themeConfig: {
        nav: nav(),
        sidebar: {
            '/en/guide/': {base: '/en/guide/', items: sidebarGuide()}
        },
        editLink: {
            pattern: 'https://github.com/gsvc-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Guide',
            link: '/en/guide/what-is-gsvc',
            activeMatch: '/en/guide/'
        },
        {
            text: '3.4.x',
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/ninggf/gsvc/blob/main/CHANGELOG.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/ninggf/gsvc/blob/main/CHANGELOG.md'
                }
            ]
        }
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                {text: 'What is Gsvc？', link: 'what-is-gsvc'},
                {text: 'Getting Started', link: 'getting-started'}
            ]
        }
    ]
}
