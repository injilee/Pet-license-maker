import { getDatabase, ref, remove, set } from 'firebase/database';

class CardRepository {
  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/cards/${card.id}`);
    return remove(cardRef);
  }
}

export default CardRepository;
