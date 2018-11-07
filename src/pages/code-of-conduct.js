import React from 'react'
import { Link } from 'gatsby'
import Logo from '../components/logo'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="font-sans flex flex-col">
      <div className="min-h-screen flex items-center justify-center leading-tight p-6 pb-16">
        <div>
          <div className="mx-auto w-64">
            <Link to="/"><Logo /></Link>
          </div>

          <div className="max-w-md">
            <p className="text-lg leading-normal mb-4">
              Greater Hartford Python Group is dedicated to providing a
              respectful, harassment-free community for everyone. We do not
              tolerate harassment or bullying of any community member in any
              form. This does not only extend to members to local Greater
              Hartford Python Group communities, but to anyone who chooses to
              become involved in the larger Greater Hartford Python Group
              community of users, developers and integrators through events or
              interactions.
            </p>
            <p className="text-lg leading-normal mb-4">
              Harassment includes offensive verbal/electronic comments related
              to personal characteristics or choices, sexual images or comments
              in public or online spaces, deliberate intimidation, bullying,
              stalking, following, harassing photography or recording, sustained
              disruption of talks, IRC chats, electronic meetings, physical
              meetings or other events, inappropriate physical contact, or
              unwelcome sexual attention. Participants asked to stop any
              harassing or bullying behavior are expected to comply immediately.
            </p>
            <p className="text-lg leading-normal mb-4">
              If a participant engages in harassing behavior, representatives of
              the community may take reasonable action they deem appropriate,
              including warning the offender, expulsion from any Greater
              Hartford Python Group event, or expulsion from mailing lists, IRC
              chats, discussion boards and other electronic communications
              channels to resolve the issue. This may include expulsion from
              Greater Hartford Python Group Meetup group membership.
            </p>
            <p className="text-lg leading-normal mb-4">
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please act to intercede or
              ask for help from any member of the Greater Hartford Python Group
              community, IRC chat admins, website admins, or
              organizers/representatives of any physical events put on under the
              auspices of Greater Hartford Python Group.
            </p>
            <p className="text-lg leading-normal mb-4">
              This Code of Conduct has been adapted from the{' '}
              <a href="http://plone.org/foundation/materials/foundation-resolutions/code-of-conduct">
                Plone Foundation
              </a>{' '}
              and is licensed under a{' '}
              <a href="http://creativecommons.org/licenses/by-sa/3.0/">
                Creative Commons Attribution-Share Alike 3.0 Unported license
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
