import React from 'react'
import styled from 'styled-components'
import {
  Avatar,
  BackgroundImage,
  Box,
  Container,
  Flex,
  Heading,
  LargeButton as Button,
  Link as A,
  OutlineButton,
  Text,
  theme
} from '@hackclub/design-system'
import { Link } from 'gatsby'
import Layout from 'components/Layout'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Sheet from 'components/Sheet'
import GlowingIcon from 'components/GlowingIcon'
import {
  ColoredHeadline,
  Subhline,
  Featline,
  Lead,
  AnimatedHighlight
} from 'components/Content'
import { timeTo } from 'helpers'
import { springPromo } from 'data.json'
// import Announcement from 'components/home/Announcement'

const cta = {
  chevronRight: true,
  color: 'white',
  scale: true
}
const CTA = styled(Button.withComponent(Link)).attrs(cta)`
  background-image: ${theme.gradient('pink.5', 'red.6')};
`
const StartCTA = styled(Button.withComponent(Link)).attrs({
  ...cta,
  fontSize: [4, 5],
  px: [4, 5]
})`
  background-image: ${theme.gradient('orange.5', 'red.5')};
`
OutlineButton.link = OutlineButton.withComponent(Link)

const HeadlineIcon = styled(GlowingIcon)`
  top: ${theme.space[1]}px;
  ${theme.mediaQueries.md} {
    top: ${theme.space[2]}px;
    width: 64px;
    height: 64px;
  }
`
const SubhlineIcon = styled(GlowingIcon)`
  top: ${theme.space[1]}px;
  ${theme.mediaQueries.md} {
    top: ${theme.space[2]}px;
    width: 48px;
    height: 48px;
  }
`

/*
const Megaline = styled(Heading.h1).attrs({
  fontSize: [6, 7, 8],
  mx: 'auto'
})`
  line-height: 1.125;
  color: ${theme.colors.success};
  @supports (-webkit-background-clip: text) {
    background-image: linear-gradient(
      to bottom right,
      ${theme.colors.cyan[5]} 25%,
      ${theme.colors.teal[5]} 50%,
      ${theme.colors.green[5]}
    );
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${theme.mediaQueries.md} {
    line-height: 1;
  }
`
*/

const Quote = styled(Sheet).attrs({ maxWidth: 48, bg: 'primary', fontSize: 3 })`
  border-radius: ${theme.radii[2]};
  position: relative;
  ${GlowingIcon} {
    opacity: 0.75;
    position: absolute;
    left: 0;
    top: 0;
    ${theme.mediaQueries.md} {
      width: 32px;
      height: 32px;
    }
  }
`
const MegaQuote = styled(Quote).attrs({
  px: [3, 4, 5],
  pt: 6,
  pb: [4, 5],
  color: 'white'
})`
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    ${theme.colors.pink[5]},
    ${theme.colors.fuschia[5]},
    ${theme.colors.indigo[5]}
  );
  &:before {
    color: ${theme.colors.pink[2]};
  }
  ${Text} {
    line-height: 1.125;
    ${theme.mediaQueries.md} {
      line-height: 1.25;
    }
  }
`

const Features = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-gap: ${theme.space[4]}px;
    grid-template-columns: repeat(2, 1fr);
  }
`
const FeatureLine = styled(Box).attrs({
  bg: 'primary',
  width: 1,
  mt: 2,
  mb: -2
})`
  border-radius: ${theme.radius};
  height: 4px;
`
const Photo = styled(Sheet.withComponent(BackgroundImage)).attrs({
  role: 'img',
  p: 0
})`
  min-height: 18rem;
  position: relative;
  ${theme.mediaQueries.md} {
    min-height: 25rem;
  }
  &:after {
    content: attr(aria-label);
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.875);
    border-radius: 0 0 ${theme.radii[2]} ${theme.radii[2]};
    bottom: 0;
    color: ${theme.colors.white};
    display: block;
    font-size: ${theme.fontSizes[2]}px;
    padding: ${theme.space[2]}px ${theme.space[3]}px;
    position: absolute;
    width: 100%;
    max-width: 100%;
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      background-color: rgba(0, 0, 0, 0.75);
      -webkit-backdrop-filter: saturate(180%) blur(16px);
    }
    ${theme.mediaQueries.reduceTransparency} {
      -webkit-backdrop-filter: auto !important;
    }
  }
