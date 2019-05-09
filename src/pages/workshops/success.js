import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, theme, Text, Container } from '@hackclub/design-system'
import Link from 'gatsby-link'

import Sheet from 'components/Sheet'
import IconButton from 'components/IconButton'
import search from 'search'

const SuccessContainer = styled(Flex).attrs({
  bg: 'snow',
  align: 'center',
  justify: 'center'
})`
  min-height: 100vh;

  div {
    height: fit-content;
    max-width: 42rem;
  }

  a svg {
    transform: rotate(180deg);
  }
`

export default class extends Component {
  state = {
    name: ''
  }

  componentDidMount() {
    const name = search
      .get('name')
      .replace(/-/g, ' ')
      .replace('draft ', '')
    if (name) {
      this.setState({ name })
    } else {
      window.location = '/workshops/drafts'
    }
  }

  render() {
    const { name } = this.state
    return (
      <SuccessContainer>
        <Sheet mx={4}>
          {/* replace with Icon component once new glyphs are published */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 17.5L16.5 5.5L16.5 14.5H21.5L15.5 26.5V17.5H10.5Z"
              stroke={theme.colors.success}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.8522 21.7261C26.5922 22.1341 26.4082 22.4861 26.2992 22.8151C26.2402 22.9901 26.2042 23.1591 26.1892 23.3261C26.1782 23.4421 26.1782 23.5581 26.1892 23.6741C26.2042 23.8411 26.2412 24.0101 26.2992 24.1871C26.4082 24.5151 26.5922 24.8661 26.8522 25.2741C26.8812 25.3201 26.9102 25.3661 26.9412 25.4121C27.1562 25.7391 26.7402 26.1561 26.4152 25.9411C26.3682 25.9101 26.3222 25.8801 26.2772 25.8511C25.8702 25.5901 25.5192 25.4051 25.1922 25.2961C25.0172 25.2371 24.8492 25.2011 24.6832 25.1861C24.5682 25.1751 24.4532 25.1751 24.3372 25.1861C24.1712 25.2011 24.0032 25.2371 23.8282 25.2961C23.5012 25.4051 23.1502 25.5901 22.7432 25.8511C22.6982 25.8801 22.6522 25.9101 22.6062 25.9411C22.2802 26.1561 21.8652 25.7391 22.0802 25.4121C22.1102 25.3651 22.1402 25.3201 22.1692 25.2741C22.4252 24.8711 22.6082 24.5231 22.7162 24.1981C22.7742 24.0241 22.8112 23.8571 22.8262 23.6921C22.8372 23.5691 22.8372 23.4481 22.8252 23.3251C22.8082 23.1601 22.7702 22.9931 22.7102 22.8191C22.5992 22.4961 22.4132 22.1501 22.1522 21.7491C22.1232 21.7041 22.0922 21.6591 22.0612 21.6131C21.8432 21.2881 22.2532 20.8661 22.5812 21.0781C22.6282 21.1081 22.6742 21.1381 22.7202 21.1661C23.1352 21.4261 23.4912 21.6091 23.8232 21.7161C24.0002 21.7731 24.1702 21.8081 24.3392 21.8211C24.4482 21.8301 24.5562 21.8301 24.6652 21.8201C24.8342 21.8051 25.0042 21.7691 25.1802 21.7101C25.5112 21.6001 25.8662 21.4131 26.2772 21.1491C26.3222 21.1201 26.3682 21.0901 26.4152 21.0591C26.7402 20.8441 27.1562 21.2611 26.9412 21.5881C26.9232 21.6151 26.9062 21.6411 26.8892 21.6671C26.8772 21.6871 26.8642 21.7061 26.8522 21.7261Z"
              stroke={theme.colors.green[4]}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.85216 6.72606C9.59216 7.13406 9.40816 7.48606 9.29916 7.81506C9.24016 7.99006 9.20416 8.15906 9.18916 8.32606C9.17816 8.44206 9.17816 8.55806 9.18916 8.67406C9.20416 8.84106 9.24116 9.01006 9.29916 9.18706C9.40816 9.51506 9.59216 9.86606 9.85216 10.2741C9.88116 10.3201 9.91016 10.3661 9.94116 10.4121C10.1562 10.7391 9.74016 11.1561 9.41516 10.9411C9.36816 10.9101 9.32216 10.8801 9.27716 10.8511C8.87016 10.5901 8.51916 10.4051 8.19216 10.2961C8.01716 10.2371 7.84915 10.2011 7.68316 10.1861C7.56816 10.1751 7.45316 10.1751 7.33716 10.1861C7.17116 10.2011 7.00316 10.2371 6.82816 10.2961C6.50116 10.4051 6.15016 10.5901 5.74316 10.8511C5.69816 10.8801 5.65216 10.9101 5.60616 10.9411C5.28016 11.1561 4.86516 10.7391 5.08016 10.4121C5.11016 10.3651 5.14016 10.3201 5.16916 10.2741C5.42516 9.87106 5.60816 9.52306 5.71616 9.19806C5.77416 9.02406 5.81116 8.85706 5.82616 8.69206C5.83716 8.56906 5.83716 8.44806 5.82516 8.32506C5.80816 8.16006 5.77016 7.99306 5.71016 7.81906C5.59916 7.49606 5.41316 7.15006 5.15216 6.74906C5.12316 6.70406 5.09216 6.65906 5.06116 6.61306C4.84316 6.28806 5.25316 5.86606 5.58116 6.07806C5.62816 6.10806 5.67416 6.13806 5.72016 6.16606C6.13516 6.42606 6.49116 6.60906 6.82316 6.71606C7.00016 6.77306 7.17016 6.80806 7.33916 6.82106C7.44816 6.83006 7.55616 6.83006 7.66516 6.82006C7.83416 6.80506 8.00416 6.76906 8.18016 6.71006C8.51116 6.60006 8.86616 6.41306 9.27716 6.14906C9.32216 6.12006 9.36816 6.09006 9.41516 6.05906C9.74016 5.84406 10.1562 6.26106 9.94116 6.58806C9.92316 6.61506 9.90616 6.64106 9.88916 6.66706C9.87716 6.68706 9.86416 6.70606 9.85216 6.72606Z"
              stroke={theme.colors.green[4]}
            />
          </svg>
          <Text fontSize={4} bold>
            Successfully submitted {name} for review!
          </Text>
          <Container style={{ maxWidth: 512 }}>
            <Text fontSize={3} color="muted">
              We’ll be in touch soon.
            </Text>
          </Container>
          <Link to="/workshops/drafts">
            <IconButton glyph="enter" mt={4}>
              Back to drafts
            </IconButton>
          </Link>
        </Sheet>
      </SuccessContainer>
    )
  }
}