import Top from '@shared/Top'
import AdBanners from '@components/home/AdBanners'
import CardList from '@/components/home/CardList'

function Homepages() {
  return (
    <div>
      <Top
        title="혜택이 좋은 카드"
        subTitle="회원님을 위해 혜택이 좋은카드를 모아봤어요"
      />
      <AdBanners />
      <CardList />
    </div>
  )
}
export default Homepages
