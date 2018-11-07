import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Logo from '../components/logo'

const IndexPage = () => (
  <Layout>
    <div className="font-sans flex flex-col">
      <div className="min-h-screen flex items-center justify-center leading-tight p-6 pb-16">
        <div>
          <div className="mx-auto w-64">
            <Link to="/"><Logo /></Link>
          </div>

          <div>
            <a class="mt-6 mx-auto sm:mx-2 max-w-xs rounded-full text-center leading-none font-bold no-underline block px-12 py-3 border-2 text-grey-darkest hover:bg-grey-lightest" href="https://www.meetup.com/greaterhartfordpython/">Meetup</a>
            <a class="mt-6 mx-auto sm:mx-2 max-w-xs rounded-full text-center leading-none font-bold no-underline block px-12 py-3 border-2 text-grey-darkest hover:bg-grey-lightest" href="https://github.com/greaterhartfordpython">GitHub</a>
            <Link
                className="mt-6 mx-auto sm:mx-2 max-w-xs rounded-full text-center leading-none font-bold no-underline block px-12 py-3 border-2 text-grey-darkest hover:bg-grey-lightest"
                to="/code-of-conduct/"
              >
                Code of Conduct
              </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
