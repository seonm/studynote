import React from 'react'

import { Helmet } from 'react-helmet'
import favicon from '../assets/img/favicon.ico'

const Meta = (props) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{props.title}</title>
      {/* SEO 태그 */}
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:url" content={props.url} />

      <link rel="shortcut icon" href={props.image} type="image/png" />
      <link rel="icon" href={props.image} type="image/png" />

      {/* 추가적으로 적용해야할 외부 js나 css도 여기서 명시할 수 있다. */}

    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'React 연습문제',
  description: 'React.js 연습문제',
  keywords: 'react',
  author: '정선미',
  image: favicon,
  url: window.location.href
}

export default Meta
