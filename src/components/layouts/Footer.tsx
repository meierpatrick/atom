import { ReactElement } from 'react'
import styled from 'styled-components'

import { STYLE } from 'consts'

import { ExtLink, Text, Row, View, Container } from 'components'

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 640px;
  padding: 28px 0;
  opacity: 0.5;
  @media ${STYLE.media.mobile} {
    width: auto;
    margin-top: 0;
    padding: 24px;
  }
`

const StyledText = styled(Text)`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
`

const Footer = (): ReactElement => {
  const community = [
    {
      href: `https://sharexchange.org`,
      title: 'Exchange',
    },
    {
      href: `https://patrickdevelopes.gitbook.io/share-atomic-swap/`,
      title: 'DOCS',
    },
    {
      href: `https://github.com/Immediatesolutionsorg`,
      title: 'Github',
    },
  ]
  return (
    <StyledContainer>
      <Row style={{ justifyContent: 'space-between', flex: 1 }}>
        <View>
          <StyledText>© Share Token.</StyledText>
        </View>
        <Row>
          {community.map(
            ({ href, title }) =>
              href && (
                <View key={title}>
                  <ExtLink
                    href={href}
                    style={{
                      paddingLeft: 30,
                      fontSize: 13,
                      textTransform: 'uppercase',
                    }}
                  >
                    <StyledText>{title}</StyledText>
                  </ExtLink>
                </View>
              )
          )}
        </Row>
      </Row>
    </StyledContainer>
  )
}

export default Footer
