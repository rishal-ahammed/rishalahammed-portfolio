import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojis = ['🎨', '🎮', '🎵', '🎬', '📱', '💻', '🎯', '🎪'];

const GameSection: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);
    
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      const [firstCard, secondCard] = newFlippedCards;
      
      if (cards[firstCard].emoji === cards[secondCard].emoji) {
        newCards[firstCard].isMatched = true;
        newCards[secondCard].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);
        setMatches(prev => prev + 1);
      } else {
        setTimeout(() => {
          newCards[firstCard].isFlipped = false;
          newCards[secondCard].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Take a <span className="text-primary-600 dark:text-primary-400">Break</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Challenge yourself with this memory game! Match all the pairs to win.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-700 dark:text-gray-300">Moves: {moves}</div>
            <button
              onClick={initializeGame}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300"
            >
              Reset Game
            </button>
            <div className="text-gray-700 dark:text-gray-300">Matches: {matches}/8</div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`aspect-square rounded-xl cursor-pointer transition-all duration-300 ${
                  card.isFlipped || card.isMatched
                    ? 'bg-primary-100 dark:bg-primary-900'
                    : 'bg-white dark:bg-gray-800'
                } shadow-md hover:shadow-lg flex items-center justify-center text-4xl`}
                onClick={() => handleCardClick(card.id)}
              >
                {(card.isFlipped || card.isMatched) && card.emoji}
              </motion.div>
            ))}
          </div>

          {matches === 8 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-4 bg-success-100 dark:bg-success-900 text-success-700 dark:text-success-300 rounded-lg text-center"
            >
              🎉 Congratulations! You won in {moves} moves!
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameSection;