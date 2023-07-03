import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – SpainRP'
    }
  },
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
      <path
          fill="#000000"
          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm4.692 14.05h-3.03v1.3c0 .334-.15.66-.474.896a1.218 1.218 0 0 1-.876.357c-.373 0-.712-.136-.964-.357a1.392 1.392 0 0 1-.474-.896v-1.3h-2.782c-.117 0-.234-.037-.32-.117a.425.425 0 0 1-.166-.32V8.232c0-.235.093-.452.26-.618a.907.907 0 0 1 .633-.26h6.286c.117 0 .234.037.32.117a.425.425 0 0 1 .166.32v7.62c0 .235-.093.452-.26.618a.907.907 0 0 1-.633.26zm-2.578-8.35v5.24h-1.456c-.116 0-.233-.037-.32-.117a.425.425 0 0 1-.165-.32V7.52c0-.235.093-.452.26-.618a.907.907 0 0 1 .633-.26h1.457z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        SpainRP Wiki
      </span>
    </>
  ),

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://wiki.spainrp.me' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'SpainRP'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'SpainRP Wiki'}
        />
      </>
    )
  },
  // Links
  project: {
    link: 'https://github.com/SpainRPServer/docsv2',
  },
  chat: {
    link: 'https://discord.gg/kph5v7VYWZ',
  },
  docsRepositoryBase: 'https://github.com/SpainRPServer/docsv2',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://wiki.spainrp.me" target="_blank">
          SpainRP
        </a>
        .
      </span>
    )
  },
  banner: {
      key: 'Survival',
      text: (
        <a href="https://wiki.spainrp.me/survival" target="_blank">
          🎉 El servidor survival ya esta disponible. Mas informacion →
        </a>
      )
    }
  }





export default config


