import { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import routes from 'routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import Particles from 'react-particles-js'

import Header from 'components/layouts/Header'
import Footer from 'components/layouts/Footer'
import SelectWalletModal from './SelectWalletModal'
import TerraExtensionDownModal from './TerraExtensionDownModal'
import BscExtensionDownModal from './BscExtensionDownModal'
import NotSupportNetworkModal from './NotSupportNetworkModal'
import NetworkErrorScreen from './NetworkErrorScreen'

import useApp from './useApp'
import useReloadOnNetworkChange from './useReloadOnNetworkChange'

const queryClient = new QueryClient()

const ParticlesBG = styled.div`
  overflow: hidden;
  div#tsparticles {
    position: fixed;
    z-index: -1 !important;
  }
`

const StyledContainer = styled.div`
  color: white;
  min-height: 100%;
  z-index: 9999 !important;
`

const App = (): ReactElement => {
  const [initComplete, setInitComplete] = useState(false)
  useReloadOnNetworkChange()

  const { initApp } = useApp()
  useEffect(() => {
    initApp().then(() => {
      setInitComplete(true)
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {initComplete && (
          <ParticlesBG>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 50,
                  },
                  size: {
                    value: 5,
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'repulse',
                    },
                  },
                },
              }}
            />
            <StyledContainer>
              <Header />
              {routes()}
              <Footer />
            </StyledContainer>
            <SelectWalletModal />
            <TerraExtensionDownModal />
            <BscExtensionDownModal />
            <NotSupportNetworkModal />
            <NetworkErrorScreen />
          </ParticlesBG>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