`
const CommunityLine = styled(FeatureLine)`
  background-image: linear-gradient(
    to right,
    ${theme.colors.orange[5]},
    ${theme.colors.pink[5]},
    ${theme.colors.red[5]}
  );
`
const ResourcesLine = styled(FeatureLine)`
  background-image: linear-gradient(
    to right,
    ${theme.colors.fuschia[5]},
    ${theme.colors.violet[5]},
    ${theme.colors.blue[5]}
  );
`

const Promo = styled(Box.withComponent('section')).attrs({
  bg: 'primary',
  align: 'center',
  pt: [4, 5, 6]
})`
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    rgb(26, 211, 191),
    rgb(17, 195, 109)
  );
`
const PromoMegaline = styled(Heading.h1).attrs({
  color: 'white',
  fontSize: [7, 8, 9],
  pb: 2
})`
  letter-spacing: -0.015em;
  line-height: 1;
  + ${Lead} {
    line-height: 1.25;
    letter-spacing: -0.005em;
  }
`

export default () => (
  <Layout bg="dark">
    <Box.main color="white">
      <Helmet>
        <meta
          name="google-site-verification"
          content="f7cxVyFnrTxN9Q-HnpP-ueNWuWF5VgIEKF0C3tSnsnc"
        />
      </Helmet>
      <Nav />
      <Promo>
        <Container maxWidth={72} px={3} py={[5, 6]}>
          <PromoMegaline mt={4} pb={1}>
            Start a coding club at your high&nbsp;school this spring.
          </PromoMegaline>
          <Lead
            fontSize={[3, 4, 5]}
            color="white"
            maxWidth={42}
            mt={[3, 4]}
            mb={[4, 5]}
          >
            Hack Club is a global, nonprofit network of high school coding
            clubs. Apply now for{' '}
            <strong>
              early&nbsp;admissions—open for {timeTo(springPromo.deadline)}
            </strong>
            .
          </Lead>
          {/* <OutlineButton.link bg="teal.1" to="/community" m={[1, 2]}>
            Join the community
          </OutlineButton.link> */}
          <StartCTA to="/start" m={[1, 2]}>
            Start your club
          </StartCTA>
        </Container>
      </Promo>
      <Box bg="white" color="black" align="center" py={[5, 6, 7]}>
        <Container px={3}>
          <ColoredHeadline
            fontSize={[6, 7, 8]}
            // colors={['green.5', 'teal.5', 'teal.7']}
            colors={['teal.6', 'cyan.6', 'blue.6']}
            mx="auto"
          />
          <Text fontSize={4} mb={3} mx="auto" style={{ maxWidth: '44rem' }}>
            We’re high schoolers running weekly afterschool coding clubs. For 2
            weeks, we’re running an exclusive campaign to help new&nbsp;
            <AnimatedHighlight>
              leaders start their clubs before the year ends
            </AnimatedHighlight>
            . You’ll learn a ton about leading your club, & be off to the races
            next fall.
          </Text>
          <OutlineButton.link to="/start" mt={3}>
            Start your club
          </OutlineButton.link>
          <Text
            fontSize={[1, 2]}
            color="slate"
            mt={3}
            mx="auto"
            style={{ maxWidth: '44rem' }}
          >
            Start a club, or bring yours—existing clubs are welcome too!
          </Text>
        </Container>
      </Box>
      <Box bg="snow" color="black" py={[5, 6, 7]}>
        <Container px={3}>
          <ColoredHeadline
            fontSize={[6, 7, 8]}
            colors={['orange.5', 'pink.5', 'red.5']}
          >
            Join an incredible global community&nbsp;of hackers.
            <HeadlineIcon
              glyph="like-fill"
              color="pink.5"
              aria-label="heart icon"
              size={36}
              ml={2}
              mt={-4}
            />
          </ColoredHeadline>
          <Text fontSize={4} mt={0} mb={3} style={{ maxWidth: '48rem' }}>
            Hack Club is an online community of thousands of other young makers.
            We’re artists, writers, tinkerers, filmmakers, volunteers.
            We&nbsp;make & learn together.{' '}
            <strong>You’ve found your place.</strong>
          </Text>
          <Text fontSize={4} mb={4} style={{ maxWidth: '48rem' }}>
            Have a coding question? Looking for project feedback? You’ll find
            some fabulous people to talk to in our global Slack (Discord-style
            online groupchat) with 3,000+ members, active at all hours.
          </Text>
          <CTA to="/community">Sign me up</CTA>
          <Features mt={[4, 5]}>
            <Box>
              <CommunityLine />
              <Featline mt={5}>Join forces with the best hackers.</Featline>
              <Lead color="slate">
                Making projects on your own can be isolating—we’ve been there.
                In the Slack community, you’ll find friends, supporters, and
                collaborators for your work.
              </Lead>
            </Box>
            <Box>
              <CommunityLine />
              <Featline mt={5}>Meet some truly incredible people.</Featline>
              <Lead color="slate">
                You’re going to meet super talented people, who organize
                hackathons, start coding clubs, build apps, lead camps, classes,
                and more.
              </Lead>
            </Box>
            <Photo
              src="/photos/dena_cover.jpg"
              aria-label="A Hack Club meeting near Toronto, Canada"
            />
            <Photo
              src="/photos/hackpenn_crew.jpg"
              aria-label="Organizers of PA’s largest high school hackathon met in our Slack"
            />
          </Features>
        </Container>
      </Box>
      <Box bg="white" color="black" py={[5, 6, 7]}>
        <Container px={3}>
          <ColoredHeadline
            fontSize={[6, 7, 8]}
            colors={['pink.5', 'fuschia.5', 'indigo.5']}
          >
            Grow as a programmer & human with our resources.
          </ColoredHeadline>
          <Text fontSize={4} mb={4} style={{ maxWidth: '48rem' }}>
            We offer of{' '}
            <A href="/workshops">free, open-source coding tutorials</A>. We
            write about{' '}
            <A
              target="_blank"
              href="https://medium.com/hackclub/how-to-start-a-computer-science-club-at-your-high-school-ff32264f225a"
            >
              running coding clubs
            </A>{' '}
            and hackathons. We run seasonal <A href="/challenge">Challenges</A>,
            themed coding competitions with cash prizes. We’re deeply committed
            to improving the world of high&nbsp;school hacking.
          </Text>
          <Features mt={[4, 5, 6]}>
            <Box>
              <ResourcesLine />
              <Subhline mt={5}>
                Learn as you build at hackathons & events.
              </Subhline>
              <Text color="slate" fontSize={4}>
                We maintain an open source, up-to-date list of all the{' '}
                <A href="https://hackathons.hackclub.com">
                  high school hackathons
                </A>{' '}
                happening soon. Check out all those events! (& totally go to
                one.)
              </Text>
            </Box>
            <Box>
              <ResourcesLine />
              <Subhline mt={5}>
                Running an event?
                <br />
                We can help.
                <SubhlineIcon
                  glyph="bank-circle"
                  color="red.5"
                  aria-label="hack club bank icon"
                  size={32}
                  ml={2}
                  mt={-2}
                />
              </Subhline>
              <Text color="slate" fontSize={4}>
                Running a hackathon is tough.{' '}
                <A href="/bank">Hack&nbsp;Club Bank</A> offers a straightforward
                financial platform for high school events.
              </Text>
            </Box>
          </Features>
          <MegaQuote mt={6}>
            <GlowingIcon glyph="quote" size={24} />
            <Text fontSize={[5, 6]} mt={[null, 5]} bold>
              Before I started Hack Club in sophomore year, I didn’t believe in
              myself. I didn’t think I could do big things.
            </Text>
            <Flex align="center" mt={[4, 5]}>
              <Avatar src="/hackers/megan.png" size={48} mr={3} />
              <Box align="left" fontSize={3}>
                <Text.span bold>Megan Cui</Text.span>, Cincinnati, OH
                <br />
                <Text fontSize={2} color="smoke">
                  (@megan on Slack)
                </Text>
              </Box>
            </Flex>
          </MegaQuote>
        </Container>
      </Box>
      <Footer />
    </Box.main>
  </Layout>
)
