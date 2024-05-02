import Button from '@shared/Button'
import { card_list } from '@/mock/data'
import { collection, doc, writeBatch } from 'firebase/firestore'
import { store } from '@remote/firebase'
import { COLLECTIONS } from '@/constants'

function CardListAddButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    card_list.forEach((card) => {
      const docRef = doc(collection(store, COLLECTIONS.CARD))
      batch.set(docRef, card)
    })

    await batch.commit()

    alert('카드리스트 추가완료')
  }
  return <Button onClick={handleButtonClick}>카드리스트 추가하기</Button>
}

export default CardListAddButton
