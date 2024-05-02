import { getCards } from '@/remote/card'
import ListRow from '@shared/ListRow'
import { useInfiniteQuery } from 'react-query'
import { flatten } from 'lodash'
import { useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Badge from '@shared/Badge'
import { useNavigate } from 'react-router-dom'

function CardList() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      console.log('pageParam', pageParam)
      return getCards(pageParam)
    },
    {
      getNextPageParam: (snapshot) => {
        console.log('snapshot', snapshot)
        return snapshot.lastVisible
      },
    },
  )
  const navigate = useNavigate()

  const cards = flatten(data?.pages.map(({ items }) => items))

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }
    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  if (data == null) {
    return null
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        loader={<></>}
        next={loadMore}
        hasMore={hasNextPage}
        scrollThreshold="100px"
      >
        {cards.map((card, index) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.ListRowTexts
                  title={`${index + 1}위`}
                  subTitle={card.name}
                />
              }
              right={
                card.payback != null ? <Badge label={card.payback} /> : null
              }
              withArrow={true}
              onClick={() => {
                navigate(`/card/${card.id}`)
              }}
            />
          )
        })}
      </InfiniteScroll>
    </div>
  )
}

export default CardList
