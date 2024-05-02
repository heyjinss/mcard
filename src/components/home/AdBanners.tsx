import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getAdBanners } from '@/remote/adBanner'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import { colors } from '@styles/colorPalette'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

function AdBanners() {
  const { data } = useQuery(['adBanners'], () => getAdBanners())
  console.log('data', data)
  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <Link to={banner.link}>
                <Flex direction="column" css={bannerContainerStyles}>
                  <Text bold={true}>{banner.title}배너 타이틀입니다</Text>
                  <Text typography="t7">
                    {banner.description}배너 내용입니다
                  </Text>
                </Flex>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px;
`
const bannerContainerStyles = css`
  padding: 16px;
  background-color: #8080803d;
  border-radius: 4px;
`

export default AdBanners
