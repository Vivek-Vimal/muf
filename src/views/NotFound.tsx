import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const Image = styled.div`
  width: 30rem;
  height: 20rem;
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: auto;
  }
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <Image>
        <img src='/e.gif' alt="" style={{height:"100%",width:"100%",borderRadius:"1rem"}} />
        </Image>
        <Heading size="xxl">404</Heading>
        <Text mb="16px">{TranslateString(999, 'Oops, page not found.')}</Text>
        <Button as="a" href="/" size="sm">
          {TranslateString(999, 'Back Home')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
