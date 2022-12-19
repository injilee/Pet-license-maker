import { getDatabase, onValue, ref, remove, set } from 'firebase/database';
import { off } from 'process';

class CardRepository {
  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/users/${card.id}`), card);
  }

  removeCard(userId, card) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/users/${card.id}`);
    return remove(cardRef);
  }

  getCard(userId, onUpdate) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/users`);
    onValue(cardRef, (snapshot) => {
      const data = snapshot.val();
      return data && onUpdate(data);
    });
    return () => off(cardRef);
  }
}

export default CardRepository;
