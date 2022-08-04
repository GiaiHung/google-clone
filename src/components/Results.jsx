import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactHtmlParser from 'html-react-parser'
import { useResultContext } from '../context/resultProvider'
import Loading from './Loading'
import ReactPlayer from 'react-player'

function Results() {
  const { getResults, loading, results, searchTerm } = useResultContext()
  const { pathname } = useLocation()

  useEffect(() => {
    if (searchTerm) {
      if (pathname === '/search') {
        getResults(`search/q=${searchTerm}&num=40`)
      } else if (pathname === '/images') {
        getResults(`image/q=${searchTerm}`)
      } else if (pathname === '/news') {
        getResults(`news/q=${searchTerm}`)
      } else if (pathname === '/video') {
        getResults(`video/q=${searchTerm}`)
      }
    }
  }, [searchTerm, pathname])
  console.log(results)

  if (loading) return <Loading />

  switch (pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-5 md:px-44">
          {results?.results?.map(({ link, title, description }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} rel="norefferer" target="_blank">
                <p className="text-sm">{link.length > 30 ? `${link.substring(0, 30)}...` : link}</p>
                <p className="text-lg text-blue-700 dark:text-blue-300 hover:underline">{title}</p>
              </a>
              <p className="text-md text-gray-900 dark:text-gray-200 break-words">{description}</p>
            </div>
          ))}
        </div>
      )
    case '/news':
      return (
        <div className="flex flex-wrap justify-between space-y-5 md:px-44">
          {results?.entries.length > 0 &&
            results?.entries?.map(({ id, link, title, published, summary, source }, index) => (
              <div key={id} className="md:w-2/5 w-full">
                <a href={link} rel="norefferer" target="_blank">
                  {/* Wrap around a div to fix warning from htmlreact parser */}
                  <div>
                    <p className="text-sm font-bold">{source.title}</p>
                    <p className="text-lg text-blue-700 dark:text-blue-300 hover:underline">
                      {title}
                    </p>
                    <span className="text-md text-gray-900 dark:text-gray-200 break-words">
                      {ReactHtmlParser(summary)}
                    </span>
                    <p className="text-md dark:text-slate-500 text-gray-900 text-gray-900 dark:text-gray-200 break-words">
                      {published}
                    </p>
                  </div>
                </a>
              </div>
            ))}
        </div>
      )
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a className="p-3 md:p-5" href={href} target="_blank" rel="norefferer" key={index}>
              <img
                src={image.src}
                alt={title}
                className="w-48 h-48 m-auto object-cover"
                loading="lazy"
              />
              <p className="text-sm gray-900 break-words mt-5 dark:gray-200 hover:underline">
                {title}
              </p>
            </a>
          ))}
        </div>
      )
    case '/video':
      return (
        <div className="flex flex-wrap justify-between gap-10 px-0 md:px-20">
          {results?.results?.map(({ additional_links, link, title, description }, index) => (
            <div key={index} className="flex flex-col gap-4 w-96">
              <a href={link} rel="noreferrer" target="_blank">
                {additional_links?.[0].href.includes('youtube') ? (
                  <ReactPlayer
                    url={additional_links?.[0].href}
                    controls
                    width="340px"
                    height="200px"
                  />
                ) : (
                  <img
                    src="https://static.thenounproject.com/png/3255444-200.png"
                    alt="no video"
                    style={{ width: '355px', height: '200px' }}
                  />
                )}
                <p className="text-lg text-gray-900 dark:text-gray-200 font-bold">{title}</p>
                <p className="text-sm text-gray-900 dark:text-gray-200 font-bold">
                  {description.length > 30 ? `${description.substring(0, 30)}...` : description}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    default:
      throw new Error('Unvalid type')
  }
}

export default Results
